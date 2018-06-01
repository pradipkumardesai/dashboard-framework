import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlideInService {

  isSlideInVisible = new Subject<boolean>();
  
  constructor() { 
    this.hide();
  }

  show(){
    this.isSlideInVisible.next(true);
  }

  hide(){
    this.isSlideInVisible.next(false);
  }
}
