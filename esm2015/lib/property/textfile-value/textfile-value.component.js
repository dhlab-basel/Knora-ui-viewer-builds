/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ReadTextFileValue } from '@knora/core';
export class TextfileValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._textfileValueObj = value;
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._textfileValueObj;
    }
}
TextfileValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-textfile-value',
                template: `<a target="_blank" href="{{valueObject.textFileURL}}">{{valueObject.textFilename}}</a>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextfileValueComponent.ctorParameters = () => [];
TextfileValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextfileValueComponent.prototype._textfileValueObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpbGUtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9oRCxNQUFNO0lBYUosaUJBQWlCOzs7OztJQVhqQixJQUNJLFdBQVcsQ0FBQyxLQUF3QjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSx3RkFBd0Y7Z0JBQ2xHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7OzswQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFRleHRGaWxlVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS10ZXh0ZmlsZS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cInt7dmFsdWVPYmplY3QudGV4dEZpbGVVUkx9fVwiPnt7dmFsdWVPYmplY3QudGV4dEZpbGVuYW1lfX08L2E+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRmaWxlVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRGaWxlVmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ZmlsZVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRmaWxlVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF90ZXh0ZmlsZVZhbHVlT2JqOiBSZWFkVGV4dEZpbGVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=