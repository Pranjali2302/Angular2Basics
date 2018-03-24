import { Directive,ViewContainerRef, TemplateRef,Input} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    private viewRef:ViewContainerRef,
    private tempRef:TemplateRef<any>
  ) { }
  @Input() set appUnless(condition){
    condition? this.viewRef.clear():this.viewRef.createEmbeddedView(this.tempRef);
  }
}
