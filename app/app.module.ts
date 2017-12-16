import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
   // SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    DashboardModule,
  //  SearchFilterPipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
