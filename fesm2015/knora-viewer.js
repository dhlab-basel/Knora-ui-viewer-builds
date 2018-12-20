import { Component, ElementRef, EventEmitter, Input, Output, HostListener, NgModule } from '@angular/core';
import { KnoraConstants, Point2D, DateRangeSalsah, Precision, ConvertJSONLD, IncomingService, OntologyCacheService, ResourceService, KuiCoreModule } from '@knora/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { KuiActionModule } from '@knora/action';

class AnnotationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnnotationComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-annotation',
                template: `<p>
  annotation works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
AnnotationComponent.ctorParameters = () => [];

class AudioComponent {
    constructor() { }
    ngOnInit() {
    }
}
AudioComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-audio',
                template: `<p>
  audio works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
AudioComponent.ctorParameters = () => [];

class CollectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-collection',
                template: `<p>
  collection works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
CollectionComponent.ctorParameters = () => [];

class DddComponent {
    constructor() { }
    ngOnInit() {
    }
}
DddComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-ddd',
                template: `<p>
  ddd works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DddComponent.ctorParameters = () => [];

class DocumentComponent {
    constructor() { }
    ngOnInit() {
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-document',
                template: `<p>
  document works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [];

class LinkObjComponent {
    constructor() { }
    ngOnInit() {
    }
}
LinkObjComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-link-obj',
                template: `<p>
  link-obj works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
LinkObjComponent.ctorParameters = () => [];

class MovingImageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovingImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-moving-image',
                template: `<p>
  moving-image works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
MovingImageComponent.ctorParameters = () => [];

class ObjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
ObjectComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-object',
                template: `<p>
  object works!
</p>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ObjectComponent.ctorParameters = () => [];

class RegionComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegionComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-region',
                template: `<p>
  region works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
RegionComponent.ctorParameters = () => [];

/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
class ImageRegion {
    /**
     *
     * @param regionResource a resource of type Region
     */
    constructor(regionResource) {
        this.regionResource = regionResource;
    }
    /**
     * Get all geometry information belonging to this region.
     *
     * @returns
     */
    getGeometries() {
        return this.regionResource.properties[KnoraConstants.hasGeometry];
    }
}
/**
 * Represents an image including its regions.
 */
class StillImageRepresentation {
    /**
     *
     * @param stillImageFileValue a [[ReadStillImageFileValue]] representing an image.
     * @param regions the regions belonging to the image.
     */
    constructor(stillImageFileValue, regions) {
        this.stillImageFileValue = stillImageFileValue;
        this.regions = regions;
    }
}
/**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
class RequestStillImageRepresentations {
    /**
     *
     * @param offsetChange the relative change of the offset in order to get more incoming StillImageRepresentations for the resource currently being displayed. Either 1 or -1.
     * @param whenLoadedCB a callback function that is called when more incoming StillImageRepresentations have been requested and the answer arrived from the server.
     */
    constructor(offsetChange, whenLoadedCB) {
        this.offsetChange = offsetChange;
        this.whenLoadedCB = whenLoadedCB;
    }
}
/**
 * Represents a geometry belonging to a specific region.
 */
class GeometryForRegion {
    /**
     *
     * @param geometry the geometrical information.
     * @param region the region the geometry belongs to.
     */
    constructor(geometry, region) {
        this.geometry = geometry;
        this.region = region;
    }
}
/**
 * This component creates a OpenSeadragon viewer instance.
 * Accepts an array of ReadResource containing (among other resources) ReadStillImageFileValues to be rendered.
 * @member resources - resources containing (among other resources) the StillImageFileValues and incoming regions to be rendered. (Use as angular @Input data binding property.)
 */
class StillImageComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.getImages = new EventEmitter(); // sends a message to the parent component (object.component) to load the next or previous page of results (images) from the server
        this.regionHovered = new EventEmitter();
        // the paging limit should be defined in the configuration of the app
        this.pagingLimit = 25;
    }
    /**
     * Calculates the surface of a rectangular region.
     *
     * @param geom the region's geometry.
     * @returns the surface.
     */
    static surfaceOfRectangularRegion(geom) {
        if (geom.type !== 'rectangle') {
            console.log('expected rectangular region, but ' + geom.type + ' given');
            return 0;
        }
        const w = Math.max(geom.points[0].x, geom.points[1].x) - Math.min(geom.points[0].x, geom.points[1].x);
        const h = Math.max(geom.points[0].y, geom.points[1].y) - Math.min(geom.points[0].y, geom.points[1].y);
        return w * h;
    }
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param imagesToDisplay the given file values to de displayed.
     * @returns the tile sources to be passed to OSD viewer.
     */
    static prepareTileSourcesFromFileValues(imagesToDisplay) {
        let imageXOffset = 0;
        let imageYOffset = 0;
        const tileSources = [];
        for (const image of imagesToDisplay) {
            const sipiBasePath = image.imageServerIIIFBaseURL + '/' + image.imageFilename;
            const width = image.dimX;
            const height = image.dimY;
            // construct OpenSeadragon tileSources according to https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html#open
            tileSources.push({
                // construct IIIF tileSource configuration according to
                // http://iiif.io/api/image/2.1/#technical-properties
                // see also http://iiif.io/api/image/2.0/#a-implementation-notes
                'tileSource': {
                    '@context': 'http://iiif.io/api/image/2/context.json',
                    '@id': sipiBasePath,
                    'height': height,
                    'width': width,
                    'profile': ['http://iiif.io/api/image/2/level2.json'],
                    'protocol': 'http://iiif.io/api/image',
                    'tiles': [{
                            'scaleFactors': [1, 2, 4, 8, 16, 32],
                            'width': 1024
                        }]
                },
                'x': imageXOffset,
                'y': imageYOffset
            });
            imageXOffset++;
            // 5 images per row
            /*
            if (imageXOffset % 5 === 0) {
                imageYOffset += 2;
                imageXOffset = 0;
            }*/
        }
        return tileSources;
    }
    ngOnChanges(changes) {
        if (changes['images'] && changes['images'].isFirstChange()) {
            this.setupViewer();
        }
        if (changes['images']) {
            this.openImages();
            this.renderRegions();
        }
    }
    ngOnInit() {
        // initialisation is done on first run of ngOnChanges
    }
    ngOnDestroy() {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = undefined;
        }
    }
    /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     */
    updateImages() {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.openImages();
    }
    /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     */
    gotoLeft() {
        // TODO: move left on this.images
        // TODO: if necessary, request more images from the server
        if (this.imageRangeStart - this.imageChangeInterval >= 0) {
            // this.images has more images to display
            this.imageRangeStart -= this.imageChangeInterval;
            this.imageRangeEnd -= this.imageChangeInterval;
            this.openImages();
            this.renderRegions();
        }
        else if (this.imageRangeStart > 0) {
            // fewer remaining images than interval, show remaining images
            this.imageRangeEnd -= this.imageRangeStart;
            this.imageRangeStart = 0;
            this.openImages();
            this.renderRegions();
        }
    }
    /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     */
    gotoRight() {
        if (this.imageRangeEnd < this.images.length - 1) {
            // this.images has more images to display
            if (this.imageRangeEnd + this.imageChangeInterval < this.images.length) {
                // the whole next interval can be displayed
                console.log(`display next interval`);
                this.imageRangeStart += this.imageChangeInterval;
                this.imageRangeEnd += this.imageChangeInterval;
            }
            else {
                console.log(`display remaining images`);
                // less than the interval can be displayed just display remaining images
                const remainingDiff = this.images.length - this.imageRangeEnd + 1;
                this.imageRangeStart += remainingDiff;
                this.imageRangeEnd += remainingDiff;
                // TODO: deactivate next button
            }
            this.openImages();
            this.renderRegions();
        }
        else if (this.images.length % this.pagingLimit === 0) { // paging always returned full result lists, so there could be more data to fetch
            console.log(`request more images`);
            // this.images cannot display more images of length interval
            // request more images from the server using a positive offset
            // function called when parent component loaded new images
            const callback = (numberOfImages) => {
                if (numberOfImages >= this.imageChangeInterval) {
                    // more images were loaded than are actually to be displayed
                    this.imageRangeStart += this.imageChangeInterval;
                    this.imageRangeEnd += this.imageChangeInterval;
                    this.openImages();
                    this.renderRegions();
                }
                else if (numberOfImages > 0) {
                    // the amount of new images in less than the interval, show everything that can be shown
                    this.imageRangeStart += numberOfImages;
                    this.imageRangeEnd += numberOfImages;
                    this.openImages();
                    this.renderRegions();
                }
                else {
                    // no new images could be returned, display remaining images (there are fewer than this.imageChangeInterval)
                    const remainingImages = this.images.length - 1 - this.imageRangeEnd;
                    this.imageRangeStart += remainingImages;
                    this.imageRangeEnd += remainingImages;
                    // TODO: no new images can be loaded -> deactivate control in GUI (note that perhaps sufficient permissions were missing, so we actually cannot be sure that higher offsets still deliver images)
                    this.openImages();
                    this.renderRegions();
                }
            };
            const msg = new RequestStillImageRepresentations(1, callback);
            this.getImages.emit(msg);
        }
    }
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     */
    updateRegions() {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.renderRegions();
    }
    /**
     * Initializes the OpenSeadragon viewer
     */
    setupViewer() {
        const viewerContainer = this.elementRef.nativeElement.getElementsByClassName('osd-container')[0];
        const osdOptions = {
            element: viewerContainer,
            sequenceMode: true,
            showReferenceStrip: true,
            showNavigator: true,
            zoomInButton: 'KUI_OSD_ZOOM_IN',
            zoomOutButton: 'KUI_OSD_ZOOM_OUT',
            previousButton: 'KUI_OSD_PREV_PAGE',
            nextButton: 'KUI_OSD_NEXT_PAGE',
            homeButton: 'KUI_OSD_HOME',
            fullPageButton: 'KUI_OSD_FULL_PAGE',
            rotateLeftButton: 'KUI_OSD_ROTATE_LEFT',
            rotateRightButton: 'KUI_OSD_ROTATE_RIGHT' // doesn't work yet
        };
        this.viewer = new OpenSeadragon.Viewer(osdOptions);
        this.viewer.addHandler('full-screen', function (args) {
            if (args.fullScreen) {
                viewerContainer.classList.add('fullscreen');
            }
            else {
                viewerContainer.classList.remove('fullscreen');
            }
        });
        this.viewer.addHandler('resize', function (args) {
            args.eventSource.svgOverlay().resize();
        });
    }
    /**
     * Adds all images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     */
    openImages() {
        // imageXOffset controls the x coordinate of the left side of each image in the OpenSeadragon viewport coordinate system.
        // The first image has its left side at x = 0, and all images are scaled to have a width of 1 in viewport coordinates.
        // see also: https://openseadragon.github.io/examples/viewport-coordinates/
        const fileValues = this.images.map((img) => {
            return img.stillImageFileValue;
        });
        // display only the defined range of this.images
        const tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues.slice(this.imageRangeStart, this.imageRangeEnd + 1));
        this.viewer.clearOverlays();
        this.viewer.open(tileSources);
    }
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     */
    renderRegions() {
        this.viewer.clearOverlays();
        let imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
        for (const image of this.images) {
            const aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
            // collect all geometries belonging to this page
            let geometries = [];
            image.regions.map((reg) => {
                let geoms = reg.getGeometries();
                geoms.map((geom) => {
                    let geomForReg = new GeometryForRegion(geom.geometry, reg.regionResource);
                    geometries.push(geomForReg);
                });
            });
            // sort all geometries belonging to this page
            geometries.sort((geom1, geom2) => {
                if (geom1.geometry.type === 'rectangle' && geom2.geometry.type === 'rectangle') {
                    const surf1 = StillImageComponent.surfaceOfRectangularRegion(geom1.geometry);
                    const surf2 = StillImageComponent.surfaceOfRectangularRegion(geom2.geometry);
                    // if reg1 is smaller than reg2, return 1
                    // reg1 then comes after reg2 and thus is rendered later
                    if (surf1 < surf2) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    return 0;
                }
            });
            // render all geometries for this page
            for (let geom of geometries) {
                let geometry = geom.geometry;
                this.createSVGOverlay(geom.region.id, geometry, aspectRatio, imageXOffset, geom.region.label);
            }
            imageXOffset++;
        }
    }
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param regionIri the Iri of the region.
     * @param geometry - the geometry describing the ROI
     * @param aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param toolTip -  the tooltip which should be displayed on mousehover of the svg element
     */
    createSVGOverlay(regionIri, geometry, aspectRatio, xOffset, toolTip) {
        const lineColor = geometry.lineColor;
        const lineWidth = geometry.lineWidth;
        let svgElement;
        switch (geometry.type) {
            case 'rectangle':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon'); // yes, we render rectangles as svg polygon elements
                this.addSVGAttributesRectangle(svgElement, geometry, aspectRatio, xOffset);
                break;
            case 'polygon':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                this.addSVGAttributesPolygon(svgElement, geometry, aspectRatio, xOffset);
                break;
            case 'circle':
                svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                this.addSVGAttributesCircle(svgElement, geometry, aspectRatio, xOffset);
                break;
            default:
                console.log('ERROR: StillImageOSDViewerComponent.createSVGOverlay: unknown geometryType: ' + geometry.type);
                return;
        }
        svgElement.id = 'roi-svgoverlay-' + Math.random() * 10000;
        svgElement.setAttribute('class', 'roi-svgoverlay');
        svgElement.setAttribute('style', 'stroke: ' + lineColor + '; stroke-width: ' + lineWidth + 'px;');
        // event when a region is hovered (output)
        svgElement.addEventListener('mouseover', () => {
            this.regionHovered.emit(regionIri);
        }, false);
        const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        svgTitle.textContent = toolTip;
        const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgGroup.appendChild(svgTitle);
        svgGroup.appendChild(svgElement);
        const overlay = this.viewer.svgOverlay();
        overlay.node().appendChild(svgGroup);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param geometry - the geometry describing the rectangle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    addSVGAttributesRectangle(svgElement, geometry, aspectRatio, xOffset) {
        const pointA = geometry.points[0];
        const pointB = geometry.points[1];
        // geometry.points contains two diagonally opposed corners of the rectangle, but the order of the corners is arbitrary.
        // We therefore construct the upperleft (UL), lowerright (LR), upperright (UR) and lowerleft (LL) positions of the corners with min and max operations.
        const positionUL = new Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        const positionLR = new Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        const positionUR = new Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        const positionLL = new Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        const points = [positionUL, positionUR, positionLR, positionLL];
        const viewCoordPoints = this.image2ViewPortCoords(points, aspectRatio, xOffset);
        const pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon')
     * @param geometry - the geometry describing the polygon
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    addSVGAttributesPolygon(svgElement, geometry, aspectRatio, xOffset) {
        const viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        const pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'circle')
     * @param geometry - the geometry describing the circle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    addSVGAttributesCircle(svgElement, geometry, aspectRatio, xOffset) {
        const viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        const cx = String(viewCoordPoints[0].x);
        const cy = String(viewCoordPoints[0].y);
        // geometry.radius contains not the radius itself, but the coordinates of a (arbitrary) point on the circle.
        // We therefore have to calculate the length of the vector geometry.radius to get the actual radius. -> sqrt(x^2 + y^2)
        // Since geometry.radius has its y coordinate scaled to the height of the image,
        // we need to multiply it with the aspectRatio to get to the scale used by Openseadragon, analoguous to this.image2ViewPortCoords()
        const radius = String(Math.sqrt(geometry.radius.x * geometry.radius.x + aspectRatio * aspectRatio * geometry.radius.y * geometry.radius.y));
        svgElement.setAttribute('cx', cx);
        svgElement.setAttribute('cy', cy);
        svgElement.setAttribute('r', radius);
    }
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param points - an array of points in coordinate system relative to an image
     * @param aspectRatio - the aspectRatio (h/w) of the image
     * @param xOffset - the x-offset in viewport coordinates of the image
     * @returns - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    image2ViewPortCoords(points, aspectRatio, xOffset) {
        return points.map((point) => {
            return new Point2D(point.x + xOffset, point.y * aspectRatio);
        });
    }
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param points - an array of points to be serialized to a string
     * @returns - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    createSVGPolygonPointsAttribute(points) {
        let pointsString = '';
        for (const i in points) {
            if (points.hasOwnProperty(i)) {
                pointsString += points[i].x;
                pointsString += ',';
                pointsString += points[i].y;
                pointsString += ' ';
            }
        }
        return pointsString;
    }
}
StillImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-still-image',
                template: `<div class="still-image-viewer">
    <div class="navigation left">
        <button mat-button class="full-size" id="KUI_OSD_PREV_PAGE">
            <mat-icon>keyboard_arrow_left</mat-icon>
        </button>
    </div>

    <!-- main content with navigation and osd viewer -->
    <div class="content">

        <!-- header with image tools -->
        <mat-toolbar class="header">
            <mat-toolbar-row>
                <!-- home button -->
                <span>
                <button mat-icon-button id="KUI_OSD_HOME"><mat-icon>home</mat-icon></button>
            </span>
                <!-- zoom buttons -->
                <span class="fill-remaining-space"></span>
                <span>
                <button mat-icon-button id="KUI_OSD_ZOOM_IN"><mat-icon>add</mat-icon></button>
                <button mat-icon-button id="KUI_OSD_ZOOM_OUT"><mat-icon>remove</mat-icon></button>
            </span>
                <!-- window button -->
                <span class="fill-remaining-space"></span>
                <span>
                <button mat-icon-button id="KUI_OSD_FULL_PAGE"><mat-icon>fullscreen</mat-icon></button>
            </span>
            </mat-toolbar-row>
        </mat-toolbar>

        <!-- openseadragon (osd) viewer -->
        <div class="osd-container"></div>
        <!-- /openseadragon (osd) -->
        <!-- footer for copyright info; download button etc. -->
        <div class="footer">
            <p class="mat-caption" [innerHtml]="imageCaption"></p>
        </div>

    </div>

    <div class="navigation right">
        <button mat-button class="full-size" id="KUI_OSD_NEXT_PAGE">
            <mat-icon>keyboard_arrow_right</mat-icon>
        </button>
    </div>

</div>

<!-- simple image viewer e.g. as a preview -->
<!-- TODO: handle images array -->
<!--<img *ngIf="simple && images?.length === 1; else osdViewer" [src]="simpleImageExample">-->


<!--
    <div>
        <span *ngIf="images.length > 1" (click)="gotoLeft()">&lt;&lt;</span>
        <span *ngIf="images.length > 1" (click)="gotoRight()">&gt;&gt;</span>
    </div>
-->



`,
                styles: [`.still-image-viewer{display:inline-flex;height:400px;max-width:800px;width:100%}@media (max-height:636px){.still-image-viewer{height:300px}}.still-image-viewer .navigation{height:calc(400px + 64px + 24px);width:36px}.still-image-viewer .navigation .mat-button.full-size{height:100%!important;width:36px!important;padding:0!important;min-width:36px!important}.still-image-viewer .content{height:calc(400px + 64px + 24px);max-width:calc(800px - (2 * 36px));width:calc(100% - (2 * 36px))}.still-image-viewer .content .osd-container{color:#ccc;background-color:#000;height:400px}.still-image-viewer .content .osd-container.fullscreen{max-width:100vw}.still-image-viewer .content .footer p{color:#ccc;background-color:#000;height:24px;margin:0;padding:0 16px}/deep/ .roi-svgoverlay{opacity:.4;fill:transparent;stroke:#00695c;stroke-width:2px;vector-effect:non-scaling-stroke}.roi-svgoverlay:focus,/deep/ .roi-svgoverlay:hover{opacity:1}`]
            },] },
];
/** @nocollapse */
StillImageComponent.ctorParameters = () => [
    { type: ElementRef }
];
StillImageComponent.propDecorators = {
    images: [{ type: Input }],
    imageRangeStart: [{ type: Input }],
    imageRangeEnd: [{ type: Input }],
    imageChangeInterval: [{ type: Input }],
    imageCaption: [{ type: Input }],
    getImages: [{ type: Output }],
    regionHovered: [{ type: Output }]
};

class TextComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text',
                template: `<p>
  text works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextComponent.ctorParameters = () => [];

class BooleanValueComponent {
    constructor() { }
    set valueObject(value) {
        this._booleanValueObj = value;
    }
    get valueObject() {
        return this._booleanValueObj;
    }
}
BooleanValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-boolean-value',
                template: `<mat-checkbox [checked]="valueObject.bool" disabled="true"></mat-checkbox>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
BooleanValueComponent.ctorParameters = () => [];
BooleanValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class ColorValueComponent {
    constructor() {
    }
    set valueObject(value) {
        this._colorValueObj = value;
    }
    get valueObject() {
        return this._colorValueObj;
    }
}
ColorValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-color-value',
                template: `<span [style.background-color]="valueObject.colorHex">{{valueObject.colorHex}}</span>`,
                styles: [`.fill-remaining-space{flex:1 1 auto}.mat-form-field{width:36px;overflow-x:visible}`]
            },] },
];
/** @nocollapse */
ColorValueComponent.ctorParameters = () => [];
ColorValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class DateValueComponent {
    constructor() { }
    set calendar(value) {
        this._calendar = value;
    }
    get calendar() {
        return this._calendar;
    }
    set era(value) {
        this._era = value;
    }
    get era() {
        return this._era;
    }
    set valueObject(value) {
        this._dateValueObj = value;
        const dateOrRange = this.valueObject.getDateSalsah();
        if (dateOrRange instanceof DateRangeSalsah) {
            // period (start and end dates)
            this.period = true;
            this.dates = [this.getJSDate(dateOrRange.start), this.getJSDate(dateOrRange.end)];
        }
        else {
            // single date
            this.period = false;
            this.dates = [this.getJSDate(dateOrRange)];
        }
    }
    get valueObject() {
        return this._dateValueObj;
    }
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param date the date to be converted.
     * @return DateFormatter.
     */
    getJSDate(date) {
        if (date.precision === Precision.yearPrecision) {
            return {
                format: 'yyyy',
                date: new Date(date.year.toString()),
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.monthPrecision) {
            return {
                format: 'MMMM ' + 'yyyy',
                date: new Date(date.year, date.month - 1, 1),
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.dayPrecision) {
            return {
                format: 'longDate',
                date: new Date(date.year, date.month - 1, date.day),
                era: date.era,
                calendar: date.calendar
            };
        }
        else {
            console.error('Error: incorrect precision for date');
        }
    }
}
DateValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-date-value',
                template: `<span *ngIf="period; else preciseDate">
    {{dates[0].date | date: dates[0].format}}
    <span *ngIf="era">
        {{dates[0].era}}
    </span>
    - {{dates[1].date | date: dates[1].format}}
    <span *ngIf="era">
        {{dates[1].era}}
    </span>

    <span *ngIf="calendar">
        ({{dates[0].calendar}})
    </span>
</span>

<ng-template #preciseDate>

    <span>
        {{dates[0].date | date: dates[0].format }}
        <span *ngIf="era">
            {{dates[0].era}}
        </span>
        <span *ngIf="calendar">
            ({{dates[0].calendar}})
        </span>
    </span>

</ng-template>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
DateValueComponent.ctorParameters = () => [];
DateValueComponent.propDecorators = {
    calendar: [{ type: Input }],
    era: [{ type: Input }],
    valueObject: [{ type: Input }]
};

class DecimalValueComponent {
    constructor() { }
    set valueObject(value) {
        this._decimalValueObj = value;
    }
    get valueObject() {
        return this._decimalValueObj;
    }
}
DecimalValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-decimal-value',
                template: `<span>{{valueObject.decimal}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
DecimalValueComponent.ctorParameters = () => [];
DecimalValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class ExternalResValueComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExternalResValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-external-res-value',
                template: `<p>
  external-res-value works!
</p>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
ExternalResValueComponent.ctorParameters = () => [];

class GeometryValueComponent {
    constructor() { }
    set valueObject(value) {
        this._geomValueObj = value;
    }
    get valueObject() {
        return this._geomValueObj;
    }
}
GeometryValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-geometry-value',
                template: `<span>{{valueObject.geometryString}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
GeometryValueComponent.ctorParameters = () => [];
GeometryValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class GeonameValueComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeonameValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-geoname-value',
                template: `<p>
  geoname-value works!
</p>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
GeonameValueComponent.ctorParameters = () => [];

class IntegerValueComponent {
    constructor() {
    }
    set valueObject(value) {
        this._integerValueObj = value;
    }
    get valueObject() {
        return this._integerValueObj;
    }
}
IntegerValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-integer-value',
                template: `<span>{{valueObject.integer}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
IntegerValueComponent.ctorParameters = () => [];
IntegerValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class IntervalValueComponent {
    constructor() { }
    set valueObject(value) {
        this._intervalValueObj = value;
    }
    get valueObject() {
        return this._intervalValueObj;
    }
}
IntervalValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-interval-value',
                template: `<span>{{valueObject.intervalStart}} - {{valueObject.intervalEnd}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
IntervalValueComponent.ctorParameters = () => [];
IntervalValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class LinkValueComponent {
    constructor() {
        this.referredResourceClicked = new EventEmitter();
    }
    set ontologyInfo(value) {
        this._ontoInfo = value;
    }
    get ontologyInfo() {
        return this._ontoInfo;
    }
    set valueObject(value) {
        this._linkValueObj = value;
        if (this.valueObject.referredResource !== undefined) {
            this.referredResource = this.valueObject.referredResource.label;
        }
        else {
            this.referredResource = this.valueObject.referredResourceIri;
        }
    }
    get valueObject() {
        return this._linkValueObj;
    }
    refResClicked() {
        this.referredResourceClicked.emit(this._linkValueObj);
    }
}
LinkValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-link-value',
                template: `<a class="salsah-link" (click)="refResClicked()">{{referredResource}}</a>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
LinkValueComponent.ctorParameters = () => [];
LinkValueComponent.propDecorators = {
    ontologyInfo: [{ type: Input }],
    valueObject: [{ type: Input }],
    referredResourceClicked: [{ type: Output }]
};

class ListValueComponent {
    constructor() { }
    set valueObject(value) {
        this._listValueObj = value;
    }
    get valueObject() {
        return this._listValueObj;
    }
}
ListValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-list-value',
                template: `<span>{{valueObject.listNodeLabel}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
ListValueComponent.ctorParameters = () => [];
ListValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class TextValueAsHtmlComponent {
    constructor(el) {
        this.el = el;
        this.referredResourceClicked = new EventEmitter();
    }
    set ontologyInfo(value) {
        this._ontoInfo = value;
    }
    get ontologyInfo() {
        return this._ontoInfo;
    }
    set bindEvents(value) {
        this._bindEvents = value;
    }
    get bindEvents() {
        return this._bindEvents;
    }
    set valueObject(value) {
        this._htmlValueObj = value;
        if (this.el.nativeElement.innerHTML) {
            this.el.nativeElement.innerHTML = this.valueObject.html;
        }
    }
    get valueObject() {
        return this._htmlValueObj;
    }
    refResClicked(refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    }
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    onClick(targetElement) {
        if (this._bindEvents && targetElement.nodeName.toLowerCase() === 'a'
            && targetElement.className.toLowerCase().indexOf(KnoraConstants.SalsahLink) >= 0
            && targetElement.href !== undefined) {
            this.refResClicked(targetElement.href);
            // prevent propagation
            return false;
        }
        else if (this.bindEvents && targetElement.nodeName.toLowerCase() === 'a' && targetElement.href !== undefined) {
            // open link in a new window
            window.open(targetElement.href, '_blank');
            // prevent propagation
            return false;
        }
        else {
            // prevent propagation
            return false;
        }
    }
}
TextValueAsHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text-value-as-html',
                template: `<div>{{valueObject.html}}</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextValueAsHtmlComponent.ctorParameters = () => [
    { type: ElementRef }
];
TextValueAsHtmlComponent.propDecorators = {
    referredResourceClicked: [{ type: Output }],
    ontologyInfo: [{ type: Input }],
    bindEvents: [{ type: Input }],
    valueObject: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};

class TextValueAsStringComponent {
    constructor() {
    }
    set valueObject(value) {
        this._textStringValueObj = value;
    }
    get valueObject() {
        return this._textStringValueObj;
    }
}
TextValueAsStringComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text-value-as-string',
                template: `<span>{{valueObject.str}}</span>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextValueAsStringComponent.ctorParameters = () => [];
TextValueAsStringComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class TextValueAsXmlComponent {
    constructor() {
    }
    set valueObject(value) {
        this._xmlValueObj = value;
    }
    get valueObject() {
        return this._xmlValueObj;
    }
}
TextValueAsXmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text-value-as-xml',
                template: `<span>{{valueObject.xml}}</span>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextValueAsXmlComponent.ctorParameters = () => [];
TextValueAsXmlComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class TextfileValueComponent {
    constructor() { }
    set valueObject(value) {
        this._textfileValueObj = value;
    }
    get valueObject() {
        return this._textfileValueObj;
    }
}
TextfileValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-textfile-value',
                template: `<a target="_blank" href="{{valueObject.textFileURL}}">{{valueObject.textFilename}}</a>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextfileValueComponent.ctorParameters = () => [];
TextfileValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class UriValueComponent {
    constructor() { }
    set valueObject(value) {
        this.__uriValueObj = value;
    }
    get valueObject() {
        return this.__uriValueObj;
    }
}
UriValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-uri-value',
                template: `<a href="{{valueObject.uri}}" target="_blank">{{valueObject.uri}}</a>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
UriValueComponent.ctorParameters = () => [];
UriValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

class CompareViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompareViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-compare-view',
                template: `<p>
  compare-view works!
</p>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
CompareViewComponent.ctorParameters = () => [];

class GraphViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraphViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-graph-view',
                template: `<p>
  graph-view works!
</p>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
GraphViewComponent.ctorParameters = () => [];

class GridViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
GridViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-grid-view',
                template: `<p>
  grid-view works!
</p>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
GridViewComponent.ctorParameters = () => [];

class ListViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-list-view',
                template: `<p>
  list-view works!
</p>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [];

class PropertiesViewComponent {
    constructor() { }
}
PropertiesViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-properties-view',
                template: `<p>
    properties-view works!
</p>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
PropertiesViewComponent.ctorParameters = () => [];

const jsonld = require('jsonld');
class ResourceViewComponent {
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

class TableViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-table-view',
                template: `<p>
  table-view works!
</p>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TableViewComponent.ctorParameters = () => [];

class KuiViewerModule {
}
KuiViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    KuiCoreModule,
                    KuiActionModule,
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatDatepickerModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatIconModule,
                    MatListModule,
                    MatNativeDateModule,
                    MatSlideToggleModule,
                    MatToolbarModule,
                    MatTooltipModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    AnnotationComponent,
                    AudioComponent,
                    CollectionComponent,
                    DddComponent,
                    DocumentComponent,
                    LinkObjComponent,
                    MovingImageComponent,
                    ObjectComponent,
                    RegionComponent,
                    StillImageComponent,
                    TextComponent,
                    TextValueAsHtmlComponent,
                    TextValueAsStringComponent,
                    TextValueAsXmlComponent,
                    TextfileValueComponent,
                    DateValueComponent,
                    IntegerValueComponent,
                    ColorValueComponent,
                    DecimalValueComponent,
                    UriValueComponent,
                    BooleanValueComponent,
                    GeometryValueComponent,
                    GeonameValueComponent,
                    IntervalValueComponent,
                    ListValueComponent,
                    LinkValueComponent,
                    ExternalResValueComponent,
                    ListViewComponent,
                    GridViewComponent,
                    TableViewComponent,
                    ResourceViewComponent,
                    CompareViewComponent,
                    GraphViewComponent,
                    PropertiesViewComponent
                ],
                exports: [
                    AnnotationComponent,
                    AudioComponent,
                    CollectionComponent,
                    DddComponent,
                    DocumentComponent,
                    LinkObjComponent,
                    MovingImageComponent,
                    ObjectComponent,
                    RegionComponent,
                    StillImageComponent,
                    TextComponent,
                    TextValueAsHtmlComponent,
                    TextValueAsStringComponent,
                    TextValueAsXmlComponent,
                    TextfileValueComponent,
                    DateValueComponent,
                    IntegerValueComponent,
                    ColorValueComponent,
                    DecimalValueComponent,
                    UriValueComponent,
                    BooleanValueComponent,
                    GeometryValueComponent,
                    GeonameValueComponent,
                    IntervalValueComponent,
                    ListValueComponent,
                    LinkValueComponent,
                    ExternalResValueComponent,
                    ListViewComponent,
                    GridViewComponent,
                    TableViewComponent,
                    ResourceViewComponent,
                    CompareViewComponent,
                    GraphViewComponent,
                    PropertiesViewComponent
                ]
            },] },
];

/*
 * Public API Surface of viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BooleanValueComponent as ɵu, ColorValueComponent as ɵr, DateValueComponent as ɵp, DecimalValueComponent as ɵs, ExternalResValueComponent as ɵba, GeometryValueComponent as ɵv, GeonameValueComponent as ɵw, IntegerValueComponent as ɵq, IntervalValueComponent as ɵx, LinkValueComponent as ɵz, ListValueComponent as ɵy, TextValueAsHtmlComponent as ɵl, TextValueAsStringComponent as ɵm, TextValueAsXmlComponent as ɵn, TextfileValueComponent as ɵo, UriValueComponent as ɵt, AnnotationComponent as ɵa, AudioComponent as ɵb, CollectionComponent as ɵc, DddComponent as ɵd, DocumentComponent as ɵe, LinkObjComponent as ɵf, MovingImageComponent as ɵg, ObjectComponent as ɵh, RegionComponent as ɵi, StillImageComponent as ɵj, TextComponent as ɵk, CompareViewComponent as ɵbf, GraphViewComponent as ɵbg, GridViewComponent as ɵbc, ListViewComponent as ɵbb, PropertiesViewComponent as ɵbh, ResourceViewComponent as ɵbe, TableViewComponent as ɵbd, AnnotationComponent, AudioComponent, CollectionComponent, DddComponent, DocumentComponent, LinkObjComponent, MovingImageComponent, ObjectComponent, RegionComponent, ImageRegion, StillImageRepresentation, RequestStillImageRepresentations, GeometryForRegion, StillImageComponent, TextComponent, BooleanValueComponent, ColorValueComponent, DateValueComponent, DecimalValueComponent, ExternalResValueComponent, GeometryValueComponent, GeonameValueComponent, IntegerValueComponent, IntervalValueComponent, LinkValueComponent, ListValueComponent, TextValueAsHtmlComponent, TextValueAsStringComponent, TextValueAsXmlComponent, TextfileValueComponent, UriValueComponent, CompareViewComponent, GraphViewComponent, GridViewComponent, ListViewComponent, PropertiesViewComponent, ResourceViewComponent, TableViewComponent, KuiViewerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vcmEtdmlld2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3ZXIubW9kdWxlLnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL3B1YmxpY19hcGkudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIva25vcmEtdmlld2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgYW5ub3RhdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hdWRpbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGF1ZGlvIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29sbGVjdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZGQnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBkZGQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kb2N1bWVudCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGRvY3VtZW50IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saW5rLW9iaicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGxpbmstb2JqIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtPYmpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLW1vdmluZy1pbWFnZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG1vdmluZy1pbWFnZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZpbmdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb2JqZWN0IHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlZ2lvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHJlZ2lvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgUG9pbnQyRCxcbiAgICBSZWFkR2VvbVZhbHVlLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgICBSZWdpb25HZW9tZXRyeVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cblxuLy8gVGhpcyBjb21wb25lbnQgbmVlZHMgdGhlIG9wZW5zZWFkcmFnb24gbGlicmFyeSBpdHNlbGYsIGFzIHdlbGwgYXMgdGhlIG9wZW5zZWFkcmFnb24gcGx1Z2luIG9wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXlcbi8vIEJvdGggbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgdmlhIHBhY2thZ2UuanNvbiwgYW5kIGxvYWRlZCBnbG9iYWxseSB2aWEgdGhlIHNjcmlwdCB0YWcgaW4gLmFuZ3VsYXItY2xpLmpzb25cblxuLy8gT3BlblNlYWRyYWdvbiBkb2VzIG5vdCBleHBvcnQgaXRzZWxmIGFzIEVTNi9FQ01BMjAxNSBtb2R1bGUsXG4vLyBpdCBpcyBsb2FkZWQgZ2xvYmFsbHkgaW4gc2NyaXB0cyB0YWcgb2YgYW5ndWxhci1jbGkuanNvbixcbi8vIHdlIHN0aWxsIG5lZWQgdG8gZGVjbGFyZSB0aGUgbmFtZXNwYWNlIHRvIG1ha2UgVHlwZVNjcmlwdCBjb21waWxlciBoYXBweS5cbmRlY2xhcmUgbGV0IE9wZW5TZWFkcmFnb246IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaW9uLlxuICogQ29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcmVnaW9uIGFuZCBpdHMgZ2VvbWV0cmllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvblJlc291cmNlIGEgcmVzb3VyY2Ugb2YgdHlwZSBSZWdpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb25SZXNvdXJjZTogUmVhZFJlc291cmNlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdlb21ldHJ5IGluZm9ybWF0aW9uIGJlbG9uZ2luZyB0byB0aGlzIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0R2VvbWV0cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uUmVzb3VyY2UucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNHZW9tZXRyeV0gYXMgUmVhZEdlb21WYWx1ZVtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltYWdlIGluY2x1ZGluZyBpdHMgcmVnaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGlsbEltYWdlRmlsZVZhbHVlIGEgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dIHJlcHJlc2VudGluZyBhbiBpbWFnZS5cbiAgICAgKiBAcGFyYW0gcmVnaW9ucyB0aGUgcmVnaW9ucyBiZWxvbmdpbmcgdG8gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0aWxsSW1hZ2VGaWxlVmFsdWU6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLCByZWFkb25seSByZWdpb25zOiBJbWFnZVJlZ2lvbltdKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHJlcXVlc3RzIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGxvYWQgbW9yZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0Q2hhbmdlIHRoZSByZWxhdGl2ZSBjaGFuZ2Ugb2YgdGhlIG9mZnNldCBpbiBvcmRlciB0byBnZXQgbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGZvciB0aGUgcmVzb3VyY2UgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZC4gRWl0aGVyIDEgb3IgLTEuXG4gICAgICogQHBhcmFtIHdoZW5Mb2FkZWRDQiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGhhdmUgYmVlbiByZXF1ZXN0ZWQgYW5kIHRoZSBhbnN3ZXIgYXJyaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgb2Zmc2V0Q2hhbmdlOiBudW1iZXIsIHJlYWRvbmx5IHdoZW5Mb2FkZWRDQjogKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdlb21ldHJ5IGJlbG9uZ2luZyB0byBhIHNwZWNpZmljIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Rm9yUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IHRoZSBnZW9tZXRyaWNhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaW9uIHRoZSByZWdpb24gdGhlIGdlb21ldHJ5IGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCByZWFkb25seSByZWdpb246IFJlYWRSZXNvdXJjZSkge1xuICAgIH1cblxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNyZWF0ZXMgYSBPcGVuU2VhZHJhZ29uIHZpZXdlciBpbnN0YW5jZS5cbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgUmVhZFJlc291cmNlIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIHJlbmRlcmVkLlxuICogQG1lbWJlciByZXNvdXJjZXMgLSByZXNvdXJjZXMgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSB0aGUgU3RpbGxJbWFnZUZpbGVWYWx1ZXMgYW5kIGluY29taW5nIHJlZ2lvbnMgdG8gYmUgcmVuZGVyZWQuIChVc2UgYXMgYW5ndWxhciBASW5wdXQgZGF0YSBiaW5kaW5nIHByb3BlcnR5LilcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc3RpbGwtaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInN0aWxsLWltYWdlLXZpZXdlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIGxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX1BSRVZfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gbWFpbiBjb250ZW50IHdpdGggbmF2aWdhdGlvbiBhbmQgb3NkIHZpZXdlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXG4gICAgICAgIDwhLS0gaGVhZGVyIHdpdGggaW1hZ2UgdG9vbHMgLS0+XG4gICAgICAgIDxtYXQtdG9vbGJhciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgICAgICAgICAgICA8IS0tIGhvbWUgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9IT01FXCI+PG1hdC1pY29uPmhvbWU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS0gem9vbSBidXR0b25zIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fSU5cIj48bWF0LWljb24+YWRkPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfWk9PTV9PVVRcIj48bWF0LWljb24+cmVtb3ZlPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHdpbmRvdyBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfRlVMTF9QQUdFXCI+PG1hdC1pY29uPmZ1bGxzY3JlZW48L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG5cbiAgICAgICAgPCEtLSBvcGVuc2VhZHJhZ29uIChvc2QpIHZpZXdlciAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9zZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPCEtLSAvb3BlbnNlYWRyYWdvbiAob3NkKSAtLT5cbiAgICAgICAgPCEtLSBmb290ZXIgZm9yIGNvcHlyaWdodCBpbmZvOyBkb3dubG9hZCBidXR0b24gZXRjLiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXQtY2FwdGlvblwiIFtpbm5lckh0bWxdPVwiaW1hZ2VDYXB0aW9uXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24gcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX05FWFRfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48IS0tIHNpbXBsZSBpbWFnZSB2aWV3ZXIgZS5nLiBhcyBhIHByZXZpZXcgLS0+XG48IS0tIFRPRE86IGhhbmRsZSBpbWFnZXMgYXJyYXkgLS0+XG48IS0tPGltZyAqbmdJZj1cInNpbXBsZSAmJiBpbWFnZXM/Lmxlbmd0aCA9PT0gMTsgZWxzZSBvc2RWaWV3ZXJcIiBbc3JjXT1cInNpbXBsZUltYWdlRXhhbXBsZVwiPi0tPlxuXG5cbjwhLS1cbiAgICA8ZGl2PlxuICAgICAgICA8c3BhbiAqbmdJZj1cImltYWdlcy5sZW5ndGggPiAxXCIgKGNsaWNrKT1cImdvdG9MZWZ0KClcIj4mbHQ7Jmx0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvUmlnaHQoKVwiPiZndDsmZ3Q7PC9zcGFuPlxuICAgIDwvZGl2PlxuLS0+XG5cblxuXG5gLFxuICAgIHN0eWxlczogW2Auc3RpbGwtaW1hZ2Utdmlld2Vye2Rpc3BsYXk6aW5saW5lLWZsZXg7aGVpZ2h0OjQwMHB4O21heC13aWR0aDo4MDBweDt3aWR0aDoxMDAlfUBtZWRpYSAobWF4LWhlaWdodDo2MzZweCl7LnN0aWxsLWltYWdlLXZpZXdlcntoZWlnaHQ6MzAwcHh9fS5zdGlsbC1pbWFnZS12aWV3ZXIgLm5hdmlnYXRpb257aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7d2lkdGg6MzZweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9uIC5tYXQtYnV0dG9uLmZ1bGwtc2l6ZXtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7d2lkdGg6MzZweCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDttaW4td2lkdGg6MzZweCFpbXBvcnRhbnR9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudHtoZWlnaHQ6Y2FsYyg0MDBweCArIDY0cHggKyAyNHB4KTttYXgtd2lkdGg6Y2FsYyg4MDBweCAtICgyICogMzZweCkpO3dpZHRoOmNhbGMoMTAwJSAtICgyICogMzZweCkpfS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXJ7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjQwMHB4fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXIuZnVsbHNjcmVlbnttYXgtd2lkdGg6MTAwdnd9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAuZm9vdGVyIHB7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjI0cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHh9L2RlZXAvIC5yb2ktc3Znb3ZlcmxheXtvcGFjaXR5Oi40O2ZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlOiMwMDY5NWM7c3Ryb2tlLXdpZHRoOjJweDt2ZWN0b3ItZWZmZWN0Om5vbi1zY2FsaW5nLXN0cm9rZX0ucm9pLXN2Z292ZXJsYXk6Zm9jdXMsL2RlZXAvIC5yb2ktc3Znb3ZlcmxheTpob3ZlcntvcGFjaXR5OjF9YF1cbn0pXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW1hZ2VzOiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25bXTtcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlU3RhcnQ6IG51bWJlcjsgIC8vIGluZGV4IGZpcnN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzIHRvIGJlIGRpc3BsYXllZFxuICAgIEBJbnB1dCgpIGltYWdlUmFuZ2VFbmQ6IG51bWJlcjsgLy8gaW5kZXggb2YgbGFzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWQuXG4gICAgQElucHV0KCkgaW1hZ2VDaGFuZ2VJbnRlcnZhbDogbnVtYmVyOyAvLyB0aGUgc2l6ZSBvZiB0aGUgaW50ZXJ2YWwgd2hlbiBkaXNwbGF5aW5nIG1vcmUgaW1hZ2VzIG9mIHRoaXMuaW1hZ2VzXG5cbiAgICBASW5wdXQoKSBpbWFnZUNhcHRpb24/OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgZ2V0SW1hZ2VzID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucz4oKTsgLy8gc2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IChvYmplY3QuY29tcG9uZW50KSB0byBsb2FkIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2Ugb2YgcmVzdWx0cyAoaW1hZ2VzKSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICBAT3V0cHV0KCkgcmVnaW9uSG92ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLy8gdGhlIHBhZ2luZyBsaW1pdCBzaG91bGQgYmUgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYXBwXG4gICAgcGFnaW5nTGltaXQ6IG51bWJlciA9IDI1O1xuXG5cbiAgICBwcml2YXRlIHZpZXdlcjtcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHN1cmZhY2Ugb2YgYSByZWN0YW5ndWxhciByZWdpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbSB0aGUgcmVnaW9uJ3MgZ2VvbWV0cnkuXG4gICAgICogQHJldHVybnMgdGhlIHN1cmZhY2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTogUmVnaW9uR2VvbWV0cnkpOiBudW1iZXIge1xuXG4gICAgICAgIGlmIChnZW9tLnR5cGUgIT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwZWN0ZWQgcmVjdGFuZ3VsYXIgcmVnaW9uLCBidXQgJyArIGdlb20udHlwZSArICcgZ2l2ZW4nKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdyA9IE1hdGgubWF4KGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpIC0gTWF0aC5taW4oZ2VvbS5wb2ludHNbMF0ueCwgZ2VvbS5wb2ludHNbMV0ueCk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLnksIGdlb20ucG9pbnRzWzFdLnkpO1xuXG4gICAgICAgIHJldHVybiB3ICogaDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGlsZSBzb3VyY2VzIGZyb20gdGhlIGdpdmVuIHNlcXVlbmNlIG9mIFtbUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVdXS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbWFnZXNUb0Rpc3BsYXkgdGhlIGdpdmVuIGZpbGUgdmFsdWVzIHRvIGRlIGRpc3BsYXllZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGlsZSBzb3VyY2VzIHRvIGJlIHBhc3NlZCB0byBPU0Qgdmlld2VyLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHByZXBhcmVUaWxlU291cmNlc0Zyb21GaWxlVmFsdWVzKGltYWdlc1RvRGlzcGxheTogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSk6IE9iamVjdFtdIHtcbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgIGxldCBpbWFnZVlPZmZzZXQgPSAwO1xuICAgICAgICBjb25zdCB0aWxlU291cmNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzVG9EaXNwbGF5KSB7XG4gICAgICAgICAgICBjb25zdCBzaXBpQmFzZVBhdGggPSBpbWFnZS5pbWFnZVNlcnZlcklJSUZCYXNlVVJMICsgJy8nICsgaW1hZ2UuaW1hZ2VGaWxlbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UuZGltWDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmRpbVk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBPcGVuU2VhZHJhZ29uIHRpbGVTb3VyY2VzIGFjY29yZGluZyB0byBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5WaWV3ZXIuaHRtbCNvcGVuXG4gICAgICAgICAgICB0aWxlU291cmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3QgSUlJRiB0aWxlU291cmNlIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMS8jdGVjaG5pY2FsLXByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxzbyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4wLyNhLWltcGxlbWVudGF0aW9uLW5vdGVzXG4gICAgICAgICAgICAgICAgJ3RpbGVTb3VyY2UnOiB7XG4gICAgICAgICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9jb250ZXh0Lmpzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQGlkJzogc2lwaUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGUnOiBbJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2xldmVsMi5qc29uJ10sXG4gICAgICAgICAgICAgICAgICAgICdwcm90b2NvbCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAndGlsZXMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYWxlRmFjdG9ycyc6IFsxLCAyLCA0LCA4LCAxNiwgMzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogMTAyNFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3gnOiBpbWFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgJ3knOiBpbWFnZVlPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcblxuICAgICAgICAgICAgLy8gNSBpbWFnZXMgcGVyIHJvd1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmIChpbWFnZVhPZmZzZXQgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VZT2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbGVTb3VyY2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ltYWdlcyddICYmIGNoYW5nZXNbJ2ltYWdlcyddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBpbml0aWFsaXNhdGlvbiBpcyBkb25lIG9uIGZpcnN0IHJ1biBvZiBuZ09uQ2hhbmdlc1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudmlld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB3ZXJlIGFkZGVkIHRvIHRoaXMuaW1hZ2VzIGFmdGVyIGNyZWF0aW9uL2Fzc2lnbm1lbnQgb2YgdGhlIHRoaXMuaW1hZ2VzIGFycmF5LilcbiAgICAgKi9cbiAgICB1cGRhdGVJbWFnZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgZm9yIHRoZSBjdXJyZW50IHJlc291cmNlIChkZWNyZWFzZSBvZmZzZXQpLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ290b0xlZnQoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogbW92ZSBsZWZ0IG9uIHRoaXMuaW1hZ2VzXG4gICAgICAgIC8vIFRPRE86IGlmIG5lY2Vzc2FyeSwgcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXJcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgLSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPj0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC09IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBmZXdlciByZW1haW5pbmcgaW1hZ2VzIHRoYW4gaW50ZXJ2YWwsIHNob3cgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kIC09IHRoaXMuaW1hZ2VSYW5nZVN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGNhbm5vdCBkaXNwbGF5IG1vcmUgaW1hZ2VzIG9mIGxlbmd0aCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgYSBuZWdhdGl2ZSBvZmZzZXRcblxuICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IGdldHRpbmcgcHJldmlvdXMgb2Zmc2V0IChhbHNvIGluIHBhcmVudCBjb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIGJ5IHJlcXVlc3RpbmcgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoaW5jcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9SaWdodCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlRW5kIDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCArIHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB3aG9sZSBuZXh0IGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSBuZXh0IGludGVydmFsYCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc2ApO1xuICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwgY2FuIGJlIGRpc3BsYXllZCBqdXN0IGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpZmYgPSB0aGlzLmltYWdlcy5sZW5ndGggLSB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nRGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nRGlmZjtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMubGVuZ3RoICUgdGhpcy5wYWdpbmdMaW1pdCA9PT0gMCkgeyAvLyBwYWdpbmcgYWx3YXlzIHJldHVybmVkIGZ1bGwgcmVzdWx0IGxpc3RzLCBzbyB0aGVyZSBjb3VsZCBiZSBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IG1vcmUgaW1hZ2VzYCk7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgcG9zaXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHBhcmVudCBjb21wb25lbnQgbG9hZGVkIG5ldyBpbWFnZXNcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkltYWdlcyA+PSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbW9yZSBpbWFnZXMgd2VyZSBsb2FkZWQgdGhhbiBhcmUgYWN0dWFsbHkgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlck9mSW1hZ2VzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW1vdW50IG9mIG5ldyBpbWFnZXMgaW4gbGVzcyB0aGFuIHRoZSBpbnRlcnZhbCwgc2hvdyBldmVyeXRoaW5nIHRoYXQgY2FuIGJlIHNob3duXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gbnVtYmVyT2ZJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSBudW1iZXJPZkltYWdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbmV3IGltYWdlcyBjb3VsZCBiZSByZXR1cm5lZCwgZGlzcGxheSByZW1haW5pbmcgaW1hZ2VzICh0aGVyZSBhcmUgZmV3ZXIgdGhhbiB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0ltYWdlczogbnVtYmVyID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSAtIHRoaXMuaW1hZ2VSYW5nZUVuZDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSByZW1haW5pbmdJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSByZW1haW5pbmdJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbm8gbmV3IGltYWdlcyBjYW4gYmUgbG9hZGVkIC0+IGRlYWN0aXZhdGUgY29udHJvbCBpbiBHVUkgKG5vdGUgdGhhdCBwZXJoYXBzIHN1ZmZpY2llbnQgcGVybWlzc2lvbnMgd2VyZSBtaXNzaW5nLCBzbyB3ZSBhY3R1YWxseSBjYW5ub3QgYmUgc3VyZSB0aGF0IGhpZ2hlciBvZmZzZXRzIHN0aWxsIGRlbGl2ZXIgaW1hZ2VzKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBuZXcgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMoMSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICB0aGlzLmdldEltYWdlcy5lbWl0KG1zZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIG1vcmUgZGF0YSB0byBmZXRjaFxuICAgICAgICAgICAgLy8gVE9ETzogZGVhY3RpdmF0ZSBuZXh0IGJ1dHRvblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCByZWdpb25zIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIHJlZ2lvbnMgd2VyZSBhZGRlZCB0byB0aGUgcmVzb3VyY2VzLmltYWdlcylcbiAgICAgKi9cbiAgICB1cGRhdGVSZWdpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIE9wZW5TZWFkcmFnb24gdmlld2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cFZpZXdlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3NkLWNvbnRhaW5lcicpWzBdO1xuICAgICAgICBjb25zdCBvc2RPcHRpb25zID0ge1xuICAgICAgICAgICAgZWxlbWVudDogdmlld2VyQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICAgICAgc2hvd05hdmlnYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21JbkJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9JTicsXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uOiAnS1VJX09TRF9aT09NX09VVCcsXG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbjogJ0tVSV9PU0RfUFJFVl9QQUdFJyxcbiAgICAgICAgICAgIG5leHRCdXR0b246ICdLVUlfT1NEX05FWFRfUEFHRScsXG4gICAgICAgICAgICBob21lQnV0dG9uOiAnS1VJX09TRF9IT01FJyxcbiAgICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnS1VJX09TRF9GVUxMX1BBR0UnLFxuICAgICAgICAgICAgcm90YXRlTGVmdEJ1dHRvbjogJ0tVSV9PU0RfUk9UQVRFX0xFRlQnLCAgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuICAgICAgICAgICAgcm90YXRlUmlnaHRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9SSUdIVCcgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IE9wZW5TZWFkcmFnb24uVmlld2VyKG9zZE9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdmdWxsLXNjcmVlbicsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5mdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmV2ZW50U291cmNlLnN2Z092ZXJsYXkoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBpbWFnZXMgaW4gdGhpcy5pbWFnZXMgdG8gdGhlIHZpZXdlci5cbiAgICAgKiBJbWFnZXMgYXJlIHBvc2l0aW9uZWQgaW4gYSBob3Jpem9udGFsIHJvdyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICAvLyBpbWFnZVhPZmZzZXQgY29udHJvbHMgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBzaWRlIG9mIGVhY2ggaW1hZ2UgaW4gdGhlIE9wZW5TZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbWFnZSBoYXMgaXRzIGxlZnQgc2lkZSBhdCB4ID0gMCwgYW5kIGFsbCBpbWFnZXMgYXJlIHNjYWxlZCB0byBoYXZlIGEgd2lkdGggb2YgMSBpbiB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgLy8gc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG5cbiAgICAgICAgY29uc3QgZmlsZVZhbHVlczogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSA9IHRoaXMuaW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nLnN0aWxsSW1hZ2VGaWxlVmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlIGRlZmluZWQgcmFuZ2Ugb2YgdGhpcy5pbWFnZXNcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXM6IE9iamVjdFtdID0gU3RpbGxJbWFnZUNvbXBvbmVudC5wcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhmaWxlVmFsdWVzLnNsaWNlKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0LCB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxKSk7XG5cbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuICAgICAgICB0aGlzLnZpZXdlci5vcGVuKHRpbGVTb3VyY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlciBmb3IgZXZlcnkgcmVnaW9uIG9mIGV2ZXJ5IGltYWdlIGluIHRoaXMuaW1hZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5kZXJSZWdpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG5cbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7IC8vIHNlZSBkb2N1bWVudGF0aW9uIGluIHRoaXMub3BlbkltYWdlcygpIGZvciB0aGUgdXNhZ2Ugb2YgaW1hZ2VYT2Zmc2V0XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAoaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1ZIC8gaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1YKTtcblxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cmllczogR2VvbWV0cnlGb3JSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UucmVnaW9ucy5tYXAoKHJlZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGdlb21zID0gcmVnLmdldEdlb21ldHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGdlb21zLm1hcCgoZ2VvbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbUZvclJlZyA9IG5ldyBHZW9tZXRyeUZvclJlZ2lvbihnZW9tLmdlb21ldHJ5LCByZWcucmVnaW9uUmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tRm9yUmVnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzb3J0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGdlb21ldHJpZXMuc29ydCgoZ2VvbTEsIGdlb20yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbTEuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScgJiYgZ2VvbTIuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMSA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTEuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMiA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTIuZ2VvbWV0cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHJlZzEgaXMgc21hbGxlciB0aGFuIHJlZzIsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZzEgdGhlbiBjb21lcyBhZnRlciByZWcyIGFuZCB0aHVzIGlzIHJlbmRlcmVkIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXJmMSA8IHN1cmYyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgYWxsIGdlb21ldHJpZXMgZm9yIHRoaXMgcGFnZVxuICAgICAgICAgICAgZm9yIChsZXQgZ2VvbSBvZiBnZW9tZXRyaWVzKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU1ZHT3ZlcmxheShnZW9tLnJlZ2lvbi5pZCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCBpbWFnZVhPZmZzZXQsIGdlb20ucmVnaW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXJcbiAgICAgKiBAcGFyYW0gcmVnaW9uSXJpIHRoZSBJcmkgb2YgdGhlIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgUk9JXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtICB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0gdG9vbFRpcCAtICB0aGUgdG9vbHRpcCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vdXNlaG92ZXIgb2YgdGhlIHN2ZyBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdPdmVybGF5KHJlZ2lvbklyaTogc3RyaW5nLCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlciwgdG9vbFRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGdlb21ldHJ5LmxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2VvbWV0cnkubGluZVdpZHRoO1xuXG4gICAgICAgIGxldCBzdmdFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpOyAgLy8geWVzLCB3ZSByZW5kZXIgcmVjdGFuZ2xlcyBhcyBzdmcgcG9seWdvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogU3RpbGxJbWFnZU9TRFZpZXdlckNvbXBvbmVudC5jcmVhdGVTVkdPdmVybGF5OiB1bmtub3duIGdlb21ldHJ5VHlwZTogJyArIGdlb21ldHJ5LnR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdmdFbGVtZW50LmlkID0gJ3JvaS1zdmdvdmVybGF5LScgKyBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAnICsgbGluZUNvbG9yICsgJzsgc3Ryb2tlLXdpZHRoOiAnICsgbGluZVdpZHRoICsgJ3B4OycpO1xuXG4gICAgICAgIC8vIGV2ZW50IHdoZW4gYSByZWdpb24gaXMgaG92ZXJlZCAob3V0cHV0KVxuICAgICAgICBzdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkhvdmVyZWQuZW1pdChyZWdpb25JcmkpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgICAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IHRvb2xUaXA7XG5cbiAgICAgICAgY29uc3Qgc3ZnR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy52aWV3ZXIuc3ZnT3ZlcmxheSgpO1xuICAgICAgICBvdmVybGF5Lm5vZGUoKS5hcHBlbmRDaGlsZChzdmdHcm91cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAncmVjdGFuZ2xlJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nIChzaWMpKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwb2ludEEgPSBnZW9tZXRyeS5wb2ludHNbMF07XG4gICAgICAgIGNvbnN0IHBvaW50QiA9IGdlb21ldHJ5LnBvaW50c1sxXTtcblxuICAgICAgICAvLyBnZW9tZXRyeS5wb2ludHMgY29udGFpbnMgdHdvIGRpYWdvbmFsbHkgb3Bwb3NlZCBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGUsIGJ1dCB0aGUgb3JkZXIgb2YgdGhlIGNvcm5lcnMgaXMgYXJiaXRyYXJ5LlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgY29uc3RydWN0IHRoZSB1cHBlcmxlZnQgKFVMKSwgbG93ZXJyaWdodCAoTFIpLCB1cHBlcnJpZ2h0IChVUikgYW5kIGxvd2VybGVmdCAoTEwpIHBvc2l0aW9ucyBvZiB0aGUgY29ybmVycyB3aXRoIG1pbiBhbmQgbWF4IG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVUwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MUiA9IG5ldyBQb2ludDJEKE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvblVSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTEwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpKTtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBbcG9zaXRpb25VTCwgcG9zaXRpb25VUiwgcG9zaXRpb25MUiwgcG9zaXRpb25MTF07XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdwb2x5Z29uJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoZ2VvbWV0cnkucG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdjaXJjbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAnY2lyY2xlJylcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgY2lyY2xlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgY3ggPSBTdHJpbmcodmlld0Nvb3JkUG9pbnRzWzBdLngpO1xuICAgICAgICBjb25zdCBjeSA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueSk7XG4gICAgICAgIC8vIGdlb21ldHJ5LnJhZGl1cyBjb250YWlucyBub3QgdGhlIHJhZGl1cyBpdHNlbGYsIGJ1dCB0aGUgY29vcmRpbmF0ZXMgb2YgYSAoYXJiaXRyYXJ5KSBwb2ludCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgaGF2ZSB0byBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgdmVjdG9yIGdlb21ldHJ5LnJhZGl1cyB0byBnZXQgdGhlIGFjdHVhbCByYWRpdXMuIC0+IHNxcnQoeF4yICsgeV4yKVxuICAgICAgICAvLyBTaW5jZSBnZW9tZXRyeS5yYWRpdXMgaGFzIGl0cyB5IGNvb3JkaW5hdGUgc2NhbGVkIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIG11bHRpcGx5IGl0IHdpdGggdGhlIGFzcGVjdFJhdGlvIHRvIGdldCB0byB0aGUgc2NhbGUgdXNlZCBieSBPcGVuc2VhZHJhZ29uLCBhbmFsb2d1b3VzIHRvIHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoKVxuICAgICAgICBjb25zdCByYWRpdXMgPSBTdHJpbmcoTWF0aC5zcXJ0KGdlb21ldHJ5LnJhZGl1cy54ICogZ2VvbWV0cnkucmFkaXVzLnggKyBhc3BlY3RSYXRpbyAqIGFzcGVjdFJhdGlvICogZ2VvbWV0cnkucmFkaXVzLnkgKiBnZW9tZXRyeS5yYWRpdXMueSkpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeCk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLCByYWRpdXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBhbiBpbWFnZSB0byBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgaW4gY29vcmRpbmF0ZSBzeXN0ZW0gcmVsYXRpdmUgdG8gYW4gaW1hZ2VcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlXG4gICAgICogQHJldHVybnMgLSBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzOiBQb2ludDJEW10sIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IFBvaW50MkRbXSB7XG4gICAgICAgIHJldHVybiBwb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDJEKHBvaW50LnggKyB4T2Zmc2V0LCBwb2ludC55ICogYXNwZWN0UmF0aW8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gcG9pbnRzIC0gYW4gYXJyYXkgb2YgcG9pbnRzIHRvIGJlIHNlcmlhbGl6ZWQgdG8gYSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyAtIHRoZSBwb2ludHMgc2VyaWFsaXplZCB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGV4cGVjdGVkIGJ5IHRoZSAncG9pbnRzJyBhdHRyaWJ1dGUgb2YgYSBTVkdFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHBvaW50czogUG9pbnQyRFtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnLCc7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50c1N0cmluZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGV4dCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHRleHQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkQm9vbGVhblZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktYm9vbGVhbi12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJ2YWx1ZU9iamVjdC5ib29sXCIgZGlzYWJsZWQ9XCJ0cnVlXCI+PC9tYXQtY2hlY2tib3g+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQm9vbGVhblZhbHVlKSB7XG4gICAgICB0aGlzLl9ib29sZWFuVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ib29sZWFuVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9ib29sZWFuVmFsdWVPYmo6IFJlYWRCb29sZWFuVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZENvbG9yVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWNvbG9yLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInZhbHVlT2JqZWN0LmNvbG9ySGV4XCI+e3t2YWx1ZU9iamVjdC5jb2xvckhleH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5tYXQtZm9ybS1maWVsZHt3aWR0aDozNnB4O292ZXJmbG93LXg6dmlzaWJsZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQ29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvclZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvclZhbHVlT2JqOiBSZWFkQ29sb3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlU2Fsc2FoLCBEYXRlU2Fsc2FoLCBQcmVjaXNpb24sIFJlYWREYXRlVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kYXRlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiAqbmdJZj1cInBlcmlvZDsgZWxzZSBwcmVjaXNlRGF0ZVwiPlxuICAgIHt7ZGF0ZXNbMF0uZGF0ZSB8IGRhdGU6IGRhdGVzWzBdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1swXS5lcmF9fVxuICAgIDwvc3Bhbj5cbiAgICAtIHt7ZGF0ZXNbMV0uZGF0ZSB8IGRhdGU6IGRhdGVzWzFdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1sxXS5lcmF9fVxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICA8L3NwYW4+XG48L3NwYW4+XG5cbjxuZy10ZW1wbGF0ZSAjcHJlY2lzZURhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0IH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgY2FsZW5kYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYWxlbmRhciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlcmEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcmEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBlcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VyYTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERhdGVWYWx1ZSkge1xuICAgIHRoaXMuX2RhdGVWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgY29uc3QgZGF0ZU9yUmFuZ2U6IERhdGVTYWxzYWggfCBEYXRlUmFuZ2VTYWxzYWggPSB0aGlzLnZhbHVlT2JqZWN0LmdldERhdGVTYWxzYWgoKTtcbiAgICBpZiAoZGF0ZU9yUmFuZ2UgaW5zdGFuY2VvZiBEYXRlUmFuZ2VTYWxzYWgpIHtcbiAgICAgIC8vIHBlcmlvZCAoc3RhcnQgYW5kIGVuZCBkYXRlcylcbiAgICAgIHRoaXMucGVyaW9kID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2Uuc3RhcnQpLCB0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5lbmQpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2luZ2xlIGRhdGVcbiAgICAgIHRoaXMucGVyaW9kID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGVzID0gW3RoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlKV07XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVWYWx1ZU9iajtcbiAgfVxuXG4gIGRhdGVzOiBEYXRlRm9ybWF0dGVyW107XG4gIHBlcmlvZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VyYTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGF0ZVZhbHVlT2JqOiBSZWFkRGF0ZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYERhdGVTYWxzYWhgIHRvIGEgSlMgRGF0ZSwgcHJvdmlkaW5nIG5lY2Vzc2FyeSBmb3JtYXR0aW5nIGluZm9ybWF0aW9uLlxuICAgKiBKVUxJQU4gYW5kIEdSRUdPUklBTiBjYWxlbmRhciBhcmUgdGhlIG9ubHkgYXZhaWxhYmxlIGZvciB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBiZSBjb252ZXJ0ZWQuXG4gICAqIEByZXR1cm4gRGF0ZUZvcm1hdHRlci5cbiAgICovXG4gIGdldEpTRGF0ZShkYXRlOiBEYXRlU2Fsc2FoKTogRGF0ZUZvcm1hdHRlciB7XG5cbiAgICBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi55ZWFyUHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLnRvU3RyaW5nKCkpLFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24ubW9udGhQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ01NTU0gJyArICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgMSksIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24uZGF5UHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdsb25nRGF0ZScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSwgIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGluY29ycmVjdCBwcmVjaXNpb24gZm9yIGRhdGUnKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogRGF0ZSBzdHJ1Y3R1cmUgZm9yIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVGb3JtYXR0ZXIge1xuICBmb3JtYXQ6IHN0cmluZztcbiAgZGF0ZTogRGF0ZTtcbiAgZXJhOiBzdHJpbmc7XG4gIGNhbGVuZGFyOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkRGVjaW1hbFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGVjaW1hbC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5kZWNpbWFsfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEZWNpbWFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERlY2ltYWxWYWx1ZSkge1xuICAgIHRoaXMuX2RlY2ltYWxWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9kZWNpbWFsVmFsdWVPYmo6IFJlYWREZWNpbWFsVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWV4dGVybmFsLXJlcy12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGV4dGVybmFsLXJlcy12YWx1ZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkR2VvbVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbWV0cnktdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuZ2VvbWV0cnlTdHJpbmd9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5VmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEdlb21WYWx1ZSkge1xuICAgIHRoaXMuX2dlb21WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9tVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9nZW9tVmFsdWVPYmo6IFJlYWRHZW9tVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdlb25hbWUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBnZW9uYW1lLXZhbHVlIHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR2VvbmFtZVZhbHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRJbnRlZ2VyVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWludGVnZXItdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5pbnRlZ2VyfX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVnZXJWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVnZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlZ2VyVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW50ZWdlclZhbHVlT2JqOiBSZWFkSW50ZWdlclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZXJ2YWxWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWludGVydmFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVydmFsU3RhcnR9fSAtIHt7dmFsdWVPYmplY3QuaW50ZXJ2YWxFbmR9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVydmFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVydmFsVmFsdWUpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9pbnRlcnZhbFZhbHVlT2JqOiBSZWFkSW50ZXJ2YWxWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkTGlua1ZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saW5rLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwic2Fsc2FoLWxpbmtcIiAoY2xpY2spPVwicmVmUmVzQ2xpY2tlZCgpXCI+e3tyZWZlcnJlZFJlc291cmNlfX08L2E+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaW5rVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGlua1ZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2VJcmk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSZWFkTGlua1ZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgX2xpbmtWYWx1ZU9iajogUmVhZExpbmtWYWx1ZTtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICByZWZlcnJlZFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHRoaXMuX2xpbmtWYWx1ZU9iaik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZExpc3RWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWxpc3QtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QubGlzdE5vZGVMYWJlbH19PC9zcGFuPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaXN0VmFsdWUpIHtcbiAgICB0aGlzLl9saXN0VmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdFZhbHVlT2JqOiBSZWFkTGlzdFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwsIEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLWh0bWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj57e3ZhbHVlT2JqZWN0Lmh0bWx9fTwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgYmluZEV2ZW50cyh2YWx1ZTogQm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kRXZlbnRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNIdG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWxWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZU9iamVjdC5odG1sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIGh0bWw6IHN0cmluZztcbiAgICBwcml2YXRlIF9odG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc0h0bWw7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50czogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICByZWZSZXNDbGlja2VkKHJlZlJlc291cmNlSXJpOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHJlZlJlc291cmNlSXJpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIGNsaWNrIGV2ZW50IHRvIHN0YW5kb2ZmIGxpbmtzIHRoYXQgc2hvd3MgdGhlIHJlZmVycmVkIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlNhbHNhaExpbmspID49IDBcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZlJlc0NsaWNrZWQodGFyZ2V0RWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbGluayBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldEVsZW1lbnQuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3Quc3RyfX08L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0U3RyaW5nVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFRleHRWYWx1ZUFzWG1sIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLXhtbCcsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LnhtbH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNYbWwpIHtcbiAgICAgICAgdGhpcy5feG1sVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94bWxWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF94bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzWG1sO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRVcmlWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXVyaS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dmFsdWVPYmplY3QudXJpfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e3ZhbHVlT2JqZWN0LnVyaX19PC9hPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJpVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFVyaVZhbHVlKSB7XG4gICAgdGhpcy5fX3VyaVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX191cmlWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX191cmlWYWx1ZU9iajogUmVhZFVyaVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb21wYXJlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBjb21wYXJlLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmFwaC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgZ3JhcGgtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JhcGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmlkLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBncmlkLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saXN0LXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBsaXN0LXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1wcm9wZXJ0aWVzLXZpZXcnLFxuICAgIHRlbXBsYXRlOiBgPHA+XG4gICAgcHJvcGVydGllcy12aWV3IHdvcmtzIVxuPC9wPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gICAgQXBpU2VydmljZUVycm9yLFxuICAgIEFwaVNlcnZpY2VSZXN1bHQsXG4gICAgQ29udmVydEpTT05MRCxcbiAgICBJbmNvbWluZ1NlcnZpY2UsXG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICAgIFJlc291cmNlU2VydmljZVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmRlY2xhcmUgbGV0IHJlcXVpcmU6IGFueTtcbmNvbnN0IGpzb25sZCA9IHJlcXVpcmUoJ2pzb25sZCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1yZXNvdXJjZS12aWV3JyxcbiAgICB0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cblxuICAgIDwhLS0gVE9ETzogc3dpdGNoIHRocm91Z2ggdGhlIG1lZGlhIHR5cGUgLS0+XG4gICAgPGt1aS1zdGlsbC1pbWFnZT48L2t1aS1zdGlsbC1pbWFnZT5cbiAgICA8a3VpLW1vdmluZy1pbWFnZT48L2t1aS1tb3ZpbmctaW1hZ2U+XG4gICAgPGt1aS1hbm5vdGF0aW9uPjwva3VpLWFubm90YXRpb24+XG4gICAgPGt1aS1hdWRpbz48L2t1aS1hdWRpbz5cbiAgICA8a3VpLWNvbGxlY3Rpb24+PC9rdWktY29sbGVjdGlvbj5cbiAgICA8a3VpLWRkZD48L2t1aS1kZGQ+XG4gICAgPGt1aS1kb2N1bWVudD48L2t1aS1kb2N1bWVudD5cbiAgICA8a3VpLWxpbmstb2JqPjwva3VpLWxpbmstb2JqPlxuICAgIDxrdWktb2JqZWN0Pjwva3VpLW9iamVjdD5cbiAgICA8a3VpLXJlZ2lvbj48L2t1aS1yZWdpb24+XG4gICAgPGt1aS10ZXh0Pjwva3VpLXRleHQ+XG5cbiAgICA8aDI+bWV0YWRhdGEgZm9yIHJlc291cmNlIHt7IHJlc291cmNlPy5sYWJlbH19ICh7eyByZXNvdXJjZT8uaWQgfX0pPC9oMj5cbiAgICA8aDM+dHlwZToge3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUmVzb3VyY2VDbGFzcyhyZXNvdXJjZT8udHlwZSl9fTwvaDM+XG5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIHJlc291cmNlPy5wcm9wZXJ0aWVzIHwga3VpS2V5XCI+XG4gICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgIDxzcGFuPnt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclByb3BlcnR5KHByb3Aua2V5KX19PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IHZhbCBvZiBwcm9wLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZhbC5nZXRDbGFzc05hbWUoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWNvbG9yLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQ29sb3JWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1jb2xvci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLWh0bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc0h0bWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIiBbYmluZEV2ZW50c109XCJ0cnVlXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1odG1sPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNTdHJpbmdcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1zdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy14bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc1htbFwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0LXZhbHVlLWFzLXhtbD5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1kYXRlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGF0ZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWRhdGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktbGluay12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZExpbmtWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiPjwva3VpLWxpbmstdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktaW50ZWdlci12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEludGVnZXJWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlZ2VyLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWRlY2ltYWwtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREZWNpbWFsVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZGVjaW1hbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1nZW9tZXRyeS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEdlb21WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1nZW9tZXRyeS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS11cmktdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRVcmlWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS11cmktdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktYm9vbGVhbi12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEJvb2xlYW5WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1ib29sZWFuLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWludGVydmFsLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkSW50ZXJ2YWxWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlcnZhbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1saXN0LXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkTGlzdFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWxpc3QtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dGZpbGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlRleHRGaWxlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dGZpbGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ9XCJcIj5Ob3Qgc3VwcG9ydGVkIHt7dmFsLmdldENsYXNzTmFtZSgpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICA8L21hdC1saXN0PlxuICAgIDwvZGl2PlxuXG48L21hdC1jYXJkPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXJpPzogc3RyaW5nID0gJ2h0dHA6Ly9yZGZoLmNoLzhiZTFiN2NmNzEwMyc7XG5cbiAgICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247IC8vIG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIHdpdGggSXJpIGBpcmlgXG4gICAgcmVzb3VyY2U6IFJlYWRSZXNvdXJjZTsgLy8gdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZFxuICAgIGVycm9yTWVzc2FnZTogYW55O1xuXG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXNvdXJjZVNlcnZpY2U6IFJlc291cmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbXMgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgIHRoaXMuaXJpID0gcm91dGVQYXJhbXMuaWQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZSh0aGlzLmlyaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNvdXJjZShpcmk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2UoaXJpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBBcGlTZXJ2aWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBqc29ubGQucHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBhY3QgSlNPTi1MRCB1c2luZyBhbiBlbXB0eSBjb250ZXh0OiBleHBhbmRzIGFsbCBJcmlzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlcy5jb21wYWN0KHJlc3VsdC5ib2R5LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChjb21wYWN0ZWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VTZXE6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSA9IENvbnZlcnRKU09OTEQuY3JlYXRlUmVhZFJlc291cmNlc1NlcXVlbmNlRnJvbUpzb25MRChjb21wYWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBleGFjdGx5IG9uZSByZXNvdXJjZSBpcyByZXR1cm5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCByZXNvdXJjZSBjbGFzcyBJcmlzIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZUNsYXNzSXJpczogc3RyaW5nW10gPSBDb252ZXJ0SlNPTkxELmdldFJlc291cmNlQ2xhc3Nlc0Zyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3MgSXJpcyAocHJvcGVydGllcyBhcmUgaW1wbGllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UuZ2V0UmVzb3VyY2VDbGFzc0RlZmluaXRpb25zKHJlc291cmNlQ2xhc3NJcmlzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNvdXJjZUNsYXNzSW5mb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSByZXNvdXJjZUNsYXNzSW5mb3M7IC8vIGNvbnNvbGUubG9nKCdpbml0aWFsaXphdGlvbiBvZiBvbnRvbG9neUluZm86ICcsIHRoaXMub250b2xvZ3lJbmZvKTsgPiBvYmplY3QgcmVjZWl2ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSBhIHBvc3NpYmx5IGF0dGFjaGVkIGltYWdlIGZpbGUgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UocmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlU2VxLnJlc291cmNlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvdXJjZTogJywgdGhpcy5yZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVxdWVzdEluY29taW5nUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIHJlcXVlc3QgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0IHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggIT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0ICR7cmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aH0gcmVzb3VyY2UocykgZ2l2ZW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSlNPTkxEIG9mIGZ1bGwgcmVzb3VyY2UgcmVxdWVzdCBjb3VsZCBub3QgYmUgZXhwYW5kZWQ6JyArIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yOiBBcGlTZXJ2aWNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10YWJsZS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgdGFibGUtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgS3VpQWN0aW9uTW9kdWxlIH0gZnJvbSAnQGtub3JhL2FjdGlvbic7XG5pbXBvcnQgeyBLdWlDb3JlTW9kdWxlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvY29sb3ItdmFsdWUvY29sb3ItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZGF0ZS12YWx1ZS9kYXRlLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWNpbWFsVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZXh0ZXJuYWwtcmVzLXZhbHVlL2V4dGVybmFsLXJlcy12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZ2VvbWV0cnktdmFsdWUvZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb25hbWVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZ2VvbmFtZS12YWx1ZS9nZW9uYW1lLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlZ2VyVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvaW50ZXJ2YWwtdmFsdWUvaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0VmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2xpc3QtdmFsdWUvbGlzdC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtaHRtbC90ZXh0LXZhbHVlLWFzLWh0bWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtc3RyaW5nL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc1htbENvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXhtbC90ZXh0LXZhbHVlLWFzLXhtbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dGZpbGUtdmFsdWUvdGV4dGZpbGUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IFVyaVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS91cmktdmFsdWUvdXJpLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEF1ZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZGRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50JztcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua09iakNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvbGluay1vYmovbGluay1vYmouY29tcG9uZW50JztcbmltcG9ydCB7IE1vdmluZ0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9tb3ZpbmctaW1hZ2UvbW92aW5nLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RpbGxJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3RleHQvdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFyZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvY29tcGFyZS12aWV3L2NvbXBhcmUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JhcGhWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvcGVydGllc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzb3VyY2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Jlc291cmNlLXZpZXcvcmVzb3VyY2Utdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQnO1xuXG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBLdWlDb3JlTW9kdWxlLFxuICAgICAgICBLdWlBY3Rpb25Nb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxuICAgICAgICBBdWRpb0NvbXBvbmVudCxcbiAgICAgICAgQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgRGRkQ29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICAgICAgTGlua09iakNvbXBvbmVudCxcbiAgICAgICAgTW92aW5nSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIE9iamVjdENvbXBvbmVudCxcbiAgICAgICAgUmVnaW9uQ29tcG9uZW50LFxuICAgICAgICBTdGlsbEltYWdlQ29tcG9uZW50LFxuICAgICAgICBUZXh0Q29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1htbENvbXBvbmVudCxcbiAgICAgICAgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGF0ZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlZ2VyVmFsdWVDb21wb25lbnQsXG4gICAgICAgIENvbG9yVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERlY2ltYWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgVXJpVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbmFtZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlcnZhbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0VmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpbmtWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyaWRWaWV3Q29tcG9uZW50LFxuICAgICAgICBUYWJsZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFJlc291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGFyZVZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyYXBoVmlld0NvbXBvbmVudCxcbiAgICAgICAgUHJvcGVydGllc1ZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcblxuICAgICAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxuICAgICAgICBBdWRpb0NvbXBvbmVudCxcbiAgICAgICAgQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgRGRkQ29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICAgICAgTGlua09iakNvbXBvbmVudCxcbiAgICAgICAgTW92aW5nSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIE9iamVjdENvbXBvbmVudCxcbiAgICAgICAgUmVnaW9uQ29tcG9uZW50LFxuICAgICAgICBTdGlsbEltYWdlQ29tcG9uZW50LFxuICAgICAgICBUZXh0Q29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1htbENvbXBvbmVudCxcbiAgICAgICAgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGF0ZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlZ2VyVmFsdWVDb21wb25lbnQsXG4gICAgICAgIENvbG9yVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERlY2ltYWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgVXJpVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbmFtZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlcnZhbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0VmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpbmtWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyaWRWaWV3Q29tcG9uZW50LFxuICAgICAgICBUYWJsZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFJlc291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGFyZVZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyYXBoVmlld0NvbXBvbmVudCxcbiAgICAgICAgUHJvcGVydGllc1ZpZXdDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEt1aVZpZXdlck1vZHVsZSB7XG59XG4iLCIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIHZpZXdlclxuICovXG5cbi8vIHJlc291cmNlIHZpZXdlclxuZXhwb3J0ICogZnJvbSAnLi9saWIvcmVzb3VyY2UvJztcblxuLy8gcHJvcGVydHkgKGd1aSkgZWxlbWVudFxuZXhwb3J0ICogZnJvbSAnLi9saWIvcHJvcGVydHkvJztcblxuLy8gZGlmZmVyZW50IGtpbmQgb2Ygdmlld3NcbmV4cG9ydCAqIGZyb20gJy4vbGliL3ZpZXcvJztcblxuLy8gdmlld2VyIG1vZHVsZVxuZXhwb3J0ICogZnJvbSAnLi9saWIvdmlld2VyLm1vZHVsZSc7XG4iLCIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG5cbmV4cG9ydCB7Qm9vbGVhblZhbHVlQ29tcG9uZW50IGFzIMOJwrV1fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7Q29sb3JWYWx1ZUNvbXBvbmVudCBhcyDDicK1cn0gZnJvbSAnLi9saWIvcHJvcGVydHkvY29sb3ItdmFsdWUvY29sb3ItdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RGF0ZVZhbHVlQ29tcG9uZW50IGFzIMOJwrVwfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9kYXRlLXZhbHVlL2RhdGUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RGVjaW1hbFZhbHVlQ29tcG9uZW50IGFzIMOJwrVzfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9kZWNpbWFsLXZhbHVlL2RlY2ltYWwtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBhcyDDicK1YmF9IGZyb20gJy4vbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7R2VvbWV0cnlWYWx1ZUNvbXBvbmVudCBhcyDDicK1dn0gZnJvbSAnLi9saWIvcHJvcGVydHkvZ2VvbWV0cnktdmFsdWUvZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7R2VvbmFtZVZhbHVlQ29tcG9uZW50IGFzIMOJwrV3fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9nZW9uYW1lLXZhbHVlL2dlb25hbWUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7SW50ZWdlclZhbHVlQ29tcG9uZW50IGFzIMOJwrVxfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9pbnRlZ2VyLXZhbHVlL2ludGVnZXItdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7SW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCBhcyDDicK1eH0gZnJvbSAnLi9saWIvcHJvcGVydHkvaW50ZXJ2YWwtdmFsdWUvaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7TGlua1ZhbHVlQ29tcG9uZW50IGFzIMOJwrV6fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9saW5rLXZhbHVlL2xpbmstdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7TGlzdFZhbHVlQ29tcG9uZW50IGFzIMOJwrV5fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9saXN0LXZhbHVlL2xpc3QtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IGFzIMOJwrVsfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtaHRtbC90ZXh0LXZhbHVlLWFzLWh0bWwuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQgYXMgw4nCtW19IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1zdHJpbmcvdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNYbWxDb21wb25lbnQgYXMgw4nCtW59IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dGZpbGVWYWx1ZUNvbXBvbmVudCBhcyDDicK1b30gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dGZpbGUtdmFsdWUvdGV4dGZpbGUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7VXJpVmFsdWVDb21wb25lbnQgYXMgw4nCtXR9IGZyb20gJy4vbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7QW5ub3RhdGlvbkNvbXBvbmVudCBhcyDDicK1YX0gZnJvbSAnLi9saWIvcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQge0F1ZGlvQ29tcG9uZW50IGFzIMOJwrVifSBmcm9tICcuL2xpYi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQnO1xuZXhwb3J0IHtDb2xsZWN0aW9uQ29tcG9uZW50IGFzIMOJwrVjfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50JztcbmV4cG9ydCB7RGRkQ29tcG9uZW50IGFzIMOJwrVkfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudCc7XG5leHBvcnQge0RvY3VtZW50Q29tcG9uZW50IGFzIMOJwrVlfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuZXhwb3J0IHtMaW5rT2JqQ29tcG9uZW50IGFzIMOJwrVmfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQnO1xuZXhwb3J0IHtNb3ZpbmdJbWFnZUNvbXBvbmVudCBhcyDDicK1Z30gZnJvbSAnLi9saWIvcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQnO1xuZXhwb3J0IHtPYmplY3RDb21wb25lbnQgYXMgw4nCtWh9IGZyb20gJy4vbGliL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmV4cG9ydCB7UmVnaW9uQ29tcG9uZW50IGFzIMOJwrVpfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudCc7XG5leHBvcnQge1N0aWxsSW1hZ2VDb21wb25lbnQgYXMgw4nCtWp9IGZyb20gJy4vbGliL3Jlc291cmNlL3N0aWxsLWltYWdlL3N0aWxsLWltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQge1RleHRDb21wb25lbnQgYXMgw4nCtWt9IGZyb20gJy4vbGliL3Jlc291cmNlL3RleHQvdGV4dC5jb21wb25lbnQnO1xuZXhwb3J0IHtDb21wYXJlVmlld0NvbXBvbmVudCBhcyDDicK1YmZ9IGZyb20gJy4vbGliL3ZpZXcvY29tcGFyZS12aWV3L2NvbXBhcmUtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtHcmFwaFZpZXdDb21wb25lbnQgYXMgw4nCtWJnfSBmcm9tICcuL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtHcmlkVmlld0NvbXBvbmVudCBhcyDDicK1YmN9IGZyb20gJy4vbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtMaXN0Vmlld0NvbXBvbmVudCBhcyDDicK1YmJ9IGZyb20gJy4vbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCBhcyDDicK1Ymh9IGZyb20gJy4vbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtSZXNvdXJjZVZpZXdDb21wb25lbnQgYXMgw4nCtWJlfSBmcm9tICcuL2xpYi92aWV3L3Jlc291cmNlLXZpZXcvcmVzb3VyY2Utdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtUYWJsZVZpZXdDb21wb25lbnQgYXMgw4nCtWJkfSBmcm9tICcuL2xpYi92aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQnOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBWUUsaUJBQWlCO0lBRWpCLFFBQVE7S0FDUDs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7O0NBR1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7OztJQ0dDLGlCQUFpQjtJQUVqQixRQUFRO0tBQ1A7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Q0FHWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7O0lDR0MsaUJBQWlCO0lBRWpCLFFBQVE7S0FDUDs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7O0NBR1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7OztJQ0dDLGlCQUFpQjtJ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