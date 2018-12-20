import { Component, Input } from '@angular/core';
import { ReadUriValue } from '@knora/core';
export class UriValueComponent {
    constructor() { }
    set valueObject(value) {
        this.__uriValueObj = value;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8zQyxNQUFNO0lBYUosZ0JBQWdCLENBQUM7SUFYakIsSUFDSSxXQUFXLENBQUMsS0FBbUI7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSx1RUFBdUU7Z0JBQ2pGLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQzdFOzs7OzswQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhZFVyaVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdXJpLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSBocmVmPVwie3t2YWx1ZU9iamVjdC51cml9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7dmFsdWVPYmplY3QudXJpfX08L2E+YCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBVcmlWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVXJpVmFsdWUpIHtcbiAgICB0aGlzLl9fdXJpVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3VyaVZhbHVlT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3VyaVZhbHVlT2JqOiBSZWFkVXJpVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19