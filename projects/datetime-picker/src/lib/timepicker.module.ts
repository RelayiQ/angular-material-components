import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerComponent } from './timepicker.component';

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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    NgxMatTimepickerComponent
  ],
  declarations: [
    NgxMatTimepickerComponent
  ]
})
export class NgxMatTimepickerModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(fas.faCaretUp, fas.faCaretDown, far.faCheck, far.faChevronUp, far.faChevronRight, far.faChevronDown, far.faChevronLeft);
  }
}
