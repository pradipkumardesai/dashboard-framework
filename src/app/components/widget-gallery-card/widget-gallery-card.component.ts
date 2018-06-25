import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cch-widget-gallery-card',
  templateUrl: './widget-gallery-card.component.html',
  styleUrls: ['./widget-gallery-card.component.scss']
})
export class WidgetGalleryCardComponent implements OnInit {

  @Input() widget
  constructor() { }

  ngOnInit() {
  }

  dragStartHandler(ev,widget) {
    ev.dataTransfer.setData("text/plain", JSON.stringify(widget));
    ev.dataTransfer.dropEffect = "copy";
  }

}
