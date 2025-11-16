import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NzTableModule} from 'ng-zorro-antd/table';
import { TableComponent } from './table/table.component'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ThDatePipe } from './pipe/th-date.pipe';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';

const thBeLocale = {
  ...thLocale,

  postformat: (str: string) => {
    return str.replace(/\b(\d{4})\b/g, (year) => {
      const y = parseInt(year, 10);
      return isNaN(y) ? year : (y + 543).toString();
    });
  },
};

defineLocale('th-be', thBeLocale);



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    ThDatePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NzTableModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
