import { Component, Input } from '@angular/core';
import { ReadTextFileValue } from '@knora/core';
export class TextfileValueComponent {
    constructor() { }
    set valueObject(value) {
        this._textfileValueObj = value;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpbGUtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBT2hELE1BQU07SUFhSixnQkFBZ0IsQ0FBQztJQVhqQixJQUNJLFdBQVcsQ0FBQyxLQUF3QjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLHdGQUF3RjtnQkFDbEcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7OzBCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dEZpbGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRleHRmaWxlLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwie3t2YWx1ZU9iamVjdC50ZXh0RmlsZVVSTH19XCI+e3t2YWx1ZU9iamVjdC50ZXh0RmlsZW5hbWV9fTwvYT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGZpbGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dEZpbGVWYWx1ZSkge1xuICAgIHRoaXMuX3RleHRmaWxlVmFsdWVPYmogPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dGZpbGVWYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX3RleHRmaWxlVmFsdWVPYmo6IFJlYWRUZXh0RmlsZVZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==