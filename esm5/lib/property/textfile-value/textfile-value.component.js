/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadTextFileValue } from '@knora/core';
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
export { TextfileValueComponent };
if (false) {
    /** @type {?} */
    TextfileValueComponent.prototype._textfileValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpbGUtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFvQjlDO0tBQWlCO0lBWGpCLHNCQUNJLCtDQUFXOzs7O1FBSWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9COzs7OztRQVBELFVBQ2dCLEtBQXdCO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDRGQUF3RjtvQkFDbEcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozs4QkFHRSxLQUFLOztpQ0FWUjs7U0FRYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==