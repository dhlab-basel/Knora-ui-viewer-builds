import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvertJSONLD, IncomingService, KnoraConstants, OntologyCacheService, ResourceService } from '@knora/core';
const jsonld = require('jsonld');
export class ResourceViewComponent {
    constructor(_route, _resourceService, _cacheService, _incomingService) {
        this._route = _route;
        this._resourceService = _resourceService;
        this._cacheService = _cacheService;
        this._incomingService = _incomingService;
        this.iri = 'http://rdfh.ch/8be1b7cf7103';
        this.KnoraConstants = KnoraConstants;
        const routeParams = this._route.snapshot.params;
        this.iri = routeParams.id;
    }
    ngOnInit() {
        this.getResource(this.iri);
    }
    getResource(iri) {
        this._resourceService.getResource(iri)
            .subscribe((result) => {
            console.log('result: ', result.body);
            const promises = jsonld.promises;
            // compact JSON-LD using an empty context: expands all Iris
            const promise = promises.compact(result.body, {});
            promise.then((compacted) => {
                const resourceSeq = ConvertJSONLD.createReadResourcesSequenceFromJsonLD(compacted);
                // make sure that exactly one resource is returned
                if (resourceSeq.resources.length === 1) {
                    // get resource class Iris from response
                    const resourceClassIris = ConvertJSONLD.getResourceClassesFromJsonLD(compacted);
                    // request ontology information about resource class Iris (properties are implied)
                    this._cacheService.getResourceClassDefinitions(resourceClassIris).subscribe((resourceClassInfos) => {
                        // initialize ontology information
                        this.ontologyInfo = resourceClassInfos; // console.log('initialization of ontologyInfo: ', this.ontologyInfo); > object received
                        // prepare a possibly attached image file to be displayed
                        // this.collectImagesAndRegionsForResource(resourceSeq.resources[0]);
                        this.resource = resourceSeq.resources[0];
                        // console.log('resource: ', this.resource);
                        // this.requestIncomingResources();
                    }, (err) => {
                        console.log('cache request failed: ' + err);
                    });
                }
                else {
                    // exactly one resource was expected, but resourceSeq.resources.length != 1
                    this.errorMessage = `Exactly one resource was expected, but ${resourceSeq.resources.length} resource(s) given.`;
                }
            }, function (err) {
                console.error('JSONLD of full resource request could not be expanded:' + err);
            });
            // this.isLoading = false;
        }, (error) => {
            console.error(error);
            // this.errorMessage = <any>error;
            // this.isLoading = false;
        });
    }
}
ResourceViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-resource-view',
                template: `<mat-card>

    <!-- TODO: switch through the media type -->
    <kui-still-image></kui-still-image>
    <kui-moving-image></kui-moving-image>
    <kui-annotation></kui-annotation>
    <kui-audio></kui-audio>
    <kui-collection></kui-collection>
    <kui-ddd></kui-ddd>
    <kui-document></kui-document>
    <kui-link-obj></kui-link-obj>
    <kui-object></kui-object>
    <kui-region></kui-region>
    <kui-text></kui-text>

    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>
    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>

    <div *ngFor="let prop of resource?.properties | kuiKey">
        <mat-list>
            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>
            <mat-list-item *ngFor="let val of prop.value">
                <span [ngSwitch]="val.getClassName()">
                    <kui-color-value *ngSwitchCase="KnoraConstants.ReadColorValue" [valueObject]="val"></kui-color-value>
                    <kui-text-value-as-html *ngSwitchCase="KnoraConstants.ReadTextValueAsHtml" [valueObject]="val" [ontologyInfo]="ontologyInfo" [bindEvents]="true"></kui-text-value-as-html>
                    <kui-text-value-as-string *ngSwitchCase="KnoraConstants.ReadTextValueAsString" [valueObject]="val"></kui-text-value-as-string>
                    <kui-text-value-as-xml *ngSwitchCase="KnoraConstants.ReadTextValueAsXml" [valueObject]="val"></kui-text-value-as-xml>
                    <kui-date-value *ngSwitchCase="KnoraConstants.ReadDateValue" [valueObject]="val"></kui-date-value>
                    <kui-link-value *ngSwitchCase="KnoraConstants.ReadLinkValue" [valueObject]="val" [ontologyInfo]="ontologyInfo"></kui-link-value>
                    <kui-integer-value *ngSwitchCase="KnoraConstants.ReadIntegerValue" [valueObject]="val"></kui-integer-value>
                    <kui-decimal-value *ngSwitchCase="KnoraConstants.ReadDecimalValue" [valueObject]="val"></kui-decimal-value>
                    <kui-geometry-value *ngSwitchCase="KnoraConstants.ReadGeomValue" [valueObject]="val"></kui-geometry-value>
                    <kui-uri-value *ngSwitchCase="KnoraConstants.ReadUriValue" [valueObject]="val"></kui-uri-value>
                    <kui-boolean-value *ngSwitchCase="KnoraConstants.ReadBooleanValue" [valueObject]="val"></kui-boolean-value>
                    <kui-interval-value *ngSwitchCase="KnoraConstants.ReadIntervalValue" [valueObject]="val"></kui-interval-value>
                    <kui-list-value *ngSwitchCase="KnoraConstants.ReadListValue" [valueObject]="val"></kui-list-value>
                    <kui-textfile-value *ngSwitchCase="KnoraConstants.TextFileValue" [valueObject]="val"></kui-textfile-value>
                    <span *ngSwitchDefault="">Not supported {{val.getClassName()}}</span>
                </span>
            </mat-list-item>
        </mat-list>
    </div>

</mat-card>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
ResourceViewComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: ResourceService },
    { type: OntologyCacheService },
    { type: IncomingService }
];
ResourceViewComponent.propDecorators = {
    iri: [{ type: Input }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2Utdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUdILGFBQWEsRUFDYixlQUFlLEVBQ2YsY0FBYyxFQUNkLG9CQUFvQixFQUlwQixlQUFlLEVBQ2xCLE1BQU0sYUFBYSxDQUFDO0FBR3JCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQWtEakMsTUFBTTtJQVVGLFlBQW9CLE1BQXNCLEVBQ3RCLGdCQUFpQyxFQUNqQyxhQUFtQyxFQUNuQyxnQkFBaUM7UUFIakMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVg1QyxRQUFHLEdBQVksNkJBQTZCLENBQUM7UUFNdEQsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFPNUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyxXQUFXLENBQUMsR0FBVztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNqQyxTQUFTLENBQ04sQ0FBQyxNQUF3QixFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDakMsMkRBQTJEO1lBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVsRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBRXZCLE1BQU0sV0FBVyxHQUEwQixhQUFhLENBQUMscUNBQXFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRTFHLGtEQUFrRDtnQkFDbEQsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBRXBDLHdDQUF3QztvQkFDeEMsTUFBTSxpQkFBaUIsR0FBYSxhQUFhLENBQUMsNEJBQTRCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTFGLGtGQUFrRjtvQkFDbEYsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFNBQVMsQ0FDdkUsQ0FBQyxrQkFBdUIsRUFBRSxFQUFFO3dCQUN4QixrQ0FBa0M7d0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyx3RkFBd0Y7d0JBRWhJLHlEQUF5RDt3QkFDekQscUVBQXFFO3dCQUVyRSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLDRDQUE0Qzt3QkFFNUMsbUNBQW1DO29CQUN2QyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFFSixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUMsQ0FBQztpQkFDVjtxQkFBTTtvQkFDSCwyRUFBMkU7b0JBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUcsMENBQTBDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxxQkFBcUIsQ0FBQztpQkFDbkg7WUFDTCxDQUFDLEVBQUUsVUFBVSxHQUFHO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEYsQ0FBQyxDQUFDLENBQUM7WUFDSCwwQkFBMEI7UUFDOUIsQ0FBQyxFQUNELENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsa0NBQWtDO1lBQ2xDLDBCQUEwQjtRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7OztZQTNISixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkNGO2dCQUNSLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQy9FOzs7O1lBaEVRLGNBQWM7WUFXbkIsZUFBZTtZQUpmLG9CQUFvQjtZQUZwQixlQUFlOzs7a0JBOERkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gICAgQXBpU2VydmljZUVycm9yLFxuICAgIEFwaVNlcnZpY2VSZXN1bHQsXG4gICAgQ29udmVydEpTT05MRCxcbiAgICBJbmNvbWluZ1NlcnZpY2UsXG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICAgIFJlc291cmNlU2VydmljZVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmRlY2xhcmUgbGV0IHJlcXVpcmU6IGFueTtcbmNvbnN0IGpzb25sZCA9IHJlcXVpcmUoJ2pzb25sZCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1yZXNvdXJjZS12aWV3JyxcbiAgICB0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cblxuICAgIDwhLS0gVE9ETzogc3dpdGNoIHRocm91Z2ggdGhlIG1lZGlhIHR5cGUgLS0+XG4gICAgPGt1aS1zdGlsbC1pbWFnZT48L2t1aS1zdGlsbC1pbWFnZT5cbiAgICA8a3VpLW1vdmluZy1pbWFnZT48L2t1aS1tb3ZpbmctaW1hZ2U+XG4gICAgPGt1aS1hbm5vdGF0aW9uPjwva3VpLWFubm90YXRpb24+XG4gICAgPGt1aS1hdWRpbz48L2t1aS1hdWRpbz5cbiAgICA8a3VpLWNvbGxlY3Rpb24+PC9rdWktY29sbGVjdGlvbj5cbiAgICA8a3VpLWRkZD48L2t1aS1kZGQ+XG4gICAgPGt1aS1kb2N1bWVudD48L2t1aS1kb2N1bWVudD5cbiAgICA8a3VpLWxpbmstb2JqPjwva3VpLWxpbmstb2JqPlxuICAgIDxrdWktb2JqZWN0Pjwva3VpLW9iamVjdD5cbiAgICA8a3VpLXJlZ2lvbj48L2t1aS1yZWdpb24+XG4gICAgPGt1aS10ZXh0Pjwva3VpLXRleHQ+XG5cbiAgICA8aDI+bWV0YWRhdGEgZm9yIHJlc291cmNlIHt7IHJlc291cmNlPy5sYWJlbH19ICh7eyByZXNvdXJjZT8uaWQgfX0pPC9oMj5cbiAgICA8aDM+dHlwZToge3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUmVzb3VyY2VDbGFzcyhyZXNvdXJjZT8udHlwZSl9fTwvaDM+XG5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIHJlc291cmNlPy5wcm9wZXJ0aWVzIHwga3VpS2V5XCI+XG4gICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgIDxzcGFuPnt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclByb3BlcnR5KHByb3Aua2V5KX19PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IHZhbCBvZiBwcm9wLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZhbC5nZXRDbGFzc05hbWUoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWNvbG9yLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQ29sb3JWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1jb2xvci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLWh0bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc0h0bWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIiBbYmluZEV2ZW50c109XCJ0cnVlXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1odG1sPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNTdHJpbmdcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1zdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy14bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc1htbFwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0LXZhbHVlLWFzLXhtbD5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1kYXRlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGF0ZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWRhdGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktbGluay12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZExpbmtWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiPjwva3VpLWxpbmstdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktaW50ZWdlci12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEludGVnZXJWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlZ2VyLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWRlY2ltYWwtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREZWNpbWFsVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZGVjaW1hbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1nZW9tZXRyeS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEdlb21WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1nZW9tZXRyeS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS11cmktdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRVcmlWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS11cmktdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktYm9vbGVhbi12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEJvb2xlYW5WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1ib29sZWFuLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWludGVydmFsLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkSW50ZXJ2YWxWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlcnZhbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1saXN0LXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkTGlzdFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWxpc3QtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dGZpbGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlRleHRGaWxlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dGZpbGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ9XCJcIj5Ob3Qgc3VwcG9ydGVkIHt7dmFsLmdldENsYXNzTmFtZSgpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICA8L21hdC1saXN0PlxuICAgIDwvZGl2PlxuXG48L21hdC1jYXJkPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXJpPzogc3RyaW5nID0gJ2h0dHA6Ly9yZGZoLmNoLzhiZTFiN2NmNzEwMyc7XG5cbiAgICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247IC8vIG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIHdpdGggSXJpIGBpcmlgXG4gICAgcmVzb3VyY2U6IFJlYWRSZXNvdXJjZTsgLy8gdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZFxuICAgIGVycm9yTWVzc2FnZTogYW55O1xuXG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXNvdXJjZVNlcnZpY2U6IFJlc291cmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbXMgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgIHRoaXMuaXJpID0gcm91dGVQYXJhbXMuaWQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZSh0aGlzLmlyaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNvdXJjZShpcmk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2UoaXJpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBBcGlTZXJ2aWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBqc29ubGQucHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBhY3QgSlNPTi1MRCB1c2luZyBhbiBlbXB0eSBjb250ZXh0OiBleHBhbmRzIGFsbCBJcmlzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlcy5jb21wYWN0KHJlc3VsdC5ib2R5LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChjb21wYWN0ZWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VTZXE6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSA9IENvbnZlcnRKU09OTEQuY3JlYXRlUmVhZFJlc291cmNlc1NlcXVlbmNlRnJvbUpzb25MRChjb21wYWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBleGFjdGx5IG9uZSByZXNvdXJjZSBpcyByZXR1cm5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCByZXNvdXJjZSBjbGFzcyBJcmlzIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZUNsYXNzSXJpczogc3RyaW5nW10gPSBDb252ZXJ0SlNPTkxELmdldFJlc291cmNlQ2xhc3Nlc0Zyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3MgSXJpcyAocHJvcGVydGllcyBhcmUgaW1wbGllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UuZ2V0UmVzb3VyY2VDbGFzc0RlZmluaXRpb25zKHJlc291cmNlQ2xhc3NJcmlzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNvdXJjZUNsYXNzSW5mb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSByZXNvdXJjZUNsYXNzSW5mb3M7IC8vIGNvbnNvbGUubG9nKCdpbml0aWFsaXphdGlvbiBvZiBvbnRvbG9neUluZm86ICcsIHRoaXMub250b2xvZ3lJbmZvKTsgPiBvYmplY3QgcmVjZWl2ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSBhIHBvc3NpYmx5IGF0dGFjaGVkIGltYWdlIGZpbGUgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UocmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlU2VxLnJlc291cmNlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvdXJjZTogJywgdGhpcy5yZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVxdWVzdEluY29taW5nUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIHJlcXVlc3QgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0IHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggIT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0ICR7cmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aH0gcmVzb3VyY2UocykgZ2l2ZW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSlNPTkxEIG9mIGZ1bGwgcmVzb3VyY2UgcmVxdWVzdCBjb3VsZCBub3QgYmUgZXhwYW5kZWQ6JyArIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yOiBBcGlTZXJ2aWNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==