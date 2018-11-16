/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ConvertJSONLD, IncomingService, KnoraConstants, OntologyCacheService, ResourceService } from '@knora/core';
/** @type {?} */
var jsonld = require('jsonld');
var ResourceViewComponent = /** @class */ (function () {
    function ResourceViewComponent(_resourceService, _cacheService, _incomingService) {
        this._resourceService = _resourceService;
        this._cacheService = _cacheService;
        this._incomingService = _incomingService;
        this.iri = 'http://rdfh.ch/8be1b7cf7103';
        this.KnoraConstants = KnoraConstants;
    }
    /**
     * @return {?}
     */
    ResourceViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getResource(this.iri);
    };
    /**
     * @param {?} iri
     * @return {?}
     */
    ResourceViewComponent.prototype.getResource = /**
     * @param {?} iri
     * @return {?}
     */
    function (iri) {
        var _this = this;
        this._resourceService.getResource(iri)
            .subscribe(function (result) {
            console.log('result: ', result.body);
            /** @type {?} */
            var promises = jsonld.promises;
            /** @type {?} */
            var promise = promises.compact(result.body, {});
            promise.then(function (compacted) {
                /** @type {?} */
                var resourceSeq = ConvertJSONLD.createReadResourcesSequenceFromJsonLD(compacted);
                // make sure that exactly one resource is returned
                if (resourceSeq.resources.length === 1) {
                    /** @type {?} */
                    var resourceClassIris = ConvertJSONLD.getResourceClassesFromJsonLD(compacted);
                    // request ontology information about resource class Iris (properties are implied)
                    // request ontology information about resource class Iris (properties are implied)
                    _this._cacheService.getResourceClassDefinitions(resourceClassIris).subscribe(function (resourceClassInfos) {
                        // initialize ontology information
                        // initialize ontology information
                        _this.ontologyInfo = resourceClassInfos; // console.log('initialization of ontologyInfo: ', this.ontologyInfo); > object received
                        // prepare a possibly attached image file to be displayed
                        // this.collectImagesAndRegionsForResource(resourceSeq.resources[0]);
                        // prepare a possibly attached image file to be displayed
                        // this.collectImagesAndRegionsForResource(resourceSeq.resources[0]);
                        _this.resource = resourceSeq.resources[0];
                        // console.log('resource: ', this.resource);
                        // this.requestIncomingResources();
                    }, function (err) {
                        console.log('cache request failed: ' + err);
                    });
                }
                else {
                    // exactly one resource was expected, but resourceSeq.resources.length != 1
                    // exactly one resource was expected, but resourceSeq.resources.length != 1
                    _this.errorMessage = "Exactly one resource was expected, but " + resourceSeq.resources.length + " resource(s) given.";
                }
            }, function (err) {
                console.error('JSONLD of full resource request could not be expanded:' + err);
            });
            // this.isLoading = false;
        }, function (error) {
            console.error(error);
            // this.errorMessage = <any>error;
            // this.isLoading = false;
        });
    };
    ResourceViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-resource-view',
                    template: "<mat-card>\n\n    <!-- TODO: switch through the media type -->\n    <kui-still-image></kui-still-image>\n    <kui-moving-image></kui-moving-image>\n    <kui-annotation></kui-annotation>\n    <kui-audio></kui-audio>\n    <kui-collection></kui-collection>\n    <kui-ddd></kui-ddd>\n    <kui-document></kui-document>\n    <kui-link-obj></kui-link-obj>\n    <kui-object></kui-object>\n    <kui-region></kui-region>\n    <kui-text></kui-text>\n\n    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>\n    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>\n\n    <div *ngFor=\"let prop of resource?.properties | key\">\n        <mat-list>\n            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>\n            <mat-list-item *ngFor=\"let val of prop.value\">\n                <span [ngSwitch]=\"val.getClassName()\">\n                    <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\" [valueObject]=\"val\"></kui-color-value>\n                    <kui-text-value-as-html *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"\n                        [bindEvents]=\"true\"></kui-text-value-as-html>\n                    <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\" [valueObject]=\"val\"></kui-text-value-as-string>\n                    <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\" [valueObject]=\"val\"></kui-text-value-as-xml>\n                    <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\"></kui-date-value>\n                    <kui-link-value *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"></kui-link-value>\n                    <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\" [valueObject]=\"val\"></kui-integer-value>\n                    <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\" [valueObject]=\"val\"></kui-decimal-value>\n                    <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\" [valueObject]=\"val\"></kui-geometry-value>\n                    <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                    <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\" [valueObject]=\"val\"></kui-boolean-value>\n                    <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\" [valueObject]=\"val\"></kui-interval-value>\n                    <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                    <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\" [valueObject]=\"val\"></kui-textfile-value>\n                    <span *ngSwitchDefault=\"\">Not supported {{val.getClassName()}}</span>\n                </span>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</mat-card>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ResourceViewComponent.ctorParameters = function () { return [
        { type: ResourceService },
        { type: OntologyCacheService },
        { type: IncomingService }
    ]; };
    ResourceViewComponent.propDecorators = {
        iri: [{ type: Input }]
    };
    return ResourceViewComponent;
}());
export { ResourceViewComponent };
if (false) {
    /** @type {?} */
    ResourceViewComponent.prototype.iri;
    /** @type {?} */
    ResourceViewComponent.prototype.ontologyInfo;
    /** @type {?} */
    ResourceViewComponent.prototype.resource;
    /** @type {?} */
    ResourceViewComponent.prototype.errorMessage;
    /** @type {?} */
    ResourceViewComponent.prototype.KnoraConstants;
    /** @type {?} */
    ResourceViewComponent.prototype._resourceService;
    /** @type {?} */
    ResourceViewComponent.prototype._cacheService;
    /** @type {?} */
    ResourceViewComponent.prototype._incomingService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Utdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFHTCxhQUFhLEVBRWIsZUFBZSxFQUNmLGNBQWMsRUFDZCxvQkFBb0IsRUFPcEIsZUFBZSxFQUdoQixNQUFNLGFBQWEsQ0FBQzs7QUFHckIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQThEL0IsK0JBQ1Usa0JBQ0EsZUFDQTtRQUZBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsa0JBQWEsR0FBYixhQUFhO1FBQ2IscUJBQWdCLEdBQWhCLGdCQUFnQjttQkFYSCw2QkFBNkI7OEJBTW5DLGNBQWM7S0FLaUI7Ozs7SUFFaEQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUI7Ozs7O0lBRU8sMkNBQVc7Ozs7Y0FBQyxHQUFXOztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNuQyxTQUFTLENBQ1IsVUFBQyxNQUF3QjtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ3JDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O1lBRWpDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVsRCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBUzs7Z0JBRXJCLElBQU0sV0FBVyxHQUEwQixhQUFhLENBQUMscUNBQXFDLENBQUMsU0FBUyxDQUFDLENBQUM7O2dCQUcxRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztvQkFHdkMsSUFBTSxpQkFBaUIsR0FBYSxhQUFhLENBQUMsNEJBQTRCLENBQUMsU0FBUyxDQUFDLENBQUM7O29CQUcxRixBQURBLGtGQUFrRjtvQkFDbEYsS0FBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsQ0FDekUsVUFBQyxrQkFBdUI7O3dCQUV0QixBQURBLGtDQUFrQzt3QkFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQzs7O3dCQUt2QyxBQUhBLHlEQUF5RDt3QkFDekQscUVBQXFFO3dCQUVyRSxLQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7OztxQkFJMUMsRUFDRCxVQUFDLEdBQUc7d0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxHQUFHLENBQUMsQ0FBQztxQkFDN0MsQ0FBQyxDQUFDO2lCQUNOO2dCQUFDLElBQUksQ0FBQyxDQUFDOztvQkFFTixBQURBLDJFQUEyRTtvQkFDM0UsS0FBSSxDQUFDLFlBQVksR0FBRyw0Q0FBMEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLHdCQUFxQixDQUFDO2lCQUNqSDthQUNGLEVBQUUsVUFBVSxHQUFHO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDL0UsQ0FBQyxDQUFDOztTQUVKLEVBQ0QsVUFBQyxLQUFzQjtZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7U0FHdEIsQ0FBQyxDQUFDOzs7Z0JBdkhWLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsbytGQTZDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztpQkFDN0U7Ozs7Z0JBekRDLGVBQWU7Z0JBUGYsb0JBQW9CO2dCQUZwQixlQUFlOzs7c0JBcUVkLEtBQUs7O2dDQTNFUjs7U0F5RWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXBpU2VydmljZUVycm9yLFxuICBBcGlTZXJ2aWNlUmVzdWx0LFxuICBDb252ZXJ0SlNPTkxELFxuICBJbWFnZVJlZ2lvbixcbiAgSW5jb21pbmdTZXJ2aWNlLFxuICBLbm9yYUNvbnN0YW50cyxcbiAgT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gIE9udG9sb2d5SW5mb3JtYXRpb24sXG4gIFJlYWRMaW5rVmFsdWUsXG4gIFJlYWRQcm9wZXJ0eUl0ZW0sXG4gIFJlYWRSZXNvdXJjZSxcbiAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgUmVzb3VyY2VTZXJ2aWNlLFxuICBTdGlsbEltYWdlUmVwcmVzZW50YXRpb24sXG4gIFV0aWxzXG59IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuZGVjbGFyZSBsZXQgcmVxdWlyZTogYW55O1xuY29uc3QganNvbmxkID0gcmVxdWlyZSgnanNvbmxkJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1yZXNvdXJjZS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG5cbiAgICA8IS0tIFRPRE86IHN3aXRjaCB0aHJvdWdoIHRoZSBtZWRpYSB0eXBlIC0tPlxuICAgIDxrdWktc3RpbGwtaW1hZ2U+PC9rdWktc3RpbGwtaW1hZ2U+XG4gICAgPGt1aS1tb3ZpbmctaW1hZ2U+PC9rdWktbW92aW5nLWltYWdlPlxuICAgIDxrdWktYW5ub3RhdGlvbj48L2t1aS1hbm5vdGF0aW9uPlxuICAgIDxrdWktYXVkaW8+PC9rdWktYXVkaW8+XG4gICAgPGt1aS1jb2xsZWN0aW9uPjwva3VpLWNvbGxlY3Rpb24+XG4gICAgPGt1aS1kZGQ+PC9rdWktZGRkPlxuICAgIDxrdWktZG9jdW1lbnQ+PC9rdWktZG9jdW1lbnQ+XG4gICAgPGt1aS1saW5rLW9iaj48L2t1aS1saW5rLW9iaj5cbiAgICA8a3VpLW9iamVjdD48L2t1aS1vYmplY3Q+XG4gICAgPGt1aS1yZWdpb24+PC9rdWktcmVnaW9uPlxuICAgIDxrdWktdGV4dD48L2t1aS10ZXh0PlxuXG4gICAgPGgyPm1ldGFkYXRhIGZvciByZXNvdXJjZSB7eyByZXNvdXJjZT8ubGFiZWx9fSAoe3sgcmVzb3VyY2U/LmlkIH19KTwvaDI+XG4gICAgPGgzPnR5cGU6IHt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclJlc291cmNlQ2xhc3MocmVzb3VyY2U/LnR5cGUpfX08L2gzPlxuXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgcHJvcCBvZiByZXNvdXJjZT8ucHJvcGVydGllcyB8IGtleVwiPlxuICAgICAgICA8bWF0LWxpc3Q+XG4gICAgICAgICAgICA8c3Bhbj57e29udG9sb2d5SW5mbz8uZ2V0TGFiZWxGb3JQcm9wZXJ0eShwcm9wLmtleSl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCB2YWwgb2YgcHJvcC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIFtuZ1N3aXRjaF09XCJ2YWwuZ2V0Q2xhc3NOYW1lKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1jb2xvci12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZENvbG9yVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktY29sb3ItdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy1odG1sICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNIdG1sXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiIFtvbnRvbG9neUluZm9dPVwib250b2xvZ3lJbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtiaW5kRXZlbnRzXT1cInRydWVcIj48L2t1aS10ZXh0LXZhbHVlLWFzLWh0bWw+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy1zdHJpbmcgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc1N0cmluZ1wiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0LXZhbHVlLWFzLXN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLXhtbCAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzWG1sXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHQtdmFsdWUtYXMteG1sPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWRhdGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREYXRlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZGF0ZS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1saW5rLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkTGlua1ZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiIFtvbnRvbG9neUluZm9dPVwib250b2xvZ3lJbmZvXCI+PC9rdWktbGluay12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1pbnRlZ2VyLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkSW50ZWdlclZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWludGVnZXItdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZGVjaW1hbC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZERlY2ltYWxWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1kZWNpbWFsLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWdlb21ldHJ5LXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkR2VvbVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWdlb21ldHJ5LXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXVyaS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFVyaVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXVyaS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1ib29sZWFuLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQm9vbGVhblZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWJvb2xlYW4tdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktaW50ZXJ2YWwtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRJbnRlcnZhbFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWludGVydmFsLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWxpc3QtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRMaXN0VmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktbGlzdC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0ZmlsZS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuVGV4dEZpbGVWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0ZmlsZS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoRGVmYXVsdD1cIlwiPk5vdCBzdXBwb3J0ZWQge3t2YWwuZ2V0Q2xhc3NOYW1lKCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDwvbWF0LWxpc3Q+XG4gICAgPC9kaXY+XG5cbjwvbWF0LWNhcmQ+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXJpOiBzdHJpbmcgPSAnaHR0cDovL3JkZmguY2gvOGJlMWI3Y2Y3MTAzJztcblxuICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247IC8vIG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIHdpdGggSXJpIGBpcmlgXG4gIHJlc291cmNlOiBSZWFkUmVzb3VyY2U7IC8vIHRoZSByZXNvdXJjZSB0byBiZSBkaXNwbGF5ZWRcbiAgZXJyb3JNZXNzYWdlOiBhbnk7XG5cbiAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZXNvdXJjZVNlcnZpY2U6IFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFJlc291cmNlKHRoaXMuaXJpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVzb3VyY2UoaXJpOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2UoaXJpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3VsdDogQXBpU2VydmljZVJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IGpzb25sZC5wcm9taXNlcztcbiAgICAgICAgICAvLyBjb21wYWN0IEpTT04tTEQgdXNpbmcgYW4gZW1wdHkgY29udGV4dDogZXhwYW5kcyBhbGwgSXJpc1xuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlcy5jb21wYWN0KHJlc3VsdC5ib2R5LCB7fSk7XG5cbiAgICAgICAgICBwcm9taXNlLnRoZW4oKGNvbXBhY3RlZCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZVNlcTogUmVhZFJlc291cmNlc1NlcXVlbmNlID0gQ29udmVydEpTT05MRC5jcmVhdGVSZWFkUmVzb3VyY2VzU2VxdWVuY2VGcm9tSnNvbkxEKGNvbXBhY3RlZCk7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGV4YWN0bHkgb25lIHJlc291cmNlIGlzIHJldHVybmVkXG4gICAgICAgICAgICBpZiAocmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAgIC8vIGdldCByZXNvdXJjZSBjbGFzcyBJcmlzIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VDbGFzc0lyaXM6IHN0cmluZ1tdID0gQ29udmVydEpTT05MRC5nZXRSZXNvdXJjZUNsYXNzZXNGcm9tSnNvbkxEKGNvbXBhY3RlZCk7XG5cbiAgICAgICAgICAgICAgLy8gcmVxdWVzdCBvbnRvbG9neSBpbmZvcm1hdGlvbiBhYm91dCByZXNvdXJjZSBjbGFzcyBJcmlzIChwcm9wZXJ0aWVzIGFyZSBpbXBsaWVkKVxuICAgICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UuZ2V0UmVzb3VyY2VDbGFzc0RlZmluaXRpb25zKHJlc291cmNlQ2xhc3NJcmlzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc291cmNlQ2xhc3NJbmZvczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIG9udG9sb2d5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICB0aGlzLm9udG9sb2d5SW5mbyA9IHJlc291cmNlQ2xhc3NJbmZvczsgLy8gY29uc29sZS5sb2coJ2luaXRpYWxpemF0aW9uIG9mIG9udG9sb2d5SW5mbzogJywgdGhpcy5vbnRvbG9neUluZm8pOyA+IG9iamVjdCByZWNlaXZlZFxuXG4gICAgICAgICAgICAgICAgICAvLyBwcmVwYXJlIGEgcG9zc2libHkgYXR0YWNoZWQgaW1hZ2UgZmlsZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29sbGVjdEltYWdlc0FuZFJlZ2lvbnNGb3JSZXNvdXJjZShyZXNvdXJjZVNlcS5yZXNvdXJjZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc291cmNlOiAnLCB0aGlzLnJlc291cmNlKTtcblxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZXF1ZXN0SW5jb21pbmdSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIHJlcXVlc3QgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0IHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggIT0gMVxuICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGBFeGFjdGx5IG9uZSByZXNvdXJjZSB3YXMgZXhwZWN0ZWQsIGJ1dCAke3Jlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGh9IHJlc291cmNlKHMpIGdpdmVuLmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSlNPTkxEIG9mIGZ1bGwgcmVzb3VyY2UgcmVxdWVzdCBjb3VsZCBub3QgYmUgZXhwYW5kZWQ6JyArIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBBcGlTZXJ2aWNlRXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAvLyB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3I7XG4gICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gIH1cblxufVxuIl19