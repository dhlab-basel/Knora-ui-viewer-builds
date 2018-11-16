/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OntologyInformation, ReadLinkValue } from '@knora/core';
export class LinkValueComponent {
    constructor() {
        this.referredResourceClicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ontologyInfo(value) {
        this._ontoInfo = value;
    }
    /**
     * @return {?}
     */
    get ontologyInfo() {
        return this._ontoInfo;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._linkValueObj = value;
        if (this.valueObject.referredResource !== undefined) {
            this.referredResource = this.valueObject.referredResource.label;
        }
        else {
            this.referredResource = this.valueObject.referredResourceIri;
        }
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._linkValueObj;
    }
    /**
     * @return {?}
     */
    refResClicked() {
        this.referredResourceClicked.emit(this._linkValueObj);
    }
}
LinkValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-link-value',
                template: `<a class="salsah-link" (click)="refResClicked()">{{referredResource}}</a>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
LinkValueComponent.ctorParameters = () => [];
LinkValueComponent.propDecorators = {
    ontologyInfo: [{ type: Input }],
    valueObject: [{ type: Input }],
    referredResourceClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LinkValueComponent.prototype.referredResourceClicked;
    /** @type {?} */
    LinkValueComponent.prototype._linkValueObj;
    /** @type {?} */
    LinkValueComponent.prototype._ontoInfo;
    /** @type {?} */
    LinkValueComponent.prototype.referredResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU9qRSxNQUFNO0lBaUNGO3VDQU51RCxJQUFJLFlBQVksRUFBRTtLQU14RDs7Ozs7SUEvQmpCLElBQ0ksWUFBWSxDQUFDLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7Ozs7O0lBRUQsSUFDSSxXQUFXLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztTQUNuRTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7U0FDaEU7S0FDSjs7OztJQUVELElBQUksV0FBVztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzdCOzs7O0lBV0QsYUFBYTtRQUNULElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3pEOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSwyRUFBMkU7Z0JBQ3JGLE1BQU0sRUFBRSxDQUFDLGtFQUFrRSxDQUFDO2FBQy9FOzs7OzsyQkFHSSxLQUFLOzBCQVNMLEtBQUs7c0NBZUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRMaW5rVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWxpbmstdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJzYWxzYWgtbGlua1wiIChjbGljayk9XCJyZWZSZXNDbGlja2VkKClcIj57e3JlZmVycmVkUmVzb3VyY2V9fTwvYT5gLFxuICAgIHN0eWxlczogW2AubWF0LWZvcm0tZmllbGR7d2lkdGg6MzIwcHh9LmZpbGwtcmVtYWluaW5nLXNwYWNle2ZsZXg6MSAxIGF1dG99YF1cbn0pXG5leHBvcnQgY2xhc3MgTGlua1ZhbHVlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG9udG9sb2d5SW5mbyh2YWx1ZTogT250b2xvZ3lJbmZvcm1hdGlvbikge1xuICAgICAgICB0aGlzLl9vbnRvSW5mbyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBvbnRvbG9neUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbnRvSW5mbztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZExpbmtWYWx1ZSkge1xuICAgICAgICB0aGlzLl9saW5rVmFsdWVPYmogPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZU9iamVjdC5yZWZlcnJlZFJlc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZSA9IHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZS5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZSA9IHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZUlyaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmtWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFJlYWRMaW5rVmFsdWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgcHJpdmF0ZSBfbGlua1ZhbHVlT2JqOiBSZWFkTGlua1ZhbHVlO1xuICAgIHByaXZhdGUgX29udG9JbmZvOiBPbnRvbG9neUluZm9ybWF0aW9uO1xuICAgIHJlZmVycmVkUmVzb3VyY2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICByZWZSZXNDbGlja2VkKCkge1xuICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2VDbGlja2VkLmVtaXQodGhpcy5fbGlua1ZhbHVlT2JqKTtcbiAgICB9XG59XG4iXX0=