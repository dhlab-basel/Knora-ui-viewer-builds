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
export class KuiViewerModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0gscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsY0FBYyxFQUNkLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDbkIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixF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Q2xCLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQix1QkFBdUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFFTCxtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2Isd0JBQXdCO29CQUN4QiwwQkFBMEI7b0JBQzFCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQix1QkFBdUI7aUJBQzFCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBLdWlBY3Rpb25Nb2R1bGUgfSBmcm9tICdAa25vcmEvYWN0aW9uJztcbmltcG9ydCB7IEt1aUNvcmVNb2R1bGUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5WYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvclZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9kYXRlLXZhbHVlL2RhdGUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IERlY2ltYWxWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvZGVjaW1hbC12YWx1ZS9kZWNpbWFsLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9leHRlcm5hbC1yZXMtdmFsdWUvZXh0ZXJuYWwtcmVzLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9tZXRyeS12YWx1ZS9nZW9tZXRyeS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbmFtZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9nZW9uYW1lLXZhbHVlL2dlb25hbWUtdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEludGVnZXJWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvaW50ZWdlci12YWx1ZS9pbnRlZ2VyLXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnRlcnZhbFZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9pbnRlcnZhbC12YWx1ZS9pbnRlcnZhbC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua1ZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS9saW5rLXZhbHVlL2xpbmstdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvcGVydHkvbGlzdC12YWx1ZS9saXN0LXZhbHVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0VmFsdWVBc0h0bWxDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1odG1sL3RleHQtdmFsdWUtYXMtaHRtbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3RleHQtdmFsdWUvdGV4dC12YWx1ZS1hcy1zdHJpbmcvdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMteG1sL3RleHQtdmFsdWUtYXMteG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXJpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5L3VyaS12YWx1ZS91cmktdmFsdWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFubm90YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXVkaW9Db21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2F1ZGlvL2F1ZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERkZENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvZGRkL2RkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rT2JqQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9saW5rLW9iai9saW5rLW9iai5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW92aW5nSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlL21vdmluZy1pbWFnZS9tb3ZpbmctaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2Uvb2JqZWN0L29iamVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9yZWdpb24vcmVnaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGlsbEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS9zdGlsbC1pbWFnZS9zdGlsbC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmVzb3VyY2UvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYXJlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9jb21wYXJlLXZpZXcvY29tcGFyZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmFwaFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvZ3JhcGgtdmlldy9ncmFwaC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy9wcm9wZXJ0aWVzLXZpZXcvcHJvcGVydGllcy12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNvdXJjZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvcmVzb3VyY2Utdmlldy9yZXNvdXJjZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudCc7XG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEt1aUNvcmVNb2R1bGUsXG4gICAgICAgIEt1aUFjdGlvbk1vZHVsZSxcbiAgICAgICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuXG4gICAgICAgIEFubm90YXRpb25Db21wb25lbnQsXG4gICAgICAgIEF1ZGlvQ29tcG9uZW50LFxuICAgICAgICBDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBEZGRDb21wb25lbnQsXG4gICAgICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgICAgICBMaW5rT2JqQ29tcG9uZW50LFxuICAgICAgICBNb3ZpbmdJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgT2JqZWN0Q29tcG9uZW50LFxuICAgICAgICBSZWdpb25Db21wb25lbnQsXG4gICAgICAgIFN0aWxsSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIFRleHRDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzSHRtbENvbXBvbmVudCxcbiAgICAgICAgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQsXG4gICAgICAgIFRleHRWYWx1ZUFzWG1sQ29tcG9uZW50LFxuICAgICAgICBUZXh0ZmlsZVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBEYXRlVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVnZXJWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQ29sb3JWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgRGVjaW1hbFZhbHVlQ29tcG9uZW50LFxuICAgICAgICBVcmlWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgQm9vbGVhblZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9tZXRyeVZhbHVlQ29tcG9uZW50LFxuICAgICAgICBHZW9uYW1lVmFsdWVDb21wb25lbnQsXG4gICAgICAgIEludGVydmFsVmFsdWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgICAgTGlua1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBFeHRlcm5hbFJlc1ZhbHVlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JpZFZpZXdDb21wb25lbnQsXG4gICAgICAgIFRhYmxlVmlld0NvbXBvbmVudCxcbiAgICAgICAgUmVzb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICBDb21wYXJlVmlld0NvbXBvbmVudCxcbiAgICAgICAgR3JhcGhWaWV3Q29tcG9uZW50LFxuICAgICAgICBQcm9wZXJ0aWVzVmlld0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgS3VpVmlld2VyTW9kdWxlIHtcbn1cbiJdfQ==