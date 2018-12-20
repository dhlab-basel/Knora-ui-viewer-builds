import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ReadGeomValue, ReadResource, ReadStillImageFileValue, RegionGeometry } from '@knora/core';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
export declare class ImageRegion {
    readonly regionResource: ReadResource;
    /**
     *
     * @param regionResource a resource of type Region
     */
    constructor(regionResource: ReadResource);
    /**
     * Get all geometry information belonging to this region.
     *
     * @returns
     */
    getGeometries(): ReadGeomValue[];
}
/**
 * Represents an image including its regions.
 */
export declare class StillImageRepresentation {
    readonly stillImageFileValue: ReadStillImageFileValue;
    readonly regions: ImageRegion[];
    /**
     *
     * @param stillImageFileValue a [[ReadStillImageFileValue]] representing an image.
     * @param regions the regions belonging to the image.
     */
    constructor(stillImageFileValue: ReadStillImageFileValue, regions: ImageRegion[]);
}
/**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
export declare class RequestStillImageRepresentations {
    readonly offsetChange: number;
    readonly whenLoadedCB: (numberOfImages: number) => void;
    /**
     *
     * @param offsetChange the relative change of the offset in order to get more incoming StillImageRepresentations for the resource currently being displayed. Either 1 or -1.
     * @param whenLoadedCB a callback function that is called when more incoming StillImageRepresentations have been requested and the answer arrived from the server.
     */
    constructor(offsetChange: number, whenLoadedCB: (numberOfImages: number) => void);
}
/**
 * Represents a geometry belonging to a specific region.
 */
export declare class GeometryForRegion {
    readonly geometry: RegionGeometry;
    readonly region: ReadResource;
    /**
     *
     * @param geometry the geometrical information.
     * @param region the region the geometry belongs to.
     */
    constructor(geometry: RegionGeometry, region: ReadResource);
}
/**
 * This component creates a OpenSeadragon viewer instance.
 * Accepts an array of ReadResource containing (among other resources) ReadStillImageFileValues to be rendered.
 * @member resources - resources containing (among other resources) the StillImageFileValues and incoming regions to be rendered. (Use as angular @Input data binding property.)
 */
export declare class StillImageComponent implements OnInit, OnChanges, OnDestroy {
    private elementRef;
    images: StillImageRepresentation[];
    imageRangeStart: number;
    imageRangeEnd: number;
    imageChangeInterval: number;
    imageCaption?: string;
    getImages: EventEmitter<RequestStillImageRepresentations>;
    regionHovered: EventEmitter<string>;
    pagingLimit: number;
    private viewer;
    /**
     * Calculates the surface of a rectangular region.
     *
     * @param geom the region's geometry.
     * @returns the surface.
     */
    private static surfaceOfRectangularRegion;
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param imagesToDisplay the given file values to de displayed.
     * @returns the tile sources to be passed to OSD viewer.
     */
    private static prepareTileSourcesFromFileValues;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     */
    updateImages(): void;
    /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     */
    private gotoLeft;
    /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     */
    private gotoRight;
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     */
    updateRegions(): void;
    /**
     * Initializes the OpenSeadragon viewer
     */
    private setupViewer;
    /**
     * Adds all images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     */
    private openImages;
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     */
    private renderRegions;
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param regionIri the Iri of the region.
     * @param geometry - the geometry describing the ROI
     * @param aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param toolTip -  the tooltip which should be displayed on mousehover of the svg element
     */
    private createSVGOverlay;
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param geometry - the geometry describing the rectangle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    private addSVGAttributesRectangle;
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon')
     * @param geometry - the geometry describing the polygon
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    private addSVGAttributesPolygon;
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'circle')
     * @param geometry - the geometry describing the circle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    private addSVGAttributesCircle;
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param points - an array of points in coordinate system relative to an image
     * @param aspectRatio - the aspectRatio (h/w) of the image
     * @param xOffset - the x-offset in viewport coordinates of the image
     * @returns - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    private image2ViewPortCoords;
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param points - an array of points to be serialized to a string
     * @returns - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    private createSVGPolygonPointsAttribute;
}
