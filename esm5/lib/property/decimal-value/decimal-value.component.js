/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadDecimalValue } from '@knora/core';
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
export { DecimalValueComponent };
if (false) {
    /** @type {?} */
    DecimalValueComponent.prototype._decimalValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2RlY2ltYWwtdmFsdWUvZGVjaW1hbC12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFvQjdDO0tBQWlCO0lBWGpCLHNCQUNJLDhDQUFXOzs7O1FBSWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCOzs7OztRQVBELFVBQ2dCLEtBQXVCO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7U0FDL0I7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7aUJBQzdFOzs7Ozs4QkFHRSxLQUFLOztnQ0FWUjs7U0FRYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkRGVjaW1hbFZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGVjaW1hbC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5kZWNpbWFsfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEZWNpbWFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZERlY2ltYWxWYWx1ZSkge1xuICAgIHRoaXMuX2RlY2ltYWxWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWNpbWFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9kZWNpbWFsVmFsdWVPYmo6IFJlYWREZWNpbWFsVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19