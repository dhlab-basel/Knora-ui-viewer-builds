/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { OntologyInformation, ReadTextValueAsHtml, KnoraConstants } from '@knora/core';
export class TextValueAsHtmlComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
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
    set bindEvents(value) {
        this._bindEvents = value;
    }
    /**
     * @return {?}
     */
    get bindEvents() {
        return this._bindEvents;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._htmlValueObj = value;
        if (this.el.nativeElement.innerHTML) {
            this.el.nativeElement.innerHTML = this.valueObject.html;
        }
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._htmlValueObj;
    }
    /**
     * @param {?} refResourceIri
     * @return {?}
     */
    refResClicked(refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    }
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param {?} targetElement
     * @return {?}
     */
    onClick(targetElement) {
        if (this._bindEvents && targetElement.nodeName.toLowerCase() === 'a'
            && targetElement.className.toLowerCase().indexOf(KnoraConstants.SalsahLink) >= 0
            && targetElement.href !== undefined) {
            this.refResClicked(targetElement.href);
            // prevent propagation
            return false;
        }
        else if (this.bindEvents && targetElement.nodeName.toLowerCase() === 'a' && targetElement.href !== undefined) {
            // open link in a new window
            window.open(targetElement.href, '_blank');
            // prevent propagation
            return false;
        }
        else {
            // prevent propagation
            return false;
        }
    }
}
TextValueAsHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-text-value-as-html',
                template: `<div>{{valueObject.html}}</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TextValueAsHtmlComponent.ctorParameters = () => [
    { type: ElementRef }
];
TextValueAsHtmlComponent.propDecorators = {
    referredResourceClicked: [{ type: Output }],
    ontologyInfo: [{ type: Input }],
    bindEvents: [{ type: Input }],
    valueObject: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};
if (false) {
    /** @type {?} */
    TextValueAsHtmlComponent.prototype.referredResourceClicked;
    /** @type {?} */
    TextValueAsHtmlComponent.prototype.html;
    /** @type {?} */
    TextValueAsHtmlComponent.prototype._htmlValueObj;
    /** @type {?} */
    TextValueAsHtmlComponent.prototype._ontoInfo;
    /** @type {?} */
    TextValueAsHtmlComponent.prototype._bindEvents;
    /** @type {?} */
    TextValueAsHtmlComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPdkYsTUFBTTs7OztJQXlDRixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTt1Q0F0Q2MsSUFBSSxZQUFZLEVBQUU7S0F1Q2pFOzs7OztJQXJDRCxJQUNJLFlBQVksQ0FBQyxLQUEwQjtRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7OztJQUVELElBQUksWUFBWTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMzQjs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUEwQjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztTQUMzRDtLQUNKOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDN0I7Ozs7O0lBVUQsYUFBYSxDQUFDLGNBQXNCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDckQ7Ozs7Ozs7SUFRRCxPQUFPLENBQUMsYUFBYTtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRztlQUM3RCxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztlQUM3RSxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRXZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1lBRTdHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzs7WUFFMUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUVKLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEI7S0FDSjs7O1lBM0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDZjs7OztZQVBtQixVQUFVOzs7c0NBVXpCLE1BQU07MkJBR04sS0FBSzt5QkFTTCxLQUFLOzBCQVNMLEtBQUs7c0JBOEJMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkVGV4dFZhbHVlQXNIdG1sLCBLbm9yYUNvbnN0YW50cyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktdGV4dC12YWx1ZS1hcy1odG1sJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXY+e3t2YWx1ZU9iamVjdC5odG1sfX08L2Rpdj5gLFxuICAgIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQge1xuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgb250b2xvZ3lJbmZvKHZhbHVlOiBPbnRvbG9neUluZm9ybWF0aW9uKSB7XG4gICAgICAgIHRoaXMuX29udG9JbmZvID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG9udG9sb2d5SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29udG9JbmZvO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGJpbmRFdmVudHModmFsdWU6IEJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBiaW5kRXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZEV2ZW50cztcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRWYWx1ZUFzSHRtbCkge1xuICAgICAgICB0aGlzLl9odG1sVmFsdWVPYmogPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudmFsdWVPYmplY3QuaHRtbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0bWxWYWx1ZU9iajtcbiAgICB9XG5cbiAgICBodG1sOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaHRtbFZhbHVlT2JqOiBSZWFkVGV4dFZhbHVlQXNIdG1sO1xuICAgIHByaXZhdGUgX29udG9JbmZvOiBPbnRvbG9neUluZm9ybWF0aW9uO1xuICAgIHByaXZhdGUgX2JpbmRFdmVudHM6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZChyZWZSZXNvdXJjZUlyaTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQuZW1pdChyZWZSZXNvdXJjZUlyaSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYSBjbGljayBldmVudCB0byBzdGFuZG9mZiBsaW5rcyB0aGF0IHNob3dzIHRoZSByZWZlcnJlZCByZXNvdXJjZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRFbGVtZW50XG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcbiAgICBvbkNsaWNrKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYSdcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuY2xhc3NOYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihLbm9yYUNvbnN0YW50cy5TYWxzYWhMaW5rKSA+PSAwXG4gICAgICAgICAgICAmJiB0YXJnZXRFbGVtZW50LmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZSZXNDbGlja2VkKHRhcmdldEVsZW1lbnQuaHJlZik7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iaW5kRXZlbnRzICYmIHRhcmdldEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBvcGVuIGxpbmsgaW4gYSBuZXcgd2luZG93XG4gICAgICAgICAgICB3aW5kb3cub3Blbih0YXJnZXRFbGVtZW50LmhyZWYsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19