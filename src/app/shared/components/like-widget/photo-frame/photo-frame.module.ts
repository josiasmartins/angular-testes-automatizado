import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikeWidgetComponent } from '../like-widget.component';
import { PhotoFrameComponent } from './photo-frame.component';

@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    LikeWidgetComponent
  ],
  exports: [PhotoFrameComponent]
})
export class PhotoFrameModule {

}
