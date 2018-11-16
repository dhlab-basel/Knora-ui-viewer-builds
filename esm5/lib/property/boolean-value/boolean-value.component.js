/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadBooleanValue } from '@knora/core';
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
export { BooleanValueComponent };
if (false) {
    /** @type {?} */
    BooleanValueComponent.prototype._booleanValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFxQjdDO0tBQWlCO0lBWGpCLHNCQUNJLDhDQUFXOzs7O1FBSWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQ2hDOzs7OztRQVBELFVBQ2dCLEtBQXVCO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7U0FDakM7OztPQUFBOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtGQUNYO29CQUNDLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2lCQUM3RTs7Ozs7OEJBR0UsS0FBSzs7Z0NBWFI7O1NBU2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEJvb2xlYW5WYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWJvb2xlYW4tdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxtYXQtY2hlY2tib3ggW2NoZWNrZWRdPVwidmFsdWVPYmplY3QuYm9vbFwiIGRpc2FibGVkPVwidHJ1ZVwiPjwvbWF0LWNoZWNrYm94PlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEJvb2xlYW5WYWx1ZSkge1xuICAgICAgdGhpcy5fYm9vbGVhblZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYm9vbGVhblZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfYm9vbGVhblZhbHVlT2JqOiBSZWFkQm9vbGVhblZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==