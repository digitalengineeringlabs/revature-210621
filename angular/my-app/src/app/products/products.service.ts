import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = []

    getProducts() {
        console.log('getting products...')
        return this.products
    }

    getProduct(id){
        return {title:'Some Product'}
    }

    addProduct(prod){
        this.products.push(prod)
    }

    deleteProduct(title:string){
        this.products = this.products.filter(product => product.title !== title)
    }
}