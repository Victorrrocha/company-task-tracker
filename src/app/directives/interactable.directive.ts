import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInteractable]'
})
export class InteractableDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverInteractable(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverInteractable(false);
  }

  private hoverInteractable(status: boolean) {
    this.el.nativeElement.style.textDecoration = status ? "underline" : "none";
    this.el.nativeElement.style.cursor = status ? "pointer" : "auto"
  }
}
