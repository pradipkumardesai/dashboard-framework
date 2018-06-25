import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cch-widget-gallery",
  templateUrl: "./widget-gallery.component.html",
  styleUrls: ["./widget-gallery.component.scss"]
})
export class WidgetGalleryComponent implements OnInit {
  widgetList = [
    {    
      widgetUrl: "http://gridsterwidget1.azurewebsites.net/#/main/1",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/1",
      widgetId: "wd1",
      widgetTitle: "Project Dates"
    },
    {
      widgetUrl: "http://gridsterwidget1.azurewebsites.net/#/main/2",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/2",
      widgetId: "wd2",
      widgetTitle: "Work Object"
    },
    {    
      widgetUrl: "http://gridsterwidget1.azurewebsites.net/#/main/1",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/1",
      widgetId: "wd1",
      widgetTitle: "Current Workstep"
    },
    {
      widgetUrl: "http://gridsterwidget1.azurewebsites.net/#/main/2",
      settingsUrl: "http://gridsterwidget1.azurewebsites.net/#/details/2",
      widgetId: "wd2",
      widgetTitle: "Client Details"
    }
  ];

  constructor() {}

  ngOnInit() {}

 
}
