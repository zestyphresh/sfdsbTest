var VIEW_HEADLINE_OPPS = (function($v) {

    $v.HeadlineOpportunityTimeline = function(args) {

        //PRIVATE VARS - SET
        var _args = args,
            _viewId = 'a0Lb0000006xVBq',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //PRIVATE VARS - NOT SET
        var tmlOpps, tblOppsConfirmed, tblOppsLikely, tblOppsOpen, tblOppsUnlikely, tblOppsLost;
        var tblOppSummary;
        var filterOwner;
        
        //INITIALISE MODELS
        function init(renderAfter) {
            
            _models['opps'] = new gblModel.HeadlineOpps;
            
            Q.all([_models.opps.fetch()]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //RENDER
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_uid}));
            
            //FILTERS
            filterOwner = $j('#' + _uid + '-filters-owner');
            filterOwner.find('ul').append(templates['combobox-item'](_models.opps.groups.owners.all()));
            
            filterSector = $j('#' + _uid + '-filters-sector');
            filterSector.find('ul').append(templates['combobox-item'](_models.opps.groups.sectors.all()));

            summary().render();
            oppsByStage().render();
            timeline().render();
            
            bindEvents();

        }
        
        //BIND EVENTS
        function bindEvents() {
            
            filterOwner.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.opps.dims.owner.filterAll();
                } else {
                    _models.opps.dims.owner.filterExact(selected.value);
                }
                
                update();
            });

            filterSector.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.opps.dims.sector.filterAll();
                } else {
                    _models.opps.dims.sector.filterExact(selected.value);
                }
                
                update();
            });

            function update() {
                summary().update();
                oppsByStage().update();
                timeline().update();
            }
            
            
            
        }
        
        //COMPONENT GROUPS
        //Components are grouped by the data they consume to avoid manipulating the same data multiple times
        
        //COMPONENT GROUP - SUMMARY
        function summary() {

            var _c = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value(), //current
                _p = _(_models.opps.groups.totalByStageCategoryPrevious.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value(), //previous
                _data = [];

            _.each(['Confirmed', 'Likely', 'Open', 'Unlikely', 'Lost'], function(d) {
                var result = {'stage' : d, 'headline' : _c[d].Headline, 'headlineVs' : _c[d].Headline - _p[d].Headline, 'threat' : _c[d].Threat, 'threatVs' : _c[d].Threat - _p[d].Threat};
                    result.total = result.headline - result.threat;
                    result.totalVs = result.headlineVs - result.threatVs;
                _data.push(result);
            });
            
            function render() {
                tblOppSummary = new TABLE.HeadlineOpportunitySummary(_uid + '-tables-opp-summary', _data);
            }
            
            function update() {
                tblOppSummary.reload(_data);
            }
            
            return { render : render, update : update };
        }
        
        //COMPONENT GROUP - OPPS BY STAGE
        function oppsByStage() {
            
            var _data = _(_models.opps.dims.dummy.top(Infinity)).groupBy(function(v) { return v.stageCategory; }).value();

            function render() {

                tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', _data.Confirmed);
                tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', _data.Likely);     
                tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', _data.Open);     
                tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', _data.Unlikely);     
                tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', _data.Lost);
                
            }
            
            function update() {
                
                tblOppsConfirmed.reload(_data.Confirmed);
                tblOppsLikely.reload(_data.Likely);     
                tblOppsOpen.reload(_data.Open);     
                tblOppsUnlikely.reload(_data.Unlikely);     
                tblOppsLost.reload(_data.Lost);
                   
            }
            
            return { render : render, update : update };
            
        }
        
        //COMPONENT GROUP - TIMELINE
        function timeline() {

            var _data = _models.opps.toTimeline(_.filter(_models.opps.dims.dummy.top(Infinity), {'stageCategory' : 'Confirmed'}));

            function render() {
                tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline', _data);
            }
            
            function update() {
                tmlOpps.reload(_data);
            }
            
            return { render : render, update : update };
        }
        
        return { 
            init : init,
            isLoaded : function() { return _loaded; },
            getUid : function() { return _uid; },
            render : render
        };
        
    };
    
    return $v;

})(VIEW);