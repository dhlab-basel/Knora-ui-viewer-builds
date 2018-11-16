/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { OntologyInformation, ReadTextValueAsHtml, KnoraConstants } from '@knora/core';
var TextValueAsHtmlComponent = /** @class */ (function () {
    function TextValueAsHtmlComponent(el) {
        this.el = el;
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "ontologyInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ontoInfo;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "bindEvents", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bindEvents;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bindEvents = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextValueAsHtmlComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._htmlValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._htmlValueObj = value;
            if (this.el.nativeElement.innerHTML) {
                this.el.nativeElement.innerHTML = this.valueObject.html;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} refResourceIri
     * @return {?}
     */
    TextValueAsHtmlComponent.prototype.refResClicked = /**
     * @param {?} refResourceIri
     * @return {?}
     */
    function (refResourceIri) {
        this.referredResourceClicked.emit(refResourceIri);
    };
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param targetElement
     */
    /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param {?} targetElement
     * @return {?}
     */
    TextValueAsHtmlComponent.prototype.onClick = /**
     * Binds a click event to standoff links that shows the referred resource.
     *
     * @param {?} targetElement
     * @return {?}
     */
    function (targetElement) {
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
    };
    TextValueAsHtmlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-html',
                    template: "<div>{{valueObject.html}}</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TextValueAsHtmlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TextValueAsHtmlComponent.propDecorators = {
        referredResourceClicked: [{ type: Output }],
        ontologyInfo: [{ type: Input }],
        bindEvents: [{ type: Input }],
        valueObject: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return TextValueAsHtmlComponent;
}());
export { TextValueAsHtmlComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBZ0RuRixrQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7dUNBdENjLElBQUksWUFBWSxFQUFFO0tBdUNqRTtJQXJDRCxzQkFDSSxrREFBWTs7OztRQUloQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCOzs7OztRQVBELFVBQ2lCLEtBQTBCO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7T0FBQTtJQU1ELHNCQUNJLGdEQUFVOzs7O1FBSWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBTUQsc0JBQ0ksaURBQVc7Ozs7UUFRZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCOzs7OztRQVhELFVBQ2dCLEtBQTBCO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUMzRDtTQUNKOzs7T0FBQTs7Ozs7SUFjRCxnREFBYTs7OztJQUFiLFVBQWMsY0FBc0I7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyRDtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFFSCwwQ0FBTzs7Ozs7O0lBRFAsVUFDUSxhQUFhO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHO2VBQzdELGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2VBQzdFLGFBQWEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFFN0csTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztZQUUxQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBRUosTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQjtLQUNKOztnQkEzRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDZjs7OztnQkFQbUIsVUFBVTs7OzBDQVV6QixNQUFNOytCQUdOLEtBQUs7NkJBU0wsS0FBSzs4QkFTTCxLQUFLOzBCQThCTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDOzttQ0E3RDVDOztTQVFhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9udG9sb2d5SW5mb3JtYXRpb24sIFJlYWRUZXh0VmFsdWVBc0h0bWwsIEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS10ZXh0LXZhbHVlLWFzLWh0bWwnLFxuICAgIHRlbXBsYXRlOiBgPGRpdj57e3ZhbHVlT2JqZWN0Lmh0bWx9fTwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB7XG5cbiAgICBAT3V0cHV0KClcbiAgICByZWZlcnJlZFJlc291cmNlQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgYmluZEV2ZW50cyh2YWx1ZTogQm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kRXZlbnRzO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkVGV4dFZhbHVlQXNIdG1sKSB7XG4gICAgICAgIHRoaXMuX2h0bWxWYWx1ZU9iaiA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZU9iamVjdC5odG1sO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHRtbFZhbHVlT2JqO1xuICAgIH1cblxuICAgIGh0bWw6IHN0cmluZztcbiAgICBwcml2YXRlIF9odG1sVmFsdWVPYmo6IFJlYWRUZXh0VmFsdWVBc0h0bWw7XG4gICAgcHJpdmF0ZSBfb250b0luZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50czogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICByZWZSZXNDbGlja2VkKHJlZlJlc291cmNlSXJpOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHJlZlJlc291cmNlSXJpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIGNsaWNrIGV2ZW50IHRvIHN0YW5kb2ZmIGxpbmtzIHRoYXQgc2hvd3MgdGhlIHJlZmVycmVkIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICAgIG9uQ2xpY2sodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEV2ZW50cyAmJiB0YXJnZXRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJ1xuICAgICAgICAgICAgJiYgdGFyZ2V0RWxlbWVudC5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKEtub3JhQ29uc3RhbnRzLlNhbHNhaExpbmspID49IDBcbiAgICAgICAgICAgICYmIHRhcmdldEVsZW1lbnQuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZlJlc0NsaWNrZWQodGFyZ2V0RWxlbWVudC5ocmVmKTtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJpbmRFdmVudHMgJiYgdGFyZ2V0RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgdGFyZ2V0RWxlbWVudC5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbGluayBpbiBhIG5ldyB3aW5kb3dcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldEVsZW1lbnQuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=