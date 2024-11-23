export enum AddressType {
    /**
     * The address is a house number.
     */
    HOUSENUMBER = 'housenumber',

    /**
     * The address is a street.
     */
    STREET = 'street',

    /**
     * The address is a locality.
     * In french 'lieu-dit'
     */
    LOCALITY = 'locality',

    /**
     * The address is a hamlet.
     * In french 'à la commune'
     */
    MUNICIPALITY = 'municipality'
}

export enum SuffixHouseNumber {
    BIS = 'bis',
    TER = 'ter',
    A = 'A',
    B = 'B',
}

/**
 * Represents a number.
 * Classic number or a suffix.
 * 
 * @example "8"
 * @example "1 bis"
 */
export type HouseNumber = `${number} ${SuffixHouseNumber | ''}`;


export type departmentNumber = `${number}` | '2A' | '2B';

/**
 * string, string, string
 * 
 * -1 = Numéro de département
 * -2 = Nom du département
 * -3 = Nom de la région
 */
export type department = {
    departmentNumber: departmentNumber;
    departmentName: string;
    regionName: string;
}


