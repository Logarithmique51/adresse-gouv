import  Address  from "./Address";
import { AddressType, department, HouseNumber } from "./types/address";
import { Feature } from "./types/api";

export default class AdressAdapter {
    static adapt(address: Feature): Address {

        return new Address(
            address.properties.id,
            address.properties.type as AddressType,
            address.properties.score,
            address.properties.housenumber as HouseNumber,
            address.properties.street,
            address.properties.postcode,
            address.properties.citycode,
            address.properties.city,
            address.properties.context as unknown as department,
            address.properties.label,
            address.properties.x,
            address.properties.y,
            address.geometry.coordinates[1],
            address.geometry.coordinates[0],
            address.properties.district
        )
    }
}