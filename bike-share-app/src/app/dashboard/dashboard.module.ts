import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterLink,
    MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }