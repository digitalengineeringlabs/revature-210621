import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = []
    subject = new Subject<Array<{title:string}>>()

    getProducts() {
        console.log('getting products...')
        return this.products
    }

    getProduct(id){
        return {title:'Some Product'}
    }

    addProduct(prod){
        this.products.push(prod)
        this.subject.next(this.products)
    }

    deleteProduct(title:string){
        this.products = this.products.filter(product => product.title !== title)
        this.subject.next(this.products)
    }
}