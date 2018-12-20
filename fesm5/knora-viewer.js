import { Component, ElementRef, EventEmitter, Input, Output, HostListener, NgModule } from '@angular/core';
import { __values } from 'tslib';
import { KnoraConstants, Point2D, DateRangeSalsah, Precision, ConvertJSONLD, IncomingService, OntologyCacheService, ResourceService, KuiCoreModule } from '@knora/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { KuiActionModule } from '@knora/action';

var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent() {
    }
    AnnotationComponent.prototype.ngOnInit = function () {
    };
    AnnotationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-annotation',
                    template: "<p>\n  annotation works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    AnnotationComponent.ctorParameters = function () { return []; };
    return AnnotationComponent;
}());

var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
    }
    AudioComponent.prototype.ngOnInit = function () {
    };
    AudioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-audio',
                    template: "<p>\n  audio works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    AudioComponent.ctorParameters = function () { return []; };
    return AudioComponent;
}());

var CollectionComponent = /** @class */ (function () {
    function CollectionComponent() {
    }
    CollectionComponent.prototype.ngOnInit = function () {
    };
    CollectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-collection',
                    template: "<p>\n  collection works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CollectionComponent.ctorParameters = function () { return []; };
    return CollectionComponent;
}());

var DddComponent = /** @class */ (function () {
    function DddComponent() {
    }
    DddComponent.prototype.ngOnInit = function () {
    };
    DddComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-ddd',
                    template: "<p>\n  ddd works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DddComponent.ctorParameters = function () { return []; };
    return DddComponent;
}());

var DocumentComponent = /** @class */ (function () {
    function DocumentComponent() {
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-document',
                    template: "<p>\n  document works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return []; };
    return DocumentComponent;
}());

var LinkObjComponent = /** @class */ (function () {
    function LinkObjComponent() {
    }
    LinkObjComponent.prototype.ngOnInit = function () {
    };
    LinkObjComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-link-obj',
                    template: "<p>\n  link-obj works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LinkObjComponent.ctorParameters = function () { return []; };
    return LinkObjComponent;
}());

var MovingImageComponent = /** @class */ (function () {
    function MovingImageComponent() {
    }
    MovingImageComponent.prototype.ngOnInit = function () {
    };
    MovingImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-moving-image',
                    template: "<p>\n  moving-image works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    MovingImageComponent.ctorParameters = function () { return []; };
    return MovingImageComponent;
}());

var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    ObjectComponent.prototype.ngOnInit = function () {
    };
    ObjectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-object',
                    template: "<p>\n  object works!\n</p>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ObjectComponent.ctorParameters = function () { return []; };
    return ObjectComponent;
}());

var RegionComponent = /** @class */ (function () {
    function RegionComponent() {
    }
    RegionComponent.prototype.ngOnInit = function () {
    };
    RegionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-region',
                    template: "<p>\n  region works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    RegionComponent.ctorParameters = function () { return []; };
    return RegionComponent;
}());

/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
var ImageRegion = /** @class */ (function () {
    /**
     *
     * @param regionResource a resource of type Region
     */
    function ImageRegion(regionResource) {
        this.regionResource = regionResource;
    }
    /**
     * Get all geometry information belonging to this region.
     *
     * @returns
     */
    ImageRegion.prototype.getGeometries = function () {
        return this.regionResource.properties[KnoraConstants.hasGeometry];
    };
    return ImageRegion;
}());
/**
 * Represents an image including its regions.
 */
var StillImageRepresentation = /** @class */ (function () {
    /**
     *
     * @param stillImageFileValue a [[ReadStillImageFileValue]] representing an image.
     * @param regions the regions belonging to the image.
     */
    function StillImageRepresentation(stillImageFileValue, regions) {
        this.stillImageFileValue = stillImageFileValue;
        this.regions = regions;
    }
    return StillImageRepresentation;
}());
/**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
var RequestStillImageRepresentations = /** @class */ (function () {
    /**
     *
     * @param offsetChange the relative change of the offset in order to get more incoming StillImageRepresentations for the resource currently being displayed. Either 1 or -1.
     * @param whenLoadedCB a callback function that is called when more incoming StillImageRepresentations have been requested and the answer arrived from the server.
     */
    function RequestStillImageRepresentations(offsetChange, whenLoadedCB) {
        this.offsetChange = offsetChange;
        this.whenLoadedCB = whenLoadedCB;
    }
    return RequestStillImageRepresentations;
}());
/**
 * Represents a geometry belonging to a specific region.
 */
var GeometryForRegion = /** @class */ (function () {
    /**
     *
     * @param geometry the geometrical information.
     * @param region the region the geometry belongs to.
     */
    function GeometryForRegion(geometry, region) {
        this.geometry = geometry;
        this.region = region;
    }
    return GeometryForRegion;
}());
/**
 * This component creates a OpenSeadragon viewer instance.
 * Accepts an array of ReadResource containing (among other resources) ReadStillImageFileValues to be rendered.
 * @member resources - resources containing (among other resources) the StillImageFileValues and incoming regions to be rendered. (Use as angular @Input data binding property.)
 */
var StillImageComponent = /** @class */ (function () {
    function StillImageComponent(elementRef) {
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
    StillImageComponent.surfaceOfRectangularRegion = function (geom) {
        if (geom.type !== 'rectangle') {
            console.log('expected rectangular region, but ' + geom.type + ' given');
            return 0;
        }
        var w = Math.max(geom.points[0].x, geom.points[1].x) - Math.min(geom.points[0].x, geom.points[1].x);
        var h = Math.max(geom.points[0].y, geom.points[1].y) - Math.min(geom.points[0].y, geom.points[1].y);
        return w * h;
    };
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param imagesToDisplay the given file values to de displayed.
     * @returns the tile sources to be passed to OSD viewer.
     */
    StillImageComponent.prepareTileSourcesFromFileValues = function (imagesToDisplay) {
        var e_1, _a;
        var imageXOffset = 0;
        var imageYOffset = 0;
        var tileSources = [];
        try {
            for (var imagesToDisplay_1 = __values(imagesToDisplay), imagesToDisplay_1_1 = imagesToDisplay_1.next(); !imagesToDisplay_1_1.done; imagesToDisplay_1_1 = imagesToDisplay_1.next()) {
                var image = imagesToDisplay_1_1.value;
                var sipiBasePath = image.imageServerIIIFBaseURL + '/' + image.imageFilename;
                var width = image.dimX;
                var height = image.dimY;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (imagesToDisplay_1_1 && !imagesToDisplay_1_1.done && (_a = imagesToDisplay_1.return)) _a.call(imagesToDisplay_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return tileSources;
    };
    StillImageComponent.prototype.ngOnChanges = function (changes) {
        if (changes['images'] && changes['images'].isFirstChange()) {
            this.setupViewer();
        }
        if (changes['images']) {
            this.openImages();
            this.renderRegions();
        }
    };
    StillImageComponent.prototype.ngOnInit = function () {
        // initialisation is done on first run of ngOnChanges
    };
    StillImageComponent.prototype.ngOnDestroy = function () {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = undefined;
        }
    };
    /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     */
    StillImageComponent.prototype.updateImages = function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.openImages();
    };
    /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     */
    StillImageComponent.prototype.gotoLeft = function () {
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
    };
    /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     */
    StillImageComponent.prototype.gotoRight = function () {
        var _this = this;
        if (this.imageRangeEnd < this.images.length - 1) {
            // this.images has more images to display
            if (this.imageRangeEnd + this.imageChangeInterval < this.images.length) {
                // the whole next interval can be displayed
                console.log("display next interval");
                this.imageRangeStart += this.imageChangeInterval;
                this.imageRangeEnd += this.imageChangeInterval;
            }
            else {
                console.log("display remaining images");
                // less than the interval can be displayed just display remaining images
                var remainingDiff = this.images.length - this.imageRangeEnd + 1;
                this.imageRangeStart += remainingDiff;
                this.imageRangeEnd += remainingDiff;
                // TODO: deactivate next button
            }
            this.openImages();
            this.renderRegions();
        }
        else if (this.images.length % this.pagingLimit === 0) { // paging always returned full result lists, so there could be more data to fetch
            console.log("request more images");
            // this.images cannot display more images of length interval
            // request more images from the server using a positive offset
            // function called when parent component loaded new images
            var callback = function (numberOfImages) {
                if (numberOfImages >= _this.imageChangeInterval) {
                    // more images were loaded than are actually to be displayed
                    _this.imageRangeStart += _this.imageChangeInterval;
                    _this.imageRangeEnd += _this.imageChangeInterval;
                    _this.openImages();
                    _this.renderRegions();
                }
                else if (numberOfImages > 0) {
                    // the amount of new images in less than the interval, show everything that can be shown
                    _this.imageRangeStart += numberOfImages;
                    _this.imageRangeEnd += numberOfImages;
                    _this.openImages();
                    _this.renderRegions();
                }
                else {
                    // no new images could be returned, display remaining images (there are fewer than this.imageChangeInterval)
                    var remainingImages = _this.images.length - 1 - _this.imageRangeEnd;
                    _this.imageRangeStart += remainingImages;
                    _this.imageRangeEnd += remainingImages;
                    // TODO: no new images can be loaded -> deactivate control in GUI (note that perhaps sufficient permissions were missing, so we actually cannot be sure that higher offsets still deliver images)
                    _this.openImages();
                    _this.renderRegions();
                }
            };
            var msg = new RequestStillImageRepresentations(1, callback);
            this.getImages.emit(msg);
        }
    };
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     */
    StillImageComponent.prototype.updateRegions = function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.renderRegions();
    };
    /**
     * Initializes the OpenSeadragon viewer
     */
    StillImageComponent.prototype.setupViewer = function () {
        var viewerContainer = this.elementRef.nativeElement.getElementsByClassName('osd-container')[0];
        var osdOptions = {
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
    };
    /**
     * Adds all images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     */
    StillImageComponent.prototype.openImages = function () {
        // imageXOffset controls the x coordinate of the left side of each image in the OpenSeadragon viewport coordinate system.
        // The first image has its left side at x = 0, and all images are scaled to have a width of 1 in viewport coordinates.
        // see also: https://openseadragon.github.io/examples/viewport-coordinates/
        var fileValues = this.images.map(function (img) {
            return img.stillImageFileValue;
        });
        // display only the defined range of this.images
        var tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues.slice(this.imageRangeStart, this.imageRangeEnd + 1));
        this.viewer.clearOverlays();
        this.viewer.open(tileSources);
    };
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     */
    StillImageComponent.prototype.renderRegions = function () {
        var e_2, _a;
        this.viewer.clearOverlays();
        var imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
        var _loop_1 = function (image) {
            var e_3, _a;
            var aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
            // collect all geometries belonging to this page
            var geometries = [];
            image.regions.map(function (reg) {
                var geoms = reg.getGeometries();
                geoms.map(function (geom) {
                    var geomForReg = new GeometryForRegion(geom.geometry, reg.regionResource);
                    geometries.push(geomForReg);
                });
            });
            // sort all geometries belonging to this page
            geometries.sort(function (geom1, geom2) {
                if (geom1.geometry.type === 'rectangle' && geom2.geometry.type === 'rectangle') {
                    var surf1 = StillImageComponent.surfaceOfRectangularRegion(geom1.geometry);
                    var surf2 = StillImageComponent.surfaceOfRectangularRegion(geom2.geometry);
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
            try {
                // render all geometries for this page
                for (var geometries_1 = __values(geometries), geometries_1_1 = geometries_1.next(); !geometries_1_1.done; geometries_1_1 = geometries_1.next()) {
                    var geom = geometries_1_1.value;
                    var geometry = geom.geometry;
                    this_1.createSVGOverlay(geom.region.id, geometry, aspectRatio, imageXOffset, geom.region.label);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return)) _a.call(geometries_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            imageXOffset++;
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.images), _c = _b.next(); !_c.done; _c = _b.next()) {
                var image = _c.value;
                _loop_1(image);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param regionIri the Iri of the region.
     * @param geometry - the geometry describing the ROI
     * @param aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param toolTip -  the tooltip which should be displayed on mousehover of the svg element
     */
    StillImageComponent.prototype.createSVGOverlay = function (regionIri, geometry, aspectRatio, xOffset, toolTip) {
        var _this = this;
        var lineColor = geometry.lineColor;
        var lineWidth = geometry.lineWidth;
        var svgElement;
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
        svgElement.addEventListener('mouseover', function () {
            _this.regionHovered.emit(regionIri);
        }, false);
        var svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        svgTitle.textContent = toolTip;
        var svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgGroup.appendChild(svgTitle);
        svgGroup.appendChild(svgElement);
        var overlay = this.viewer.svgOverlay();
        overlay.node().appendChild(svgGroup);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param geometry - the geometry describing the rectangle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesRectangle = function (svgElement, geometry, aspectRatio, xOffset) {
        var pointA = geometry.points[0];
        var pointB = geometry.points[1];
        // geometry.points contains two diagonally opposed corners of the rectangle, but the order of the corners is arbitrary.
        // We therefore construct the upperleft (UL), lowerright (LR), upperright (UR) and lowerleft (LL) positions of the corners with min and max operations.
        var positionUL = new Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        var positionLR = new Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        var positionUR = new Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        var positionLL = new Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        var points = [positionUL, positionUR, positionLR, positionLL];
        var viewCoordPoints = this.image2ViewPortCoords(points, aspectRatio, xOffset);
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'polygon')
     * @param geometry - the geometry describing the polygon
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesPolygon = function (svgElement, geometry, aspectRatio, xOffset) {
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param svgElement - an SVGElement (should have type 'circle')
     * @param geometry - the geometry describing the circle
     * @param aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     */
    StillImageComponent.prototype.addSVGAttributesCircle = function (svgElement, geometry, aspectRatio, xOffset) {
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        var cx = String(viewCoordPoints[0].x);
        var cy = String(viewCoordPoints[0].y);
        // geometry.radius contains not the radius itself, but the coordinates of a (arbitrary) point on the circle.
        // We therefore have to calculate the length of the vector geometry.radius to get the actual radius. -> sqrt(x^2 + y^2)
        // Since geometry.radius has its y coordinate scaled to the height of the image,
        // we need to multiply it with the aspectRatio to get to the scale used by Openseadragon, analoguous to this.image2ViewPortCoords()
        var radius = String(Math.sqrt(geometry.radius.x * geometry.radius.x + aspectRatio * aspectRatio * geometry.radius.y * geometry.radius.y));
        svgElement.setAttribute('cx', cx);
        svgElement.setAttribute('cy', cy);
        svgElement.setAttribute('r', radius);
    };
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param points - an array of points in coordinate system relative to an image
     * @param aspectRatio - the aspectRatio (h/w) of the image
     * @param xOffset - the x-offset in viewport coordinates of the image
     * @returns - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    StillImageComponent.prototype.image2ViewPortCoords = function (points, aspectRatio, xOffset) {
        return points.map(function (point) {
            return new Point2D(point.x + xOffset, point.y * aspectRatio);
        });
    };
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param points - an array of points to be serialized to a string
     * @returns - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    StillImageComponent.prototype.createSVGPolygonPointsAttribute = function (points) {
        var pointsString = '';
        for (var i in points) {
            if (points.hasOwnProperty(i)) {
                pointsString += points[i].x;
                pointsString += ',';
                pointsString += points[i].y;
                pointsString += ' ';
            }
        }
        return pointsString;
    };
    StillImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-still-image',
                    template: "<div class=\"still-image-viewer\">\n    <div class=\"navigation left\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_PREV_PAGE\">\n            <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n    </div>\n\n    <!-- main content with navigation and osd viewer -->\n    <div class=\"content\">\n\n        <!-- header with image tools -->\n        <mat-toolbar class=\"header\">\n            <mat-toolbar-row>\n                <!-- home button -->\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_HOME\"><mat-icon>home</mat-icon></button>\n            </span>\n                <!-- zoom buttons -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_IN\"><mat-icon>add</mat-icon></button>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_OUT\"><mat-icon>remove</mat-icon></button>\n            </span>\n                <!-- window button -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_FULL_PAGE\"><mat-icon>fullscreen</mat-icon></button>\n            </span>\n            </mat-toolbar-row>\n        </mat-toolbar>\n\n        <!-- openseadragon (osd) viewer -->\n        <div class=\"osd-container\"></div>\n        <!-- /openseadragon (osd) -->\n        <!-- footer for copyright info; download button etc. -->\n        <div class=\"footer\">\n            <p class=\"mat-caption\" [innerHtml]=\"imageCaption\"></p>\n        </div>\n\n    </div>\n\n    <div class=\"navigation right\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_NEXT_PAGE\">\n            <mat-icon>keyboard_arrow_right</mat-icon>\n        </button>\n    </div>\n\n</div>\n\n<!-- simple image viewer e.g. as a preview -->\n<!-- TODO: handle images array -->\n<!--<img *ngIf=\"simple && images?.length === 1; else osdViewer\" [src]=\"simpleImageExample\">-->\n\n\n<!--\n    <div>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoLeft()\">&lt;&lt;</span>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoRight()\">&gt;&gt;</span>\n    </div>\n-->\n\n\n\n",
                    styles: [".still-image-viewer{display:inline-flex;height:400px;max-width:800px;width:100%}@media (max-height:636px){.still-image-viewer{height:300px}}.still-image-viewer .navigation{height:calc(400px + 64px + 24px);width:36px}.still-image-viewer .navigation .mat-button.full-size{height:100%!important;width:36px!important;padding:0!important;min-width:36px!important}.still-image-viewer .content{height:calc(400px + 64px + 24px);max-width:calc(800px - (2 * 36px));width:calc(100% - (2 * 36px))}.still-image-viewer .content .osd-container{color:#ccc;background-color:#000;height:400px}.still-image-viewer .content .osd-container.fullscreen{max-width:100vw}.still-image-viewer .content .footer p{color:#ccc;background-color:#000;height:24px;margin:0;padding:0 16px}/deep/ .roi-svgoverlay{opacity:.4;fill:transparent;stroke:#00695c;stroke-width:2px;vector-effect:non-scaling-stroke}.roi-svgoverlay:focus,/deep/ .roi-svgoverlay:hover{opacity:1}"]
                },] },
    ];
    /** @nocollapse */
    StillImageComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StillImageComponent.propDecorators = {
        images: [{ type: Input }],
        imageRangeStart: [{ type: Input }],
        imageRangeEnd: [{ type: Input }],
        imageChangeInterval: [{ type: Input }],
        imageCaption: [{ type: Input }],
        getImages: [{ type: Output }],
        regionHovered: [{ type: Output }]
    };
    return StillImageComponent;
}());

var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text',
                    template: "<p>\n  text works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return []; };
    return TextComponent;
}());

var BooleanValueComponent = /** @class */ (function () {
    function BooleanValueComponent() {
    }
    Object.defineProperty(BooleanValueComponent.prototype, "valueObject", {
        get: function () {
            return this._booleanValueObj;
        },
        set: function (value) {
            this._booleanValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    BooleanValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-boolean-value',
                    template: "<mat-checkbox [checked]=\"valueObject.bool\" disabled=\"true\"></mat-checkbox>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    BooleanValueComponent.ctorParameters = function () { return []; };
    BooleanValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return BooleanValueComponent;
}());

var ColorValueComponent = /** @class */ (function () {
    function ColorValueComponent() {
    }
    Object.defineProperty(ColorValueComponent.prototype, "valueObject", {
        get: function () {
            return this._colorValueObj;
        },
        set: function (value) {
            this._colorValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    ColorValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-color-value',
                    template: "<span [style.background-color]=\"valueObject.colorHex\">{{valueObject.colorHex}}</span>",
                    styles: [".fill-remaining-space{flex:1 1 auto}.mat-form-field{width:36px;overflow-x:visible}"]
                },] },
    ];
    /** @nocollapse */
    ColorValueComponent.ctorParameters = function () { return []; };
    ColorValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return ColorValueComponent;
}());

var DateValueComponent = /** @class */ (function () {
    function DateValueComponent() {
    }
    Object.defineProperty(DateValueComponent.prototype, "calendar", {
        get: function () {
            return this._calendar;
        },
        set: function (value) {
            this._calendar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "era", {
        get: function () {
            return this._era;
        },
        set: function (value) {
            this._era = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "valueObject", {
        get: function () {
            return this._dateValueObj;
        },
        set: function (value) {
            this._dateValueObj = value;
            var dateOrRange = this.valueObject.getDateSalsah();
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param date the date to be converted.
     * @return DateFormatter.
     */
    DateValueComponent.prototype.getJSDate = function (date) {
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
    };
    DateValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-date-value',
                    template: "<span *ngIf=\"period; else preciseDate\">\n    {{dates[0].date | date: dates[0].format}}\n    <span *ngIf=\"era\">\n        {{dates[0].era}}\n    </span>\n    - {{dates[1].date | date: dates[1].format}}\n    <span *ngIf=\"era\">\n        {{dates[1].era}}\n    </span>\n\n    <span *ngIf=\"calendar\">\n        ({{dates[0].calendar}})\n    </span>\n</span>\n\n<ng-template #preciseDate>\n\n    <span>\n        {{dates[0].date | date: dates[0].format }}\n        <span *ngIf=\"era\">\n            {{dates[0].era}}\n        </span>\n        <span *ngIf=\"calendar\">\n            ({{dates[0].calendar}})\n        </span>\n    </span>\n\n</ng-template>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    DateValueComponent.ctorParameters = function () { return []; };
    DateValueComponent.propDecorators = {
        calendar: [{ type: Input }],
        era: [{ type: Input }],
        valueObject: [{ type: Input }]
    };
    return DateValueComponent;
}());

var DecimalValueComponent = /** @class */ (function () {
    function DecimalValueComponent() {
    }
    Object.defineProperty(DecimalValueComponent.prototype, "valueObject", {
        get: function () {
            return this._decimalValueObj;
        },
        set: function (value) {
            this._decimalValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    DecimalValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-decimal-value',
                    template: "<span>{{valueObject.decimal}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    DecimalValueComponent.ctorParameters = function () { return []; };
    DecimalValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return DecimalValueComponent;
}());

var ExternalResValueComponent = /** @class */ (function () {
    function ExternalResValueComponent() {
    }
    ExternalResValueComponent.prototype.ngOnInit = function () {
    };
    ExternalResValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-external-res-value',
                    template: "<p>\n  external-res-value works!\n</p>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ExternalResValueComponent.ctorParameters = function () { return []; };
    return ExternalResValueComponent;
}());

var GeometryValueComponent = /** @class */ (function () {
    function GeometryValueComponent() {
    }
    Object.defineProperty(GeometryValueComponent.prototype, "valueObject", {
        get: function () {
            return this._geomValueObj;
        },
        set: function (value) {
            this._geomValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    GeometryValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-geometry-value',
                    template: "<span>{{valueObject.geometryString}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    GeometryValueComponent.ctorParameters = function () { return []; };
    GeometryValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return GeometryValueComponent;
}());

var GeonameValueComponent = /** @class */ (function () {
    function GeonameValueComponent() {
    }
    GeonameValueComponent.prototype.ngOnInit = function () {
    };
    GeonameValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-geoname-value',
                    template: "<p>\n  geoname-value works!\n</p>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    GeonameValueComponent.ctorParameters = function () { return []; };
    return GeonameValueComponent;
}());

var IntegerValueComponent = /** @class */ (function () {
    function IntegerValueComponent() {
    }
    Object.defineProperty(IntegerValueComponent.prototype, "valueObject", {
        get: function () {
            return this._integerValueObj;
        },
        set: function (value) {
            this._integerValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    IntegerValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-integer-value',
                    template: "<span>{{valueObject.integer}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    IntegerValueComponent.ctorParameters = function () { return []; };
    IntegerValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return IntegerValueComponent;
}());

var IntervalValueComponent = /** @class */ (function () {
    function IntervalValueComponent() {
    }
    Object.defineProperty(IntervalValueComponent.prototype, "valueObject", {
        get: function () {
            return this._intervalValueObj;
        },
        set: function (value) {
            this._intervalValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    IntervalValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-interval-value',
                    template: "<span>{{valueObject.intervalStart}} - {{valueObject.intervalEnd}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    IntervalValueComponent.ctorParameters = function () { return []; };
    IntervalValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return IntervalValueComponent;
}());

var LinkValueComponent = /** @class */ (function () {
    function LinkValueComponent() {
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(LinkValueComponent.prototype, "ontologyInfo", {
        get: function () {
            return this._ontoInfo;
        },
        set: function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkValueComponent.prototype, "valueObject", {
        get: function () {
            return this._linkValueObj;
        },
        set: function (value) {
            this._linkValueObj = value;
            if (this.valueObject.referredResource !== undefined) {
                this.referredResource = this.valueObject.referredResource.label;
            }
            else {
                this.referredResource = this.valueObject.referredResourceIri;
            }
        },
        enumerable: true,
        configurable: true
    });
    LinkValueComponent.prototype.refResClicked = function () {
        this.referredResourceClicked.emit(this._linkValueObj);
    };
    LinkValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-link-value',
                    template: "<a class=\"salsah-link\" (click)=\"refResClicked()\">{{referredResource}}</a>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    LinkValueComponent.ctorParameters = function () { return []; };
    LinkValueComponent.propDecorators = {
        ontologyInfo: [{ type: Input }],
        valueObject: [{ type: Input }],
        referredResourceClicked: [{ type: Output }]
    };
    return LinkValueComponent;
}());

var ListValueComponent = /** @class */ (function () {
    function ListValueComponent() {
    }
    Object.defineProperty(ListValueComponent.prototype, "valueObject", {
        get: function () {
            return this._listValueObj;
        },
        set: function (value) {
            this._listValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    ListValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-list-value',
                    template: "<span>{{valueObject.listNodeLabel}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ListValueComponent.ctorParameters = function () { return []; };
    ListValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return ListValueComponent;
}());

var TextValueAsHtmlComponent = /** @class */ (function () {
    function TextValueAsHtmlComponent(el) {
        this.el = el;
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "ontologyInfo", {
        get: function () {
            return this._ontoInfo;
        },
        set: function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "bindEvents", {
        get: function () {
            return this._bindEvents;
        },
        set: function (value) {
            this._bindEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "valueObject", {
        get: function () {
            return this._htmlValueObj;
        },
        set: function (value) {
            this._htmlValueObj = value;
            if (this.el.nativeElement.innerHTML) {
                this.el.nativeElement.innerHTML = this.valueObject.html;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextValueAsHtmlComponent.prototype.refResClicked = function (refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    };
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    TextValueAsHtmlComponent.prototype.onClick = function (targetElement) {
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
    };
    TextValueAsHtmlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-html',
                    template: "<div>{{valueObject.html}}</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextValueAsHtmlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TextValueAsHtmlComponent.propDecorators = {
        referredResourceClicked: [{ type: Output }],
        ontologyInfo: [{ type: Input }],
        bindEvents: [{ type: Input }],
        valueObject: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return TextValueAsHtmlComponent;
}());

var TextValueAsStringComponent = /** @class */ (function () {
    function TextValueAsStringComponent() {
    }
    Object.defineProperty(TextValueAsStringComponent.prototype, "valueObject", {
        get: function () {
            return this._textStringValueObj;
        },
        set: function (value) {
            this._textStringValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    TextValueAsStringComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-string',
                    template: "<span>{{valueObject.str}}</span>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextValueAsStringComponent.ctorParameters = function () { return []; };
    TextValueAsStringComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return TextValueAsStringComponent;
}());

var TextValueAsXmlComponent = /** @class */ (function () {
    function TextValueAsXmlComponent() {
    }
    Object.defineProperty(TextValueAsXmlComponent.prototype, "valueObject", {
        get: function () {
            return this._xmlValueObj;
        },
        set: function (value) {
            this._xmlValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    TextValueAsXmlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-xml',
                    template: "<span>{{valueObject.xml}}</span>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextValueAsXmlComponent.ctorParameters = function () { return []; };
    TextValueAsXmlComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return TextValueAsXmlComponent;
}());

var TextfileValueComponent = /** @class */ (function () {
    function TextfileValueComponent() {
    }
    Object.defineProperty(TextfileValueComponent.prototype, "valueObject", {
        get: function () {
            return this._textfileValueObj;
        },
        set: function (value) {
            this._textfileValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    TextfileValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-textfile-value',
                    template: "<a target=\"_blank\" href=\"{{valueObject.textFileURL}}\">{{valueObject.textFilename}}</a>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextfileValueComponent.ctorParameters = function () { return []; };
    TextfileValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return TextfileValueComponent;
}());

var UriValueComponent = /** @class */ (function () {
    function UriValueComponent() {
    }
    Object.defineProperty(UriValueComponent.prototype, "valueObject", {
        get: function () {
            return this.__uriValueObj;
        },
        set: function (value) {
            this.__uriValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    UriValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-uri-value',
                    template: "<a href=\"{{valueObject.uri}}\" target=\"_blank\">{{valueObject.uri}}</a>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    UriValueComponent.ctorParameters = function () { return []; };
    UriValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return UriValueComponent;
}());

var CompareViewComponent = /** @class */ (function () {
    function CompareViewComponent() {
    }
    CompareViewComponent.prototype.ngOnInit = function () {
    };
    CompareViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-compare-view',
                    template: "<p>\n  compare-view works!\n</p>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    CompareViewComponent.ctorParameters = function () { return []; };
    return CompareViewComponent;
}());

var GraphViewComponent = /** @class */ (function () {
    function GraphViewComponent() {
    }
    GraphViewComponent.prototype.ngOnInit = function () {
    };
    GraphViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-graph-view',
                    template: "<p>\n  graph-view works!\n</p>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    GraphViewComponent.ctorParameters = function () { return []; };
    return GraphViewComponent;
}());

var GridViewComponent = /** @class */ (function () {
    function GridViewComponent() {
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    GridViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-grid-view',
                    template: "<p>\n  grid-view works!\n</p>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    GridViewComponent.ctorParameters = function () { return []; };
    return GridViewComponent;
}());

var ListViewComponent = /** @class */ (function () {
    function ListViewComponent() {
    }
    ListViewComponent.prototype.ngOnInit = function () {
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-list-view',
                    template: "<p>\n  list-view works!\n</p>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return []; };
    return ListViewComponent;
}());

var PropertiesViewComponent = /** @class */ (function () {
    function PropertiesViewComponent() {
    }
    PropertiesViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-properties-view',
                    template: "<p>\n    properties-view works!\n</p>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    PropertiesViewComponent.ctorParameters = function () { return []; };
    return PropertiesViewComponent;
}());

var jsonld = require('jsonld');
var ResourceViewComponent = /** @class */ (function () {
    function ResourceViewComponent(_route, _resourceService, _cacheService, _incomingService) {
        this._route = _route;
        this._resourceService = _resourceService;
        this._cacheService = _cacheService;
        this._incomingService = _incomingService;
        this.iri = 'http://rdfh.ch/8be1b7cf7103';
        this.KnoraConstants = KnoraConstants;
        var routeParams = this._route.snapshot.params;
        this.iri = routeParams.id;
    }
    ResourceViewComponent.prototype.ngOnInit = function () {
        this.getResource(this.iri);
    };
    ResourceViewComponent.prototype.getResource = function (iri) {
        var _this = this;
        this._resourceService.getResource(iri)
            .subscribe(function (result) {
            console.log('result: ', result.body);
            var promises = jsonld.promises;
            // compact JSON-LD using an empty context: expands all Iris
            var promise = promises.compact(result.body, {});
            promise.then(function (compacted) {
                var resourceSeq = ConvertJSONLD.createReadResourcesSequenceFromJsonLD(compacted);
                // make sure that exactly one resource is returned
                if (resourceSeq.resources.length === 1) {
                    // get resource class Iris from response
                    var resourceClassIris = ConvertJSONLD.getResourceClassesFromJsonLD(compacted);
                    // request ontology information about resource class Iris (properties are implied)
                    _this._cacheService.getResourceClassDefinitions(resourceClassIris).subscribe(function (resourceClassInfos) {
                        // initialize ontology information
                        _this.ontologyInfo = resourceClassInfos; // console.log('initialization of ontologyInfo: ', this.ontologyInfo); > object received
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
                    template: "<mat-card>\n\n    <!-- TODO: switch through the media type -->\n    <kui-still-image></kui-still-image>\n    <kui-moving-image></kui-moving-image>\n    <kui-annotation></kui-annotation>\n    <kui-audio></kui-audio>\n    <kui-collection></kui-collection>\n    <kui-ddd></kui-ddd>\n    <kui-document></kui-document>\n    <kui-link-obj></kui-link-obj>\n    <kui-object></kui-object>\n    <kui-region></kui-region>\n    <kui-text></kui-text>\n\n    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>\n    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>\n\n    <div *ngFor=\"let prop of resource?.properties | kuiKey\">\n        <mat-list>\n            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>\n            <mat-list-item *ngFor=\"let val of prop.value\">\n                <span [ngSwitch]=\"val.getClassName()\">\n                    <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\" [valueObject]=\"val\"></kui-color-value>\n                    <kui-text-value-as-html *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"true\"></kui-text-value-as-html>\n                    <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\" [valueObject]=\"val\"></kui-text-value-as-string>\n                    <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\" [valueObject]=\"val\"></kui-text-value-as-xml>\n                    <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\"></kui-date-value>\n                    <kui-link-value *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"></kui-link-value>\n                    <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\" [valueObject]=\"val\"></kui-integer-value>\n                    <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\" [valueObject]=\"val\"></kui-decimal-value>\n                    <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\" [valueObject]=\"val\"></kui-geometry-value>\n                    <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                    <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\" [valueObject]=\"val\"></kui-boolean-value>\n                    <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\" [valueObject]=\"val\"></kui-interval-value>\n                    <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                    <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\" [valueObject]=\"val\"></kui-textfile-value>\n                    <span *ngSwitchDefault=\"\">Not supported {{val.getClassName()}}</span>\n                </span>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</mat-card>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ResourceViewComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: ResourceService },
        { type: OntologyCacheService },
        { type: IncomingService }
    ]; };
    ResourceViewComponent.propDecorators = {
        iri: [{ type: Input }]
    };
    return ResourceViewComponent;
}());

var TableViewComponent = /** @class */ (function () {
    function TableViewComponent() {
    }
    TableViewComponent.prototype.ngOnInit = function () {
    };
    TableViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-table-view',
                    template: "<p>\n  table-view works!\n</p>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TableViewComponent.ctorParameters = function () { return []; };
    return TableViewComponent;
}());

var KuiViewerModule = /** @class */ (function () {
    function KuiViewerModule() {
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
    return KuiViewerModule;
}());

/*
 * Public API Surface of viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BooleanValueComponent as ɵu, ColorValueComponent as ɵr, DateValueComponent as ɵp, DecimalValueComponent as ɵs, ExternalResValueComponent as ɵba, GeometryValueComponent as ɵv, GeonameValueComponent as ɵw, IntegerValueComponent as ɵq, IntervalValueComponent as ɵx, LinkValueComponent as ɵz, ListValueComponent as ɵy, TextValueAsHtmlComponent as ɵl, TextValueAsStringComponent as ɵm, TextValueAsXmlComponent as ɵn, TextfileValueComponent as ɵo, UriValueComponent as ɵt, AnnotationComponent as ɵa, AudioComponent as ɵb, CollectionComponent as ɵc, DddComponent as ɵd, DocumentComponent as ɵe, LinkObjComponent as ɵf, MovingImageComponent as ɵg, ObjectComponent as ɵh, RegionComponent as ɵi, StillImageComponent as ɵj, TextComponent as ɵk, CompareViewComponent as ɵbf, GraphViewComponent as ɵbg, GridViewComponent as ɵbc, ListViewComponent as ɵbb, PropertiesViewComponent as ɵbh, ResourceViewComponent as ɵbe, TableViewComponent as ɵbd, AnnotationComponent, AudioComponent, CollectionComponent, DddComponent, DocumentComponent, LinkObjComponent, MovingImageComponent, ObjectComponent, RegionComponent, ImageRegion, StillImageRepresentation, RequestStillImageRepresentations, GeometryForRegion, StillImageComponent, TextComponent, BooleanValueComponent, ColorValueComponent, DateValueComponent, DecimalValueComponent, ExternalResValueComponent, GeometryValueComponent, GeonameValueComponent, IntegerValueComponent, IntervalValueComponent, LinkValueComponent, ListValueComponent, TextValueAsHtmlComponent, TextValueAsStringComponent, TextValueAsXmlComponent, TextfileValueComponent, UriValueComponent, CompareViewComponent, GraphViewComponent, GridViewComponent, ListViewComponent, PropertiesViewComponent, ResourceViewComponent, TableViewComponent, KuiViewerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vcmEtdmlld2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3ZXIubW9kdWxlLnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL3B1YmxpY19hcGkudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIva25vcmEtdmlld2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgYW5ub3RhdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hdWRpbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGF1ZGlvIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29sbGVjdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZGQnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBkZGQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kb2N1bWVudCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGRvY3VtZW50IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saW5rLW9iaicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGxpbmstb2JqIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtPYmpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLW1vdmluZy1pbWFnZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG1vdmluZy1pbWFnZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZpbmdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb2JqZWN0IHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlZ2lvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHJlZ2lvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgUG9pbnQyRCxcbiAgICBSZWFkR2VvbVZhbHVlLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgICBSZWdpb25HZW9tZXRyeVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cblxuLy8gVGhpcyBjb21wb25lbnQgbmVlZHMgdGhlIG9wZW5zZWFkcmFnb24gbGlicmFyeSBpdHNlbGYsIGFzIHdlbGwgYXMgdGhlIG9wZW5zZWFkcmFnb24gcGx1Z2luIG9wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXlcbi8vIEJvdGggbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgdmlhIHBhY2thZ2UuanNvbiwgYW5kIGxvYWRlZCBnbG9iYWxseSB2aWEgdGhlIHNjcmlwdCB0YWcgaW4gLmFuZ3VsYXItY2xpLmpzb25cblxuLy8gT3BlblNlYWRyYWdvbiBkb2VzIG5vdCBleHBvcnQgaXRzZWxmIGFzIEVTNi9FQ01BMjAxNSBtb2R1bGUsXG4vLyBpdCBpcyBsb2FkZWQgZ2xvYmFsbHkgaW4gc2NyaXB0cyB0YWcgb2YgYW5ndWxhci1jbGkuanNvbixcbi8vIHdlIHN0aWxsIG5lZWQgdG8gZGVjbGFyZSB0aGUgbmFtZXNwYWNlIHRvIG1ha2UgVHlwZVNjcmlwdCBjb21waWxlciBoYXBweS5cbmRlY2xhcmUgbGV0IE9wZW5TZWFkcmFnb246IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaW9uLlxuICogQ29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcmVnaW9uIGFuZCBpdHMgZ2VvbWV0cmllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvblJlc291cmNlIGEgcmVzb3VyY2Ugb2YgdHlwZSBSZWdpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb25SZXNvdXJjZTogUmVhZFJlc291cmNlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdlb21ldHJ5IGluZm9ybWF0aW9uIGJlbG9uZ2luZyB0byB0aGlzIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0R2VvbWV0cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uUmVzb3VyY2UucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNHZW9tZXRyeV0gYXMgUmVhZEdlb21WYWx1ZVtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltYWdlIGluY2x1ZGluZyBpdHMgcmVnaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGlsbEltYWdlRmlsZVZhbHVlIGEgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dIHJlcHJlc2VudGluZyBhbiBpbWFnZS5cbiAgICAgKiBAcGFyYW0gcmVnaW9ucyB0aGUgcmVnaW9ucyBiZWxvbmdpbmcgdG8gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0aWxsSW1hZ2VGaWxlVmFsdWU6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLCByZWFkb25seSByZWdpb25zOiBJbWFnZVJlZ2lvbltdKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHJlcXVlc3RzIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGxvYWQgbW9yZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0Q2hhbmdlIHRoZSByZWxhdGl2ZSBjaGFuZ2Ugb2YgdGhlIG9mZnNldCBpbiBvcmRlciB0byBnZXQgbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGZvciB0aGUgcmVzb3VyY2UgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZC4gRWl0aGVyIDEgb3IgLTEuXG4gICAgICogQHBhcmFtIHdoZW5Mb2FkZWRDQiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGhhdmUgYmVlbiByZXF1ZXN0ZWQgYW5kIHRoZSBhbnN3ZXIgYXJyaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgb2Zmc2V0Q2hhbmdlOiBudW1iZXIsIHJlYWRvbmx5IHdoZW5Mb2FkZWRDQjogKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdlb21ldHJ5IGJlbG9uZ2luZyB0byBhIHNwZWNpZmljIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Rm9yUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IHRoZSBnZW9tZXRyaWNhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaW9uIHRoZSByZWdpb24gdGhlIGdlb21ldHJ5IGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCByZWFkb25seSByZWdpb246IFJlYWRSZXNvdXJjZSkge1xuICAgIH1cblxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNyZWF0ZXMgYSBPcGVuU2VhZHJhZ29uIHZpZXdlciBpbnN0YW5jZS5cbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgUmVhZFJlc291cmNlIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIHJlbmRlcmVkLlxuICogQG1lbWJlciByZXNvdXJjZXMgLSByZXNvdXJjZXMgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSB0aGUgU3RpbGxJbWFnZUZpbGVWYWx1ZXMgYW5kIGluY29taW5nIHJlZ2lvbnMgdG8gYmUgcmVuZGVyZWQuIChVc2UgYXMgYW5ndWxhciBASW5wdXQgZGF0YSBiaW5kaW5nIHByb3BlcnR5LilcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc3RpbGwtaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInN0aWxsLWltYWdlLXZpZXdlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIGxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX1BSRVZfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gbWFpbiBjb250ZW50IHdpdGggbmF2aWdhdGlvbiBhbmQgb3NkIHZpZXdlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXG4gICAgICAgIDwhLS0gaGVhZGVyIHdpdGggaW1hZ2UgdG9vbHMgLS0+XG4gICAgICAgIDxtYXQtdG9vbGJhciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgICAgICAgICAgICA8IS0tIGhvbWUgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9IT01FXCI+PG1hdC1pY29uPmhvbWU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS0gem9vbSBidXR0b25zIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fSU5cIj48bWF0LWljb24+YWRkPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfWk9PTV9PVVRcIj48bWF0LWljb24+cmVtb3ZlPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHdpbmRvdyBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfRlVMTF9QQUdFXCI+PG1hdC1pY29uPmZ1bGxzY3JlZW48L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG5cbiAgICAgICAgPCEtLSBvcGVuc2VhZHJhZ29uIChvc2QpIHZpZXdlciAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9zZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPCEtLSAvb3BlbnNlYWRyYWdvbiAob3NkKSAtLT5cbiAgICAgICAgPCEtLSBmb290ZXIgZm9yIGNvcHlyaWdodCBpbmZvOyBkb3dubG9hZCBidXR0b24gZXRjLiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXQtY2FwdGlvblwiIFtpbm5lckh0bWxdPVwiaW1hZ2VDYXB0aW9uXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24gcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX05FWFRfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48IS0tIHNpbXBsZSBpbWFnZSB2aWV3ZXIgZS5nLiBhcyBhIHByZXZpZXcgLS0+XG48IS0tIFRPRE86IGhhbmRsZSBpbWFnZXMgYXJyYXkgLS0+XG48IS0tPGltZyAqbmdJZj1cInNpbXBsZSAmJiBpbWFnZXM/Lmxlbmd0aCA9PT0gMTsgZWxzZSBvc2RWaWV3ZXJcIiBbc3JjXT1cInNpbXBsZUltYWdlRXhhbXBsZVwiPi0tPlxuXG5cbjwhLS1cbiAgICA8ZGl2PlxuICAgICAgICA8c3BhbiAqbmdJZj1cImltYWdlcy5sZW5ndGggPiAxXCIgKGNsaWNrKT1cImdvdG9MZWZ0KClcIj4mbHQ7Jmx0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvUmlnaHQoKVwiPiZndDsmZ3Q7PC9zcGFuPlxuICAgIDwvZGl2PlxuLS0+XG5cblxuXG5gLFxuICAgIHN0eWxlczogW2Auc3RpbGwtaW1hZ2Utdmlld2Vye2Rpc3BsYXk6aW5saW5lLWZsZXg7aGVpZ2h0OjQwMHB4O21heC13aWR0aDo4MDBweDt3aWR0aDoxMDAlfUBtZWRpYSAobWF4LWhlaWdodDo2MzZweCl7LnN0aWxsLWltYWdlLXZpZXdlcntoZWlnaHQ6MzAwcHh9fS5zdGlsbC1pbWFnZS12aWV3ZXIgLm5hdmlnYXRpb257aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7d2lkdGg6MzZweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9uIC5tYXQtYnV0dG9uLmZ1bGwtc2l6ZXtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7d2lkdGg6MzZweCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDttaW4td2lkdGg6MzZweCFpbXBvcnRhbnR9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudHtoZWlnaHQ6Y2FsYyg0MDBweCArIDY0cHggKyAyNHB4KTttYXgtd2lkdGg6Y2FsYyg4MDBweCAtICgyICogMzZweCkpO3dpZHRoOmNhbGMoMTAwJSAtICgyICogMzZweCkpfS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXJ7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjQwMHB4fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXIuZnVsbHNjcmVlbnttYXgtd2lkdGg6MTAwdnd9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAuZm9vdGVyIHB7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjI0cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHh9L2RlZXAvIC5yb2ktc3Znb3ZlcmxheXtvcGFjaXR5Oi40O2ZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlOiMwMDY5NWM7c3Ryb2tlLXdpZHRoOjJweDt2ZWN0b3ItZWZmZWN0Om5vbi1zY2FsaW5nLXN0cm9rZX0ucm9pLXN2Z292ZXJsYXk6Zm9jdXMsL2RlZXAvIC5yb2ktc3Znb3ZlcmxheTpob3ZlcntvcGFjaXR5OjF9YF1cbn0pXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW1hZ2VzOiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25bXTtcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlU3RhcnQ6IG51bWJlcjsgIC8vIGluZGV4IGZpcnN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzIHRvIGJlIGRpc3BsYXllZFxuICAgIEBJbnB1dCgpIGltYWdlUmFuZ2VFbmQ6IG51bWJlcjsgLy8gaW5kZXggb2YgbGFzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWQuXG4gICAgQElucHV0KCkgaW1hZ2VDaGFuZ2VJbnRlcnZhbDogbnVtYmVyOyAvLyB0aGUgc2l6ZSBvZiB0aGUgaW50ZXJ2YWwgd2hlbiBkaXNwbGF5aW5nIG1vcmUgaW1hZ2VzIG9mIHRoaXMuaW1hZ2VzXG5cbiAgICBASW5wdXQoKSBpbWFnZUNhcHRpb24/OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgZ2V0SW1hZ2VzID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucz4oKTsgLy8gc2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IChvYmplY3QuY29tcG9uZW50KSB0byBsb2FkIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2Ugb2YgcmVzdWx0cyAoaW1hZ2VzKSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICBAT3V0cHV0KCkgcmVnaW9uSG92ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLy8gdGhlIHBhZ2luZyBsaW1pdCBzaG91bGQgYmUgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYXBwXG4gICAgcGFnaW5nTGltaXQ6IG51bWJlciA9IDI1O1xuXG5cbiAgICBwcml2YXRlIHZpZXdlcjtcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHN1cmZhY2Ugb2YgYSByZWN0YW5ndWxhciByZWdpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbSB0aGUgcmVnaW9uJ3MgZ2VvbWV0cnkuXG4gICAgICogQHJldHVybnMgdGhlIHN1cmZhY2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTogUmVnaW9uR2VvbWV0cnkpOiBudW1iZXIge1xuXG4gICAgICAgIGlmIChnZW9tLnR5cGUgIT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwZWN0ZWQgcmVjdGFuZ3VsYXIgcmVnaW9uLCBidXQgJyArIGdlb20udHlwZSArICcgZ2l2ZW4nKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdyA9IE1hdGgubWF4KGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpIC0gTWF0aC5taW4oZ2VvbS5wb2ludHNbMF0ueCwgZ2VvbS5wb2ludHNbMV0ueCk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLnksIGdlb20ucG9pbnRzWzFdLnkpO1xuXG4gICAgICAgIHJldHVybiB3ICogaDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGlsZSBzb3VyY2VzIGZyb20gdGhlIGdpdmVuIHNlcXVlbmNlIG9mIFtbUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVdXS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbWFnZXNUb0Rpc3BsYXkgdGhlIGdpdmVuIGZpbGUgdmFsdWVzIHRvIGRlIGRpc3BsYXllZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGlsZSBzb3VyY2VzIHRvIGJlIHBhc3NlZCB0byBPU0Qgdmlld2VyLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHByZXBhcmVUaWxlU291cmNlc0Zyb21GaWxlVmFsdWVzKGltYWdlc1RvRGlzcGxheTogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSk6IE9iamVjdFtdIHtcbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgIGxldCBpbWFnZVlPZmZzZXQgPSAwO1xuICAgICAgICBjb25zdCB0aWxlU291cmNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzVG9EaXNwbGF5KSB7XG4gICAgICAgICAgICBjb25zdCBzaXBpQmFzZVBhdGggPSBpbWFnZS5pbWFnZVNlcnZlcklJSUZCYXNlVVJMICsgJy8nICsgaW1hZ2UuaW1hZ2VGaWxlbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UuZGltWDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmRpbVk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBPcGVuU2VhZHJhZ29uIHRpbGVTb3VyY2VzIGFjY29yZGluZyB0byBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5WaWV3ZXIuaHRtbCNvcGVuXG4gICAgICAgICAgICB0aWxlU291cmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3QgSUlJRiB0aWxlU291cmNlIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMS8jdGVjaG5pY2FsLXByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxzbyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4wLyNhLWltcGxlbWVudGF0aW9uLW5vdGVzXG4gICAgICAgICAgICAgICAgJ3RpbGVTb3VyY2UnOiB7XG4gICAgICAgICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9jb250ZXh0Lmpzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQGlkJzogc2lwaUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGUnOiBbJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2xldmVsMi5qc29uJ10sXG4gICAgICAgICAgICAgICAgICAgICdwcm90b2NvbCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAndGlsZXMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYWxlRmFjdG9ycyc6IFsxLCAyLCA0LCA4LCAxNiwgMzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogMTAyNFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3gnOiBpbWFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgJ3knOiBpbWFnZVlPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcblxuICAgICAgICAgICAgLy8gNSBpbWFnZXMgcGVyIHJvd1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmIChpbWFnZVhPZmZzZXQgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VZT2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbGVTb3VyY2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ltYWdlcyddICYmIGNoYW5nZXNbJ2ltYWdlcyddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBpbml0aWFsaXNhdGlvbiBpcyBkb25lIG9uIGZpcnN0IHJ1biBvZiBuZ09uQ2hhbmdlc1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudmlld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB3ZXJlIGFkZGVkIHRvIHRoaXMuaW1hZ2VzIGFmdGVyIGNyZWF0aW9uL2Fzc2lnbm1lbnQgb2YgdGhlIHRoaXMuaW1hZ2VzIGFycmF5LilcbiAgICAgKi9cbiAgICB1cGRhdGVJbWFnZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgZm9yIHRoZSBjdXJyZW50IHJlc291cmNlIChkZWNyZWFzZSBvZmZzZXQpLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ290b0xlZnQoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogbW92ZSBsZWZ0IG9uIHRoaXMuaW1hZ2VzXG4gICAgICAgIC8vIFRPRE86IGlmIG5lY2Vzc2FyeSwgcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXJcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgLSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPj0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC09IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBmZXdlciByZW1haW5pbmcgaW1hZ2VzIHRoYW4gaW50ZXJ2YWwsIHNob3cgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kIC09IHRoaXMuaW1hZ2VSYW5nZVN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGNhbm5vdCBkaXNwbGF5IG1vcmUgaW1hZ2VzIG9mIGxlbmd0aCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgYSBuZWdhdGl2ZSBvZmZzZXRcblxuICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IGdldHRpbmcgcHJldmlvdXMgb2Zmc2V0IChhbHNvIGluIHBhcmVudCBjb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIGJ5IHJlcXVlc3RpbmcgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoaW5jcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9SaWdodCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlRW5kIDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCArIHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB3aG9sZSBuZXh0IGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSBuZXh0IGludGVydmFsYCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc2ApO1xuICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwgY2FuIGJlIGRpc3BsYXllZCBqdXN0IGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpZmYgPSB0aGlzLmltYWdlcy5sZW5ndGggLSB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nRGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nRGlmZjtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMubGVuZ3RoICUgdGhpcy5wYWdpbmdMaW1pdCA9PT0gMCkgeyAvLyBwYWdpbmcgYWx3YXlzIHJldHVybmVkIGZ1bGwgcmVzdWx0IGxpc3RzLCBzbyB0aGVyZSBjb3VsZCBiZSBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IG1vcmUgaW1hZ2VzYCk7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgcG9zaXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHBhcmVudCBjb21wb25lbnQgbG9hZGVkIG5ldyBpbWFnZXNcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkltYWdlcyA+PSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbW9yZSBpbWFnZXMgd2VyZSBsb2FkZWQgdGhhbiBhcmUgYWN0dWFsbHkgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlck9mSW1hZ2VzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW1vdW50IG9mIG5ldyBpbWFnZXMgaW4gbGVzcyB0aGFuIHRoZSBpbnRlcnZhbCwgc2hvdyBldmVyeXRoaW5nIHRoYXQgY2FuIGJlIHNob3duXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gbnVtYmVyT2ZJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSBudW1iZXJPZkltYWdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbmV3IGltYWdlcyBjb3VsZCBiZSByZXR1cm5lZCwgZGlzcGxheSByZW1haW5pbmcgaW1hZ2VzICh0aGVyZSBhcmUgZmV3ZXIgdGhhbiB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0ltYWdlczogbnVtYmVyID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSAtIHRoaXMuaW1hZ2VSYW5nZUVuZDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSByZW1haW5pbmdJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSByZW1haW5pbmdJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbm8gbmV3IGltYWdlcyBjYW4gYmUgbG9hZGVkIC0+IGRlYWN0aXZhdGUgY29udHJvbCBpbiBHVUkgKG5vdGUgdGhhdCBwZXJoYXBzIHN1ZmZpY2llbnQgcGVybWlzc2lvbnMgd2VyZSBtaXNzaW5nLCBzbyB3ZSBhY3R1YWxseSBjYW5ub3QgYmUgc3VyZSB0aGF0IGhpZ2hlciBvZmZzZXRzIHN0aWxsIGRlbGl2ZXIgaW1hZ2VzKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBuZXcgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMoMSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICB0aGlzLmdldEltYWdlcy5lbWl0KG1zZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIG1vcmUgZGF0YSB0byBmZXRjaFxuICAgICAgICAgICAgLy8gVE9ETzogZGVhY3RpdmF0ZSBuZXh0IGJ1dHRvblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCByZWdpb25zIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIHJlZ2lvbnMgd2VyZSBhZGRlZCB0byB0aGUgcmVzb3VyY2VzLmltYWdlcylcbiAgICAgKi9cbiAgICB1cGRhdGVSZWdpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIE9wZW5TZWFkcmFnb24gdmlld2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cFZpZXdlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3NkLWNvbnRhaW5lcicpWzBdO1xuICAgICAgICBjb25zdCBvc2RPcHRpb25zID0ge1xuICAgICAgICAgICAgZWxlbWVudDogdmlld2VyQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICAgICAgc2hvd05hdmlnYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21JbkJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9JTicsXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uOiAnS1VJX09TRF9aT09NX09VVCcsXG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbjogJ0tVSV9PU0RfUFJFVl9QQUdFJyxcbiAgICAgICAgICAgIG5leHRCdXR0b246ICdLVUlfT1NEX05FWFRfUEFHRScsXG4gICAgICAgICAgICBob21lQnV0dG9uOiAnS1VJX09TRF9IT01FJyxcbiAgICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnS1VJX09TRF9GVUxMX1BBR0UnLFxuICAgICAgICAgICAgcm90YXRlTGVmdEJ1dHRvbjogJ0tVSV9PU0RfUk9UQVRFX0xFRlQnLCAgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuICAgICAgICAgICAgcm90YXRlUmlnaHRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9SSUdIVCcgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IE9wZW5TZWFkcmFnb24uVmlld2VyKG9zZE9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdmdWxsLXNjcmVlbicsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5mdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmV2ZW50U291cmNlLnN2Z092ZXJsYXkoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBpbWFnZXMgaW4gdGhpcy5pbWFnZXMgdG8gdGhlIHZpZXdlci5cbiAgICAgKiBJbWFnZXMgYXJlIHBvc2l0aW9uZWQgaW4gYSBob3Jpem9udGFsIHJvdyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICAvLyBpbWFnZVhPZmZzZXQgY29udHJvbHMgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBzaWRlIG9mIGVhY2ggaW1hZ2UgaW4gdGhlIE9wZW5TZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbWFnZSBoYXMgaXRzIGxlZnQgc2lkZSBhdCB4ID0gMCwgYW5kIGFsbCBpbWFnZXMgYXJlIHNjYWxlZCB0byBoYXZlIGEgd2lkdGggb2YgMSBpbiB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgLy8gc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG5cbiAgICAgICAgY29uc3QgZmlsZVZhbHVlczogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSA9IHRoaXMuaW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nLnN0aWxsSW1hZ2VGaWxlVmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlIGRlZmluZWQgcmFuZ2Ugb2YgdGhpcy5pbWFnZXNcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXM6IE9iamVjdFtdID0gU3RpbGxJbWFnZUNvbXBvbmVudC5wcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhmaWxlVmFsdWVzLnNsaWNlKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0LCB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxKSk7XG5cbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuICAgICAgICB0aGlzLnZpZXdlci5vcGVuKHRpbGVTb3VyY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlciBmb3IgZXZlcnkgcmVnaW9uIG9mIGV2ZXJ5IGltYWdlIGluIHRoaXMuaW1hZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5kZXJSZWdpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG5cbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7IC8vIHNlZSBkb2N1bWVudGF0aW9uIGluIHRoaXMub3BlbkltYWdlcygpIGZvciB0aGUgdXNhZ2Ugb2YgaW1hZ2VYT2Zmc2V0XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAoaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1ZIC8gaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1YKTtcblxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cmllczogR2VvbWV0cnlGb3JSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UucmVnaW9ucy5tYXAoKHJlZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGdlb21zID0gcmVnLmdldEdlb21ldHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGdlb21zLm1hcCgoZ2VvbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbUZvclJlZyA9IG5ldyBHZW9tZXRyeUZvclJlZ2lvbihnZW9tLmdlb21ldHJ5LCByZWcucmVnaW9uUmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tRm9yUmVnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzb3J0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGdlb21ldHJpZXMuc29ydCgoZ2VvbTEsIGdlb20yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbTEuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScgJiYgZ2VvbTIuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMSA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTEuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMiA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTIuZ2VvbWV0cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHJlZzEgaXMgc21hbGxlciB0aGFuIHJlZzIsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZzEgdGhlbiBjb21lcyBhZnRlciByZWcyIGFuZCB0aHVzIGlzIHJlbmRlcmVkIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXJmMSA8IHN1cmYyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgYWxsIGdlb21ldHJpZXMgZm9yIHRoaXMgcGFnZVxuICAgICAgICAgICAgZm9yIChsZXQgZ2VvbSBvZiBnZW9tZXRyaWVzKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU1ZHT3ZlcmxheShnZW9tLnJlZ2lvbi5pZCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCBpbWFnZVhPZmZzZXQsIGdlb20ucmVnaW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXJcbiAgICAgKiBAcGFyYW0gcmVnaW9uSXJpIHRoZSBJcmkgb2YgdGhlIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgUk9JXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtICB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0gdG9vbFRpcCAtICB0aGUgdG9vbHRpcCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vdXNlaG92ZXIgb2YgdGhlIHN2ZyBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdPdmVybGF5KHJlZ2lvbklyaTogc3RyaW5nLCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlciwgdG9vbFRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGdlb21ldHJ5LmxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2VvbWV0cnkubGluZVdpZHRoO1xuXG4gICAgICAgIGxldCBzdmdFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpOyAgLy8geWVzLCB3ZSByZW5kZXIgcmVjdGFuZ2xlcyBhcyBzdmcgcG9seWdvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogU3RpbGxJbWFnZU9TRFZpZXdlckNvbXBvbmVudC5jcmVhdGVTVkdPdmVybGF5OiB1bmtub3duIGdlb21ldHJ5VHlwZTogJyArIGdlb21ldHJ5LnR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdmdFbGVtZW50LmlkID0gJ3JvaS1zdmdvdmVybGF5LScgKyBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAnICsgbGluZUNvbG9yICsgJzsgc3Ryb2tlLXdpZHRoOiAnICsgbGluZVdpZHRoICsgJ3B4OycpO1xuXG4gICAgICAgIC8vIGV2ZW50IHdoZW4gYSByZWdpb24gaXMgaG92ZXJlZCAob3V0cHV0KVxuICAgICAgICBzdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkhvdmVyZWQuZW1pdChyZWdpb25JcmkpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgICAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IHRvb2xUaXA7XG5cbiAgICAgICAgY29uc3Qgc3ZnR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy52aWV3ZXIuc3ZnT3ZlcmxheSgpO1xuICAgICAgICBvdmVybGF5Lm5vZGUoKS5hcHBlbmRDaGlsZChzdmdHcm91cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAncmVjdGFuZ2xlJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nIChzaWMpKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwb2ludEEgPSBnZW9tZXRyeS5wb2ludHNbMF07XG4gICAgICAgIGNvbnN0IHBvaW50QiA9IGdlb21ldHJ5LnBvaW50c1sxXTtcblxuICAgICAgICAvLyBnZW9tZXRyeS5wb2ludHMgY29udGFpbnMgdHdvIGRpYWdvbmFsbHkgb3Bwb3NlZCBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGUsIGJ1dCB0aGUgb3JkZXIgb2YgdGhlIGNvcm5lcnMgaXMgYXJiaXRyYXJ5LlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgY29uc3RydWN0IHRoZSB1cHBlcmxlZnQgKFVMKSwgbG93ZXJyaWdodCAoTFIpLCB1cHBlcnJpZ2h0IChVUikgYW5kIGxvd2VybGVmdCAoTEwpIHBvc2l0aW9ucyBvZiB0aGUgY29ybmVycyB3aXRoIG1pbiBhbmQgbWF4IG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVUwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MUiA9IG5ldyBQb2ludDJEKE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvblVSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTEwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpKTtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBbcG9zaXRpb25VTCwgcG9zaXRpb25VUiwgcG9zaXRpb25MUiwgcG9zaXRpb25MTF07XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdwb2x5Z29uJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoZ2VvbWV0cnkucG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdjaXJjbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAnY2lyY2xlJylcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgY2lyY2xlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgY3ggPSBTdHJpbmcodmlld0Nvb3JkUG9pbnRzWzBdLngpO1xuICAgICAgICBjb25zdCBjeSA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueSk7XG4gICAgICAgIC8vIGdlb21ldHJ5LnJhZGl1cyBjb250YWlucyBub3QgdGhlIHJhZGl1cyBpdHNlbGYsIGJ1dCB0aGUgY29vcmRpbmF0ZXMgb2YgYSAoYXJiaXRyYXJ5KSBwb2ludCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgaGF2ZSB0byBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgdmVjdG9yIGdlb21ldHJ5LnJhZGl1cyB0byBnZXQgdGhlIGFjdHVhbCByYWRpdXMuIC0+IHNxcnQoeF4yICsgeV4yKVxuICAgICAgICAvLyBTaW5jZSBnZW9tZXRyeS5yYWRpdXMgaGFzIGl0cyB5IGNvb3JkaW5hdGUgc2NhbGVkIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIG11bHRpcGx5IGl0IHdpdGggdGhlIGFzcGVjdFJhdGlvIHRvIGdldCB0byB0aGUgc2NhbGUgdXNlZCBieSBPcGVuc2VhZHJhZ29uLCBhbmFsb2d1b3VzIHRvIHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoKVxuICAgICAgICBjb25zdCByYWRpdXMgPSBTdHJpbmcoTWF0aC5zcXJ0KGdlb21ldHJ5LnJhZGl1cy54ICogZ2VvbWV0cnkucmFkaXVzLnggKyBhc3BlY3RSYXRpbyAqIGFzcGVjdFJhdGlvICogZ2VvbWV0cnkucmFkaXVzLnkgKiBnZW9tZXRyeS5yYWRpdXMueSkpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeCk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLCByYWRpdXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBhbiBpbWFnZSB0byBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgaW4gY29vcmRpbmF0ZSBzeXN0ZW0gcmVsYXRpdmUgdG8gYW4gaW1hZ2VcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlXG4gICAgICogQHJldHVybnMgLSBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzOiBQb2ludDJEW10sIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IFBvaW50MkRbXSB7XG4gICAgICAgIHJldHVybiBwb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDJEKHBvaW50LnggKyB4T2Zmc2V0LCBwb2ludC55ICogYXNwZWN0UmF0aW8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gcG9pbnRzIC0gYW4gYXJyYXkgb2YgcG9pbnRzIHRvIGJlIHNlcmlhbGl6ZWQgdG8gYSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyAtIHRoZSBwb2ludHMgc2VyaWFsaXplZCB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGV4cGVjdGVkIGJ5IHRoZSAncG9pbnRzJyBhdHRyaWJ1dGUgb2YgYSBTVkdFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHBvaW50czogUG9pbnQyRFtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnLCc7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50c1N0cmluZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGV4dCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHRleHQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkQm9vbGVhblZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktYm9vbGVhbi12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJ2YWx1ZU9iamVjdC5ib29sXCIgZGlzYWJsZWQ9XCJ0cnVlXCI+PC9tYXQtY2hlY2tib3g+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQm9vbGVhblZhbHVlKSB7XG4gICAgICB0aGlzLl9ib29sZWFuVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ib29sZWFuVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9ib29sZWFuVmFsdWVPYmo6IFJlYWRCb29sZWFuVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZENvbG9yVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWNvbG9yLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInZhbHVlT2JqZWN0LmNvbG9ySGV4XCI+e3t2YWx1ZU9iamVjdC5jb2xvckhleH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5tYXQtZm9ybS1maWVsZHt3aWR0aDozNnB4O292ZXJmbG93LXg6dmlzaWJsZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQ29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvclZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvclZhbHVlT2JqOiBSZWFkQ29sb3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlU2Fsc2FoLCBEYXRlU2Fsc2FoLCBQcmVjaXNpb24sIFJlYWREYXRlVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kYXRlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiAqbmdJZj1cInBlcmlvZDsgZWxzZSBwcmVjaXNlRGF0ZVwiPlxuICAgIHt7ZGF0ZXNbMF0uZGF0ZSB8IGRhdGU6IGRhdGVzWzBdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1swXS5lcmF9fVxuICAgIDwvc3Bhbj5cbiAgICAtIHt7ZGF0ZXNbMV0uZGF0ZSB8IGRhdGU6IGRhdGVzWzFdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1sxXS5lcmF9fVxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICA8L3NwYW4+XG48L3NwYW4+XG5cbjxuZy10ZW1wbGF0ZSAjcHJlY2lzZURhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0IH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgY2FsZW5kYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYWxlbmRhciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlcmEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcmEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBlcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VyYTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERhdGVWYWx1ZSkge1xuICAgIHRoaXMuX2RhdGVWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgY29uc3QgZGF0ZU9yUmFuZ2U6IERhdGVTYWxzYWggfCBEYXRlUmFuZ2VTYWxzYWggPSB0aGlzLnZhbHVlT2JqZWN0LmdldERhdGVTYWxzYWgoKTtcbiAgICBpZiAoZGF0ZU9yUmFuZ2UgaW5zdGFuY2VvZiBEYXRlUmFuZ2VTYWxzYWgpIHtcbiAgICAgIC8vIHBlcmlvZCAoc3RhcnQgYW5kIGVuZCBkYXRlcylcbiAgICAgIHRoaXMucGVyaW9kID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2Uuc3RhcnQpLCB0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5lbmQpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2luZ2xlIGRhdGVcbiAgICAgIHRoaXMucGVyaW9kID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGVzID0gW3RoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlKV07XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVWYWx1ZU9iajtcbiAgfVxuXG4gIGRhdGVzOiBEYXRlRm9ybWF0dGVyW107XG4gIHBlcmlvZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VyYTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGF0ZVZhbHVlT2JqOiBSZWFkRGF0ZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYERhdGVTYWxzYWhgIHRvIGEgSlMgRGF0ZSwgcHJvdmlkaW5nIG5lY2Vzc2FyeSBmb3JtYXR0aW5nIGluZm9ybWF0aW9uLlxuICAgKiBKVUxJQU4gYW5kIEdSRUdPUklBTiBjYWxlbmRhciBhcmUgdGhlIG9ubHkgYXZhaWxhYmxlIGZvciB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBiZSBjb252ZXJ0ZWQuXG4gICAqIEByZXR1cm4gRGF0ZUZvcm1hdHRlci5cbiAgICovXG4gIGdldEpTRGF0ZShkYXRlOiBEYXRlU2Fsc2FoKTogRGF0ZUZvcm1hdHRlciB7XG5cbiAgICBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi55ZWFyUHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLnRvU3RyaW5nKCkpLFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24ubW9udGhQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ01NTU0gJyArICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgMSksIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24uZGF5UHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdsb25nRGF0ZScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSwgIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGluY29ycmVjdCBwcmVjaXNpb24gZm9yIGRhdGUnKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogRGF0ZSBzdHJ1Y3R1cmUgZm9yIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVGb3JtYXR0ZXIge1xuICBmb3JtYXQ6IHN0cmluZztcbiAgZGF0ZTogRGF0ZTtcbiAgZXJhOiBzdHJpbmc7XG4gIGNhbGVuZGFyOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkRGVjaW1hbFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGVjaW1hbC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5kZWNpbWFsfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEZWNpbWFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERlY2ltYWxWYWx1ZSkge1xuICAgIHRoaXMuX2RlY2ltYWxWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9kZWNpbWFsVmFsdWVPYmo6IFJlYWREZWNpbWFsVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWV4dGVybmFsLXJlcy12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGV4dGVybmFsLXJlcy12YWx1ZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkR2VvbVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbWV0cnktdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuZ2VvbWV0cnlTdHJpbmd9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5VmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEdlb21WYWx1ZSkge1xuICAgIHRoaXMuX2dlb21WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9tVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9nZW9tVmFsdWVPYmo6IFJlYWRHZW9tVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdlb25hbWUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBnZW9uYW1lLXZhbHVlIHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR2VvbmFtZVZhbHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRJbnRlZ2VyVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWludGVnZXItdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5pbnRlZ2VyfX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVnZXJWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVnZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlZ2VyVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW50ZWdlclZhbHVlT2JqOiBSZWFkSW50ZWdlclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZXJ2YWxWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWludGVydmFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVydmFsU3RhcnR9fSAtIHt7dmFsdWVPYmplY3QuaW50ZXJ2YWxFbmR9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVydmFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVydmFsVmFsdWUpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9pbnRlcnZhbFZhbHVlT2JqOiBSZWFkSW50ZXJ2YWxWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkTGlua1ZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saW5rLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwic2Fsc2FoLWxpbmtcIiAoY2xpY2spPVwicmVmUmVzQ2xpY2tlZCgpXCI+e3tyZWZlcnJlZFJlc291cmNlfX08L2E+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaW5rVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGlua1ZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2VJcmk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSZWFkTGlua1ZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgX2xpbmtWYWx1ZU9iajogUmVhZExpbmtWYWx1ZTtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICByZWZlcnJlZFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHRoaXMuX2xpbmtWYWx1ZU9iaik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZExpc3RWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWxpc3QtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QubGlzdE5vZGVMYWJlbH19PC9zcGFuPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaXN0VmFsdWUpIHtcbiAgICB0aGlzLl9saXN0VmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdFZhbHVlT2JqOiBSZWFkTGlzdFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwsIEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLWh0bWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj57e3ZhbHVlT2JqZWN0Lmh0bWx9fTwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgYmluZEV2ZW50cyh2YWx1ZTogQm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kRXZlbnRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNIdG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWxWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZU9iamVjdC5odG1sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIGh0bWw6IHN0cmluZztcbiAgICBwcml2YXRlIF9odG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc0h0bWw7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50czogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICByZWZSZXNDbGlja2VkKHJlZlJlc291cmNlSXJpOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHJlZlJlc291cmNlSXJpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIGNsaWNrIGV2ZW50IHRvIHN0YW5kb2ZmIGxpbmtzIHRoYXQgc2hvd3MgdGhlIHJlZmVycmVkIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlNhbHNhaExpbmspID49IDBcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZlJlc0NsaWNrZWQodGFyZ2V0RWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbGluayBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldEVsZW1lbnQuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3Quc3RyfX08L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0U3RyaW5nVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFRleHRWYWx1ZUFzWG1sIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLXhtbCcsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LnhtbH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNYbWwpIHtcbiAgICAgICAgdGhpcy5feG1sVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94bWxWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF94bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzWG1sO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRVcmlWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXVyaS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dmFsdWVPYmplY3QudXJpfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e3ZhbHVlT2JqZWN0LnVyaX19PC9hPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJpVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFVyaVZhbHVlKSB7XG4gICAgdGhpcy5fX3VyaVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX191cmlWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX191cmlWYWx1ZU9iajogUmVhZFVyaVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb21wYXJlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBjb21wYXJlLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmFwaC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgZ3JhcGgtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JhcGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmlkLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBncmlkLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saXN0LXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBsaXN0LXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1wcm9wZXJ0aWVzLXZpZXcnLFxuICAgIHRlbXBsYXRlOiBgPHA+XG4gICAgcHJvcGVydGllcy12aWV3IHdvcmtzIVxuPC9wPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gICAgQXBpU2VydmljZUVycm9yLFxuICAgIEFwaVNlcnZpY2VSZXN1bHQsXG4gICAgQ29udmVydEpTT05MRCxcbiAgICBJbmNvbWluZ1NlcnZpY2UsXG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICAgIFJlc291cmNlU2VydmljZVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmRlY2xhcmUgbGV0IHJlcXVpcmU6IGFueTtcbmNvbnN0IGpzb25sZCA9IHJlcXVpcmUoJ2pzb25sZCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1yZXNvdXJjZS12aWV3JyxcbiAgICB0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cblxuICAgIDwhLS0gVE9ETzogc3dpdGNoIHRocm91Z2ggdGhlIG1lZGlhIHR5cGUgLS0+XG4gICAgPGt1aS1zdGlsbC1pbWFnZT48L2t1aS1zdGlsbC1pbWFnZT5cbiAgICA8a3VpLW1vdmluZy1pbWFnZT48L2t1aS1tb3ZpbmctaW1hZ2U+XG4gICAgPGt1aS1hbm5vdGF0aW9uPjwva3VpLWFubm90YXRpb24+XG4gICAgPGt1aS1hdWRpbz48L2t1aS1hdWRpbz5cbiAgICA8a3VpLWNvbGxlY3Rpb24+PC9rdWktY29sbGVjdGlvbj5cbiAgICA8a3VpLWRkZD48L2t1aS1kZGQ+XG4gICAgPGt1aS1kb2N1bWVudD48L2t1aS1kb2N1bWVudD5cbiAgICA8a3VpLWxpbmstb2JqPjwva3VpLWxpbmstb2JqPlxuICAgIDxrdWktb2JqZWN0Pjwva3VpLW9iamVjdD5cbiAgICA8a3VpLXJlZ2lvbj48L2t1aS1yZWdpb24+XG4gICAgPGt1aS10ZXh0Pjwva3VpLXRleHQ+XG5cbiAgICA8aDI+bWV0YWRhdGEgZm9yIHJlc291cmNlIHt7IHJlc291cmNlPy5sYWJlbH19ICh7eyByZXNvdXJjZT8uaWQgfX0pPC9oMj5cbiAgICA8aDM+dHlwZToge3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUmVzb3VyY2VDbGFzcyhyZXNvdXJjZT8udHlwZSl9fTwvaDM+XG5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIHJlc291cmNlPy5wcm9wZXJ0aWVzIHwga3VpS2V5XCI+XG4gICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgIDxzcGFuPnt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclByb3BlcnR5KHByb3Aua2V5KX19PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IHZhbCBvZiBwcm9wLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZhbC5nZXRDbGFzc05hbWUoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWNvbG9yLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQ29sb3JWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1jb2xvci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLWh0bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc0h0bWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIiBbYmluZEV2ZW50c109XCJ0cnVlXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1odG1sPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNTdHJpbmdcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1zdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy14bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc1htbFwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0LXZhbHVlLWFzLXhtbD5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1kYXRlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGF0ZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWRhdGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktbGluay12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZExpbmtWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiPjwva3VpLWxpbmstdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktaW50ZWdlci12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEludGVnZXJWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlZ2VyLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWRlY2ltYWwtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREZWNpbWFsVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZGVjaW1hbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1nZW9tZXRyeS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEdlb21WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1nZW9tZXRyeS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS11cmktdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRVcmlWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS11cmktdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktYm9vbGVhbi12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEJvb2xlYW5WYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1ib29sZWFuLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWludGVydmFsLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkSW50ZXJ2YWxWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1pbnRlcnZhbC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1saXN0LXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkTGlzdFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWxpc3QtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dGZpbGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlRleHRGaWxlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dGZpbGUtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ9XCJcIj5Ob3Qgc3VwcG9ydGVkIHt7dmFsLmdldENsYXNzTmFtZSgpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICA8L21hdC1saXN0PlxuICAgIDwvZGl2PlxuXG48L21hdC1jYXJkPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXJpPzogc3RyaW5nID0gJ2h0dHA6Ly9yZGZoLmNoLzhiZTFiN2NmNzEwMyc7XG5cbiAgICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247IC8vIG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIHdpdGggSXJpIGBpcmlgXG4gICAgcmVzb3VyY2U6IFJlYWRSZXNvdXJjZTsgLy8gdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZFxuICAgIGVycm9yTWVzc2FnZTogYW55O1xuXG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXNvdXJjZVNlcnZpY2U6IFJlc291cmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbXMgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgIHRoaXMuaXJpID0gcm91dGVQYXJhbXMuaWQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZSh0aGlzLmlyaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNvdXJjZShpcmk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2UoaXJpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBBcGlTZXJ2aWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBqc29ubGQucHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBhY3QgSlNPTi1MRCB1c2luZyBhbiBlbXB0eSBjb250ZXh0OiBleHBhbmRzIGFsbCBJcmlzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlcy5jb21wYWN0KHJlc3VsdC5ib2R5LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChjb21wYWN0ZWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VTZXE6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSA9IENvbnZlcnRKU09OTEQuY3JlYXRlUmVhZFJlc291cmNlc1NlcXVlbmNlRnJvbUpzb25MRChjb21wYWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBleGFjdGx5IG9uZSByZXNvdXJjZSBpcyByZXR1cm5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCByZXNvdXJjZSBjbGFzcyBJcmlzIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZUNsYXNzSXJpczogc3RyaW5nW10gPSBDb252ZXJ0SlNPTkxELmdldFJlc291cmNlQ2xhc3Nlc0Zyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3MgSXJpcyAocHJvcGVydGllcyBhcmUgaW1wbGllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UuZ2V0UmVzb3VyY2VDbGFzc0RlZmluaXRpb25zKHJlc291cmNlQ2xhc3NJcmlzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNvdXJjZUNsYXNzSW5mb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSByZXNvdXJjZUNsYXNzSW5mb3M7IC8vIGNvbnNvbGUubG9nKCdpbml0aWFsaXphdGlvbiBvZiBvbnRvbG9neUluZm86ICcsIHRoaXMub250b2xvZ3lJbmZvKTsgPiBvYmplY3QgcmVjZWl2ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSBhIHBvc3NpYmx5IGF0dGFjaGVkIGltYWdlIGZpbGUgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UocmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlU2VxLnJlc291cmNlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvdXJjZTogJywgdGhpcy5yZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVxdWVzdEluY29taW5nUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIHJlcXVlc3QgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0IHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggIT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0ICR7cmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aH0gcmVzb3VyY2UocykgZ2l2ZW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSlNPTkxEIG9mIGZ1bGwgcmVzb3VyY2UgcmVxdWVzdCBjb3VsZCBub3QgYmUgZXhwYW5kZWQ6JyArIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yOiBBcGlTZXJ2aWNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10YWJsZS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgdGFibGUtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgS3VpQWN0aW9uTW9kdWxlIH0gZnJvbSAnQGtub3JhL2FjdGlvbic7XG5pbXBvcnQgeyBLdWlDb3JlTW9kdWxlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvY29sb3ItdmFsdWUvY29sb3ItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZGF0ZS12YWx1ZS9kYXRlLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWNpbWFsVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZXh0ZXJuYWwtcmVzLXZhbHVlL2V4dGVybmFsLXJlcy12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZ2VvbWV0cnktdmFsdWUvZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb25hbWVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZ2VvbmFtZS12YWx1ZS9nZW9uYW1lLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlZ2VyVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvaW50ZXJ2YWwtdmFsdWUvaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0VmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2xpc3QtdmFsdWUvbGlzdC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtaHRtbC90ZXh0LXZhbHVlLWFzLWh0bWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtc3RyaW5nL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc1htbENvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXhtbC90ZXh0LXZhbHVlLWFzLXhtbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dGZpbGUtdmFsdWUvdGV4dGZpbGUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IFVyaVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS91cmktdmFsdWUvdXJpLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEF1ZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZGRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50JztcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua09iakNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvbGluay1vYmovbGluay1vYmouY29tcG9uZW50JztcbmltcG9ydCB7IE1vdmluZ0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9tb3ZpbmctaW1hZ2UvbW92aW5nLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RpbGxJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3RleHQvdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFyZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvY29tcGFyZS12aWV3L2NvbXBhcmUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JhcGhWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvcGVydGllc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzb3VyY2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Jlc291cmNlLXZpZXcvcmVzb3VyY2Utdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQnO1xuXG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBLdWlDb3JlTW9kdWxlLFxuICAgICAgICBLdWlBY3Rpb25Nb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxuICAgICAgICBBdWRpb0NvbXBvbmVudCxcbiAgICAgICAgQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgRGRkQ29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICAgICAgTGlua09iakNvbXBvbmVudCxcbiAgICAgICAgTW92aW5nSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIE9iamVjdENvbXBvbmVudCxcbiAgICAgICAgUmVnaW9uQ29tcG9uZW50LFxuICAgICAgICBTdGlsbEltYWdlQ29tcG9uZW50LFxuICAgICAgICBUZXh0Q29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1htbENvbXBvbmVudCxcbiAgICAgICAgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGF0ZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlZ2VyVmFsdWVDb21wb25lbnQsXG4gICAgICAgIENvbG9yVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERlY2ltYWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgVXJpVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbmFtZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlcnZhbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0VmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpbmtWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyaWRWaWV3Q29tcG9uZW50LFxuICAgICAgICBUYWJsZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFJlc291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGFyZVZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyYXBoVmlld0NvbXBvbmVudCxcbiAgICAgICAgUHJvcGVydGllc1ZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcblxuICAgICAgICBBbm5vdGF0aW9uQ29tcG9uZW50LFxuICAgICAgICBBdWRpb0NvbXBvbmVudCxcbiAgICAgICAgQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgRGRkQ29tcG9uZW50LFxuICAgICAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICAgICAgTGlua09iakNvbXBvbmVudCxcbiAgICAgICAgTW92aW5nSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIE9iamVjdENvbXBvbmVudCxcbiAgICAgICAgUmVnaW9uQ29tcG9uZW50LFxuICAgICAgICBTdGlsbEltYWdlQ29tcG9uZW50LFxuICAgICAgICBUZXh0Q29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1htbENvbXBvbmVudCxcbiAgICAgICAgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGF0ZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlZ2VyVmFsdWVDb21wb25lbnQsXG4gICAgICAgIENvbG9yVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERlY2ltYWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgVXJpVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgR2VvbmFtZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBJbnRlcnZhbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0VmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpbmtWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyaWRWaWV3Q29tcG9uZW50LFxuICAgICAgICBUYWJsZVZpZXdDb21wb25lbnQsXG4gICAgICAgIFJlc291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgQ29tcGFyZVZpZXdDb21wb25lbnQsXG4gICAgICAgIEdyYXBoVmlld0NvbXBvbmVudCxcbiAgICAgICAgUHJvcGVydGllc1ZpZXdDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEt1aVZpZXdlck1vZHVsZSB7XG59XG4iLCIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIHZpZXdlclxuICovXG5cbi8vIHJlc291cmNlIHZpZXdlclxuZXhwb3J0ICogZnJvbSAnLi9saWIvcmVzb3VyY2UvJztcblxuLy8gcHJvcGVydHkgKGd1aSkgZWxlbWVudFxuZXhwb3J0ICogZnJvbSAnLi9saWIvcHJvcGVydHkvJztcblxuLy8gZGlmZmVyZW50IGtpbmQgb2Ygdmlld3NcbmV4cG9ydCAqIGZyb20gJy4vbGliL3ZpZXcvJztcblxuLy8gdmlld2VyIG1vZHVsZVxuZXhwb3J0ICogZnJvbSAnLi9saWIvdmlld2VyLm1vZHVsZSc7XG4iLCIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vcHVibGljX2FwaSc7XG5cbmV4cG9ydCB7Qm9vbGVhblZhbHVlQ29tcG9uZW50IGFzIMOJwrV1fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7Q29sb3JWYWx1ZUNvbXBvbmVudCBhcyDDicK1cn0gZnJvbSAnLi9saWIvcHJvcGVydHkvY29sb3ItdmFsdWUvY29sb3ItdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RGF0ZVZhbHVlQ29tcG9uZW50IGFzIMOJwrVwfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9kYXRlLXZhbHVlL2RhdGUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RGVjaW1hbFZhbHVlQ29tcG9uZW50IGFzIMOJwrVzfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9kZWNpbWFsLXZhbHVlL2RlY2ltYWwtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7RXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBhcyDDicK1YmF9IGZyb20gJy4vbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7R2VvbWV0cnlWYWx1ZUNvbXBvbmVudCBhcyDDicK1dn0gZnJvbSAnLi9saWIvcHJvcGVydHkvZ2VvbWV0cnktdmFsdWUvZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7R2VvbmFtZVZhbHVlQ29tcG9uZW50IGFzIMOJwrV3fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9nZW9uYW1lLXZhbHVlL2dlb25hbWUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7SW50ZWdlclZhbHVlQ29tcG9uZW50IGFzIMOJwrVxfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9pbnRlZ2VyLXZhbHVlL2ludGVnZXItdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7SW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCBhcyDDicK1eH0gZnJvbSAnLi9saWIvcHJvcGVydHkvaW50ZXJ2YWwtdmFsdWUvaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7TGlua1ZhbHVlQ29tcG9uZW50IGFzIMOJwrV6fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9saW5rLXZhbHVlL2xpbmstdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7TGlzdFZhbHVlQ29tcG9uZW50IGFzIMOJwrV5fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9saXN0LXZhbHVlL2xpc3QtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IGFzIMOJwrVsfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtaHRtbC90ZXh0LXZhbHVlLWFzLWh0bWwuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQgYXMgw4nCtW19IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1zdHJpbmcvdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dFZhbHVlQXNYbWxDb21wb25lbnQgYXMgw4nCtW59IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dGZpbGVWYWx1ZUNvbXBvbmVudCBhcyDDicK1b30gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dGZpbGUtdmFsdWUvdGV4dGZpbGUtdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7VXJpVmFsdWVDb21wb25lbnQgYXMgw4nCtXR9IGZyb20gJy4vbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50JztcbmV4cG9ydCB7QW5ub3RhdGlvbkNvbXBvbmVudCBhcyDDicK1YX0gZnJvbSAnLi9saWIvcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQge0F1ZGlvQ29tcG9uZW50IGFzIMOJwrVifSBmcm9tICcuL2xpYi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQnO1xuZXhwb3J0IHtDb2xsZWN0aW9uQ29tcG9uZW50IGFzIMOJwrVjfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50JztcbmV4cG9ydCB7RGRkQ29tcG9uZW50IGFzIMOJwrVkfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudCc7XG5leHBvcnQge0RvY3VtZW50Q29tcG9uZW50IGFzIMOJwrVlfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuZXhwb3J0IHtMaW5rT2JqQ29tcG9uZW50IGFzIMOJwrVmfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQnO1xuZXhwb3J0IHtNb3ZpbmdJbWFnZUNvbXBvbmVudCBhcyDDicK1Z30gZnJvbSAnLi9saWIvcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQnO1xuZXhwb3J0IHtPYmplY3RDb21wb25lbnQgYXMgw4nCtWh9IGZyb20gJy4vbGliL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50JztcbmV4cG9ydCB7UmVnaW9uQ29tcG9uZW50IGFzIMOJwrVpfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudCc7XG5leHBvcnQge1N0aWxsSW1hZ2VDb21wb25lbnQgYXMgw4nCtWp9IGZyb20gJy4vbGliL3Jlc291cmNlL3N0aWxsLWltYWdlL3N0aWxsLWltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQge1RleHRDb21wb25lbnQgYXMgw4nCtWt9IGZyb20gJy4vbGliL3Jlc291cmNlL3RleHQvdGV4dC5jb21wb25lbnQnO1xuZXhwb3J0IHtDb21wYXJlVmlld0NvbXBvbmVudCBhcyDDicK1YmZ9IGZyb20gJy4vbGliL3ZpZXcvY29tcGFyZS12aWV3L2NvbXBhcmUtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtHcmFwaFZpZXdDb21wb25lbnQgYXMgw4nCtWJnfSBmcm9tICcuL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtHcmlkVmlld0NvbXBvbmVudCBhcyDDicK1YmN9IGZyb20gJy4vbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtMaXN0Vmlld0NvbXBvbmVudCBhcyDDicK1YmJ9IGZyb20gJy4vbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCBhcyDDicK1Ymh9IGZyb20gJy4vbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtSZXNvdXJjZVZpZXdDb21wb25lbnQgYXMgw4nCtWJlfSBmcm9tICcuL2xpYi92aWV3L3Jlc291cmNlLXZpZXcvcmVzb3VyY2Utdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtUYWJsZVZpZXdDb21wb25lbnQgYXMgw4nCtWJkfSBmcm9tICcuL2xpYi92aWV3L3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQnOyJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVlFO0tBQWlCO0lBRWpCLHNDQUFRLEdBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxrQ0FHWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7SUFRRCwwQkFBQztDQUFBOzs7SUNMQztLQUFpQjtJQUVqQixpQ0FBUSxHQUFSO0tBQ0M7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDZCQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztJQVFELHFCQUFDO0NBQUE7OztJQ0xDO0tBQWlCO0lBRWpCLHNDQUFRLEdBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEs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