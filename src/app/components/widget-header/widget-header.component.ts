import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cch-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {

  @Output()
  onDelete = new EventEmitter<object>();
  @Output()
  onSettings= new EventEmitter<object>()

  constructor() { }

  ngOnInit() {
  }

  onDel(){
      this.onDelete.emit();
  }

  onEdit(){

  }

  onSet(){
    this.onSettings.emit();
  }

}
