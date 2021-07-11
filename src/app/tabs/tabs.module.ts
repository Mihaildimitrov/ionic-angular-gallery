import { TabsComponent } from './views/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { tabsRoutes } from './tabs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(tabsRoutes),
  ]
})
export class TabsModule { }
