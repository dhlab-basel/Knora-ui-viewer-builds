/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadIntervalValue } from '@knora/core';
var IntervalValueComponent = /** @class */ (function () {
    function IntervalValueComponent() {
    }
    Object.defineProperty(IntervalValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._intervalValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._intervalValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    IntervalValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-interval-value',
                    template: "<span>{{valueObject.intervalStart}} - {{valueObject.intervalEnd}}</span>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    IntervalValueComponent.ctorParameters = function () { return []; };
    IntervalValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return IntervalValueComponent;
}());
export { IntervalValueComponent };
if (false) {
    /** @type {?} */
    IntervalValueComponent.prototype._intervalValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFvQjlDO0tBQWlCO0lBWGpCLHNCQUNJLCtDQUFXOzs7O1FBSWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9COzs7OztRQVBELFVBQ2dCLEtBQXdCO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDBFQUEwRTtvQkFDcEYsTUFBTSxFQUFFLENBQUMsa0VBQWtFLENBQUM7aUJBQzdFOzs7Ozs4QkFHRSxLQUFLOztpQ0FWUjs7U0FRYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkSW50ZXJ2YWxWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWludGVydmFsLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8c3Bhbj57e3ZhbHVlT2JqZWN0LmludGVydmFsU3RhcnR9fSAtIHt7dmFsdWVPYmplY3QuaW50ZXJ2YWxFbmR9fTwvc3Bhbj5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVydmFsVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZEludGVydmFsVmFsdWUpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF9pbnRlcnZhbFZhbHVlT2JqOiBSZWFkSW50ZXJ2YWxWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=