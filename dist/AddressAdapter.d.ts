import Address from "./Address";
import { Feature } from "./types/api";
export default class AdressAdapter {
    static adapt(address: Feature): Address;
}
