"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var deal_service_1 = require("./deal.service");
var DealDetailComponent = (function () {
    // dealArray: any;
    // public pk: string;
    // public name: string;
    function DealDetailComponent(dealService, route, ngZone) {
        this.dealService = dealService;
        this.route = route;
        this.ngZone = ngZone;
    }
    DealDetailComponent.prototype.ngOnInit = function () {
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
        var _this = this;
        var pk = +this.route.snapshot.params["pk"];
        this.dealService.getDeal(pk)
            .subscribe(function (deal) {
            _this._deal = deal;
        });
    };
    DealDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./deal-detail.component.html",
            providers: [deal_service_1.DealService]
        }),
        __metadata("design:paramtypes", [deal_service_1.DealService,
            router_1.ActivatedRoute,
            core_1.NgZone])
    ], DealDetailComponent);
    return DealDetailComponent;
}());
exports.DealDetailComponent = DealDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVhbC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBQzFELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFRN0M7SUFhRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUV2Qiw2QkFDVSxXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjO1FBRmQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwQixDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUNFLDZEQUE2RDtRQUM3RCw0QkFBNEI7UUFDNUIsNERBQTREO1FBQzVELHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLHFDQUFxQztRQUNyQyx1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLG9DQUFvQztRQUNwQyxzQ0FBc0M7UUFDdEMsZUFBZTtRQUNmLHdDQUF3QztRQUN4QywwQ0FBMEM7UUFDMUMsZUFBZTtRQUNmLFVBQVU7UUFDVixTQUFTO1FBQ1QsT0FBTztRQUNQLEtBQUs7UUFyQ1AsaUJBNENDO1FBTEMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuRVUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBRSwwQkFBVyxDQUFFO1NBQzNCLENBQUM7eUNBbUJ1QiwwQkFBVztZQUNqQix1QkFBYztZQUNiLGFBQU07T0FwQmIsbUJBQW1CLENBcUUvQjtJQUFELDBCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRGVhbCB9IGZyb20gXCIuL2RlYWxcIjtcbmltcG9ydCB7IERlYWxTZXJ2aWNlIH0gZnJvbSBcIi4vZGVhbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGVhbC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgcHJvdmlkZXJzOiBbIERlYWxTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVhbERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZGVhbDogYW55O1xuICBfZGVhbDogRGVhbDtcbiAgcGs6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbiAgZmFudGFzeTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNucGo6IHN0cmluZztcbiAgc2l0ZTogc3RyaW5nO1xuICBraXRjaGVuOiBBcnJheTxhbnk+O1xuICB3b3JrX21vZGVsczogQXJyYXk8YW55PjtcblxuICAvLyBkZWFsQXJyYXk6IGFueTtcbiAgLy8gcHVibGljIHBrOiBzdHJpbmc7XG4gIC8vIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkZWFsU2VydmljZTogRGVhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuZGVhbCA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAvLyAgIHRoaXMucGsgPSBwYXJhbXNbJ3BrJ107XG4gICAgLy8gICB0aGlzLmRlYWxTZXJ2aWNlLmdldERlYWwodGhpcy5waykuc3Vic2NyaWJlKChkZWFsKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZGVhbCA9IGRlYWw7XG4gICAgLy8gICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgLy8gICAgICAgZm9yIChsZXQgZCBpbiBkZWFsKSB7XG4gICAgLy8gICAgICAgICBpZiAoZCA9PT0gXCJpZFwiKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMucGsgPSBkZWFsW2RdO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKGQgPT09IFwiaW1hZ2VcIikge1xuICAgIC8vICAgICAgICAgICB0aGlzLmltYWdlID0gZGVhbFtkXVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKGQgPT09IFwiZmFudGFzeVwiKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuZmFudGFzeSA9IGRlYWxbZF1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmIChkID09PSBcIm5hbWVcIikge1xuICAgIC8vICAgICAgICAgICB0aGlzLm5hbWUgPSBkZWFsW2RdXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAoZCA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZWFsW2RdXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAoZCA9PT0gXCJjbnBqXCIpIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5jbnBqID0gZGVhbFtkXVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKGQgPT09IFwic2l0ZVwiKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuc2l0ZSA9IGRlYWxbZF1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIC8vIGlmIChkID09PSBcImtpdGNoZW5cIikge1xuICAgIC8vICAgICAgICAgLy8gICB0aGlzLmtpdGNoZW4gPSBkZWFsW2RdXG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICAvLyBpZiAoZCA9PT0gXCJ3b3JrX21vZGVsc1wiKSB7XG4gICAgLy8gICAgICAgICAvLyAgIHRoaXMud29ya19tb2RlbHMgPSBkZWFsW2RdXG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuXG4gICAgY29uc3QgcGsgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJwa1wiXTtcbiAgICB0aGlzLmRlYWxTZXJ2aWNlLmdldERlYWwocGspXG4gICAgICAuc3Vic2NyaWJlKGRlYWwgPT4ge1xuICAgICAgICB0aGlzLl9kZWFsID0gZGVhbDtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==