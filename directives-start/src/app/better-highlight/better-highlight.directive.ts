import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { bindCallback } from 'rxjs';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  //binding from here is overridden if we do property binding from the html
  @Input() defaultColor: string = "blue";
  @Input("betterHighlight") highlightColor: string = "pink";

  @HostBinding('style.backgroundColor') backgroundColor: string; //establish here if not doing property binding
  @HostBinding('style.color') color: string = "white";
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor; //establish here if doing property binding
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(0,255,255,1)');
    this.backgroundColor = this.highlightColor;
    this.color = 'black';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgba(255,255,255,1)');
    this.backgroundColor = this.defaultColor;
    this.color = "white";
  }
}
