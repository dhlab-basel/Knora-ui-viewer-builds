import { OnInit } from '@angular/core';
import { IncomingService, KnoraConstants, OntologyCacheService, OntologyInformation, ReadResource, ResourceService } from '@knora/core';
export declare class ResourceViewComponent implements OnInit {
    private _resourceService;
    private _cacheService;
    private _incomingService;
    iri: string;
    ontologyInfo: OntologyInformation;
    resource: ReadResource;
    errorMessage: any;
    KnoraConstants: typeof KnoraConstants;
    constructor(_resourceService: ResourceService, _cacheService: OntologyCacheService, _incomingService: IncomingService);
    ngOnInit(): void;
    private getResource(iri);
}
