import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
         MatToolbarModule,
         MatIconModule,
         MatCardModule,
         MatSnackBarModule,
         MatInputModule,
         MatTableModule,
         MatMenuModule,
         MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule { }
