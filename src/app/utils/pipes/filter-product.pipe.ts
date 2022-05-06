import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../../products/Products';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(productsData: Products[], filterByMale: boolean, filterByFemale: boolean): Products[] {
    let products = productsData;
    let filteredProductsData: Array<Products> = [];

    if (filterByMale && filterByFemale) {
      filteredProductsData = productsData.filter(product => {
        return product.gender === 'M' || product.gender === 'F';
      })
    } else {
      if (filterByMale) {
        filteredProductsData = productsData.filter(product => {
          return product.gender === 'M';
        })
      } else if (filterByFemale) {
        filteredProductsData = productsData.filter(product => {
          return product.gender === 'F';
        })
      } else {
        filteredProductsData = products;
      }
    }



    return filteredProductsData;
  }

}
