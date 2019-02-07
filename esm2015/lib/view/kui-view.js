export class KuiView {
    constructor(_route, _searchService, _searchParamsService, _router) {
        this._route = _route;
        this._searchService = _searchService;
        this._searchParamsService = _searchParamsService;
        this._router = _router;
        /**
         *
         * Converts search results from JSON-LD to a [[ReadResourcesSequence]] and requests information about ontology entities.
         * This function is passed to `subscribe` as a pointer (instead of redundantly defining the same lambda function).
         *
         * @param {ReadResourcesSequence} searchResult the answer to a search request.
         */
        this.processSearchResults = (searchResult) => {
            // assign ontology information to a variable so it can be used in the component's template
            if (this.ontologyInfo === undefined) {
                // init ontology information
                this.ontologyInfo = searchResult.ontologyInformation;
            }
            else {
                // update ontology information
                this.ontologyInfo.updateOntologyInformation(searchResult.ontologyInformation);
            }
            // append results to search results
            this.result = this.result.concat(searchResult.resources);
            this.isLoading = false;
            this.rerender = false;
        };
        /**
         * Shows total number of results returned by a count query.
         *
         * @param {ApiServiceResult} countQueryResult the response to a count query.
         */
        this.showNumberOfAllResults = (countQueryResult) => {
            this.numberOfAllResults = countQueryResult.numberOfResults;
            if (this.numberOfAllResults > 0) {
                // offset is 0-based
                // if numberOfAllResults equals the pagingLimit, the max. offset is 0
                this.maxOffset = Math.floor((this.numberOfAllResults - 1) / this.pagingLimit);
            }
            else {
                this.maxOffset = 0;
            }
        };
    }
    ngOnInit() {
        this.navigationSubscription = this._route.paramMap.subscribe((params) => {
            this.searchMode = params.get('mode');
            // init offset  and result
            this.offset = 0;
            this.result = [];
            if (this.searchMode === 'fulltext') {
                this.searchQuery = params.get('q');
            }
            else if (this.searchMode === 'extended') {
                this.gravsearchGenerator = this._searchParamsService.getSearchParams();
                this.generateGravsearchQuery();
            }
            this.rerender = true;
            this.getResult();
        });
    }
    ngOnDestroy() {
        if (this.navigationSubscription !== undefined) {
            this.navigationSubscription.unsubscribe();
        }
    }
    /**
     * Generates the Gravsearch query for the current offset.
     */
    generateGravsearchQuery() {
        const gravsearch = this.gravsearchGenerator.generateGravsearch(this.offset);
        if (gravsearch === false) {
            // no valid search params (application has been reloaded)
            // go to root
            this._router.navigate([''], { relativeTo: this._route });
            return;
        }
        else {
            this.searchQuery = gravsearch;
        }
    }
    /**
     * Get search result from Knora - 2 cases: simple search and extended search
     */
    getResult() {
        this.isLoading = true;
        // FULLTEXT SEARCH
        if (this.searchMode === 'fulltext') {
            if (this.offset === 0) {
                // perform count query
                this._searchService.doFullTextSearchCountQueryCountQueryResult(this.searchQuery)
                    .subscribe(this.showNumberOfAllResults, (error) => {
                    this.errorMessage = error;
                });
            }
            // perform full text search
            this._searchService.doFullTextSearchReadResourceSequence(this.searchQuery, this.offset)
                .subscribe(this.processSearchResults, // function pointer
            (error) => {
                this.errorMessage = error;
            });
            // EXTENDED SEARCH
        }
        else if (this.searchMode === 'extended') {
            // perform count query
            if (this.offset === 0) {
                this._searchService.doExtendedSearchCountQueryCountQueryResult(this.searchQuery)
                    .subscribe(this.showNumberOfAllResults, (error) => {
                    this.errorMessage = error;
                });
            }
            this._searchService.doExtendedSearchReadResourceSequence(this.searchQuery)
                .subscribe(this.processSearchResults, // function pointer
            (error) => {
                this.errorMessage = error;
            });
        }
        else {
            this.errorMessage = `search mode invalid: ${this.searchMode}`;
        }
    }
    /**
     * Loads the next page of results.
     * The results will be appended to the existing ones.
     *
     * @param {number} offset
     * @returns void
     */
    loadMore(offset) {
        // update the page offset when the end of scroll is reached to get the next page of search results
        if (this.offset < this.maxOffset) {
            this.offset++;
        }
        else {
            return;
        }
        if (this.searchMode === 'extended') {
            this.generateGravsearchQuery();
        }
        this.getResult();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3VpLXZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXcva3VpLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUEsTUFBTTtJQWlCRixZQUNjLE1BQXNCLEVBQ3RCLGNBQTZCLEVBQzdCLG9CQUF5QyxFQUN6QyxPQUFlO1FBSGYsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBa0c3Qjs7Ozs7O1dBTUc7UUFDSyx5QkFBb0IsR0FBRyxDQUFDLFlBQW1DLEVBQUUsRUFBRTtZQUVuRSwwRkFBMEY7WUFDMUYsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDakMsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQzthQUN4RDtpQkFBTTtnQkFDSCw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDakY7WUFDRCxtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUIsQ0FBQyxDQUFBO1FBRUQ7Ozs7V0FJRztRQUNLLDJCQUFzQixHQUFHLENBQUMsZ0JBQWtDLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1lBRTNELElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsRUFBRTtnQkFD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c3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gICAgQ291bnRRdWVyeVJlc3VsdCxcbiAgICBFeHRlbmRlZFNlYXJjaFBhcmFtcyxcbiAgICBLbm9yYUNvbnN0YW50cyxcbiAgICBPbnRvbG9neUNhY2hlU2VydmljZSxcbiAgICBPbnRvbG9neUluZm9ybWF0aW9uLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkUmVzb3VyY2VzU2VxdWVuY2UsXG4gICAgU2VhcmNoUGFyYW1zU2VydmljZSxcbiAgICBTZWFyY2hTZXJ2aWNlXG59IGZyb20gJ0Brbm9yYS9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgS3VpVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGFic3RyYWN0IG9mZnNldDogbnVtYmVyO1xuICAgIGFic3RyYWN0IG1heE9mZnNldDogbnVtYmVyO1xuICAgIGFic3RyYWN0IHJlc3VsdDogUmVhZFJlc291cmNlW107XG4gICAgYWJzdHJhY3Qgb250b2xvZ3lJbmZvOiBPbnRvbG9neUluZm9ybWF0aW9uO1xuICAgIGFic3RyYWN0IG5hdmlnYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBhYnN0cmFjdCBncmF2c2VhcmNoR2VuZXJhdG9yOiBFeHRlbmRlZFNlYXJjaFBhcmFtcztcbiAgICBhYnN0cmFjdCBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICAgIGFic3RyYWN0IHNlYXJjaE1vZGU6IHN0cmluZztcbiAgICBhYnN0cmFjdCBudW1iZXJPZkFsbFJlc3VsdHM6IG51bWJlcjtcbiAgICBhYnN0cmFjdCBLbm9yYUNvbnN0YW50czogS25vcmFDb25zdGFudHM7XG4gICAgYWJzdHJhY3QgcmVyZW5kZXI6IGJvb2xlYW47XG4gICAgYWJzdHJhY3QgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGVycm9yTWVzc2FnZTogYW55O1xuICAgIGFic3RyYWN0IHBhZ2luZ0xpbWl0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByb3RlY3RlZCBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9zZWFyY2hQYXJhbXNTZXJ2aWNlOiBTZWFyY2hQYXJhbXNTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuX3JvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTW9kZSA9IHBhcmFtcy5nZXQoJ21vZGUnKTtcblxuICAgICAgICAgICAgLy8gaW5pdCBvZmZzZXQgIGFuZCByZXN1bHRcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaE1vZGUgPT09ICdmdWxsdGV4dCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gcGFyYW1zLmdldCgncScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlYXJjaE1vZGUgPT09ICdleHRlbmRlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXZzZWFyY2hHZW5lcmF0b3IgPSB0aGlzLl9zZWFyY2hQYXJhbXNTZXJ2aWNlLmdldFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVHcmF2c2VhcmNoUXVlcnkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvblN1YnNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyB0aGUgR3JhdnNlYXJjaCBxdWVyeSBmb3IgdGhlIGN1cnJlbnQgb2Zmc2V0LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZW5lcmF0ZUdyYXZzZWFyY2hRdWVyeSgpIHtcblxuICAgICAgICBjb25zdCBncmF2c2VhcmNoOiBzdHJpbmcgfCBib29sZWFuID0gdGhpcy5ncmF2c2VhcmNoR2VuZXJhdG9yLmdlbmVyYXRlR3JhdnNlYXJjaCh0aGlzLm9mZnNldCk7XG4gICAgICAgIGlmIChncmF2c2VhcmNoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gbm8gdmFsaWQgc2VhcmNoIHBhcmFtcyAoYXBwbGljYXRpb24gaGFzIGJlZW4gcmVsb2FkZWQpXG4gICAgICAgICAgICAvLyBnbyB0byByb290XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycnXSwgeyByZWxhdGl2ZVRvOiB0aGlzLl9yb3V0ZSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSA8c3RyaW5nPmdyYXZzZWFyY2g7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIHJlc3VsdCBmcm9tIEtub3JhIC0gMiBjYXNlczogc2ltcGxlIHNlYXJjaCBhbmQgZXh0ZW5kZWQgc2VhcmNoXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlc3VsdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEZVTExURVhUIFNFQVJDSFxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RlID09PSAnZnVsbHRleHQnKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gY291bnQgcXVlcnlcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmRvRnVsbFRleHRTZWFyY2hDb3VudFF1ZXJ5Q291bnRRdWVyeVJlc3VsdCh0aGlzLnNlYXJjaFF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TnVtYmVyT2ZBbGxSZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBlcmZvcm0gZnVsbCB0ZXh0IHNlYXJjaFxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5kb0Z1bGxUZXh0U2VhcmNoUmVhZFJlc291cmNlU2VxdWVuY2UodGhpcy5zZWFyY2hRdWVyeSwgdGhpcy5vZmZzZXQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoUmVzdWx0cywgLy8gZnVuY3Rpb24gcG9pbnRlclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gRVhURU5ERUQgU0VBUkNIXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hNb2RlID09PSAnZXh0ZW5kZWQnKSB7XG4gICAgICAgICAgICAvLyBwZXJmb3JtIGNvdW50IHF1ZXJ5XG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmRvRXh0ZW5kZWRTZWFyY2hDb3VudFF1ZXJ5Q291bnRRdWVyeVJlc3VsdCh0aGlzLnNlYXJjaFF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TnVtYmVyT2ZBbGxSZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLmRvRXh0ZW5kZWRTZWFyY2hSZWFkUmVzb3VyY2VTZXF1ZW5jZSh0aGlzLnNlYXJjaFF1ZXJ5KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaFJlc3VsdHMsIC8vIGZ1bmN0aW9uIHBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYHNlYXJjaCBtb2RlIGludmFsaWQ6ICR7dGhpcy5zZWFyY2hNb2RlfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIENvbnZlcnRzIHNlYXJjaCByZXN1bHRzIGZyb20gSlNPTi1MRCB0byBhIFtbUmVhZFJlc291cmNlc1NlcXVlbmNlXV0gYW5kIHJlcXVlc3RzIGluZm9ybWF0aW9uIGFib3V0IG9udG9sb2d5IGVudGl0aWVzLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIGBzdWJzY3JpYmVgIGFzIGEgcG9pbnRlciAoaW5zdGVhZCBvZiByZWR1bmRhbnRseSBkZWZpbmluZyB0aGUgc2FtZSBsYW1iZGEgZnVuY3Rpb24pLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkUmVzb3VyY2VzU2VxdWVuY2V9IHNlYXJjaFJlc3VsdCB0aGUgYW5zd2VyIHRvIGEgc2VhcmNoIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHJpdmF0ZSBwcm9jZXNzU2VhcmNoUmVzdWx0cyA9IChzZWFyY2hSZXN1bHQ6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSkgPT4ge1xuXG4gICAgICAgIC8vIGFzc2lnbiBvbnRvbG9neSBpbmZvcm1hdGlvbiB0byBhIHZhcmlhYmxlIHNvIGl0IGNhbiBiZSB1c2VkIGluIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZVxuICAgICAgICBpZiAodGhpcy5vbnRvbG9neUluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gaW5pdCBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSBzZWFyY2hSZXN1bHQub250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8udXBkYXRlT250b2xvZ3lJbmZvcm1hdGlvbihzZWFyY2hSZXN1bHQub250b2xvZ3lJbmZvcm1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwZW5kIHJlc3VsdHMgdG8gc2VhcmNoIHJlc3VsdHNcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLnJlc3VsdC5jb25jYXQoc2VhcmNoUmVzdWx0LnJlc291cmNlcyk7XG5cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXJlbmRlciA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdG90YWwgbnVtYmVyIG9mIHJlc3VsdHMgcmV0dXJuZWQgYnkgYSBjb3VudCBxdWVyeS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXBpU2VydmljZVJlc3VsdH0gY291bnRRdWVyeVJlc3VsdCB0aGUgcmVzcG9uc2UgdG8gYSBjb3VudCBxdWVyeS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dOdW1iZXJPZkFsbFJlc3VsdHMgPSAoY291bnRRdWVyeVJlc3VsdDogQ291bnRRdWVyeVJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLm51bWJlck9mQWxsUmVzdWx0cyA9IGNvdW50UXVlcnlSZXN1bHQubnVtYmVyT2ZSZXN1bHRzO1xuXG4gICAgICAgIGlmICh0aGlzLm51bWJlck9mQWxsUmVzdWx0cyA+IDApIHtcbiAgICAgICAgICAgIC8vIG9mZnNldCBpcyAwLWJhc2VkXG4gICAgICAgICAgICAvLyBpZiBudW1iZXJPZkFsbFJlc3VsdHMgZXF1YWxzIHRoZSBwYWdpbmdMaW1pdCwgdGhlIG1heC4gb2Zmc2V0IGlzIDBcbiAgICAgICAgICAgIHRoaXMubWF4T2Zmc2V0ID0gTWF0aC5mbG9vcigodGhpcy5udW1iZXJPZkFsbFJlc3VsdHMgLSAxKSAvIHRoaXMucGFnaW5nTGltaXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXhPZmZzZXQgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLlxuICAgICAqIFRoZSByZXN1bHRzIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGV4aXN0aW5nIG9uZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGxvYWRNb3JlKG9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcGFnZSBvZmZzZXQgd2hlbiB0aGUgZW5kIG9mIHNjcm9sbCBpcyByZWFjaGVkIHRvIGdldCB0aGUgbmV4dCBwYWdlIG9mIHNlYXJjaCByZXN1bHRzXG4gICAgICAgIGlmICh0aGlzLm9mZnNldCA8IHRoaXMubWF4T2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kZSA9PT0gJ2V4dGVuZGVkJykge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYXZzZWFyY2hRdWVyeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRSZXN1bHQoKTtcbiAgICB9XG5cbn1cbiJdfQ==