import { Component, Input } from '@angular/core';
import { ReadColorValue } from '@knora/core';
export class ColorValueComponent {
    constructor() {
    }
    set valueObject(value) {
        this._colorValueObj = value;
    }
    get valueObject() {
        return this._colorValueObj;
    }
}
ColorValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-color-value',
                template: `<span [style.background-color]="valueObject.colorHex">{{valueObject.colorHex}}</span>`,
                styles: [`.fill-remaining-space{flex:1 1 auto}.mat-form-field{width:36px;overflow-x:visible}`]
            },] },
];
/** @nocollapse */
ColorValueComponent.ctorParameters = () => [];
ColorValueComponent.propDecorators = {
    valueObject: [{ type: Input }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU83QyxNQUFNO0lBYUY7SUFDQSxDQUFDO0lBWkQsSUFDSSxXQUFXLENBQUMsS0FBcUI7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLHVGQUF1RjtnQkFDakcsTUFBTSxFQUFFLENBQUMsb0ZBQW9GLENBQUM7YUFDakc7Ozs7OzBCQUdJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkQ29sb3JWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktY29sb3ItdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4gW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwidmFsdWVPYmplY3QuY29sb3JIZXhcIj57e3ZhbHVlT2JqZWN0LmNvbG9ySGV4fX08L3NwYW4+YCxcbiAgICBzdHlsZXM6IFtgLmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjM2cHg7b3ZlcmZsb3cteDp2aXNpYmxlfWBdXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yVmFsdWVDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRDb2xvclZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xvclZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbG9yVmFsdWVPYmo6IFJlYWRDb2xvclZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iXX0=