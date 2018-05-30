import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'cch-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {

  @Input()
  gridItem:GridsterItem

  @Output()
  onRemove=new EventEmitter<object>();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.onRemove.emit();
    //alert(JSON.stringify(this.gridItem));
  }

}
