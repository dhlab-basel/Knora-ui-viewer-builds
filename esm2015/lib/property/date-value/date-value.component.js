/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DateRangeSalsah, Precision, ReadDateValue } from '@knora/core';
export class DateValueComponent {
    constructor() { }
    /**
     * @param {?} value
     * @return {?}
     */
    set calendar(value) {
        this._calendar = value;
    }
    /**
     * @return {?}
     */
    get calendar() {
        return this._calendar;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set era(value) {
        this._era = value;
    }
    /**
     * @return {?}
     */
    get era() {
        return this._era;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set valueObject(value) {
        this._dateValueObj = value;
        /** @type {?} */
        const dateOrRange = this.valueObject.getDateSalsah();
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
    }
    /**
     * @return {?}
     */
    get valueObject() {
        return this._dateValueObj;
    }
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param {?} date the date to be converted.
     * @return {?} DateFormatter.
     */
    getJSDate(date) {
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
    }
}
DateValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-date-value',
                template: `<span *ngIf="period; else preciseDate">
    {{dates[0].date | date: dates[0].format}}
    <span *ngIf="era">
        {{dates[0].era}}
    </span>
    - {{dates[1].date | date: dates[1].format}}
    <span *ngIf="era">
        {{dates[1].era}}
    </span>

    <span *ngIf="calendar">
        ({{dates[0].calendar}})
    </span>
</span>

<ng-template #preciseDate>

    <span>
        {{dates[0].date | date: dates[0].format }}
        <span *ngIf="era">
            {{dates[0].era}}
        </span>
        <span *ngIf="calendar">
            ({{dates[0].calendar}})
        </span>
    </span>

</ng-template>
`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}`]
            },] },
];
/** @nocollapse */
DateValueComponent.ctorParameters = () => [];
DateValueComponent.propDecorators = {
    calendar: [{ type: Input }],
    era: [{ type: Input }],
    valueObject: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQWMsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQW1DcEYsTUFBTTtJQStDSixpQkFBaUI7Ozs7O0lBN0NqQixJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxHQUFHLENBQUMsS0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUVELElBQUksR0FBRztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQW9CO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztRQUUzQixNQUFNLFdBQVcsR0FBaUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRixFQUFFLENBQUMsQ0FBQyxXQUFXLFlBQVksZUFBZSxDQUFDLENBQUMsQ0FBQzs7WUFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkY7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFFTixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzVDO0tBRUY7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7Ozs7SUFpQkQsU0FBUyxDQUFDLElBQWdCO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUM7U0FDSDtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQztnQkFDTCxNQUFNLEVBQUUsT0FBTyxHQUFHLE1BQU07Z0JBQ3hCLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Z0JBQzVDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQztTQUNIO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDOztnQkFDbkQsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QixDQUFDO1NBQ0g7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN0RDtLQUVGOzs7WUFwSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQzthQUM3RTs7Ozs7dUJBR0UsS0FBSztrQkFTTCxLQUFLOzBCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VTYWxzYWgsIERhdGVTYWxzYWgsIFByZWNpc2lvbiwgUmVhZERhdGVWYWx1ZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWRhdGUtdmFsdWUnLFxuICB0ZW1wbGF0ZTogYDxzcGFuICpuZ0lmPVwicGVyaW9kOyBlbHNlIHByZWNpc2VEYXRlXCI+XG4gICAge3tkYXRlc1swXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMF0uZm9ybWF0fX1cbiAgICA8c3BhbiAqbmdJZj1cImVyYVwiPlxuICAgICAgICB7e2RhdGVzWzBdLmVyYX19XG4gICAgPC9zcGFuPlxuICAgIC0ge3tkYXRlc1sxXS5kYXRlIHwgZGF0ZTogZGF0ZXNbMV0uZm9ybWF0fX1cbiAgICA8c3BhbiAqbmdJZj1cImVyYVwiPlxuICAgICAgICB7e2RhdGVzWzFdLmVyYX19XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gKm5nSWY9XCJjYWxlbmRhclwiPlxuICAgICAgICAoe3tkYXRlc1swXS5jYWxlbmRhcn19KVxuICAgIDwvc3Bhbj5cbjwvc3Bhbj5cblxuPG5nLXRlbXBsYXRlICNwcmVjaXNlRGF0ZT5cblxuICAgIDxzcGFuPlxuICAgICAgICB7e2RhdGVzWzBdLmRhdGUgfCBkYXRlOiBkYXRlc1swXS5mb3JtYXQgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJlcmFcIj5cbiAgICAgICAgICAgIHt7ZGF0ZXNbMF0uZXJhfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImNhbGVuZGFyXCI+XG4gICAgICAgICAgICAoe3tkYXRlc1swXS5jYWxlbmRhcn19KVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG48L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b31gXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjYWxlbmRhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NhbGVuZGFyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGVuZGFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVyYSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VyYSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGVyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXJhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlT2JqZWN0KHZhbHVlOiBSZWFkRGF0ZVZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZVZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICBjb25zdCBkYXRlT3JSYW5nZTogRGF0ZVNhbHNhaCB8IERhdGVSYW5nZVNhbHNhaCA9IHRoaXMudmFsdWVPYmplY3QuZ2V0RGF0ZVNhbHNhaCgpO1xuICAgIGlmIChkYXRlT3JSYW5nZSBpbnN0YW5jZW9mIERhdGVSYW5nZVNhbHNhaCkge1xuICAgICAgLy8gcGVyaW9kIChzdGFydCBhbmQgZW5kIGRhdGVzKVxuICAgICAgdGhpcy5wZXJpb2QgPSB0cnVlO1xuICAgICAgdGhpcy5kYXRlcyA9IFt0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZS5zdGFydCksIHRoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlLmVuZCldO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzaW5nbGUgZGF0ZVxuICAgICAgdGhpcy5wZXJpb2QgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0ZXMgPSBbdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2UpXTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldCB2YWx1ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZVZhbHVlT2JqO1xuICB9XG5cbiAgZGF0ZXM6IERhdGVGb3JtYXR0ZXJbXTtcbiAgcGVyaW9kOiBib29sZWFuO1xuICBwcml2YXRlIF9jYWxlbmRhcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJhOiBib29sZWFuO1xuICBwcml2YXRlIF9kYXRlVmFsdWVPYmo6IFJlYWREYXRlVmFsdWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBgRGF0ZVNhbHNhaGAgdG8gYSBKUyBEYXRlLCBwcm92aWRpbmcgbmVjZXNzYXJ5IGZvcm1hdHRpbmcgaW5mb3JtYXRpb24uXG4gICAqIEpVTElBTiBhbmQgR1JFR09SSUFOIGNhbGVuZGFyIGFyZSB0aGUgb25seSBhdmFpbGFibGUgZm9yIHRoZSBtb21lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIGJlIGNvbnZlcnRlZC5cbiAgICogQHJldHVybiBEYXRlRm9ybWF0dGVyLlxuICAgKi9cbiAgZ2V0SlNEYXRlKGRhdGU6IERhdGVTYWxzYWgpOiBEYXRlRm9ybWF0dGVyIHtcblxuICAgIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLnllYXJQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIudG9TdHJpbmcoKSksXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5tb250aFByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAnTU1NTSAnICsgJ3l5eXknLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCAxKSwgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZGF0ZS5wcmVjaXNpb24gPT09IFByZWNpc2lvbi5kYXlQcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ2xvbmdEYXRlJyxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpLCAgLy8gMCBiYXNlIG1vbnRoXG4gICAgICAgIGVyYTogZGF0ZS5lcmEsXG4gICAgICAgIGNhbGVuZGFyOiBkYXRlLmNhbGVuZGFyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogaW5jb3JyZWN0IHByZWNpc2lvbiBmb3IgZGF0ZScpO1xuICAgIH1cblxuICB9XG5cbn1cblxuLyoqXG4gKiBEYXRlIHN0cnVjdHVyZSBmb3IgdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUZvcm1hdHRlciB7XG4gIGZvcm1hdDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xuICBlcmE6IHN0cmluZztcbiAgY2FsZW5kYXI6IHN0cmluZztcbn1cbiJdfQ==