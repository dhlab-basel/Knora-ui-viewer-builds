/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KnoraConstants, Point2D } from '@knora/core';
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
var /**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
ImageRegion = /** @class */ (function () {
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
    /**
     * Get all geometry information belonging to this region.
     *
     * @return {?}
     */
    ImageRegion.prototype.getGeometries = /**
     * Get all geometry information belonging to this region.
     *
     * @return {?}
     */
    function () {
        return /** @type {?} */ (this.regionResource.properties[KnoraConstants.hasGeometry]);
    };
    return ImageRegion;
}());
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
export { ImageRegion };
if (false) {
    /** @type {?} */
    ImageRegion.prototype.regionResource;
}
/**
 * Represents an image including its regions.
 */
var /**
 * Represents an image including its regions.
 */
StillImageRepresentation = /** @class */ (function () {
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
 * Represents an image including its regions.
 */
export { StillImageRepresentation };
if (false) {
    /** @type {?} */
    StillImageRepresentation.prototype.stillImageFileValue;
    /** @type {?} */
    StillImageRepresentation.prototype.regions;
}
/**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
var /**
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
RequestStillImageRepresentations = /** @class */ (function () {
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
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
export { RequestStillImageRepresentations };
if (false) {
    /** @type {?} */
    RequestStillImageRepresentations.prototype.offsetChange;
    /** @type {?} */
    RequestStillImageRepresentations.prototype.whenLoadedCB;
}
/**
 * Represents a geometry belonging to a specific region.
 */
var /**
 * Represents a geometry belonging to a specific region.
 */
GeometryForRegion = /** @class */ (function () {
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
 * Represents a geometry belonging to a specific region.
 */
export { GeometryForRegion };
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
var StillImageComponent = /** @class */ (function () {
    function StillImageComponent(elementRef) {
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
    StillImageComponent.surfaceOfRectangularRegion = /**
     * Calculates the surface of a rectangular region.
     *
     * @param {?} geom the region's geometry.
     * @return {?} the surface.
     */
    function (geom) {
        if (geom.type !== 'rectangle') {
            console.log('expected rectangular region, but ' + geom.type + ' given');
            return 0;
        }
        /** @type {?} */
        var w = Math.max(geom.points[0].x, geom.points[1].x) - Math.min(geom.points[0].x, geom.points[1].x);
        /** @type {?} */
        var h = Math.max(geom.points[0].y, geom.points[1].y) - Math.min(geom.points[0].y, geom.points[1].y);
        return w * h;
    };
    /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param {?} imagesToDisplay the given file values to de displayed.
     * @return {?} the tile sources to be passed to OSD viewer.
     */
    StillImageComponent.prepareTileSourcesFromFileValues = /**
     * Prepare tile sources from the given sequence of [[ReadStillImageFileValue]].
     *
     * @param {?} imagesToDisplay the given file values to de displayed.
     * @return {?} the tile sources to be passed to OSD viewer.
     */
    function (imagesToDisplay) {
        /** @type {?} */
        var imageXOffset = 0;
        /** @type {?} */
        var imageYOffset = 0;
        /** @type {?} */
        var tileSources = [];
        try {
            for (var imagesToDisplay_1 = tslib_1.__values(imagesToDisplay), imagesToDisplay_1_1 = imagesToDisplay_1.next(); !imagesToDisplay_1_1.done; imagesToDisplay_1_1 = imagesToDisplay_1.next()) {
                var image = imagesToDisplay_1_1.value;
                /** @type {?} */
                var sipiBasePath = image.imageServerIIIFBaseURL + '/' + image.imageFilename;
                /** @type {?} */
                var width = image.dimX;
                /** @type {?} */
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
        var e_1, _a;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StillImageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['images'] && changes['images'].isFirstChange()) {
            this.setupViewer();
        }
        if (changes['images']) {
            this.openImages();
            this.renderRegions();
        }
    };
    /**
     * @return {?}
     */
    StillImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // initialisation is done on first run of ngOnChanges
    };
    /**
     * @return {?}
     */
    StillImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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
    /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     * @return {?}
     */
    StillImageComponent.prototype.updateImages = /**
     * Renders all ReadStillImageFileValues to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional ReadStillImageFileValues were added to this.images after creation/assignment of the this.images array.)
     * @return {?}
     */
    function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.openImages();
    };
    /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     * @return {?}
     */
    StillImageComponent.prototype.gotoLeft = /**
     * Get the more images from the server by requesting the previous page of results for the current resource (decrease offset).
     * @return {?}
     */
    function () {
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
    };
    /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     * @return {?}
     */
    StillImageComponent.prototype.gotoRight = /**
     * Get the more images from the server by requesting the next page of results for the current resource (increase offset).
     * @return {?}
     */
    function () {
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
                /** @type {?} */
                var remainingDiff = this.images.length - this.imageRangeEnd + 1;
                this.imageRangeStart += remainingDiff;
                this.imageRangeEnd += remainingDiff;
                // TODO: deactivate next button
            }
            this.openImages();
            this.renderRegions();
        }
        else if (this.images.length % this.pagingLimit === 0) {
            // paging always returned full result lists, so there could be more data to fetch
            console.log("request more images");
            /** @type {?} */
            var callback = function (numberOfImages) {
                if (numberOfImages >= _this.imageChangeInterval) {
                    // more images were loaded than are actually to be displayed
                    // more images were loaded than are actually to be displayed
                    _this.imageRangeStart += _this.imageChangeInterval;
                    _this.imageRangeEnd += _this.imageChangeInterval;
                    _this.openImages();
                    _this.renderRegions();
                }
                else if (numberOfImages > 0) {
                    // the amount of new images in less than the interval, show everything that can be shown
                    // the amount of new images in less than the interval, show everything that can be shown
                    _this.imageRangeStart += numberOfImages;
                    _this.imageRangeEnd += numberOfImages;
                    _this.openImages();
                    _this.renderRegions();
                }
                else {
                    /** @type {?} */
                    var remainingImages = _this.images.length - 1 - _this.imageRangeEnd;
                    _this.imageRangeStart += remainingImages;
                    _this.imageRangeEnd += remainingImages;
                    // TODO: no new images can be loaded -> deactivate control in GUI (note that perhaps sufficient permissions were missing, so we actually cannot be sure that higher offsets still deliver images)
                    // TODO: no new images can be loaded -> deactivate control in GUI (note that perhaps sufficient permissions were missing, so we actually cannot be sure that higher offsets still deliver images)
                    _this.openImages();
                    _this.renderRegions();
                }
            };
            /** @type {?} */
            var msg = new RequestStillImageRepresentations(1, callback);
            this.getImages.emit(msg);
        }
        else {
            // no more data to fetch
            // TODO: deactivate next button
        }
    };
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     */
    /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     * @return {?}
     */
    StillImageComponent.prototype.updateRegions = /**
     * Renders all regions to be found in [[this.images]].
     * (Although this.images is a Angular Input property, the built-in change detection of Angular does not detect changes in complex objects or arrays, only reassignment of objects/arrays.
     * Use this method if additional regions were added to the resources.images)
     * @return {?}
     */
    function () {
        if (!this.viewer) {
            this.setupViewer();
        }
        this.renderRegions();
    };
    /**
     * Initializes the OpenSeadragon viewer
     * @return {?}
     */
    StillImageComponent.prototype.setupViewer = /**
     * Initializes the OpenSeadragon viewer
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewerContainer = this.elementRef.nativeElement.getElementsByClassName('osd-container')[0];
        /** @type {?} */
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
    };
    /**
     * Adds all (non-preview) images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     * @return {?}
     */
    StillImageComponent.prototype.openImages = /**
     * Adds all (non-preview) images in this.images to the viewer.
     * Images are positioned in a horizontal row next to each other.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fileValues = this.images.map(function (img) {
            return img.stillImageFileValue;
        });
        /** @type {?} */
        var tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues.slice(this.imageRangeStart, this.imageRangeEnd + 1));
        this.viewer.clearOverlays();
        this.viewer.open(tileSources);
    };
    /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     * @return {?}
     */
    StillImageComponent.prototype.renderRegions = /**
     * Adds a ROI-overlay to the viewer for every region of every image in this.images
     * @return {?}
     */
    function () {
        this.viewer.clearOverlays();
        /** @type {?} */
        var imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
        var _loop_1 = function (image) {
            /** @type {?} */
            var aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
            /** @type {?} */
            var geometries = [];
            image.regions.map(function (reg) {
                /** @type {?} */
                var geoms = reg.getGeometries();
                geoms.map(function (geom) {
                    /** @type {?} */
                    var geomForReg = new GeometryForRegion(geom.geometry, reg.regionResource);
                    geometries.push(geomForReg);
                });
            });
            // sort all geometries belonging to this page
            geometries.sort(function (geom1, geom2) {
                if (geom1.geometry.type === 'rectangle' && geom2.geometry.type === 'rectangle') {
                    /** @type {?} */
                    var surf1 = StillImageComponent.surfaceOfRectangularRegion(geom1.geometry);
                    /** @type {?} */
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
                for (var geometries_1 = tslib_1.__values(geometries), geometries_1_1 = geometries_1.next(); !geometries_1_1.done; geometries_1_1 = geometries_1.next()) {
                    var geom = geometries_1_1.value;
                    /** @type {?} */
                    var geometry = geom.geometry;
                    this_1.createSVGOverlay(geom.region.id, geometry, aspectRatio, imageXOffset, geom.region.label);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return)) _a.call(geometries_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            imageXOffset++;
            var e_2, _a;
        };
        var this_1 = this;
        try {
            for (var _a = tslib_1.__values(this.images), _b = _a.next(); !_b.done; _b = _a.next()) {
                var image = _b.value;
                _loop_1(image);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _c;
    };
    /**
     * Creates and adds a ROI-overlay to the viewer
     * @param {?} regionIri the Iri of the region.
     * @param {?} geometry - the geometry describing the ROI
     * @param {?} aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param {?} xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param {?} toolTip -  the tooltip which should be displayed on mousehover of the svg element
     * @return {?}
     */
    StillImageComponent.prototype.createSVGOverlay = /**
     * Creates and adds a ROI-overlay to the viewer
     * @param {?} regionIri the Iri of the region.
     * @param {?} geometry - the geometry describing the ROI
     * @param {?} aspectRatio -  the aspectRatio (h/w) of the image on which the geometry should be placed
     * @param {?} xOffset -  the x-offset in Openseadragon viewport coordinates of the image on which the geometry should be placed
     * @param {?} toolTip -  the tooltip which should be displayed on mousehover of the svg element
     * @return {?}
     */
    function (regionIri, geometry, aspectRatio, xOffset, toolTip) {
        var _this = this;
        /** @type {?} */
        var lineColor = geometry.lineColor;
        /** @type {?} */
        var lineWidth = geometry.lineWidth;
        /** @type {?} */
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
        /** @type {?} */
        var svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        svgTitle.textContent = toolTip;
        /** @type {?} */
        var svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svgGroup.appendChild(svgTitle);
        svgGroup.appendChild(svgElement);
        /** @type {?} */
        var overlay = this.viewer.svgOverlay();
        overlay.node().appendChild(svgGroup);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param {?} geometry - the geometry describing the rectangle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    StillImageComponent.prototype.addSVGAttributesRectangle = /**
     * Adds the necessary attributes to create a ROI-overlay of type 'rectangle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon' (sic))
     * @param {?} geometry - the geometry describing the rectangle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    function (svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        var pointA = geometry.points[0];
        /** @type {?} */
        var pointB = geometry.points[1];
        /** @type {?} */
        var positionUL = new Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        /** @type {?} */
        var positionLR = new Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        /** @type {?} */
        var positionUR = new Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
        /** @type {?} */
        var positionLL = new Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
        /** @type {?} */
        var points = [positionUL, positionUR, positionLR, positionLL];
        /** @type {?} */
        var viewCoordPoints = this.image2ViewPortCoords(points, aspectRatio, xOffset);
        /** @type {?} */
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon')
     * @param {?} geometry - the geometry describing the polygon
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    StillImageComponent.prototype.addSVGAttributesPolygon = /**
     * Adds the necessary attributes to create a ROI-overlay of type 'polygon' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'polygon')
     * @param {?} geometry - the geometry describing the polygon
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    function (svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        /** @type {?} */
        var pointsString = this.createSVGPolygonPointsAttribute(viewCoordPoints);
        svgElement.setAttribute('points', pointsString);
    };
    /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'circle')
     * @param {?} geometry - the geometry describing the circle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    StillImageComponent.prototype.addSVGAttributesCircle = /**
     * Adds the necessary attributes to create a ROI-overlay of type 'circle' to a SVGElement
     * @param {?} svgElement - an SVGElement (should have type 'circle')
     * @param {?} geometry - the geometry describing the circle
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image on which the circle should be placed
     * @param {?} xOffset - the x-offset in Openseadragon viewport coordinates of the image on which the circle should be placed
     * @return {?}
     */
    function (svgElement, geometry, aspectRatio, xOffset) {
        /** @type {?} */
        var viewCoordPoints = this.image2ViewPortCoords(geometry.points, aspectRatio, xOffset);
        /** @type {?} */
        var cx = String(viewCoordPoints[0].x);
        /** @type {?} */
        var cy = String(viewCoordPoints[0].y);
        /** @type {?} */
        var radius = String(Math.sqrt(geometry.radius.x * geometry.radius.x + aspectRatio * aspectRatio * geometry.radius.y * geometry.radius.y));
        svgElement.setAttribute('cx', cx);
        svgElement.setAttribute('cy', cy);
        svgElement.setAttribute('r', radius);
    };
    /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param {?} points - an array of points in coordinate system relative to an image
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image
     * @param {?} xOffset - the x-offset in viewport coordinates of the image
     * @return {?} - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    StillImageComponent.prototype.image2ViewPortCoords = /**
     * Maps a Point2D[] with coordinates relative to an image to a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     * see also: https://openseadragon.github.io/examples/viewport-coordinates/
     * @param {?} points - an array of points in coordinate system relative to an image
     * @param {?} aspectRatio - the aspectRatio (h/w) of the image
     * @param {?} xOffset - the x-offset in viewport coordinates of the image
     * @return {?} - a new Point2D[] with coordinates in the viewport coordinate system of Openseadragon
     */
    function (points, aspectRatio, xOffset) {
        return points.map(function (point) {
            return new Point2D(point.x + xOffset, point.y * aspectRatio);
        });
    };
    /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param {?} points - an array of points to be serialized to a string
     * @return {?} - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    StillImageComponent.prototype.createSVGPolygonPointsAttribute = /**
     * Returns a string in the format expected by the 'points' attribute of a SVGElement
     * @param {?} points - an array of points to be serialized to a string
     * @return {?} - the points serialized to a string in the format expected by the 'points' attribute of a SVGElement
     */
    function (points) {
        /** @type {?} */
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
export { StillImageComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpbGwtaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsY0FBYyxFQUNkLE9BQU8sRUFLVixNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFlckI7Ozs7QUFBQTtJQUVJOzs7T0FHRztJQUNILHFCQUFxQixjQUE0QjtRQUE1QixtQkFBYyxHQUFkLGNBQWMsQ0FBYztLQUVoRDtJQUVEOzs7O09BSUc7Ozs7OztJQUNILG1DQUFhOzs7OztJQUFiO1FBQ0ksTUFBTSxtQkFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFvQixFQUFDO0tBQ3hGO3NCQWxETDtJQW1EQyxDQUFBOzs7OztBQWxCRCx1QkFrQkM7Ozs7Ozs7O0FBS0Q7OztBQUFBO0lBRUk7Ozs7T0FJRztJQUNILGtDQUFxQixtQkFBNEMsRUFBVyxPQUFzQjtRQUE3RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXlCO1FBQVcsWUFBTyxHQUFQLE9BQU8sQ0FBZTtLQUVqRzttQ0FqRUw7SUFtRUMsQ0FBQTs7OztBQVhELG9DQVdDOzs7Ozs7Ozs7O0FBS0Q7OztBQUFBO0lBRUk7Ozs7T0FJRztJQUNILDBDQUFxQixZQUFvQixFQUFXLFlBQThDO1FBQTdFLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQVcsaUJBQVksR0FBWixZQUFZLENBQWtDO0tBQ2pHOzJDQWhGTDtJQWlGQyxDQUFBOzs7O0FBVEQsNENBU0M7Ozs7Ozs7Ozs7QUFLRDs7O0FBQUE7SUFFSTs7OztPQUlHO0lBQ0gsMkJBQXFCLFFBQXdC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QUN2QjtTQUNKO1FBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQzs7O2dCQXpqQjNCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsaXFFQStEYjtvQkFDRyxNQUFNLEVBQUUsQ0FBQyxxNkJBQXE2QixDQUFDO2lCQUNsN0I7Ozs7Z0JBektHLFVBQVU7Ozt5QkE0S1QsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzsrQkFFTCxLQUFLOzRCQUVMLE1BQU07Z0NBQ04sTUFBTTs7OEJBdExYOztTQTRLYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBLbm9yYUNvbnN0YW50cyxcbiAgICBQb2ludDJELFxuICAgIFJlYWRHZW9tVmFsdWUsXG4gICAgUmVhZFJlc291cmNlLFxuICAgIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLFxuICAgIFJlZ2lvbkdlb21ldHJ5XG59IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuXG4vLyBUaGlzIGNvbXBvbmVudCBuZWVkcyB0aGUgb3BlbnNlYWRyYWdvbiBsaWJyYXJ5IGl0c2VsZiwgYXMgd2VsbCBhcyB0aGUgb3BlbnNlYWRyYWdvbiBwbHVnaW4gb3BlbnNlYWRyYWdvbi1zdmctb3ZlcmxheVxuLy8gQm90aCBsaWJyYXJpZXMgYXJlIGluc3RhbGxlZCB2aWEgcGFja2FnZS5qc29uLCBhbmQgbG9hZGVkIGdsb2JhbGx5IHZpYSB0aGUgc2NyaXB0IHRhZyBpbiAuYW5ndWxhci1jbGkuanNvblxuXG4vLyBPcGVuU2VhZHJhZ29uIGRvZXMgbm90IGV4cG9ydCBpdHNlbGYgYXMgRVM2L0VDTUEyMDE1IG1vZHVsZSxcbi8vIGl0IGlzIGxvYWRlZCBnbG9iYWxseSBpbiBzY3JpcHRzIHRhZyBvZiBhbmd1bGFyLWNsaS5qc29uLFxuLy8gd2Ugc3RpbGwgbmVlZCB0byBkZWNsYXJlIHRoZSBuYW1lc3BhY2UgdG8gbWFrZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGhhcHB5LlxuZGVjbGFyZSBsZXQgT3BlblNlYWRyYWdvbjogYW55O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWdpb24uXG4gKiBDb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgcmVwcmVzZW50aW5nIHRoZSByZWdpb24gYW5kIGl0cyBnZW9tZXRyaWVzLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VSZWdpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVnaW9uUmVzb3VyY2UgYSByZXNvdXJjZSBvZiB0eXBlIFJlZ2lvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlZ2lvblJlc291cmNlOiBSZWFkUmVzb3VyY2UpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgZ2VvbWV0cnkgaW5mb3JtYXRpb24gYmVsb25naW5nIHRvIHRoaXMgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRHZW9tZXRyaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpb25SZXNvdXJjZS5wcm9wZXJ0aWVzW0tub3JhQ29uc3RhbnRzLmhhc0dlb21ldHJ5XSBhcyBSZWFkR2VvbVZhbHVlW107XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW1hZ2UgaW5jbHVkaW5nIGl0cyByZWdpb25zLlxuICovXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0aWxsSW1hZ2VGaWxlVmFsdWUgYSBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0gcmVwcmVzZW50aW5nIGFuIGltYWdlLlxuICAgICAqIEBwYXJhbSByZWdpb25zIHRoZSByZWdpb25zIGJlbG9uZ2luZyB0byB0aGUgaW1hZ2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RpbGxJbWFnZUZpbGVWYWx1ZTogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWUsIHJlYWRvbmx5IHJlZ2lvbnM6IEltYWdlUmVnaW9uW10pIHtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIFNlbmRzIGEgcmVxdWVzdHMgdG8gdGhlIHBhcmVudCBjb21wb25lbnQgdG8gbG9hZCBtb3JlIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucyB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvZmZzZXRDaGFuZ2UgdGhlIHJlbGF0aXZlIGNoYW5nZSBvZiB0aGUgb2Zmc2V0IGluIG9yZGVyIHRvIGdldCBtb3JlIGluY29taW5nIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgZm9yIHRoZSByZXNvdXJjZSBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkLiBFaXRoZXIgMSBvciAtMS5cbiAgICAgKiBAcGFyYW0gd2hlbkxvYWRlZENCIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBtb3JlIGluY29taW5nIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgaGF2ZSBiZWVuIHJlcXVlc3RlZCBhbmQgdGhlIGFuc3dlciBhcnJpdmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBvZmZzZXRDaGFuZ2U6IG51bWJlciwgcmVhZG9ubHkgd2hlbkxvYWRlZENCOiAobnVtYmVyT2ZJbWFnZXM6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ2VvbWV0cnkgYmVsb25naW5nIHRvIGEgc3BlY2lmaWMgcmVnaW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlGb3JSZWdpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgdGhlIGdlb21ldHJpY2FsIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSByZWdpb24gdGhlIHJlZ2lvbiB0aGUgZ2VvbWV0cnkgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIHJlYWRvbmx5IHJlZ2lvbjogUmVhZFJlc291cmNlKSB7XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgY3JlYXRlcyBhIE9wZW5TZWFkcmFnb24gdmlld2VyIGluc3RhbmNlLlxuICogQWNjZXB0cyBhbiBhcnJheSBvZiBSZWFkUmVzb3VyY2UgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdG8gYmUgcmVuZGVyZWQuXG4gKiBUaGUgdmlld2VyIHdpbGwgbm90IHJlbmRlciBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgd2l0aCBpc1ByZXZpZXcgPT0gdHJ1ZVxuICogQG1lbWJlciByZXNvdXJjZXMgLSByZXNvdXJjZXMgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSB0aGUgU3RpbGxJbWFnZUZpbGVWYWx1ZXMgYW5kIGluY29taW5nIHJlZ2lvbnMgdG8gYmUgcmVuZGVyZWQuIChVc2UgYXMgYW5ndWxhciBASW5wdXQgZGF0YSBiaW5kaW5nIHByb3BlcnR5LilcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc3RpbGwtaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInN0aWxsLWltYWdlLXZpZXdlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIGxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX1BSRVZfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2xlZnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gbWFpbiBjb250ZW50IHdpdGggbmF2aWdhdGlvbiBhbmQgb3NkIHZpZXdlciAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXG4gICAgICAgIDwhLS0gaGVhZGVyIHdpdGggaW1hZ2UgdG9vbHMgLS0+XG4gICAgICAgIDxtYXQtdG9vbGJhciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgICAgICAgICAgICA8IS0tIGhvbWUgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9IT01FXCI+PG1hdC1pY29uPmhvbWU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS0gem9vbSBidXR0b25zIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fSU5cIj48bWF0LWljb24+YWRkPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfWk9PTV9PVVRcIj48bWF0LWljb24+cmVtb3ZlPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHdpbmRvdyBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfRlVMTF9QQUdFXCI+PG1hdC1pY29uPmZ1bGxzY3JlZW48L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gICAgICAgIDwvbWF0LXRvb2xiYXI+XG5cbiAgICAgICAgPCEtLSBvcGVuc2VhZHJhZ29uIChvc2QpIHZpZXdlciAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9zZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPCEtLSAvb3BlbnNlYWRyYWdvbiAob3NkKSAtLT5cbiAgICAgICAgPCEtLSBmb290ZXIgZm9yIGNvcHlyaWdodCBpbmZvOyBkb3dubG9hZCBidXR0b24gZXRjLiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXQtY2FwdGlvblwiIFtpbm5lckh0bWxdPVwiaW1hZ2VDYXB0aW9uXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24gcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZnVsbC1zaXplXCIgaWQ9XCJLVUlfT1NEX05FWFRfUEFHRVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG48IS0tIHNpbXBsZSBpbWFnZSB2aWV3ZXIgZS5nLiBhcyBhIHByZXZpZXcgLS0+XG48IS0tIFRPRE86IGhhbmRsZSBpbWFnZXMgYXJyYXkgLS0+XG48IS0tPGltZyAqbmdJZj1cInNpbXBsZSAmJiBpbWFnZXM/Lmxlbmd0aCA9PT0gMTsgZWxzZSBvc2RWaWV3ZXJcIiBbc3JjXT1cInNpbXBsZUltYWdlRXhhbXBsZVwiPi0tPlxuXG5cbjwhLS1cbiAgICA8ZGl2PlxuICAgICAgICA8c3BhbiAqbmdJZj1cImltYWdlcy5sZW5ndGggPiAxXCIgKGNsaWNrKT1cImdvdG9MZWZ0KClcIj4mbHQ7Jmx0Ozwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvUmlnaHQoKVwiPiZndDsmZ3Q7PC9zcGFuPlxuICAgIDwvZGl2PlxuLS0+XG5cblxuXG5gLFxuICAgIHN0eWxlczogW2Auc3RpbGwtaW1hZ2Utdmlld2Vye2Rpc3BsYXk6aW5saW5lLWZsZXg7aGVpZ2h0OjQwMHB4O21heC13aWR0aDo4MDBweDt3aWR0aDoxMDAlfUBtZWRpYSAobWF4LWhlaWdodDo2MzZweCl7LnN0aWxsLWltYWdlLXZpZXdlcntoZWlnaHQ6MzAwcHh9fS5zdGlsbC1pbWFnZS12aWV3ZXIgLm5hdmlnYXRpb257aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7d2lkdGg6MzZweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9uIC5tYXQtYnV0dG9uLmZ1bGwtc2l6ZXtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7d2lkdGg6MzZweCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDttaW4td2lkdGg6MzZweCFpbXBvcnRhbnR9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudHtoZWlnaHQ6Y2FsYyg0MDBweCArIDY0cHggKyAyNHB4KTttYXgtd2lkdGg6Y2FsYyg4MDBweCAtICgyICogMzZweCkpO3dpZHRoOmNhbGMoMTAwJSAtICgyICogMzZweCkpfS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXJ7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjQwMHB4fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLm9zZC1jb250YWluZXIuZnVsbHNjcmVlbnttYXgtd2lkdGg6MTAwdnd9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAuZm9vdGVyIHB7Y29sb3I6I2NjYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7aGVpZ2h0OjI0cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHh9L2RlZXAvIC5yb2ktc3Znb3ZlcmxheXtvcGFjaXR5Oi40O2ZpbGw6dHJhbnNwYXJlbnQ7c3Ryb2tlOiMwMDY5NWM7c3Ryb2tlLXdpZHRoOjJweDt2ZWN0b3ItZWZmZWN0Om5vbi1zY2FsaW5nLXN0cm9rZX0ucm9pLXN2Z292ZXJsYXk6Zm9jdXMsL2RlZXAvIC5yb2ktc3Znb3ZlcmxheTpob3ZlcntvcGFjaXR5OjF9YF1cbn0pXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW1hZ2VzOiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25bXTtcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlU3RhcnQ6IG51bWJlcjsgIC8vIGluZGV4IGZpcnN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzIHRvIGJlIGRpc3BsYXllZFxuICAgIEBJbnB1dCgpIGltYWdlUmFuZ2VFbmQ6IG51bWJlcjsgLy8gaW5kZXggb2YgbGFzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWQuXG4gICAgQElucHV0KCkgaW1hZ2VDaGFuZ2VJbnRlcnZhbDogbnVtYmVyOyAvLyB0aGUgc2l6ZSBvZiB0aGUgaW50ZXJ2YWwgd2hlbiBkaXNwbGF5aW5nIG1vcmUgaW1hZ2VzIG9mIHRoaXMuaW1hZ2VzXG5cbiAgICBASW5wdXQoKSBpbWFnZUNhcHRpb24/OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgZ2V0SW1hZ2VzID0gbmV3IEV2ZW50RW1pdHRlcjxSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucz4oKTsgLy8gc2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IChvYmplY3QuY29tcG9uZW50KSB0byBsb2FkIHRoZSBuZXh0IG9yIHByZXZpb3VzIHBhZ2Ugb2YgcmVzdWx0cyAoaW1hZ2VzKSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICBAT3V0cHV0KCkgcmVnaW9uSG92ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgLy8gdGhlIHBhZ2luZyBsaW1pdCBzaG91bGQgYmUgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgYXBwXG4gICAgcGFnaW5nTGltaXQ6IG51bWJlciA9IDI1O1xuXG5cbiAgICBwcml2YXRlIHZpZXdlcjtcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHN1cmZhY2Ugb2YgYSByZWN0YW5ndWxhciByZWdpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbSB0aGUgcmVnaW9uJ3MgZ2VvbWV0cnkuXG4gICAgICogQHJldHVybnMgdGhlIHN1cmZhY2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTogUmVnaW9uR2VvbWV0cnkpOiBudW1iZXIge1xuXG4gICAgICAgIGlmIChnZW9tLnR5cGUgIT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXhwZWN0ZWQgcmVjdGFuZ3VsYXIgcmVnaW9uLCBidXQgJyArIGdlb20udHlwZSArICcgZ2l2ZW4nKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdyA9IE1hdGgubWF4KGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpIC0gTWF0aC5taW4oZ2VvbS5wb2ludHNbMF0ueCwgZ2VvbS5wb2ludHNbMV0ueCk7XG4gICAgICAgIGNvbnN0IGggPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLnksIGdlb20ucG9pbnRzWzFdLnkpO1xuXG4gICAgICAgIHJldHVybiB3ICogaDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGlsZSBzb3VyY2VzIGZyb20gdGhlIGdpdmVuIHNlcXVlbmNlIG9mIFtbUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVdXS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbWFnZXNUb0Rpc3BsYXkgdGhlIGdpdmVuIGZpbGUgdmFsdWVzIHRvIGRlIGRpc3BsYXllZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdGlsZSBzb3VyY2VzIHRvIGJlIHBhc3NlZCB0byBPU0Qgdmlld2VyLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHByZXBhcmVUaWxlU291cmNlc0Zyb21GaWxlVmFsdWVzKGltYWdlc1RvRGlzcGxheTogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSk6IE9iamVjdFtdIHtcbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgIGxldCBpbWFnZVlPZmZzZXQgPSAwO1xuICAgICAgICBjb25zdCB0aWxlU291cmNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzVG9EaXNwbGF5KSB7XG4gICAgICAgICAgICBjb25zdCBzaXBpQmFzZVBhdGggPSBpbWFnZS5pbWFnZVNlcnZlcklJSUZCYXNlVVJMICsgJy8nICsgaW1hZ2UuaW1hZ2VGaWxlbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UuZGltWDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmRpbVk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBPcGVuU2VhZHJhZ29uIHRpbGVTb3VyY2VzIGFjY29yZGluZyB0byBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2RvY3MvT3BlblNlYWRyYWdvbi5WaWV3ZXIuaHRtbCNvcGVuXG4gICAgICAgICAgICB0aWxlU291cmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3QgSUlJRiB0aWxlU291cmNlIGNvbmZpZ3VyYXRpb24gYWNjb3JkaW5nIHRvXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMS8jdGVjaG5pY2FsLXByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBzZWUgYWxzbyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4wLyNhLWltcGxlbWVudGF0aW9uLW5vdGVzXG4gICAgICAgICAgICAgICAgJ3RpbGVTb3VyY2UnOiB7XG4gICAgICAgICAgICAgICAgICAgICdAY29udGV4dCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9jb250ZXh0Lmpzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQGlkJzogc2lwaUJhc2VQYXRoLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2ZpbGUnOiBbJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2xldmVsMi5qc29uJ10sXG4gICAgICAgICAgICAgICAgICAgICdwcm90b2NvbCc6ICdodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAndGlsZXMnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYWxlRmFjdG9ycyc6IFsxLCAyLCA0LCA4LCAxNiwgMzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogMTAyNFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3gnOiBpbWFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgJ3knOiBpbWFnZVlPZmZzZXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcblxuICAgICAgICAgICAgLy8gNSBpbWFnZXMgcGVyIHJvd1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmIChpbWFnZVhPZmZzZXQgJSA1ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VZT2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbGVTb3VyY2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ltYWdlcyddICYmIGNoYW5nZXNbJ2ltYWdlcyddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBpbml0aWFsaXNhdGlvbiBpcyBkb25lIG9uIGZpcnN0IHJ1biBvZiBuZ09uQ2hhbmdlc1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMudmlld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB3ZXJlIGFkZGVkIHRvIHRoaXMuaW1hZ2VzIGFmdGVyIGNyZWF0aW9uL2Fzc2lnbm1lbnQgb2YgdGhlIHRoaXMuaW1hZ2VzIGFycmF5LilcbiAgICAgKi9cbiAgICB1cGRhdGVJbWFnZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgZm9yIHRoZSBjdXJyZW50IHJlc291cmNlIChkZWNyZWFzZSBvZmZzZXQpLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ290b0xlZnQoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogbW92ZSBsZWZ0IG9uIHRoaXMuaW1hZ2VzXG4gICAgICAgIC8vIFRPRE86IGlmIG5lY2Vzc2FyeSwgcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXJcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgLSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPj0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC09IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZVJhbmdlU3RhcnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBmZXdlciByZW1haW5pbmcgaW1hZ2VzIHRoYW4gaW50ZXJ2YWwsIHNob3cgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kIC09IHRoaXMuaW1hZ2VSYW5nZVN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGNhbm5vdCBkaXNwbGF5IG1vcmUgaW1hZ2VzIG9mIGxlbmd0aCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgYSBuZWdhdGl2ZSBvZmZzZXRcblxuICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IGdldHRpbmcgcHJldmlvdXMgb2Zmc2V0IChhbHNvIGluIHBhcmVudCBjb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIGJ5IHJlcXVlc3RpbmcgdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoaW5jcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9SaWdodCgpIHtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlRW5kIDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgaGFzIG1vcmUgaW1hZ2VzIHRvIGRpc3BsYXlcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCArIHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSB3aG9sZSBuZXh0IGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSBuZXh0IGludGVydmFsYCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc2ApO1xuICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwgY2FuIGJlIGRpc3BsYXllZCBqdXN0IGRpc3BsYXkgcmVtYWluaW5nIGltYWdlc1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpZmYgPSB0aGlzLmltYWdlcy5sZW5ndGggLSB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nRGlmZjtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nRGlmZjtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMubGVuZ3RoICUgdGhpcy5wYWdpbmdMaW1pdCA9PT0gMCkgeyAvLyBwYWdpbmcgYWx3YXlzIHJldHVybmVkIGZ1bGwgcmVzdWx0IGxpc3RzLCBzbyB0aGVyZSBjb3VsZCBiZSBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXF1ZXN0IG1vcmUgaW1hZ2VzYCk7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgcG9zaXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHBhcmVudCBjb21wb25lbnQgbG9hZGVkIG5ldyBpbWFnZXNcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkltYWdlcyA+PSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbW9yZSBpbWFnZXMgd2VyZSBsb2FkZWQgdGhhbiBhcmUgYWN0dWFsbHkgdG8gYmUgZGlzcGxheWVkXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlck9mSW1hZ2VzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW1vdW50IG9mIG5ldyBpbWFnZXMgaW4gbGVzcyB0aGFuIHRoZSBpbnRlcnZhbCwgc2hvdyBldmVyeXRoaW5nIHRoYXQgY2FuIGJlIHNob3duXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gbnVtYmVyT2ZJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSBudW1iZXJPZkltYWdlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gbmV3IGltYWdlcyBjb3VsZCBiZSByZXR1cm5lZCwgZGlzcGxheSByZW1haW5pbmcgaW1hZ2VzICh0aGVyZSBhcmUgZmV3ZXIgdGhhbiB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0ltYWdlczogbnVtYmVyID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSAtIHRoaXMuaW1hZ2VSYW5nZUVuZDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSByZW1haW5pbmdJbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSByZW1haW5pbmdJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbm8gbmV3IGltYWdlcyBjYW4gYmUgbG9hZGVkIC0+IGRlYWN0aXZhdGUgY29udHJvbCBpbiBHVUkgKG5vdGUgdGhhdCBwZXJoYXBzIHN1ZmZpY2llbnQgcGVybWlzc2lvbnMgd2VyZSBtaXNzaW5nLCBzbyB3ZSBhY3R1YWxseSBjYW5ub3QgYmUgc3VyZSB0aGF0IGhpZ2hlciBvZmZzZXRzIHN0aWxsIGRlbGl2ZXIgaW1hZ2VzKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBuZXcgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMoMSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICB0aGlzLmdldEltYWdlcy5lbWl0KG1zZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIG1vcmUgZGF0YSB0byBmZXRjaFxuICAgICAgICAgICAgLy8gVE9ETzogZGVhY3RpdmF0ZSBuZXh0IGJ1dHRvblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCByZWdpb25zIHRvIGJlIGZvdW5kIGluIFtbdGhpcy5pbWFnZXNdXS5cbiAgICAgKiAoQWx0aG91Z2ggdGhpcy5pbWFnZXMgaXMgYSBBbmd1bGFyIElucHV0IHByb3BlcnR5LCB0aGUgYnVpbHQtaW4gY2hhbmdlIGRldGVjdGlvbiBvZiBBbmd1bGFyIGRvZXMgbm90IGRldGVjdCBjaGFuZ2VzIGluIGNvbXBsZXggb2JqZWN0cyBvciBhcnJheXMsIG9ubHkgcmVhc3NpZ25tZW50IG9mIG9iamVjdHMvYXJyYXlzLlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpZiBhZGRpdGlvbmFsIHJlZ2lvbnMgd2VyZSBhZGRlZCB0byB0aGUgcmVzb3VyY2VzLmltYWdlcylcbiAgICAgKi9cbiAgICB1cGRhdGVSZWdpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIE9wZW5TZWFkcmFnb24gdmlld2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cFZpZXdlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3NkLWNvbnRhaW5lcicpWzBdO1xuICAgICAgICBjb25zdCBvc2RPcHRpb25zID0ge1xuICAgICAgICAgICAgZWxlbWVudDogdmlld2VyQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICAgICAgc2hvd05hdmlnYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21JbkJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9JTicsXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uOiAnS1VJX09TRF9aT09NX09VVCcsXG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbjogJ0tVSV9PU0RfUFJFVl9QQUdFJyxcbiAgICAgICAgICAgIG5leHRCdXR0b246ICdLVUlfT1NEX05FWFRfUEFHRScsXG4gICAgICAgICAgICBob21lQnV0dG9uOiAnS1VJX09TRF9IT01FJyxcbiAgICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnS1VJX09TRF9GVUxMX1BBR0UnLFxuICAgICAgICAgICAgcm90YXRlTGVmdEJ1dHRvbjogJ0tVSV9PU0RfUk9UQVRFX0xFRlQnLCAgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuICAgICAgICAgICAgcm90YXRlUmlnaHRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9SSUdIVCcgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IE9wZW5TZWFkcmFnb24uVmlld2VyKG9zZE9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdmdWxsLXNjcmVlbicsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5mdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmV2ZW50U291cmNlLnN2Z092ZXJsYXkoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCAobm9uLXByZXZpZXcpIGltYWdlcyBpbiB0aGlzLmltYWdlcyB0byB0aGUgdmlld2VyLlxuICAgICAqIEltYWdlcyBhcmUgcG9zaXRpb25lZCBpbiBhIGhvcml6b250YWwgcm93IG5leHQgdG8gZWFjaCBvdGhlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9wZW5JbWFnZXMoKTogdm9pZCB7XG4gICAgICAgIC8vIGltYWdlWE9mZnNldCBjb250cm9scyB0aGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHNpZGUgb2YgZWFjaCBpbWFnZSBpbiB0aGUgT3BlblNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbS5cbiAgICAgICAgLy8gVGhlIGZpcnN0IGltYWdlIGhhcyBpdHMgbGVmdCBzaWRlIGF0IHggPSAwLCBhbmQgYWxsIGltYWdlcyBhcmUgc2NhbGVkIHRvIGhhdmUgYSB3aWR0aCBvZiAxIGluIHZpZXdwb3J0IGNvb3JkaW5hdGVzLlxuICAgICAgICAvLyBzZWUgYWxzbzogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9leGFtcGxlcy92aWV3cG9ydC1jb29yZGluYXRlcy9cblxuICAgICAgICBjb25zdCBmaWxlVmFsdWVzOiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZVtdID0gdGhpcy5pbWFnZXMubWFwKFxuICAgICAgICAgICAgKGltZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWcuc3RpbGxJbWFnZUZpbGVWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgb25seSB0aGUgZGVmaW5lZCByYW5nZSBvZiB0aGlzLmltYWdlc1xuICAgICAgICBjb25zdCB0aWxlU291cmNlczogT2JqZWN0W10gPSBTdGlsbEltYWdlQ29tcG9uZW50LnByZXBhcmVUaWxlU291cmNlc0Zyb21GaWxlVmFsdWVzKGZpbGVWYWx1ZXMuc2xpY2UodGhpcy5pbWFnZVJhbmdlU3RhcnQsIHRoaXMuaW1hZ2VSYW5nZUVuZCArIDEpKTtcblxuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG4gICAgICAgIHRoaXMudmlld2VyLm9wZW4odGlsZVNvdXJjZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyIGZvciBldmVyeSByZWdpb24gb2YgZXZlcnkgaW1hZ2UgaW4gdGhpcy5pbWFnZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld2VyLmNsZWFyT3ZlcmxheXMoKTtcblxuICAgICAgICBsZXQgaW1hZ2VYT2Zmc2V0ID0gMDsgLy8gc2VlIGRvY3VtZW50YXRpb24gaW4gdGhpcy5vcGVuSW1hZ2VzKCkgZm9yIHRoZSB1c2FnZSBvZiBpbWFnZVhPZmZzZXRcblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IChpbWFnZS5zdGlsbEltYWdlRmlsZVZhbHVlLmRpbVkgLyBpbWFnZS5zdGlsbEltYWdlRmlsZVZhbHVlLmRpbVgpO1xuXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGxldCBnZW9tZXRyaWVzOiBHZW9tZXRyeUZvclJlZ2lvbltdID0gW107XG4gICAgICAgICAgICBpbWFnZS5yZWdpb25zLm1hcCgocmVnKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbXMgPSByZWcuZ2V0R2VvbWV0cmllcygpO1xuXG4gICAgICAgICAgICAgICAgZ2VvbXMubWFwKChnZW9tKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tRm9yUmVnID0gbmV3IEdlb21ldHJ5Rm9yUmVnaW9uKGdlb20uZ2VvbWV0cnksIHJlZy5yZWdpb25SZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGdlb21Gb3JSZWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgYWxsIGdlb21ldHJpZXMgYmVsb25naW5nIHRvIHRoaXMgcGFnZVxuICAgICAgICAgICAgZ2VvbWV0cmllcy5zb3J0KChnZW9tMSwgZ2VvbTIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChnZW9tMS5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJyAmJiBnZW9tMi5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYxID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMS5nZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYyID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMi5nZW9tZXRyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcmVnMSBpcyBzbWFsbGVyIHRoYW4gcmVnMiwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnMSB0aGVuIGNvbWVzIGFmdGVyIHJlZzIgYW5kIHRodXMgaXMgcmVuZGVyZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cmYxIDwgc3VyZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgZ2VvbWV0cmllcyBmb3IgdGhpcyBwYWdlXG4gICAgICAgICAgICBmb3IgKGxldCBnZW9tIG9mIGdlb21ldHJpZXMpIHtcblxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IGdlb20uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTVkdPdmVybGF5KGdlb20ucmVnaW9uLmlkLCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIGltYWdlWE9mZnNldCwgZ2VvbS5yZWdpb24ubGFiZWwpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlWE9mZnNldCsrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCBhZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlclxuICAgICAqIEBwYXJhbSByZWdpb25JcmkgdGhlIElyaSBvZiB0aGUgcmVnaW9uLlxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBST0lcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSAgdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgZ2VvbWV0cnkgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgZ2VvbWV0cnkgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB0b29sVGlwIC0gIHRoZSB0b29sdGlwIHdoaWNoIHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gbW91c2Vob3ZlciBvZiB0aGUgc3ZnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR092ZXJsYXkocmVnaW9uSXJpOiBzdHJpbmcsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyLCB0b29sVGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGluZUNvbG9yID0gZ2VvbWV0cnkubGluZUNvbG9yO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZW9tZXRyeS5saW5lV2lkdGg7XG5cbiAgICAgICAgbGV0IHN2Z0VsZW1lbnQ7XG4gICAgICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwb2x5Z29uJyk7ICAvLyB5ZXMsIHdlIHJlbmRlciByZWN0YW5nbGVzIGFzIHN2ZyBwb2x5Z29uIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwb2x5Z29uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzUG9seWdvbihzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBTdGlsbEltYWdlT1NEVmlld2VyQ29tcG9uZW50LmNyZWF0ZVNWR092ZXJsYXk6IHVua25vd24gZ2VvbWV0cnlUeXBlOiAnICsgZ2VvbWV0cnkudHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN2Z0VsZW1lbnQuaWQgPSAncm9pLXN2Z292ZXJsYXktJyArIE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvaS1zdmdvdmVybGF5Jyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdzdHJva2U6ICcgKyBsaW5lQ29sb3IgKyAnOyBzdHJva2Utd2lkdGg6ICcgKyBsaW5lV2lkdGggKyAncHg7Jyk7XG5cbiAgICAgICAgLy8gZXZlbnQgd2hlbiBhIHJlZ2lvbiBpcyBob3ZlcmVkIChvdXRwdXQpXG4gICAgICAgIHN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uSG92ZXJlZC5lbWl0KHJlZ2lvbklyaSk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgICAgIHN2Z1RpdGxlLnRleHRDb250ZW50ID0gdG9vbFRpcDtcblxuICAgICAgICBjb25zdCBzdmdHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdUaXRsZSk7XG4gICAgICAgIHN2Z0dyb3VwLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLnZpZXdlci5zdmdPdmVybGF5KCk7XG4gICAgICAgIG92ZXJsYXkubm9kZSgpLmFwcGVuZENoaWxkKHN2Z0dyb3VwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdyZWN0YW5nbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicgKHNpYykpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvaW50QSA9IGdlb21ldHJ5LnBvaW50c1swXTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gZ2VvbWV0cnkucG9pbnRzWzFdO1xuXG4gICAgICAgIC8vIGdlb21ldHJ5LnBvaW50cyBjb250YWlucyB0d28gZGlhZ29uYWxseSBvcHBvc2VkIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZSwgYnV0IHRoZSBvcmRlciBvZiB0aGUgY29ybmVycyBpcyBhcmJpdHJhcnkuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBjb25zdHJ1Y3QgdGhlIHVwcGVybGVmdCAoVUwpLCBsb3dlcnJpZ2h0IChMUiksIHVwcGVycmlnaHQgKFVSKSBhbmQgbG93ZXJsZWZ0IChMTCkgcG9zaXRpb25zIG9mIHRoZSBjb3JuZXJzIHdpdGggbWluIGFuZCBtYXggb3BlcmF0aW9ucy5cbiAgICAgICAgY29uc3QgcG9zaXRpb25VTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVVIgPSBuZXcgUG9pbnQyRChNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtwb3NpdGlvblVMLCBwb3NpdGlvblVSLCBwb3NpdGlvbkxSLCBwb3NpdGlvbkxMXTtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ3BvbHlnb24nIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ2NpcmNsZScgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdjaXJjbGUnKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBjaXJjbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKGdlb21ldHJ5LnBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBjeCA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueCk7XG4gICAgICAgIGNvbnN0IGN5ID0gU3RyaW5nKHZpZXdDb29yZFBvaW50c1swXS55KTtcbiAgICAgICAgLy8gZ2VvbWV0cnkucmFkaXVzIGNvbnRhaW5zIG5vdCB0aGUgcmFkaXVzIGl0c2VsZiwgYnV0IHRoZSBjb29yZGluYXRlcyBvZiBhIChhcmJpdHJhcnkpIHBvaW50IG9uIHRoZSBjaXJjbGUuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBoYXZlIHRvIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IgZ2VvbWV0cnkucmFkaXVzIHRvIGdldCB0aGUgYWN0dWFsIHJhZGl1cy4gLT4gc3FydCh4XjIgKyB5XjIpXG4gICAgICAgIC8vIFNpbmNlIGdlb21ldHJ5LnJhZGl1cyBoYXMgaXRzIHkgY29vcmRpbmF0ZSBzY2FsZWQgdG8gdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbXVsdGlwbHkgaXQgd2l0aCB0aGUgYXNwZWN0UmF0aW8gdG8gZ2V0IHRvIHRoZSBzY2FsZSB1c2VkIGJ5IE9wZW5zZWFkcmFnb24sIGFuYWxvZ3VvdXMgdG8gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcygpXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IFN0cmluZyhNYXRoLnNxcnQoZ2VvbWV0cnkucmFkaXVzLnggKiBnZW9tZXRyeS5yYWRpdXMueCArIGFzcGVjdFJhdGlvICogYXNwZWN0UmF0aW8gKiBnZW9tZXRyeS5yYWRpdXMueSAqIGdlb21ldHJ5LnJhZGl1cy55KSk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncicsIHJhZGl1cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIGFuIGltYWdlIHRvIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICogc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG4gICAgICogQHBhcmFtIHBvaW50cyAtIGFuIGFycmF5IG9mIHBvaW50cyBpbiBjb29yZGluYXRlIHN5c3RlbSByZWxhdGl2ZSB0byBhbiBpbWFnZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcmV0dXJucyAtIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHM6IFBvaW50MkRbXSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogUG9pbnQyRFtdIHtcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50MkQocG9pbnQueCArIHhPZmZzZXQsIHBvaW50LnkgKiBhc3BlY3RSYXRpbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgJ3BvaW50cycgYXR0cmlidXRlIG9mIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgdG8gYmUgc2VyaWFsaXplZCB0byBhIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIC0gdGhlIHBvaW50cyBzZXJpYWxpemVkIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUocG9pbnRzOiBQb2ludDJEW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChwb2ludHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcsJztcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzU3RyaW5nO1xuICAgIH1cbn1cbiJdfQ==