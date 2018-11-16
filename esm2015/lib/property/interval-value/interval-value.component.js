/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadIntervalValue } from '@knora/core';
export class IntervalValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._intervalValueObj = value;
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._intervalValueObj;
    }
}
IntervalValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-interval-value',
                template: `<span>{{valueObject.intervalStart}} - {{valueObject.intervalEnd}}</span>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
IntervalValueComponent.ctorParameters = () => [];
IntervalValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IntervalValueComponent.prototype._intervalValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9oRCxNQUFNO0lBYUosaUJBQWlCOzs7OztJQVhqQixJQUNJLFdBQVcsQ0FBQyxLQUF3QjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSwwRUFBMEU7Z0JBQ3BGLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQzdFOzs7OzswQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZEludGVydmFsVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1pbnRlcnZhbC12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5pbnRlcnZhbFN0YXJ0fX0gLSB7e3ZhbHVlT2JqZWN0LmludGVydmFsRW5kfX08L3NwYW4+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcnZhbFZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRJbnRlcnZhbFZhbHVlKSB7XG4gICAgdGhpcy5faW50ZXJ2YWxWYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbFZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWxWYWx1ZU9iajogUmVhZEludGVydmFsVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19