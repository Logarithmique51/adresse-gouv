"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuffixHouseNumber = exports.AddressType = void 0;
var AddressType;
(function (AddressType) {
    /**
     * The address is a house number.
     */
    AddressType["HOUSENUMBER"] = "housenumber";
    /**
     * The address is a street.
     */
    AddressType["STREET"] = "street";
    /**
     * The address is a locality.
     * In french 'lieu-dit'
     */
    AddressType["LOCALITY"] = "locality";
    /**
     * The address is a hamlet.
     * In french 'à la commune'
     */
    AddressType["MUNICIPALITY"] = "municipality";
})(AddressType || (exports.AddressType = AddressType = {}));
var SuffixHouseNumber;
(function (SuffixHouseNumber) {
    SuffixHouseNumber["BIS"] = "bis";
    SuffixHouseNumber["TER"] = "ter";
    SuffixHouseNumber["A"] = "A";
    SuffixHouseNumber["B"] = "B";
})(SuffixHouseNumber || (exports.SuffixHouseNumber = SuffixHouseNumber = {}));
