import { IonicModule } from '@ionic/angular';
import { FeedComponent } from './views/feed/feed.component';
import { RouterModule } from '@angular/router';
import { feedRoutes } from './feed.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(feedRoutes),
  ]
})
export class FeedModule { }
