import { Injectable } from '@angular/core';
import { GridsterConfig, DisplayGrid, GridType, CompactType } from 'angular-gridster2';

@Injectable()
export class CchGridsterConfigService {

  constructor() { }

  getOptions():GridsterConfig{
    let config={
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 10,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,      
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    return config;
  
  
  
  }

  getWidgets(tabName:string){
    let tabs ={
      "Tab1":[
        {cols: 2, rows: 1, y: 0, x: 0,widgetUrl:"http://localhost:4200/main/1",settingsUrl:"http://localhost:4200/details/1",widgetId:"w1",widgetTitle:"WIDGET1"},
        {cols: 2, rows: 1, y: 0, x: 0,widgetUrl:"http://localhost:4200/main/2",settingsUrl:"http://localhost:4200/details/2",widgetId:"w2",widgetTitle:"WIDGET2"}
      ],
      "Tab2":[
        {cols: 2, rows: 1, y: 0, x: 0},
        {cols: 2, rows: 2, y: 0, x: 2, hasContent: true},
     
      ]
    }
    return tabs[tabName];
  }
}
