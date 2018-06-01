import { Component, OnInit } from "@angular/core";
import { SlideInService } from "../../services/slide-in/slide-in.service";

@Component({
  selector: "cch-slide-in",
  templateUrl: "./slide-in.component.html",
  styleUrls: ["./slide-in.component.scss"]
})
export class SlideInComponent implements OnInit {
  constructor(private slideInService: SlideInService) {}

  ngOnInit() {}

  onClose() {
    this.slideInService.hide();
  }
}
