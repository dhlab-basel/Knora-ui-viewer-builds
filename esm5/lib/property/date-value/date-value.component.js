/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DateRangeSalsah, Precision, ReadDateValue } from '@knora/core';
var DateValueComponent = /** @class */ (function () {
    function DateValueComponent() {
    }
    Object.defineProperty(DateValueComponent.prototype, "calendar", {
        get: /**
         * @return {?}
         */
        function () {
            return this._calendar;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._calendar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "era", {
        get: /**
         * @return {?}
         */
        function () {
            return this._era;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._era = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateValueComponent.prototype, "valueObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dateValueObj;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateValueObj = value;
            /** @type {?} */
            var dateOrRange = this.valueObject.getDateSalsah();
            if (dateOrRange instanceof DateRangeSalsah) {
                // period (start and end dates)
                this.period = true;
                this.dates = [this.getJSDate(dateOrRange.start), this.getJSDate(dateOrRange.end)];
            }
            else {
                // single date
                this.period = false;
                this.dates = [this.getJSDate(dateOrRange)];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param date the date to be converted.
     * @return DateFormatter.
     */
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param {?} date the date to be converted.
     * @return {?} DateFormatter.
     */
    DateValueComponent.prototype.getJSDate = /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param {?} date the date to be converted.
     * @return {?} DateFormatter.
     */
    function (date) {
        if (date.precision === Precision.yearPrecision) {
            return {
                format: 'yyyy',
                date: new Date(date.year.toString()),
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.monthPrecision) {
            return {
                format: 'MMMM ' + 'yyyy',
                date: new Date(date.year, date.month - 1, 1),
                // 0 base month
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.dayPrecision) {
            return {
                format: 'longDate',
                date: new Date(date.year, date.month - 1, date.day),
                // 0 base month
                era: date.era,
                calendar: date.calendar
            };
        }
        else {
            console.error('Error: incorrect precision for date');
        }
    };
    DateValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-date-value',
                    template: "<span *ngIf=\"period; else preciseDate\">\n    {{dates[0].date | date: dates[0].format}}\n    <span *ngIf=\"era\">\n        {{dates[0].era}}\n    </span>\n    - {{dates[1].date | date: dates[1].format}}\n    <span *ngIf=\"era\">\n        {{dates[1].era}}\n    </span>\n\n    <span *ngIf=\"calendar\">\n        ({{dates[0].calendar}})\n    </span>\n</span>\n\n<ng-template #preciseDate>\n\n    <span>\n        {{dates[0].date | date: dates[0].format }}\n        <span *ngIf=\"era\">\n            {{dates[0].era}}\n        </span>\n        <span *ngIf=\"calendar\">\n            ({{dates[0].calendar}})\n        </span>\n    </span>\n\n</ng-template>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}"]
                },] },
    ];
    /** @nocollapse */
    DateValueComponent.ctorParameters = function () { return []; };
    DateValueComponent.propDecorators = {
        calendar: [{ type: Input }],
        era: [{ type: Input }],
        valueObject: [{ type: Input }]
    };
    return DateValueComponent;
}());
export { DateValueComponent };
if (false) {
    /** @type {?} */
    DateValueComponent.prototype.dates;
    /** @type {?} */
    DateValueComponent.prototype.period;
    /** @type {?} */
    DateValueComponent.prototype._calendar;
    /** @type {?} */
    DateValueComponent.prototype._era;
    /** @type {?} */
    DateValueComponent.prototype._dateValueObj;
}
/**
 * Date structure for the template
 * @record
 */
export function DateFormatter() { }
/** @type {?} */
DateFormatter.prototype.format;
/** @type {?} */
DateFormatter.prototype.date;
/** @type {?} */
DateFormatter.prototype.era;
/** @type {?} */
DateFormatter.prototype.calendar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQWMsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFrRmxGO0tBQWlCO0lBN0NqQixzQkFDSSx3Q0FBUTs7OztRQUlaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFHOzs7O1FBSVA7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFQRCxVQUNRLEtBQWM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVc7Ozs7UUFnQmY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7Ozs7UUFuQkQsVUFDZ0IsS0FBb0I7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7O1lBRTNCLElBQU0sV0FBVyxHQUFpQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25GLEVBQUUsQ0FBQyxDQUFDLFdBQVcsWUFBWSxlQUFlLENBQUMsQ0FBQyxDQUFDOztnQkFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25GO1lBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUVOLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzVDO1NBRUY7OztPQUFBO0lBY0Q7Ozs7OztPQU1HOzs7Ozs7OztJQUNILHNDQUFTOzs7Ozs7O0lBQVQsVUFBVSxJQUFnQjtRQUV4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QixDQUFDO1NBQ0g7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUM7Z0JBQ0wsTUFBTSxFQUFFLE9BQU8sR0FBRyxNQUFNO2dCQUN4QixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUM1QyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUM7U0FDSDtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ25ELEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQztTQUNIO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDdEQ7S0FFRjs7Z0JBcEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNG9CQTRCWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztpQkFDN0U7Ozs7OzJCQUdFLEtBQUs7c0JBU0wsS0FBSzs4QkFTTCxLQUFLOzs2QkF4RFI7O1NBb0NhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVSYW5nZVNhbHNhaCwgRGF0ZVNhbHNhaCwgUHJlY2lzaW9uLCBSZWFkRGF0ZVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGF0ZS12YWx1ZScsXG4gIHRlbXBsYXRlOiBgPHNwYW4gKm5nSWY9XCJwZXJpb2Q7IGVsc2UgcHJlY2lzZURhdGVcIj5cbiAgICB7e2RhdGVzWzBdLmRhdGUgfCBkYXRlOiBkYXRlc1swXS5mb3JtYXR9fVxuICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgIHt7ZGF0ZXNbMF0uZXJhfX1cbiAgICA8L3NwYW4+XG4gICAgLSB7e2RhdGVzWzFdLmRhdGUgfCBkYXRlOiBkYXRlc1sxXS5mb3JtYXR9fVxuICAgIDxzcGFuICpuZ0lmPVwiZXJhXCI+XG4gICAgICAgIHt7ZGF0ZXNbMV0uZXJhfX1cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiAqbmdJZj1cImNhbGVuZGFyXCI+XG4gICAgICAgICh7e2RhdGVzWzBdLmNhbGVuZGFyfX0pXG4gICAgPC9zcGFuPlxuPC9zcGFuPlxuXG48bmctdGVtcGxhdGUgI3ByZWNpc2VEYXRlPlxuXG4gICAgPHNwYW4+XG4gICAgICAgIHt7ZGF0ZXNbMF0uZGF0ZSB8IGRhdGU6IGRhdGVzWzBdLmZvcm1hdCB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cImVyYVwiPlxuICAgICAgICAgICAge3tkYXRlc1swXS5lcmF9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiY2FsZW5kYXJcIj5cbiAgICAgICAgICAgICh7e2RhdGVzWzBdLmNhbGVuZGFyfX0pXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG5cbjwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1mb3JtLWZpZWxke3dpZHRoOjMyMHB4fS5maWxsLXJlbWFpbmluZy1zcGFjZXtmbGV4OjEgMSBhdXRvfWBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IGNhbGVuZGFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXJhKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXJhID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZXJhKCkge1xuICAgIHJldHVybiB0aGlzLl9lcmE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWREYXRlVmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlVmFsdWVPYmogPSB2YWx1ZTtcblxuICAgIGNvbnN0IGRhdGVPclJhbmdlOiBEYXRlU2Fsc2FoIHwgRGF0ZVJhbmdlU2Fsc2FoID0gdGhpcy52YWx1ZU9iamVjdC5nZXREYXRlU2Fsc2FoKCk7XG4gICAgaWYgKGRhdGVPclJhbmdlIGluc3RhbmNlb2YgRGF0ZVJhbmdlU2Fsc2FoKSB7XG4gICAgICAvLyBwZXJpb2QgKHN0YXJ0IGFuZCBlbmQgZGF0ZXMpXG4gICAgICB0aGlzLnBlcmlvZCA9IHRydWU7XG4gICAgICB0aGlzLmRhdGVzID0gW3RoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlLnN0YXJ0KSwgdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2UuZW5kKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbmdsZSBkYXRlXG4gICAgICB0aGlzLnBlcmlvZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRlcyA9IFt0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZSldO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlVmFsdWVPYmo7XG4gIH1cblxuICBkYXRlczogRGF0ZUZvcm1hdHRlcltdO1xuICBwZXJpb2Q6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbGVuZGFyOiBib29sZWFuO1xuICBwcml2YXRlIF9lcmE6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RhdGVWYWx1ZU9iajogUmVhZERhdGVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIGBEYXRlU2Fsc2FoYCB0byBhIEpTIERhdGUsIHByb3ZpZGluZyBuZWNlc3NhcnkgZm9ybWF0dGluZyBpbmZvcm1hdGlvbi5cbiAgICogSlVMSUFOIGFuZCBHUkVHT1JJQU4gY2FsZW5kYXIgYXJlIHRoZSBvbmx5IGF2YWlsYWJsZSBmb3IgdGhlIG1vbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gYmUgY29udmVydGVkLlxuICAgKiBAcmV0dXJuIERhdGVGb3JtYXR0ZXIuXG4gICAqL1xuICBnZXRKU0RhdGUoZGF0ZTogRGF0ZVNhbHNhaCk6IERhdGVGb3JtYXR0ZXIge1xuXG4gICAgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24ueWVhclByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAneXl5eScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhci50b1N0cmluZygpKSxcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLm1vbnRoUHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdNTU1NICcgKyAneXl5eScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIDEpLCAvLyAwIGJhc2UgbW9udGhcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLmRheVByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAnbG9uZ0RhdGUnLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSksICAvLyAwIGJhc2UgbW9udGhcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBpbmNvcnJlY3QgcHJlY2lzaW9uIGZvciBkYXRlJyk7XG4gICAgfVxuXG4gIH1cblxufVxuXG4vKipcbiAqIERhdGUgc3RydWN0dXJlIGZvciB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRlRm9ybWF0dGVyIHtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGRhdGU6IERhdGU7XG4gIGVyYTogc3RyaW5nO1xuICBjYWxlbmRhcjogc3RyaW5nO1xufVxuIl19