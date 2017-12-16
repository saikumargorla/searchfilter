import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { SearchFilterPipe } from '../search-filter.pipe';
import {FormsModule} from '@angular/forms';
import { SerchFilterPipe } from './serch-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
  ],
  declarations: [DashboardComponent, SerchFilterPipe],
  exports: [DashboardComponent, SerchFilterPipe,FormsModule]
})
export class DashboardModule { }
