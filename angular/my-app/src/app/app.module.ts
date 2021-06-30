import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { ShortenPipe } from './shorten.pipe';
import { ProductService } from './products/products.service';
import { ObservSampleComponent } from './obsersample.component';
import { ProductListComponent } from './products/list.component';
import { SampleComponent } from './api/sample/sample.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    ProductComponent,
    PostComponent,
    ProductsComponent,
    ObservSampleComponent,
    ProductListComponent,
    ShortenPipe,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
