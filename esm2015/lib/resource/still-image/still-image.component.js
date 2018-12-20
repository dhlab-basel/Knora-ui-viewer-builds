import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KnoraConstants, Point2D } from '@knora/core';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
export class ImageRegion {
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
export class StillImageRepresentation {
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
export class RequestStillImageRepresentations {
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
export class GeometryForRegion {
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
export class StillImageComponent {
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
        {
            // this.images cannot display more images of length interval
            // request more images from the server using a negative offset
            // TODO: implement getting previous offset (also in parent component)
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
        else {
            // no more data to fetch
            // TODO: deactivate next button
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbGwtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILGNBQWMsRUFDZCxPQUFPLEVBS1YsTUFBTSxhQUFhLENBQUM7QUFXckI7OztHQUdHO0FBQ0gsTUFBTTtJQUVGOzs7T0FHRztJQUNILFlBQXFCLGNBQTRCO1FBQTVCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO0lBRWpELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBb0IsQ0FBQztJQUN6RixDQUFDO0NBQ0o7QUFFRDs7R0FFRztBQUNILE1BQU07SUFFRjs7OztPQUlHO0lBQ0gsWUFBcUIsbUJBQTRDLEVBQVcsT0FBc0I7UUFBN0Usd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtRQUFXLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFbEcsQ0FBQztDQUVKO0FBRUQ7O0dBRUc7QUFDSCxNQUFNO0lBRUY7Ozs7T0FJRztJQUNILFlBQXFCLFlBQW9CLEVBQVcsWUFBOEM7UUFBN0UsaUJBQVksR0FBWixZQUFZLENBQVE7UUFBVyxpQkFBWSxHQUFaLFlBQVksQ0FBa0M7SUFDbEcsQ0FBQztDQUNKO0FBRUQ7O0dBRUc7QUFDSCxNQUFNO0lBRUY7Ozs7T0FJRztJQUNILFlBQXFCLFFBQXdCLEVBQVcsTUFBb0I7UUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQzVFLENBQUM7Q0FFSjtBQUVEOzs7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QU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEMsdUhBQXVIO1FBQ3ZILHVKQUF1SjtRQUN2SixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzRixNQUFNLE1BQU0sR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sZUFBZSxHQUFH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QzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0RiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLHE2QkFBcTZCLENBQUM7YUFDbDdCOzs7O1lBeEtHLFVBQVU7OztxQkEyS1QsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFFTCxLQUFLO3dCQUVMLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEtub3JhQ29uc3RhbnRzLFxuICAgIFBvaW50MkQsXG4gICAgUmVhZEdlb21WYWx1ZSxcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWUsXG4gICAgUmVnaW9uR2VvbWV0cnlcbn0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5cbi8vIFRoaXMgY29tcG9uZW50IG5lZWRzIHRoZSBvcGVuc2VhZHJhZ29uIGxpYnJhcnkgaXRzZWxmLCBhcyB3ZWxsIGFzIHRoZSBvcGVuc2VhZHJhZ29uIHBsdWdpbiBvcGVuc2VhZHJhZ29uLXN2Zy1vdmVybGF5XG4vLyBCb3RoIGxpYnJhcmllcyBhcmUgaW5zdGFsbGVkIHZpYSBwYWNrYWdlLmpzb24sIGFuZCBsb2FkZWQgZ2xvYmFsbHkgdmlhIHRoZSBzY3JpcHQgdGFnIGluIC5hbmd1bGFyLWNsaS5qc29uXG5cbi8vIE9wZW5TZWFkcmFnb24gZG9lcyBub3QgZXhwb3J0IGl0c2VsZiBhcyBFUzYvRUNNQTIwMTUgbW9kdWxlLFxuLy8gaXQgaXMgbG9hZGVkIGdsb2JhbGx5IGluIHNjcmlwdHMgdGFnIG9mIGFuZ3VsYXItY2xpLmpzb24sXG4vLyB3ZSBzdGlsbCBuZWVkIHRvIGRlY2xhcmUgdGhlIG5hbWVzcGFjZSB0byBtYWtlIFR5cGVTY3JpcHQgY29tcGlsZXIgaGFwcHkuXG5kZWNsYXJlIGxldCBPcGVuU2VhZHJhZ29uOiBhbnk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlZ2lvbi5cbiAqIENvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSByZXNvdXJjZSByZXByZXNlbnRpbmcgdGhlIHJlZ2lvbiBhbmQgaXRzIGdlb21ldHJpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVJlZ2lvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWdpb25SZXNvdXJjZSBhIHJlc291cmNlIG9mIHR5cGUgUmVnaW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVnaW9uUmVzb3VyY2U6IFJlYWRSZXNvdXJjZSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBnZW9tZXRyeSBpbmZvcm1hdGlvbiBiZWxvbmdpbmcgdG8gdGhpcyByZWdpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGdldEdlb21ldHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lvblJlc291cmNlLnByb3BlcnRpZXNbS25vcmFDb25zdGFudHMuaGFzR2VvbWV0cnldIGFzIFJlYWRHZW9tVmFsdWVbXTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbWFnZSBpbmNsdWRpbmcgaXRzIHJlZ2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RpbGxJbWFnZUZpbGVWYWx1ZSBhIFtbUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVdXSByZXByZXNlbnRpbmcgYW4gaW1hZ2UuXG4gICAgICogQHBhcmFtIHJlZ2lvbnMgdGhlIHJlZ2lvbnMgYmVsb25naW5nIHRvIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGlsbEltYWdlRmlsZVZhbHVlOiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSwgcmVhZG9ubHkgcmVnaW9uczogSW1hZ2VSZWdpb25bXSkge1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogU2VuZHMgYSByZXF1ZXN0cyB0byB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBsb2FkIG1vcmUgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3RTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG9mZnNldENoYW5nZSB0aGUgcmVsYXRpdmUgY2hhbmdlIG9mIHRoZSBvZmZzZXQgaW4gb3JkZXIgdG8gZ2V0IG1vcmUgaW5jb21pbmcgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucyBmb3IgdGhlIHJlc291cmNlIGN1cnJlbnRseSBiZWluZyBkaXNwbGF5ZWQuIEVpdGhlciAxIG9yIC0xLlxuICAgICAqIEBwYXJhbSB3aGVuTG9hZGVkQ0IgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIG1vcmUgaW5jb21pbmcgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucyBoYXZlIGJlZW4gcmVxdWVzdGVkIGFuZCB0aGUgYW5zd2VyIGFycml2ZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG9mZnNldENoYW5nZTogbnVtYmVyLCByZWFkb25seSB3aGVuTG9hZGVkQ0I6IChudW1iZXJPZkltYWdlczogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBnZW9tZXRyeSBiZWxvbmdpbmcgdG8gYSBzcGVjaWZpYyByZWdpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUZvclJlZ2lvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSB0aGUgZ2VvbWV0cmljYWwgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHJlZ2lvbiB0aGUgcmVnaW9uIHRoZSBnZW9tZXRyeSBiZWxvbmdzIHRvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgcmVhZG9ubHkgcmVnaW9uOiBSZWFkUmVzb3VyY2UpIHtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBjcmVhdGVzIGEgT3BlblNlYWRyYWdvbiB2aWV3ZXIgaW5zdGFuY2UuXG4gKiBBY2NlcHRzIGFuIGFycmF5IG9mIFJlYWRSZXNvdXJjZSBjb250YWluaW5nIChhbW9uZyBvdGhlciByZXNvdXJjZXMpIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB0byBiZSByZW5kZXJlZC5cbiAqIEBtZW1iZXIgcmVzb3VyY2VzIC0gcmVzb3VyY2VzIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgdGhlIFN0aWxsSW1hZ2VGaWxlVmFsdWVzIGFuZCBpbmNvbWluZyByZWdpb25zIHRvIGJlIHJlbmRlcmVkLiAoVXNlIGFzIGFuZ3VsYXIgQElucHV0IGRhdGEgYmluZGluZyBwcm9wZXJ0eS4pXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXN0aWxsLWltYWdlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzdGlsbC1pbWFnZS12aWV3ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiBsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9QUkVWX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIG1haW4gY29udGVudCB3aXRoIG5hdmlnYXRpb24gYW5kIG9zZCB2aWV3ZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgICAgICA8IS0tIGhlYWRlciB3aXRoIGltYWdlIHRvb2xzIC0tPlxuICAgICAgICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICAgICAgICAgICAgPCEtLSBob21lIGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfSE9NRVwiPjxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHpvb20gYnV0dG9ucyAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9aT09NX0lOXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fT1VUXCI+PG1hdC1pY29uPnJlbW92ZTwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLSB3aW5kb3cgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX0ZVTExfUEFHRVwiPjxtYXQtaWNvbj5mdWxsc2NyZWVuPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICAgICAgICA8L21hdC10b29sYmFyPlxuXG4gICAgICAgIDwhLS0gb3BlbnNlYWRyYWdvbiAob3NkKSB2aWV3ZXIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvc2QtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIDwhLS0gL29wZW5zZWFkcmFnb24gKG9zZCkgLS0+XG4gICAgICAgIDwhLS0gZm9vdGVyIGZvciBjb3B5cmlnaHQgaW5mbzsgZG93bmxvYWQgYnV0dG9uIGV0Yy4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWF0LWNhcHRpb25cIiBbaW5uZXJIdG1sXT1cImltYWdlQ2FwdGlvblwiPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIHJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9ORVhUX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPCEtLSBzaW1wbGUgaW1hZ2Ugdmlld2VyIGUuZy4gYXMgYSBwcmV2aWV3IC0tPlxuPCEtLSBUT0RPOiBoYW5kbGUgaW1hZ2VzIGFycmF5IC0tPlxuPCEtLTxpbWcgKm5nSWY9XCJzaW1wbGUgJiYgaW1hZ2VzPy5sZW5ndGggPT09IDE7IGVsc2Ugb3NkVmlld2VyXCIgW3NyY109XCJzaW1wbGVJbWFnZUV4YW1wbGVcIj4tLT5cblxuXG48IS0tXG4gICAgPGRpdj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvTGVmdCgpXCI+Jmx0OyZsdDs8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW1hZ2VzLmxlbmd0aCA+IDFcIiAoY2xpY2spPVwiZ290b1JpZ2h0KClcIj4mZ3Q7Jmd0Ozwvc3Bhbj5cbiAgICA8L2Rpdj5cbi0tPlxuXG5cblxuYCxcbiAgICBzdHlsZXM6IFtgLnN0aWxsLWltYWdlLXZpZXdlcntkaXNwbGF5OmlubGluZS1mbGV4O2hlaWdodDo0MDBweDttYXgtd2lkdGg6ODAwcHg7d2lkdGg6MTAwJX1AbWVkaWEgKG1heC1oZWlnaHQ6NjM2cHgpey5zdGlsbC1pbWFnZS12aWV3ZXJ7aGVpZ2h0OjMwMHB4fX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9ue2hlaWdodDpjYWxjKDQwMHB4ICsgNjRweCArIDI0cHgpO3dpZHRoOjM2cHh9LnN0aWxsLWltYWdlLXZpZXdlciAubmF2aWdhdGlvbiAubWF0LWJ1dHRvbi5mdWxsLXNpemV7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O3dpZHRoOjM2cHghaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7bWluLXdpZHRoOjM2cHghaW1wb3J0YW50fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnR7aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7bWF4LXdpZHRoOmNhbGMoODAwcHggLSAoMiAqIDM2cHgpKTt3aWR0aDpjYWxjKDEwMCUgLSAoMiAqIDM2cHgpKX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVye2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDo0MDBweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVyLmZ1bGxzY3JlZW57bWF4LXdpZHRoOjEwMHZ3fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLmZvb3RlciBwe2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDoyNHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4fS9kZWVwLyAucm9pLXN2Z292ZXJsYXl7b3BhY2l0eTouNDtmaWxsOnRyYW5zcGFyZW50O3N0cm9rZTojMDA2OTVjO3N0cm9rZS13aWR0aDoycHg7dmVjdG9yLWVmZmVjdDpub24tc2NhbGluZy1zdHJva2V9LnJvaS1zdmdvdmVybGF5OmZvY3VzLC9kZWVwLyAucm9pLXN2Z292ZXJsYXk6aG92ZXJ7b3BhY2l0eToxfWBdXG59KVxuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGltYWdlczogU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uW107XG4gICAgQElucHV0KCkgaW1hZ2VSYW5nZVN0YXJ0OiBudW1iZXI7ICAvLyBpbmRleCBmaXJzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWRcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlRW5kOiBudW1iZXI7IC8vIGluZGV4IG9mIGxhc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMgdG8gYmUgZGlzcGxheWVkLlxuICAgIEBJbnB1dCgpIGltYWdlQ2hhbmdlSW50ZXJ2YWw6IG51bWJlcjsgLy8gdGhlIHNpemUgb2YgdGhlIGludGVydmFsIHdoZW4gZGlzcGxheWluZyBtb3JlIGltYWdlcyBvZiB0aGlzLmltYWdlc1xuXG4gICAgQElucHV0KCkgaW1hZ2VDYXB0aW9uPzogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGdldEltYWdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnM+KCk7IC8vIHNlbmRzIGEgbWVzc2FnZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCAob2JqZWN0LmNvbXBvbmVudCkgdG8gbG9hZCB0aGUgbmV4dCBvciBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgKGltYWdlcykgZnJvbSB0aGUgc2VydmVyXG4gICAgQE91dHB1dCgpIHJlZ2lvbkhvdmVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8vIHRoZSBwYWdpbmcgbGltaXQgc2hvdWxkIGJlIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGFwcFxuICAgIHBhZ2luZ0xpbWl0OiBudW1iZXIgPSAyNTtcblxuXG4gICAgcHJpdmF0ZSB2aWV3ZXI7XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIG9mIGEgcmVjdGFuZ3VsYXIgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb20gdGhlIHJlZ2lvbidzIGdlb21ldHJ5LlxuICAgICAqIEByZXR1cm5zIHRoZSBzdXJmYWNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb206IFJlZ2lvbkdlb21ldHJ5KTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoZ2VvbS50eXBlICE9PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGVjdGVkIHJlY3Rhbmd1bGFyIHJlZ2lvbiwgYnV0ICcgKyBnZW9tLnR5cGUgKyAnIGdpdmVuJyk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KTtcblxuICAgICAgICByZXR1cm4gdyAqIGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbGUgc291cmNlcyBmcm9tIHRoZSBnaXZlbiBzZXF1ZW5jZSBvZiBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW1hZ2VzVG9EaXNwbGF5IHRoZSBnaXZlbiBmaWxlIHZhbHVlcyB0byBkZSBkaXNwbGF5ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRpbGUgc291cmNlcyB0byBiZSBwYXNzZWQgdG8gT1NEIHZpZXdlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhpbWFnZXNUb0Rpc3BsYXk6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10pOiBPYmplY3RbXSB7XG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwO1xuICAgICAgICBsZXQgaW1hZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGltYWdlc1RvRGlzcGxheSkge1xuICAgICAgICAgICAgY29uc3Qgc2lwaUJhc2VQYXRoID0gaW1hZ2UuaW1hZ2VTZXJ2ZXJJSUlGQmFzZVVSTCArICcvJyArIGltYWdlLmltYWdlRmlsZW5hbWU7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLmRpbVg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5kaW1ZO1xuXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgT3BlblNlYWRyYWdvbiB0aWxlU291cmNlcyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uVmlld2VyLmh0bWwjb3BlblxuICAgICAgICAgICAgdGlsZVNvdXJjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gY29uc3RydWN0IElJSUYgdGlsZVNvdXJjZSBjb25maWd1cmF0aW9uIGFjY29yZGluZyB0b1xuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yLjEvI3RlY2huaWNhbC1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsc28gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMC8jYS1pbXBsZW1lbnRhdGlvbi1ub3Rlc1xuICAgICAgICAgICAgICAgICd0aWxlU291cmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIvY29udGV4dC5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IHNpcGlCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlJzogWydodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9sZXZlbDIuanNvbiddLFxuICAgICAgICAgICAgICAgICAgICAncHJvdG9jb2wnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpbGVzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdzY2FsZUZhY3RvcnMnOiBbMSwgMiwgNCwgOCwgMTYsIDMyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd4JzogaW1hZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICd5JzogaW1hZ2VZT2Zmc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0Kys7XG5cbiAgICAgICAgICAgIC8vIDUgaW1hZ2VzIHBlciByb3dcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZiAoaW1hZ2VYT2Zmc2V0ICUgNSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGltYWdlWU9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWxlU291cmNlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSAmJiBjaGFuZ2VzWydpbWFnZXMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaW1hZ2VzJ10pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gaW5pdGlhbGlzYXRpb24gaXMgZG9uZSBvbiBmaXJzdCBydW4gb2YgbmdPbkNoYW5nZXNcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYWxsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgd2VyZSBhZGRlZCB0byB0aGlzLmltYWdlcyBhZnRlciBjcmVhdGlvbi9hc3NpZ25tZW50IG9mIHRoZSB0aGlzLmltYWdlcyBhcnJheS4pXG4gICAgICovXG4gICAgdXBkYXRlSW1hZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgYnkgcmVxdWVzdGluZyB0aGUgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoZGVjcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9MZWZ0KCkge1xuXG4gICAgICAgIC8vIFRPRE86IG1vdmUgbGVmdCBvbiB0aGlzLmltYWdlc1xuICAgICAgICAvLyBUT0RPOiBpZiBuZWNlc3NhcnksIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyXG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsID49IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgLT0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID4gMCkge1xuICAgICAgICAgICAgLy8gZmV3ZXIgcmVtYWluaW5nIGltYWdlcyB0aGFuIGludGVydmFsLCBzaG93IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlUmFuZ2VTdGFydDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgbmVnYXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBnZXR0aW5nIHByZXZpb3VzIG9mZnNldCAoYWxzbyBpbiBwYXJlbnQgY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyBmb3IgdGhlIGN1cnJlbnQgcmVzb3VyY2UgKGluY3JlYXNlIG9mZnNldCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnb3RvUmlnaHQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmFuZ2VFbmQgKyB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPCB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgd2hvbGUgbmV4dCBpbnRlcnZhbCBjYW4gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgbmV4dCBpbnRlcnZhbGApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNgKTtcbiAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWQganVzdCBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdEaWZmID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gdGhpcy5pbWFnZVJhbmdlRW5kICsgMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHJlbWFpbmluZ0RpZmY7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHJlbWFpbmluZ0RpZmY7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZWFjdGl2YXRlIG5leHQgYnV0dG9uXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAlIHRoaXMucGFnaW5nTGltaXQgPT09IDApIHsgLy8gcGFnaW5nIGFsd2F5cyByZXR1cm5lZCBmdWxsIHJlc3VsdCBsaXN0cywgc28gdGhlcmUgY291bGQgYmUgbW9yZSBkYXRhIHRvIGZldGNoXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVxdWVzdCBtb3JlIGltYWdlc2ApO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgY2Fubm90IGRpc3BsYXkgbW9yZSBpbWFnZXMgb2YgbGVuZ3RoIGludGVydmFsXG4gICAgICAgICAgICAvLyByZXF1ZXN0IG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciB1c2luZyBhIHBvc2l0aXZlIG9mZnNldFxuXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBwYXJlbnQgY29tcG9uZW50IGxvYWRlZCBuZXcgaW1hZ2VzXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChudW1iZXJPZkltYWdlczogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZJbWFnZXMgPj0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgaW1hZ2VzIHdlcmUgbG9hZGVkIHRoYW4gYXJlIGFjdHVhbGx5IHRvIGJlIGRpc3BsYXllZFxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXJPZkltYWdlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFtb3VudCBvZiBuZXcgaW1hZ2VzIGluIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwsIHNob3cgZXZlcnl0aGluZyB0aGF0IGNhbiBiZSBzaG93blxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IG51bWJlck9mSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gbnVtYmVyT2ZJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIG5ldyBpbWFnZXMgY291bGQgYmUgcmV0dXJuZWQsIGRpc3BsYXkgcmVtYWluaW5nIGltYWdlcyAodGhlcmUgYXJlIGZld2VyIHRoYW4gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdJbWFnZXM6IG51bWJlciA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEgLSB0aGlzLmltYWdlUmFuZ2VFbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG5vIG5ldyBpbWFnZXMgY2FuIGJlIGxvYWRlZCAtPiBkZWFjdGl2YXRlIGNvbnRyb2wgaW4gR1VJIChub3RlIHRoYXQgcGVyaGFwcyBzdWZmaWNpZW50IHBlcm1pc3Npb25zIHdlcmUgbWlzc2luZywgc28gd2UgYWN0dWFsbHkgY2Fubm90IGJlIHN1cmUgdGhhdCBoaWdoZXIgb2Zmc2V0cyBzdGlsbCBkZWxpdmVyIGltYWdlcylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbXNnID0gbmV3IFJlcXVlc3RTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zKDEsIGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZXMuZW1pdChtc2cpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgcmVnaW9ucyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCByZWdpb25zIHdlcmUgYWRkZWQgdG8gdGhlIHJlc291cmNlcy5pbWFnZXMpXG4gICAgICovXG4gICAgdXBkYXRlUmVnaW9ucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdlclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBWaWV3ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29zZC1jb250YWluZXInKVswXTtcbiAgICAgICAgY29uc3Qgb3NkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHZpZXdlckNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dOYXZpZ2F0b3I6IHRydWUsXG4gICAgICAgICAgICB6b29tSW5CdXR0b246ICdLVUlfT1NEX1pPT01fSU4nLFxuICAgICAgICAgICAgem9vbU91dEJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9PVVQnLFxuICAgICAgICAgICAgcHJldmlvdXNCdXR0b246ICdLVUlfT1NEX1BSRVZfUEFHRScsXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiAnS1VJX09TRF9ORVhUX1BBR0UnLFxuICAgICAgICAgICAgaG9tZUJ1dHRvbjogJ0tVSV9PU0RfSE9NRScsXG4gICAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ0tVSV9PU0RfRlVMTF9QQUdFJyxcbiAgICAgICAgICAgIHJvdGF0ZUxlZnRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9MRUZUJywgICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcbiAgICAgICAgICAgIHJvdGF0ZVJpZ2h0QnV0dG9uOiAnS1VJX09TRF9ST1RBVEVfUklHSFQnICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBPcGVuU2VhZHJhZ29uLlZpZXdlcihvc2RPcHRpb25zKTtcbiAgICAgICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignZnVsbC1zY3JlZW4nLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgaWYgKGFyZ3MuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgYXJncy5ldmVudFNvdXJjZS5zdmdPdmVybGF5KCkucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbGwgaW1hZ2VzIGluIHRoaXMuaW1hZ2VzIHRvIHRoZSB2aWV3ZXIuXG4gICAgICogSW1hZ2VzIGFyZSBwb3NpdGlvbmVkIGluIGEgaG9yaXpvbnRhbCByb3cgbmV4dCB0byBlYWNoIG90aGVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgb3BlbkltYWdlcygpOiB2b2lkIHtcbiAgICAgICAgLy8gaW1hZ2VYT2Zmc2V0IGNvbnRyb2xzIHRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgc2lkZSBvZiBlYWNoIGltYWdlIGluIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGUgc3lzdGVtLlxuICAgICAgICAvLyBUaGUgZmlyc3QgaW1hZ2UgaGFzIGl0cyBsZWZ0IHNpZGUgYXQgeCA9IDAsIGFuZCBhbGwgaW1hZ2VzIGFyZSBzY2FsZWQgdG8gaGF2ZSBhIHdpZHRoIG9mIDEgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMuXG4gICAgICAgIC8vIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuXG4gICAgICAgIGNvbnN0IGZpbGVWYWx1ZXM6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10gPSB0aGlzLmltYWdlcy5tYXAoXG4gICAgICAgICAgICAoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltZy5zdGlsbEltYWdlRmlsZVZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBvbmx5IHRoZSBkZWZpbmVkIHJhbmdlIG9mIHRoaXMuaW1hZ2VzXG4gICAgICAgIGNvbnN0IHRpbGVTb3VyY2VzOiBPYmplY3RbXSA9IFN0aWxsSW1hZ2VDb21wb25lbnQucHJlcGFyZVRpbGVTb3VyY2VzRnJvbUZpbGVWYWx1ZXMoZmlsZVZhbHVlcy5zbGljZSh0aGlzLmltYWdlUmFuZ2VTdGFydCwgdGhpcy5pbWFnZVJhbmdlRW5kICsgMSkpO1xuXG4gICAgICAgIHRoaXMudmlld2VyLmNsZWFyT3ZlcmxheXMoKTtcbiAgICAgICAgdGhpcy52aWV3ZXIub3Blbih0aWxlU291cmNlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXIgZm9yIGV2ZXJ5IHJlZ2lvbiBvZiBldmVyeSBpbWFnZSBpbiB0aGlzLmltYWdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVuZGVyUmVnaW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuXG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwOyAvLyBzZWUgZG9jdW1lbnRhdGlvbiBpbiB0aGlzLm9wZW5JbWFnZXMoKSBmb3IgdGhlIHVzYWdlIG9mIGltYWdlWE9mZnNldFxuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gKGltYWdlLnN0aWxsSW1hZ2VGaWxlVmFsdWUuZGltWSAvIGltYWdlLnN0aWxsSW1hZ2VGaWxlVmFsdWUuZGltWCk7XG5cbiAgICAgICAgICAgIC8vIGNvbGxlY3QgYWxsIGdlb21ldHJpZXMgYmVsb25naW5nIHRvIHRoaXMgcGFnZVxuICAgICAgICAgICAgbGV0IGdlb21ldHJpZXM6IEdlb21ldHJ5Rm9yUmVnaW9uW10gPSBbXTtcbiAgICAgICAgICAgIGltYWdlLnJlZ2lvbnMubWFwKChyZWcpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBnZW9tcyA9IHJlZy5nZXRHZW9tZXRyaWVzKCk7XG5cbiAgICAgICAgICAgICAgICBnZW9tcy5tYXAoKGdlb20pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdlb21Gb3JSZWcgPSBuZXcgR2VvbWV0cnlGb3JSZWdpb24oZ2VvbS5nZW9tZXRyeSwgcmVnLnJlZ2lvblJlc291cmNlKTtcblxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzLnB1c2goZ2VvbUZvclJlZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gc29ydCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBnZW9tZXRyaWVzLnNvcnQoKGdlb20xLCBnZW9tMikgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGdlb20xLmdlb21ldHJ5LnR5cGUgPT09ICdyZWN0YW5nbGUnICYmIGdlb20yLmdlb21ldHJ5LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VyZjEgPSBTdGlsbEltYWdlQ29tcG9uZW50LnN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb20xLmdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VyZjIgPSBTdGlsbEltYWdlQ29tcG9uZW50LnN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb20yLmdlb21ldHJ5KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiByZWcxIGlzIHNtYWxsZXIgdGhhbiByZWcyLCByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICAvLyByZWcxIHRoZW4gY29tZXMgYWZ0ZXIgcmVnMiBhbmQgdGh1cyBpcyByZW5kZXJlZCBsYXRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VyZjEgPCBzdXJmMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmVuZGVyIGFsbCBnZW9tZXRyaWVzIGZvciB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGZvciAobGV0IGdlb20gb2YgZ2VvbWV0cmllcykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gZ2VvbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNWR092ZXJsYXkoZ2VvbS5yZWdpb24uaWQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgaW1hZ2VYT2Zmc2V0LCBnZW9tLnJlZ2lvbi5sYWJlbCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIGFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyXG4gICAgICogQHBhcmFtIHJlZ2lvbklyaSB0aGUgSXJpIG9mIHRoZSByZWdpb24uXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIFJPSVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtICB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBnZW9tZXRyeSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSAgdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBnZW9tZXRyeSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHRvb2xUaXAgLSAgdGhlIHRvb2x0aXAgd2hpY2ggc2hvdWxkIGJlIGRpc3BsYXllZCBvbiBtb3VzZWhvdmVyIG9mIHRoZSBzdmcgZWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU1ZHT3ZlcmxheShyZWdpb25Jcmk6IHN0cmluZywgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIsIHRvb2xUaXA6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaW5lQ29sb3IgPSBnZW9tZXRyeS5saW5lQ29sb3I7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IGdlb21ldHJ5LmxpbmVXaWR0aDtcblxuICAgICAgICBsZXQgc3ZnRWxlbWVudDtcbiAgICAgICAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BvbHlnb24nKTsgIC8vIHllcywgd2UgcmVuZGVyIHJlY3RhbmdsZXMgYXMgc3ZnIHBvbHlnb24gZWxlbWVudHNcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNSZWN0YW5nbGUoc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BvbHlnb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAgICAgICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IFN0aWxsSW1hZ2VPU0RWaWV3ZXJDb21wb25lbnQuY3JlYXRlU1ZHT3ZlcmxheTogdW5rbm93biBnZW9tZXRyeVR5cGU6ICcgKyBnZW9tZXRyeS50eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3ZnRWxlbWVudC5pZCA9ICdyb2ktc3Znb3ZlcmxheS0nICsgTWF0aC5yYW5kb20oKSAqIDEwMDAwO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9pLXN2Z292ZXJsYXknKTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3N0cm9rZTogJyArIGxpbmVDb2xvciArICc7IHN0cm9rZS13aWR0aDogJyArIGxpbmVXaWR0aCArICdweDsnKTtcblxuICAgICAgICAvLyBldmVudCB3aGVuIGEgcmVnaW9uIGlzIGhvdmVyZWQgKG91dHB1dClcbiAgICAgICAgc3ZnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25Ib3ZlcmVkLmVtaXQocmVnaW9uSXJpKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBzdmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGl0bGUnKTtcbiAgICAgICAgc3ZnVGl0bGUudGV4dENvbnRlbnQgPSB0b29sVGlwO1xuXG4gICAgICAgIGNvbnN0IHN2Z0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XG4gICAgICAgIHN2Z0dyb3VwLmFwcGVuZENoaWxkKHN2Z1RpdGxlKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMudmlld2VyLnN2Z092ZXJsYXkoKTtcbiAgICAgICAgb3ZlcmxheS5ub2RlKCkuYXBwZW5kQ2hpbGQoc3ZnR3JvdXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ3JlY3RhbmdsZScgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdwb2x5Z29uJyAoc2ljKSlcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgcmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNSZWN0YW5nbGUoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9pbnRBID0gZ2VvbWV0cnkucG9pbnRzWzBdO1xuICAgICAgICBjb25zdCBwb2ludEIgPSBnZW9tZXRyeS5wb2ludHNbMV07XG5cbiAgICAgICAgLy8gZ2VvbWV0cnkucG9pbnRzIGNvbnRhaW5zIHR3byBkaWFnb25hbGx5IG9wcG9zZWQgY29ybmVycyBvZiB0aGUgcmVjdGFuZ2xlLCBidXQgdGhlIG9yZGVyIG9mIHRoZSBjb3JuZXJzIGlzIGFyYml0cmFyeS5cbiAgICAgICAgLy8gV2UgdGhlcmVmb3JlIGNvbnN0cnVjdCB0aGUgdXBwZXJsZWZ0IChVTCksIGxvd2VycmlnaHQgKExSKSwgdXBwZXJyaWdodCAoVVIpIGFuZCBsb3dlcmxlZnQgKExMKSBwb3NpdGlvbnMgb2YgdGhlIGNvcm5lcnMgd2l0aCBtaW4gYW5kIG1heCBvcGVyYXRpb25zLlxuICAgICAgICBjb25zdCBwb3NpdGlvblVMID0gbmV3IFBvaW50MkQoTWF0aC5taW4ocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTFIgPSBuZXcgUG9pbnQyRChNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25VUiA9IG5ldyBQb2ludDJEKE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxMID0gbmV3IFBvaW50MkQoTWF0aC5taW4ocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gW3Bvc2l0aW9uVUwsIHBvc2l0aW9uVVIsIHBvc2l0aW9uTFIsIHBvc2l0aW9uTExdO1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKHBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBwb2ludHNTdHJpbmcgPSB0aGlzLmNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUodmlld0Nvb3JkUG9pbnRzKTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHBvaW50c1N0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAncG9seWdvbicgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdwb2x5Z29uJylcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgcG9seWdvblxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzUG9seWdvbihzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKGdlb21ldHJ5LnBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBwb2ludHNTdHJpbmcgPSB0aGlzLmNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUodmlld0Nvb3JkUG9pbnRzKTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHBvaW50c1N0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAnY2lyY2xlJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ2NpcmNsZScpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIGNpcmNsZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoZ2VvbWV0cnkucG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IGN4ID0gU3RyaW5nKHZpZXdDb29yZFBvaW50c1swXS54KTtcbiAgICAgICAgY29uc3QgY3kgPSBTdHJpbmcodmlld0Nvb3JkUG9pbnRzWzBdLnkpO1xuICAgICAgICAvLyBnZW9tZXRyeS5yYWRpdXMgY29udGFpbnMgbm90IHRoZSByYWRpdXMgaXRzZWxmLCBidXQgdGhlIGNvb3JkaW5hdGVzIG9mIGEgKGFyYml0cmFyeSkgcG9pbnQgb24gdGhlIGNpcmNsZS5cbiAgICAgICAgLy8gV2UgdGhlcmVmb3JlIGhhdmUgdG8gY2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIHZlY3RvciBnZW9tZXRyeS5yYWRpdXMgdG8gZ2V0IHRoZSBhY3R1YWwgcmFkaXVzLiAtPiBzcXJ0KHheMiArIHleMilcbiAgICAgICAgLy8gU2luY2UgZ2VvbWV0cnkucmFkaXVzIGhhcyBpdHMgeSBjb29yZGluYXRlIHNjYWxlZCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSxcbiAgICAgICAgLy8gd2UgbmVlZCB0byBtdWx0aXBseSBpdCB3aXRoIHRoZSBhc3BlY3RSYXRpbyB0byBnZXQgdG8gdGhlIHNjYWxlIHVzZWQgYnkgT3BlbnNlYWRyYWdvbiwgYW5hbG9ndW91cyB0byB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKClcbiAgICAgICAgY29uc3QgcmFkaXVzID0gU3RyaW5nKE1hdGguc3FydChnZW9tZXRyeS5yYWRpdXMueCAqIGdlb21ldHJ5LnJhZGl1cy54ICsgYXNwZWN0UmF0aW8gKiBhc3BlY3RSYXRpbyAqIGdlb21ldHJ5LnJhZGl1cy55ICogZ2VvbWV0cnkucmFkaXVzLnkpKTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLCBjeSk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyJywgcmFkaXVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgUG9pbnQyRFtdIHdpdGggY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gYW4gaW1hZ2UgdG8gYSBuZXcgUG9pbnQyRFtdIHdpdGggY29vcmRpbmF0ZXMgaW4gdGhlIHZpZXdwb3J0IGNvb3JkaW5hdGUgc3lzdGVtIG9mIE9wZW5zZWFkcmFnb25cbiAgICAgKiBzZWUgYWxzbzogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9leGFtcGxlcy92aWV3cG9ydC1jb29yZGluYXRlcy9cbiAgICAgKiBAcGFyYW0gcG9pbnRzIC0gYW4gYXJyYXkgb2YgcG9pbnRzIGluIGNvb3JkaW5hdGUgc3lzdGVtIHJlbGF0aXZlIHRvIGFuIGltYWdlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZVxuICAgICAqIEByZXR1cm5zIC0gYSBuZXcgUG9pbnQyRFtdIHdpdGggY29vcmRpbmF0ZXMgaW4gdGhlIHZpZXdwb3J0IGNvb3JkaW5hdGUgc3lzdGVtIG9mIE9wZW5zZWFkcmFnb25cbiAgICAgKi9cbiAgICBwcml2YXRlIGltYWdlMlZpZXdQb3J0Q29vcmRzKHBvaW50czogUG9pbnQyRFtdLCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiBQb2ludDJEW10ge1xuICAgICAgICByZXR1cm4gcG9pbnRzLm1hcCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQyRChwb2ludC54ICsgeE9mZnNldCwgcG9pbnQueSAqIGFzcGVjdFJhdGlvKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGV4cGVjdGVkIGJ5IHRoZSAncG9pbnRzJyBhdHRyaWJ1dGUgb2YgYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHBvaW50cyAtIGFuIGFycmF5IG9mIHBvaW50cyB0byBiZSBzZXJpYWxpemVkIHRvIGEgc3RyaW5nXG4gICAgICogQHJldHVybnMgLSB0aGUgcG9pbnRzIHNlcmlhbGl6ZWQgdG8gYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgJ3BvaW50cycgYXR0cmlidXRlIG9mIGEgU1ZHRWxlbWVudFxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZShwb2ludHM6IFBvaW50MkRbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHBvaW50cykge1xuICAgICAgICAgICAgaWYgKHBvaW50cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gJywnO1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludHNTdHJpbmc7XG4gICAgfVxufVxuIl19