"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const AddressAdapter_1 = require("./util/AddressAdapter");
const haversine_distance_1 = __importDefault(require("haversine-distance"));
const base_url = "https://api-adresse.data.gouv.fr";
const search = "/search/";
const reverse = "/reverse/";
class Address {
    constructor(id, type, score, housenumber, street, postcode, citycode, city, context, label, x, y, lat, lon, district) {
        this.id = id;
        this.type = type;
        this.score = score;
        this.housenumber = housenumber;
        this.street = street;
        this.postcode = postcode;
        this.citycode = citycode;
        this.city = city;
        this.context = context;
        this.label = label;
        this.x = x;
        this.y = y;
        this.lat = lat;
        this.lon = lon;
        this.district = district;
    }
    /**
     * Search a list of addresses from a query.
     *
     * @example "1 rue de l'equerre 51100"
     *
     * @param query
     * @returns Promise<Address[]>
     */
    static search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const base_url_search = base_url + search;
            const query_url = base_url_search + "?q=" + encodeURI(query);
            const response = yield axios_1.default.get(query_url);
            const addresses = [];
            for (const feature of response.data.features) {
                addresses.push(AddressAdapter_1.AdressAdapter.adapt(feature));
            }
            return addresses;
        });
    }
    /**
     * Reverse geocoding.
     *
     * Search an address from GPS coordinates.
     *
     * @param lat
     * @param lon
     * @returns Promise<Address[]>
     */
    static reverse(lat, lon) {
        return __awaiter(this, void 0, void 0, function* () {
            const base_url_reverse = base_url + reverse;
            const query_url = base_url_reverse + "?lon=" + lon + "&lat=" + lat;
            const response = yield axios_1.default.get(query_url);
            const addresses = [];
            for (const feature of response.data.features) {
                addresses.push(AddressAdapter_1.AdressAdapter.adapt(feature));
            }
            return addresses;
        });
    }
    /**
     * Calculate the distance between from this address to another address.
     *
     * @param address
     * @returns number
     */
    distanceFrom(address) {
        return (0, haversine_distance_1.default)({ lat: this.lat, lon: this.lon }, { lat: address.lat, lon: address.lon });
    }
}
exports.default = Address;
//# sourceMappingURL=Address.js.map