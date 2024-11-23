"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdressAdapter = void 0;
var Address_1 = require("../model/Address");
var AdressAdapter = /** @class */ (function () {
    function AdressAdapter() {
    }
    AdressAdapter.adapt = function (address) {
        return new Address_1.Address(address.properties.id, address.properties.type, address.properties.score, address.properties.housenumber, address.properties.street, address.properties.postcode, address.properties.citycode, address.properties.city, address.properties.context, address.properties.label, address.properties.x, address.properties.y, address.geometry.coordinates[1], address.geometry.coordinates[0], address.properties.district);
    };
    return AdressAdapter;
}());
exports.AdressAdapter = AdressAdapter;
