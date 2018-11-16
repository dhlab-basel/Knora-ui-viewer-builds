/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadUriValue } from '@knora/core';
export class UriValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this.__uriValueObj = value;
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this.__uriValueObj;
    }
}
UriValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-uri-value',
                template: `<a href="{{valueObject.uri}}" target="_blank">{{valueObject.uri}}</a>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
UriValueComponent.ctorParameters = () => [];
UriValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UriValueComponent.prototype.__uriValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPM0MsTUFBTTtJQWFKLGlCQUFpQjs7Ozs7SUFYakIsSUFDSSxXQUFXLENBQUMsS0FBbUI7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsdUVBQXVFO2dCQUNqRixNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQzthQUM3RTs7Ozs7MEJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRVcmlWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXVyaS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgaHJlZj1cInt7dmFsdWVPYmplY3QudXJpfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57e3ZhbHVlT2JqZWN0LnVyaX19PC9hPmAsXG4gIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJpVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFVyaVZhbHVlKSB7XG4gICAgdGhpcy5fX3VyaVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX191cmlWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX191cmlWYWx1ZU9iajogUmVhZFVyaVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==