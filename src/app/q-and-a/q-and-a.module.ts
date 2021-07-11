import { QAndAComponent } from './views/q-and-a/q-and-a.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { qAndARoutes } from './q=and-a.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    QAndAComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(qAndARoutes)
  ]
})
export class QAndAModule { }
