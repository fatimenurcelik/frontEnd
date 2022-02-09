import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getById(3);

let p = new Product();
p.id = 3;
p.name= "Iphone 8";
p.fiyat = 9000;
p.category ="telefon" ;

_productService.saveProduct(p);

//_productService.deleteProduct(_productService.getById(2));

//_productService.deleteProduct(result);

result = _productService.getProducts();

console.log(result);

