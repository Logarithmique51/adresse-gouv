
> Wrapper for:  api-adresse.data.gouv.fr 

[![Downloads](https://badgen.net/npm/dt/adresse-gouv)](https://www.npmjs.com/package/adresse-gouv)


## Info

- I'm not affiliate with the french gouv.

## Install

```sh
npm install adresse-gouv
```

## Usage

```js
// Find an address by name
// Return an array of addresses order by relevance
const address = await Address.search("1 rue de l'equerre 51100");

// Find an address by latitude and longitude
// Return an array of addresses order by relevance
const address = await Address.reverse(48.866667, 2.333333);


// Calculate the distance between two addresses
const address1 = await Address.search("1 rue de l'equerre 51100");
const address2 = await Address.search("4 rue de l'equerre 51100");

const distanceBetween = address1[0].distanceFrom(address2[0]);
```
