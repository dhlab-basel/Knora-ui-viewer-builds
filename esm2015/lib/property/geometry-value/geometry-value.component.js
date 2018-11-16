/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadGeomValue } from '@knora/core';
export class GeometryValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._geomValueObj = value;
    }
    /**
     * @return {?}
     */
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
if (false) {
    /** @type {?} */
    GeometryValueComponent.prototype._geomValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnktdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPNUMsTUFBTTtJQWFKLGlCQUFpQjs7Ozs7SUFYakIsSUFDSSxXQUFXLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw2Q0FBNkM7Z0JBQ3ZELE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQzdFOzs7OzswQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEdlb21WYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdlb21ldHJ5LXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0Lmdlb21ldHJ5U3RyaW5nfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeVZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRHZW9tVmFsdWUpIHtcbiAgICB0aGlzLl9nZW9tVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvbVZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VvbVZhbHVlT2JqOiBSZWFkR2VvbVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==