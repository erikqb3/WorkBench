import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    //set turns the "unless" property into a method. still a property though; 
    //condition = whatever variable name
    // appUnless, needs to share name of directive selector
    
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef); //where are we creating what
    }
    else {
      this.vcRef.clear(); //where we will clear everything
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef:ViewContainerRef) { //templateRef = what, vcRef = where

   }

}
