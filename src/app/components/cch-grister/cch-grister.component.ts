import { Component, OnInit, Input } from "@angular/core";

import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
  Draggable
} from "angular-gridster2";
import { CchGridsterConfigService } from "../../services/gridster-config/gridster-config.service";
import { GridsterDraggable } from "angular-gridster2/lib/gridsterDraggable.service";
import { SlideInService } from "../../services/slide-in/slide-in.service";

@Component({
  selector: "cch-grister",
  templateUrl: "./cch-grister.component.html",
  styleUrls: ["./cch-grister.component.scss"],
  providers: [CchGridsterConfigService]
})
export class CchGristerComponent implements OnInit {
  
  @Input() tabName:string;

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  editLayoutText:string;
  isSlideInVisible:boolean;

 

  hideSlideIn(){
    this.slideInService.hide();
  }
  
  constructor(private slideInService:SlideInService,private cchGridsterConfigService:CchGridsterConfigService) { 
    this.slideInService.isSlideInVisible.subscribe(data=>{
      this.isSlideInVisible=data;
    });
  }

  static itemChange(item, itemComponent) {
    console.info("itemChanged", item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info("itemResized", item, itemComponent);
  }

  ngOnInit() {
    this.options = this.cchGridsterConfigService.getOptions();
    this.dashboard = this.cchGridsterConfigService.getWidgets(this.tabName);
    this.setEditMode(false);
  }

  setEditMode(flag:boolean){
    this.options.draggable.enabled = flag;
    this.options.displayGrid = flag?"always":"none";
    this.editLayoutText =  flag ? "Save layout" : "Edit layout";
    this.options.resizable.enabled = flag;
  }

  getLayout(){
    alert(JSON.stringify(this.dashboard));
  }

  editLayout(){
    this.setEditMode(!this.options.draggable.enabled);
    this.changedOptions();
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
