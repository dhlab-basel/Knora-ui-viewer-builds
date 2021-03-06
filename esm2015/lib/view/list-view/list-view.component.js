import { Component, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
export class ListViewComponent {
    constructor() {
        this.KnoraConstants = KnoraConstants;
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-list-view',
                template: `<div>
    <kui-progress-indicator *ngIf="isLoading" [color]="'#D88958'"></kui-progress-indicator>

    <mat-list class="list-view" *ngFor="let res of result; let i = index; let last = last;">
        <mat-list-item class="link">
            <mat-icon matListIcon>image_search</mat-icon>
            <h2 matLine class="lv-label">{{ontologyInfo?.getLabelForResourceClass(res.type)}} - {{res.label}}</h2>

            <div matLine *ngFor="let prop of res.properties | kuiKey">
                <div *ngFor="let val of prop.value | kuiKey">
                    <div [ngSwitch]="val.value.getClassName()">

                        <div matLine class="lv-html-text" *ngSwitchCase="KnoraConstants.ReadTextValueAsHtml">
                            <kui-text-value-as-html [valueObject]="val.value" [ontologyInfo]="ontologyInfo" [bindEvents]="false"></kui-text-value-as-html>
                            <p class="lv-read-more"></p>
                        </div>

                        <span matLine>
                            <kui-date-value *ngSwitchCase="KnoraConstants.ReadDateValue" [valueObject]="val.value" [calendar]="true" [era]="true"></kui-date-value>
                            <span *ngSwitchDefault="">{{val.value.getContent()}}</span>
                        </span>
                        <br>
                        <span matLine *ngIf="ontologyInfo?.getLabelForProperty(prop.key) !== 'Text'">
                            {{ontologyInfo?.getLabelForProperty(prop.key)}}
                        </span>
                    </div>
                </div>
            </div>

        </mat-list-item>

        <mat-divider *ngIf="!last"></mat-divider>

    </mat-list>
</div>`,
                styles: [`.mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.mat-list .mat-list-item .mat-line{white-space:normal!important;max-width:95%}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-label{font-weight:700!important}`]
            },] },
];
ListViewComponent.ctorParameters = () => [];
ListViewComponent.propDecorators = {
    result: [{ type: Input }],
    ontologyInfo: [{ type: Input }],
    isLoading: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQXlDN0MsTUFBTTtJQVFGO1FBRkEsbUJBQWMsR0FBRyxjQUFjLENBQUM7SUFFaEIsQ0FBQzs7O1lBL0NwQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtDUDtnQkFDSCxNQUFNLEVBQUUsQ0FBQyx1V0FBdVcsQ0FBQzthQUNwWDs7OztxQkFHSSxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbm9yYUNvbnN0YW50cyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktbGlzdC12aWV3JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgPGt1aS1wcm9ncmVzcy1pbmRpY2F0b3IgKm5nSWY9XCJpc0xvYWRpbmdcIiBbY29sb3JdPVwiJyNEODg5NTgnXCI+PC9rdWktcHJvZ3Jlc3MtaW5kaWNhdG9yPlxuXG4gICAgPG1hdC1saXN0IGNsYXNzPVwibGlzdC12aWV3XCIgKm5nRm9yPVwibGV0IHJlcyBvZiByZXN1bHQ7IGxldCBpID0gaW5kZXg7IGxldCBsYXN0ID0gbGFzdDtcIj5cbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gY2xhc3M9XCJsaW5rXCI+XG4gICAgICAgICAgICA8bWF0LWljb24gbWF0TGlzdEljb24+aW1hZ2Vfc2VhcmNoPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxoMiBtYXRMaW5lIGNsYXNzPVwibHYtbGFiZWxcIj57e29udG9sb2d5SW5mbz8uZ2V0TGFiZWxGb3JSZXNvdXJjZUNsYXNzKHJlcy50eXBlKX19IC0ge3tyZXMubGFiZWx9fTwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgbWF0TGluZSAqbmdGb3I9XCJsZXQgcHJvcCBvZiByZXMucHJvcGVydGllcyB8IGt1aUtleVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHZhbCBvZiBwcm9wLnZhbHVlIHwga3VpS2V5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInZhbC52YWx1ZS5nZXRDbGFzc05hbWUoKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG1hdExpbmUgY2xhc3M9XCJsdi1odG1sLXRleHRcIiAqbmdTd2l0Y2hDYXNlPVwiS25vcmFDb25zdGFudHMuUmVhZFRleHRWYWx1ZUFzSHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxrdWktdGV4dC12YWx1ZS1hcy1odG1sIFt2YWx1ZU9iamVjdF09XCJ2YWwudmFsdWVcIiBbb250b2xvZ3lJbmZvXT1cIm9udG9sb2d5SW5mb1wiIFtiaW5kRXZlbnRzXT1cImZhbHNlXCI+PC9rdWktdGV4dC12YWx1ZS1hcy1odG1sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibHYtcmVhZC1tb3JlXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG1hdExpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGt1aS1kYXRlLXZhbHVlICpuZ1N3aXRjaENhc2U9XCJLbm9yYUNvbnN0YW50cy5SZWFkRGF0ZVZhbHVlXCIgW3ZhbHVlT2JqZWN0XT1cInZhbC52YWx1ZVwiIFtjYWxlbmRhcl09XCJ0cnVlXCIgW2VyYV09XCJ0cnVlXCI+PC9rdWktZGF0ZS12YWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0PVwiXCI+e3t2YWwudmFsdWUuZ2V0Q29udGVudCgpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBtYXRMaW5lICpuZ0lmPVwib250b2xvZ3lJbmZvPy5nZXRMYWJlbEZvclByb3BlcnR5KHByb3Aua2V5KSAhPT0gJ1RleHQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvbnRvbG9neUluZm8/LmdldExhYmVsRm9yUHJvcGVydHkocHJvcC5rZXkpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG5cbiAgICAgICAgPG1hdC1kaXZpZGVyICpuZ0lmPVwiIWxhc3RcIj48L21hdC1kaXZpZGVyPlxuXG4gICAgPC9tYXQtbGlzdD5cbjwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYC5tYXQtZm9ybS1maWVsZHt3aWR0aDozMjBweH0uZmlsbC1yZW1haW5pbmctc3BhY2V7ZmxleDoxIDEgYXV0b30uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5saW5re2N1cnNvcjpwb2ludGVyfS5tYXQtbGlzdCAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmV7d2hpdGUtc3BhY2U6bm9ybWFsIWltcG9ydGFudDttYXgtd2lkdGg6OTUlfS5saXN0LXZpZXcgLm1hdC1saXN0LWl0ZW17aGVpZ2h0OmF1dG87bWluLWhlaWdodDo0MHB4O3BhZGRpbmc6OHB4IDB9Lmx2LWh0bWwtdGV4dHttYXgtaGVpZ2h0OjYwcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5sdi1sYWJlbHtmb250LXdlaWdodDo3MDAhaW1wb3J0YW50fWBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIHJlc3VsdDtcbiAgICBASW5wdXQoKSBvbnRvbG9neUluZm87XG4gICAgQElucHV0KCkgaXNMb2FkaW5nO1xuXG4gICAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==