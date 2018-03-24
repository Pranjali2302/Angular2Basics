import { Directive, OnInit , ElementRef,Renderer,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective implements OnInit {
  changedValue:string;
  // @Input() case:string;
  
  @Input('appChangeCase') case:string;
  constructor( private elm:ElementRef ,
              private renderer:Renderer) {

  }
  @HostListener('blur') onblur(){
    this.changedValue = this.case == 'upper' ? this.elm.nativeElement.value.toUpperCase():this.elm.nativeElement.value.toLowerCase();
    this.renderer.setElementProperty(this.elm.nativeElement,'value',this.changedValue);
  }
  ngOnInit() {
    
  }

}
