import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cch-widget-gallery",
  templateUrl: "./widget-gallery.component.html",
  styleUrls: ["./widget-gallery.component.scss"]
})
export class WidgetGalleryComponent implements OnInit {
  widgetList = [
    {    
      widgetUrl: "http://localhost:4300/#/main/1",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/1",
      widgetId: "wd1",
      widgetTitle: "Project Dates"
    },
    {
      widgetUrl: "http://localhost:4300/#/main/2",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/2",
      widgetId: "wd2",
      widgetTitle: "Work Object"
    },
    {    
      widgetUrl: "http://localhost:4300/#/main/1",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/1",
      widgetId: "wd1",
      widgetTitle: "Current Workstep"
    },
    {
      widgetUrl: "http://localhost:4300/#/main/2",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/2",
      widgetId: "wd2",
      widgetTitle: "Client Details"
    }
  ];

  constructor() {}

  ngOnInit() {}

 
}
