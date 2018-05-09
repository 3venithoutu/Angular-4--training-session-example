import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[homeShadow]'
})
export class ShadowDirective {

  // ElementRef : DOM element
  // Renderer2 : css class injected via DI.
  constructor(ele:ElementRef, renderer:Renderer2) { 
    renderer.setStyle(ele.nativeElement, 'box-shadow','5px 5px 1px');
    renderer.setStyle(ele.nativeElement, 'background-color','yellow');
  }

}
