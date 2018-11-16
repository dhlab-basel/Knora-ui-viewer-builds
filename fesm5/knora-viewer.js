import { Component, ElementRef, EventEmitter, Input, Output, HostListener, NgModule } from '@angular/core';
import { __values } from 'tslib';
import { KnoraConstants, Point2D, DateRangeSalsah, Precision, ConvertJSONLD, IncomingService, OntologyCacheService, ResourceService, KuiCoreModule } from '@knora/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { KuiActionModule } from '@knora/action';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AnnotationComponent = /** @class */ (function () {
    function AnnotationComponent() {
    }
    /**
     * @return {?}
     */
    AnnotationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
    }
    /**
     * @return {?}
     */
    AudioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CollectionComponent = /** @class */ (function () {
    function CollectionComponent() {
    }
    /**
     * @return {?}
     */
    CollectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DddComponent = /** @class */ (function () {
    function DddComponent() {
    }
    /**
     * @return {?}
     */
    DddComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent() {
    }
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinkObjComponent = /** @class */ (function () {
    function LinkObjComponent() {
    }
    /**
     * @return {?}
     */
    LinkObjComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MovingImageComponent = /** @class */ (function () {
    function MovingImageComponent() {
    }
    /**
     * @return {?}
     */
    MovingImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ObjectComponent = /** @class */ (function () {
    function ObjectComponent() {
    }
    /**
     * @return {?}
     */
    ObjectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RegionComponent = /** @class */ (function () {
    function RegionComponent() {
    }
    /**
     * @return {?}
     */
    RegionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Represents a region.
 * Contains a reference to the resource representing the region and its geometries.
 */
var  /**
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
 * Represents an image including its regions.
 */
var  /**
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
 * Sends a requests to the parent component to load more StillImageRepresentations.
 */
var  /**
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
 * Represents a geometry belonging to a specific region.
 */
var  /**
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
            for (var imagesToDisplay_1 = __values(imagesToDisplay), imagesToDisplay_1_1 = imagesToDisplay_1.next(); !imagesToDisplay_1_1.done; imagesToDisplay_1_1 = imagesToDisplay_1.next()) {
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
                for (var geometries_1 = __values(geometries), geometries_1_1 = geometries_1.next(); !geometries_1_1.done; geometries_1_1 = geometries_1.next()) {
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
            for (var _a = __values(this.images), _b = _a.next(); !_b.done; _b = _a.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    /**
     * @return {?}
     */
    TextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BooleanValueComponent = /** @class */ (function () {
    function BooleanValueComponent() {
    }
    Object.defineProperty(BooleanValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._booleanValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ColorValueComponent = /** @class */ (function () {
    function ColorValueComponent() {
    }
    Object.defineProperty(ColorValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._colorValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DateValueComponent = /** @class */ (function () {
    function DateValueComponent() {
    }
    Object.defineProperty(DateValueComponent.prototype, "calendar", {
        get: /**
         * @return {?}
         */
        function () {
            return this._calendar;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._calendar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "era", {
        get: /**
         * @return {?}
         */
        function () {
            return this._era;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._era = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dateValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateValueObj = value;
            /** @type {?} */
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
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param {?} date the date to be converted.
     * @return {?} DateFormatter.
     */
    DateValueComponent.prototype.getJSDate = /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param {?} date the date to be converted.
     * @return {?} DateFormatter.
     */
    function (date) {
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
                // 0 base month
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.dayPrecision) {
            return {
                format: 'longDate',
                date: new Date(date.year, date.month - 1, date.day),
                // 0 base month
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DecimalValueComponent = /** @class */ (function () {
    function DecimalValueComponent() {
    }
    Object.defineProperty(DecimalValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._decimalValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ExternalResValueComponent = /** @class */ (function () {
    function ExternalResValueComponent() {
    }
    /**
     * @return {?}
     */
    ExternalResValueComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GeometryValueComponent = /** @class */ (function () {
    function GeometryValueComponent() {
    }
    Object.defineProperty(GeometryValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._geomValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GeonameValueComponent = /** @class */ (function () {
    function GeonameValueComponent() {
    }
    /**
     * @return {?}
     */
    GeonameValueComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntegerValueComponent = /** @class */ (function () {
    function IntegerValueComponent() {
    }
    Object.defineProperty(IntegerValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._integerValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IntervalValueComponent = /** @class */ (function () {
    function IntervalValueComponent() {
    }
    Object.defineProperty(IntervalValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._intervalValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinkValueComponent = /** @class */ (function () {
    function LinkValueComponent() {
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(LinkValueComponent.prototype, "ontologyInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ontoInfo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._linkValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
    /**
     * @return {?}
     */
    LinkValueComponent.prototype.refResClicked = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListValueComponent = /** @class */ (function () {
    function ListValueComponent() {
    }
    Object.defineProperty(ListValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextValueAsHtmlComponent = /** @class */ (function () {
    function TextValueAsHtmlComponent(el) {
        this.el = el;
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "ontologyInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ontoInfo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "bindEvents", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bindEvents;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bindEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._htmlValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._htmlValueObj = value;
            if (this.el.nativeElement.innerHTML) {
                this.el.nativeElement.innerHTML = this.valueObject.html;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} refResourceIri
     * @return {?}
     */
    TextValueAsHtmlComponent.prototype.refResClicked = /**
     * @param {?} refResourceIri
     * @return {?}
     */
    function (refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    };
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param {?} targetElement
     * @return {?}
     */
    TextValueAsHtmlComponent.prototype.onClick = /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param {?} targetElement
     * @return {?}
     */
    function (targetElement) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextValueAsStringComponent = /** @class */ (function () {
    function TextValueAsStringComponent() {
    }
    Object.defineProperty(TextValueAsStringComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textStringValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextValueAsXmlComponent = /** @class */ (function () {
    function TextValueAsXmlComponent() {
    }
    Object.defineProperty(TextValueAsXmlComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._xmlValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextfileValueComponent = /** @class */ (function () {
    function TextfileValueComponent() {
    }
    Object.defineProperty(TextfileValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textfileValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UriValueComponent = /** @class */ (function () {
    function UriValueComponent() {
    }
    Object.defineProperty(UriValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this.__uriValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CompareViewComponent = /** @class */ (function () {
    function CompareViewComponent() {
    }
    /**
     * @return {?}
     */
    CompareViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GraphViewComponent = /** @class */ (function () {
    function GraphViewComponent() {
    }
    /**
     * @return {?}
     */
    GraphViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridViewComponent = /** @class */ (function () {
    function GridViewComponent() {
    }
    /**
     * @return {?}
     */
    GridViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListViewComponent = /** @class */ (function () {
    function ListViewComponent() {
    }
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var jsonld = require('jsonld');
var ResourceViewComponent = /** @class */ (function () {
    function ResourceViewComponent(_resourceService, _cacheService, _incomingService) {
        this._resourceService = _resourceService;
        this._cacheService = _cacheService;
        this._incomingService = _incomingService;
        this.iri = 'http://rdfh.ch/8be1b7cf7103';
        this.KnoraConstants = KnoraConstants;
    }
    /**
     * @return {?}
     */
    ResourceViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getResource(this.iri);
    };
    /**
     * @param {?} iri
     * @return {?}
     */
    ResourceViewComponent.prototype.getResource = /**
     * @param {?} iri
     * @return {?}
     */
    function (iri) {
        var _this = this;
        this._resourceService.getResource(iri)
            .subscribe(function (result) {
            console.log('result: ', result.body);
            /** @type {?} */
            var promises = jsonld.promises;
            /** @type {?} */
            var promise = promises.compact(result.body, {});
            promise.then(function (compacted) {
                /** @type {?} */
                var resourceSeq = ConvertJSONLD.createReadResourcesSequenceFromJsonLD(compacted);
                // make sure that exactly one resource is returned
                if (resourceSeq.resources.length === 1) {
                    /** @type {?} */
                    var resourceClassIris = ConvertJSONLD.getResourceClassesFromJsonLD(compacted);
                    // request ontology information about resource class Iris (properties are implied)
                    // request ontology information about resource class Iris (properties are implied)
                    _this._cacheService.getResourceClassDefinitions(resourceClassIris).subscribe(function (resourceClassInfos) {
                        // initialize ontology information
                        // initialize ontology information
                        _this.ontologyInfo = resourceClassInfos; // console.log('initialization of ontologyInfo: ', this.ontologyInfo); > object received
                        // prepare a possibly attached image file to be displayed
                        // this.collectImagesAndRegionsForResource(resourceSeq.resources[0]);
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
                    template: "<mat-card>\n\n    <!-- TODO: switch through the media type -->\n    <kui-still-image></kui-still-image>\n    <kui-moving-image></kui-moving-image>\n    <kui-annotation></kui-annotation>\n    <kui-audio></kui-audio>\n    <kui-collection></kui-collection>\n    <kui-ddd></kui-ddd>\n    <kui-document></kui-document>\n    <kui-link-obj></kui-link-obj>\n    <kui-object></kui-object>\n    <kui-region></kui-region>\n    <kui-text></kui-text>\n\n    <h2>metadata for resource {{ resource?.label}} ({{ resource?.id }})</h2>\n    <h3>type: {{ontologyInfo?.getLabelForResourceClass(resource?.type)}}</h3>\n\n    <div *ngFor=\"let prop of resource?.properties | key\">\n        <mat-list>\n            <span>{{ontologyInfo?.getLabelForProperty(prop.key)}}</span>\n            <mat-list-item *ngFor=\"let val of prop.value\">\n                <span [ngSwitch]=\"val.getClassName()\">\n                    <kui-color-value *ngSwitchCase=\"KnoraConstants.ReadColorValue\" [valueObject]=\"val\"></kui-color-value>\n                    <kui-text-value-as-html *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"\n                        [bindEvents]=\"true\"></kui-text-value-as-html>\n                    <kui-text-value-as-string *ngSwitchCase=\"KnoraConstants.ReadTextValueAsString\" [valueObject]=\"val\"></kui-text-value-as-string>\n                    <kui-text-value-as-xml *ngSwitchCase=\"KnoraConstants.ReadTextValueAsXml\" [valueObject]=\"val\"></kui-text-value-as-xml>\n                    <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val\"></kui-date-value>\n                    <kui-link-value *ngSwitchCase=\"KnoraConstants.ReadLinkValue\" [valueObject]=\"val\" [ontologyInfo]=\"ontologyInfo\"></kui-link-value>\n                    <kui-integer-value *ngSwitchCase=\"KnoraConstants.ReadIntegerValue\" [valueObject]=\"val\"></kui-integer-value>\n                    <kui-decimal-value *ngSwitchCase=\"KnoraConstants.ReadDecimalValue\" [valueObject]=\"val\"></kui-decimal-value>\n                    <kui-geometry-value *ngSwitchCase=\"KnoraConstants.ReadGeomValue\" [valueObject]=\"val\"></kui-geometry-value>\n                    <kui-uri-value *ngSwitchCase=\"KnoraConstants.ReadUriValue\" [valueObject]=\"val\"></kui-uri-value>\n                    <kui-boolean-value *ngSwitchCase=\"KnoraConstants.ReadBooleanValue\" [valueObject]=\"val\"></kui-boolean-value>\n                    <kui-interval-value *ngSwitchCase=\"KnoraConstants.ReadIntervalValue\" [valueObject]=\"val\"></kui-interval-value>\n                    <kui-list-value *ngSwitchCase=\"KnoraConstants.ReadListValue\" [valueObject]=\"val\"></kui-list-value>\n                    <kui-textfile-value *ngSwitchCase=\"KnoraConstants.TextFileValue\" [valueObject]=\"val\"></kui-textfile-value>\n                    <span *ngSwitchDefault=\"\">Not supported {{val.getClassName()}}</span>\n                </span>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</mat-card>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    ResourceViewComponent.ctorParameters = function () { return [
        { type: ResourceService },
        { type: OntologyCacheService },
        { type: IncomingService }
    ]; };
    ResourceViewComponent.propDecorators = {
        iri: [{ type: Input }]
    };
    return ResourceViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TableViewComponent = /** @class */ (function () {
    function TableViewComponent() {
    }
    /**
     * @return {?}
     */
    TableViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AnnotationComponent, AudioComponent, CollectionComponent, DddComponent, DocumentComponent, LinkObjComponent, MovingImageComponent, ObjectComponent, RegionComponent, ImageRegion, StillImageRepresentation, RequestStillImageRepresentations, GeometryForRegion, StillImageComponent, TextComponent, BooleanValueComponent, ColorValueComponent, DateValueComponent, DecimalValueComponent, ExternalResValueComponent, GeometryValueComponent, GeonameValueComponent, IntegerValueComponent, IntervalValueComponent, LinkValueComponent, ListValueComponent, TextValueAsHtmlComponent, TextValueAsStringComponent, TextValueAsXmlComponent, TextfileValueComponent, UriValueComponent, CompareViewComponent, GraphViewComponent, GridViewComponent, ListViewComponent, PropertiesViewComponent, ResourceViewComponent, TableViewComponent, KuiViewerModule, BooleanValueComponent as ɵu, ColorValueComponent as ɵr, DateValueComponent as ɵp, DecimalValueComponent as ɵs, ExternalResValueComponent as ɵba, GeometryValueComponent as ɵv, GeonameValueComponent as ɵw, IntegerValueComponent as ɵq, IntervalValueComponent as ɵx, LinkValueComponent as ɵz, ListValueComponent as ɵy, TextValueAsHtmlComponent as ɵl, TextValueAsStringComponent as ɵm, TextValueAsXmlComponent as ɵn, TextfileValueComponent as ɵo, UriValueComponent as ɵt, AnnotationComponent as ɵa, AudioComponent as ɵb, CollectionComponent as ɵc, DddComponent as ɵd, DocumentComponent as ɵe, LinkObjComponent as ɵf, MovingImageComponent as ɵg, ObjectComponent as ɵh, RegionComponent as ɵi, StillImageComponent as ɵj, TextComponent as ɵk, CompareViewComponent as ɵbf, GraphViewComponent as ɵbg, GridViewComponent as ɵbc, ListViewComponent as ɵbb, PropertiesViewComponent as ɵbh, ResourceViewComponent as ɵbe, TableViewComponent as ɵbd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25vcmEtdmlld2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9hdWRpby9hdWRpby5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2RkZC9kZGQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Jlc291cmNlL29iamVjdC9vYmplY3QuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcmVzb3VyY2Uvc3RpbGwtaW1hZ2Uvc3RpbGwtaW1hZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGluay12YWx1ZS9saW5rLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3L2dyYXBoLXZpZXcvZ3JhcGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvZ3JpZC12aWV3L2dyaWQtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcHJvcGVydGllcy12aWV3L3Byb3BlcnRpZXMtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Brbm9yYS92aWV3ZXIvbGliL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGtub3JhL3ZpZXdlci9saWIvdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Aa25vcmEvdmlld2VyL2xpYi92aWV3ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hbm5vdGF0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgYW5ub3RhdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1hdWRpbycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGF1ZGlvIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgY29sbGVjdGlvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kZGQnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBkZGQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kb2N1bWVudCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGRvY3VtZW50IHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saW5rLW9iaicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGxpbmstb2JqIHdvcmtzIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtPYmpDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLW1vdmluZy1pbWFnZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG1vdmluZy1pbWFnZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBNb3ZpbmdJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgb2JqZWN0IHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlZ2lvbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHJlZ2lvbiB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgS25vcmFDb25zdGFudHMsXG4gICAgUG9pbnQyRCxcbiAgICBSZWFkR2VvbVZhbHVlLFxuICAgIFJlYWRSZXNvdXJjZSxcbiAgICBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZSxcbiAgICBSZWdpb25HZW9tZXRyeVxufSBmcm9tICdAa25vcmEvY29yZSc7XG5cblxuLy8gVGhpcyBjb21wb25lbnQgbmVlZHMgdGhlIG9wZW5zZWFkcmFnb24gbGlicmFyeSBpdHNlbGYsIGFzIHdlbGwgYXMgdGhlIG9wZW5zZWFkcmFnb24gcGx1Z2luIG9wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXlcbi8vIEJvdGggbGlicmFyaWVzIGFyZSBpbnN0YWxsZWQgdmlhIHBhY2thZ2UuanNvbiwgYW5kIGxvYWRlZCBnbG9iYWxseSB2aWEgdGhlIHNjcmlwdCB0YWcgaW4gLmFuZ3VsYXItY2xpLmpzb25cblxuLy8gT3BlblNlYWRyYWdvbiBkb2VzIG5vdCBleHBvcnQgaXRzZWxmIGFzIEVTNi9FQ01BMjAxNSBtb2R1bGUsXG4vLyBpdCBpcyBsb2FkZWQgZ2xvYmFsbHkgaW4gc2NyaXB0cyB0YWcgb2YgYW5ndWxhci1jbGkuanNvbixcbi8vIHdlIHN0aWxsIG5lZWQgdG8gZGVjbGFyZSB0aGUgbmFtZXNwYWNlIHRvIG1ha2UgVHlwZVNjcmlwdCBjb21waWxlciBoYXBweS5cbmRlY2xhcmUgbGV0IE9wZW5TZWFkcmFnb246IGFueTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaW9uLlxuICogQ29udGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcmVnaW9uIGFuZCBpdHMgZ2VvbWV0cmllcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZ2lvblJlc291cmNlIGEgcmVzb3VyY2Ugb2YgdHlwZSBSZWdpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZWdpb25SZXNvdXJjZTogUmVhZFJlc291cmNlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGdlb21ldHJ5IGluZm9ybWF0aW9uIGJlbG9uZ2luZyB0byB0aGlzIHJlZ2lvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0R2VvbWV0cmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaW9uUmVzb3VyY2UucHJvcGVydGllc1tLbm9yYUNvbnN0YW50cy5oYXNHZW9tZXRyeV0gYXMgUmVhZEdlb21WYWx1ZVtdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGltYWdlIGluY2x1ZGluZyBpdHMgcmVnaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiB7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGlsbEltYWdlRmlsZVZhbHVlIGEgW1tSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZV1dIHJlcHJlc2VudGluZyBhbiBpbWFnZS5cbiAgICAgKiBAcGFyYW0gcmVnaW9ucyB0aGUgcmVnaW9ucyBiZWxvbmdpbmcgdG8gdGhlIGltYWdlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0aWxsSW1hZ2VGaWxlVmFsdWU6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLCByZWFkb25seSByZWdpb25zOiBJbWFnZVJlZ2lvbltdKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHJlcXVlc3RzIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGxvYWQgbW9yZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb2Zmc2V0Q2hhbmdlIHRoZSByZWxhdGl2ZSBjaGFuZ2Ugb2YgdGhlIG9mZnNldCBpbiBvcmRlciB0byBnZXQgbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGZvciB0aGUgcmVzb3VyY2UgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZC4gRWl0aGVyIDEgb3IgLTEuXG4gICAgICogQHBhcmFtIHdoZW5Mb2FkZWRDQiBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gbW9yZSBpbmNvbWluZyBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGhhdmUgYmVlbiByZXF1ZXN0ZWQgYW5kIHRoZSBhbnN3ZXIgYXJyaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgb2Zmc2V0Q2hhbmdlOiBudW1iZXIsIHJlYWRvbmx5IHdoZW5Mb2FkZWRDQjogKG51bWJlck9mSW1hZ2VzOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGdlb21ldHJ5IGJlbG9uZ2luZyB0byBhIHNwZWNpZmljIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Rm9yUmVnaW9uIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb21ldHJ5IHRoZSBnZW9tZXRyaWNhbCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gcmVnaW9uIHRoZSByZWdpb24gdGhlIGdlb21ldHJ5IGJlbG9uZ3MgdG8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCByZWFkb25seSByZWdpb246IFJlYWRSZXNvdXJjZSkge1xuICAgIH1cblxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGNyZWF0ZXMgYSBPcGVuU2VhZHJhZ29uIHZpZXdlciBpbnN0YW5jZS5cbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgUmVhZFJlc291cmNlIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHRvIGJlIHJlbmRlcmVkLlxuICogVGhlIHZpZXdlciB3aWxsIG5vdCByZW5kZXIgUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVzIHdpdGggaXNQcmV2aWV3ID09IHRydWVcbiAqIEBtZW1iZXIgcmVzb3VyY2VzIC0gcmVzb3VyY2VzIGNvbnRhaW5pbmcgKGFtb25nIG90aGVyIHJlc291cmNlcykgdGhlIFN0aWxsSW1hZ2VGaWxlVmFsdWVzIGFuZCBpbmNvbWluZyByZWdpb25zIHRvIGJlIHJlbmRlcmVkLiAoVXNlIGFzIGFuZ3VsYXIgQElucHV0IGRhdGEgYmluZGluZyBwcm9wZXJ0eS4pXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXN0aWxsLWltYWdlJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzdGlsbC1pbWFnZS12aWV3ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbiBsZWZ0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9QUkVWX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIG1haW4gY29udGVudCB3aXRoIG5hdmlnYXRpb24gYW5kIG9zZCB2aWV3ZXIgLS0+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgICAgICA8IS0tIGhlYWRlciB3aXRoIGltYWdlIHRvb2xzIC0tPlxuICAgICAgICA8bWF0LXRvb2xiYXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICAgICAgICAgICAgPCEtLSBob21lIGJ1dHRvbiAtLT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBpZD1cIktVSV9PU0RfSE9NRVwiPjxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8IS0tIHpvb20gYnV0dG9ucyAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGwtcmVtYWluaW5nLXNwYWNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGlkPVwiS1VJX09TRF9aT09NX0lOXCI+PG1hdC1pY29uPmFkZDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX1pPT01fT1VUXCI+PG1hdC1pY29uPnJlbW92ZTwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLSB3aW5kb3cgYnV0dG9uIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbC1yZW1haW5pbmctc3BhY2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gaWQ9XCJLVUlfT1NEX0ZVTExfUEFHRVwiPjxtYXQtaWNvbj5mdWxsc2NyZWVuPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICAgICAgICA8L21hdC10b29sYmFyPlxuXG4gICAgICAgIDwhLS0gb3BlbnNlYWRyYWdvbiAob3NkKSB2aWV3ZXIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvc2QtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIDwhLS0gL29wZW5zZWFkcmFnb24gKG9zZCkgLS0+XG4gICAgICAgIDwhLS0gZm9vdGVyIGZvciBjb3B5cmlnaHQgaW5mbzsgZG93bmxvYWQgYnV0dG9uIGV0Yy4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWF0LWNhcHRpb25cIiBbaW5uZXJIdG1sXT1cImltYWdlQ2FwdGlvblwiPjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uIHJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImZ1bGwtc2l6ZVwiIGlkPVwiS1VJX09TRF9ORVhUX1BBR0VcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19yaWdodDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cblxuPCEtLSBzaW1wbGUgaW1hZ2Ugdmlld2VyIGUuZy4gYXMgYSBwcmV2aWV3IC0tPlxuPCEtLSBUT0RPOiBoYW5kbGUgaW1hZ2VzIGFycmF5IC0tPlxuPCEtLTxpbWcgKm5nSWY9XCJzaW1wbGUgJiYgaW1hZ2VzPy5sZW5ndGggPT09IDE7IGVsc2Ugb3NkVmlld2VyXCIgW3NyY109XCJzaW1wbGVJbWFnZUV4YW1wbGVcIj4tLT5cblxuXG48IS0tXG4gICAgPGRpdj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbWFnZXMubGVuZ3RoID4gMVwiIChjbGljayk9XCJnb3RvTGVmdCgpXCI+Jmx0OyZsdDs8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW1hZ2VzLmxlbmd0aCA+IDFcIiAoY2xpY2spPVwiZ290b1JpZ2h0KClcIj4mZ3Q7Jmd0Ozwvc3Bhbj5cbiAgICA8L2Rpdj5cbi0tPlxuXG5cblxuYCxcbiAgICBzdHlsZXM6IFtgLnN0aWxsLWltYWdlLXZpZXdlcntkaXNwbGF5OmlubGluZS1mbGV4O2hlaWdodDo0MDBweDttYXgtd2lkdGg6ODAwcHg7d2lkdGg6MTAwJX1AbWVkaWEgKG1heC1oZWlnaHQ6NjM2cHgpey5zdGlsbC1pbWFnZS12aWV3ZXJ7aGVpZ2h0OjMwMHB4fX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5uYXZpZ2F0aW9ue2hlaWdodDpjYWxjKDQwMHB4ICsgNjRweCArIDI0cHgpO3dpZHRoOjM2cHh9LnN0aWxsLWltYWdlLXZpZXdlciAubmF2aWdhdGlvbiAubWF0LWJ1dHRvbi5mdWxsLXNpemV7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O3dpZHRoOjM2cHghaW1wb3J0YW50O3BhZGRpbmc6MCFpbXBvcnRhbnQ7bWluLXdpZHRoOjM2cHghaW1wb3J0YW50fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnR7aGVpZ2h0OmNhbGMoNDAwcHggKyA2NHB4ICsgMjRweCk7bWF4LXdpZHRoOmNhbGMoODAwcHggLSAoMiAqIDM2cHgpKTt3aWR0aDpjYWxjKDEwMCUgLSAoMiAqIDM2cHgpKX0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVye2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDo0MDBweH0uc3RpbGwtaW1hZ2Utdmlld2VyIC5jb250ZW50IC5vc2QtY29udGFpbmVyLmZ1bGxzY3JlZW57bWF4LXdpZHRoOjEwMHZ3fS5zdGlsbC1pbWFnZS12aWV3ZXIgLmNvbnRlbnQgLmZvb3RlciBwe2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjojMDAwO2hlaWdodDoyNHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNnB4fS9kZWVwLyAucm9pLXN2Z292ZXJsYXl7b3BhY2l0eTouNDtmaWxsOnRyYW5zcGFyZW50O3N0cm9rZTojMDA2OTVjO3N0cm9rZS13aWR0aDoycHg7dmVjdG9yLWVmZmVjdDpub24tc2NhbGluZy1zdHJva2V9LnJvaS1zdmdvdmVybGF5OmZvY3VzLC9kZWVwLyAucm9pLXN2Z292ZXJsYXk6aG92ZXJ7b3BhY2l0eToxfWBdXG59KVxuZXhwb3J0IGNsYXNzIFN0aWxsSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGltYWdlczogU3RpbGxJbWFnZVJlcHJlc2VudGF0aW9uW107XG4gICAgQElucHV0KCkgaW1hZ2VSYW5nZVN0YXJ0OiBudW1iZXI7ICAvLyBpbmRleCBmaXJzdCBpbWFnZSBvZiB0aGlzLmltYWdlcyB0byBiZSBkaXNwbGF5ZWRcbiAgICBASW5wdXQoKSBpbWFnZVJhbmdlRW5kOiBudW1iZXI7IC8vIGluZGV4IG9mIGxhc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMgdG8gYmUgZGlzcGxheWVkLlxuICAgIEBJbnB1dCgpIGltYWdlQ2hhbmdlSW50ZXJ2YWw6IG51bWJlcjsgLy8gdGhlIHNpemUgb2YgdGhlIGludGVydmFsIHdoZW4gZGlzcGxheWluZyBtb3JlIGltYWdlcyBvZiB0aGlzLmltYWdlc1xuXG4gICAgQElucHV0KCkgaW1hZ2VDYXB0aW9uPzogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGdldEltYWdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVxdWVzdFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnM+KCk7IC8vIHNlbmRzIGEgbWVzc2FnZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCAob2JqZWN0LmNvbXBvbmVudCkgdG8gbG9hZCB0aGUgbmV4dCBvciBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMgKGltYWdlcykgZnJvbSB0aGUgc2VydmVyXG4gICAgQE91dHB1dCgpIHJlZ2lvbkhvdmVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8vIHRoZSBwYWdpbmcgbGltaXQgc2hvdWxkIGJlIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGFwcFxuICAgIHBhZ2luZ0xpbWl0OiBudW1iZXIgPSAyNTtcblxuXG4gICAgcHJpdmF0ZSB2aWV3ZXI7XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzdXJmYWNlIG9mIGEgcmVjdGFuZ3VsYXIgcmVnaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGdlb20gdGhlIHJlZ2lvbidzIGdlb21ldHJ5LlxuICAgICAqIEByZXR1cm5zIHRoZSBzdXJmYWNlLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHN1cmZhY2VPZlJlY3Rhbmd1bGFyUmVnaW9uKGdlb206IFJlZ2lvbkdlb21ldHJ5KTogbnVtYmVyIHtcblxuICAgICAgICBpZiAoZ2VvbS50eXBlICE9PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4cGVjdGVkIHJlY3Rhbmd1bGFyIHJlZ2lvbiwgYnV0ICcgKyBnZW9tLnR5cGUgKyAnIGdpdmVuJyk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHcgPSBNYXRoLm1heChnZW9tLnBvaW50c1swXS54LCBnZW9tLnBvaW50c1sxXS54KSAtIE1hdGgubWluKGdlb20ucG9pbnRzWzBdLngsIGdlb20ucG9pbnRzWzFdLngpO1xuICAgICAgICBjb25zdCBoID0gTWF0aC5tYXgoZ2VvbS5wb2ludHNbMF0ueSwgZ2VvbS5wb2ludHNbMV0ueSkgLSBNYXRoLm1pbihnZW9tLnBvaW50c1swXS55LCBnZW9tLnBvaW50c1sxXS55KTtcblxuICAgICAgICByZXR1cm4gdyAqIGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbGUgc291cmNlcyBmcm9tIHRoZSBnaXZlbiBzZXF1ZW5jZSBvZiBbW1JlYWRTdGlsbEltYWdlRmlsZVZhbHVlXV0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW1hZ2VzVG9EaXNwbGF5IHRoZSBnaXZlbiBmaWxlIHZhbHVlcyB0byBkZSBkaXNwbGF5ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRpbGUgc291cmNlcyB0byBiZSBwYXNzZWQgdG8gT1NEIHZpZXdlci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhpbWFnZXNUb0Rpc3BsYXk6IFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlW10pOiBPYmplY3RbXSB7XG4gICAgICAgIGxldCBpbWFnZVhPZmZzZXQgPSAwO1xuICAgICAgICBsZXQgaW1hZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIGltYWdlc1RvRGlzcGxheSkge1xuICAgICAgICAgICAgY29uc3Qgc2lwaUJhc2VQYXRoID0gaW1hZ2UuaW1hZ2VTZXJ2ZXJJSUlGQmFzZVVSTCArICcvJyArIGltYWdlLmltYWdlRmlsZW5hbWU7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltYWdlLmRpbVg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZS5kaW1ZO1xuXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgT3BlblNlYWRyYWdvbiB0aWxlU291cmNlcyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9vcGVuc2VhZHJhZ29uLmdpdGh1Yi5pby9kb2NzL09wZW5TZWFkcmFnb24uVmlld2VyLmh0bWwjb3BlblxuICAgICAgICAgICAgdGlsZVNvdXJjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gY29uc3RydWN0IElJSUYgdGlsZVNvdXJjZSBjb25maWd1cmF0aW9uIGFjY29yZGluZyB0b1xuICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9paWlmLmlvL2FwaS9pbWFnZS8yLjEvI3RlY2huaWNhbC1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gc2VlIGFsc28gaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIuMC8jYS1pbXBsZW1lbnRhdGlvbi1ub3Rlc1xuICAgICAgICAgICAgICAgICd0aWxlU291cmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAnQGNvbnRleHQnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlLzIvY29udGV4dC5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0BpZCc6IHNpcGlCYXNlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICdwcm9maWxlJzogWydodHRwOi8vaWlpZi5pby9hcGkvaW1hZ2UvMi9sZXZlbDIuanNvbiddLFxuICAgICAgICAgICAgICAgICAgICAncHJvdG9jb2wnOiAnaHR0cDovL2lpaWYuaW8vYXBpL2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpbGVzJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdzY2FsZUZhY3RvcnMnOiBbMSwgMiwgNCwgOCwgMTYsIDMyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IDEwMjRcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd4JzogaW1hZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICd5JzogaW1hZ2VZT2Zmc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1hZ2VYT2Zmc2V0Kys7XG5cbiAgICAgICAgICAgIC8vIDUgaW1hZ2VzIHBlciByb3dcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZiAoaW1hZ2VYT2Zmc2V0ICUgNSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGltYWdlWU9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIGltYWdlWE9mZnNldCA9IDA7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aWxlU291cmNlcztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydpbWFnZXMnXSAmJiBjaGFuZ2VzWydpbWFnZXMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaW1hZ2VzJ10pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkltYWdlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gaW5pdGlhbGlzYXRpb24gaXMgZG9uZSBvbiBmaXJzdCBydW4gb2YgbmdPbkNoYW5nZXNcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYWxsIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlcyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCBSZWFkU3RpbGxJbWFnZUZpbGVWYWx1ZXMgd2VyZSBhZGRlZCB0byB0aGlzLmltYWdlcyBhZnRlciBjcmVhdGlvbi9hc3NpZ25tZW50IG9mIHRoZSB0aGlzLmltYWdlcyBhcnJheS4pXG4gICAgICovXG4gICAgdXBkYXRlSW1hZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb3JlIGltYWdlcyBmcm9tIHRoZSBzZXJ2ZXIgYnkgcmVxdWVzdGluZyB0aGUgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzIGZvciB0aGUgY3VycmVudCByZXNvdXJjZSAoZGVjcmVhc2Ugb2Zmc2V0KS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdvdG9MZWZ0KCkge1xuXG4gICAgICAgIC8vIFRPRE86IG1vdmUgbGVmdCBvbiB0aGlzLmltYWdlc1xuICAgICAgICAvLyBUT0RPOiBpZiBuZWNlc3NhcnksIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyXG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0IC0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsID49IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VTdGFydCAtPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgLT0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuXG4gICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID4gMCkge1xuICAgICAgICAgICAgLy8gZmV3ZXIgcmVtYWluaW5nIGltYWdlcyB0aGFuIGludGVydmFsLCBzaG93IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCAtPSB0aGlzLmltYWdlUmFuZ2VTdGFydDtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ID0gMDtcblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLmltYWdlcyBjYW5ub3QgZGlzcGxheSBtb3JlIGltYWdlcyBvZiBsZW5ndGggaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgbW9yZSBpbWFnZXMgZnJvbSB0aGUgc2VydmVyIHVzaW5nIGEgbmVnYXRpdmUgb2Zmc2V0XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBnZXR0aW5nIHByZXZpb3VzIG9mZnNldCAoYWxzbyBpbiBwYXJlbnQgY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciBieSByZXF1ZXN0aW5nIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyBmb3IgdGhlIGN1cnJlbnQgcmVzb3VyY2UgKGluY3JlYXNlIG9mZnNldCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnb3RvUmlnaHQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VSYW5nZUVuZCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuaW1hZ2VzIGhhcyBtb3JlIGltYWdlcyB0byBkaXNwbGF5XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmFuZ2VFbmQgKyB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWwgPCB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgd2hvbGUgbmV4dCBpbnRlcnZhbCBjYW4gYmUgZGlzcGxheWVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXkgbmV4dCBpbnRlcnZhbGApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZUVuZCArPSB0aGlzLmltYWdlQ2hhbmdlSW50ZXJ2YWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNgKTtcbiAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIGludGVydmFsIGNhbiBiZSBkaXNwbGF5ZWQganVzdCBkaXNwbGF5IHJlbWFpbmluZyBpbWFnZXNcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdEaWZmID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gdGhpcy5pbWFnZVJhbmdlRW5kICsgMTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHJlbWFpbmluZ0RpZmY7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHJlbWFpbmluZ0RpZmY7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZWFjdGl2YXRlIG5leHQgYnV0dG9uXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lvbnMoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAlIHRoaXMucGFnaW5nTGltaXQgPT09IDApIHsgLy8gcGFnaW5nIGFsd2F5cyByZXR1cm5lZCBmdWxsIHJlc3VsdCBsaXN0cywgc28gdGhlcmUgY291bGQgYmUgbW9yZSBkYXRhIHRvIGZldGNoXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVxdWVzdCBtb3JlIGltYWdlc2ApO1xuICAgICAgICAgICAgLy8gdGhpcy5pbWFnZXMgY2Fubm90IGRpc3BsYXkgbW9yZSBpbWFnZXMgb2YgbGVuZ3RoIGludGVydmFsXG4gICAgICAgICAgICAvLyByZXF1ZXN0IG1vcmUgaW1hZ2VzIGZyb20gdGhlIHNlcnZlciB1c2luZyBhIHBvc2l0aXZlIG9mZnNldFxuXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBwYXJlbnQgY29tcG9uZW50IGxvYWRlZCBuZXcgaW1hZ2VzXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IChudW1iZXJPZkltYWdlczogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZJbWFnZXMgPj0gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgaW1hZ2VzIHdlcmUgbG9hZGVkIHRoYW4gYXJlIGFjdHVhbGx5IHRvIGJlIGRpc3BsYXllZFxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlRW5kICs9IHRoaXMuaW1hZ2VDaGFuZ2VJbnRlcnZhbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChudW1iZXJPZkltYWdlcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFtb3VudCBvZiBuZXcgaW1hZ2VzIGluIGxlc3MgdGhhbiB0aGUgaW50ZXJ2YWwsIHNob3cgZXZlcnl0aGluZyB0aGF0IGNhbiBiZSBzaG93blxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSYW5nZVN0YXJ0ICs9IG51bWJlck9mSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gbnVtYmVyT2ZJbWFnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuSW1hZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIG5ldyBpbWFnZXMgY291bGQgYmUgcmV0dXJuZWQsIGRpc3BsYXkgcmVtYWluaW5nIGltYWdlcyAodGhlcmUgYXJlIGZld2VyIHRoYW4gdGhpcy5pbWFnZUNoYW5nZUludGVydmFsKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdJbWFnZXM6IG51bWJlciA9IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEgLSB0aGlzLmltYWdlUmFuZ2VFbmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJhbmdlU3RhcnQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlUmFuZ2VFbmQgKz0gcmVtYWluaW5nSW1hZ2VzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG5vIG5ldyBpbWFnZXMgY2FuIGJlIGxvYWRlZCAtPiBkZWFjdGl2YXRlIGNvbnRyb2wgaW4gR1VJIChub3RlIHRoYXQgcGVyaGFwcyBzdWZmaWNpZW50IHBlcm1pc3Npb25zIHdlcmUgbWlzc2luZywgc28gd2UgYWN0dWFsbHkgY2Fubm90IGJlIHN1cmUgdGhhdCBoaWdoZXIgb2Zmc2V0cyBzdGlsbCBkZWxpdmVyIGltYWdlcylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5JbWFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpb25zKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbXNnID0gbmV3IFJlcXVlc3RTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zKDEsIGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZXMuZW1pdChtc2cpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBtb3JlIGRhdGEgdG8gZmV0Y2hcbiAgICAgICAgICAgIC8vIFRPRE86IGRlYWN0aXZhdGUgbmV4dCBidXR0b25cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhbGwgcmVnaW9ucyB0byBiZSBmb3VuZCBpbiBbW3RoaXMuaW1hZ2VzXV0uXG4gICAgICogKEFsdGhvdWdoIHRoaXMuaW1hZ2VzIGlzIGEgQW5ndWxhciBJbnB1dCBwcm9wZXJ0eSwgdGhlIGJ1aWx0LWluIGNoYW5nZSBkZXRlY3Rpb24gb2YgQW5ndWxhciBkb2VzIG5vdCBkZXRlY3QgY2hhbmdlcyBpbiBjb21wbGV4IG9iamVjdHMgb3IgYXJyYXlzLCBvbmx5IHJlYXNzaWdubWVudCBvZiBvYmplY3RzL2FycmF5cy5cbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaWYgYWRkaXRpb25hbCByZWdpb25zIHdlcmUgYWRkZWQgdG8gdGhlIHJlc291cmNlcy5pbWFnZXMpXG4gICAgICovXG4gICAgdXBkYXRlUmVnaW9ucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFZpZXdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUmVnaW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBPcGVuU2VhZHJhZ29uIHZpZXdlclxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0dXBWaWV3ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29zZC1jb250YWluZXInKVswXTtcbiAgICAgICAgY29uc3Qgb3NkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHZpZXdlckNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dOYXZpZ2F0b3I6IHRydWUsXG4gICAgICAgICAgICB6b29tSW5CdXR0b246ICdLVUlfT1NEX1pPT01fSU4nLFxuICAgICAgICAgICAgem9vbU91dEJ1dHRvbjogJ0tVSV9PU0RfWk9PTV9PVVQnLFxuICAgICAgICAgICAgcHJldmlvdXNCdXR0b246ICdLVUlfT1NEX1BSRVZfUEFHRScsXG4gICAgICAgICAgICBuZXh0QnV0dG9uOiAnS1VJX09TRF9ORVhUX1BBR0UnLFxuICAgICAgICAgICAgaG9tZUJ1dHRvbjogJ0tVSV9PU0RfSE9NRScsXG4gICAgICAgICAgICBmdWxsUGFnZUJ1dHRvbjogJ0tVSV9PU0RfRlVMTF9QQUdFJyxcbiAgICAgICAgICAgIHJvdGF0ZUxlZnRCdXR0b246ICdLVUlfT1NEX1JPVEFURV9MRUZUJywgICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcbiAgICAgICAgICAgIHJvdGF0ZVJpZ2h0QnV0dG9uOiAnS1VJX09TRF9ST1RBVEVfUklHSFQnICAgICAgIC8vIGRvZXNuJ3Qgd29yayB5ZXRcblxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBPcGVuU2VhZHJhZ29uLlZpZXdlcihvc2RPcHRpb25zKTtcbiAgICAgICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignZnVsbC1zY3JlZW4nLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgaWYgKGFyZ3MuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgYXJncy5ldmVudFNvdXJjZS5zdmdPdmVybGF5KCkucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbGwgKG5vbi1wcmV2aWV3KSBpbWFnZXMgaW4gdGhpcy5pbWFnZXMgdG8gdGhlIHZpZXdlci5cbiAgICAgKiBJbWFnZXMgYXJlIHBvc2l0aW9uZWQgaW4gYSBob3Jpem9udGFsIHJvdyBuZXh0IHRvIGVhY2ggb3RoZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuSW1hZ2VzKCk6IHZvaWQge1xuICAgICAgICAvLyBpbWFnZVhPZmZzZXQgY29udHJvbHMgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBzaWRlIG9mIGVhY2ggaW1hZ2UgaW4gdGhlIE9wZW5TZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gICAgICAgIC8vIFRoZSBmaXJzdCBpbWFnZSBoYXMgaXRzIGxlZnQgc2lkZSBhdCB4ID0gMCwgYW5kIGFsbCBpbWFnZXMgYXJlIHNjYWxlZCB0byBoYXZlIGEgd2lkdGggb2YgMSBpbiB2aWV3cG9ydCBjb29yZGluYXRlcy5cbiAgICAgICAgLy8gc2VlIGFsc286IGh0dHBzOi8vb3BlbnNlYWRyYWdvbi5naXRodWIuaW8vZXhhbXBsZXMvdmlld3BvcnQtY29vcmRpbmF0ZXMvXG5cbiAgICAgICAgY29uc3QgZmlsZVZhbHVlczogUmVhZFN0aWxsSW1hZ2VGaWxlVmFsdWVbXSA9IHRoaXMuaW1hZ2VzLm1hcChcbiAgICAgICAgICAgIChpbWcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1nLnN0aWxsSW1hZ2VGaWxlVmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXNwbGF5IG9ubHkgdGhlIGRlZmluZWQgcmFuZ2Ugb2YgdGhpcy5pbWFnZXNcbiAgICAgICAgY29uc3QgdGlsZVNvdXJjZXM6IE9iamVjdFtdID0gU3RpbGxJbWFnZUNvbXBvbmVudC5wcmVwYXJlVGlsZVNvdXJjZXNGcm9tRmlsZVZhbHVlcyhmaWxlVmFsdWVzLnNsaWNlKHRoaXMuaW1hZ2VSYW5nZVN0YXJ0LCB0aGlzLmltYWdlUmFuZ2VFbmQgKyAxKSk7XG5cbiAgICAgICAgdGhpcy52aWV3ZXIuY2xlYXJPdmVybGF5cygpO1xuICAgICAgICB0aGlzLnZpZXdlci5vcGVuKHRpbGVTb3VyY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgUk9JLW92ZXJsYXkgdG8gdGhlIHZpZXdlciBmb3IgZXZlcnkgcmVnaW9uIG9mIGV2ZXJ5IGltYWdlIGluIHRoaXMuaW1hZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5kZXJSZWdpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdlci5jbGVhck92ZXJsYXlzKCk7XG5cbiAgICAgICAgbGV0IGltYWdlWE9mZnNldCA9IDA7IC8vIHNlZSBkb2N1bWVudGF0aW9uIGluIHRoaXMub3BlbkltYWdlcygpIGZvciB0aGUgdXNhZ2Ugb2YgaW1hZ2VYT2Zmc2V0XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZSBvZiB0aGlzLmltYWdlcykge1xuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAoaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1ZIC8gaW1hZ2Uuc3RpbGxJbWFnZUZpbGVWYWx1ZS5kaW1YKTtcblxuICAgICAgICAgICAgLy8gY29sbGVjdCBhbGwgZ2VvbWV0cmllcyBiZWxvbmdpbmcgdG8gdGhpcyBwYWdlXG4gICAgICAgICAgICBsZXQgZ2VvbWV0cmllczogR2VvbWV0cnlGb3JSZWdpb25bXSA9IFtdO1xuICAgICAgICAgICAgaW1hZ2UucmVnaW9ucy5tYXAoKHJlZykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGdlb21zID0gcmVnLmdldEdlb21ldHJpZXMoKTtcblxuICAgICAgICAgICAgICAgIGdlb21zLm1hcCgoZ2VvbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbUZvclJlZyA9IG5ldyBHZW9tZXRyeUZvclJlZ2lvbihnZW9tLmdlb21ldHJ5LCByZWcucmVnaW9uUmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChnZW9tRm9yUmVnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzb3J0IGFsbCBnZW9tZXRyaWVzIGJlbG9uZ2luZyB0byB0aGlzIHBhZ2VcbiAgICAgICAgICAgIGdlb21ldHJpZXMuc29ydCgoZ2VvbTEsIGdlb20yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2VvbTEuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScgJiYgZ2VvbTIuZ2VvbWV0cnkudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMSA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTEuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXJmMiA9IFN0aWxsSW1hZ2VDb21wb25lbnQuc3VyZmFjZU9mUmVjdGFuZ3VsYXJSZWdpb24oZ2VvbTIuZ2VvbWV0cnkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHJlZzEgaXMgc21hbGxlciB0aGFuIHJlZzIsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZzEgdGhlbiBjb21lcyBhZnRlciByZWcyIGFuZCB0aHVzIGlzIHJlbmRlcmVkIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdXJmMSA8IHN1cmYyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW5kZXIgYWxsIGdlb21ldHJpZXMgZm9yIHRoaXMgcGFnZVxuICAgICAgICAgICAgZm9yIChsZXQgZ2VvbSBvZiBnZW9tZXRyaWVzKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU1ZHT3ZlcmxheShnZW9tLnJlZ2lvbi5pZCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCBpbWFnZVhPZmZzZXQsIGdlb20ucmVnaW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWFnZVhPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgYWRkcyBhIFJPSS1vdmVybGF5IHRvIHRoZSB2aWV3ZXJcbiAgICAgKiBAcGFyYW0gcmVnaW9uSXJpIHRoZSBJcmkgb2YgdGhlIHJlZ2lvbi5cbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgUk9JXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gIHRoZSBhc3BlY3RSYXRpbyAoaC93KSBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtICB0aGUgeC1vZmZzZXQgaW4gT3BlbnNlYWRyYWdvbiB2aWV3cG9ydCBjb29yZGluYXRlcyBvZiB0aGUgaW1hZ2Ugb24gd2hpY2ggdGhlIGdlb21ldHJ5IHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0gdG9vbFRpcCAtICB0aGUgdG9vbHRpcCB3aGljaCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIG1vdXNlaG92ZXIgb2YgdGhlIHN2ZyBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdPdmVybGF5KHJlZ2lvbklyaTogc3RyaW5nLCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlciwgdG9vbFRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGdlb21ldHJ5LmxpbmVDb2xvcjtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gZ2VvbWV0cnkubGluZVdpZHRoO1xuXG4gICAgICAgIGxldCBzdmdFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpOyAgLy8geWVzLCB3ZSByZW5kZXIgcmVjdGFuZ2xlcyBhcyBzdmcgcG9seWdvbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50LCBnZW9tZXRyeSwgYXNwZWN0UmF0aW8sIHhPZmZzZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU1ZHQXR0cmlidXRlc1BvbHlnb24oc3ZnRWxlbWVudCwgZ2VvbWV0cnksIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgICAgICAgICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTVkdBdHRyaWJ1dGVzQ2lyY2xlKHN2Z0VsZW1lbnQsIGdlb21ldHJ5LCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogU3RpbGxJbWFnZU9TRFZpZXdlckNvbXBvbmVudC5jcmVhdGVTVkdPdmVybGF5OiB1bmtub3duIGdlb21ldHJ5VHlwZTogJyArIGdlb21ldHJ5LnR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdmdFbGVtZW50LmlkID0gJ3JvaS1zdmdvdmVybGF5LScgKyBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb2ktc3Znb3ZlcmxheScpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnc3Ryb2tlOiAnICsgbGluZUNvbG9yICsgJzsgc3Ryb2tlLXdpZHRoOiAnICsgbGluZVdpZHRoICsgJ3B4OycpO1xuXG4gICAgICAgIC8vIGV2ZW50IHdoZW4gYSByZWdpb24gaXMgaG92ZXJlZCAob3V0cHV0KVxuICAgICAgICBzdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbkhvdmVyZWQuZW1pdChyZWdpb25JcmkpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHN2Z1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd0aXRsZScpO1xuICAgICAgICBzdmdUaXRsZS50ZXh0Q29udGVudCA9IHRvb2xUaXA7XG5cbiAgICAgICAgY29uc3Qgc3ZnR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgICAgICAgc3ZnR3JvdXAuYXBwZW5kQ2hpbGQoc3ZnVGl0bGUpO1xuICAgICAgICBzdmdHcm91cC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy52aWV3ZXIuc3ZnT3ZlcmxheSgpO1xuICAgICAgICBvdmVybGF5Lm5vZGUoKS5hcHBlbmRDaGlsZChzdmdHcm91cCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgbmVjZXNzYXJ5IGF0dHJpYnV0ZXMgdG8gY3JlYXRlIGEgUk9JLW92ZXJsYXkgb2YgdHlwZSAncmVjdGFuZ2xlJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nIChzaWMpKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB4T2Zmc2V0IC0gdGhlIHgtb2Zmc2V0IGluIE9wZW5zZWFkcmFnb24gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlIG9uIHdoaWNoIHRoZSBjaXJjbGUgc2hvdWxkIGJlIHBsYWNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkU1ZHQXR0cmlidXRlc1JlY3RhbmdsZShzdmdFbGVtZW50OiBTVkdFbGVtZW50LCBnZW9tZXRyeTogUmVnaW9uR2VvbWV0cnksIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwb2ludEEgPSBnZW9tZXRyeS5wb2ludHNbMF07XG4gICAgICAgIGNvbnN0IHBvaW50QiA9IGdlb21ldHJ5LnBvaW50c1sxXTtcblxuICAgICAgICAvLyBnZW9tZXRyeS5wb2ludHMgY29udGFpbnMgdHdvIGRpYWdvbmFsbHkgb3Bwb3NlZCBjb3JuZXJzIG9mIHRoZSByZWN0YW5nbGUsIGJ1dCB0aGUgb3JkZXIgb2YgdGhlIGNvcm5lcnMgaXMgYXJiaXRyYXJ5LlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgY29uc3RydWN0IHRoZSB1cHBlcmxlZnQgKFVMKSwgbG93ZXJyaWdodCAoTFIpLCB1cHBlcnJpZ2h0IChVUikgYW5kIGxvd2VybGVmdCAoTEwpIHBvc2l0aW9ucyBvZiB0aGUgY29ybmVycyB3aXRoIG1pbiBhbmQgbWF4IG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVUwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1pbihwb2ludEEueSwgcG9pbnRCLnkpKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25MUiA9IG5ldyBQb2ludDJEKE1hdGgubWF4KHBvaW50QS54LCBwb2ludEIueCksIE1hdGgubWF4KHBvaW50QS55LCBwb2ludEIueSkpO1xuICAgICAgICBjb25zdCBwb3NpdGlvblVSID0gbmV3IFBvaW50MkQoTWF0aC5tYXgocG9pbnRBLngsIHBvaW50Qi54KSwgTWF0aC5taW4ocG9pbnRBLnksIHBvaW50Qi55KSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTEwgPSBuZXcgUG9pbnQyRChNYXRoLm1pbihwb2ludEEueCwgcG9pbnRCLngpLCBNYXRoLm1heChwb2ludEEueSwgcG9pbnRCLnkpKTtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSBbcG9zaXRpb25VTCwgcG9zaXRpb25VUiwgcG9zaXRpb25MUiwgcG9zaXRpb25MTF07XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdwb2x5Z29uJyB0byBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gc3ZnRWxlbWVudCAtIGFuIFNWR0VsZW1lbnQgKHNob3VsZCBoYXZlIHR5cGUgJ3BvbHlnb24nKVxuICAgICAqIEBwYXJhbSBnZW9tZXRyeSAtIHRoZSBnZW9tZXRyeSBkZXNjcmliaW5nIHRoZSBwb2x5Z29uXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNQb2x5Z29uKHN2Z0VsZW1lbnQ6IFNWR0VsZW1lbnQsIGdlb21ldHJ5OiBSZWdpb25HZW9tZXRyeSwgYXNwZWN0UmF0aW86IG51bWJlciwgeE9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpZXdDb29yZFBvaW50cyA9IHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoZ2VvbWV0cnkucG9pbnRzLCBhc3BlY3RSYXRpbywgeE9mZnNldCk7XG4gICAgICAgIGNvbnN0IHBvaW50c1N0cmluZyA9IHRoaXMuY3JlYXRlU1ZHUG9seWdvblBvaW50c0F0dHJpYnV0ZSh2aWV3Q29vcmRQb2ludHMpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgcG9pbnRzU3RyaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBuZWNlc3NhcnkgYXR0cmlidXRlcyB0byBjcmVhdGUgYSBST0ktb3ZlcmxheSBvZiB0eXBlICdjaXJjbGUnIHRvIGEgU1ZHRWxlbWVudFxuICAgICAqIEBwYXJhbSBzdmdFbGVtZW50IC0gYW4gU1ZHRWxlbWVudCAoc2hvdWxkIGhhdmUgdHlwZSAnY2lyY2xlJylcbiAgICAgKiBAcGFyYW0gZ2VvbWV0cnkgLSB0aGUgZ2VvbWV0cnkgZGVzY3JpYmluZyB0aGUgY2lyY2xlXG4gICAgICogQHBhcmFtIGFzcGVjdFJhdGlvIC0gdGhlIGFzcGVjdFJhdGlvIChoL3cpIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0geE9mZnNldCAtIHRoZSB4LW9mZnNldCBpbiBPcGVuc2VhZHJhZ29uIHZpZXdwb3J0IGNvb3JkaW5hdGVzIG9mIHRoZSBpbWFnZSBvbiB3aGljaCB0aGUgY2lyY2xlIHNob3VsZCBiZSBwbGFjZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFNWR0F0dHJpYnV0ZXNDaXJjbGUoc3ZnRWxlbWVudDogU1ZHRWxlbWVudCwgZ2VvbWV0cnk6IFJlZ2lvbkdlb21ldHJ5LCBhc3BlY3RSYXRpbzogbnVtYmVyLCB4T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgdmlld0Nvb3JkUG9pbnRzID0gdGhpcy5pbWFnZTJWaWV3UG9ydENvb3JkcyhnZW9tZXRyeS5wb2ludHMsIGFzcGVjdFJhdGlvLCB4T2Zmc2V0KTtcbiAgICAgICAgY29uc3QgY3ggPSBTdHJpbmcodmlld0Nvb3JkUG9pbnRzWzBdLngpO1xuICAgICAgICBjb25zdCBjeSA9IFN0cmluZyh2aWV3Q29vcmRQb2ludHNbMF0ueSk7XG4gICAgICAgIC8vIGdlb21ldHJ5LnJhZGl1cyBjb250YWlucyBub3QgdGhlIHJhZGl1cyBpdHNlbGYsIGJ1dCB0aGUgY29vcmRpbmF0ZXMgb2YgYSAoYXJiaXRyYXJ5KSBwb2ludCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAvLyBXZSB0aGVyZWZvcmUgaGF2ZSB0byBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgdmVjdG9yIGdlb21ldHJ5LnJhZGl1cyB0byBnZXQgdGhlIGFjdHVhbCByYWRpdXMuIC0+IHNxcnQoeF4yICsgeV4yKVxuICAgICAgICAvLyBTaW5jZSBnZW9tZXRyeS5yYWRpdXMgaGFzIGl0cyB5IGNvb3JkaW5hdGUgc2NhbGVkIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIG11bHRpcGx5IGl0IHdpdGggdGhlIGFzcGVjdFJhdGlvIHRvIGdldCB0byB0aGUgc2NhbGUgdXNlZCBieSBPcGVuc2VhZHJhZ29uLCBhbmFsb2d1b3VzIHRvIHRoaXMuaW1hZ2UyVmlld1BvcnRDb29yZHMoKVxuICAgICAgICBjb25zdCByYWRpdXMgPSBTdHJpbmcoTWF0aC5zcXJ0KGdlb21ldHJ5LnJhZGl1cy54ICogZ2VvbWV0cnkucmFkaXVzLnggKyBhc3BlY3RSYXRpbyAqIGFzcGVjdFJhdGlvICogZ2VvbWV0cnkucmFkaXVzLnkgKiBnZW9tZXRyeS5yYWRpdXMueSkpO1xuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeCk7XG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5KTtcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3InLCByYWRpdXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBhbiBpbWFnZSB0byBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqIHNlZSBhbHNvOiBodHRwczovL29wZW5zZWFkcmFnb24uZ2l0aHViLmlvL2V4YW1wbGVzL3ZpZXdwb3J0LWNvb3JkaW5hdGVzL1xuICAgICAqIEBwYXJhbSBwb2ludHMgLSBhbiBhcnJheSBvZiBwb2ludHMgaW4gY29vcmRpbmF0ZSBzeXN0ZW0gcmVsYXRpdmUgdG8gYW4gaW1hZ2VcbiAgICAgKiBAcGFyYW0gYXNwZWN0UmF0aW8gLSB0aGUgYXNwZWN0UmF0aW8gKGgvdykgb2YgdGhlIGltYWdlXG4gICAgICogQHBhcmFtIHhPZmZzZXQgLSB0aGUgeC1vZmZzZXQgaW4gdmlld3BvcnQgY29vcmRpbmF0ZXMgb2YgdGhlIGltYWdlXG4gICAgICogQHJldHVybnMgLSBhIG5ldyBQb2ludDJEW10gd2l0aCBjb29yZGluYXRlcyBpbiB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzeXN0ZW0gb2YgT3BlbnNlYWRyYWdvblxuICAgICAqL1xuICAgIHByaXZhdGUgaW1hZ2UyVmlld1BvcnRDb29yZHMocG9pbnRzOiBQb2ludDJEW10sIGFzcGVjdFJhdGlvOiBudW1iZXIsIHhPZmZzZXQ6IG51bWJlcik6IFBvaW50MkRbXSB7XG4gICAgICAgIHJldHVybiBwb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDJEKHBvaW50LnggKyB4T2Zmc2V0LCBwb2ludC55ICogYXNwZWN0UmF0aW8pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQgZXhwZWN0ZWQgYnkgdGhlICdwb2ludHMnIGF0dHJpYnV0ZSBvZiBhIFNWR0VsZW1lbnRcbiAgICAgKiBAcGFyYW0gcG9pbnRzIC0gYW4gYXJyYXkgb2YgcG9pbnRzIHRvIGJlIHNlcmlhbGl6ZWQgdG8gYSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyAtIHRoZSBwb2ludHMgc2VyaWFsaXplZCB0byBhIHN0cmluZyBpbiB0aGUgZm9ybWF0IGV4cGVjdGVkIGJ5IHRoZSAncG9pbnRzJyBhdHRyaWJ1dGUgb2YgYSBTVkdFbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTVkdQb2x5Z29uUG9pbnRzQXR0cmlidXRlKHBvaW50czogUG9pbnQyRFtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS54O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnLCc7XG4gICAgICAgICAgICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50c1N0cmluZztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGV4dCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHRleHQgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkQm9vbGVhblZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktYm9vbGVhbi12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPG1hdC1jaGVja2JveCBbY2hlY2tlZF09XCJ2YWx1ZU9iamVjdC5ib29sXCIgZGlzYWJsZWQ9XCJ0cnVlXCI+PC9tYXQtY2hlY2tib3g+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQm9vbGVhblZhbHVlKSB7XG4gICAgICB0aGlzLl9ib29sZWFuVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ib29sZWFuVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9ib29sZWFuVmFsdWVPYmo6IFJlYWRCb29sZWFuVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZENvbG9yVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWNvbG9yLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInZhbHVlT2JqZWN0LmNvbG9ySGV4XCI+e3t2YWx1ZU9iamVjdC5jb2xvckhleH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5tYXQtZm9ybS1maWVsZHt3aWR0aDozNnB4O292ZXJmbG93LXg6dmlzaWJsZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQ29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvclZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvclZhbHVlT2JqOiBSZWFkQ29sb3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlU2Fsc2FoLCBEYXRlU2Fsc2FoLCBQcmVjaXNpb24sIFJlYWREYXRlVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1kYXRlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiAqbmdJZj1cInBlcmlvZDsgZWxzZSBwcmVjaXNlRGF0ZVwiPlxuICAgIHt7ZGF0ZXNbMF0uZGF0ZSB8IGRhdGU6IGRhdGVzWzBdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1swXS5lcmF9fVxuICAgIDwvc3Bhbj5cbiAgICAtIHt7ZGF0ZXNbMV0uZGF0ZSB8IGRhdGU6IGRhdGVzWzFdLmZvcm1hdH19XG4gICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAge3tkYXRlc1sxXS5lcmF9fVxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuICpuZ0lmPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICA8L3NwYW4+XG48L3NwYW4+XG5cbjxuZy10ZW1wbGF0ZSAjcHJlY2lzZURhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0IH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgKHt7ZGF0ZXNbMF0uY2FsZW5kYXJ9fSlcbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgY2FsZW5kYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYWxlbmRhciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlcmEodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lcmEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBlcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VyYTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERhdGVWYWx1ZSkge1xuICAgIHRoaXMuX2RhdGVWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgY29uc3QgZGF0ZU9yUmFuZ2U6IERhdGVTYWxzYWggfCBEYXRlUmFuZ2VTYWxzYWggPSB0aGlzLnZhbHVlT2JqZWN0LmdldERhdGVTYWxzYWgoKTtcbiAgICBpZiAoZGF0ZU9yUmFuZ2UgaW5zdGFuY2VvZiBEYXRlUmFuZ2VTYWxzYWgpIHtcbiAgICAgIC8vIHBlcmlvZCAoc3RhcnQgYW5kIGVuZCBkYXRlcylcbiAgICAgIHRoaXMucGVyaW9kID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2Uuc3RhcnQpLCB0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5lbmQpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2luZ2xlIGRhdGVcbiAgICAgIHRoaXMucGVyaW9kID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGVzID0gW3RoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlKV07XG4gICAgfVxuXG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVWYWx1ZU9iajtcbiAgfVxuXG4gIGRhdGVzOiBEYXRlRm9ybWF0dGVyW107XG4gIHBlcmlvZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2VyYTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGF0ZVZhbHVlT2JqOiBSZWFkRGF0ZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYERhdGVTYWxzYWhgIHRvIGEgSlMgRGF0ZSwgcHJvdmlkaW5nIG5lY2Vzc2FyeSBmb3JtYXR0aW5nIGluZm9ybWF0aW9uLlxuICAgKiBKVUxJQU4gYW5kIEdSRUdPUklBTiBjYWxlbmRhciBhcmUgdGhlIG9ubHkgYXZhaWxhYmxlIGZvciB0aGUgbW9tZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBiZSBjb252ZXJ0ZWQuXG4gICAqIEByZXR1cm4gRGF0ZUZvcm1hdHRlci5cbiAgICovXG4gIGdldEpTRGF0ZShkYXRlOiBEYXRlU2Fsc2FoKTogRGF0ZUZvcm1hdHRlciB7XG5cbiAgICBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi55ZWFyUHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLnRvU3RyaW5nKCkpLFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24ubW9udGhQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ01NTU0gJyArICd5eXl5JyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgMSksIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24uZGF5UHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdsb25nRGF0ZScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KSwgIC8vIDAgYmFzZSBtb250aFxuICAgICAgICBlcmE6IGRhdGUuZXJhLFxuICAgICAgICBjYWxlbmRhcjogZGF0ZS5jYWxlbmRhclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGluY29ycmVjdCBwcmVjaXNpb24gZm9yIGRhdGUnKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbi8qKlxuICogRGF0ZSBzdHJ1Y3R1cmUgZm9yIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVGb3JtYXR0ZXIge1xuICBmb3JtYXQ6IHN0cmluZztcbiAgZGF0ZTogRGF0ZTtcbiAgZXJhOiBzdHJpbmc7XG4gIGNhbGVuZGFyOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkRGVjaW1hbFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGVjaW1hbC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5kZWNpbWFsfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEZWNpbWFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERlY2ltYWxWYWx1ZSkge1xuICAgIHRoaXMuX2RlY2ltYWxWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9kZWNpbWFsVmFsdWVPYmo6IFJlYWREZWNpbWFsVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWV4dGVybmFsLXJlcy12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGV4dGVybmFsLXJlcy12YWx1ZSB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSZXNWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkR2VvbVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbWV0cnktdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuZ2VvbWV0cnlTdHJpbmd9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5VmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEdlb21WYWx1ZSkge1xuICAgIHRoaXMuX2dlb21WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9tVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9nZW9tVmFsdWVPYmo6IFJlYWRHZW9tVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdlb25hbWUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBnZW9uYW1lLXZhbHVlIHdvcmtzIVxuPC9wPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR2VvbmFtZVZhbHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRJbnRlZ2VyVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWludGVnZXItdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5pbnRlZ2VyfX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVnZXJWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVnZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLl9pbnRlZ2VyVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW50ZWdlclZhbHVlT2JqOiBSZWFkSW50ZWdlclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZXJ2YWxWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWludGVydmFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVydmFsU3RhcnR9fSAtIHt7dmFsdWVPYmplY3QuaW50ZXJ2YWxFbmR9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVydmFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVydmFsVmFsdWUpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9pbnRlcnZhbFZhbHVlT2JqOiBSZWFkSW50ZXJ2YWxWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkTGlua1ZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saW5rLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwic2Fsc2FoLWxpbmtcIiAoY2xpY2spPVwicmVmUmVzQ2xpY2tlZCgpXCI+e3tyZWZlcnJlZFJlc291cmNlfX08L2E+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaW5rVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGlua1ZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2VJcmk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSZWFkTGlua1ZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgX2xpbmtWYWx1ZU9iajogUmVhZExpbmtWYWx1ZTtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICByZWZlcnJlZFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHRoaXMuX2xpbmtWYWx1ZU9iaik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZExpc3RWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWxpc3QtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QubGlzdE5vZGVMYWJlbH19PC9zcGFuPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaXN0VmFsdWUpIHtcbiAgICB0aGlzLl9saXN0VmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdFZhbHVlT2JqOiBSZWFkTGlzdFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwsIEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLWh0bWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj57e3ZhbHVlT2JqZWN0Lmh0bWx9fTwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgYmluZEV2ZW50cyh2YWx1ZTogQm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kRXZlbnRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNIdG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWxWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZU9iamVjdC5odG1sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIGh0bWw6IHN0cmluZztcbiAgICBwcml2YXRlIF9odG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc0h0bWw7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50czogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICByZWZSZXNDbGlja2VkKHJlZlJlc291cmNlSXJpOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHJlZlJlc291cmNlSXJpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIGNsaWNrIGV2ZW50IHRvIHN0YW5kb2ZmIGxpbmtzIHRoYXQgc2hvd3MgdGhlIHJlZmVycmVkIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlNhbHNhaExpbmspID49IDBcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZlJlc0NsaWNrZWQodGFyZ2V0RWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbGluayBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldEVsZW1lbnQuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3Quc3RyfX08L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0U3RyaW5nVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFRleHRWYWx1ZUFzWG1sIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLXhtbCcsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LnhtbH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNYbWwpIHtcbiAgICAgICAgdGhpcy5feG1sVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94bWxWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF94bWxWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzWG1sO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRVcmlWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXVyaS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dmFsdWVPYmplY3QudXJpfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e3ZhbHVlT2JqZWN0LnVyaX19PC9hPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJpVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFVyaVZhbHVlKSB7XG4gICAgdGhpcy5fX3VyaVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX191cmlWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX191cmlWYWx1ZU9iajogUmVhZFVyaVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1jb21wYXJlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBjb21wYXJlLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmFwaC12aWV3JyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgZ3JhcGgtdmlldyB3b3JrcyFcbjwvcD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgR3JhcGhWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ncmlkLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBncmlkLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1saXN0LXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBsaXN0LXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1wcm9wZXJ0aWVzLXZpZXcnLFxuICAgIHRlbXBsYXRlOiBgPHA+XG4gICAgcHJvcGVydGllcy12aWV3IHdvcmtzIVxuPC9wPmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBcGlTZXJ2aWNlRXJyb3IsXG4gIEFwaVNlcnZpY2VSZXN1bHQsXG4gIENvbnZlcnRKU09OTEQsXG4gIEltYWdlUmVnaW9uLFxuICBJbmNvbWluZ1NlcnZpY2UsXG4gIEtub3JhQ29uc3RhbnRzLFxuICBPbnRvbG9neUNhY2hlU2VydmljZSxcbiAgT250b2xvZ3lJbmZvcm1hdGlvbixcbiAgUmVhZExpbmtWYWx1ZSxcbiAgUmVhZFByb3BlcnR5SXRlbSxcbiAgUmVhZFJlc291cmNlLFxuICBSZWFkUmVzb3VyY2VzU2VxdWVuY2UsXG4gIFJlYWRTdGlsbEltYWdlRmlsZVZhbHVlLFxuICBSZXNvdXJjZVNlcnZpY2UsXG4gIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbixcbiAgVXRpbHNcbn0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5kZWNsYXJlIGxldCByZXF1aXJlOiBhbnk7XG5jb25zdCBqc29ubGQgPSByZXF1aXJlKCdqc29ubGQnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlc291cmNlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cblxuICAgIDwhLS0gVE9ETzogc3dpdGNoIHRocm91Z2ggdGhlIG1lZGlhIHR5cGUgLS0+XG4gICAgPGt1aS1zdGlsbC1pbWFnZT48L2t1aS1zdGlsbC1pbWFnZT5cbiAgICA8a3VpLW1vdmluZy1pbWFnZT48L2t1aS1tb3ZpbmctaW1hZ2U+XG4gICAgPGt1aS1hbm5vdGF0aW9uPjwva3VpLWFubm90YXRpb24+XG4gICAgPGt1aS1hdWRpbz48L2t1aS1hdWRpbz5cbiAgICA8a3VpLWNvbGxlY3Rpb24+PC9rdWktY29sbGVjdGlvbj5cbiAgICA8a3VpLWRkZD48L2t1aS1kZGQ+XG4gICAgPGt1aS1kb2N1bWVudD48L2t1aS1kb2N1bWVudD5cbiAgICA8a3VpLWxpbmstb2JqPjwva3VpLWxpbmstb2JqPlxuICAgIDxrdWktb2JqZWN0Pjwva3VpLW9iamVjdD5cbiAgICA8a3VpLXJlZ2lvbj48L2t1aS1yZWdpb24+XG4gICAgPGt1aS10ZXh0Pjwva3VpLXRleHQ+XG5cbiAgICA8aDI+bWV0YWRhdGEgZm9yIHJlc291cmNlIHt7IHJlc291cmNlPy5sYWJlbH19ICh7eyByZXNvdXJjZT8uaWQgfX0pPC9oMj5cbiAgICA8aDM+dHlwZToge3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUmVzb3VyY2VDbGFzcyhyZXNvdXJjZT8udHlwZSl9fTwvaDM+XG5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIHJlc291cmNlPy5wcm9wZXJ0aWVzIHwga2V5XCI+XG4gICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgIDxzcGFuPnt7b250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclByb3BlcnR5KHByb3Aua2V5KX19PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IHZhbCBvZiBwcm9wLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW25nU3dpdGNoXT1cInZhbC5nZXRDbGFzc05hbWUoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWNvbG9yLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkQ29sb3JWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1jb2xvci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLWh0bWwgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRUZXh0VmFsdWVBc0h0bWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2JpbmRFdmVudHNdPVwidHJ1ZVwiPjwva3VpLXRleHQtdmFsdWUtYXMtaHRtbD5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS10ZXh0LXZhbHVlLWFzLXN0cmluZyAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzU3RyaW5nXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHQtdmFsdWUtYXMteG1sICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVGV4dFZhbHVlQXNYbWxcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdGV4dC12YWx1ZS1hcy14bWw+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZGF0ZS12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZERhdGVWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1kYXRlLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWxpbmstdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRMaW5rVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCIgW29udG9sb2d5SW5mb109XCJvbnRvbG9neUluZm9cIj48L2t1aS1saW5rLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWludGVnZXItdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRJbnRlZ2VyVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktaW50ZWdlci12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1kZWNpbWFsLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGVjaW1hbFZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLWRlY2ltYWwtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktZ2VvbWV0cnktdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRHZW9tVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktZ2VvbWV0cnktdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktdXJpLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkVXJpVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktdXJpLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLWJvb2xlYW4tdmFsdWUgKm5nU3dpdGNoQ2FzZT1cIktub3JhQ29uc3RhbnRzLlJlYWRCb29sZWFuVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktYm9vbGVhbi12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgPGt1aS1pbnRlcnZhbC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZEludGVydmFsVmFsdWVcIiBbdmFsdWVPYmplY3RdPVwidmFsXCI+PC9rdWktaW50ZXJ2YWwtdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDxrdWktbGlzdC12YWx1ZSAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZExpc3RWYWx1ZVwiIFt2YWx1ZU9iamVjdF09XCJ2YWxcIj48L2t1aS1saXN0LXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8a3VpLXRleHRmaWxlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5UZXh0RmlsZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbFwiPjwva3VpLXRleHRmaWxlLXZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0PVwiXCI+Tm90IHN1cHBvcnRlZCB7e3ZhbC5nZXRDbGFzc05hbWUoKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgPC9tYXQtbGlzdD5cbiAgICA8L2Rpdj5cblxuPC9tYXQtY2FyZD5cbmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpcmk6IHN0cmluZyA9ICdodHRwOi8vcmRmaC5jaC84YmUxYjdjZjcxMDMnO1xuXG4gIG9udG9sb2d5SW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjsgLy8gb250b2xvZ3kgaW5mb3JtYXRpb24gYWJvdXQgcmVzb3VyY2UgY2xhc3NlcyBhbmQgcHJvcGVydGllcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2Ugd2l0aCBJcmkgYGlyaWBcbiAgcmVzb3VyY2U6IFJlYWRSZXNvdXJjZTsgLy8gdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZFxuICBlcnJvck1lc3NhZ2U6IGFueTtcblxuICBLbm9yYUNvbnN0YW50cyA9IEtub3JhQ29uc3RhbnRzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3Jlc291cmNlU2VydmljZTogUmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2NhY2hlU2VydmljZTogT250b2xvZ3lDYWNoZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfaW5jb21pbmdTZXJ2aWNlOiBJbmNvbWluZ1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0UmVzb3VyY2UodGhpcy5pcmkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXNvdXJjZShpcmk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc291cmNlU2VydmljZS5nZXRSZXNvdXJjZShpcmkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzdWx0OiBBcGlTZXJ2aWNlUmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdDogJywgcmVzdWx0LmJvZHkpO1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0ganNvbmxkLnByb21pc2VzO1xuICAgICAgICAgIC8vIGNvbXBhY3QgSlNPTi1MRCB1c2luZyBhbiBlbXB0eSBjb250ZXh0OiBleHBhbmRzIGFsbCBJcmlzXG4gICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHByb21pc2VzLmNvbXBhY3QocmVzdWx0LmJvZHksIHt9KTtcblxuICAgICAgICAgIHByb21pc2UudGhlbigoY29tcGFjdGVkKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlU2VxOiBSZWFkUmVzb3VyY2VzU2VxdWVuY2UgPSBDb252ZXJ0SlNPTkxELmNyZWF0ZVJlYWRSZXNvdXJjZXNTZXF1ZW5jZUZyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgZXhhY3RseSBvbmUgcmVzb3VyY2UgaXMgcmV0dXJuZWRcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZVNlcS5yZXNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgICAgICAgLy8gZ2V0IHJlc291cmNlIGNsYXNzIElyaXMgZnJvbSByZXNwb25zZVxuICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZUNsYXNzSXJpczogc3RyaW5nW10gPSBDb252ZXJ0SlNPTkxELmdldFJlc291cmNlQ2xhc3Nlc0Zyb21Kc29uTEQoY29tcGFjdGVkKTtcblxuICAgICAgICAgICAgICAvLyByZXF1ZXN0IG9udG9sb2d5IGluZm9ybWF0aW9uIGFib3V0IHJlc291cmNlIGNsYXNzIElyaXMgKHByb3BlcnRpZXMgYXJlIGltcGxpZWQpXG4gICAgICAgICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5nZXRSZXNvdXJjZUNsYXNzRGVmaW5pdGlvbnMocmVzb3VyY2VDbGFzc0lyaXMpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzb3VyY2VDbGFzc0luZm9zOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgb250b2xvZ3kgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgIHRoaXMub250b2xvZ3lJbmZvID0gcmVzb3VyY2VDbGFzc0luZm9zOyAvLyBjb25zb2xlLmxvZygnaW5pdGlhbGl6YXRpb24gb2Ygb250b2xvZ3lJbmZvOiAnLCB0aGlzLm9udG9sb2d5SW5mbyk7ID4gb2JqZWN0IHJlY2VpdmVkXG5cbiAgICAgICAgICAgICAgICAgIC8vIHByZXBhcmUgYSBwb3NzaWJseSBhdHRhY2hlZCBpbWFnZSBmaWxlIHRvIGJlIGRpc3BsYXllZFxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb2xsZWN0SW1hZ2VzQW5kUmVnaW9uc0ZvclJlc291cmNlKHJlc291cmNlU2VxLnJlc291cmNlc1swXSk7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZVNlcS5yZXNvdXJjZXNbMF07XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzb3VyY2U6ICcsIHRoaXMucmVzb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlcXVlc3RJbmNvbWluZ1Jlc291cmNlcygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2FjaGUgcmVxdWVzdCBmYWlsZWQ6ICcgKyBlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gZXhhY3RseSBvbmUgcmVzb3VyY2Ugd2FzIGV4cGVjdGVkLCBidXQgcmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aCAhPSAxXG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEV4YWN0bHkgb25lIHJlc291cmNlIHdhcyBleHBlY3RlZCwgYnV0ICR7cmVzb3VyY2VTZXEucmVzb3VyY2VzLmxlbmd0aH0gcmVzb3VyY2UocykgZ2l2ZW4uYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdKU09OTEQgb2YgZnVsbCByZXNvdXJjZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBleHBhbmRlZDonICsgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaVNlcnZpY2VFcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjtcbiAgICAgICAgICAvLyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGFibGUtdmlldycsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIHRhYmxlLXZpZXcgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEt1aUFjdGlvbk1vZHVsZSB9IGZyb20gJ0Brbm9yYS9hY3Rpb24nO1xuaW1wb3J0IHsgS3VpQ29yZU1vZHVsZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhblZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2NvbG9yLXZhbHVlL2NvbG9yLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVjaW1hbFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9kZWNpbWFsLXZhbHVlL2RlY2ltYWwtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5VmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2dlb21ldHJ5LXZhbHVlL2dlb21ldHJ5LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9uYW1lVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZWdlclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9pbnRlZ2VyLXZhbHVlL2ludGVnZXItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVydmFsVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9saXN0LXZhbHVlL2xpc3QtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRmaWxlVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHRmaWxlLXZhbHVlL3RleHRmaWxlLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdWRpb0NvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvYXVkaW8vYXVkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtPYmpDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb3ZpbmdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3JlZ2lvbi9yZWdpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0aWxsSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3N0aWxsLWltYWdlL3N0aWxsLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhcmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdyYXBoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9ncmFwaC12aWV3L2dyYXBoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2dyaWQtdmlldy9ncmlkLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb3BlcnRpZXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Byb3BlcnRpZXMtdmlldy9wcm9wZXJ0aWVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc291cmNlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9yZXNvdXJjZS12aWV3L3Jlc291cmNlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50JztcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgS3VpQ29yZU1vZHVsZSxcbiAgICAgICAgS3VpQWN0aW9uTW9kdWxlLFxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdExpc3RNb2R1bGUsXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQXVkaW9Db21wb25lbnQsXG4gICAgICAgIENvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIERkZENvbXBvbmVudCxcbiAgICAgICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgICAgIExpbmtPYmpDb21wb25lbnQsXG4gICAgICAgIE1vdmluZ0ltYWdlQ29tcG9uZW50LFxuICAgICAgICBPYmplY3RDb21wb25lbnQsXG4gICAgICAgIFJlZ2lvbkNvbXBvbmVudCxcbiAgICAgICAgU3RpbGxJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgVGV4dENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQsXG4gICAgICAgIFRleHRmaWxlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERhdGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZWdlclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBDb2xvclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEZWNpbWFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIFVyaVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBCb29sZWFuVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb21ldHJ5VmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb25hbWVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaW5rVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmlkVmlld0NvbXBvbmVudCxcbiAgICAgICAgVGFibGVWaWV3Q29tcG9uZW50LFxuICAgICAgICBSZXNvdXJjZVZpZXdDb21wb25lbnQsXG4gICAgICAgIENvbXBhcmVWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmFwaFZpZXdDb21wb25lbnQsXG4gICAgICAgIFByb3BlcnRpZXNWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG5cbiAgICAgICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQXVkaW9Db21wb25lbnQsXG4gICAgICAgIENvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIERkZENvbXBvbmVudCxcbiAgICAgICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgICAgIExpbmtPYmpDb21wb25lbnQsXG4gICAgICAgIE1vdmluZ0ltYWdlQ29tcG9uZW50LFxuICAgICAgICBPYmplY3RDb21wb25lbnQsXG4gICAgICAgIFJlZ2lvbkNvbXBvbmVudCxcbiAgICAgICAgU3RpbGxJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgVGV4dENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQsXG4gICAgICAgIFRleHRmaWxlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERhdGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZWdlclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBDb2xvclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEZWNpbWFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIFVyaVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBCb29sZWFuVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb21ldHJ5VmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb25hbWVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaW5rVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmlkVmlld0NvbXBvbmVudCxcbiAgICAgICAgVGFibGVWaWV3Q29tcG9uZW50LFxuICAgICAgICBSZXNvdXJjZVZpZXdDb21wb25lbnQsXG4gICAgICAgIENvbXBhcmVWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmFwaFZpZXdDb21wb25lbnQsXG4gICAgICAgIFByb3BlcnRpZXNWaWV3Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBLdWlWaWV3ZXJNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQVlFO0tBQWlCOzs7O0lBRWpCLHNDQUFROzs7SUFBUjtLQUNDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGtDQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7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