/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadGeomValue } from '@knora/core';
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
export { GeometryValueComponent };
if (false) {
    /** @type {?} */
    GeometryValueComponent.prototype._geomValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBb0IxQztLQUFpQjtJQVhqQixzQkFDSSwrQ0FBVzs7OztRQUlmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7Ozs7O1FBUEQsVUFDZ0IsS0FBb0I7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDZDQUE2QztvQkFDdkQsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7aUJBQzdFOzs7Ozs4QkFHRSxLQUFLOztpQ0FWUjs7U0FRYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkR2VvbVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZ2VvbWV0cnktdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3QuZ2VvbWV0cnlTdHJpbmd9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5VmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEdlb21WYWx1ZSkge1xuICAgIHRoaXMuX2dlb21WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9tVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9nZW9tVmFsdWVPYmo6IFJlYWRHZW9tVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19