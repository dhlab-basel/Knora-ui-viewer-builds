/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadBooleanValue } from '@knora/core';
export class BooleanValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._booleanValueObj = value;
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._booleanValueObj;
    }
}
BooleanValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-boolean-value',
                template: `<mat-checkbox [checked]="valueObject.bool" disabled="true"></mat-checkbox>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
BooleanValueComponent.ctorParameters = () => [];
BooleanValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BooleanValueComponent.prototype._booleanValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVEvQyxNQUFNO0lBYUosaUJBQWlCOzs7OztJQVhqQixJQUNJLFdBQVcsQ0FBQyxLQUF1QjtRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUNoQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTtDQUNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQzdFOzs7OzswQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEJvb2xlYW5WYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWJvb2xlYW4tdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxtYXQtY2hlY2tib3ggW2NoZWNrZWRdPVwidmFsdWVPYmplY3QuYm9vbFwiIGRpc2FibGVkPVwidHJ1ZVwiPjwvbWF0LWNoZWNrYm94PlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEJvb2xlYW5WYWx1ZSkge1xuICAgICAgdGhpcy5fYm9vbGVhblZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYm9vbGVhblZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfYm9vbGVhblZhbHVlT2JqOiBSZWFkQm9vbGVhblZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==