import { Component, Input } from '@angular/core';
import { ReadTextValueAsString } from '@knora/core';
export class TextValueAsStringComponent {
    constructor() {
    }
    set valueObject(value) {
        this._textStringValueObj = value;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtc3RyaW5nL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRcEQsTUFBTTtJQWFGO0lBQ0EsQ0FBQztJQVpELElBQ0ksV0FBVyxDQUFDLEtBQTRCO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7OztZQWZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Q0FDYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDZjs7Ozs7MEJBR0ksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRUZXh0VmFsdWVBc1N0cmluZyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktdGV4dC12YWx1ZS1hcy1zdHJpbmcnLFxuICAgIHRlbXBsYXRlOiBgPHNwYW4+e3t2YWx1ZU9iamVjdC5zdHJ9fTwvc3Bhbj5cbmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzU3RyaW5nQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdGV4dFN0cmluZ1ZhbHVlT2JqID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dFN0cmluZ1ZhbHVlT2JqO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RleHRTdHJpbmdWYWx1ZU9iajogUmVhZFRleHRWYWx1ZUFzU3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG59XG4iXX0=