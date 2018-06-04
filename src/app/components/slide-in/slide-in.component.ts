import { Component, OnInit } from "@angular/core";
import { SlideInService } from "../../services/slide-in/slide-in.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "cch-slide-in",
  templateUrl: "./slide-in.component.html",
  styleUrls: ["./slide-in.component.scss"]
})
export class SlideInComponent implements OnInit {

  settUrl:string =  null;

  constructor(private slideInService: SlideInService,public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.settUrl = this.slideInService.settingsUrl;
  }

  onClose() {
    this.slideInService.hide();
  }
}
