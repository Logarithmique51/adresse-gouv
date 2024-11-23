import { AddressType, department, HouseNumber } from '../types/address';
export declare class Address {
    /**
         * The unique identifier for the address.
         * "Clef d’interopérabilité"
         *
         * @example "80021_6590_00008"
         */
    id: string;
    /**
     *  The type of the address.
     *
     *  @example "housenumber"
     */
    type: AddressType;
    /**
     * Relevance of the result.
     *
     * The higher the score, the more relevant the result.
     *
     * Score is a float between 0 and 1.
     *
     * @example "0.49159121588068583"
     */
    score: number;
    /**
     * Number of the address.
     *
     * Can contain a suffix.
     *
     * @example "8"
     * @example "1 bis"
     */
    housenumber: HouseNumber;
    /**
     * Name of the street.
     *
     * @example "Boulevard du Port"
     */
    street: string;
    /**
     * Postal code.
     *
     * @example "80000"
     */
    postcode: string;
    /**
     * City code
     *
     * @example "80021"
     */
    citycode: string;
    /**
     * Name of the city.
     *
     * @example "Amiens"
     */
    city: string;
    /**
     * Name of the district.
     *
     * For Paris, Lyon and Marseille.
     */
    district?: string;
    /**
     * Context of the address.
     *
     * @example "80, Somme, Hauts-de-France"
     */
    context: department;
    /**
     * Label of the address.
     */
    label: string;
    /**
     * X coordinate of the address in legal projection.
     *
     * It's not the GPS coordinates.
     *
     * @example "648952.58"
     */
    x: number;
    /**
     * Y coordinate of the address in legal projection.
     *
     * It's not the GPS coordinates.
     *
     * @example "6956340.2"
     */
    y: number;
    /**
     * Latitude
     *
     * @example "49.894693"
     */
    lat: number;
    /**
     * Longitude
     *
     * @example "2.302839"
     */
    lon: number;
    constructor(id: string, type: AddressType, score: number, housenumber: HouseNumber, street: string, postcode: string, citycode: string, city: string, context: department, label: string, x: number, y: number, lat: number, lon: number, district?: string);
    /**
     * Search a list of addresses from a query.
     *
     * @example "1 rue de l'equerre 51100"
     *
     * @param query
     * @returns Promise<Address[]>
     */
    static search(query: string): Promise<Address[]>;
    /**
     * Reverse geocoding.
     *
     * Search an address from GPS coordinates.
     *
     * @param lat
     * @param lon
     * @returns Promise<Address[]>
     */
    static reverse(lat: number, lon: number): Promise<Address[]>;
    /**
     * Calculate the distance between from this address to another address.
     *
     * @param address
     * @returns number
     */
    distanceFrom(address: Address): number;
}
