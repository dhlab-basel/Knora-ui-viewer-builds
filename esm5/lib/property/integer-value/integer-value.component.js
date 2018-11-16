/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadIntegerValue } from '@knora/core';
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
export { IntegerValueComponent };
if (false) {
    /** @type {?} */
    IntegerValueComponent.prototype._integerValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdlci12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2ludGVnZXItdmFsdWUvaW50ZWdlci12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFvQjNDO0tBQ0M7SUFaRCxzQkFDSSw4Q0FBVzs7OztRQUlmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNoQzs7Ozs7UUFQRCxVQUNnQixLQUF1QjtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDOzs7T0FBQTs7Z0JBVkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2lCQUMvRTs7Ozs7OEJBR0ksS0FBSzs7Z0NBVlY7O1NBUWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEludGVnZXJWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktaW50ZWdlci12YWx1ZScsXG4gICAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVnZXJ9fTwvc3Bhbj5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZWdlclZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkSW50ZWdlclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ludGVnZXJWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVnZXJWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbnRlZ2VyVmFsdWVPYmo6IFJlYWRJbnRlZ2VyVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cbiJdfQ==