"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var deal_service_1 = require("./deal.service");
var DealsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function DealsComponent(dealService) {
        this.dealService = dealService;
    }
    DealsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dealService.getDeals()
            .subscribe(function (deals) { return _this.deals = deals; });
    };
    DealsComponent = __decorate([
        core_1.Component({
            selector: "tk-deals",
            // selector: "tk-listview-getting-started",
            moduleId: module.id,
            templateUrl: "./deals.component.html",
        }),
        __metadata("design:paramtypes", [deal_service_1.DealService])
    ], DealsComponent);
    return DealsComponent;
}());
exports.DealsComponent = DealsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQVE3QztJQUdFLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUN4QixTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFWVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQiwyQ0FBMkM7WUFDM0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzt5Q0FNaUMsMEJBQVc7T0FMakMsY0FBYyxDQVcxQjtJQUFELHFCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IERlYWwgfSBmcm9tIFwiLi9kZWFsXCI7XG5pbXBvcnQgeyBEZWFsU2VydmljZSB9IGZyb20gXCIuL2RlYWwuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGstZGVhbHNcIixcbiAgLy8gc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZ2V0dGluZy1zdGFydGVkXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGVhbHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRGVhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkZWFsczogRGVhbFtdO1xuXG4gIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWFsU2VydmljZTogRGVhbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVhbFNlcnZpY2UuZ2V0RGVhbHMoKVxuICAgICAgLnN1YnNjcmliZShkZWFscyA9PiB0aGlzLmRlYWxzID0gZGVhbHMpO1xuICB9XG59XG4iXX0=