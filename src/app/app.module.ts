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
