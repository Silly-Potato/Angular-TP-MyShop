export interface Product {
  id: number;
  name: string;
  specifications: {
    price: number;
    description: string;
    color: string;
  };
  quantity: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    specifications: {
      price: 799,
      description: 'A large phone with one of the best screens',
      color: 'white',
    },
    quantity: 0,
  },
  {
    id: 2,
    name: 'Phone Mini',
    specifications: {
      price: 699,
      description: 'A great phone with one of the best cameras',
      color: 'white',
    },
    quantity: 0,
  },
  {
    id: 3,
    name: 'Phone Standard',
    specifications: {
      price: 299,
      description: '',
      color: 'white',
    },
    quantity: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
