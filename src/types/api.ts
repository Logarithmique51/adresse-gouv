export type FeatureCollection = {
    type: "FeatureCollection";
    version: string;
    features: Feature[];
    attribution: string;
    licence: string;
    query: string;
    limit: number;
  };
  
export type Feature = {
    type: "Feature";
    geometry: Geometry;
    properties: Properties;
  };
  
export type Geometry = {
    type: "Point";
    coordinates: [number, number];
  };
  
export type Properties = {
    label: string;
    score: number;
    housenumber: string;
    id: string;
    type: string;
    name: string;
    postcode: string;
    citycode: string;
    x: number;
    y: number;
    city: string;
    context: string;
    importance: number;
    street: string;
    district?: string;
  };
  