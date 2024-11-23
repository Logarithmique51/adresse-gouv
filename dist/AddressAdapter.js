"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = __importDefault(require("./Address"));
class AdressAdapter {
    static adapt(address) {
        return new Address_1.default(address.properties.id, address.properties.type, address.properties.score, address.properties.housenumber, address.properties.street, address.properties.postcode, address.properties.citycode, address.properties.city, address.properties.context, address.properties.label, address.properties.x, address.properties.y, address.geometry.coordinates[1], address.geometry.coordinates[0], address.properties.district);
    }
}
exports.default = AdressAdapter;
