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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
            this.regionHovered = new core.EventEmitter();
            this.regions = {};
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
                this.unhighlightAllRegions();
                if (this.activateRegion !== undefined) {
                    this.highlightRegion(this.activateRegion);
                }
            }
            else if (changes['activateRegion']) {
                this.unhighlightAllRegions();
                if (this.activateRegion !== undefined) {
                    this.highlightRegion(this.activateRegion);
                }
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
         * Highlights the polygon elements associated with the given region.
         *
         * @param regionIri the Iri of the region whose polygon elements should be highlighted..
         */
        StillImageComponent.prototype.highlightRegion = function (regionIri) {
            var e_2, _a;
            var activeRegion = this.regions[regionIri];
            if (activeRegion !== undefined) {
                try {
                    for (var activeRegion_1 = __values(activeRegion), activeRegion_1_1 = activeRegion_1.next(); !activeRegion_1_1.done; activeRegion_1_1 = activeRegion_1.next()) {
                        var pol = activeRegion_1_1.value;
                        pol.setAttribute('class', 'roi-svgoverlay active');
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (activeRegion_1_1 && !activeRegion_1_1.done && (_a = activeRegion_1.return))
                            _a.call(activeRegion_1);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            }
        };
        /**
         * Unhighlights the polygon elements of all regions.
         *
         */
        StillImageComponent.prototype.unhighlightAllRegions = function () {
            var e_3, _a;
            for (var reg in this.regions) {
                if (this.regions.hasOwnProperty(reg)) {
                    try {
                        for (var _b = __values(this.regions[reg]), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var pol = _c.value;
                            pol.setAttribute('class', 'roi-svgoverlay');
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                }
            }
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
            var tileSources = StillImageComponent.prepareTileSourcesFromFileValues(fileValues);
            this.viewer.clearOverlays();
            this.viewer.open(tileSources);
        };
        /**
         * Adds a ROI-overlay to the viewer for every region of every image in this.images
         */
        StillImageComponent.prototype.renderRegions = function () {
            var _this = this;
            var e_4, _a;
            this.viewer.clearOverlays();
            this.regions = {};
            var imageXOffset = 0; // see documentation in this.openImages() for the usage of imageXOffset
            var _loop_1 = function (image) {
                var e_5, _a;
                var aspectRatio = (image.stillImageFileValue.dimY / image.stillImageFileValue.dimX);
                // collect all geometries belonging to this page
                var geometries = [];
                image.regions.map(function (reg) {
                    _this.regions[reg.regionResource.id] = [];
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
                catch (e_5_1) {
                    e_5 = { error: e_5_1 };
                }
                finally {
                    try {
                        if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return))
                            _a.call(geometries_1);
                    }
                    finally {
                        if (e_5)
                            throw e_5.error;
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
            catch (e_4_1) {
                e_4 = { error: e_4_1 };
            }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return))
                        _a.call(_b);
                }
                finally {
                    if (e_4)
                        throw e_4.error;
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
            // event when a region is clicked (output)
            svgElement.addEventListener('click', function () {
                _this.regionHovered.emit(regionIri);
            }, false);
            var svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            svgTitle.textContent = toolTip;
            var svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            svgGroup.appendChild(svgTitle);
            svgGroup.appendChild(svgElement);
            var overlay = this.viewer.svgOverlay();
            overlay.node().appendChild(svgGroup);
            this.regions[regionIri].push(svgElement);
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
                        styles: [".still-image-viewer{display:inline-flex;height:400px;max-width:800px;width:100%}@media (max-height:636px){.still-image-viewer{height:300px}}.still-image-viewer .navigation{height:calc(400px + 64px + 24px);width:36px}.still-image-viewer .navigation .mat-button.full-size{height:100%!important;width:36px!important;padding:0!important;min-width:36px!important}.still-image-viewer .content{height:calc(400px + 64px + 24px);max-width:calc(800px - (2 * 36px));width:calc(100% - (2 * 36px))}.still-image-viewer .content .osd-container{color:#ccc;background-color:#000;height:400px}.still-image-viewer .content .osd-container.fullscreen{max-width:100vw}.still-image-viewer .content .footer p{color:#ccc;background-color:#000;height:24px;margin:0;padding:0 16px}/deep/ .roi-svgoverlay{opacity:.4;fill:transparent;stroke:#00695c;stroke-width:2px;vector-effect:non-scaling-stroke}.roi-svgoverlay:focus,/deep/ .roi-svgoverlay:hover{opacity:1}/deep/ .roi-svgoverlay.active{opacity:1}"]
                    },] },
        ];
        StillImageComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        StillImageComponent.propDecorators = {
            images: [{ type: core.Input }],
            imageCaption: [{ type: core.Input }],
            activateRegion: [{ type: core.Input }],
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}.mat-form-field{width:36px;overflow-x:visible}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
        GridViewComponent.ctorParameters = function () { return []; };
        return GridViewComponent;
    }());

    var ListViewComponent = /** @class */ (function () {
        function ListViewComponent() {
            this.KnoraConstants = core$1.KnoraConstants;
        }
        ListViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'kui-list-view',
                        template: "<div>\n    <kui-progress-indicator *ngIf=\"isLoading\" [color]=\"'#D88958'\"></kui-progress-indicator>\n\n    <mat-list class=\"list-view\" *ngFor=\"let res of result; let i = index; let last = last;\">\n        <mat-list-item class=\"link\">\n            <mat-icon matListIcon>image_search</mat-icon>\n            <h2 matLine class=\"lv-label\">{{ontologyInfo?.getLabelForResourceClass(res.type)}} - {{res.label}}</h2>\n\n            <div matLine *ngFor=\"let prop of res.properties | kuiKey\">\n                <div *ngFor=\"let val of prop.value | kuiKey\">\n                    <div [ngSwitch]=\"val.value.getClassName()\">\n\n                        <div matLine class=\"lv-html-text\" *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\">\n                            <kui-text-value-as-html [valueObject]=\"val.value\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"false\"></kui-text-value-as-html>\n                            <p class=\"lv-read-more\"></p>\n                        </div>\n\n                        <span matLine>\n                            <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val.value\" [calendar]=\"true\" [era]=\"true\"></kui-date-value>\n                            <span *ngSwitchDefault=\"\">{{val.value.getContent()}}</span>\n                        </span>\n                        <br>\n                        <span matLine *ngIf=\"ontologyInfo?.getLabelForProperty(prop.key) !== 'Text'\">\n                            {{ontologyInfo?.getLabelForProperty(prop.key)}}\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n        </mat-list-item>\n\n        <mat-divider *ngIf=\"!last\"></mat-divider>\n\n    </mat-list>\n</div>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
        ListViewComponent.ctorParameters = function () { return []; };
        ListViewComponent.propDecorators = {
            result: [{ type: core.Input }],
            ontologyInfo: [{ type: core.Input }],
            isLoading: [{ type: core.Input }]
        };
        return ListViewComponent;
    }());

    var PropertiesViewComponent = /** @class */ (function () {
        function PropertiesViewComponent() {
        }
        PropertiesViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'kui-properties-view',
                        template: "<p>\n    properties-view works!\n</p>",
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
                        styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}"]
                    },] },
        ];
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
        TableViewComponent.ctorParameters = function () { return []; };
        return TableViewComponent;
    }());

    var KuiView = /** @class */ (function () {
        function KuiView(_route, _searchService, _searchParamsService, _router) {
            var _this = this;
            this._route = _route;
            this._searchService = _searchService;
            this._searchParamsService = _searchParamsService;
            this._router = _router;
            /**
             *
             * Converts search results from JSON-LD to a [[ReadResourcesSequence]] and requests information about ontology entities.
             * This function is passed to `subscribe` as a pointer (instead of redundantly defining the same lambda function).
             *
             * @param {ReadResourcesSequence} searchResult the answer to a search request.
             */
            this.processSearchResults = function (searchResult) {
                // assign ontology information to a variable so it can be used in the component's template
                if (_this.ontologyInfo === undefined) {
                    // init ontology information
                    _this.ontologyInfo = searchResult.ontologyInformation;
                }
                else {
                    // update ontology information
                    _this.ontologyInfo.updateOntologyInformation(searchResult.ontologyInformation);
                }
                // append results to search results
                _this.result = _this.result.concat(searchResult.resources);
                _this.isLoading = false;
                _this.rerender = false;
            };
            /**
             * Shows total number of results returned by a count query.
             *
             * @param {ApiServiceResult} countQueryResult the response to a count query.
             */
            this.showNumberOfAllResults = function (countQueryResult) {
                _this.numberOfAllResults = countQueryResult.numberOfResults;
                if (_this.numberOfAllResults > 0) {
                    // offset is 0-based
                    // if numberOfAllResults equals the pagingLimit, the max. offset is 0
                    _this.maxOffset = Math.floor((_this.numberOfAllResults - 1) / _this.pagingLimit);
                }
                else {
                    _this.maxOffset = 0;
                }
            };
        }
        KuiView.prototype.ngOnInit = function () {
            var _this = this;
            this.navigationSubscription = this._route.paramMap.subscribe(function (params) {
                _this.searchMode = params.get('mode');
                // init offset  and result
                _this.offset = 0;
                _this.result = [];
                if (_this.searchMode === 'fulltext') {
                    _this.searchQuery = params.get('q');
                }
                else if (_this.searchMode === 'extended') {
                    _this.gravsearchGenerator = _this._searchParamsService.getSearchParams();
                    _this.generateGravsearchQuery();
                }
                _this.rerender = true;
                _this.getResult();
            });
        };
        KuiView.prototype.ngOnDestroy = function () {
            if (this.navigationSubscription !== undefined) {
                this.navigationSubscription.unsubscribe();
            }
        };
        /**
         * Generates the Gravsearch query for the current offset.
         */
        KuiView.prototype.generateGravsearchQuery = function () {
            var gravsearch = this.gravsearchGenerator.generateGravsearch(this.offset);
            if (gravsearch === false) {
                // no valid search params (application has been reloaded)
                // go to root
                this._router.navigate([''], { relativeTo: this._route });
                return;
            }
            else {
                this.searchQuery = gravsearch;
            }
        };
        /**
         * Get search result from Knora - 2 cases: simple search and extended search
         */
        KuiView.prototype.getResult = function () {
            var _this = this;
            this.isLoading = true;
            // FULLTEXT SEARCH
            if (this.searchMode === 'fulltext') {
                if (this.offset === 0) {
                    // perform count query
                    this._searchService.doFullTextSearchCountQueryCountQueryResult(this.searchQuery)
                        .subscribe(this.showNumberOfAllResults, function (error) {
                        _this.errorMessage = error;
                    });
                }
                // perform full text search
                this._searchService.doFullTextSearchReadResourceSequence(this.searchQuery, this.offset)
                    .subscribe(this.processSearchResults, // function pointer
                function (error) {
                    _this.errorMessage = error;
                });
                // EXTENDED SEARCH
            }
            else if (this.searchMode === 'extended') {
                // perform count query
                if (this.offset === 0) {
                    this._searchService.doExtendedSearchCountQueryCountQueryResult(this.searchQuery)
                        .subscribe(this.showNumberOfAllResults, function (error) {
                        _this.errorMessage = error;
                    });
                }
                this._searchService.doExtendedSearchReadResourceSequence(this.searchQuery)
                    .subscribe(this.processSearchResults, // function pointer
                function (error) {
                    _this.errorMessage = error;
                });
            }
            else {
                this.errorMessage = "search mode invalid: " + this.searchMode;
            }
        };
        /**
         * Loads the next page of results.
         * The results will be appended to the existing ones.
         *
         * @param {number} offset
         * @returns void
         */
        KuiView.prototype.loadMore = function (offset) {
            // update the page offset when the end of scroll is reached to get the next page of search results
            if (this.offset < this.maxOffset) {
                this.offset++;
            }
            else {
                return;
            }
            if (this.searchMode === 'extended') {
                this.generateGravsearchQuery();
            }
            this.getResult();
        };
        return KuiView;
    }());

    var SearchResultsComponent = /** @class */ (function (_super) {
        __extends(SearchResultsComponent, _super);
        function SearchResultsComponent(_route, _searchService, _searchParamsService, _router) {
            var _this = _super.call(this, _route, _searchService, _searchParamsService, _router) || this;
            _this._route = _route;
            _this._searchService = _searchService;
            _this._searchParamsService = _searchParamsService;
            _this._router = _router;
            _this.KnoraConstants = core$1.KnoraConstants;
            _this.offset = 0;
            _this.maxOffset = 0;
            _this.result = [];
            _this.rerender = false;
            _this.isLoading = true;
            _this.errorMessage = undefined;
            _this.pagingLimit = 25;
            return _this;
        }
        SearchResultsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'kui-search-results',
                        template: "<div *ngIf=\"!rerender\">\n    <div *ngIf=\"numberOfAllResults !== 0 && result; else noResult\">\n        <h4>Number of results: {{numberOfAllResults}}</h4>\n        <mat-tab-group>\n            <mat-tab label=\"List\">\n                <kui-list-view [result]=\"result\" [ontologyInfo]=\"ontologyInfo\" [isLoading]=\"isLoading\"></kui-list-view>\n            </mat-tab>\n            <mat-tab label=\"Grid\">\n                <kui-grid-view></kui-grid-view>\n            </mat-tab>\n            <mat-tab label=\"Table\">\n                <kui-table-view></kui-table-view>\n            </mat-tab>\n            <mat-tab label=\"Gravsearch\">\n                <kui-graph-view></kui-graph-view>\n            </mat-tab>\n        </mat-tab-group>\n\n        <div class=\"load-panel\" *ngIf=\"result.length > 0\">\n            <button mat-flat-button color=\"primary\" class=\"link center\" (click)=\"loadMore(offset)\" *ngIf=\"offset < maxOffset\">Load more\n                <mat-icon>keyboard_arrow_down</mat-icon>\n            </button>\n        </div>\n\n    </div>\n\n    <!-- In case of 0 result -->\n    <ng-template #noResult>\n        <p>\n            <strong>No result</strong>\n        </p>\n    </ng-template>\n\n</div>\n\n<!-- Error message -->\n<div *ngIf=\"errorMessage\">\n    <p>There is an error: {{errorMessage}}</p>\n</div>",
                        styles: [".load-panel{width:100%}.load-panel .center{display:block;line-height:24px;margin:12px auto}"]
                    },] },
        ];
        SearchResultsComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: core$1.SearchService },
                { type: core$1.SearchParamsService },
                { type: router.Router }
            ];
        };
        return SearchResultsComponent;
    }(KuiView));

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
                            material.MatExpansionModule,
                            material.MatFormFieldModule,
                            material.MatInputModule,
                            material.MatIconModule,
                            material.MatListModule,
                            material.MatNativeDateModule,
                            material.MatSlideToggleModule,
                            material.MatTabsModule,
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
                            PropertiesViewComponent,
                            SearchResultsComponent
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
                            PropertiesViewComponent,
                            SearchResultsComponent
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
    exports.ɵbj = KuiView;
    exports.ɵbb = ListViewComponent;
    exports.ɵbh = PropertiesViewComponent;
    exports.ɵbe = ResourceViewComponent;
    exports.ɵbi = SearchResultsComponent;
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
    exports.SearchResultsComponent = SearchResultsComponent;
    exports.KuiViewerModule = KuiViewerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vcmEtdmlld2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvYXVkaW8vYXVkaW8uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL21vdmluZy1pbWFnZS9tb3ZpbmctaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQudHMiLG51bGwsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2t1aS12aWV3LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlld2VyLm1vZHVsZS50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9wdWJsaWNfYXBpLnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2tub3JhLXZpZXdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktYW5ub3RhdGlvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGFubm90YXRpb24gd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktYXVkaW8nLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBhdWRpbyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBdWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktY29sbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbGxlY3Rpb24gd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGRkJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgZGRkIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZG9jdW1lbnQnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBkb2N1bWVudCB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktbGluay1vYmonLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBsaW5rLW9iaiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5rT2JqQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1tb3ZpbmctaW1hZ2UnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBtb3ZpbmctaW1hZ2Ugd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTW92aW5nSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLW9iamVjdCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG9iamVjdCB3b3JrcyFcbjwvcD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1yZWdpb24nLFxuICB0ZW1wbGF0ZTogYDxwPlxuICByZWdpb24gd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgUG9pbnQyRCxcbiAgICBSZWFkR2VvbVZhbHVlLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgICBSZWdpb25HZW9tZXRyeVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cblxuLy8gVGhpcyBjb21wb25lbnQgbmVlZHMgdGhlIG9wZW5zZWFkcmFnb24gbGlicmFyeSBpdHNlbGYsIGFzIHdlbGwgYXMgdGhlIG9wZW5zZWFkcmFnb24gcGx1Z2luIG9wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXlcbi8vIEJvdGggbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgdmlhIHBhY2thZ2UuanNvbiwgYW5kIGxvYWRlZCBnbG9iYWxseSB2aWEgdGhlIHNjcmlwdCB0YWcgaW4gLmFuZ3VsYXItY2xpLmpzb25cblxuLy8gT3BlblNlYWRyYWdvbiBkb2VzIG5vdCBleHBvcnQgaXRzZWxmIGFzIEVTNi9FQ01BMjAxNSBtb2R1bGUsXG4vLyBpdCBpcyBsb2FkZWQgZ2xvYmFsbHkgaW4gc2NyaXB0cyB0YWcgb2YgYW5ndWxhci1jbGkuanNvbixcbi8vIHdlIHN0aWxsIG5lZWQgdG8gZGVjbGFyZSB0aGUgbmFtZXNwYWNlIHRvIG1ha2UgVHlwZVNjcmlwdCBjb21waWxlciBoYXBweS5cbmRlY2xhcmUgbGV0IE9wZW5TZWFkcmFnb246IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaW9uLlxuICogQ29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcmVnaW9uIGFuZCBpdHMgZ2VvbWV0cmllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvblJlc291cmNlIGEgcmVzb3VyY2Ugb2YgdHlwZSBSZWdpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb25SZXNvdXJjZTogUmVhZFJlc291cmNlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdlb21ldHJ5IGluZm9ybWF0aW9uIGJlbG9uZ2luZyB0byB0aGlzIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0R2VvbWV0cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uUmVzb3VyY2UucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNHZW9tZXRyeV0gYXMgUmVhZEdlb21WYWx1ZVtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltYWdlIGluY2x1ZGluZyBpdHMgcmVnaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGlsbEltYWdlRmlsZVZhbHVlIGEgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dIHJlcHJlc2VudGluZyBhbiBpbWFnZS5cbiAgICAgKiBAcGFyYW0gcmVnaW9ucyB0aGUgcmVnaW9ucyBiZWxvbmdpbmcgdG8gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0aWxsSW1hZ2VGaWxlVmFsdWU6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLCByZWFkb25seSByZWdpb25zOiBJbWFnZVJlZ2lvbltdKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ2VvbWV0cnkgYmVsb25naW5nIHRvIGEgc3BlY2lmaWMgcmVnaW9uLlxuICovXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlGb3JSZWdpb24ge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgdGhlIGdlb21ldHJpY2FsIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSByZWdpb24gdGhlIHJlZ2lvbiB0aGUgZ2VvbWV0cnkgYmVsb25ncyB0by5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIHJlYWRvbmx5IHJlZ2lvbjogUmVhZFJlc291cmNlKSB7XG4gICAgfVxuXG59XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBgU1ZHUG9seWdvbkVsZW1lbnRgIGZvciBpbmRpdmlkdWFsIHJlZ2lvbnMuXG4gKi9cbmludGVyZmFjZSBQb2x5Z29uc0ZvclJlZ2lvbiB7XG5cbiAgICBba2V5OiBzdHJpbmddOiBTVkdQb2x5Z29uRWxlbWVudFtdO1xuXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgY3JlYXRlcyBhIE9wZW5TZWFkcmFnb24gdmlld2VyIGluc3RhbmNlLlxuICogQWNjZXB0cyBhbiBhcnJheSBvZiBSZWFkUmVzb3VyY2UgY29udGFpbmluZyAoYW1vbmcgb3RoZXIgcmVzb3VyY2VzKSBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdG8gYmUgcmVuZGVyZWQuXG4gKiBAbWVtYmVyIHJlc291cmNlcyAtIHJlc291cmNlcyBjb250YWluaW5nIChhbW9uZyBvdGhlciByZXNvdXJjZXMpIHRoZSBTdGlsbEltYWdlRmlsZVZhbHVlcyBhbmQgaW5jb21pbmcgcmVnaW9ucyB0byBiZSByZW5kZXJlZC4gKFVzZSBhcyBhbmd1bGFyIEBJbnB1dCBkYXRhIGJpbmRpbmcgcHJvcGVydHkuKVxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1zdGlsbC1pbWFnZScsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3RpbGwtaW1hZ2Utdmlld2VyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24gbGVmdFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJmdWxsLXNpemVcIiBpZD1cIktVSV9PU0RfUFJFVl9QQUdFXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBtYWluIGNvbnRlbnQgd2l0aCBuYXZpZ2F0aW9uIGFuZCBvc2Qgdmlld2VyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cbiAgICAgICAgPCEtLSBoZWFkZXIgd2l0aCBpbWFnZSB0b29scyAtLT5cbiAgICAgICAgPG1hdC10b29sYmFyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgICAgICAgICAgIDwhLS0gaG9tZSBidXR0b24gLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX0hPTUVcIj48bWF0LWljb24+aG9tZTwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLSB6b29tIGJ1dHRvbnMgLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxsLXJlbWFpbmluZy1zcGFjZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfWk9PTV9JTlwiPjxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9aT09NX09VVFwiPjxtYXQtaWNvbj5yZW1vdmU8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS0gd2luZG93IGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9GVUxMX1BBR0VcIj48bWF0LWljb24+ZnVsbHNjcmVlbjwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgICAgICAgPC9tYXQtdG9vbGJhcj5cblxuICAgICAgICA8IS0tIG9wZW5zZWFkcmFnb24gKG9zZCkgdmlld2VyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3NkLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8IS0tIC9vcGVuc2VhZHJhZ29uIChvc2QpIC0tPlxuICAgICAgICA8IS0tIGZvb3RlciBmb3IgY29weXJpZ2h0IGluZm87IGRvd25sb2FkIGJ1dHRvbiBldGMuIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1hdC1jYXB0aW9uXCIgW2lubmVySHRtbF09XCJpbWFnZUNhcHRpb25cIj48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiByaWdodFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJmdWxsLXNpemVcIiBpZD1cIktVSV9PU0RfTkVYVF9QQUdFXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYXJyb3dfcmlnaHQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG5cbjwhLS0gc2ltcGxlIGltYWdlIHZpZXdlciBlLmcuIGFzIGEgcHJldmlldyAtLT5cbjwhLS0gVE9ETzogaGFuZGxlIGltYWdlcyBhcnJheSAtLT5cbjwhLS08aW1nICpuZ0lmPVwic2ltcGxlICYmIGltYWdlcz8ubGVuZ3RoID09PSAxOyBlbHNlIG9zZFZpZXdlclwiIFtzcmNdPVwic2ltcGxlSW1hZ2VFeGFtcGxlXCI+LS0+XG5cblxuPCEtLVxuICAgIDxkaXY+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW1hZ2VzLmxlbmd0aCA+IDFcIiAoY2xpY2spPVwiZ290b0xlZnQoKVwiPiZsdDsmbHQ7PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImltYWdlcy5sZW5ndGggPiAxXCIgKGNsaWNrKT1cImdvdG9SaWdodCgpXCI+Jmd0OyZndDs8L3NwYW4+XG4gICAgPC9kaXY+XG4tLT5cblxuXG5cbmAsXG4gICAgc3R5bGVzOiBbYC5zdGlsbC1pbWFnZS12aWV3ZXJ7ZGlzcGxheTppbmxpbmUtZmxleDtoZWlnaHQ6NDAwcHg7bWF4LXdpZHRoOjgwMHB4O3dpZHRoOjEwMCV9QG1lZGlhIChtYXgtaGVpZ2h0OjYzNnB4KXsuc3RpbGwtaW1hZ2Utdmlld2Vye2hlaWdodDozMDBweH19LnN0aWxsLWltYWdlLXZpZXdlciAubmF2aWdhdGlvbntoZWlnaHQ6Y2FsYyg0MDBweCArIDY0cHggKyAyNHB4KTt3aWR0aDozNnB4fS5zdGlsbC1pbWFnZS12aWV3ZXIgLm5hdmlnYXRpb24gLm1hdC1idXR0b24uZnVsbC1zaXple2hlaWdodDoxMDAlIWltcG9ydGFudDt3aWR0aDozNnB4IWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O21pbi13aWR0aDozNnB4IWltcG9ydGFudH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50e2hlaWdodDpjYWxjKDQwMHB4ICsgNjRweCArIDI0cHgpO21heC13aWR0aDpjYWxjKDgwMHB4IC0gKDIgKiAzNnB4KSk7d2lkdGg6Y2FsYygxMDAlIC0gKDIgKiAzNnB4KSl9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAub3NkLWNvbnRhaW5lcntjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6IzAwMDtoZWlnaHQ6NDAwcHh9LnN0aWxsLWltYWdlLXZpZXdlciAuY29udGVudCAub3NkLWNvbnRhaW5lci5mdWxsc2NyZWVue21heC13aWR0aDoxMDB2d30uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5mb290ZXIgcHtjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6IzAwMDtoZWlnaHQ6MjRweDttYXJnaW46MDtwYWRkaW5nOjAgMTZweH0vZGVlcC8gLnJvaS1zdmdvdmVybGF5e29wYWNpdHk6LjQ7ZmlsbDp0cmFuc3BhcmVudDtzdHJva2U6IzAwNjk1YztzdHJva2Utd2lkdGg6MnB4O3ZlY3Rvci1lZmZlY3Q6bm9uLXNjYWxpbmctc3Ryb2tlfS5yb2ktc3Znb3ZlcmxheTpmb2N1cywvZGVlcC8gLnJvaS1zdmdvdmVybGF5OmhvdmVye29wYWNpdHk6MX0vZGVlcC8gLnJvaS1zdmdvdmVybGF5LmFjdGl2ZXtvcGFjaXR5OjF9YF1cbn0pXG5leHBvcnQgY2xhc3MgU3RpbGxJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW1hZ2VzOiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25bXTtcbiAgICBASW5wdXQoKSBpbWFnZUNhcHRpb24/OiBzdHJpbmc7XG4gICAgQElucHV0KCkgYWN0aXZhdGVSZWdpb246IHN0cmluZzsgLy8gaGlnaGxpZ2h0IGEgcmVnaW9uXG5cbiAgICBAT3V0cHV0KCkgcmVnaW9uSG92ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgcHJpdmF0ZSB2aWV3ZXI7XG4gICAgcHJpdmF0ZSByZWdpb25zOiBQb2x5Z29uc0ZvclJlZ2lvbiA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc3VyZmFjZSBvZiBhIHJlY3Rhbmd1bGFyIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBnZW9tIHRoZSByZWdpb24ncyBnZW9tZXRyeS5cbiAgICAgKiBAcmV0dXJucyB0aGUgc3VyZmFjZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBzdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tOiBSZWdpb25HZW9tZXRyeSk6IG51bWJlciB7XG5cbiAgICAgICAgaWYgKGdlb20udHlwZSAhPT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleHBlY3RlZCByZWN0YW5ndWxhciByZWdpb24sIGJ1dCAnICsgZ2VvbS50eXBlICsgJyBnaXZlbicpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueCwgZ2VvbS5wb2ludHNbMV0ueCkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KTtcbiAgICAgICAgY29uc3QgaCA9IE1hdGgubWF4KGdlb20ucG9pbnRzWzBdLnksIGdlb20ucG9pbnRzWzFdLnkpIC0gTWF0aC5taW4oZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSk7XG5cbiAgICAgICAgcmV0dXJuIHcgKiBoO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aWxlIHNvdXJjZXMgZnJvbSB0aGUgZ2l2ZW4gc2VxdWVuY2Ugb2YgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dLlxuICAgICAqXG4gICAgICogQHBhcmFtIGltYWdlc1RvRGlzcGxheSB0aGUgZ2l2ZW4gZmlsZSB2YWx1ZXMgdG8gZGUgZGlzcGxheWVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0aWxlIHNvdXJjZXMgdG8gYmUgcGFzc2VkIHRvIE9TRCB2aWV3ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJlcGFyZVRpbGVTb3VyY2VzRnJvbUZpbGVWYWx1ZXMoaW1hZ2VzVG9EaXNwbGF5OiBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZVtdKTogT2JqZWN0W10ge1xuICAgICAgICBsZXQgaW1hZ2VYT2Zmc2V0ID0gMDtcbiAgICAgICAgbGV0IGltYWdlWU9mZnNldCA9IDA7XG4gICAgICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiBpbWFnZXNUb0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpcGlCYXNlUGF0aCA9IGltYWdlLmltYWdlU2VydmVySUlJRkJhc2VVUkwgKyAnLycgKyBpbWFnZS5pbWFnZUZpbGVuYW1lO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZS5kaW1YO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuZGltWTtcblxuICAgICAgICAgICAgLy8gY29uc3RydWN0IE9wZW5TZWFkcmFnb24gdGlsZVNvdXJjZXMgYWNjb3JkaW5nIHRvIGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZG9jcy9PcGVuU2VhZHJhZ29uLlZpZXdlci5odG1sI29wZW5cbiAgICAgICAgICAgIHRpbGVTb3VyY2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0cnVjdCBJSUlGIHRpbGVTb3VyY2UgY29uZmlndXJhdGlvbiBhY2NvcmRpbmcgdG9cbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi4xLyN0ZWNobmljYWwtcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIHNlZSBhbHNvIGh0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yLjAvI2EtaW1wbGVtZW50YXRpb24tbm90ZXNcbiAgICAgICAgICAgICAgICAndGlsZVNvdXJjZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yL2NvbnRleHQuanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdAaWQnOiBzaXBpQmFzZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAncHJvZmlsZSc6IFsnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIvbGV2ZWwyLmpzb24nXSxcbiAgICAgICAgICAgICAgICAgICAgJ3Byb3RvY29sJzogJ2h0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICd0aWxlcyc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc2NhbGVGYWN0b3JzJzogWzEsIDIsIDQsIDgsIDE2LCAzMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAxMDI0XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAneCc6IGltYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAneSc6IGltYWdlWU9mZnNldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltYWdlWE9mZnNldCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRpbGVTb3VyY2VzO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ltYWdlcyddICYmIGNoYW5nZXNbJ2ltYWdlcyddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICAgICAgdGhpcy51bmhpZ2hsaWdodEFsbFJlZ2lvbnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRlUmVnaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJlZ2lvbih0aGlzLmFjdGl2YXRlUmVnaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VzWydhY3RpdmF0ZVJlZ2lvbiddKSB7XG4gICAgICAgICAgICB0aGlzLnVuaGlnaGxpZ2h0QWxsUmVnaW9ucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVSZWdpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0UmVnaW9uKHRoaXMuYWN0aXZhdGVSZWdpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGluaXRpYWxpc2F0aW9uIGlzIGRvbmUgb24gZmlyc3QgcnVuIG9mIG5nT25DaGFuZ2VzXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy52aWV3ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGFsbCBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgdG8gYmUgZm91bmQgaW4gW1t0aGlzLmltYWdlc11dLlxuICAgICAqIChBbHRob3VnaCB0aGlzLmltYWdlcyBpcyBhIEFuZ3VsYXIgSW5wdXQgcHJvcGVydHksIHRoZSBidWlsdC1pbiBjaGFuZ2UgZGV0ZWN0aW9uIG9mIEFuZ3VsYXIgZG9lcyBub3QgZGV0ZWN0IGNoYW5nZXMgaW4gY29tcGxleCBvYmplY3RzIG9yIGFycmF5cywgb25seSByZWFzc2lnbm1lbnQgb2Ygb2JqZWN0cy9hcnJheXMuXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGlmIGFkZGl0aW9uYWwgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHdlcmUgYWRkZWQgdG8gdGhpcy5pbWFnZXMgYWZ0ZXIgY3JlYXRpb24vYXNzaWdubWVudCBvZiB0aGUgdGhpcy5pbWFnZXMgYXJyYXkuKVxuICAgICAqL1xuICAgIHVwZGF0ZUltYWdlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYWxsIHJlZ2lvbnMgdG8gYmUgZm91bmQgaW4gW1t0aGlzLmltYWdlc11dLlxuICAgICAqIChBbHRob3VnaCB0aGlzLmltYWdlcyBpcyBhIEFuZ3VsYXIgSW5wdXQgcHJvcGVydHksIHRoZSBidWlsdC1pbiBjaGFuZ2UgZGV0ZWN0aW9uIG9mIEFuZ3VsYXIgZG9lcyBub3QgZGV0ZWN0IGNoYW5nZXMgaW4gY29tcGxleCBvYmplY3RzIG9yIGFycmF5cywgb25seSByZWFzc2lnbm1lbnQgb2Ygb2JqZWN0cy9hcnJheXMuXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIGlmIGFkZGl0aW9uYWwgcmVnaW9ucyB3ZXJlIGFkZGVkIHRvIHRoZSByZXNvdXJjZXMuaW1hZ2VzKVxuICAgICAqL1xuICAgIHVwZGF0ZVJlZ2lvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWdobGlnaHRzIHRoZSBwb2x5Z29uIGVsZW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gcmVnaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvbklyaSB0aGUgSXJpIG9mIHRoZSByZWdpb24gd2hvc2UgcG9seWdvbiBlbGVtZW50cyBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuLlxuICAgICAqL1xuICAgIHByaXZhdGUgaGlnaGxpZ2h0UmVnaW9uKHJlZ2lvbklyaSkge1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVJlZ2lvbjogU1ZHUG9seWdvbkVsZW1lbnRbXSA9IHRoaXMucmVnaW9uc1tyZWdpb25JcmldO1xuXG4gICAgICAgIGlmIChhY3RpdmVSZWdpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwb2wgb2YgYWN0aXZlUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgcG9sLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm9pLXN2Z292ZXJsYXkgYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmhpZ2hsaWdodHMgdGhlIHBvbHlnb24gZWxlbWVudHMgb2YgYWxsIHJlZ2lvbnMuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIHVuaGlnaGxpZ2h0QWxsUmVnaW9ucygpIHtcblxuICAgICAgICBmb3IgKGNvbnN0IHJlZyBpbiB0aGlzLnJlZ2lvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZ2lvbnMuaGFzT3duUHJvcGVydHkocmVnKSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9sIG9mIHRoaXMucmVnaW9uc1tyZWddKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvaS1zdmdvdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIE9wZW5TZWFkcmFnb24gdmlld2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cFZpZXdlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3NkLWNvbnRhaW5lcicpWzBdO1xuICAgICAgICBjb25zdCBvc2RPcHRpb25zID0ge1xuICAgICAgICAgICAgZWxlbWVudDogdmlld2VyQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICAgICAgc2hvd05hdmlnYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgIHpvb21JbkJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9JTicsXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uOiAnS1VJX09TRF9aT09NX09VVCcsXG4gICAgICAgICAgICBwcmV2aW91c0J1dHRvbjogJ0tVSV9PU0RfUFJFVl9QQUdFJyxcbiAgICAgICAgICAgIG5leHRCdXR0b246ICdLVUlfT1NEX05FWFRfUEFHRScsXG4gICAgICAgICAgICBob21lQnV0dG9uOiAnS1VJX09TRF9IT01FJyxcbiAgICAgICAgICAgIGZ1bGxQYWdlQnV0dG9uOiAnS1VJX09TRF9GVUxMX1BBR0UnLFxuICAgICAgICAgICAgcm90YXRlTGVmdEJ1dHRvbjogJ0tVSV9PU0RfUk9UQVRFX0xFRlQnLCAgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuICAgICAgICAgICAgcm90YXRlUmlnaHRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9SSUdIVCcgICAgICAgLy8gZG9lc24ndCB3b3JrIHlldFxuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IE9wZW5TZWFkcmFnb24uVmlld2VyKG9zZE9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdmdWxsLXNjcmVlbicsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5mdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICBhcmdzLmV2ZW50U291cmNlLnN2Z092ZXJsYXkoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBpbWFnZXMgaW4gdGhpcy5pbWFnZXMgdG8gdGhlIHZpZXdlci5cbiAgICAgKiBJbWFnZXMgYXJlIHBvc2l0aW9uZWQgaW4gYSBob3Jpem9udGFsIHJvdyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICAvLyBpbWFnZVhPZmZzZXQgY29udHJvbHMgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBzaWRlIG9mIGVhY2ggaW1hZ2UgaW4gdGhlIE9wZW5TZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbWFnZSBoYXMgaXRzIGxlZnQgc2lkZSBhdCB4ID0gMCwgYW5kIGFsbCBpbWFnZXMgYXJlIHNjYWxlZCB0byBoYXZlIGEgd2lkdGggb2YgMSBpbiB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgLy8gc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG5cbiAgICAgICAgY29uc3QgZmlsZVZhbHVlczogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSA9IHRoaXMuaW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nLnN0aWxsSW1hZ2VGaWxlVmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlIGRlZmluZWQgcmFuZ2Ugb2YgdGhpcy5pbWFnZXNcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXM6IE9iamVjdFtdID0gU3RpbGxJbWFnZUNvbXBvbmVudC5wcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhmaWxlVmFsdWVzKTtcblxuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG4gICAgICAgIHRoaXMudmlld2VyLm9wZW4odGlsZVNvdXJjZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBST0ktb3ZlcmxheSB0byB0aGUgdmlld2VyIGZvciBldmVyeSByZWdpb24gb2YgZXZlcnkgaW1hZ2UgaW4gdGhpcy5pbWFnZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmRlclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld2VyLmNsZWFyT3ZlcmxheXMoKTtcbiAgICAgICAgdGhpcy5yZWdpb25zID0ge307XG5cbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7IC8vIHNlZSBkb2N1bWVudGF0aW9uIGluIHRoaXMub3BlbkltYWdlcygpIGZvciB0aGUgdXNhZ2Ugb2YgaW1hZ2VYT2Zmc2V0XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAoaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1ZIC8gaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1YKTtcblxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyaWVzOiBHZW9tZXRyeUZvclJlZ2lvbltdID0gW107XG4gICAgICAgICAgICBpbWFnZS5yZWdpb25zLm1hcCgocmVnKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbnNbcmVnLnJlZ2lvblJlc291cmNlLmlkXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdlb21zID0gcmVnLmdldEdlb21ldHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGdlb21zLm1hcCgoZ2VvbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tRm9yUmVnID0gbmV3IEdlb21ldHJ5Rm9yUmVnaW9uKGdlb20uZ2VvbWV0cnksIHJlZy5yZWdpb25SZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGdlb21Gb3JSZWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNvcnQgYWxsIGdlb21ldHJpZXMgYmVsb25naW5nIHRvIHRoaXMgcGFnZVxuICAgICAgICAgICAgZ2VvbWV0cmllcy5zb3J0KChnZW9tMSwgZ2VvbTIpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChnZW9tMS5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJyAmJiBnZW9tMi5nZW9tZXRyeS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYxID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMS5nZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1cmYyID0gU3RpbGxJbWFnZUNvbXBvbmVudC5zdXJmYWNlT2ZSZWN0YW5ndWxhclJlZ2lvbihnZW9tMi5nZW9tZXRyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcmVnMSBpcyBzbWFsbGVyIHRoYW4gcmVnMiwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnMSB0aGVuIGNvbWVzIGFmdGVyIHJlZzIgYW5kIHRodXMgaXMgcmVuZGVyZWQgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1cmYxIDwgc3VyZjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgZ2VvbWV0cmllcyBmb3IgdGhpcyBwYWdlXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdlb20gb2YgZ2VvbWV0cmllcykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBnZW9tLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU1ZHT3ZlcmxheShnZW9tLnJlZ2lvbi5pZCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCBpbWFnZVhPZmZzZXQsIGdlb20ucmVnaW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXJcbiAgICAgKiBAcGFyYW0gcmVnaW9uSXJpIHRoZSBJcmkgb2YgdGhlIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgUk9JXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtICB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0gdG9vbFRpcCAtICB0aGUgdG9vbHRpcCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vdXNlaG92ZXIgb2YgdGhlIHN2ZyBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdPdmVybGF5KHJlZ2lvbklyaTogc3RyaW5nLCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlciwgdG9vbFRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGdlb21ldHJ5LmxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2VvbWV0cnkubGluZVdpZHRoO1xuXG4gICAgICAgIGxldCBzdmdFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpOyAgLy8geWVzLCB3ZSByZW5kZXIgcmVjdGFuZ2xlcyBhcyBzdmcgcG9seWdvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogU3RpbGxJbWFnZU9TRFZpZXdlckNvbXBvbmVudC5jcmVhdGVTVkdPdmVybGF5OiB1bmtub3duIGdlb21ldHJ5VHlwZTogJyArIGdlb21ldHJ5LnR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdmdFbGVtZW50LmlkID0gJ3JvaS1zdmdvdmVybGF5LScgKyBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAnICsgbGluZUNvbG9yICsgJzsgc3Ryb2tlLXdpZHRoOiAnICsgbGluZVdpZHRoICsgJ3B4OycpO1xuXG4gICAgICAgIC8vIGV2ZW50IHdoZW4gYSByZWdpb24gaXMgY2xpY2tlZCAob3V0cHV0KVxuICAgICAgICBzdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpb25Ib3ZlcmVkLmVtaXQocmVnaW9uSXJpKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgICAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IHRvb2xUaXA7XG5cbiAgICAgICAgY29uc3Qgc3ZnR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy52aWV3ZXIuc3ZnT3ZlcmxheSgpO1xuICAgICAgICBvdmVybGF5Lm5vZGUoKS5hcHBlbmRDaGlsZChzdmdHcm91cCk7XG5cbiAgICAgICAgdGhpcy5yZWdpb25zW3JlZ2lvbklyaV0ucHVzaChzdmdFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdyZWN0YW5nbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicgKHNpYykpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGNpcmNsZSBzaG91bGQgYmUgcGxhY2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTVkdBdHRyaWJ1dGVzUmVjdGFuZ2xlKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvaW50QSA9IGdlb21ldHJ5LnBvaW50c1swXTtcbiAgICAgICAgY29uc3QgcG9pbnRCID0gZ2VvbWV0cnkucG9pbnRzWzFdO1xuXG4gICAgICAgIC8vIGdlb21ldHJ5LnBvaW50cyBjb250YWlucyB0d28gZGlhZ29uYWxseSBvcHBvc2VkIGNvcm5lcnMgb2YgdGhlIHJlY3RhbmdsZSwgYnV0IHRoZSBvcmRlciBvZiB0aGUgY29ybmVycyBpcyBhcmJpdHJhcnkuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBjb25zdHJ1Y3QgdGhlIHVwcGVybGVmdCAoVUwpLCBsb3dlcnJpZ2h0IChMUiksIHVwcGVycmlnaHQgKFVSKSBhbmQgbG93ZXJsZWZ0IChMTCkgcG9zaXRpb25zIG9mIHRoZSBjb3JuZXJzIHdpdGggbWluIGFuZCBtYXggb3BlcmF0aW9ucy5cbiAgICAgICAgY29uc3QgcG9zaXRpb25VTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWluKHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5tYXgocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVVIgPSBuZXcgUG9pbnQyRChNYXRoLm1heChwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MTCA9IG5ldyBQb2ludDJEKE1hdGgubWluKHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IFtwb3NpdGlvblVMLCBwb3NpdGlvblVSLCBwb3NpdGlvbkxSLCBwb3NpdGlvbkxMXTtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ3BvbHlnb24nIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAncG9seWdvbicpXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IC0gdGhlIGdlb21ldHJ5IGRlc2NyaWJpbmcgdGhlIHBvbHlnb25cbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgcG9pbnRzU3RyaW5nID0gdGhpcy5jcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHZpZXdDb29yZFBvaW50cyk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCBwb2ludHNTdHJpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBhIFJPSS1vdmVybGF5IG9mIHR5cGUgJ2NpcmNsZScgdG8gYSBTVkdFbGVtZW50XG4gICAgICogQHBhcmFtIHN2Z0VsZW1lbnQgLSBhbiBTVkdFbGVtZW50IChzaG91bGQgaGF2ZSB0eXBlICdjaXJjbGUnKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBjaXJjbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc0NpcmNsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB2aWV3Q29vcmRQb2ludHMgPSB0aGlzLmltYWdlMlZpZXdQb3J0Q29vcmRzKGdlb21ldHJ5LnBvaW50cywgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICBjb25zdCBjeCA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueCk7XG4gICAgICAgIGNvbnN0IGN5ID0gU3RyaW5nKHZpZXdDb29yZFBvaW50c1swXS55KTtcbiAgICAgICAgLy8gZ2VvbWV0cnkucmFkaXVzIGNvbnRhaW5zIG5vdCB0aGUgcmFkaXVzIGl0c2VsZiwgYnV0IHRoZSBjb29yZGluYXRlcyBvZiBhIChhcmJpdHJhcnkpIHBvaW50IG9uIHRoZSBjaXJjbGUuXG4gICAgICAgIC8vIFdlIHRoZXJlZm9yZSBoYXZlIHRvIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IgZ2VvbWV0cnkucmFkaXVzIHRvIGdldCB0aGUgYWN0dWFsIHJhZGl1cy4gLT4gc3FydCh4XjIgKyB5XjIpXG4gICAgICAgIC8vIFNpbmNlIGdlb21ldHJ5LnJhZGl1cyBoYXMgaXRzIHkgY29vcmRpbmF0ZSBzY2FsZWQgdG8gdGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UsXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gbXVsdGlwbHkgaXQgd2l0aCB0aGUgYXNwZWN0UmF0aW8gdG8gZ2V0IHRvIHRoZSBzY2FsZSB1c2VkIGJ5IE9wZW5zZWFkcmFnb24sIGFuYWxvZ3VvdXMgdG8gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcygpXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IFN0cmluZyhNYXRoLnNxcnQoZ2VvbWV0cnkucmFkaXVzLnggKiBnZW9tZXRyeS5yYWRpdXMueCArIGFzcGVjdFJhdGlvICogYXNwZWN0UmF0aW8gKiBnZW9tZXRyeS5yYWRpdXMueSAqIGdlb21ldHJ5LnJhZGl1cy55KSk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncicsIHJhZGl1cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIGFuIGltYWdlIHRvIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICogc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG4gICAgICogQHBhcmFtIHBvaW50cyAtIGFuIGFycmF5IG9mIHBvaW50cyBpbiBjb29yZGluYXRlIHN5c3RlbSByZWxhdGl2ZSB0byBhbiBpbWFnZVxuICAgICAqIEBwYXJhbSBhc3BlY3RSYXRpbyAtIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2VcbiAgICAgKiBAcmV0dXJucyAtIGEgbmV3IFBvaW50MkRbXSB3aXRoIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydCBjb29yZGluYXRlIHN5c3RlbSBvZiBPcGVuc2VhZHJhZ29uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbWFnZTJWaWV3UG9ydENvb3Jkcyhwb2ludHM6IFBvaW50MkRbXSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogUG9pbnQyRFtdIHtcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoKHBvaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50MkQocG9pbnQueCArIHhPZmZzZXQsIHBvaW50LnkgKiBhc3BlY3RSYXRpbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBleHBlY3RlZCBieSB0aGUgJ3BvaW50cycgYXR0cmlidXRlIG9mIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgdG8gYmUgc2VyaWFsaXplZCB0byBhIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIC0gdGhlIHBvaW50cyBzZXJpYWxpemVkIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNWR1BvbHlnb25Qb2ludHNBdHRyaWJ1dGUocG9pbnRzOiBQb2ludDJEW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBwb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChwb2ludHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcsJztcbiAgICAgICAgICAgICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9pbnRzU3RyaW5nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10ZXh0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgdGV4dCB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRCb29sZWFuVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ib29sZWFuLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cInZhbHVlT2JqZWN0LmJvb2xcIiBkaXNhYmxlZD1cInRydWVcIj48L21hdC1jaGVja2JveD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEJvb2xlYW5WYWx1ZSkge1xuICAgICAgdGhpcy5fYm9vbGVhblZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYm9vbGVhblZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfYm9vbGVhblZhbHVlT2JqOiBSZWFkQm9vbGVhblZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRDb2xvclZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1jb2xvci12YWx1ZScsXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJ2YWx1ZU9iamVjdC5jb2xvckhleFwiPnt7dmFsdWVPYmplY3QuY29sb3JIZXh9fTwvc3Bhbj5gLFxuICAgIHN0eWxlczogW2AuZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b30uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5saW5re2N1cnNvcjpwb2ludGVyfS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm9ybWFsIWltcG9ydGFudDttYXgtd2lkdGg6OTUlfS5saXN0LXZpZXcgLm1hdC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OHB4IDB9Lmx2LWh0bWwtdGV4dHttYXgtaGVpZ2h0OjYwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5sdi1sYWJlbHtmb250LXdlaWdodDo3MDAhaW1wb3J0YW50fS5tYXQtZm9ybS1maWVsZHt3aWR0aDozNnB4O292ZXJmbG93LXg6dmlzaWJsZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQ29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvclZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvclZhbHVlT2JqOiBSZWFkQ29sb3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlU2Fsc2FoLCBEYXRlU2Fsc2FoLCBQcmVjaXNpb24sIFJlYWREYXRlVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kYXRlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiAqbmdJZj1cInBlcmlvZDsgZWxzZSBwcmVjaXNlRGF0ZVwiPlxuICAgIHt7ZGF0ZXNbMF0uZGF0ZSB8IGRhdGU6IGRhdGVzWzBdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1swXS5lcmF9fVxuICAgIDwvc3Bhbj5cbiAgICAtIHt7ZGF0ZXNbMV0uZGF0ZSB8IGRhdGU6IGRhdGVzWzFdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1sxXS5lcmF9fVxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICA8L3NwYW4+XG48L3NwYW4+XG5cbjxuZy10ZW1wbGF0ZSAjcHJlY2lzZURhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0IH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjYWxlbmRhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbGVuZGFyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVyYSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VyYSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGVyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkRGF0ZVZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZVZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICBjb25zdCBkYXRlT3JSYW5nZTogRGF0ZVNhbHNhaCB8IERhdGVSYW5nZVNhbHNhaCA9IHRoaXMudmFsdWVPYmplY3QuZ2V0RGF0ZVNhbHNhaCgpO1xuICAgIGlmIChkYXRlT3JSYW5nZSBpbnN0YW5jZW9mIERhdGVSYW5nZVNhbHNhaCkge1xuICAgICAgLy8gcGVyaW9kIChzdGFydCBhbmQgZW5kIGRhdGVzKVxuICAgICAgdGhpcy5wZXJpb2QgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRlcyA9IFt0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5zdGFydCksIHRoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlLmVuZCldO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW5nbGUgZGF0ZVxuICAgICAgdGhpcy5wZXJpb2QgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2UpXTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVZhbHVlT2JqO1xuICB9XG5cbiAgZGF0ZXM6IERhdGVGb3JtYXR0ZXJbXTtcbiAgcGVyaW9kOiBib29sZWFuO1xuICBwcml2YXRlIF9jYWxlbmRhcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJhOiBib29sZWFuO1xuICBwcml2YXRlIF9kYXRlVmFsdWVPYmo6IFJlYWREYXRlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBgRGF0ZVNhbHNhaGAgdG8gYSBKUyBEYXRlLCBwcm92aWRpbmcgbmVjZXNzYXJ5IGZvcm1hdHRpbmcgaW5mb3JtYXRpb24uXG4gICAqIEpVTElBTiBhbmQgR1JFR09SSUFOIGNhbGVuZGFyIGFyZSB0aGUgb25seSBhdmFpbGFibGUgZm9yIHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIGJlIGNvbnZlcnRlZC5cbiAgICogQHJldHVybiBEYXRlRm9ybWF0dGVyLlxuICAgKi9cbiAgZ2V0SlNEYXRlKGRhdGU6IERhdGVTYWxzYWgpOiBEYXRlRm9ybWF0dGVyIHtcblxuICAgIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLnllYXJQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIudG9TdHJpbmcoKSksXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5tb250aFByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAnTU1NTSAnICsgJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCAxKSwgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5kYXlQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ2xvbmdEYXRlJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpLCAgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogaW5jb3JyZWN0IHByZWNpc2lvbiBmb3IgZGF0ZScpO1xuICAgIH1cblxuICB9XG5cbn1cblxuLyoqXG4gKiBEYXRlIHN0cnVjdHVyZSBmb3IgdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUZvcm1hdHRlciB7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xuICBlcmE6IHN0cmluZztcbiAgY2FsZW5kYXI6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWREZWNpbWFsVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZWNpbWFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmRlY2ltYWx9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGVjaW1hbFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWREZWNpbWFsVmFsdWUpIHtcbiAgICB0aGlzLl9kZWNpbWFsVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVjaW1hbFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVjaW1hbFZhbHVlT2JqOiBSZWFkRGVjaW1hbFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1leHRlcm5hbC1yZXMtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBleHRlcm5hbC1yZXMtdmFsdWUgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkR2VvbVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbWV0cnktdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuZ2VvbWV0cnlTdHJpbmd9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkR2VvbVZhbHVlKSB7XG4gICAgdGhpcy5fZ2VvbVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb21WYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2dlb21WYWx1ZU9iajogUmVhZEdlb21WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbmFtZS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGdlb25hbWUtdmFsdWUgd29ya3MhXG48L3A+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b30uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5saW5re2N1cnNvcjpwb2ludGVyfS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm9ybWFsIWltcG9ydGFudDttYXgtd2lkdGg6OTUlfS5saXN0LXZpZXcgLm1hdC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OHB4IDB9Lmx2LWh0bWwtdGV4dHttYXgtaGVpZ2h0OjYwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5sdi1sYWJlbHtmb250LXdlaWdodDo3MDAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIEdlb25hbWVWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZWdlclZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1pbnRlZ2VyLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuaW50ZWdlcn19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b30uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5saW5re2N1cnNvcjpwb2ludGVyfS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm9ybWFsIWltcG9ydGFudDttYXgtd2lkdGg6OTUlfS5saXN0LXZpZXcgLm1hdC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OHB4IDB9Lmx2LWh0bWwtdGV4dHttYXgtaGVpZ2h0OjYwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5sdi1sYWJlbHtmb250LXdlaWdodDo3MDAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVnZXJWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVnZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlZ2VyVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW50ZWdlclZhbHVlT2JqOiBSZWFkSW50ZWdlclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZXJ2YWxWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWludGVydmFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVydmFsU3RhcnR9fSAtIHt7dmFsdWVPYmplY3QuaW50ZXJ2YWxFbmR9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkSW50ZXJ2YWxWYWx1ZSkge1xuICAgIHRoaXMuX2ludGVydmFsVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2ludGVydmFsVmFsdWVPYmo6IFJlYWRJbnRlcnZhbFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRMaW5rVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWxpbmstdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJzYWxzYWgtbGlua1wiIChjbGljayk9XCJyZWZSZXNDbGlja2VkKClcIj57e3JlZmVycmVkUmVzb3VyY2V9fTwvYT5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5rVmFsdWVDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgb250b2xvZ3lJbmZvKHZhbHVlOiBPbnRvbG9neUluZm9ybWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX29udG9JbmZvID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG9udG9sb2d5SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29udG9JbmZvO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkTGlua1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xpbmtWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlID0gdGhpcy52YWx1ZU9iamVjdC5yZWZlcnJlZFJlc291cmNlLmxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlID0gdGhpcy52YWx1ZU9iamVjdC5yZWZlcnJlZFJlc291cmNlSXJpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlua1ZhbHVlT2JqO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHJlZmVycmVkUmVzb3VyY2VDbGlja2VkOiBFdmVudEVtaXR0ZXI8UmVhZExpbmtWYWx1ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcml2YXRlIF9saW5rVmFsdWVPYmo6IFJlYWRMaW5rVmFsdWU7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcmVmZXJyZWRSZXNvdXJjZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHJlZlJlc0NsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQuZW1pdCh0aGlzLl9saW5rVmFsdWVPYmopO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRMaXN0VmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saXN0LXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0Lmxpc3ROb2RlTGFiZWx9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaXN0VmFsdWUpIHtcbiAgICB0aGlzLl9saXN0VmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdFZhbHVlT2JqOiBSZWFkTGlzdFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwsIEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLWh0bWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj57e3ZhbHVlT2JqZWN0Lmh0bWx9fTwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgYmluZEV2ZW50cyh2YWx1ZTogQm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kRXZlbnRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNIdG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWxWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZU9iamVjdC5odG1sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIGh0bWw6IHN0cmluZztcbiAgICBwcml2YXRlIF9odG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc0h0bWw7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50czogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICByZWZSZXNDbGlja2VkKHJlZlJlc291cmNlSXJpOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHJlZlJlc291cmNlSXJpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIGNsaWNrIGV2ZW50IHRvIHN0YW5kb2ZmIGxpbmtzIHRoYXQgc2hvd3MgdGhlIHJlZmVycmVkIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlNhbHNhaExpbmspID49IDBcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZlJlc0NsaWNrZWQodGFyZ2V0RWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbGluayBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldEVsZW1lbnQuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3Quc3RyfX08L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0U3RyaW5nVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFRleHRWYWx1ZUFzWG1sIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLXhtbCcsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LnhtbH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNYbWwpIHtcbiAgICAgICAgdGhpcy5feG1sVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94bWxWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF94bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzWG1sO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRVcmlWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXVyaS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dmFsdWVPYmplY3QudXJpfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e3ZhbHVlT2JqZWN0LnVyaX19PC9hPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBVcmlWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVXJpVmFsdWUpIHtcbiAgICB0aGlzLl9fdXJpVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3VyaVZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3VyaVZhbHVlT2JqOiBSZWFkVXJpVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWNvbXBhcmUtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGNvbXBhcmUtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ3JhcGgtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGdyYXBoLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JhcGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmlkLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBncmlkLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saXN0LXZpZXcnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj5cbiAgICA8a3VpLXByb2dyZXNzLWluZGljYXRvciAqbmdJZj1cImlzTG9hZGluZ1wiIFtjb2xvcl09XCInI0Q4ODk1OCdcIj48L2t1aS1wcm9ncmVzcy1pbmRpY2F0b3I+XG5cbiAgICA8bWF0LWxpc3QgY2xhc3M9XCJsaXN0LXZpZXdcIiAqbmdGb3I9XCJsZXQgcmVzIG9mIHJlc3VsdDsgbGV0IGkgPSBpbmRleDsgbGV0IGxhc3QgPSBsYXN0O1wiPlxuICAgICAgICA8bWF0LWxpc3QtaXRlbSBjbGFzcz1cImxpbmtcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRMaXN0SWNvbj5pbWFnZV9zZWFyY2g8L21hdC1pY29uPlxuICAgICAgICAgICAgPGgyIG1hdExpbmUgY2xhc3M9XCJsdi1sYWJlbFwiPnt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclJlc291cmNlQ2xhc3MocmVzLnR5cGUpfX0gLSB7e3Jlcy5sYWJlbH19PC9oMj5cblxuICAgICAgICAgICAgPGRpdiBtYXRMaW5lICpuZ0Zvcj1cImxldCBwcm9wIG9mIHJlcy5wcm9wZXJ0aWVzIHwga3VpS2V5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgdmFsIG9mIHByb3AudmFsdWUgfCBrdWlLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwidmFsLnZhbHVlLmdldENsYXNzTmFtZSgpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbWF0TGluZSBjbGFzcz1cImx2LWh0bWwtdGV4dFwiICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNIdG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLWh0bWwgW3ZhbHVlT2JqZWN0XT1cInZhbC52YWx1ZVwiIFtvbnRvbG9neUluZm9dPVwib250b2xvZ3lJbmZvXCIgW2JpbmRFdmVudHNdPVwiZmFsc2VcIj48L2t1aS10ZXh0LXZhbHVlLWFzLWh0bWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsdi1yZWFkLW1vcmVcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbWF0TGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8a3VpLWRhdGUtdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWREYXRlVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsLnZhbHVlXCIgW2NhbGVuZGFyXT1cInRydWVcIiBbZXJhXT1cInRydWVcIj48L2t1aS1kYXRlLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ9XCJcIj57e3ZhbC52YWx1ZS5nZXRDb250ZW50KCl9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG1hdExpbmUgKm5nSWY9XCJvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUHJvcGVydHkocHJvcC5rZXkpICE9PSAnVGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e29udG9sb2d5SW5mbz8uZ2V0TGFiZWxGb3JQcm9wZXJ0eShwcm9wLmtleSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cblxuICAgICAgICA8bWF0LWRpdmlkZXIgKm5nSWY9XCIhbGFzdFwiPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8L21hdC1saXN0PlxuPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgcmVzdWx0O1xuICAgIEBJbnB1dCgpIG9udG9sb2d5SW5mbztcbiAgICBASW5wdXQoKSBpc0xvYWRpbmc7XG5cbiAgICBLbm9yYUNvbnN0YW50cyA9IEtub3JhQ29uc3RhbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXByb3BlcnRpZXMtdmlldycsXG4gICAgdGVtcGxhdGU6IGA8cD5cbiAgICBwcm9wZXJ0aWVzLXZpZXcgd29ya3MhXG48L3A+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9YF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydGllc1ZpZXdDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICAgIEFwaVNlcnZpY2VFcnJvcixcbiAgICBBcGlTZXJ2aWNlUmVzdWx0LFxuICAgIENvbnZlcnRKU09OTEQsXG4gICAgSW5jb21pbmdTZXJ2aWNlLFxuICAgIEtub3JhQ29uc3RhbnRzLFxuICAgIE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgIE9udG9sb2d5SW5mb3JtYXRpb24sXG4gICAgUmVhZFJlc291cmNlLFxuICAgIFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSxcbiAgICBSZXNvdXJjZVNlcnZpY2Vcbn0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5kZWNsYXJlIGxldCByZXF1aXJlOiBhbnk7XG5jb25zdCBqc29ubGQgPSByZXF1aXJlKCdqc29ubGQnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktcmVzb3VyY2UtdmlldycsXG4gICAgdGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG5cbiAgICA8IS0tIFRPRE86IHN3aXRjaCB0aHJvdWdoIHRoZSBtZWRpYSB0eXBlIC0tPlxuICAgIDxrdWktc3RpbGwtaW1hZ2U+PC9rdWktc3RpbGwtaW1hZ2U+XG4gICAgPGt1aS1tb3ZpbmctaW1hZ2U+PC9rdWktbW92aW5nLWltYWdlPlxuICAgIDxrdWktYW5ub3RhdGlvbj48L2t1aS1hbm5vdGF0aW9uPlxuICAgIDxrdWktYXVkaW8+PC9rdWktYXVkaW8+XG4gICAgPGt1aS1jb2xsZWN0aW9uPjwva3VpLWNvbGxlY3Rpb24+XG4gICAgPGt1aS1kZGQ+PC9rdWktZGRkPlxuICAgIDxrdWktZG9jdW1lbnQ+PC9rdWktZG9jdW1lbnQ+XG4gICAgPGt1aS1saW5rLW9iaj48L2t1aS1saW5rLW9iaj5cbiAgICA8a3VpLW9iamVjdD48L2t1aS1vYmplY3Q+XG4gICAgPGt1aS1yZWdpb24+PC9rdWktcmVnaW9uPlxuICAgIDxrdWktdGV4dD48L2t1aS10ZXh0PlxuXG4gICAgPGgyPm1ldGFkYXRhIGZvciByZXNvdXJjZSB7eyByZXNvdXJjZT8ubGFiZWx9fSAoe3sgcmVzb3VyY2U/LmlkIH19KTwvaDI+XG4gICAgPGgzPnR5cGU6IHt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclJlc291cmNlQ2xhc3MocmVzb3VyY2U/LnR5cGUpfX08L2gzPlxuXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgcHJvcCBvZiByZXNvdXJjZT8ucHJvcGVydGllcyB8IGt1aUtleVwiPlxuICAgICAgICA8bWF0LWxpc3Q+XG4gICAgICAgICAgICA8c3Bhbj57e29udG9sb2d5SW5mbz8uZ2V0TGFiZWxGb3JQcm9wZXJ0eShwcm9wLmtleSl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCB2YWwgb2YgcHJvcC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIFtuZ1N3aXRjaF09XCJ2YWwuZ2V0Q2xhc3NOYW1lKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1jb2xvci12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZENvbG9yVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktY29sb3ItdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy1odG1sICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNIdG1sXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiIFtvbnRvbG9neUluZm9dPVwib250b2xvZ3lJbmZvXCIgW2JpbmRFdmVudHNdPVwidHJ1ZVwiPjwva3VpLXRleHQtdmFsdWUtYXMtaHRtbD5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLXN0cmluZyAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzU3RyaW5nXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMteG1sICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNYbWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dC12YWx1ZS1hcy14bWw+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZGF0ZS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZERhdGVWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1kYXRlLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWxpbmstdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRMaW5rVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIj48L2t1aS1saW5rLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWludGVnZXItdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRJbnRlZ2VyVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktaW50ZWdlci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1kZWNpbWFsLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGVjaW1hbFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWRlY2ltYWwtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZ2VvbWV0cnktdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRHZW9tVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZ2VvbWV0cnktdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdXJpLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVXJpVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdXJpLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWJvb2xlYW4tdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRCb29sZWFuVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktYm9vbGVhbi12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1pbnRlcnZhbC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEludGVydmFsVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktaW50ZXJ2YWwtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktbGlzdC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZExpc3RWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1saXN0LXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHRmaWxlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5UZXh0RmlsZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHRmaWxlLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0PVwiXCI+Tm90IHN1cHBvcnRlZCB7e3ZhbC5nZXRDbGFzc05hbWUoKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgPC9tYXQtbGlzdD5cbiAgICA8L2Rpdj5cblxuPC9tYXQtY2FyZD5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ubGlua3tjdXJzb3I6cG9pbnRlcn0ubWF0LWxpc3QgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vcm1hbCFpbXBvcnRhbnQ7bWF4LXdpZHRoOjk1JX0ubGlzdC12aWV3IC5tYXQtbGlzdC1pdGVte2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NDBweDtwYWRkaW5nOjhweCAwfS5sdi1odG1sLXRleHR7bWF4LWhlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0ubHYtbGFiZWx7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH1gXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaXJpPzogc3RyaW5nID0gJ2h0dHA6Ly9yZGZoLmNoLzhiZTFiN2NmNzEwMyc7XG5cbiAgICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247IC8vIG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzZXMgYW5kIHByb3BlcnRpZXMgcHJlc2VudCBpbiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIHdpdGggSXJpIGBpcmlgXG4gICAgcmVzb3VyY2U6IFJlYWRSZXNvdXJjZTsgLy8gdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZFxuICAgIGVycm9yTWVzc2FnZTogYW55O1xuXG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXNvdXJjZVNlcnZpY2U6IFJlc291cmNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYWNoZVNlcnZpY2U6IE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luY29taW5nU2VydmljZTogSW5jb21pbmdTZXJ2aWNlKSB7XG5cbiAgICAgICAgY29uc3Qgcm91dGVQYXJhbXMgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXM7XG4gICAgICAgIHRoaXMuaXJpID0gcm91dGVQYXJhbXMuaWQ7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZSh0aGlzLmlyaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNvdXJjZShpcmk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXNvdXJjZVNlcnZpY2UuZ2V0UmVzb3VyY2UoaXJpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBBcGlTZXJ2aWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdC5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBqc29ubGQucHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBhY3QgSlNPTi1MRCB1c2luZyBhbiBlbXB0eSBjb250ZXh0OiBleHBhbmRzIGFsbCBJcmlzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBwcm9taXNlcy5jb21wYWN0KHJlc3VsdC5ib2R5LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChjb21wYWN0ZWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VTZXE6IFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSA9IENvbnZlcnRKU09OTEQuY3JlYXRlUmVhZFJlc291cmNlc1NlcXVlbmNlRnJvbUpzb25MRChjb21wYWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBleGFjdGx5IG9uZSByZXNvdXJjZSBpcyByZXR1cm5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCByZXNvdXJjZSBjbGFzcyBJcmlzIGZyb20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZUNsYXNzSXJpczogc3RyaW5nW10gPSBDb252ZXJ0SlNPTkxELmdldFJlc291cmNlQ2xhc3Nlc0Zyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3MgSXJpcyAocHJvcGVydGllcyBhcmUgaW1wbGllZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UuZ2V0UmVzb3VyY2VDbGFzc0RlZmluaXRpb25zKHJlc291cmNlQ2xhc3NJcmlzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNvdXJjZUNsYXNzSW5mb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBvbnRvbG9neSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnRvbG9neUluZm8gPSByZXNvdXJjZUNsYXNzSW5mb3M7IC8vIGNvbnNvbGUubG9nKCdpbml0aWFsaXphdGlvbiBvZiBvbnRvbG9neUluZm86ICcsIHRoaXMub250b2xvZ3lJbmZvKTsgPiBvYmplY3QgcmVjZWl2ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJlcGFyZSBhIHBvc3NpYmx5IGF0dGFjaGVkIGltYWdlIGZpbGUgdG8gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbGxlY3RJbWFnZXNBbmRSZWdpb25zRm9yUmVzb3VyY2UocmVzb3VyY2VTZXEucmVzb3VyY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlU2VxLnJlc291cmNlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvdXJjZTogJywgdGhpcy5yZXNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVxdWVzdEluY29taW5nUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhY2hlIHJlcXVlc3QgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0IHJlc291cmNlU2VxLnJlc291cmNlcy5sZW5ndGggIT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0ICR7cmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aH0gcmVzb3VyY2UocykgZ2l2ZW4uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSlNPTkxEIG9mIGZ1bGwgcmVzb3VyY2UgcmVxdWVzdCBjb3VsZCBub3QgYmUgZXhwYW5kZWQ6JyArIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yOiBBcGlTZXJ2aWNlRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10YWJsZS12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgdGFibGUtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICAgIENvdW50UXVlcnlSZXN1bHQsXG4gICAgRXh0ZW5kZWRTZWFyY2hQYXJhbXMsXG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgICBSZWFkUmVzb3VyY2UsXG4gICAgUmVhZFJlc291cmNlc1NlcXVlbmNlLFxuICAgIFNlYXJjaFBhcmFtc1NlcnZpY2UsXG4gICAgU2VhcmNoU2VydmljZVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEt1aVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBhYnN0cmFjdCBvZmZzZXQ6IG51bWJlcjtcbiAgICBhYnN0cmFjdCBtYXhPZmZzZXQ6IG51bWJlcjtcbiAgICBhYnN0cmFjdCByZXN1bHQ6IFJlYWRSZXNvdXJjZVtdO1xuICAgIGFic3RyYWN0IG9udG9sb2d5SW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICBhYnN0cmFjdCBuYXZpZ2F0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgYWJzdHJhY3QgZ3JhdnNlYXJjaEdlbmVyYXRvcjogRXh0ZW5kZWRTZWFyY2hQYXJhbXM7XG4gICAgYWJzdHJhY3Qgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgICBhYnN0cmFjdCBzZWFyY2hNb2RlOiBzdHJpbmc7XG4gICAgYWJzdHJhY3QgbnVtYmVyT2ZBbGxSZXN1bHRzOiBudW1iZXI7XG4gICAgYWJzdHJhY3QgS25vcmFDb25zdGFudHM6IEtub3JhQ29uc3RhbnRzO1xuICAgIGFic3RyYWN0IHJlcmVuZGVyOiBib29sZWFuO1xuICAgIGFic3RyYWN0IGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICBhYnN0cmFjdCBlcnJvck1lc3NhZ2U6IGFueTtcbiAgICBhYnN0cmFjdCBwYWdpbmdMaW1pdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcm90ZWN0ZWQgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBfc2VhcmNoUGFyYW1zU2VydmljZTogU2VhcmNoUGFyYW1zU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLl9yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1vZGUgPSBwYXJhbXMuZ2V0KCdtb2RlJyk7XG5cbiAgICAgICAgICAgIC8vIGluaXQgb2Zmc2V0ICBhbmQgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RlID09PSAnZnVsbHRleHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IHBhcmFtcy5nZXQoJ3EnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hNb2RlID09PSAnZXh0ZW5kZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmF2c2VhcmNoR2VuZXJhdG9yID0gdGhpcy5fc2VhcmNoUGFyYW1zU2VydmljZS5nZXRTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlR3JhdnNlYXJjaFF1ZXJ5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVyZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb25TdWJzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIEdyYXZzZWFyY2ggcXVlcnkgZm9yIHRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVHcmF2c2VhcmNoUXVlcnkoKSB7XG5cbiAgICAgICAgY29uc3QgZ3JhdnNlYXJjaDogc3RyaW5nIHwgYm9vbGVhbiA9IHRoaXMuZ3JhdnNlYXJjaEdlbmVyYXRvci5nZW5lcmF0ZUdyYXZzZWFyY2godGhpcy5vZmZzZXQpO1xuICAgICAgICBpZiAoZ3JhdnNlYXJjaCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIG5vIHZhbGlkIHNlYXJjaCBwYXJhbXMgKGFwcGxpY2F0aW9uIGhhcyBiZWVuIHJlbG9hZGVkKVxuICAgICAgICAgICAgLy8gZ28gdG8gcm9vdFxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnJ10sIHsgcmVsYXRpdmVUbzogdGhpcy5fcm91dGUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gPHN0cmluZz5ncmF2c2VhcmNoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlYXJjaCByZXN1bHQgZnJvbSBLbm9yYSAtIDIgY2FzZXM6IHNpbXBsZSBzZWFyY2ggYW5kIGV4dGVuZGVkIHNlYXJjaFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyBGVUxMVEVYVCBTRUFSQ0hcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kZSA9PT0gJ2Z1bGx0ZXh0Jykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBwZXJmb3JtIGNvdW50IHF1ZXJ5XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5kb0Z1bGxUZXh0U2VhcmNoQ291bnRRdWVyeUNvdW50UXVlcnlSZXN1bHQodGhpcy5zZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd051bWJlck9mQWxsUmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwZXJmb3JtIGZ1bGwgdGV4dCBzZWFyY2hcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UuZG9GdWxsVGV4dFNlYXJjaFJlYWRSZXNvdXJjZVNlcXVlbmNlKHRoaXMuc2VhcmNoUXVlcnksIHRoaXMub2Zmc2V0KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaFJlc3VsdHMsIC8vIGZ1bmN0aW9uIHBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEVYVEVOREVEIFNFQVJDSFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoTW9kZSA9PT0gJ2V4dGVuZGVkJykge1xuICAgICAgICAgICAgLy8gcGVyZm9ybSBjb3VudCBxdWVyeVxuICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5kb0V4dGVuZGVkU2VhcmNoQ291bnRRdWVyeUNvdW50UXVlcnlSZXN1bHQodGhpcy5zZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd051bWJlck9mQWxsUmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoU2VydmljZS5kb0V4dGVuZGVkU2VhcmNoUmVhZFJlc291cmNlU2VxdWVuY2UodGhpcy5zZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2hSZXN1bHRzLCAvLyBmdW5jdGlvbiBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGBzZWFyY2ggbW9kZSBpbnZhbGlkOiAke3RoaXMuc2VhcmNoTW9kZX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBDb252ZXJ0cyBzZWFyY2ggcmVzdWx0cyBmcm9tIEpTT04tTEQgdG8gYSBbW1JlYWRSZXNvdXJjZXNTZXF1ZW5jZV1dIGFuZCByZXF1ZXN0cyBpbmZvcm1hdGlvbiBhYm91dCBvbnRvbG9neSBlbnRpdGllcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0byBgc3Vic2NyaWJlYCBhcyBhIHBvaW50ZXIgKGluc3RlYWQgb2YgcmVkdW5kYW50bHkgZGVmaW5pbmcgdGhlIHNhbWUgbGFtYmRhIGZ1bmN0aW9uKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhZFJlc291cmNlc1NlcXVlbmNlfSBzZWFyY2hSZXN1bHQgdGhlIGFuc3dlciB0byBhIHNlYXJjaCByZXF1ZXN0LlxuICAgICAqL1xuICAgIHByaXZhdGUgcHJvY2Vzc1NlYXJjaFJlc3VsdHMgPSAoc2VhcmNoUmVzdWx0OiBSZWFkUmVzb3VyY2VzU2VxdWVuY2UpID0+IHtcblxuICAgICAgICAvLyBhc3NpZ24gb250b2xvZ3kgaW5mb3JtYXRpb24gdG8gYSB2YXJpYWJsZSBzbyBpdCBjYW4gYmUgdXNlZCBpbiB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGVcbiAgICAgICAgaWYgKHRoaXMub250b2xvZ3lJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGluaXQgb250b2xvZ3kgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIHRoaXMub250b2xvZ3lJbmZvID0gc2VhcmNoUmVzdWx0Lm9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgb250b2xvZ3kgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIHRoaXMub250b2xvZ3lJbmZvLnVwZGF0ZU9udG9sb2d5SW5mb3JtYXRpb24oc2VhcmNoUmVzdWx0Lm9udG9sb2d5SW5mb3JtYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFwcGVuZCByZXN1bHRzIHRvIHNlYXJjaCByZXN1bHRzXG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5yZXN1bHQuY29uY2F0KHNlYXJjaFJlc3VsdC5yZXNvdXJjZXMpO1xuXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVyZW5kZXIgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkIGJ5IGEgY291bnQgcXVlcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FwaVNlcnZpY2VSZXN1bHR9IGNvdW50UXVlcnlSZXN1bHQgdGhlIHJlc3BvbnNlIHRvIGEgY291bnQgcXVlcnkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93TnVtYmVyT2ZBbGxSZXN1bHRzID0gKGNvdW50UXVlcnlSZXN1bHQ6IENvdW50UXVlcnlSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkFsbFJlc3VsdHMgPSBjb3VudFF1ZXJ5UmVzdWx0Lm51bWJlck9mUmVzdWx0cztcblxuICAgICAgICBpZiAodGhpcy5udW1iZXJPZkFsbFJlc3VsdHMgPiAwKSB7XG4gICAgICAgICAgICAvLyBvZmZzZXQgaXMgMC1iYXNlZFxuICAgICAgICAgICAgLy8gaWYgbnVtYmVyT2ZBbGxSZXN1bHRzIGVxdWFscyB0aGUgcGFnaW5nTGltaXQsIHRoZSBtYXguIG9mZnNldCBpcyAwXG4gICAgICAgICAgICB0aGlzLm1heE9mZnNldCA9IE1hdGguZmxvb3IoKHRoaXMubnVtYmVyT2ZBbGxSZXN1bHRzIC0gMSkgLyB0aGlzLnBhZ2luZ0xpbWl0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWF4T2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy5cbiAgICAgKiBUaGUgcmVzdWx0cyB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBleGlzdGluZyBvbmVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBsb2FkTW9yZShvZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHBhZ2Ugb2Zmc2V0IHdoZW4gdGhlIGVuZCBvZiBzY3JvbGwgaXMgcmVhY2hlZCB0byBnZXQgdGhlIG5leHQgcGFnZSBvZiBzZWFyY2ggcmVzdWx0c1xuICAgICAgICBpZiAodGhpcy5vZmZzZXQgPCB0aGlzLm1heE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE1vZGUgPT09ICdleHRlbmRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVHcmF2c2VhcmNoUXVlcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0KCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS3VpVmlldyB9IGZyb20gJy4uL2t1aS12aWV3JztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIEFwaVNlcnZpY2VFcnJvcixcbiAgRXh0ZW5kZWRTZWFyY2hQYXJhbXMsXG4gIEdyYXZzZWFyY2hHZW5lcmF0aW9uU2VydmljZSxcbiAgS25vcmFDb25zdGFudHMsXG4gIE9udG9sb2d5Q2FjaGVTZXJ2aWNlLFxuICBPbnRvbG9neUluZm9ybWF0aW9uLFxuICBSZWFkUmVzb3VyY2UsXG4gIFJlYWRSZXNvdXJjZXNTZXF1ZW5jZSxcbiAgU2VhcmNoUGFyYW1zU2VydmljZSxcbiAgU2VhcmNoU2VydmljZVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1zZWFyY2gtcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIiFyZXJlbmRlclwiPlxuICAgIDxkaXYgKm5nSWY9XCJudW1iZXJPZkFsbFJlc3VsdHMgIT09IDAgJiYgcmVzdWx0OyBlbHNlIG5vUmVzdWx0XCI+XG4gICAgICAgIDxoND5OdW1iZXIgb2YgcmVzdWx0czoge3tudW1iZXJPZkFsbFJlc3VsdHN9fTwvaDQ+XG4gICAgICAgIDxtYXQtdGFiLWdyb3VwPlxuICAgICAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGt1aS1saXN0LXZpZXcgW3Jlc3VsdF09XCJyZXN1bHRcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiIFtpc0xvYWRpbmddPVwiaXNMb2FkaW5nXCI+PC9rdWktbGlzdC12aWV3PlxuICAgICAgICAgICAgPC9tYXQtdGFiPlxuICAgICAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJHcmlkXCI+XG4gICAgICAgICAgICAgICAgPGt1aS1ncmlkLXZpZXc+PC9rdWktZ3JpZC12aWV3PlxuICAgICAgICAgICAgPC9tYXQtdGFiPlxuICAgICAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxrdWktdGFibGUtdmlldz48L2t1aS10YWJsZS12aWV3PlxuICAgICAgICAgICAgPC9tYXQtdGFiPlxuICAgICAgICAgICAgPG1hdC10YWIgbGFiZWw9XCJHcmF2c2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGt1aS1ncmFwaC12aWV3Pjwva3VpLWdyYXBoLXZpZXc+XG4gICAgICAgICAgICA8L21hdC10YWI+XG4gICAgICAgIDwvbWF0LXRhYi1ncm91cD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZC1wYW5lbFwiICpuZ0lmPVwicmVzdWx0Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwibGluayBjZW50ZXJcIiAoY2xpY2spPVwibG9hZE1vcmUob2Zmc2V0KVwiICpuZ0lmPVwib2Zmc2V0IDwgbWF4T2Zmc2V0XCI+TG9hZCBtb3JlXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2Fycm93X2Rvd248L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEluIGNhc2Ugb2YgMCByZXN1bHQgLS0+XG4gICAgPG5nLXRlbXBsYXRlICNub1Jlc3VsdD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPk5vIHJlc3VsdDwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuPC9kaXY+XG5cbjwhLS0gRXJyb3IgbWVzc2FnZSAtLT5cbjxkaXYgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj5cbiAgICA8cD5UaGVyZSBpcyBhbiBlcnJvcjoge3tlcnJvck1lc3NhZ2V9fTwvcD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AubG9hZC1wYW5lbHt3aWR0aDoxMDAlfS5sb2FkLXBhbmVsIC5jZW50ZXJ7ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDoyNHB4O21hcmdpbjoxMnB4IGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIEt1aVZpZXcge1xuXG4gIEtub3JhQ29uc3RhbnRzID0gS25vcmFDb25zdGFudHM7XG4gIG9mZnNldDogbnVtYmVyID0gMDtcbiAgbWF4T2Zmc2V0OiBudW1iZXIgPSAwO1xuICBncmF2c2VhcmNoR2VuZXJhdG9yOiBFeHRlbmRlZFNlYXJjaFBhcmFtcztcbiAgcmVzdWx0OiBSZWFkUmVzb3VyY2VbXSA9IFtdO1xuICBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gIG51bWJlck9mQWxsUmVzdWx0czogbnVtYmVyO1xuICByZXJlbmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZWFyY2hNb2RlOiBzdHJpbmc7XG4gIGlzTG9hZGluZyA9IHRydWU7XG4gIGVycm9yTWVzc2FnZTogYW55ID0gdW5kZWZpbmVkO1xuICBuYXZpZ2F0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHBhZ2luZ0xpbWl0OiBudW1iZXIgPSAyNTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIF9zZWFyY2hQYXJhbXNTZXJ2aWNlOiBTZWFyY2hQYXJhbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBfcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgc3VwZXIoX3JvdXRlLCBfc2VhcmNoU2VydmljZSwgX3NlYXJjaFBhcmFtc1NlcnZpY2UsIF9yb3V0ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBLdWlBY3Rpb25Nb2R1bGUgfSBmcm9tICdAa25vcmEvYWN0aW9uJztcbmltcG9ydCB7IEt1aUNvcmVNb2R1bGUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9kYXRlLXZhbHVlL2RhdGUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IERlY2ltYWxWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZGVjaW1hbC12YWx1ZS9kZWNpbWFsLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9leHRlcm5hbC1yZXMtdmFsdWUvZXh0ZXJuYWwtcmVzLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbmFtZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9uYW1lLXZhbHVlL2dlb25hbWUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVnZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvaW50ZWdlci12YWx1ZS9pbnRlZ2VyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlcnZhbFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9saW5rLXZhbHVlL2xpbmstdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1odG1sL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1zdHJpbmcvdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMteG1sL3RleHQtdmFsdWUtYXMteG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXJpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFubm90YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXVkaW9Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERkZENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvZGRkL2RkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rT2JqQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW92aW5nSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL21vdmluZy1pbWFnZS9tb3ZpbmctaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2Uvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGlsbEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYXJlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9jb21wYXJlLXZpZXcvY29tcGFyZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmFwaFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9wcm9wZXJ0aWVzLXZpZXcvcHJvcGVydGllcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNvdXJjZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBLdWlDb3JlTW9kdWxlLFxuICAgICAgICBLdWlBY3Rpb25Nb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoUmVzdWx0c0NvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoUmVzdWx0c0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgS3VpVmlld2VyTW9kdWxlIHtcbn1cbiIsIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygdmlld2VyXG4gKi9cblxuLy8gcmVzb3VyY2Ugdmlld2VyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9yZXNvdXJjZS8nO1xuXG4vLyBwcm9wZXJ0eSAoZ3VpKSBlbGVtZW50XG5leHBvcnQgKiBmcm9tICcuL2xpYi9wcm9wZXJ0eS8nO1xuXG4vLyBkaWZmZXJlbnQga2luZCBvZiB2aWV3c1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdmlldy8nO1xuXG4vLyB2aWV3ZXIgbW9kdWxlXG5leHBvcnQgKiBmcm9tICcuL2xpYi92aWV3ZXIubW9kdWxlJztcbiIsIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtCb29sZWFuVmFsdWVDb21wb25lbnQgYXMgw4nCtXV9IGZyb20gJy4vbGliL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtDb2xvclZhbHVlQ29tcG9uZW50IGFzIMOJwrVyfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtEYXRlVmFsdWVDb21wb25lbnQgYXMgw4nCtXB9IGZyb20gJy4vbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtEZWNpbWFsVmFsdWVDb21wb25lbnQgYXMgw4nCtXN9IGZyb20gJy4vbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IGFzIMOJwrViYX0gZnJvbSAnLi9saWIvcHJvcGVydHkvZXh0ZXJuYWwtcmVzLXZhbHVlL2V4dGVybmFsLXJlcy12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtHZW9tZXRyeVZhbHVlQ29tcG9uZW50IGFzIMOJwrV2fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtHZW9uYW1lVmFsdWVDb21wb25lbnQgYXMgw4nCtXd9IGZyb20gJy4vbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtJbnRlZ2VyVmFsdWVDb21wb25lbnQgYXMgw4nCtXF9IGZyb20gJy4vbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtJbnRlcnZhbFZhbHVlQ29tcG9uZW50IGFzIMOJwrV4fSBmcm9tICcuL2xpYi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtMaW5rVmFsdWVDb21wb25lbnQgYXMgw4nCtXp9IGZyb20gJy4vbGliL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtMaXN0VmFsdWVDb21wb25lbnQgYXMgw4nCtXl9IGZyb20gJy4vbGliL3Byb3BlcnR5L2xpc3QtdmFsdWUvbGlzdC12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQgYXMgw4nCtWx9IGZyb20gJy4vbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1odG1sL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCBhcyDDicK1bX0gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0VmFsdWVBc1htbENvbXBvbmVudCBhcyDDicK1bn0gZnJvbSAnLi9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXhtbC90ZXh0LXZhbHVlLWFzLXhtbC5jb21wb25lbnQnO1xuZXhwb3J0IHtUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IGFzIMOJwrVvfSBmcm9tICcuL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtVcmlWYWx1ZUNvbXBvbmVudCBhcyDDicK1dH0gZnJvbSAnLi9saWIvcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQnO1xuZXhwb3J0IHtBbm5vdGF0aW9uQ29tcG9uZW50IGFzIMOJwrVhfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcbmV4cG9ydCB7QXVkaW9Db21wb25lbnQgYXMgw4nCtWJ9IGZyb20gJy4vbGliL3Jlc291cmNlL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudCc7XG5leHBvcnQge0NvbGxlY3Rpb25Db21wb25lbnQgYXMgw4nCtWN9IGZyb20gJy4vbGliL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0IHtEZGRDb21wb25lbnQgYXMgw4nCtWR9IGZyb20gJy4vbGliL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50JztcbmV4cG9ydCB7RG9jdW1lbnRDb21wb25lbnQgYXMgw4nCtWV9IGZyb20gJy4vbGliL3Jlc291cmNlL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQge0xpbmtPYmpDb21wb25lbnQgYXMgw4nCtWZ9IGZyb20gJy4vbGliL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudCc7XG5leHBvcnQge01vdmluZ0ltYWdlQ29tcG9uZW50IGFzIMOJwrVnfSBmcm9tICcuL2xpYi9yZXNvdXJjZS9tb3ZpbmctaW1hZ2UvbW92aW5nLWltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQge09iamVjdENvbXBvbmVudCBhcyDDicK1aH0gZnJvbSAnLi9saWIvcmVzb3VyY2Uvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuZXhwb3J0IHtSZWdpb25Db21wb25lbnQgYXMgw4nCtWl9IGZyb20gJy4vbGliL3Jlc291cmNlL3JlZ2lvbi9yZWdpb24uY29tcG9uZW50JztcbmV4cG9ydCB7U3RpbGxJbWFnZUNvbXBvbmVudCBhcyDDicK1an0gZnJvbSAnLi9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50JztcbmV4cG9ydCB7VGV4dENvbXBvbmVudCBhcyDDicK1a30gZnJvbSAnLi9saWIvcmVzb3VyY2UvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5leHBvcnQge0NvbXBhcmVWaWV3Q29tcG9uZW50IGFzIMOJwrViZn0gZnJvbSAnLi9saWIvdmlldy9jb21wYXJlLXZpZXcvY29tcGFyZS12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0dyYXBoVmlld0NvbXBvbmVudCBhcyDDicK1Ymd9IGZyb20gJy4vbGliL3ZpZXcvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0dyaWRWaWV3Q29tcG9uZW50IGFzIMOJwrViY30gZnJvbSAnLi9saWIvdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge0t1aVZpZXcgYXMgw4nCtWJqfSBmcm9tICcuL2xpYi92aWV3L2t1aS12aWV3JztcbmV4cG9ydCB7TGlzdFZpZXdDb21wb25lbnQgYXMgw4nCtWJifSBmcm9tICcuL2xpYi92aWV3L2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCB7UHJvcGVydGllc1ZpZXdDb21wb25lbnQgYXMgw4nCtWJofSBmcm9tICcuL2xpYi92aWV3L3Byb3BlcnRpZXMtdmlldy9wcm9wZXJ0aWVzLXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCB7UmVzb3VyY2VWaWV3Q29tcG9uZW50IGFzIMOJwrViZX0gZnJvbSAnLi9saWIvdmlldy9yZXNvdXJjZS12aWV3L3Jlc291cmNlLXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCB7U2VhcmNoUmVzdWx0c0NvbXBvbmVudCBhcyDDicK1Yml9IGZyb20gJy4vbGliL3ZpZXcvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50JztcbmV4cG9ydCB7VGFibGVWaWV3Q29tcG9uZW50IGFzIMOJwrViZH0gZnJvbSAnLi9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50JzsiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiS25vcmFDb25zdGFudHMiLCJFdmVudEVtaXR0ZXIiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiUG9pbnQyRCIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkRhdGVSYW5nZVNhbHNhaCIsIlByZWNpc2lvbiIsIkhvc3RMaXN0ZW5lciIsIkNvbnZlcnRKU09OTEQiLCJBY3RpdmF0ZWRSb3V0ZSIsIlJlc291cmNlU2VydmljZSIsIk9udG9sb2d5Q2FjaGVTZXJ2aWNlIiwiSW5jb21pbmdTZXJ2aWNlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJTZWFyY2hTZXJ2aWNlIiwiU2VhcmNoUGFyYW1zU2VydmljZSIsIlJvdXRlciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiS3VpQ29yZU1vZHVsZSIsIkt1aUFjdGlvbk1vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TmF0aXZlRGF0ZU1vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztRQVlFO1NBQWlCO1FBRWpCLHNDQUFRLEdBQVI7U0FDQzs7b0JBYkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsa0NBR1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7UUFRRCwwQkFBQztLQUFBOzs7UUNMQztTQUFpQjtRQUVqQixpQ0FBUSxHQUFSO1NBQ0M7O29CQWJGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSw2QkFHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7OztRQVFELHFCQUFDO0tBQUE7OztRQ0xDO1NBQWlCO1FBRWpCLHNDQUFRLEdBQVI7U0FDQzs7b0JBYkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsa0NBR1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7UUFRRCwwQkFBQztLQUFBOzs7UUNMQztTQUFpQjtRQUVqQiwrQkFBUSxHQUFSO1NBQ0M7O29CQWJGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSwyQkFHWDt3QkFD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