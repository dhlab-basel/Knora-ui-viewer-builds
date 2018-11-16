/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadColorValue } from '@knora/core';
export class ColorValueComponent {
    constructor() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._colorValueObj = value;
    }
    /**
     * @return {?}
     */
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
if (false) {
    /** @type {?} */
    ColorValueComponent.prototype._colorValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPN0MsTUFBTTtJQWFGO0tBQ0M7Ozs7O0lBWkQsSUFDSSxXQUFXLENBQUMsS0FBcUI7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM5Qjs7O1lBZEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSx1RkFBdUY7Z0JBQ2pHLE1BQU0sRUFBRSxDQUFDLG9GQUFvRixDQUFDO2FBQ2pHOzs7OzswQkFHSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZENvbG9yVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWNvbG9yLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInZhbHVlT2JqZWN0LmNvbG9ySGV4XCI+e3t2YWx1ZU9iamVjdC5jb2xvckhleH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5tYXQtZm9ybS1maWVsZHt3aWR0aDozNnB4O292ZXJmbG93LXg6dmlzaWJsZX1gXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkQ29sb3JWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2xvclZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvclZhbHVlT2JqOiBSZWFkQ29sb3JWYWx1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIl19