import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { programRoutes } from './program.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './views/program/program.component';



@NgModule({
  declarations: [
    ProgramComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(programRoutes)
  ]
})
export class ProgramModule { }
