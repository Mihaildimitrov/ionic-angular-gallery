import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { galleryRoutes } from './gallery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './views/gallery/gallery.component';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(galleryRoutes)
  ]
})
export class GalleryModule { }
