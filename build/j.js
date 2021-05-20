"use strict";
var HoldAnything = /** @class */ (function () {
    function HoldAnything(data) {
        this.data = data;
    }
    HoldAnything.prototype.add = function (a) {
        return a;
    };
    return HoldAnything;
}());
var holdNumber = new HoldAnything(5);
holdNumber.data = 321;
holdNumber.add(2);
var holdString = new HoldAnything('Heelo');
holdString.data = 'hey';
