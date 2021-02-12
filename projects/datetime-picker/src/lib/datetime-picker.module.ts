import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatCalendarBody } from './calendar-body';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';
import { DefaultNgxMatCalendarRangeStrategy, NGX_MAT_DATE_RANGE_SELECTION_STRATEGY } from './date-range-selection-strategy';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fad from '@fortawesome/pro-duotone-svg-icons';
import * as fal from '@fortawesome/pro-light-svg-icons';
import * as far from '@fortawesome/pro-regular-svg-icons';
import * as fas from '@fortawesome/pro-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';

@NgModule({
   imports: [
      FontAwesomeModule,
      CommonModule,
      MatDatepickerModule,
      MatDialogModule,
      PortalModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      NgxMatTimepickerModule
   ],
   exports: [
      NgxMatDatetimePicker,
      NgxMatDatetimeInput,
      NgxMatCalendar,
      NgxMatMonthView,
      NgxMatCalendarBody,
      NgxMatYearView,
      NgxMatMultiYearView,
      NgxMatCalendarHeader
   ],
   declarations: [
      NgxMatDatetimePicker,
      NgxMatDatetimeContent,
      NgxMatDatetimeInput,
      NgxMatCalendar,
      NgxMatMonthView,
      NgxMatCalendarBody,
      NgxMatYearView,
      NgxMatMultiYearView,
      NgxMatCalendarHeader
   ],
   entryComponents: [
      NgxMatDatetimeContent,
      NgxMatCalendarHeader
   ],
   providers: [
      MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
      {
         provide: NGX_MAT_DATE_RANGE_SELECTION_STRATEGY,
         useClass: DefaultNgxMatCalendarRangeStrategy
      }
   ]
})
export class NgxMatDatetimePickerModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(fas.faCaretUp, fas.faCaretDown, far.faCheck, far.faChevronUp, far.faChevronRight, far.faChevronDown, far.faChevronLeft);
  }
}
