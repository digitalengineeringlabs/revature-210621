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
import { UserService } from './user.service';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { VehiclesComponent } from './project/vehicles/vehicles.component';
import { InventoryComponent } from './project/inventory/inventory.component';

@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    ProductComponent,
    PostComponent,
    ProductsComponent,
    ObservSampleComponent,
    ProductListComponent,
    ShortenPipe,
    SampleComponent,
    SignupComponent,
    LoginComponent,
    VehiclesComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
