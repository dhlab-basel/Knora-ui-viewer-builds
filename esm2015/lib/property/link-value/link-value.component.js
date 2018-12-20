import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OntologyInformation, ReadLinkValue } from '@knora/core';
export class LinkValueComponent {
    constructor() {
        this.referredResourceClicked = new EventEmitter();
    }
    set ontologyInfo(value) {
        this._ontoInfo = value;
    }
    get ontologyInfo() {
        return this._ontoInfo;
    }
    set valueObject(value) {
        this._linkValueObj = value;
        if (this.valueObject.referredResource !== undefined) {
            this.referredResource = this.valueObject.referredResource.label;
        }
        else {
            this.referredResource = this.valueObject.referredResourceIri;
        }
    }
    get valueObject() {
        return this._linkValueObj;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBT2pFLE1BQU07SUFpQ0Y7UUFOQSw0QkFBdUIsR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU0xRCxDQUFDO0lBL0JqQixJQUNJLFlBQVksQ0FBQyxLQUEwQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztTQUNuRTthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFXRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBMUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkVBQTJFO2dCQUNyRixNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQzthQUMvRTs7Ozs7MkJBR0ksS0FBSzswQkFTTCxLQUFLO3NDQWVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkTGlua1ZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saW5rLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwic2Fsc2FoLWxpbmtcIiAoY2xpY2spPVwicmVmUmVzQ2xpY2tlZCgpXCI+e3tyZWZlcnJlZFJlc291cmNlfX08L2E+YCxcbiAgICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmtWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaW5rVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGlua1ZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2VJcmk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSZWFkTGlua1ZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgX2xpbmtWYWx1ZU9iajogUmVhZExpbmtWYWx1ZTtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICByZWZlcnJlZFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHRoaXMuX2xpbmtWYWx1ZU9iaik7XG4gICAgfVxufVxuIl19