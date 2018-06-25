import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlideInService {

  isSlideInVisible = new Subject<boolean>();
  settingsUrl:string = null;
  
  constructor() { 
    this.hide();
  }

  show(settUrl:string){
    this.settingsUrl = settUrl;
    this.isSlideInVisible.next(true);
  }

  hide(){
    this.settingsUrl = null;
    this.isSlideInVisible.next(false);
  }

  showWidgetGallery(){
    this.isSlideInVisible.next(true);
  }
}
