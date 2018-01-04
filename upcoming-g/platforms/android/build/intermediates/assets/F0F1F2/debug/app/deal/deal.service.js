"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DealService = (function () {
    function DealService(http) {
        this.http = http;
        this.serverAPI = "http://127.0.0.1:8000/api/restaurants";
    }
    DealService.prototype.getDeals = function () {
        // return this.http.get(`${ GOEAT_API }/deals/`)
        return this.http.get(this.serverAPI + "/")
            .map(function (response) { return response.json(); });
    };
    DealService.prototype.getDeal = function (pk) {
        return this.http.get(this.serverAPI + "/" + pk + "/")
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    DealService.prototype.handleErrors = function (error) {
        return Observable_1.Observable.throw(error);
    };
    DealService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DealService);
    return DealService;
}());
exports.DealService = DealService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUUvQyw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLG1DQUFpQztBQU9qQztJQUlFLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixjQUFTLEdBQUcsdUNBQXVDLENBQUE7SUFFM0IsQ0FBQztJQUVqQyw4QkFBUSxHQUFSO1FBQ0UsZ0RBQWdEO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxNQUFHLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxFQUFFLE1BQUcsQ0FBQzthQUM3QyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcEJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLZSxXQUFJO09BSm5CLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5pbXBvcnQgeyBEZWFsIH0gZnJvbSBcIi4vZGVhbFwiO1xuXG5pbXBvcnQgeyBHT0VBVF9BUEkgfSBmcm9tIFwiLi4vYXBwLmFwaVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVhbFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc2VydmVyQVBJID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Jlc3RhdXJhbnRzXCJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe31cblxuICBnZXREZWFscygpOiBPYnNlcnZhYmxlPERlYWxbXT4ge1xuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAkeyBHT0VBVF9BUEkgfS9kZWFscy9gKVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VydmVyQVBJfS9gKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgZ2V0RGVhbChwazogbnVtYmVyKTogT2JzZXJ2YWJsZTxEZWFsPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZXJ2ZXJBUEl9LyR7cGt9L2ApXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG59XG4iXX0=