import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Deal } from "./deal";
import { DealService } from "./deal.service";

@Component({
  selector: "ns-details",
  moduleId: module.id,
  templateUrl: "./deal-detail.component.html",
  providers: [ DealService ]
})
export class DealDetailComponent implements OnInit {
  private deal: any;
  _deal: Deal;
  pk: number;
  image: string;
  fantasy: string;
  name: string;
  description: string;
  cnpj: string;
  site: string;
  kitchen: Array<any>;
  work_models: Array<any>;

  // dealArray: any;
  // public pk: string;
  // public name: string;

  constructor(
    private dealService: DealService,
    private route: ActivatedRoute,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    // this.deal = this.route.params.subscribe((params: any) => {
    //   this.pk = params['pk'];
    //   this.dealService.getDeal(this.pk).subscribe((deal) => {
    //     this.deal = deal;
    //     this.ngZone.run(() => {
    //       for (let d in deal) {
    //         if (d === "id") {
    //           this.pk = deal[d];
    //         }
    //         if (d === "image") {
    //           this.image = deal[d]
    //         }
    //         if (d === "fantasy") {
    //           this.fantasy = deal[d]
    //         }
    //         if (d === "name") {
    //           this.name = deal[d]
    //         }
    //         if (d === "description") {
    //           this.description = deal[d]
    //         }
    //         if (d === "cnpj") {
    //           this.cnpj = deal[d]
    //         }
    //         if (d === "site") {
    //           this.site = deal[d]
    //         }
    //         // if (d === "kitchen") {
    //         //   this.kitchen = deal[d]
    //         // }
    //         // if (d === "work_models") {
    //         //   this.work_models = deal[d]
    //         // }
    //       }
    //     })
    //   })
    // })

    const pk = +this.route.snapshot.params["pk"];
    this.dealService.getDeal(pk)
      .subscribe(deal => {
        this._deal = deal;
      });
  }

}
