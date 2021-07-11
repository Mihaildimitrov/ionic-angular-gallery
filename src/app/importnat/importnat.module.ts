import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { importantRoutes } from './important.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantComponent } from './views/important/important.component';



@NgModule({
  declarations: [
    ImportantComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(importantRoutes)
  ]
})
export class ImportnatModule { }
