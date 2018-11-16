/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KnoraConstants, Point2D } from '@knora/core';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
export class ImageRegion {
    /**
     *
     * @param {?} regionResource a resource of type Region
     */
    constructor(regionResource) {
        this.regionResource = regionResource;
    }
    /**
     * Get all geometry information belonging to this region.
     *
     * @return {?}
     */
    getGeometries() {
        return /** @type {?} */ (this.regionResource.properties[KnoraConstants.hasGeometry]);
    }
}
if (false) {
    /** @type {?} */
    ImageRegion.prototype.regionResource;
}
/**
 * Represents an image including its regions.
 */
export class StillImageRepresentation {
    /**
     *
     * @param {?} stillImageFileValue a [[ReadStillImageFileValue]] representing an image.
     * @param {?} regions the regions belonging to the image.
     */
    constructor(stillImageFileValue, regions) {
        this.stillImageFileValue = stillImageFileValue;
        this.regions = regions;
    }
}
if (false) {
    /** @type {?} */
    StillImageRepresentation.prototype.stillImageFileValue;
    /** @type {?} */
    StillImageRepresentation.prototype.regions;
}
/**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
export class RequestStillImageRepresentations {
    /**
     *
     * @param {?} offsetChange the relative change of the offset in order to get more incoming StillImageRepresentations for the resource currently being displayed. Either 1 or -1.
     * @param {?} whenLoadedCB a callback function that is called when more incoming StillImageRepresentations have been requested and the answer arrived from the server.
     */
    constructor(offsetChange, whenLoadedCB) {
        this.offsetChange = offsetChange;
        this.whenLoadedCB = whenLoadedCB;
    }
}
if (false) {
    /** @type {?} */
    RequestStillImageRepresentations.prototype.offsetChange;
    /** @type {?} */
    RequestStillImageRepresentations.prototype.whenLoadedCB;
}
/**
 * Represents a geometry belonging to a specific region.
 */
export class GeometryForRegion {
    /**
     *
     * @param {?} geometry the geometrical information.
     * @param {?} region the region the geometry belongs to.
     */
    constructor(geometry, region) {
        this.geometry = geometry;
        this.region = region;
    }
}
if (false) {
    /** @type {?} */
    GeometryForRegion.prototype.geometry;
    /** @type {?} */
    GeometryForRegion.prototype.region;
}
/**
 * This component creates a OpenSeadragon viewer instance.
 * Accepts an array of ReadResource containing (among other resources) ReadStillImageFileValues to be rendered.
 * The viewer will not render ReadStillImageFileValues with isPreview == true
 * \@member resources - resources containing (among other resources) the StillImageFileValues and incoming regions to be rendered. (Use as angular \@Input data binding property.)
 */
export class StillImageComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.getImages = new EventEmitter();
        this.regionHovered = new EventEmitter();
        // the paging limit should be defined in the configuration of the app
        this.pagingLimit = 25;
    }
    /**
     * Calculates the surface of a rectangular region.
     *
     * @param {?} geom the region's geometry.
     * @return {?} the surface.
     */
    static surfaceOfRectangularRegion(geom) {
        if (geom.type !== 'rectangle') {
            console.log('expected rectangular region, but ' + geom.type + ' given');
            return 0;
        }
        /** @type {?} */
        const w = Math.max(geom.points[0].x, geom.points[1].x) - Math.min(geom.points[0].x, geom.points[1].x);
        /** @type {?} */
        const h = Math.max(geom.points[0].y, geom.points[1].y) - Math.min(geom.points[0].y, geom.points[1].y);
        return w * h;
    }
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param {?} imagesToDisplay the given file values to de displayed.
     * @return {?} the tile sources to be passed to OSD viewer.
     */
    static prepareTileSourcesFromFileValues(imagesToDisplay) {
        /** @type {?} */
        let imageXOffset = 0;
        /** @type {?} */
        let imageYOffset = 0;
        /** @type {?} */
        const tileSources = [];
        for (const image of imagesToDisplay) {
            /** @type {?} */
            const sipiBasePath = image.imageServerIIIFBaseURL + '/' + image.imageFilename;
            /** @type {?} */
            const width = image.dimX;
            /** @type {?} */
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['images'] && changes['images'].isFirstChange()) {
            this.setupViewer();
        }
        if (changes['images']) {
            this.openImages();
            this.renderRegions();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // initialisation is done on first run of ngOnChanges
    }
    /**
     * @return {?}
     */
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
     * @return {?}
     */
    updateImages() {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.openImages();
    }
    /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     * @return {?}
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
        {
            // this.images cannot display more images of length interval
            // request more images from the server using a negative offset
            // TODO: implement getting previous offset (also in parent component)
        }
    }
    /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     * @return {?}
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
                /** @type {?} */
                const remainingDiff = this.images.length - this.imageRangeEnd + 1;
                this.imageRangeStart += remainingDiff;
                this.imageRangeEnd += remainingDiff;
                // TODO: deactivate next button
            }
            this.openImages();
            this.renderRegions();
        }
        else if (this.images.length % this.pagingLimit === 0) {
            // paging always returned full result lists, so there could be more data to fetch
            console.log(`request more images`);
            /** @type {?} */
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
                    /** @type {?} */
                    const remainingImages = this.images.length - 1 - this.imageRangeEnd;
                    this.imageRangeStart += remainingImages;
                    this.imageRangeEnd += remainingImages;
                    // TODO: no new images can be loaded -> deactivate control in GUI (note that perhaps sufficient permissions were missing, so we actually cannot be sure that higher offsets still deliver images)
                    this.openImages();
                    this.renderRegions();
                }
            };
            /** @type {?} */
            const msg = new RequestStillImageRepresentations(1, callback);
            this.getImages.emit(msg);
        }
        else {
            // no more data to fetch
            // TODO: deactivate next button
        }
    }
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     * @return {?}
     */
    updateRegions() {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.renderRegions();
    }
    /**
     * Initializes the OpenSeadragon viewer
     * @return {?}
     */
    setupViewer() {
        /** @type {?} */
        const viewerContainer = this.elementRef.nativeElement.getElementsByClassName('osd-container')[0];
        /** @type {?} */
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
            // doesn't work yet
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
     * Adds all (non-preview) images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     * @return {?}
     */
    openImages() {
        /** @type {?} */
        const fileValues = this.images.map((img) => {
            return img.stillImageFileValue;
        });
        /** @type {?} */
        const tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues.slice(this.imageRangeStart, this.imageRangeEnd + 1));
        this.viewer.clearOverlays();
        this.viewer.open(tileSources);
    }
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     * @return {?}
     */
    renderRegions() {
        this.viewer.clearOverlays();
        /** @type {?} */
        let imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
        for (const image of this.images) {
            /** @type {?} */
            const aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
            /** @type {?} */
            let geometries = [];
            image.regions.map((reg) => {
                /** @type {?} */
                let geoms = reg.getGeometries();
                geoms.map((geom) => {
                    /** @type {?} */
                    let geomForReg = new GeometryForRegion(geom.geometry, reg.regionResource);
                    geometries.push(geomForReg);
                });
            });
            // sort all geometries belonging to this page
            geometries.sort((geom1, geom2) => {
                if (geom1.geometry.type === 'rectangle' && geom2.geometry.type === 'rectangle') {
                    /** @type {?} */
                    const surf1 = StillImageComponent.surfaceOfRectangularRegion(geom1.geometry);
                    /** @type {?} */
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
                /** @type {?} */
                let geometry = geom.geometry;
                this.createSVGOverlay(geom.region.id, geometry, aspectRatio, imageXOffset, geom.region.label);
            }
            imageXOffset++;
        }
    }
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param {?} regionIri the Iri of the region.
     * @param {?} geometry - the geometry describing the ROI
     * @param {?} aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param {?} xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param {?} toolTip -  the tooltip which should be displayed on mousehover of the svg element
     * @return {?}
     */
    createSVGOverlay(regionIri, geometry, aspectRatio, xOffset, toolTip) {
        /** @type {?} */
        const lineColor = geometry.lineColor;
        /** @type {?} */
        const lineWidth = geometry.lineWidth;
        /** @type {?} */
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
        /** @type {?} */
        const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        svgTitle.textContent = toolTip;
        /** @type {?} */
        const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgGroup.appendChild(svgTitle);
        svgGroup.appendChild(svgElement);
        /** @type {?} */
        const overlay = this.viewer.svgOverlay();
        overlay.node().appendChild(svgGroup);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param {?} geometry - the geometry describing the rectangle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    addSVGAttributesRectangle(svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        const pointA = geometry.points[0];
        /** @type {?} */
        const pointB = geometry.points[1];
        /** @type {?} */
        const positionUL = new Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        /** @type {?} */
        const positionLR = new Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        /** @type {?} */
        const positionUR = new Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        /** @type {?} */
        const positionLL = new Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        /** @type {?} */
        const points = [positionUL, positionUR, positionLR, positionLL];
        /** @type {?} */
        const viewCoordPoints = this.image2ViewPortCoords(points, aspectRatio, xOffset);
        /** @type {?} */
        const pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon')
     * @param {?} geometry - the geometry describing the polygon
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    addSVGAttributesPolygon(svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        const viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        /** @type {?} */
        const pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    }
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'circle')
     * @param {?} geometry - the geometry describing the circle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    addSVGAttributesCircle(svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        const viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        /** @type {?} */
        const cx = String(viewCoordPoints[0].x);
        /** @type {?} */
        const cy = String(viewCoordPoints[0].y);
        /** @type {?} */
        const radius = String(Math.sqrt(geometry.radius.x * geometry.radius.x + aspectRatio * aspectRatio * geometry.radius.y * geometry.radius.y));
        svgElement.setAttribute('cx', cx);
        svgElement.setAttribute('cy', cy);
        svgElement.setAttribute('r', radius);
    }
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param {?} points - an array of points in coordinate system relative to an image
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image
     * @param {?} xOffset - the x-offset in viewport coordinates of the image
     * @return {?} - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    image2ViewPortCoords(points, aspectRatio, xOffset) {
        return points.map((point) => {
            return new Point2D(point.x + xOffset, point.y * aspectRatio);
        });
    }
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param {?} points - an array of points to be serialized to a string
     * @return {?} - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    createSVGPolygonPointsAttribute(points) {
        /** @type {?} */
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
if (false) {
    /** @type {?} */
    StillImageComponent.prototype.images;
    /** @type {?} */
    StillImageComponent.prototype.imageRangeStart;
    /** @type {?} */
    StillImageComponent.prototype.imageRangeEnd;
    /** @type {?} */
    StillImageComponent.prototype.imageChangeInterval;
    /** @type {?} */
    StillImageComponent.prototype.imageCaption;
    /** @type {?} */
    StillImageComponent.prototype.getImages;
    /** @type {?} */
    StillImageComponent.prototype.regionHovered;
    /** @type {?} */
    StillImageComponent.prototype.pagingLimit;
    /** @type {?} */
    StillImageComponent.prototype.viewer;
    /** @type {?} */
    StillImageComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbGwtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDSCxjQUFjLEVBQ2QsT0FBTyxFQUtWLE1BQU0sYUFBYSxDQUFDOzs7OztBQWVyQixNQUFNOzs7OztJQU1GLFlBQXFCLGNBQTRCO1FBQTVCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO0tBRWhEOzs7Ozs7SUFPRCxhQUFhO1FBQ1QsTUFBTSxtQkFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFvQixFQUFDO0tBQ3hGO0NBQ0o7Ozs7Ozs7O0FBS0QsTUFBTTs7Ozs7O0lBT0YsWUFBcUIsbUJBQTRDLEVBQVcsT0FBc0I7UUFBN0Usd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtRQUFXLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FFakc7Q0FFSjs7Ozs7Ozs7OztBQUtELE1BQU07Ozs7OztJQU9GLFlBQXFCLFlBQW9CLEVBQVcsWUFBOEM7UUFBN0UsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBVyxpQkFBWSxHQUFaLFlBQVksQ0FBa0M7S0FDakc7Q0FDSjs7Ozs7Ozs7OztBQUtELE1BQU07Ozs7OztJQU9GLFlBQXFCLFFBQXdCLEVBQVcsTUFBb0I7UUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFjO0tBQzNFO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUE0RUQsTUFBTTs7OztJQXdGRixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3lCQS9FcEIsSUFBSSxZQUFZLEVBQW9DOzZCQUNoRCxJQUFJLFlBQVksRUFBVTs7MkJBRzlCLEVBQUU7S0E0RXZCOzs7Ozs7O0lBakVPLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxJQUFvQjtRQUUxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDWjs7UUFFRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUN0RyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztJQVVULE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxlQUEwQzs7UUFDdEYsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDOztRQUNyQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7O1FBQ3JCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV2QixHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDOztZQUNsQyxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7O1lBQzlFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1lBQ3pCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1lBRzFCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Ozs7Z0JBSWIsWUFBWSxFQUFFO29CQUNWLFVBQVUsRUFBRSx5Q0FBeUM7b0JBQ3JELEtBQUssRUFBRSxZQUFZO29CQUNuQixRQUFRLEVBQUUsTUFBTTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7b0JBQ3JELFVBQVUsRUFBRSwwQkFBMEI7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDOzRCQUNOLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzRCQUNwQyxPQUFPLEVBQUUsSUFBSTt5QkFDaEIsQ0FBQztpQkFDTDtnQkFDRCxHQUFHLEVBQUUsWUFBWTtnQkFDakIsR0FBRyxFQUFFLFlBQVk7YUFDcEIsQ0FBQyxDQUFDO1lBRUgsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7U0FRbEI7UUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFNdkIsV0FBVyxDQUFDLE9BQXdDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7O0lBRUQsUUFBUTs7S0FFUDs7OztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDM0I7S0FDSjs7Ozs7OztJQU9ELFlBQVk7UUFDUixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUtPLFFBQVE7OztRQUtaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXZELElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBRS9DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUVsQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFFekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELENBQUM7Ozs7U0FLQTs7Ozs7O0lBT0csU0FBUztRQUViLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFHOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUVyQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDakQsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7YUFDbEQ7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2dCQUV4QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFFbEUsSUFBSSxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDOzthQUl2QztZQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FFeEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O1lBS25DLE1BQU0sUUFBUSxHQUFHLENBQUMsY0FBc0IsRUFBRSxFQUFFO2dCQUV4QyxFQUFFLENBQUMsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7b0JBRzdDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO29CQUNqRCxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztvQkFFL0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3hCO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBRzVCLElBQUksQ0FBQyxlQUFlLElBQUksY0FBYyxDQUFDO29CQUN2QyxJQUFJLENBQUMsYUFBYSxJQUFJLGNBQWMsQ0FBQztvQkFFckMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3hCO2dCQUFDLElBQUksQ0FBQyxDQUFDOztvQkFFSixNQUFNLGVBQWUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFFNUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxhQUFhLElBQUksZUFBZSxDQUFDOztvQkFJdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBRXhCO2FBR0osQ0FBQzs7WUFFRixNQUFNLEdBQUcsR0FBRyxJQUFJLGdDQUFnQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUU1QjtRQUFDLElBQUksQ0FBQyxDQUFDOzs7U0FJUDs7Ozs7Ozs7SUFRTCxhQUFhO1FBQ1QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7SUFLTyxXQUFXOztRQUNmLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNqRyxNQUFNLFVBQVUsR0FBRztZQUNmLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLGlCQUFpQjtZQUMvQixhQUFhLEVBQUUsa0JBQWtCO1lBQ2pDLGNBQWMsRUFBRSxtQkFBbUI7WUFDbkMsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixVQUFVLEVBQUUsY0FBYztZQUMxQixjQUFjLEVBQUUsbUJBQW1CO1lBQ25DLGdCQUFnQixFQUFFLHFCQUFxQjs7WUFDdkMsaUJBQWlCLEVBQUUsc0JBQXNCO1NBRTVDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxJQUFJO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xEO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsSUFBSTtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFDLENBQUMsQ0FBQzs7Ozs7OztJQVFDLFVBQVU7O1FBS2QsTUFBTSxVQUFVLEdBQThCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUN6RCxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztTQUNsQyxDQUFDLENBQUM7O1FBR1AsTUFBTSxXQUFXLEdBQWEsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuSixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7SUFNMUIsYUFBYTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDOztRQUU1QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1lBQzlCLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBR3RGLElBQUksVUFBVSxHQUF3QixFQUFFLENBQUM7WUFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7Z0JBRXRCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOztvQkFDZixJQUFJLFVBQVUsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUUxRSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMvQixDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7O1lBR0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFFN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7O29CQUU3RSxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O29CQUM3RSxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7OztvQkFJN0UsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ1o7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNiO2lCQUVKO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ1o7YUFHSixDQUFDLENBQUM7O1lBR0gsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQzs7Z0JBRTFCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRWpHO1lBRUQsWUFBWSxFQUFFLENBQUM7U0FDbEI7Ozs7Ozs7Ozs7O0lBWUcsZ0JBQWdCLENBQUMsU0FBaUIsRUFBRSxRQUF3QixFQUFFLFdBQW1CLEVBQUUsT0FBZSxFQUFFLE9BQWU7O1FBQ3ZILE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7O1FBQ3JDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7O1FBRXJDLElBQUksVUFBVSxDQUFDO1FBQ2YsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxXQUFXO2dCQUNaLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQztZQUNWLEtBQUssU0FBUztnQkFDVixVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN6RSxLQUFLLENBQUM7WUFDVixLQUFLLFFBQVE7Z0JBQ1QsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4RUFBOEUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVHLE1BQU0sQ0FBQztTQUNkO1FBQ0QsVUFBVSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzFELFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbkQsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLFNBQVMsR0FBRyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7O1FBR2xHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRWQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRixRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzs7UUFFL0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RSxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBRWpDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQVVqQyx5QkFBeUIsQ0FBQyxVQUFzQixFQUFFLFFBQXdCLEVBQUUsV0FBbUIsRUFBRSxPQUFlOztRQUNwSCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNsQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUlsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDM0YsTUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQzNGLE1BQU0sVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUMzRixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFM0YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzs7UUFDaEUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBQ2hGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQVU1Qyx1QkFBdUIsQ0FBQyxVQUFzQixFQUFFLFFBQXdCLEVBQUUsV0FBbUIsRUFBRSxPQUFlOztRQUNsSCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBQ3pGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQVU1QyxzQkFBc0IsQ0FBQyxVQUFzQixFQUFFLFFBQXdCLEVBQUUsV0FBbUIsRUFBRSxPQUFlOztRQUNqSCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBQ3pGLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3hDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBS3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBV2pDLG9CQUFvQixDQUFDLE1BQWlCLEVBQUUsV0FBbUIsRUFBRSxPQUFlO1FBQ2hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDaEUsQ0FBQyxDQUFDOzs7Ozs7O0lBUUMsK0JBQStCLENBQUMsTUFBaUI7O1FBQ3JELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixZQUFZLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsWUFBWSxJQUFJLEdBQUcsQ0FBQztnQkFDcEIsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFlBQVksSUFBSSxHQUFHLENBQUM7YUFDdkI7U0FDSjtRQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7Ozs7WUF6akIzQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErRGI7Z0JBQ0csTUFBTSxFQUFFLENBQUMscTZCQUFxNkIsQ0FBQzthQUNsN0I7Ozs7WUF6S0csVUFBVTs7O3FCQTRLVCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsTUFBTTs0QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgUG9pbnQyRCxcbiAgICBSZWFkR2VvbVZhbHVlLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgICBSZWdpb25HZW9tZXRyeVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cblxuLy8gVGhpcyBjb21wb25lbnQgbmVlZHMgdGhlIG9wZW5zZWFkcmFnb24gbGlicmFyeSBpdHNlbGYsIGFzIHdlbGwgYXMgdGhlIG9wZW5zZWFkcmFnb24gcGx1Z2luIG9wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXlcbi8vIEJvdGggbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgdmlhIHBhY2thZ2UuanNvbiwgYW5kIGxvYWRlZCBnbG9iYWxseSB2aWEgdGhlIHNjcmlwdCB0YWcgaW4gLmFuZ3VsYXItY2xpLmpzb25cblxuLy8gT3BlblNlYWRyYWdvbiBkb2VzIG5vdCBleHBvcnQgaXRzZWxmIGFzIEVTNi9FQ01BMjAxNSBtb2R1bGUsXG4vLyBpdCBpcyBsb2FkZWQgZ2xvYmFsbHkgaW4gc2NyaXB0cyB0YWcgb2YgYW5ndWxhci1jbGkuanNvbixcbi8vIHdlIHN0aWxsIG5lZWQgdG8gZGVjbGFyZSB0aGUgbmFtZXNwYWNlIHRvIG1ha2UgVHlwZVNjcmlwdCBjb21waWxlciBoYXBweS5cbmRlY2xhcmUgbGV0IE9wZW5TZWFkcmFnb246IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaW9uLlxuICogQ29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcmVnaW9uIGFuZCBpdHMgZ2VvbWV0cmllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvblJlc291cmNlIGEgcmVzb3VyY2Ugb2YgdHlwZSBSZWdpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb25SZXNvdXJjZTogUmVhZFJlc291cmNlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdlb21ldHJ5IGluZm9ybWF0aW9uIGJlbG9uZ2luZyB0byB0aGlzIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0R2VvbWV0cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uUmVzb3VyY2UucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNHZW9tZXRyeV0gYXMgUmVhZEdlb21WYWx1ZVtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltYWdlIGluY2x1ZGluZyBpdHMgcmVnaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGlsbEltYWdlRmlsZVZhbHVlIGEgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dIHJlcHJlc2VudGluZyBhbiBpbWFnZS5cbiAgICAgKiBAcGFyYW0gcmVnaW9ucyB0aGUgcmVnaW9ucyBiZWxvbmdpbmcgdG8gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0aWxsSW1hZ2VGaWxlVmFsdWU6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLCByZWFkb25seSByZWdpb25zOiBJbWFnZVJlZ2lvbltdKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHJlcXVlc3RzIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGxvYWQgbW9yZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0Q2hhbmdlIHRoZSByZWxhdGl2ZSBjaGFuZ2Ugb2YgdGhlIG9mZnNldCBpbiBvcmRlciB0byBnZXQgbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGZvciB0aGUgcmVzb3VyY2UgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZC4gRWl0aGVyIDEgb3IgLTEuXG4gICAgICogQHBhcmFtIHdoZW5Mb2FkZWRDQiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGhhdmUgYmVlbiByZXF1ZXN0ZWQgYW5kIHRoZSBhbnN3ZXIgYXJyaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgb2Zmc2V0Q2hhbmdlOiBudW1iZXIsIHJlYWRvbmx5IHdoZW5Mb2FkZWRDQjogKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdlb21ldHJ5IGJlbG9uZ2luZyB0byBhIHNwZWNpZmljIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Rm9yUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IHRoZSBnZW9tZXRyaWNhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaW9uIHRoZSByZWdpb24gdGhlIGdlb21ldHJ5IGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCByZWFkb25seSByZWdpb246IFJlYWRSZXNvdXJjZSkge1xuICAgIH1cblxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNyZWF0ZXMgYSBPcGVuU2VhZHJhZ29uIHZpZXdlciBpbnN0YW5jZS5cbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgUmVhZFJlc291cmNlIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIHJlbmRlcmVkLlxuICogVGhlIHZpZXdlciB3aWxsIG5vdCByZW5kZXIgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHdpdGggaXNQcmV2aWV3ID09IHRydWVcbiAqIEBtZW1iZXIgcmVzb3VyY2VzIC0gcmVzb3VyY2VzIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgdGhlIFN0aWxsSW1hZ2VGaWxlVmFsdWVzIGFuZCBpbmNvbWluZyByZWdpb25zIHRvIGJlIHJlbmRlcmVkLiAoVXNlIGFzIGFuZ3VsYXIgQElucHV0IGRhdGEgYmluZGluZyBwcm9wZXJ0eS4pXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXN0aWxsLWltYWdlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzdGlsbC1pbWFnZS12aWV3ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiBsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9QUkVWX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIG1haW4gY29udGVudCB3aXRoIG5hdmlnYXRpb24gYW5kIG9zZCB2aWV3ZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgICAgICA8IS0tIGhlYWRlciB3aXRoIGltYWdlIHRvb2xzIC0tPlxuICAgICAgICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICAgICAgICAgICAgPCEtLSBob21lIGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfSE9NRVwiPjxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHpvb20gYnV0dG9ucyAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9aT09NX0lOXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fT1VUXCI+PG1hdC1pY29uPnJlbW92ZTwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLSB3aW5kb3cgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX0ZVTExfUEFHRVwiPjxtYXQtaWNvbj5mdWxsc2NyZWVuPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICAgICAgICA8L21hdC10b29sYmFyPlxuXG4gICAgICAgIDwhLS0gb3BlbnNlYWRyYWdvbiAob3NkKSB2aWV3ZXIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvc2QtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIDwhLS0gL29wZW5zZWFkcmFnb24gKG9zZCkgLS0+XG4gICAgICAgIDwhLS0gZm9vdGVyIGZvciBjb3B5cmlnaHQgaW5mbzsgZG93bmxvYWQgYnV0dG9uIGV0Yy4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWF0LWNhcHRpb25cIiBbaW5uZXJIdG1sXT1cImltYWdlQ2FwdGlvblwiPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIHJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9ORVhUX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPCEtLSBzaW1wbGUgaW1hZ2Ugdmlld2VyIGUuZy4gYXMgYSBwcmV2aWV3IC0tPlxuPCEtLSBUT0RPOiBoYW5kbGUgaW1hZ2VzIGFycmF5IC0tPlxuPCEtLTxpbWcgKm5nSWY9XCJzaW1wbGUgJiYgaW1hZ2VzPy5sZW5ndGggPT09IDE7IGVsc2Ugb3NkVmlld2VyXCIgW3NyY109XCJzaW1wbGVJbWFnZUV4YW1wbGVcIj4tLT5cblxuXG48IS0tXG4gICAgPGRpdj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvTGVmdCgpXCI+Jmx0OyZsdDs8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW1hZ2VzLmxlbmd0aCA+IDFcIiAoY2xpY2spPVwiZ290b1JpZ2h0KClcIj4mZ3Q7Jmd0Ozwvc3Bhbj5cbiAgICA8L2Rpdj5cbi0tPlxuXG5cblxuYCxcbiAgICBzdHlsZXM6IFtgLnN0aWxsLWltYWdlLXZpZXdlcntkaXNwbGF5OmlubGluZS1mbGV4O2hlaWdodDo0MDBweDttYXgtd2lkdGg6ODAwcHg7d2lkdGg6MTAwJX1AbWVkaWEgKG1heC1oZWlnaHQ6NjM2cHgpey5zdGlsbC1pbWFnZS12aWV3ZXJ7aGVpZ2h0OjMwMHB4fX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9ue2hlaWdodDpjYWxjKDQwMHB4ICsgNjRweCArIDI0cHgpO3dpZHRoOjM2cHh9LnN0aWxsLWltYWdlLXZpZXdlciAubmF2aWdhdGlvbiAubWF0LWJ1dHRvbi5mdWxsLXNpemV7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O3dpZHRoOjM2cHghaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7bWluLXdpZHRoOjM2cHghaW1wb3J0YW50fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnR7aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7bWF4LXdpZHRoOmNhbGMoODAwcHggLSAoMiAqIDM2cHgpKTt3aWR0aDpjYWxjKDEwMCUgLSAoMiAqIDM2cHgpKX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVye2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDo0MDBweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVyLmZ1bGxzY3JlZW57bWF4LXdpZHRoOjEwMHZ3fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLmZvb3RlciBwe2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDoyNHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4fS9kZWVwLyAucm9pLXN2Z292ZXJsYXl7b3BhY2l0eTouNDtmaWxsOnRyYW5zcGFyZW50O3N0cm9rZTojMDA2OTVjO3N0cm9rZS13aWR0aDoycHg7dmVjdG9yLWVmZmVjdDpub24tc2NhbGluZy1zdHJva2V9LnJvaS1zdmdvdmVybGF5OmZvY3VzLC9kZWVwLyAucm9pLXN2Z292ZXJsYXk6aG92ZXJ7b3BhY2l0eToxfWBdXG59KVxuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGltYWdlczogU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uW107XG4gICAgQElucHV0KCkgaW1hZ2VSYW5nZVN0YXJ0OiBudW1iZXI7ICAvLyBpbmRleCBmaXJzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWRcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlRW5kOiBudW1iZXI7IC8vIGluZGV4IG9mIGxhc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMgdG8gYmUgZGlzcGxheWVkLlxuICAgIEBJbnB1dCgpIGltYWdlQ2hhbmdlSW50ZXJ2YWw6IG51bWJlcjsgLy8gdGhlIHNpemUgb2YgdGhlIGludGVydmFsIHdoZW4gZGlzcGxheWluZyBtb3JlIGltYWdlcyBvZiB0aGlzLmltYWdlc1xuXG4gICAgQElucHV0KCkgaW1hZ2VDYXB0aW9uPzogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGdldEltYWdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnM+KCk7IC8vIHNlbmRzIGEgbWVzc2FnZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCAob2JqZWN0LmNvbXBvbmVudCkgdG8gbG9hZCB0aGUgbmV4dCBvciBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgKGltYWdlcykgZnJvbSB0aGUgc2VydmVyXG4gICAgQE91dHB1dCgpIHJlZ2lvbkhvdmVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8vIHRoZSBwYWdpbmcgbGltaXQgc2hvdWxkIGJlIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGFwcFxuICAgIHBhZ2luZ0xpbWl0OiBudW1iZXIgPSAyNTtcblxuXG4gICAgcHJpdmF0ZSB2aWV3ZXI7XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIG9mIGEgcmVjdGFuZ3VsYXIgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb20gdGhlIHJlZ2lvbidzIGdlb21ldHJ5LlxuICAgICAqIEByZXR1cm5zIHRoZSBzdXJmYWNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb206IFJlZ2lvbkdlb21ldHJ5KTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoZ2VvbS50eXBlICE9PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGVjdGVkIHJlY3Rhbmd1bGFyIHJlZ2lvbiwgYnV0ICcgKyBnZW9tLnR5cGUgKyAnIGdpdmVuJyk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KTtcblxuICAgICAgICByZXR1cm4gdyAqIGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbGUgc291cmNlcyBmcm9tIHRoZSBnaXZlbiBzZXF1ZW5jZSBvZiBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW1hZ2VzVG9EaXNwbGF5IHRoZSBnaXZlbiBmaWxlIHZhbHVlcyB0byBkZSBkaXNwbGF5ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRpbGUgc291cmNlcyB0byBiZSBwYXNzZWQgdG8gT1NEIHZpZXdlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhpbWFnZXNUb0Rpc3BsYXk6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10pOiBPYmplY3RbXSB7XG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwO1xuICAgICAgICBsZXQgaW1hZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGltYWdlc1RvRGlzcGxheSkge1xuICAgICAgICAgICAgY29uc3Qgc2lwaUJhc2VQYXRoID0gaW1hZ2UuaW1hZ2VTZXJ2ZXJJSUlGQmFzZVVSTCArICcvJyArIGltYWdlLmltYWdlRmlsZW5hbWU7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLmRpbVg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5kaW1ZO1xuXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgT3BlblNlYWRyYWdvbiB0aWxlU291cmNlcyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uVmlld2VyLmh0bWwjb3BlblxuICAgICAgICAgICAgdGlsZVNvdXJjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gY29uc3RydWN0IElJSUYgdGlsZVNvdXJjZSBjb25maWd1cmF0aW9uIGFjY29yZGluZyB0b1xuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yLjEvI3RlY2huaWNhbC1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsc28gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMC8jYS1pbXBsZW1lbnRhdGlvbi1ub3Rlc1xuICAgICAgICAgICAgICAgICd0aWxlU291cmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIvY29udGV4dC5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IHNpcGlCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlJzogWydodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9sZXZlbDIuanNvbiddLFxuICAgICAgICAgICAgICAgICAgICAncHJvdG9jb2wnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpbGVzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdzY2FsZUZhY3RvcnMnOiBbMSwgMiwgNCwgOCwgMTYsIDMyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd4JzogaW1hZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICd5JzogaW1hZ2VZT2Zmc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0Kys7XG5cbiAgICAgICAgICAgIC8vIDUgaW1hZ2VzIHBlciByb3dcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZiAoaW1hZ2VYT2Zmc2V0ICUgNSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGltYWdlWU9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWxlU291cmNlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSAmJiBjaGFuZ2VzWydpbWFnZXMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaW1hZ2VzJ10pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gaW5pdGlhbGlzYXRpb24gaXMgZG9uZSBvbiBmaXJzdCBydW4gb2YgbmdPbkNoYW5nZXNcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYWxsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgd2VyZSBhZGRlZCB0byB0aGlzLmltYWdlcyBhZnRlciBjcmVhdGlvbi9hc3NpZ25tZW50IG9mIHRoZSB0aGlzLmltYWdlcyBhcnJheS4pXG4gICAgICovXG4gICAgdXBkYXRlSW1hZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgYnkgcmVxdWVzdGluZyB0aGUgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoZGVjcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9MZWZ0KCkge1xuXG4gICAgICAgIC8vIFRPRE86IG1vdmUgbGVmdCBvbiB0aGlzLmltYWdlc1xuICAgICAgICAvLyBUT0RPOiBpZiBuZWNlc3NhcnksIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyXG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsID49IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgLT0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID4gMCkge1xuICAgICAgICAgICAgLy8gZmV3ZXIgcmVtYWluaW5nIGltYWdlcyB0aGFuIGludGVydmFsLCBzaG93IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlUmFuZ2VTdGFydDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgbmVnYXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBnZXR0aW5nIHByZXZpb3VzIG9mZnNldCAoYWxzbyBpbiBwYXJlbnQgY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyBmb3IgdGhlIGN1cnJlbnQgcmVzb3VyY2UgKGluY3JlYXNlIG9mZnNldCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnb3RvUmlnaHQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmFuZ2VFbmQgKyB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPCB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgd2hvbGUgbmV4dCBpbnRlcnZhbCBjYW4gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgbmV4dCBpbnRlcnZhbGApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNgKTtcbiAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWQganVzdCBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdEaWZmID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gdGhpcy5pbWFnZVJhbmdlRW5kICsgMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHJlbWFpbmluZ0RpZmY7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHJlbWFpbmluZ0RpZmY7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZWFjdGl2YXRlIG5leHQgYnV0dG9uXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAlIHRoaXMucGFnaW5nTGltaXQgPT09IDApIHsgLy8gcGFnaW5nIGFsd2F5cyByZXR1cm5lZCBmdWxsIHJlc3VsdCBsaXN0cywgc28gdGhlcmUgY291bGQgYmUgbW9yZSBkYXRhIHRvIGZldGNoXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVxdWVzdCBtb3JlIGltYWdlc2ApO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgY2Fubm90IGRpc3BsYXkgbW9yZSBpbWFnZXMgb2YgbGVuZ3RoIGludGVydmFsXG4gICAgICAgICAgICAvLyByZXF1ZXN0IG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciB1c2luZyBhIHBvc2l0aXZlIG9mZnNldFxuXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBwYXJlbnQgY29tcG9uZW50IGxvYWRlZCBuZXcgaW1hZ2VzXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChudW1iZXJPZkltYWdlczogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZJbWFnZXMgPj0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgaW1hZ2VzIHdlcmUgbG9hZGVkIHRoYW4gYXJlIGFjdHVhbGx5IHRvIGJlIGRpc3BsYXllZFxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXJPZkltYWdlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFtb3VudCBvZiBuZXcgaW1hZ2VzIGluIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwsIHNob3cgZXZlcnl0aGluZyB0aGF0IGNhbiBiZSBzaG93blxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IG51bWJlck9mSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gbnVtYmVyT2ZJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIG5ldyBpbWFnZXMgY291bGQgYmUgcmV0dXJuZWQsIGRpc3BsYXkgcmVtYWluaW5nIGltYWdlcyAodGhlcmUgYXJlIGZld2VyIHRoYW4gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdJbWFnZXM6IG51bWJlciA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEgLSB0aGlzLmltYWdlUmFuZ2VFbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG5vIG5ldyBpbWFnZXMgY2FuIGJlIGxvYWRlZCAtPiBkZWFjdGl2YXRlIGNvbnRyb2wgaW4gR1VJIChub3RlIHRoYXQgcGVyaGFwcyBzdWZmaWNpZW50IHBlcm1pc3Npb25zIHdlcmUgbWlzc2luZywgc28gd2UgYWN0dWFsbHkgY2Fubm90IGJlIHN1cmUgdGhhdCBoaWdoZXIgb2Zmc2V0cyBzdGlsbCBkZWxpdmVyIGltYWdlcylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbXNnID0gbmV3IFJlcXVlc3RTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zKDEsIGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZXMuZW1pdChtc2cpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgcmVnaW9ucyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCByZWdpb25zIHdlcmUgYWRkZWQgdG8gdGhlIHJlc291cmNlcy5pbWFnZXMpXG4gICAgICovXG4gICAgdXBkYXRlUmVnaW9ucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdlclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBWaWV3ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29zZC1jb250YWluZXInKVswXTtcbiAgICAgICAgY29uc3Qgb3NkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHZpZXdlckNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dOYXZpZ2F0b3I6IHRydWUsXG4gICAgICAgICAgICB6b29tSW5CdXR0b246ICdLVUlfT1NEX1pPT01fSU4nLFxuICAgICAgICAgICAgem9vbU91dEJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9PVVQnLFxuICAgICAgICAgICAgcHJldmlvdXNCdXR0b246ICdLVUlfT1NEX1BSRVZfUEFHRScsXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiAnS1VJX09TRF9ORVhUX1BBR0UnLFxuICAgICAgICAgICAgaG9tZUJ1dHRvbjogJ0tVSV9PU0RfSE9NRScsXG4gICAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ0tVSV9PU0RfRlVMTF9QQUdFJyxcbiAgICAgICAgICAgIHJvdGF0ZUxlZnRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9MRUZUJywgICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcbiAgICAgICAgICAgIHJvdGF0ZVJpZ2h0QnV0dG9uOiAnS1VJX09TRF9ST1RBVEVfUklHSFQnICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBPcGVuU2VhZHJhZ29uLlZpZXdlcihvc2RPcHRpb25zKTtcbiAgICAgICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignZnVsbC1zY3JlZW4nLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgaWYgKGFyZ3MuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgYXJncy5ldmVudFNvdXJjZS5zdmdPdmVybGF5KCkucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbGwgKG5vbi1wcmV2aWV3KSBpbWFnZXMgaW4gdGhpcy5pbWFnZXMgdG8gdGhlIHZpZXdlci5cbiAgICAgKiBJbWFnZXMgYXJlIHBvc2l0aW9uZWQgaW4gYSBob3Jpem9udGFsIHJvdyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICAvLyBpbWFnZVhPZmZzZXQgY29udHJvbHMgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBzaWRlIG9mIGVhY2ggaW1hZ2UgaW4gdGhlIE9wZW5TZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbWFnZSBoYXMgaXRzIGxlZnQgc2lkZSBhdCB4ID0gMCwgYW5kIGFsbCBpbWFnZXMgYXJlIHNjYWxlZCB0byBoYXZlIGEgd2lkdGggb2YgMSBpbiB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgLy8gc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG5cbiAgICAgICAgY29uc3QgZmlsZVZhbHVlczogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSA9IHRoaXMuaW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nLnN0aWxsSW1hZ2VGaWxlVmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlIGRlZmluZWQgcmFuZ2Ugb2YgdGhpcy5pbWFnZXNcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXM6IE9iamVjdFtdID0gU3RpbGxJbWFnZUNvbXBvbmVudC5wcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhmaWxlVmFsdWVzLnNsaWNlKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0LCB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxKSk7XG5cbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuICAgICAgICB0aGlzLnZpZXdlci5vcGVuKHRpbGVTb3VyY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlciBmb3IgZXZlcnkgcmVnaW9uIG9mIGV2ZXJ5IGltYWdlIGluIHRoaXMuaW1hZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5kZXJSZWdpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG5cbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7IC8vIHNlZSBkb2N1bWVudGF0aW9uIGluIHRoaXMub3BlbkltYWdlcygpIGZvciB0aGUgdXNhZ2Ugb2YgaW1hZ2VYT2Zmc2V0XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAoaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1ZIC8gaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1YKTtcblxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cmllczogR2VvbWV0cnlGb3JSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UucmVnaW9ucy5tYXAoKHJlZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGdlb21zID0gcmVnLmdldEdlb21ldHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGdlb21zLm1hcCgoZ2VvbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbUZvclJlZyA9IG5ldyBHZW9tZXRyeUZvclJlZ2lvbihnZW9tLmdlb21ldHJ5LCByZWcucmVnaW9uUmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tRm9yUmVnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzb3J0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGdlb21ldHJpZXMuc29ydCgoZ2VvbTEsIGdlb20yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbTEuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScgJiYgZ2VvbTIuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMSA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTEuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMiA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTIuZ2VvbWV0cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHJlZzEgaXMgc21hbGxlciB0aGFuIHJlZzIsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZzEgdGhlbiBjb21lcyBhZnRlciByZWcyIGFuZCB0aHVzIGlzIHJlbmRlcmVkIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXJmMSA8IHN1cmYyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgYWxsIGdlb21ldHJpZXMgZm9yIHRoaXMgcGFnZVxuICAgICAgICAgICAgZm9yIChsZXQgZ2VvbSBvZiBnZW9tZXRyaWVzKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU1ZHT3ZlcmxheShnZW9tLnJlZ2lvbi5pZCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCBpbWFnZVhPZmZzZXQsIGdlb20ucmVnaW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXJcbiAgICAgKiBAcGFyYW0gcmVnaW9uSXJpIHRoZSBJcmkgb2YgdGhlIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgUk9JXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtICB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0gdG9vbFRpcCAtICB0aGUgdG9vbHRpcCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vdXNlaG92ZXIgb2YgdGhlIHN2ZyBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdPdmVybGF5KHJlZ2lvbklyaTogc3RyaW5nLCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlciwgdG9vbFRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGdlb21ldHJ5LmxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2VvbWV0cnkubGluZVdpZHRoO1xuXG4gICAgICAgIGxldCBzdmdFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpOyAgLy8geWVzLCB3ZSByZW5kZXIgcmVjdGFuZ2xlcyBhcyBzdmcgcG9seWdvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogU3RpbGxJbWFnZU9TRFZpZXdlckNvbXBvbmVudC5jcmVhdGVTVkdPdmVybGF5OiB1bmtub3duIGdlb21ldHJ5VHlwZTogJyArIGdlb21ldHJ5LnR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdmdFbGVtZW50LmlkID0gJ3JvaS1zdmdvdmVybGF5LScgKyBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAnICsgbGluZUNvbG9yICsgJzsgc3Ryb2tlLXdpZHRoOiAnICsgbGluZVdpZHRoICsgJ3B4OycpO1xuXG4gICAgICAgIC8vIGV2ZW50IHdoZW4gYSByZWdpb24gaXMgaG92ZXJlZCAob3V0cHV0KVxuICAgICAgICBzdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkhvdmVyZWQuZW1pdChyZWdpb25JcmkpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgICAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IHRvb2xUaXA7XG5cbiAgICAgICAgY29uc3Qgc3ZnR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy52aWV3ZXIuc3ZnT3ZlcmxheSgpO1xuICAgICAgICBvdmVybGF5Lm5vZGUoKS5hcHBlbmRDaGlsZChzdmdHcm91cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAncmVjdGFuZ2xlJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nIChzaWMpKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwb2ludEEgPSBnZW9tZXRyeS5wb2ludHNbMF07XG4gICAgICAgIGNvbnN0IHBvaW50QiA9IGdlb21ldHJ5LnBvaW50c1sxXTtcblxuICAgICAgICAvLyBnZW9tZXRyeS5wb2ludHMgY29udGFpbnMgdHdvIGRpYWdvbmFsbHkgb3Bwb3NlZCBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGUsIGJ1dCB0aGUgb3JkZXIgb2YgdGhlIGNvcm5lcnMgaXMgYXJiaXRyYXJ5LlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgY29uc3RydWN0IHRoZSB1cHBlcmxlZnQgKFVMKSwgbG93ZXJyaWdodCAoTFIpLCB1cHBlcnJpZ2h0IChVUikgYW5kIGxvd2VybGVmdCAoTEwpIHBvc2l0aW9ucyBvZiB0aGUgY29ybmVycyB3aXRoIG1pbiBhbmQgbWF4IG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVUwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MUiA9IG5ldyBQb2ludDJEKE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvblVSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTEwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpKTtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBbcG9zaXRpb25VTCwgcG9zaXRpb25VUiwgcG9zaXRpb25MUiwgcG9zaXRpb25MTF07XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdwb2x5Z29uJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoZ2VvbWV0cnkucG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdjaXJjbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAnY2lyY2xlJylcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgY2lyY2xlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgY3ggPSBTdHJpbmcodmlld0Nvb3JkUG9pbnRzWzBdLngpO1xuICAgICAgICBjb25zdCBjeSA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueSk7XG4gICAgICAgIC8vIGdlb21ldHJ5LnJhZGl1cyBjb250YWlucyBub3QgdGhlIHJhZGl1cyBpdHNlbGYsIGJ1dCB0aGUgY29vcmRpbmF0ZXMgb2YgYSAoYXJiaXRyYXJ5KSBwb2ludCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgaGF2ZSB0byBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgdmVjdG9yIGdlb21ldHJ5LnJhZGl1cyB0byBnZXQgdGhlIGFjdHVhbCByYWRpdXMuIC0+IHNxcnQoeF4yICsgeV4yKVxuICAgICAgICAvLyBTaW5jZSBnZW9tZXRyeS5yYWRpdXMgaGFzIGl0cyB5IGNvb3JkaW5hdGUgc2NhbGVkIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIG11bHRpcGx5IGl0IHdpdGggdGhlIGFzcGVjdFJhdGlvIHRvIGdldCB0byB0aGUgc2NhbGUgdXNlZCBieSBPcGVuc2VhZHJhZ29uLCBhbmFsb2d1b3VzIHRvIHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoKVxuICAgICAgICBjb25zdCByYWRpdXMgPSBTdHJpbmcoTWF0aC5zcXJ0KGdlb21ldHJ5LnJhZGl1cy54ICogZ2VvbWV0cnkucmFkaXVzLnggKyBhc3BlY3RSYXRpbyAqIGFzcGVjdFJhdGlvICogZ2VvbWV0cnkucmFkaXVzLnkgKiBnZW9tZXRyeS5yYWRpdXMueSkpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeCk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLCByYWRpdXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBhbiBpbWFnZSB0byBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgaW4gY29vcmRpbmF0ZSBzeXN0ZW0gcmVsYXRpdmUgdG8gYW4gaW1hZ2VcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlXG4gICAgICogQHJldHVybnMgLSBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzOiBQb2ludDJEW10sIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IFBvaW50MkRbXSB7XG4gICAgICAgIHJldHVybiBwb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDJEKHBvaW50LnggKyB4T2Zmc2V0LCBwb2ludC55ICogYXNwZWN0UmF0aW8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gcG9pbnRzIC0gYW4gYXJyYXkgb2YgcG9pbnRzIHRvIGJlIHNlcmlhbGl6ZWQgdG8gYSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyAtIHRoZSBwb2ludHMgc2VyaWFsaXplZCB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGV4cGVjdGVkIGJ5IHRoZSAncG9pbnRzJyBhdHRyaWJ1dGUgb2YgYSBTVkdFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHBvaW50czogUG9pbnQyRFtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnLCc7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50c1N0cmluZztcbiAgICB9XG59XG4iXX0=