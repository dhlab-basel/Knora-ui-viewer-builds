/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadTextValueAsString } from '@knora/core';
export class TextValueAsStringComponent {
    constructor() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._textStringValueObj = value;
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._textStringValueObj;
    }
}
TextValueAsStringComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text-value-as-string',
                template: `<span>{{valueObject.str}}</span>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextValueAsStringComponent.ctorParameters = () => [];
TextValueAsStringComponent.propDecorators = {
    valueObject: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextValueAsStringComponent.prototype._textStringValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtc3RyaW5nL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUXBELE1BQU07SUFhRjtLQUNDOzs7OztJQVpELElBQ0ksV0FBVyxDQUFDLEtBQTRCO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0tBQ25DOzs7WUFmSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFO0NBQ2I7Z0JBQ0csTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2Y7Ozs7OzBCQUdJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuPnt7dmFsdWVPYmplY3Quc3RyfX08L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHRTdHJpbmdWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90ZXh0U3RyaW5nVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc1N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxufVxuIl19