import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { SlideInService } from '../../services/slide-in/slide-in.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cch-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

  @Input()
  gridItem:GridsterItem

  @Output()
  onRemove = new EventEmitter<object>();
  
  constructor(private slideInService:SlideInService,public sanitizer: DomSanitizer) { 
  
  }

  
  ngOnInit() {
  }

  onDelete(){
    this.onRemove.emit();
    //alert(JSON.stringify(this.gridItem));
  }

  onSettings(){
    this.slideInService.show(this.gridItem.settingsUrl);
    //alert(JSON.stringify(this.gridItem));
  }

}
