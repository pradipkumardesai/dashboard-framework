import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { GridsterItem } from "angular-gridster2";
import { SlideInService } from "../../services/slide-in/slide-in.service";
import { DomSanitizer } from "@angular/platform-browser";
import { ParentToIframeService } from "../../bridge/services/parent-to-iframe.service";

@Component({
  selector: "cch-widget-container",
  templateUrl: "./widget-container.component.html",
  styleUrls: ["./widget-container.component.scss"]
})
export class WidgetContainerComponent implements OnInit {
  @Input() gridItem: GridsterItem;

  @ViewChild("tref", { read: ElementRef })
  tref: ElementRef;

  @Output() onRemove = new EventEmitter<object>();

  constructor(
    private slideInService: SlideInService,
    public sanitizer: DomSanitizer,
    private parentToIframeService: ParentToIframeService
  ) {}

  ngOnInit() {
   
  }

 

  onDelete() {
    this.onRemove.emit();
    //alert(JSON.stringify(this.gridItem));
  }

  onSettings() {
    this.parentToIframeService.sendMessageToChild(this.tref.nativeElement,"Hello from parent");
    this.tref.nativeElement.contentWindow.postMessage("Hello from parent", "*");
    //this.slideInService.show(this.gridItem.settingsUrl);
    //alert(JSON.stringify(this.gridItem));
  }
}
