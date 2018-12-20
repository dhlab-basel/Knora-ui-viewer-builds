(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@knora/core'), require('@angular/router'), require('@angular/common'), require('@angular/forms'), require('@angular/material'), require('@angular/material/datepicker'), require('@knora/action')) :
    typeof define === 'function' && define.amd ? define('@knora/viewer', ['exports', '@angular/core', '@knora/core', '@angular/router', '@angular/common', '@angular/forms', '@angular/material', '@angular/material/datepicker', '@knora/action'], factory) :
    (factory((global.knora = global.knora || {}, global.knora.viewer = {}),global.ng.core,null,global.ng.router,global.ng.common,global.ng.forms,global.ng.material,global.ng.material.datepicker,null));
}(this, (function (exports,core,core$1,router,common,forms,material,datepicker,action) { 'use strict';

    var AnnotationComponent = /** @class */ (function () {
        function AnnotationComponent() {
        }
        AnnotationComponent.prototype.ngOnInit = function () {
        };
        AnnotationComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'kui-region',
                        template: "<p>\n  region works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        RegionComponent.ctorParameters = function () { return []; };
        return RegionComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
            return this.regionResource.properties[core$1.KnoraConstants.hasGeometry];
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
            this.getImages = new core.EventEmitter(); // sends a message to the parent component (object.component) to load the next or previous page of results (images) from the server
            this.regionHovered = new core.EventEmitter();
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
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (imagesToDisplay_1_1 && !imagesToDisplay_1_1.done && (_a = imagesToDisplay_1.return))
                        _a.call(imagesToDisplay_1);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
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
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return))
                            _a.call(geometries_1);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
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
            catch (e_2_1) {
                e_2 = { error: e_2_1 };
            }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return))
                        _a.call(_b);
                }
                finally {
                    if (e_2)
                        throw e_2.error;
                }
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
            var positionUL = new core$1.Point2D(Math.min(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
            var positionLR = new core$1.Point2D(Math.max(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
            var positionUR = new core$1.Point2D(Math.max(pointA.x, pointB.x), Math.min(pointA.y, pointB.y));
            var positionLL = new core$1.Point2D(Math.min(pointA.x, pointB.x), Math.max(pointA.y, pointB.y));
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
                return new core$1.Point2D(point.x + xOffset, point.y * aspectRatio);
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
            { type: core.Component, args: [{
                        selector: 'kui-still-image',
                        template: "<div class=\"still-image-viewer\">\n    <div class=\"navigation left\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_PREV_PAGE\">\n            <mat-icon>keyboard_arrow_left</mat-icon>\n        </button>\n    </div>\n\n    <!-- main content with navigation and osd viewer -->\n    <div class=\"content\">\n\n        <!-- header with image tools -->\n        <mat-toolbar class=\"header\">\n            <mat-toolbar-row>\n                <!-- home button -->\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_HOME\"><mat-icon>home</mat-icon></button>\n            </span>\n                <!-- zoom buttons -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_IN\"><mat-icon>add</mat-icon></button>\n                <button mat-icon-button id=\"KUI_OSD_ZOOM_OUT\"><mat-icon>remove</mat-icon></button>\n            </span>\n                <!-- window button -->\n                <span class=\"fill-remaining-space\"></span>\n                <span>\n                <button mat-icon-button id=\"KUI_OSD_FULL_PAGE\"><mat-icon>fullscreen</mat-icon></button>\n            </span>\n            </mat-toolbar-row>\n        </mat-toolbar>\n\n        <!-- openseadragon (osd) viewer -->\n        <div class=\"osd-container\"></div>\n        <!-- /openseadragon (osd) -->\n        <!-- footer for copyright info; download button etc. -->\n        <div class=\"footer\">\n            <p class=\"mat-caption\" [innerHtml]=\"imageCaption\"></p>\n        </div>\n\n    </div>\n\n    <div class=\"navigation right\">\n        <button mat-button class=\"full-size\" id=\"KUI_OSD_NEXT_PAGE\">\n            <mat-icon>keyboard_arrow_right</mat-icon>\n        </button>\n    </div>\n\n</div>\n\n<!-- simple image viewer e.g. as a preview -->\n<!-- TODO: handle images array -->\n<!--<img *ngIf=\"simple && images?.length === 1; else osdViewer\" [src]=\"simpleImageExample\">-->\n\n\n<!--\n    <div>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoLeft()\">&lt;&lt;</span>\n        <span *ngIf=\"images.length > 1\" (click)=\"gotoRight()\">&gt;&gt;</span>\n    </div>\n-->\n\n\n\n",
                        styles: [".still-image-viewer{display:inline-flex;height:400px;max-width:800px;width:100%}@media (max-height:636px){.still-image-viewer{height:300px}}.still-image-viewer .navigation{height:calc(400px + 64px + 24px);width:36px}.still-image-viewer .navigation .mat-button.full-size{height:100%!important;width:36px!important;padding:0!important;min-width:36px!important}.still-image-viewer .content{height:calc(400px + 64px + 24px);max-width:calc(800px - (2 * 36px));width:calc(100% - (2 * 36px))}.still-image-viewer .content .osd-container{color:#ccc;background-color:#000;height:400px}.still-image-viewer .content .osd-container.fullscreen{max-width:100vw}.still-image-viewer .content .footer p{color:#ccc;background-color:#000;height:24px;margin:0;padding:0 16px}/deep/ .roi-svgoverlay{opacity:.4;fill:transparent;stroke:#00695c;stroke-width:2px;vector-effect:non-scaling-stroke}.roi-svgoverlay:focus,/deep/ .roi-svgoverlay:hover{opacity:1}"]
                    },] },
        ];
        /** @nocollapse */
        StillImageComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        StillImageComponent.propDecorators = {
            images: [{ type: core.Input }],
            imageRangeStart: [{ type: core.Input }],
            imageRangeEnd: [{ type: core.Input }],
            imageChangeInterval: [{ type: core.Input }],
            imageCaption: [{ type: core.Input }],
            getImages: [{ type: core.Output }],
            regionHovered: [{ type: core.Output }]
        };
        return StillImageComponent;
    }());

    var TextComponent = /** @class */ (function () {
        function TextComponent() {
        }
        TextComponent.prototype.ngOnInit = function () {
        };
        TextComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'kui-boolean-value',
                        template: "<mat-checkbox [checked]=\"valueObject.bool\" disabled=\"true\"></mat-checkbox>\n",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        BooleanValueComponent.ctorParameters = function () { return []; };
        BooleanValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-color-value',
                        template: "<span [style.background-color]=\"valueObject.colorHex\">{{valueObject.colorHex}}</span>",
                        styles: [".fill-remaining-space{flex:1 1 auto}.mat-form-field{width:36px;overflow-x:visible}"]
                    },] },
        ];
        /** @nocollapse */
        ColorValueComponent.ctorParameters = function () { return []; };
        ColorValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
                if (dateOrRange instanceof core$1.DateRangeSalsah) {
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
            if (date.precision === core$1.Precision.yearPrecision) {
                return {
                    format: 'yyyy',
                    date: new Date(date.year.toString()),
                    era: date.era,
                    calendar: date.calendar
                };
            }
            else if (date.precision === core$1.Precision.monthPrecision) {
                return {
                    format: 'MMMM ' + 'yyyy',
                    date: new Date(date.year, date.month - 1, 1),
                    era: date.era,
                    calendar: date.calendar
                };
            }
            else if (date.precision === core$1.Precision.dayPrecision) {
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
            { type: core.Component, args: [{
                        selector: 'kui-date-value',
                        template: "<span *ngIf=\"period; else preciseDate\">\n    {{dates[0].date | date: dates[0].format}}\n    <span *ngIf=\"era\">\n        {{dates[0].era}}\n    </span>\n    - {{dates[1].date | date: dates[1].format}}\n    <span *ngIf=\"era\">\n        {{dates[1].era}}\n    </span>\n\n    <span *ngIf=\"calendar\">\n        ({{dates[0].calendar}})\n    </span>\n</span>\n\n<ng-template #preciseDate>\n\n    <span>\n        {{dates[0].date | date: dates[0].format }}\n        <span *ngIf=\"era\">\n            {{dates[0].era}}\n        </span>\n        <span *ngIf=\"calendar\">\n            ({{dates[0].calendar}})\n        </span>\n    </span>\n\n</ng-template>\n",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        DateValueComponent.ctorParameters = function () { return []; };
        DateValueComponent.propDecorators = {
            calendar: [{ type: core.Input }],
            era: [{ type: core.Input }],
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-decimal-value',
                        template: "<span>{{valueObject.decimal}}</span>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        DecimalValueComponent.ctorParameters = function () { return []; };
        DecimalValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
        };
        return DecimalValueComponent;
    }());

    var ExternalResValueComponent = /** @class */ (function () {
        function ExternalResValueComponent() {
        }
        ExternalResValueComponent.prototype.ngOnInit = function () {
        };
        ExternalResValueComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'kui-geometry-value',
                        template: "<span>{{valueObject.geometryString}}</span>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        GeometryValueComponent.ctorParameters = function () { return []; };
        GeometryValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
        };
        return GeometryValueComponent;
    }());

    var GeonameValueComponent = /** @class */ (function () {
        function GeonameValueComponent() {
        }
        GeonameValueComponent.prototype.ngOnInit = function () {
        };
        GeonameValueComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
                        selector: 'kui-integer-value',
                        template: "<span>{{valueObject.integer}}</span>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        IntegerValueComponent.ctorParameters = function () { return []; };
        IntegerValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-interval-value',
                        template: "<span>{{valueObject.intervalStart}} - {{valueObject.intervalEnd}}</span>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        IntervalValueComponent.ctorParameters = function () { return []; };
        IntervalValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
        };
        return IntervalValueComponent;
    }());

    var LinkValueComponent = /** @class */ (function () {
        function LinkValueComponent() {
            this.referredResourceClicked = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'kui-link-value',
                        template: "<a class=\"salsah-link\" (click)=\"refResClicked()\">{{referredResource}}</a>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        LinkValueComponent.ctorParameters = function () { return []; };
        LinkValueComponent.propDecorators = {
            ontologyInfo: [{ type: core.Input }],
            valueObject: [{ type: core.Input }],
            referredResourceClicked: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'kui-list-value',
                        template: "<span>{{valueObject.listNodeLabel}}</span>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        ListValueComponent.ctorParameters = function () { return []; };
        ListValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
        };
        return ListValueComponent;
    }());

    var TextValueAsHtmlComponent = /** @class */ (function () {
        function TextValueAsHtmlComponent(el) {
            this.el = el;
            this.referredResourceClicked = new core.EventEmitter();
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
                && targetElement.className.toLowerCase().indexOf(core$1.KnoraConstants.SalsahLink) >= 0
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
            { type: core.Component, args: [{
                        selector: 'kui-text-value-as-html',
                        template: "<div>{{valueObject.html}}</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TextValueAsHtmlComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        TextValueAsHtmlComponent.propDecorators = {
            referredResourceClicked: [{ type: core.Output }],
            ontologyInfo: [{ type: core.Input }],
            bindEvents: [{ type: core.Input }],
            valueObject: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event.target'],] }]
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
            { type: core.Component, args: [{
                        selector: 'kui-text-value-as-string',
                        template: "<span>{{valueObject.str}}</span>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TextValueAsStringComponent.ctorParameters = function () { return []; };
        TextValueAsStringComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-text-value-as-xml',
                        template: "<span>{{valueObject.xml}}</span>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TextValueAsXmlComponent.ctorParameters = function () { return []; };
        TextValueAsXmlComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-textfile-value',
                        template: "<a target=\"_blank\" href=\"{{valueObject.textFileURL}}\">{{valueObject.textFilename}}</a>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TextfileValueComponent.ctorParameters = function () { return []; };
        TextfileValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'kui-uri-value',
                        template: "<a href=\"{{valueObject.uri}}\" target=\"_blank\">{{valueObject.uri}}</a>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        UriValueComponent.ctorParameters = function () { return []; };
        UriValueComponent.propDecorators = {
            valueObject: [{ type: core.Input }]
        };
        return UriValueComponent;
    }());

    var CompareViewComponent = /** @class */ (function () {
        function CompareViewComponent() {
        }
        CompareViewComponent.prototype.ngOnInit = function () {
        };
        CompareViewComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            this.KnoraConstants = core$1.KnoraConstants;
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
                    var resourceSeq = core$1.ConvertJSONLD.createReadResourcesSequenceFromJsonLD(compacted);
                    // make sure that exactly one resource is returned
                    if (resourceSeq.resources.length === 1) {
                        // get resource class Iris from response
                        var resourceClassIris = core$1.ConvertJSONLD.getResourceClassesFromJsonLD(compacted);
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
            { type: core.Component, args: [{
                        selector: 'kui-resource-view',
                        template: "<mat-card>\n\n    <!-- TODO: switch through the media type -->\n    <kui-still-image></kui-still-image>\n    <kui-moving-image></kui-moving-image>\n    <kui-annotation></kui-annotation>\n    <kui-audio></kui-audio>\n    <kui-collection></kui-collection>\n    <kui-ddd></kui-ddd>\n    <kui-document></kui-document>\n    <kui-link-obj></kui-link-obj>\n    <kui-object></kui-object>\n    <kui-region></kui-region>\n    <kui-text></kui-text>\n\n    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>\n    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>\n\n    <div *ngFor=\"let prop of resource?.properties | kuiKey\">\n        <mat-list>\n            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>\n            <mat-list-item *ngFor=\"let val of prop.value\">\n                <span [ngSwitch]=\"val.getClassName()\">\n                    <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\" [valueObject]=\"val\"></kui-color-value>\n                    <kui-text-value-as-html *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"true\"></kui-text-value-as-html>\n                    <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\" [valueObject]=\"val\"></kui-text-value-as-string>\n                    <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\" [valueObject]=\"val\"></kui-text-value-as-xml>\n                    <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\"></kui-date-value>\n                    <kui-link-value *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"></kui-link-value>\n                    <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\" [valueObject]=\"val\"></kui-integer-value>\n                    <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\" [valueObject]=\"val\"></kui-decimal-value>\n                    <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\" [valueObject]=\"val\"></kui-geometry-value>\n                    <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                    <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\" [valueObject]=\"val\"></kui-boolean-value>\n                    <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\" [valueObject]=\"val\"></kui-interval-value>\n                    <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                    <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\" [valueObject]=\"val\"></kui-textfile-value>\n                    <span *ngSwitchDefault=\"\">Not supported {{val.getClassName()}}</span>\n                </span>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</mat-card>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                    },] },
        ];
        /** @nocollapse */
        ResourceViewComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: core$1.ResourceService },
                { type: core$1.OntologyCacheService },
                { type: core$1.IncomingService }
            ];
        };
        ResourceViewComponent.propDecorators = {
            iri: [{ type: core.Input }]
        };
        return ResourceViewComponent;
    }());

    var TableViewComponent = /** @class */ (function () {
        function TableViewComponent() {
        }
        TableViewComponent.prototype.ngOnInit = function () {
        };
        TableViewComponent.decorators = [
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core$1.KuiCoreModule,
                            action.KuiActionModule,
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            datepicker.MatDatepickerModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatIconModule,
                            material.MatListModule,
                            material.MatNativeDateModule,
                            material.MatSlideToggleModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            forms.ReactiveFormsModule
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

    exports.ɵu = BooleanValueComponent;
    exports.ɵr = ColorValueComponent;
    exports.ɵp = DateValueComponent;
    exports.ɵs = DecimalValueComponent;
    exports.ɵba = ExternalResValueComponent;
    exports.ɵv = GeometryValueComponent;
    exports.ɵw = GeonameValueComponent;
    exports.ɵq = IntegerValueComponent;
    exports.ɵx = IntervalValueComponent;
    exports.ɵz = LinkValueComponent;
    exports.ɵy = ListValueComponent;
    exports.ɵl = TextValueAsHtmlComponent;
    exports.ɵm = TextValueAsStringComponent;
    exports.ɵn = TextValueAsXmlComponent;
    exports.ɵo = TextfileValueComponent;
    exports.ɵt = UriValueComponent;
    exports.ɵa = AnnotationComponent;
    exports.ɵb = AudioComponent;
    exports.ɵc = CollectionComponent;
    exports.ɵd = DddComponent;
    exports.ɵe = DocumentComponent;
    exports.ɵf = LinkObjComponent;
    exports.ɵg = MovingImageComponent;
    exports.ɵh = ObjectComponent;
    exports.ɵi = RegionComponent;
    exports.ɵj = StillImageComponent;
    exports.ɵk = TextComponent;
    exports.ɵbf = CompareViewComponent;
    exports.ɵbg = GraphViewComponent;
    exports.ɵbc = GridViewComponent;
    exports.ɵbb = ListViewComponent;
    exports.ɵbh = PropertiesViewComponent;
    exports.ɵbe = ResourceViewComponent;
    exports.ɵbd = TableViewComponent;
    exports.AnnotationComponent = AnnotationComponent;
    exports.AudioComponent = AudioComponent;
    exports.CollectionComponent = CollectionComponent;
    exports.DddComponent = DddComponent;
    exports.DocumentComponent = DocumentComponent;
    exports.LinkObjComponent = LinkObjComponent;
    exports.MovingImageComponent = MovingImageComponent;
    exports.ObjectComponent = ObjectComponent;
    exports.RegionComponent = RegionComponent;
    exports.ImageRegion = ImageRegion;
    exports.StillImageRepresentation = StillImageRepresentation;
    exports.RequestStillImageRepresentations = RequestStillImageRepresentations;
    exports.GeometryForRegion = GeometryForRegion;
    exports.StillImageComponent = StillImageComponent;
    exports.TextComponent = TextComponent;
    exports.BooleanValueComponent = BooleanValueComponent;
    exports.ColorValueComponent = ColorValueComponent;
    exports.DateValueComponent = DateValueComponent;
    exports.DecimalValueComponent = DecimalValueComponent;
    exports.ExternalResValueComponent = ExternalResValueComponent;
    exports.GeometryValueComponent = GeometryValueComponent;
    exports.GeonameValueComponent = GeonameValueComponent;
    exports.IntegerValueComponent = IntegerValueComponent;
    exports.IntervalValueComponent = IntervalValueComponent;
    exports.LinkValueComponent = LinkValueComponent;
    exports.ListValueComponent = ListValueComponent;
    exports.TextValueAsHtmlComponent = TextValueAsHtmlComponent;
    exports.TextValueAsStringComponent = TextValueAsStringComponent;
    exports.TextValueAsXmlComponent = TextValueAsXmlComponent;
    exports.TextfileValueComponent = TextfileValueComponent;
    exports.UriValueComponent = UriValueComponent;
    exports.CompareViewComponent = CompareViewComponent;
    exports.GraphViewComponent = GraphViewComponent;
    exports.GridViewComponent = GridViewComponent;
    exports.ListViewComponent = ListViewComponent;
    exports.PropertiesViewComponent = PropertiesViewComponent;
    exports.ResourceViewComponent = ResourceViewComponent;
    exports.TableViewComponent = TableViewComponent;
    exports.KuiViewerModule = KuiViewerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vcmEtdmlld2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL21vdmluZy1pbWFnZS9tb3ZpbmctaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQudHMiLG51bGwsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3ZXIubW9kdWxlLnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL3B1YmxpY19hcGkudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIva25vcmEtdmlld2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgYW5ub3RhdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hdWRpbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGF1ZGlvIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29sbGVjdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZGQnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBkZGQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kb2N1bWVudCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGRvY3VtZW50IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saW5rLW9iaicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGxpbmstb2JqIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtPYmpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLW1vdmluZy1pbWFnZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG1vdmluZy1pbWFnZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZpbmdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb2JqZWN0IHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlZ2lvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHJlZ2lvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBLbm9yYUNvbnN0YW50cyxcbiAgICBQb2ludDJELFxuICAgIFJlYWRHZW9tVmFsdWUsXG4gICAgUmVhZFJlc291cmNlLFxuICAgIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLFxuICAgIFJlZ2lvbkdlb21ldHJ5XG59IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuXG4vLyBUaGlzIGNvbXBvbmVudCBuZWVkcyB0aGUgb3BlbnNlYWRyYWdvbiBsaWJyYXJ5IGl0c2VsZiwgYXMgd2VsbCBhcyB0aGUgb3BlbnNlYWRyYWdvbiBwbHVnaW4gb3BlbnNlYWRyYWdvbi1zdmctb3ZlcmxheVxuLy8gQm90aCBsaWJyYXJpZXMgYXJlIGluc3RhbGxlZCB2aWEgcGFja2FnZS5qc29uLCBhbmQgbG9hZGVkIGdsb2JhbGx5IHZpYSB0aGUgc2NyaXB0IHRhZyBpbiAuYW5ndWxhci1jbGkuanNvblxuXG4vLyBPcGVuU2VhZHJhZ29uIGRvZXMgbm90IGV4cG9ydCBpdHNlbGYgYXMgRVM2L0VDTUEyMDE1IG1vZHVsZSxcbi8vIGl0IGlzIGxvYWRlZCBnbG9iYWxseSBpbiBzY3JpcHRzIHRhZyBvZiBhbmd1bGFyLWNsaS5qc29uLFxuLy8gd2Ugc3RpbGwgbmVlZCB0byBkZWNsYXJlIHRoZSBuYW1lc3BhY2UgdG8gbWFrZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGhhcHB5LlxuZGVjbGFyZSBsZXQgT3BlblNlYWRyYWdvbjogYW55O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSByZWdpb24uXG4gKiBDb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgcmVwcmVzZW50aW5nIHRoZSByZWdpb24gYW5kIGl0cyBnZW9tZXRyaWVzLlxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VSZWdpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVnaW9uUmVzb3VyY2UgYSByZXNvdXJjZSBvZiB0eXBlIFJlZ2lvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlZ2lvblJlc291cmNlOiBSZWFkUmVzb3VyY2UpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgZ2VvbWV0cnkgaW5mb3JtYXRpb24gYmVsb25naW5nIHRvIHRoaXMgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRHZW9tZXRyaWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpb25SZXNvdXJjZS5wcm9wZXJ0aWVzW0tub3JhQ29uc3RhbnRzLmhhc0dlb21ldHJ5XSBhcyBSZWFkR2VvbVZhbHVlW107XG4gICAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaW1hZ2UgaW5jbHVkaW5nIGl0cyByZWdpb25zLlxuICovXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0aWxsSW1hZ2VGaWxlVmFsdWUgYSBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0gcmVwcmVzZW50aW5nIGFuIGltYWdlLlxuICAgICAqIEBwYXJhbSByZWdpb25zIHRoZSByZWdpb25zIGJlbG9uZ2luZyB0byB0aGUgaW1hZ2UuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RpbGxJbWFnZUZpbGVWYWx1ZTogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWUsIHJlYWRvbmx5IHJlZ2lvbnM6IEltYWdlUmVnaW9uW10pIHtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIFNlbmRzIGEgcmVxdWVzdHMgdG8gdGhlIHBhcmVudCBjb21wb25lbnQgdG8gbG9hZCBtb3JlIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucyB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvZmZzZXRDaGFuZ2UgdGhlIHJlbGF0aXZlIGNoYW5nZSBvZiB0aGUgb2Zmc2V0IGluIG9yZGVyIHRvIGdldCBtb3JlIGluY29taW5nIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgZm9yIHRoZSByZXNvdXJjZSBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkLiBFaXRoZXIgMSBvciAtMS5cbiAgICAgKiBAcGFyYW0gd2hlbkxvYWRlZENCIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBtb3JlIGluY29taW5nIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgaGF2ZSBiZWVuIHJlcXVlc3RlZCBhbmQgdGhlIGFuc3dlciBhcnJpdmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBvZmZzZXRDaGFuZ2U6IG51bWJlciwgcmVhZG9ubHkgd2hlbkxvYWRlZENCOiAobnVtYmVyT2ZJbWFnZXM6IG51bWJlcikgPT4gdm9pZCkge1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ2VvbWV0cnkgYmVsb25naW5nIHRvIGEgc3BlY2lmaWMgcmVnaW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlGb3JSZWdpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgdGhlIGdlb21ldHJpY2FsIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSByZWdpb24gdGhlIHJlZ2lvbiB0aGUgZ2VvbWV0cnkgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIHJlYWRvbmx5IHJlZ2lvbjogUmVhZFJlc291cmNlKSB7XG4gICAgfVxuXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgY3JlYXRlcyBhIE9wZW5TZWFkcmFnb24gdmlld2VyIGluc3RhbmNlLlxuICogQWNjZXB0cyBhbiBhcnJheSBvZiBSZWFkUmVzb3VyY2UgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdG8gYmUgcmVuZGVyZWQuXG4gKiBAbWVtYmVyIHJlc291cmNlcyAtIHJlc291cmNlcyBjb250YWluaW5nIChhbW9uZyBvdGhlciByZXNvdXJjZXMpIHRoZSBTdGlsbEltYWdlRmlsZVZhbHVlcyBhbmQgaW5jb21pbmcgcmVnaW9ucyB0byBiZSByZW5kZXJlZC4gKFVzZSBhcyBhbmd1bGFyIEBJbnB1dCBkYXRhIGJpbmRpbmcgcHJvcGVydHkuKVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1zdGlsbC1pbWFnZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3RpbGwtaW1hZ2Utdmlld2VyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24gbGVmdFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJmdWxsLXNpemVcIiBpZD1cIktVSV9PU0RfUFJFVl9QQUdFXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBtYWluIGNvbnRlbnQgd2l0aCBuYXZpZ2F0aW9uIGFuZCBvc2Qgdmlld2VyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cbiAgICAgICAgPCEtLSBoZWFkZXIgd2l0aCBpbWFnZSB0b29scyAtLT5cbiAgICAgICAgPG1hdC10b29sYmFyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgICAgICAgICAgIDwhLS0gaG9tZSBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX0hPTUVcIj48bWF0LWljb24+aG9tZTwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLSB6b29tIGJ1dHRvbnMgLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfWk9PTV9JTlwiPjxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9aT09NX09VVFwiPjxtYXQtaWNvbj5yZW1vdmU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS0gd2luZG93IGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9GVUxMX1BBR0VcIj48bWF0LWljb24+ZnVsbHNjcmVlbjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgICAgICAgPC9tYXQtdG9vbGJhcj5cblxuICAgICAgICA8IS0tIG9wZW5zZWFkcmFnb24gKG9zZCkgdmlld2VyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3NkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8IS0tIC9vcGVuc2VhZHJhZ29uIChvc2QpIC0tPlxuICAgICAgICA8IS0tIGZvb3RlciBmb3IgY29weXJpZ2h0IGluZm87IGRvd25sb2FkIGJ1dHRvbiBldGMuIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1hdC1jYXB0aW9uXCIgW2lubmVySHRtbF09XCJpbWFnZUNhcHRpb25cIj48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiByaWdodFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJmdWxsLXNpemVcIiBpZD1cIktVSV9PU0RfTkVYVF9QQUdFXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5cbjwhLS0gc2ltcGxlIGltYWdlIHZpZXdlciBlLmcuIGFzIGEgcHJldmlldyAtLT5cbjwhLS0gVE9ETzogaGFuZGxlIGltYWdlcyBhcnJheSAtLT5cbjwhLS08aW1nICpuZ0lmPVwic2ltcGxlICYmIGltYWdlcz8ubGVuZ3RoID09PSAxOyBlbHNlIG9zZFZpZXdlclwiIFtzcmNdPVwic2ltcGxlSW1hZ2VFeGFtcGxlXCI+LS0+XG5cblxuPCEtLVxuICAgIDxkaXY+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW1hZ2VzLmxlbmd0aCA+IDFcIiAoY2xpY2spPVwiZ290b0xlZnQoKVwiPiZsdDsmbHQ7PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImltYWdlcy5sZW5ndGggPiAxXCIgKGNsaWNrKT1cImdvdG9SaWdodCgpXCI+Jmd0OyZndDs8L3NwYW4+XG4gICAgPC9kaXY+XG4tLT5cblxuXG5cbmAsXG4gICAgc3R5bGVzOiBbYC5zdGlsbC1pbWFnZS12aWV3ZXJ7ZGlzcGxheTppbmxpbmUtZmxleDtoZWlnaHQ6NDAwcHg7bWF4LXdpZHRoOjgwMHB4O3dpZHRoOjEwMCV9QG1lZGlhIChtYXgtaGVpZ2h0OjYzNnB4KXsuc3RpbGwtaW1hZ2Utdmlld2Vye2hlaWdodDozMDBweH19LnN0aWxsLWltYWdlLXZpZXdlciAubmF2aWdhdGlvbntoZWlnaHQ6Y2FsYyg0MDBweCArIDY0cHggKyAyNHB4KTt3aWR0aDozNnB4fS5zdGlsbC1pbWFnZS12aWV3ZXIgLm5hdmlnYXRpb24gLm1hdC1idXR0b24uZnVsbC1zaXple2hlaWdodDoxMDAlIWltcG9ydGFudDt3aWR0aDozNnB4IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O21pbi13aWR0aDozNnB4IWltcG9ydGFudH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50e2hlaWdodDpjYWxjKDQwMHB4ICsgNjRweCArIDI0cHgpO21heC13aWR0aDpjYWxjKDgwMHB4IC0gKDIgKiAzNnB4KSk7d2lkdGg6Y2FsYygxMDAlIC0gKDIgKiAzNnB4KSl9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAub3NkLWNvbnRhaW5lcntjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6IzAwMDtoZWlnaHQ6NDAwcHh9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAub3NkLWNvbnRhaW5lci5mdWxsc2NyZWVue21heC13aWR0aDoxMDB2d30uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5mb290ZXIgcHtjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6IzAwMDtoZWlnaHQ6MjRweDttYXJnaW46MDtwYWRkaW5nOjAgMTZweH0vZGVlcC8gLnJvaS1zdmdvdmVybGF5e29wYWNpdHk6LjQ7ZmlsbDp0cmFuc3BhcmVudDtzdHJva2U6IzAwNjk1YztzdHJva2Utd2lkdGg6MnB4O3ZlY3Rvci1lZmZlY3Q6bm9uLXNjYWxpbmctc3Ryb2tlfS5yb2ktc3Znb3ZlcmxheTpmb2N1cywvZGVlcC8gLnJvaS1zdmdvdmVybGF5OmhvdmVye29wYWNpdHk6MX1gXVxufSlcbmV4cG9ydCBjbGFzcyBTdGlsbEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbWFnZXM6IFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbltdO1xuICAgIEBJbnB1dCgpIGltYWdlUmFuZ2VTdGFydDogbnVtYmVyOyAgLy8gaW5kZXggZmlyc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMgdG8gYmUgZGlzcGxheWVkXG4gICAgQElucHV0KCkgaW1hZ2VSYW5nZUVuZDogbnVtYmVyOyAvLyBpbmRleCBvZiBsYXN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzIHRvIGJlIGRpc3BsYXllZC5cbiAgICBASW5wdXQoKSBpbWFnZUNoYW5nZUludGVydmFsOiBudW1iZXI7IC8vIHRoZSBzaXplIG9mIHRoZSBpbnRlcnZhbCB3aGVuIGRpc3BsYXlpbmcgbW9yZSBpbWFnZXMgb2YgdGhpcy5pbWFnZXNcblxuICAgIEBJbnB1dCgpIGltYWdlQ2FwdGlvbj86IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBnZXRJbWFnZXMgPSBuZXcgRXZlbnRFbWl0dGVyPFJlcXVlc3RTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zPigpOyAvLyBzZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQgKG9iamVjdC5jb21wb25lbnQpIHRvIGxvYWQgdGhlIG5leHQgb3IgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzIChpbWFnZXMpIGZyb20gdGhlIHNlcnZlclxuICAgIEBPdXRwdXQoKSByZWdpb25Ib3ZlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvLyB0aGUgcGFnaW5nIGxpbWl0IHNob3VsZCBiZSBkZWZpbmVkIGluIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBhcHBcbiAgICBwYWdpbmdMaW1pdDogbnVtYmVyID0gMjU7XG5cblxuICAgIHByaXZhdGUgdmlld2VyO1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3VyZmFjZSBvZiBhIHJlY3Rhbmd1bGFyIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBnZW9tIHRoZSByZWdpb24ncyBnZW9tZXRyeS5cbiAgICAgKiBAcmV0dXJucyB0aGUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tOiBSZWdpb25HZW9tZXRyeSk6IG51bWJlciB7XG5cbiAgICAgICAgaWYgKGdlb20udHlwZSAhPT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleHBlY3RlZCByZWN0YW5ndWxhciByZWdpb24sIGJ1dCAnICsgZ2VvbS50eXBlICsgJyBnaXZlbicpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueCwgZ2VvbS5wb2ludHNbMV0ueCkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGgubWF4KGdlb20ucG9pbnRzWzBdLnksIGdlb20ucG9pbnRzWzFdLnkpIC0gTWF0aC5taW4oZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSk7XG5cbiAgICAgICAgcmV0dXJuIHcgKiBoO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aWxlIHNvdXJjZXMgZnJvbSB0aGUgZ2l2ZW4gc2VxdWVuY2Ugb2YgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dLlxuICAgICAqXG4gICAgICogQHBhcmFtIGltYWdlc1RvRGlzcGxheSB0aGUgZ2l2ZW4gZmlsZSB2YWx1ZXMgdG8gZGUgZGlzcGxheWVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0aWxlIHNvdXJjZXMgdG8gYmUgcGFzc2VkIHRvIE9TRCB2aWV3ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJlcGFyZVRpbGVTb3VyY2VzRnJvbUZpbGVWYWx1ZXMoaW1hZ2VzVG9EaXNwbGF5OiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZVtdKTogT2JqZWN0W10ge1xuICAgICAgICBsZXQgaW1hZ2VYT2Zmc2V0ID0gMDtcbiAgICAgICAgbGV0IGltYWdlWU9mZnNldCA9IDA7XG4gICAgICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBpbWFnZXNUb0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpcGlCYXNlUGF0aCA9IGltYWdlLmltYWdlU2VydmVySUlJRkJhc2VVUkwgKyAnLycgKyBpbWFnZS5pbWFnZUZpbGVuYW1lO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS5kaW1YO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuZGltWTtcblxuICAgICAgICAgICAgLy8gY29uc3RydWN0IE9wZW5TZWFkcmFnb24gdGlsZVNvdXJjZXMgYWNjb3JkaW5nIHRvIGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLlZpZXdlci5odG1sI29wZW5cbiAgICAgICAgICAgIHRpbGVTb3VyY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBJSUlGIHRpbGVTb3VyY2UgY29uZmlndXJhdGlvbiBhY2NvcmRpbmcgdG9cbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4xLyN0ZWNobmljYWwtcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIHNlZSBhbHNvIGh0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yLjAvI2EtaW1wbGVtZW50YXRpb24tbm90ZXNcbiAgICAgICAgICAgICAgICAndGlsZVNvdXJjZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2NvbnRleHQuanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdAaWQnOiBzaXBpQmFzZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAncHJvZmlsZSc6IFsnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIvbGV2ZWwyLmpzb24nXSxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb3RvY29sJzogJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICd0aWxlcyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc2NhbGVGYWN0b3JzJzogWzEsIDIsIDQsIDgsIDE2LCAzMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAxMDI0XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAneCc6IGltYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAneSc6IGltYWdlWU9mZnNldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltYWdlWE9mZnNldCsrO1xuXG4gICAgICAgICAgICAvLyA1IGltYWdlcyBwZXIgcm93XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaWYgKGltYWdlWE9mZnNldCAlIDUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpbWFnZVlPZmZzZXQgKz0gMjtcbiAgICAgICAgICAgICAgICBpbWFnZVhPZmZzZXQgPSAwO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGlsZVNvdXJjZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICBpZiAoY2hhbmdlc1snaW1hZ2VzJ10gJiYgY2hhbmdlc1snaW1hZ2VzJ10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ltYWdlcyddKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGluaXRpYWxpc2F0aW9uIGlzIGRvbmUgb24gZmlyc3QgcnVuIG9mIG5nT25DaGFuZ2VzXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdG8gYmUgZm91bmQgaW4gW1t0aGlzLmltYWdlc11dLlxuICAgICAqIChBbHRob3VnaCB0aGlzLmltYWdlcyBpcyBhIEFuZ3VsYXIgSW5wdXQgcHJvcGVydHksIHRoZSBidWlsdC1pbiBjaGFuZ2UgZGV0ZWN0aW9uIG9mIEFuZ3VsYXIgZG9lcyBub3QgZGV0ZWN0IGNoYW5nZXMgaW4gY29tcGxleCBvYmplY3RzIG9yIGFycmF5cywgb25seSByZWFzc2lnbm1lbnQgb2Ygb2JqZWN0cy9hcnJheXMuXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGlmIGFkZGl0aW9uYWwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHdlcmUgYWRkZWQgdG8gdGhpcy5pbWFnZXMgYWZ0ZXIgY3JlYXRpb24vYXNzaWdubWVudCBvZiB0aGUgdGhpcy5pbWFnZXMgYXJyYXkuKVxuICAgICAqL1xuICAgIHVwZGF0ZUltYWdlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIGJ5IHJlcXVlc3RpbmcgdGhlIHByZXZpb3VzIHBhZ2Ugb2YgcmVzdWx0cyBmb3IgdGhlIGN1cnJlbnQgcmVzb3VyY2UgKGRlY3JlYXNlIG9mZnNldCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnb3RvTGVmdCgpIHtcblxuICAgICAgICAvLyBUT0RPOiBtb3ZlIGxlZnQgb24gdGhpcy5pbWFnZXNcbiAgICAgICAgLy8gVE9ETzogaWYgbmVjZXNzYXJ5LCByZXF1ZXN0IG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlclxuXG4gICAgICAgIGlmICh0aGlzLmltYWdlUmFuZ2VTdGFydCAtIHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbCA+PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBoYXMgbW9yZSBpbWFnZXMgdG8gZGlzcGxheVxuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgLT0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kIC09IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlUmFuZ2VTdGFydCA+IDApIHtcbiAgICAgICAgICAgIC8vIGZld2VyIHJlbWFpbmluZyBpbWFnZXMgdGhhbiBpbnRlcnZhbCwgc2hvdyByZW1haW5pbmcgaW1hZ2VzXG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgLT0gdGhpcy5pbWFnZVJhbmdlU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgY2Fubm90IGRpc3BsYXkgbW9yZSBpbWFnZXMgb2YgbGVuZ3RoIGludGVydmFsXG4gICAgICAgICAgICAvLyByZXF1ZXN0IG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciB1c2luZyBhIG5lZ2F0aXZlIG9mZnNldFxuXG4gICAgICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgZ2V0dGluZyBwcmV2aW91cyBvZmZzZXQgKGFsc28gaW4gcGFyZW50IGNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgYnkgcmVxdWVzdGluZyB0aGUgbmV4dCBwYWdlIG9mIHJlc3VsdHMgZm9yIHRoZSBjdXJyZW50IHJlc291cmNlIChpbmNyZWFzZSBvZmZzZXQpLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ290b1JpZ2h0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlUmFuZ2VFbmQgPCB0aGlzLmltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBoYXMgbW9yZSBpbWFnZXMgdG8gZGlzcGxheVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZVJhbmdlRW5kICsgdGhpcy5pbWFnZUNoYW5nZUludGVydmFsIDwgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdob2xlIG5leHQgaW50ZXJ2YWwgY2FuIGJlIGRpc3BsYXllZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5IG5leHQgaW50ZXJ2YWxgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSByZW1haW5pbmcgaW1hZ2VzYCk7XG4gICAgICAgICAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBpbnRlcnZhbCBjYW4gYmUgZGlzcGxheWVkIGp1c3QgZGlzcGxheSByZW1haW5pbmcgaW1hZ2VzXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nRGlmZiA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIHRoaXMuaW1hZ2VSYW5nZUVuZCArIDE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSByZW1haW5pbmdEaWZmO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSByZW1haW5pbmdEaWZmO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZGVhY3RpdmF0ZSBuZXh0IGJ1dHRvblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlcy5sZW5ndGggJSB0aGlzLnBhZ2luZ0xpbWl0ID09PSAwKSB7IC8vIHBhZ2luZyBhbHdheXMgcmV0dXJuZWQgZnVsbCByZXN1bHQgbGlzdHMsIHNvIHRoZXJlIGNvdWxkIGJlIG1vcmUgZGF0YSB0byBmZXRjaFxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJlcXVlc3QgbW9yZSBpbWFnZXNgKTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGNhbm5vdCBkaXNwbGF5IG1vcmUgaW1hZ2VzIG9mIGxlbmd0aCBpbnRlcnZhbFxuICAgICAgICAgICAgLy8gcmVxdWVzdCBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgdXNpbmcgYSBwb3NpdGl2ZSBvZmZzZXRcblxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gcGFyZW50IGNvbXBvbmVudCBsb2FkZWQgbmV3IGltYWdlc1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAobnVtYmVyT2ZJbWFnZXM6IG51bWJlcikgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mSW1hZ2VzID49IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIGltYWdlcyB3ZXJlIGxvYWRlZCB0aGFuIGFyZSBhY3R1YWxseSB0byBiZSBkaXNwbGF5ZWRcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyT2ZJbWFnZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhbW91bnQgb2YgbmV3IGltYWdlcyBpbiBsZXNzIHRoYW4gdGhlIGludGVydmFsLCBzaG93IGV2ZXJ5dGhpbmcgdGhhdCBjYW4gYmUgc2hvd25cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCArPSBudW1iZXJPZkltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IG51bWJlck9mSW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBubyBuZXcgaW1hZ2VzIGNvdWxkIGJlIHJldHVybmVkLCBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXMgKHRoZXJlIGFyZSBmZXdlciB0aGFuIHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nSW1hZ2VzOiBudW1iZXIgPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxIC0gdGhpcy5pbWFnZVJhbmdlRW5kO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHJlbWFpbmluZ0ltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHJlbWFpbmluZ0ltYWdlcztcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBubyBuZXcgaW1hZ2VzIGNhbiBiZSBsb2FkZWQgLT4gZGVhY3RpdmF0ZSBjb250cm9sIGluIEdVSSAobm90ZSB0aGF0IHBlcmhhcHMgc3VmZmljaWVudCBwZXJtaXNzaW9ucyB3ZXJlIG1pc3NpbmcsIHNvIHdlIGFjdHVhbGx5IGNhbm5vdCBiZSBzdXJlIHRoYXQgaGlnaGVyIG9mZnNldHMgc3RpbGwgZGVsaXZlciBpbWFnZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IG5ldyBSZXF1ZXN0U3RpbGxJbWFnZVJlcHJlc2VudGF0aW9ucygxLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VzLmVtaXQobXNnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gbW9yZSBkYXRhIHRvIGZldGNoXG4gICAgICAgICAgICAvLyBUT0RPOiBkZWFjdGl2YXRlIG5leHQgYnV0dG9uXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYWxsIHJlZ2lvbnMgdG8gYmUgZm91bmQgaW4gW1t0aGlzLmltYWdlc11dLlxuICAgICAqIChBbHRob3VnaCB0aGlzLmltYWdlcyBpcyBhIEFuZ3VsYXIgSW5wdXQgcHJvcGVydHksIHRoZSBidWlsdC1pbiBjaGFuZ2UgZGV0ZWN0aW9uIG9mIEFuZ3VsYXIgZG9lcyBub3QgZGV0ZWN0IGNoYW5nZXMgaW4gY29tcGxleCBvYmplY3RzIG9yIGFycmF5cywgb25seSByZWFzc2lnbm1lbnQgb2Ygb2JqZWN0cy9hcnJheXMuXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGlmIGFkZGl0aW9uYWwgcmVnaW9ucyB3ZXJlIGFkZGVkIHRvIHRoZSByZXNvdXJjZXMuaW1hZ2VzKVxuICAgICAqL1xuICAgIHVwZGF0ZVJlZ2lvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgT3BlblNlYWRyYWdvbiB2aWV3ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldHVwVmlld2VyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvc2QtY29udGFpbmVyJylbMF07XG4gICAgICAgIGNvbnN0IG9zZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlbGVtZW50OiB2aWV3ZXJDb250YWluZXIsXG4gICAgICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRydWUsXG4gICAgICAgICAgICBzaG93TmF2aWdhdG9yOiB0cnVlLFxuICAgICAgICAgICAgem9vbUluQnV0dG9uOiAnS1VJX09TRF9aT09NX0lOJyxcbiAgICAgICAgICAgIHpvb21PdXRCdXR0b246ICdLVUlfT1NEX1pPT01fT1VUJyxcbiAgICAgICAgICAgIHByZXZpb3VzQnV0dG9uOiAnS1VJX09TRF9QUkVWX1BBR0UnLFxuICAgICAgICAgICAgbmV4dEJ1dHRvbjogJ0tVSV9PU0RfTkVYVF9QQUdFJyxcbiAgICAgICAgICAgIGhvbWVCdXR0b246ICdLVUlfT1NEX0hPTUUnLFxuICAgICAgICAgICAgZnVsbFBhZ2VCdXR0b246ICdLVUlfT1NEX0ZVTExfUEFHRScsXG4gICAgICAgICAgICByb3RhdGVMZWZ0QnV0dG9uOiAnS1VJX09TRF9ST1RBVEVfTEVGVCcsICAgICAgICAvLyBkb2Vzbid0IHdvcmsgeWV0XG4gICAgICAgICAgICByb3RhdGVSaWdodEJ1dHRvbjogJ0tVSV9PU0RfUk9UQVRFX1JJR0hUJyAgICAgICAvLyBkb2Vzbid0IHdvcmsgeWV0XG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgT3BlblNlYWRyYWdvbi5WaWV3ZXIob3NkT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ2Z1bGwtc2NyZWVuJywgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChhcmdzLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZnVsbHNjcmVlbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbHNjcmVlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcigncmVzaXplJywgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIGFyZ3MuZXZlbnRTb3VyY2Uuc3ZnT3ZlcmxheSgpLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYWxsIGltYWdlcyBpbiB0aGlzLmltYWdlcyB0byB0aGUgdmlld2VyLlxuICAgICAqIEltYWdlcyBhcmUgcG9zaXRpb25lZCBpbiBhIGhvcml6b250YWwgcm93IG5leHQgdG8gZWFjaCBvdGhlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9wZW5JbWFnZXMoKTogdm9pZCB7XG4gICAgICAgIC8vIGltYWdlWE9mZnNldCBjb250cm9scyB0aGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHNpZGUgb2YgZWFjaCBpbWFnZSBpbiB0aGUgT3BlblNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbS5cbiAgICAgICAgLy8gVGhlIGZpcnN0IGltYWdlIGhhcyBpdHMgbGVmdCBzaWRlIGF0IHggPSAwLCBhbmQgYWxsIGltYWdlcyBhcmUgc2NhbGVkIHRvIGhhdmUgYSB3aWR0aCBvZiAxIGluIHZpZXdwb3J0IGNvb3JkaW5hdGVzLlxuICAgICAgICAvLyBzZWUgYWxzbzogaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9leGFtcGxlcy92aWV3cG9ydC1jb29yZGluYXRlcy9cblxuICAgICAgICBjb25zdCBmaWxlVmFsdWVzOiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZVtdID0gdGhpcy5pbWFnZXMubWFwKFxuICAgICAgICAgICAgKGltZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWcuc3RpbGxJbWFnZUZpbGVWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgb25seSB0aGUgZGVmaW5lZCByYW5nZSBvZiB0aGlzLmltYWdlc1xuICAgICAgICBjb25zdCB0aWxlU291cmNlczogT2JqZWN0W10gPSBTdGlsbEltYWdlQ29tcG9uZW50LnByZXBhcmVUaWxlU291cmNlc0Zyb21GaWxlVmFsdWVzKGZpbGVWYWx1ZXMuc2xpY2UodGhpcy5pbWFnZVJhbmdlU3RhcnQsIHRoaXMuaW1hZ2VSYW5nZUVuZCArIDEpKTtcblxuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG4gICAgICAgIHRoaXMudmlld2VyLm9wZW4odGlsZVNvdXJjZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyIGZvciBldmVyeSByZWdpb24gb2YgZXZlcnkgaW1hZ2UgaW4gdGhpcy5pbWFnZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld2VyLmNsZWFyT3ZlcmxheXMoKTtcblxuICAgICAgICBsZXQgaW1hZ2VYT2Zmc2V0ID0gMDsgLy8gc2VlIGRvY3VtZW50YXRpb24gaW4gdGhpcy5vcGVuSW1hZ2VzKCkgZm9yIHRoZSB1c2FnZSBvZiBpbWFnZVhPZmZzZXRcblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuaW1hZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IChpbWFnZS5zdGlsbEltYWdlRmlsZVZhbHVlLmRpbVkgLyBpbWFnZS5zdGlsbEltYWdlRmlsZVZhbHVlLmRpbVgpO1xuXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGxldCBnZW9tZXRyaWVzOiBHZW9tZXRyeUZvclJlZ2lvbltdID0gW107XG4gICAgICAgICAgICBpbWFnZS5yZWdpb25zLm1hcCgocmVnKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbXMgPSByZWcuZ2V0R2VvbWV0cmllcygpO1xuXG4gICAgICAgICAgICAgICAgZ2VvbXMubWFwKChnZW9tKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tRm9yUmVnID0gbmV3IEdlb21ldHJ5Rm9yUmVnaW9uKGdlb20uZ2VvbWV0cnksIHJlZy5yZWdpb25SZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGdlb21Gb3JSZWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgYWxsIGdlb21ldHJpZXMgYmVsb25naW5nIHRvIHRoaXMgcGFnZVxuICAgICAgICAgICAgZ2VvbWV0cmllcy5zb3J0KChnZW9tMSwgZ2VvbTIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChnZW9tMS5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJyAmJiBnZW9tMi5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYxID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMS5nZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYyID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMi5nZW9tZXRyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcmVnMSBpcyBzbWFsbGVyIHRoYW4gcmVnMiwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnMSB0aGVuIGNvbWVzIGFmdGVyIHJlZzIgYW5kIHRodXMgaXMgcmVuZGVyZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cmYxIDwgc3VyZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgZ2VvbWV0cmllcyBmb3IgdGhpcyBwYWdlXG4gICAgICAgICAgICBmb3IgKGxldCBnZW9tIG9mIGdlb21ldHJpZXMpIHtcblxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IGdlb20uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTVkdPdmVybGF5KGdlb20ucmVnaW9uLmlkLCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIGltYWdlWE9mZnNldCwgZ2VvbS5yZWdpb24ubGFiZWwpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltYWdlWE9mZnNldCsrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCBhZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlclxuICAgICAqIEBwYXJhbSByZWdpb25JcmkgdGhlIElyaSBvZiB0aGUgcmVnaW9uLlxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBST0lcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSAgdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgZ2VvbWV0cnkgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgZ2VvbWV0cnkgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB0b29sVGlwIC0gIHRoZSB0b29sdGlwIHdoaWNoIHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gbW91c2Vob3ZlciBvZiB0aGUgc3ZnIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR092ZXJsYXkocmVnaW9uSXJpOiBzdHJpbmcsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyLCB0b29sVGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGluZUNvbG9yID0gZ2VvbWV0cnkubGluZUNvbG9yO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBnZW9tZXRyeS5saW5lV2lkdGg7XG5cbiAgICAgICAgbGV0IHN2Z0VsZW1lbnQ7XG4gICAgICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwb2x5Z29uJyk7ICAvLyB5ZXMsIHdlIHJlbmRlciByZWN0YW5nbGVzIGFzIHN2ZyBwb2x5Z29uIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwb2x5Z29uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzUG9seWdvbihzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgICAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBTdGlsbEltYWdlT1NEVmlld2VyQ29tcG9uZW50LmNyZWF0ZVNWR092ZXJsYXk6IHVua25vd24gZ2VvbWV0cnlUeXBlOiAnICsgZ2VvbWV0cnkudHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN2Z0VsZW1lbnQuaWQgPSAncm9pLXN2Z292ZXJsYXktJyArIE1hdGgucmFuZG9tKCkgKiAxMDAwMDtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvaS1zdmdvdmVybGF5Jyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdzdHJva2U6ICcgKyBsaW5lQ29sb3IgKyAnOyBzdHJva2Utd2lkdGg6ICcgKyBsaW5lV2lkdGggKyAncHg7Jyk7XG5cbiAgICAgICAgLy8gZXZlbnQgd2hlbiBhIHJlZ2lvbiBpcyBob3ZlcmVkIChvdXRwdXQpXG4gICAgICAgIHN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uSG92ZXJlZC5lbWl0KHJlZ2lvbklyaSk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3Qgc3ZnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3RpdGxlJyk7XG4gICAgICAgIHN2Z1RpdGxlLnRleHRDb250ZW50ID0gdG9vbFRpcDtcblxuICAgICAgICBjb25zdCBzdmdHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdUaXRsZSk7XG4gICAgICAgIHN2Z0dyb3VwLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLnZpZXdlci5zdmdPdmVybGF5KCk7XG4gICAgICAgIG92ZXJsYXkubm9kZSgpLmFwcGVuZENoaWxkKHN2Z0dyb3VwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdyZWN0YW5nbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicgKHNpYykpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvaW50QSA9IGdlb21ldHJ5LnBvaW50c1swXTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gZ2VvbWV0cnkucG9pbnRzWzFdO1xuXG4gICAgICAgIC8vIGdlb21ldHJ5LnBvaW50cyBjb250YWlucyB0d28gZGlhZ29uYWxseSBvcHBvc2VkIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZSwgYnV0IHRoZSBvcmRlciBvZiB0aGUgY29ybmVycyBpcyBhcmJpdHJhcnkuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBjb25zdHJ1Y3QgdGhlIHVwcGVybGVmdCAoVUwpLCBsb3dlcnJpZ2h0IChMUiksIHVwcGVycmlnaHQgKFVSKSBhbmQgbG93ZXJsZWZ0IChMTCkgcG9zaXRpb25zIG9mIHRoZSBjb3JuZXJzIHdpdGggbWluIGFuZCBtYXggb3BlcmF0aW9ucy5cbiAgICAgICAgY29uc3QgcG9zaXRpb25VTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVVIgPSBuZXcgUG9pbnQyRChNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtwb3NpdGlvblVMLCBwb3NpdGlvblVSLCBwb3NpdGlvbkxSLCBwb3NpdGlvbkxMXTtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ3BvbHlnb24nIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ2NpcmNsZScgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdjaXJjbGUnKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBjaXJjbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKGdlb21ldHJ5LnBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBjeCA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueCk7XG4gICAgICAgIGNvbnN0IGN5ID0gU3RyaW5nKHZpZXdDb29yZFBvaW50c1swXS55KTtcbiAgICAgICAgLy8gZ2VvbWV0cnkucmFkaXVzIGNvbnRhaW5zIG5vdCB0aGUgcmFkaXVzIGl0c2VsZiwgYnV0IHRoZSBjb29yZGluYXRlcyBvZiBhIChhcmJpdHJhcnkpIHBvaW50IG9uIHRoZSBjaXJjbGUuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBoYXZlIHRvIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IgZ2VvbWV0cnkucmFkaXVzIHRvIGdldCB0aGUgYWN0dWFsIHJhZGl1cy4gLT4gc3FydCh4XjIgKyB5XjIpXG4gICAgICAgIC8vIFNpbmNlIGdlb21ldHJ5LnJhZGl1cyBoYXMgaXRzIHkgY29vcmRpbmF0ZSBzY2FsZWQgdG8gdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbXVsdGlwbHkgaXQgd2l0aCB0aGUgYXNwZWN0UmF0aW8gdG8gZ2V0IHRvIHRoZSBzY2FsZSB1c2VkIGJ5IE9wZW5zZWFkcmFnb24sIGFuYWxvZ3VvdXMgdG8gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcygpXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IFN0cmluZyhNYXRoLnNxcnQoZ2VvbWV0cnkucmFkaXVzLnggKiBnZW9tZXRyeS5yYWRpdXMueCArIGFzcGVjdFJhdGlvICogYXNwZWN0UmF0aW8gKiBnZW9tZXRyeS5yYWRpdXMueSAqIGdlb21ldHJ5LnJhZGl1cy55KSk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncicsIHJhZGl1cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIGFuIGltYWdlIHRvIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICogc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG4gICAgICogQHBhcmFtIHBvaW50cyAtIGFuIGFycmF5IG9mIHBvaW50cyBpbiBjb29yZGluYXRlIHN5c3RlbSByZWxhdGl2ZSB0byBhbiBpbWFnZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcmV0dXJucyAtIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHM6IFBvaW50MkRbXSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogUG9pbnQyRFtdIHtcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50MkQocG9pbnQueCArIHhPZmZzZXQsIHBvaW50LnkgKiBhc3BlY3RSYXRpbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgJ3BvaW50cycgYXR0cmlidXRlIG9mIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgdG8gYmUgc2VyaWFsaXplZCB0byBhIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIC0gdGhlIHBvaW50cyBzZXJpYWxpemVkIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUocG9pbnRzOiBQb2ludDJEW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChwb2ludHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcsJztcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzU3RyaW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10ZXh0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgdGV4dCB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRCb29sZWFuVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ib29sZWFuLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cInZhbHVlT2JqZWN0LmJvb2xcIiBkaXNhYmxlZD1cInRydWVcIj48L21hdC1jaGVja2JveD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhblZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRCb29sZWFuVmFsdWUpIHtcbiAgICAgIHRoaXMuX2Jvb2xlYW5WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jvb2xlYW5WYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2Jvb2xlYW5WYWx1ZU9iajogUmVhZEJvb2xlYW5WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkQ29sb3JWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktY29sb3ItdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4gW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwidmFsdWVPYmplY3QuY29sb3JIZXhcIj57e3ZhbHVlT2JqZWN0LmNvbG9ySGV4fX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgLmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjM2cHg7b3ZlcmZsb3cteDp2aXNpYmxlfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yVmFsdWVDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRDb2xvclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbG9yVmFsdWVPYmo6IFJlYWRDb2xvclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VTYWxzYWgsIERhdGVTYWxzYWgsIFByZWNpc2lvbiwgUmVhZERhdGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWRhdGUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuICpuZ0lmPVwicGVyaW9kOyBlbHNlIHByZWNpc2VEYXRlXCI+XG4gICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0fX1cbiAgICA8c3BhbiAqbmdJZj1cImVyYVwiPlxuICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgPC9zcGFuPlxuICAgIC0ge3tkYXRlc1sxXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMV0uZm9ybWF0fX1cbiAgICA8c3BhbiAqbmdJZj1cImVyYVwiPlxuICAgICAgICB7e2RhdGVzWzFdLmVyYX19XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAoe3tkYXRlc1swXS5jYWxlbmRhcn19KVxuICAgIDwvc3Bhbj5cbjwvc3Bhbj5cblxuPG5nLXRlbXBsYXRlICNwcmVjaXNlRGF0ZT5cblxuICAgIDxzcGFuPlxuICAgICAgICB7e2RhdGVzWzBdLmRhdGUgfCBkYXRlOiBkYXRlc1swXS5mb3JtYXQgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAgICAgIHt7ZGF0ZXNbMF0uZXJhfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgICAoe3tkYXRlc1swXS5jYWxlbmRhcn19KVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG48L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjYWxlbmRhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbGVuZGFyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVyYSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VyYSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGVyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkRGF0ZVZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZVZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICBjb25zdCBkYXRlT3JSYW5nZTogRGF0ZVNhbHNhaCB8IERhdGVSYW5nZVNhbHNhaCA9IHRoaXMudmFsdWVPYmplY3QuZ2V0RGF0ZVNhbHNhaCgpO1xuICAgIGlmIChkYXRlT3JSYW5nZSBpbnN0YW5jZW9mIERhdGVSYW5nZVNhbHNhaCkge1xuICAgICAgLy8gcGVyaW9kIChzdGFydCBhbmQgZW5kIGRhdGVzKVxuICAgICAgdGhpcy5wZXJpb2QgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRlcyA9IFt0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5zdGFydCksIHRoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlLmVuZCldO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW5nbGUgZGF0ZVxuICAgICAgdGhpcy5wZXJpb2QgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2UpXTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVZhbHVlT2JqO1xuICB9XG5cbiAgZGF0ZXM6IERhdGVGb3JtYXR0ZXJbXTtcbiAgcGVyaW9kOiBib29sZWFuO1xuICBwcml2YXRlIF9jYWxlbmRhcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJhOiBib29sZWFuO1xuICBwcml2YXRlIF9kYXRlVmFsdWVPYmo6IFJlYWREYXRlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBgRGF0ZVNhbHNhaGAgdG8gYSBKUyBEYXRlLCBwcm92aWRpbmcgbmVjZXNzYXJ5IGZvcm1hdHRpbmcgaW5mb3JtYXRpb24uXG4gICAqIEpVTElBTiBhbmQgR1JFR09SSUFOIGNhbGVuZGFyIGFyZSB0aGUgb25seSBhdmFpbGFibGUgZm9yIHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIGJlIGNvbnZlcnRlZC5cbiAgICogQHJldHVybiBEYXRlRm9ybWF0dGVyLlxuICAgKi9cbiAgZ2V0SlNEYXRlKGRhdGU6IERhdGVTYWxzYWgpOiBEYXRlRm9ybWF0dGVyIHtcblxuICAgIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLnllYXJQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIudG9TdHJpbmcoKSksXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5tb250aFByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAnTU1NTSAnICsgJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCAxKSwgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5kYXlQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ2xvbmdEYXRlJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpLCAgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogaW5jb3JyZWN0IHByZWNpc2lvbiBmb3IgZGF0ZScpO1xuICAgIH1cblxuICB9XG5cbn1cblxuLyoqXG4gKiBEYXRlIHN0cnVjdHVyZSBmb3IgdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUZvcm1hdHRlciB7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xuICBlcmE6IHN0cmluZztcbiAgY2FsZW5kYXI6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWREZWNpbWFsVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZWNpbWFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmRlY2ltYWx9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIERlY2ltYWxWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkRGVjaW1hbFZhbHVlKSB7XG4gICAgdGhpcy5fZGVjaW1hbFZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2RlY2ltYWxWYWx1ZU9iajogUmVhZERlY2ltYWxWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZXh0ZXJuYWwtcmVzLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgZXh0ZXJuYWwtcmVzLXZhbHVlIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRHZW9tVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1nZW9tZXRyeS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5nZW9tZXRyeVN0cmluZ319PC9zcGFuPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkR2VvbVZhbHVlKSB7XG4gICAgdGhpcy5fZ2VvbVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb21WYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2dlb21WYWx1ZU9iajogUmVhZEdlb21WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbmFtZS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGdlb25hbWUtdmFsdWUgd29ya3MhXG48L3A+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9uYW1lVmFsdWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEludGVnZXJWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktaW50ZWdlci12YWx1ZScsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVnZXJ9fTwvc3Bhbj5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZWdlclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkSW50ZWdlclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ludGVnZXJWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVnZXJWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbnRlZ2VyVmFsdWVPYmo6IFJlYWRJbnRlZ2VyVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRJbnRlcnZhbFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktaW50ZXJ2YWwtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuaW50ZXJ2YWxTdGFydH19IC0ge3t2YWx1ZU9iamVjdC5pbnRlcnZhbEVuZH19PC9zcGFuPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkSW50ZXJ2YWxWYWx1ZSkge1xuICAgIHRoaXMuX2ludGVydmFsVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2ludGVydmFsVmFsdWVPYmo6IFJlYWRJbnRlcnZhbFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRMaW5rVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWxpbmstdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJzYWxzYWgtbGlua1wiIChjbGljayk9XCJyZWZSZXNDbGlja2VkKClcIj57e3JlZmVycmVkUmVzb3VyY2V9fTwvYT5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlua1ZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9udG9sb2d5SW5mbyh2YWx1ZTogT250b2xvZ3lJbmZvcm1hdGlvbikge1xuICAgICAgICB0aGlzLl9vbnRvSW5mbyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBvbnRvbG9neUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbnRvSW5mbztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZExpbmtWYWx1ZSkge1xuICAgICAgICB0aGlzLl9saW5rVmFsdWVPYmogPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZU9iamVjdC5yZWZlcnJlZFJlc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZSA9IHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZS5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZSA9IHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZUlyaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmtWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFJlYWRMaW5rVmFsdWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJpdmF0ZSBfbGlua1ZhbHVlT2JqOiBSZWFkTGlua1ZhbHVlO1xuICAgIHByaXZhdGUgX29udG9JbmZvOiBPbnRvbG9neUluZm9ybWF0aW9uO1xuICAgIHJlZmVycmVkUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICByZWZSZXNDbGlja2VkKCkge1xuICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2VDbGlja2VkLmVtaXQodGhpcy5fbGlua1ZhbHVlT2JqKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkTGlzdFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktbGlzdC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5saXN0Tm9kZUxhYmVsfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0VmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZExpc3RWYWx1ZSkge1xuICAgIHRoaXMuX2xpc3RWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0VmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9saXN0VmFsdWVPYmo6IFJlYWRMaXN0VmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT250b2xvZ3lJbmZvcm1hdGlvbiwgUmVhZFRleHRWYWx1ZUFzSHRtbCwgS25vcmFDb25zdGFudHMgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtaHRtbCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2Pnt7dmFsdWVPYmplY3QuaHRtbH19PC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50IHtcblxuICAgIEBPdXRwdXQoKVxuICAgIHJlZmVycmVkUmVzb3VyY2VDbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9udG9sb2d5SW5mbyh2YWx1ZTogT250b2xvZ3lJbmZvcm1hdGlvbikge1xuICAgICAgICB0aGlzLl9vbnRvSW5mbyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBvbnRvbG9neUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbnRvSW5mbztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBiaW5kRXZlbnRzKHZhbHVlOiBCb29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgYmluZEV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRFdmVudHM7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRUZXh0VmFsdWVBc0h0bWwpIHtcbiAgICAgICAgdGhpcy5faHRtbFZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlT2JqZWN0Lmh0bWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odG1sVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgaHRtbDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2h0bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzSHRtbDtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICBwcml2YXRlIF9iaW5kRXZlbnRzOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIHJlZlJlc0NsaWNrZWQocmVmUmVzb3VyY2VJcmk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2VDbGlja2VkLmVtaXQocmVmUmVzb3VyY2VJcmkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgY2xpY2sgZXZlbnQgdG8gc3RhbmRvZmYgbGlua3MgdGhhdCBzaG93cyB0aGUgcmVmZXJyZWQgcmVzb3VyY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0RWxlbWVudFxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXG4gICAgb25DbGljayh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9iaW5kRXZlbnRzICYmIHRhcmdldEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnXG4gICAgICAgICAgICAmJiB0YXJnZXRFbGVtZW50LmNsYXNzTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoS25vcmFDb25zdGFudHMuU2Fsc2FoTGluaykgPj0gMFxuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmUmVzQ2xpY2tlZCh0YXJnZXRFbGVtZW50LmhyZWYpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiB0YXJnZXRFbGVtZW50LmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gb3BlbiBsaW5rIGluIGEgbmV3IHdpbmRvd1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odGFyZ2V0RWxlbWVudC5ocmVmLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRUZXh0VmFsdWVBc1N0cmluZyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktdGV4dC12YWx1ZS1hcy1zdHJpbmcnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5zdHJ9fTwvc3Bhbj5cbmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGV4dFN0cmluZ1ZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dFN0cmluZ1ZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RleHRTdHJpbmdWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNYbWwgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMteG1sJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QueG1sfX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRUZXh0VmFsdWVBc1htbCkge1xuICAgICAgICB0aGlzLl94bWxWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3htbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3htbFZhbHVlT2JqOiBSZWFkVGV4dFZhbHVlQXNYbWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRUZXh0RmlsZVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGV4dGZpbGUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJ7e3ZhbHVlT2JqZWN0LnRleHRGaWxlVVJMfX1cIj57e3ZhbHVlT2JqZWN0LnRleHRGaWxlbmFtZX19PC9hPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRUZXh0RmlsZVZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dGZpbGVWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0ZmlsZVZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGV4dGZpbGVWYWx1ZU9iajogUmVhZFRleHRGaWxlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFVyaVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdXJpLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSBocmVmPVwie3t2YWx1ZU9iamVjdC51cml9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7dmFsdWVPYmplY3QudXJpfX08L2E+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBVcmlWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVXJpVmFsdWUpIHtcbiAgICB0aGlzLl9fdXJpVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3VyaVZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3VyaVZhbHVlT2JqOiBSZWFkVXJpVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWNvbXBhcmUtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbXBhcmUtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdyYXBoLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBncmFwaC12aWV3IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBHcmFwaFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdyaWQtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGdyaWQtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWxpc3QtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGxpc3QtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXByb3BlcnRpZXMtdmlldycsXG4gICAgdGVtcGxhdGU6IGA8cD5cbiAgICBwcm9wZXJ0aWVzLXZpZXcgd29ya3MhXG48L3A+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIFByb3BlcnRpZXNWaWV3Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgICBBcGlTZXJ2aWNlRXJyb3IsXG4gICAgQXBpU2VydmljZVJlc3VsdCxcbiAgICBDb252ZXJ0SlNPTkxELFxuICAgIEluY29taW5nU2VydmljZSxcbiAgICBLbm9yYUNvbnN0YW50cyxcbiAgICBPbnRvbG9neUNhY2hlU2VydmljZSxcbiAgICBPbnRvbG9neUluZm9ybWF0aW9uLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkUmVzb3VyY2VzU2VxdWVuY2UsXG4gICAgUmVzb3VyY2VTZXJ2aWNlXG59IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuZGVjbGFyZSBsZXQgcmVxdWlyZTogYW55O1xuY29uc3QganNvbmxkID0gcmVxdWlyZSgnanNvbmxkJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXJlc291cmNlLXZpZXcnLFxuICAgIHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxuXG4gICAgPCEtLSBUT0RPOiBzd2l0Y2ggdGhyb3VnaCB0aGUgbWVkaWEgdHlwZSAtLT5cbiAgICA8a3VpLXN0aWxsLWltYWdlPjwva3VpLXN0aWxsLWltYWdlPlxuICAgIDxrdWktbW92aW5nLWltYWdlPjwva3VpLW1vdmluZy1pbWFnZT5cbiAgICA8a3VpLWFubm90YXRpb24+PC9rdWktYW5ub3RhdGlvbj5cbiAgICA8a3VpLWF1ZGlvPjwva3VpLWF1ZGlvPlxuICAgIDxrdWktY29sbGVjdGlvbj48L2t1aS1jb2xsZWN0aW9uPlxuICAgIDxrdWktZGRkPjwva3VpLWRkZD5cbiAgICA8a3VpLWRvY3VtZW50Pjwva3VpLWRvY3VtZW50PlxuICAgIDxrdWktbGluay1vYmo+PC9rdWktbGluay1vYmo+XG4gICAgPGt1aS1vYmplY3Q+PC9rdWktb2JqZWN0PlxuICAgIDxrdWktcmVnaW9uPjwva3VpLXJlZ2lvbj5cbiAgICA8a3VpLXRleHQ+PC9rdWktdGV4dD5cblxuICAgIDxoMj5tZXRhZGF0YSBmb3IgcmVzb3VyY2Uge3sgcmVzb3VyY2U/LmxhYmVsfX0gKHt7IHJlc291cmNlPy5pZCB9fSk8L2gyPlxuICAgIDxoMz50eXBlOiB7e29udG9sb2d5SW5mbz8uZ2V0TGFiZWxGb3JSZXNvdXJjZUNsYXNzKHJlc291cmNlPy50eXBlKX19PC9oMz5cblxuICAgIDxkaXYgKm5nRm9yPVwibGV0IHByb3Agb2YgcmVzb3VyY2U/LnByb3BlcnRpZXMgfCBrdWlLZXlcIj5cbiAgICAgICAgPG1hdC1saXN0PlxuICAgICAgICAgICAgPHNwYW4+e3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUHJvcGVydHkocHJvcC5rZXkpfX08L3NwYW4+XG4gICAgICAgICAgICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgdmFsIG9mIHByb3AudmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBbbmdTd2l0Y2hdPVwidmFsLmdldENsYXNzTmFtZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktY29sb3ItdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRDb2xvclZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWNvbG9yLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMtaHRtbCAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzSHRtbFwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiIFtiaW5kRXZlbnRzXT1cInRydWVcIj48L2t1aS10ZXh0LXZhbHVlLWFzLWh0bWw+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy1zdHJpbmcgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc1N0cmluZ1wiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0LXZhbHVlLWFzLXN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLXhtbCAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzWG1sXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHQtdmFsdWUtYXMteG1sPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWRhdGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREYXRlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZGF0ZS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1saW5rLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkTGlua1ZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiIFtvbnRvbG9neUluZm9dPVwib250b2xvZ3lJbmZvXCI+PC9rdWktbGluay12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1pbnRlZ2VyLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkSW50ZWdlclZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWludGVnZXItdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZGVjaW1hbC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZERlY2ltYWxWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1kZWNpbWFsLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWdlb21ldHJ5LXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkR2VvbVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWdlb21ldHJ5LXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXVyaS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFVyaVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXVyaS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1ib29sZWFuLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQm9vbGVhblZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWJvb2xlYW4tdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktaW50ZXJ2YWwtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRJbnRlcnZhbFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWludGVydmFsLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWxpc3QtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRMaXN0VmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktbGlzdC12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0ZmlsZS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuVGV4dEZpbGVWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS10ZXh0ZmlsZS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoRGVmYXVsdD1cIlwiPk5vdCBzdXBwb3J0ZWQge3t2YWwuZ2V0Q2xhc3NOYW1lKCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIDwvbWF0LWxpc3Q+XG4gICAgPC9kaXY+XG5cbjwvbWF0LWNhcmQ+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIFJlc291cmNlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpcmk/OiBzdHJpbmcgPSAnaHR0cDovL3JkZmguY2gvOGJlMWI3Y2Y3MTAzJztcblxuICAgIG9udG9sb2d5SW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjsgLy8gb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2Ugd2l0aCBJcmkgYGlyaWBcbiAgICByZXNvdXJjZTogUmVhZFJlc291cmNlOyAvLyB0aGUgcmVzb3VyY2UgdG8gYmUgZGlzcGxheWVkXG4gICAgZXJyb3JNZXNzYWdlOiBhbnk7XG5cbiAgICBLbm9yYUNvbnN0YW50cyA9IEtub3JhQ29uc3RhbnRzO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Jlc291cmNlU2VydmljZTogUmVzb3VyY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NhY2hlU2VydmljZTogT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5jb21pbmdTZXJ2aWNlOiBJbmNvbWluZ1NlcnZpY2UpIHtcblxuICAgICAgICBjb25zdCByb3V0ZVBhcmFtcyA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtcztcbiAgICAgICAgdGhpcy5pcmkgPSByb3V0ZVBhcmFtcy5pZDtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFJlc291cmNlKHRoaXMuaXJpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJlc291cmNlKGlyaTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlU2VydmljZS5nZXRSZXNvdXJjZShpcmkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXN1bHQ6IEFwaVNlcnZpY2VSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdDogJywgcmVzdWx0LmJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IGpzb25sZC5wcm9taXNlcztcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcGFjdCBKU09OLUxEIHVzaW5nIGFuIGVtcHR5IGNvbnRleHQ6IGV4cGFuZHMgYWxsIElyaXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHByb21pc2VzLmNvbXBhY3QocmVzdWx0LmJvZHksIHt9KTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKGNvbXBhY3RlZCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZVNlcTogUmVhZFJlc291cmNlc1NlcXVlbmNlID0gQ29udmVydEpTT05MRC5jcmVhdGVSZWFkUmVzb3VyY2VzU2VxdWVuY2VGcm9tSnNvbkxEKGNvbXBhY3RlZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGV4YWN0bHkgb25lIHJlc291cmNlIGlzIHJldHVybmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHJlc291cmNlIGNsYXNzIElyaXMgZnJvbSByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlQ2xhc3NJcmlzOiBzdHJpbmdbXSA9IENvbnZlcnRKU09OTEQuZ2V0UmVzb3VyY2VDbGFzc2VzRnJvbUpzb25MRChjb21wYWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBvbnRvbG9neSBpbmZvcm1hdGlvbiBhYm91dCByZXNvdXJjZSBjbGFzcyBJcmlzIChwcm9wZXJ0aWVzIGFyZSBpbXBsaWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5nZXRSZXNvdXJjZUNsYXNzRGVmaW5pdGlvbnMocmVzb3VyY2VDbGFzc0lyaXMpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc291cmNlQ2xhc3NJbmZvczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIG9udG9sb2d5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9udG9sb2d5SW5mbyA9IHJlc291cmNlQ2xhc3NJbmZvczsgLy8gY29uc29sZS5sb2coJ2luaXRpYWxpemF0aW9uIG9mIG9udG9sb2d5SW5mbzogJywgdGhpcy5vbnRvbG9neUluZm8pOyA+IG9iamVjdCByZWNlaXZlZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVwYXJlIGEgcG9zc2libHkgYXR0YWNoZWQgaW1hZ2UgZmlsZSB0byBiZSBkaXNwbGF5ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29sbGVjdEltYWdlc0FuZFJlZ2lvbnNGb3JSZXNvdXJjZShyZXNvdXJjZVNlcS5yZXNvdXJjZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc291cmNlOiAnLCB0aGlzLnJlc291cmNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZXF1ZXN0SW5jb21pbmdSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FjaGUgcmVxdWVzdCBmYWlsZWQ6ICcgKyBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhhY3RseSBvbmUgcmVzb3VyY2Ugd2FzIGV4cGVjdGVkLCBidXQgcmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aCAhPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBgRXhhY3RseSBvbmUgcmVzb3VyY2Ugd2FzIGV4cGVjdGVkLCBidXQgJHtyZXNvdXJjZVNlcS5yZXNvdXJjZXMubGVuZ3RofSByZXNvdXJjZShzKSBnaXZlbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdKU09OTEQgb2YgZnVsbCByZXNvdXJjZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBleHBhbmRlZDonICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3I6IEFwaVNlcnZpY2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRhYmxlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICB0YWJsZS12aWV3IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBLdWlBY3Rpb25Nb2R1bGUgfSBmcm9tICdAa25vcmEvYWN0aW9uJztcbmltcG9ydCB7IEt1aUNvcmVNb2R1bGUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9kYXRlLXZhbHVlL2RhdGUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IERlY2ltYWxWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZGVjaW1hbC12YWx1ZS9kZWNpbWFsLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9leHRlcm5hbC1yZXMtdmFsdWUvZXh0ZXJuYWwtcmVzLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbmFtZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9uYW1lLXZhbHVlL2dlb25hbWUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVnZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvaW50ZWdlci12YWx1ZS9pbnRlZ2VyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlcnZhbFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9saW5rLXZhbHVlL2xpbmstdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1odG1sL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1zdHJpbmcvdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMteG1sL3RleHQtdmFsdWUtYXMteG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXJpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFubm90YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXVkaW9Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERkZENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvZGRkL2RkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rT2JqQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW92aW5nSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL21vdmluZy1pbWFnZS9tb3ZpbmctaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2Uvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGlsbEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYXJlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9jb21wYXJlLXZpZXcvY29tcGFyZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmFwaFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9wcm9wZXJ0aWVzLXZpZXcvcHJvcGVydGllcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNvdXJjZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudCc7XG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEt1aUNvcmVNb2R1bGUsXG4gICAgICAgIEt1aUFjdGlvbk1vZHVsZSxcbiAgICAgICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgS3VpVmlld2VyTW9kdWxlIHtcbn1cbiIsIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygdmlld2VyXG4gKi9cblxuLy8gcmVzb3VyY2Ugdmlld2VyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9yZXNvdXJjZS8nO1xuXG4vLyBwcm9wZXJ0eSAoZ3VpKSBlbGVtZW50XG5leHBvcnQgKiBmcm9tICcuL2xpYi9wcm9wZXJ0eS8nO1xuXG4vLyBkaWZmZXJlbnQga2luZCBvZiB2aWV3c1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdmlldy8nO1xuXG4vLyB2aWV3ZXIgbW9kdWxlXG5leHBvcnQgKiBmcm9tICcuL2xpYi92aWV3ZXIubW9kdWxlJztcbiIsIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtCb29sZWFuVmFsdWVDb21wb25lbnQgYXMgw4nCtXV9IGZyb20gJy4vbGliL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtDb2xvclZhbHVlQ29tcG9uZW50IGFzIMOJwrVyfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtEYXRlVmFsdWVDb21wb25lbnQgYXMgw4nCtXB9IGZyb20gJy4vbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtEZWNpbWFsVmFsdWVDb21wb25lbnQgYXMgw4nCtXN9IGZyb20gJy4vbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IGFzIMOJwrViYX0gZnJvbSAnLi9saWIvcHJvcGVydHkvZXh0ZXJuYWwtcmVzLXZhbHVlL2V4dGVybmFsLXJlcy12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtHZW9tZXRyeVZhbHVlQ29tcG9uZW50IGFzIMOJwrV2fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtHZW9uYW1lVmFsdWVDb21wb25lbnQgYXMgw4nCtXd9IGZyb20gJy4vbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtJbnRlZ2VyVmFsdWVDb21wb25lbnQgYXMgw4nCtXF9IGZyb20gJy4vbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtJbnRlcnZhbFZhbHVlQ29tcG9uZW50IGFzIMOJwrV4fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtMaW5rVmFsdWVDb21wb25lbnQgYXMgw4nCtXp9IGZyb20gJy4vbGliL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtMaXN0VmFsdWVDb21wb25lbnQgYXMgw4nCtXl9IGZyb20gJy4vbGliL3Byb3BlcnR5L2xpc3QtdmFsdWUvbGlzdC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQgYXMgw4nCtWx9IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1odG1sL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCBhcyDDicK1bX0gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc1htbENvbXBvbmVudCBhcyDDicK1bn0gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXhtbC90ZXh0LXZhbHVlLWFzLXhtbC5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IGFzIMOJwrVvfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtVcmlWYWx1ZUNvbXBvbmVudCBhcyDDicK1dH0gZnJvbSAnLi9saWIvcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtBbm5vdGF0aW9uQ29tcG9uZW50IGFzIMOJwrVhfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcbmV4cG9ydCB7QXVkaW9Db21wb25lbnQgYXMgw4nCtWJ9IGZyb20gJy4vbGliL3Jlc291cmNlL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudCc7XG5leHBvcnQge0NvbGxlY3Rpb25Db21wb25lbnQgYXMgw4nCtWN9IGZyb20gJy4vbGliL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0IHtEZGRDb21wb25lbnQgYXMgw4nCtWR9IGZyb20gJy4vbGliL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50JztcbmV4cG9ydCB7RG9jdW1lbnRDb21wb25lbnQgYXMgw4nCtWV9IGZyb20gJy4vbGliL3Jlc291cmNlL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQge0xpbmtPYmpDb21wb25lbnQgYXMgw4nCtWZ9IGZyb20gJy4vbGliL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudCc7XG5leHBvcnQge01vdmluZ0ltYWdlQ29tcG9uZW50IGFzIMOJwrVnfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9tb3ZpbmctaW1hZ2UvbW92aW5nLWltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQge09iamVjdENvbXBvbmVudCBhcyDDicK1aH0gZnJvbSAnLi9saWIvcmVzb3VyY2Uvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuZXhwb3J0IHtSZWdpb25Db21wb25lbnQgYXMgw4nCtWl9IGZyb20gJy4vbGliL3Jlc291cmNlL3JlZ2lvbi9yZWdpb24uY29tcG9uZW50JztcbmV4cG9ydCB7U3RpbGxJbWFnZUNvbXBvbmVudCBhcyDDicK1an0gZnJvbSAnLi9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dENvbXBvbmVudCBhcyDDicK1a30gZnJvbSAnLi9saWIvcmVzb3VyY2UvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5leHBvcnQge0NvbXBhcmVWaWV3Q29tcG9uZW50IGFzIMOJwrViZn0gZnJvbSAnLi9saWIvdmlldy9jb21wYXJlLXZpZXcvY29tcGFyZS12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0dyYXBoVmlld0NvbXBvbmVudCBhcyDDicK1Ymd9IGZyb20gJy4vbGliL3ZpZXcvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0dyaWRWaWV3Q29tcG9uZW50IGFzIMOJwrViY30gZnJvbSAnLi9saWIvdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0xpc3RWaWV3Q29tcG9uZW50IGFzIMOJwrViYn0gZnJvbSAnLi9saWIvdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge1Byb3BlcnRpZXNWaWV3Q29tcG9uZW50IGFzIMOJwrViaH0gZnJvbSAnLi9saWIvdmlldy9wcm9wZXJ0aWVzLXZpZXcvcHJvcGVydGllcy12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge1Jlc291cmNlVmlld0NvbXBvbmVudCBhcyDDicK1YmV9IGZyb20gJy4vbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge1RhYmxlVmlld0NvbXBvbmVudCBhcyDDicK1YmR9IGZyb20gJy4vbGliL3ZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudCc7Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIktub3JhQ29uc3RhbnRzIiwiRXZlbnRFbWl0dGVyIiwidHNsaWJfMS5fX3ZhbHVlcyIsIlBvaW50MkQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJEYXRlUmFuZ2VTYWxzYWgiLCJQcmVjaXNpb24iLCJIb3N0TGlzdGVuZXIiLCJDb252ZXJ0SlNPTkxEIiwiQWN0aXZhdGVkUm91dGUiLCJSZXNvdXJjZVNlcnZpY2UiLCJPbnRvbG9neUNhY2hlU2VydmljZSIsIkluY29taW5nU2VydmljZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiS3VpQ29yZU1vZHVsZSIsIkt1aUFjdGlvbk1vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TmF0aXZlRGF0ZU1vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBWUU7U0FBaUI7UUFFakIsc0NBQVEsR0FBUjtTQUNDOztvQkFiRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxrQ0FHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7UUFRRCwwQkFBQztLQUFBOzs7UUNMQztTQUFpQjtRQUVqQixpQ0FBUSxHQUFSO1NBQ0M7O29CQWJGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFB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