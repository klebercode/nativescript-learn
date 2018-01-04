import { Component, OnInit } from "@angular/core";

import { Deal } from "./deal";
import { DealService } from "./deal.service";

@Component({
  selector: "tk-deals",
  // selector: "tk-listview-getting-started",
  moduleId: module.id,
  templateUrl: "./deals.component.html",
})
export class DealsComponent implements OnInit {
  deals: Deal[];

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.dealService.getDeals()
      .subscribe(deals => this.deals = deals);
  }
}
