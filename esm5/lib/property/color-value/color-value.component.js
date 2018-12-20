import { Component, Input } from '@angular/core';
import { ReadColorValue } from '@knora/core';
var ColorValueComponent = /** @class */ (function () {
    function ColorValueComponent() {
    }
    Object.defineProperty(ColorValueComponent.prototype, "valueObject", {
        get: function () {
            return this._colorValueObj;
        },
        set: function (value) {
            this._colorValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    ColorValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-color-value',
                    template: "<span [style.background-color]=\"valueObject.colorHex\">{{valueObject.colorHex}}</span>",
                    styles: [".fill-remaining-space{flex:1 1 auto}.mat-form-field{width:36px;overflow-x:visible}"]
                },] },
    ];
    /** @nocollapse */
    ColorValueComponent.ctorParameters = function () { return []; };
    ColorValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return ColorValueComponent;
}());
export { ColorValueComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QztJQWtCSTtJQUNBLENBQUM7SUFaRCxzQkFDSSw0Q0FBVzthQUlmO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFQRCxVQUNnQixLQUFxQjtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTs7Z0JBVkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSx5RkFBdUY7b0JBQ2pHLE1BQU0sRUFBRSxDQUFDLG9GQUFvRixDQUFDO2lCQUNqRzs7Ozs7OEJBR0ksS0FBSzs7SUFjViwwQkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRDb2xvclZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1jb2xvci12YWx1ZScsXG4gICAgdGVtcGxhdGU6IGA8c3BhbiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJ2YWx1ZU9iamVjdC5jb2xvckhleFwiPnt7dmFsdWVPYmplY3QuY29sb3JIZXh9fTwvc3Bhbj5gLFxuICAgIHN0eWxlczogW2AuZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MzZweDtvdmVyZmxvdy14OnZpc2libGV9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZENvbG9yVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29sb3JWYWx1ZU9iaiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29sb3JWYWx1ZU9iajogUmVhZENvbG9yVmFsdWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cbiJdfQ==