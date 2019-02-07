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
                    styles: [".fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}.mat-form-field{width:36px;overflow-x:visible}"]
                },] },
    ];
    ColorValueComponent.ctorParameters = function () { return []; };
    ColorValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return ColorValueComponent;
}());
export { ColorValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QztJQWtCSTtJQUNBLENBQUM7SUFaRCxzQkFDSSw0Q0FBVzthQUlmO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFQRCxVQUNnQixLQUFxQjtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTs7Z0JBVkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSx5RkFBdUY7b0JBQ2pHLE1BQU0sRUFBRSxDQUFDLHlYQUF5WCxDQUFDO2lCQUN0WTs7Ozs4QkFHSSxLQUFLOztJQWNWLDBCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZENvbG9yVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWNvbG9yLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cInZhbHVlT2JqZWN0LmNvbG9ySGV4XCI+e3t2YWx1ZU9iamVjdC5jb2xvckhleH19PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbYC5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfS5jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lmxpbmt7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3JtYWwhaW1wb3J0YW50O21heC13aWR0aDo5NSV9Lmxpc3QtdmlldyAubWF0LWxpc3QtaXRlbXtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjQwcHg7cGFkZGluZzo4cHggMH0ubHYtaHRtbC10ZXh0e21heC1oZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59Lmx2LWxhYmVse2ZvbnQtd2VpZ2h0OjcwMCFpbXBvcnRhbnR9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjM2cHg7b3ZlcmZsb3cteDp2aXNpYmxlfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yVmFsdWVDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRDb2xvclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbG9yVmFsdWVPYmo6IFJlYWRDb2xvclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iXX0=