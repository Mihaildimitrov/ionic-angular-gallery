import { RestaurantComponent } from './views/restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { restaurantRoutes } from './restaurant.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    IonicModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(restaurantRoutes)
  ]
})
export class RestaurantModule { }
