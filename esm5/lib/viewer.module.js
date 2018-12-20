import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { KuiActionModule } from '@knora/action';
import { KuiCoreModule } from '@knora/core';
import { BooleanValueComponent } from './property/boolean-value/boolean-value.component';
import { ColorValueComponent } from './property/color-value/color-value.component';
import { DateValueComponent } from './property/date-value/date-value.component';
import { DecimalValueComponent } from './property/decimal-value/decimal-value.component';
import { ExternalResValueComponent } from './property/external-res-value/external-res-value.component';
import { GeometryValueComponent } from './property/geometry-value/geometry-value.component';
import { GeonameValueComponent } from './property/geoname-value/geoname-value.component';
import { IntegerValueComponent } from './property/integer-value/integer-value.component';
import { IntervalValueComponent } from './property/interval-value/interval-value.component';
import { LinkValueComponent } from './property/link-value/link-value.component';
import { ListValueComponent } from './property/list-value/list-value.component';
import { TextValueAsHtmlComponent } from './property/text-value/text-value-as-html/text-value-as-html.component';
import { TextValueAsStringComponent } from './property/text-value/text-value-as-string/text-value-as-string.component';
import { TextValueAsXmlComponent } from './property/text-value/text-value-as-xml/text-value-as-xml.component';
import { TextfileValueComponent } from './property/textfile-value/textfile-value.component';
import { UriValueComponent } from './property/uri-value/uri-value.component';
import { AnnotationComponent } from './resource/annotation/annotation.component';
import { AudioComponent } from './resource/audio/audio.component';
import { CollectionComponent } from './resource/collection/collection.component';
import { DddComponent } from './resource/ddd/ddd.component';
import { DocumentComponent } from './resource/document/document.component';
import { LinkObjComponent } from './resource/link-obj/link-obj.component';
import { MovingImageComponent } from './resource/moving-image/moving-image.component';
import { ObjectComponent } from './resource/object/object.component';
import { RegionComponent } from './resource/region/region.component';
import { StillImageComponent } from './resource/still-image/still-image.component';
import { TextComponent } from './resource/text/text.component';
import { CompareViewComponent } from './view/compare-view/compare-view.component';
import { GraphViewComponent } from './view/graph-view/graph-view.component';
import { GridViewComponent } from './view/grid-view/grid-view.component';
import { ListViewComponent } from './view/list-view/list-view.component';
import { PropertiesViewComponent } from './view/properties-view/properties-view.component';
import { ResourceViewComponent } from './view/resource-view/resource-view.component';
import { TableViewComponent } from './view/table-view/table-view.component';
var KuiViewerModule = /** @class */ (function () {
    function KuiViewerModule() {
    }
    KuiViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        KuiCoreModule,
                        KuiActionModule,
                        MatAutocompleteModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatIconModule,
                        MatListModule,
                        MatNativeDateModule,
                        MatSlideToggleModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        ReactiveFormsModule
                    ],
                    declarations: [
                        AnnotationComponent,
                        AudioComponent,
                        CollectionComponent,
                        DddComponent,
                        DocumentComponent,
                        LinkObjComponent,
                        MovingImageComponent,
                        ObjectComponent,
                        RegionComponent,
                        StillImageComponent,
                        TextComponent,
                        TextValueAsHtmlComponent,
                        TextValueAsStringComponent,
                        TextValueAsXmlComponent,
                        TextfileValueComponent,
                        DateValueComponent,
                        IntegerValueComponent,
                        ColorValueComponent,
                        DecimalValueComponent,
                        UriValueComponent,
                        BooleanValueComponent,
                        GeometryValueComponent,
                        GeonameValueComponent,
                        IntervalValueComponent,
                        ListValueComponent,
                        LinkValueComponent,
                        ExternalResValueComponent,
                        ListViewComponent,
                        GridViewComponent,
                        TableViewComponent,
                        ResourceViewComponent,
                        CompareViewComponent,
                        GraphViewComponent,
                        PropertiesViewComponent
                    ],
                    exports: [
                        AnnotationComponent,
                        AudioComponent,
                        CollectionComponent,
                        DddComponent,
                        DocumentComponent,
                        LinkObjComponent,
                        MovingImageComponent,
                        ObjectComponent,
                        RegionComponent,
                        StillImageComponent,
                        TextComponent,
                        TextValueAsHtmlComponent,
                        TextValueAsStringComponent,
                        TextValueAsXmlComponent,
                        TextfileValueComponent,
                        DateValueComponent,
                        IntegerValueComponent,
                        ColorValueComponent,
                        DecimalValueComponent,
                        UriValueComponent,
                        BooleanValueComponent,
                        GeometryValueComponent,
                        GeonameValueComponent,
                        IntervalValueComponent,
                        ListValueComponent,
                        LinkValueComponent,
                        ExternalResValueComponent,
                        ListViewComponent,
                        GridViewComponent,
                        TableViewComponent,
                        ResourceViewComponent,
                        CompareViewComponent,
                        GraphViewComponent,
                        PropertiesViewComponent
                    ]
                },] },
    ];
    return KuiViewerModule;
}());
export { KuiViewerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0gscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDbkIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixF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a0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBRUwsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3FCQUMxQjtpQkFDSjs7SUFFRCxzQkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEt1aUFjdGlvbk1vZHVsZSB9IGZyb20gJ0Brbm9yYS9hY3Rpb24nO1xuaW1wb3J0IHsgS3VpQ29yZU1vZHVsZSB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhblZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2NvbG9yLXZhbHVlL2NvbG9yLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVjaW1hbFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9kZWNpbWFsLXZhbHVlL2RlY2ltYWwtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2V4dGVybmFsLXJlcy12YWx1ZS9leHRlcm5hbC1yZXMtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5VmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2dlb21ldHJ5LXZhbHVlL2dlb21ldHJ5LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9uYW1lVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2dlb25hbWUtdmFsdWUvZ2VvbmFtZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW50ZWdlclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9pbnRlZ2VyLXZhbHVlL2ludGVnZXItdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVydmFsVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2ludGVydmFsLXZhbHVlL2ludGVydmFsLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9saXN0LXZhbHVlL2xpc3QtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLWh0bWwvdGV4dC12YWx1ZS1hcy1odG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLWFzLXN0cmluZy90ZXh0LXZhbHVlLWFzLXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy14bWwvdGV4dC12YWx1ZS1hcy14bWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRmaWxlVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHRmaWxlLXZhbHVlL3RleHRmaWxlLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvdXJpLXZhbHVlL3VyaS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdWRpb0NvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvYXVkaW8vYXVkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IENvbGxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9kZGQvZGRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmtPYmpDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2xpbmstb2JqL2xpbmstb2JqLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb3ZpbmdJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvbW92aW5nLWltYWdlL21vdmluZy1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9vYmplY3Qvb2JqZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3JlZ2lvbi9yZWdpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0aWxsSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL3N0aWxsLWltYWdlL3N0aWxsLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhcmVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2NvbXBhcmUtdmlldy9jb21wYXJlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdyYXBoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9ncmFwaC12aWV3L2dyYXBoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2dyaWQtdmlldy9ncmlkLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb3BlcnRpZXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3Byb3BlcnRpZXMtdmlldy9wcm9wZXJ0aWVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc291cmNlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9yZXNvdXJjZS12aWV3L3Jlc291cmNlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50JztcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgS3VpQ29yZU1vZHVsZSxcbiAgICAgICAgS3VpQWN0aW9uTW9kdWxlLFxuICAgICAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdExpc3RNb2R1bGUsXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQXVkaW9Db21wb25lbnQsXG4gICAgICAgIENvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIERkZENvbXBvbmVudCxcbiAgICAgICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgICAgIExpbmtPYmpDb21wb25lbnQsXG4gICAgICAgIE1vdmluZ0ltYWdlQ29tcG9uZW50LFxuICAgICAgICBPYmplY3RDb21wb25lbnQsXG4gICAgICAgIFJlZ2lvbkNvbXBvbmVudCxcbiAgICAgICAgU3RpbGxJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgVGV4dENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQsXG4gICAgICAgIFRleHRmaWxlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERhdGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZWdlclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBDb2xvclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEZWNpbWFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIFVyaVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBCb29sZWFuVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb21ldHJ5VmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb25hbWVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaW5rVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmlkVmlld0NvbXBvbmVudCxcbiAgICAgICAgVGFibGVWaWV3Q29tcG9uZW50LFxuICAgICAgICBSZXNvdXJjZVZpZXdDb21wb25lbnQsXG4gICAgICAgIENvbXBhcmVWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmFwaFZpZXdDb21wb25lbnQsXG4gICAgICAgIFByb3BlcnRpZXNWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG5cbiAgICAgICAgQW5ub3RhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQXVkaW9Db21wb25lbnQsXG4gICAgICAgIENvbGxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIERkZENvbXBvbmVudCxcbiAgICAgICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgICAgIExpbmtPYmpDb21wb25lbnQsXG4gICAgICAgIE1vdmluZ0ltYWdlQ29tcG9uZW50LFxuICAgICAgICBPYmplY3RDb21wb25lbnQsXG4gICAgICAgIFJlZ2lvbkNvbXBvbmVudCxcbiAgICAgICAgU3RpbGxJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgVGV4dENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNIdG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0VmFsdWVBc1N0cmluZ0NvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNYbWxDb21wb25lbnQsXG4gICAgICAgIFRleHRmaWxlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIERhdGVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZWdlclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBDb2xvclZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEZWNpbWFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIFVyaVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBCb29sZWFuVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb21ldHJ5VmFsdWVDb21wb25lbnQsXG4gICAgICAgIEdlb25hbWVWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgSW50ZXJ2YWxWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaW5rVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEV4dGVybmFsUmVzVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmlkVmlld0NvbXBvbmVudCxcbiAgICAgICAgVGFibGVWaWV3Q29tcG9uZW50LFxuICAgICAgICBSZXNvdXJjZVZpZXdDb21wb25lbnQsXG4gICAgICAgIENvbXBhcmVWaWV3Q29tcG9uZW50LFxuICAgICAgICBHcmFwaFZpZXdDb21wb25lbnQsXG4gICAgICAgIFByb3BlcnRpZXNWaWV3Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBLdWlWaWV3ZXJNb2R1bGUge1xufVxuIl19