/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadTextValueAsXml } from '@knora/core';
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
export { TextValueAsXmlComponent };
if (false) {
    /** @type {?} */
    TextValueAsXmlComponent.prototype._xmlValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMteG1sL3RleHQtdmFsdWUtYXMteG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDOztJQW9CN0M7S0FDQztJQVpELHNCQUNJLGdEQUFXOzs7O1FBSWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM1Qjs7Ozs7UUFQRCxVQUNnQixLQUF5QjtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7O09BQUE7O2dCQVZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7Ozs7OzhCQUdJLEtBQUs7O2tDQVZWOztTQVFhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRUZXh0VmFsdWVBc1htbCB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktdGV4dC12YWx1ZS1hcy14bWwnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC54bWx9fTwvc3Bhbj5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1htbENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzWG1sKSB7XG4gICAgICAgIHRoaXMuX3htbFZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5feG1sVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfeG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1htbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIl19