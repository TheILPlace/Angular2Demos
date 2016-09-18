import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({
  selector: '[notIF]'
})
export class CustomStructuralNotIfDirective {
@Input() set notIF(condition: boolean) {
    if (condition){
        this.viewContainer.clear();
    }
    else{          
            this.viewContainer.createEmbeddedView(this.templateRef);
    }
   }

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef)
                 {}
   
}