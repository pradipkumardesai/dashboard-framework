import { Directive, ElementRef } from '@angular/core';
import { CchGridsterConfigService } from '../../services/gridster-config/gridster-config.service';

@Directive({
  selector: '[cchIframeWrapper]',  
})
export class IframeWrapperDirective {

  constructor(private el: ElementRef,private cchGridsterConfigService:CchGridsterConfigService) { 
    // el.nativeElement.contentWindow.postMessage("hhhh", '*');
    // this.cchGridsterConfigService.test();
  }

}
