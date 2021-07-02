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
import { HomeComponent } from './routes/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product/productinfo.component';
import { NotFoundComponent } from './routes/notfound.component';
import { AuthGaurdService } from './routes/authgaurd.service';
import { ParkComponent } from './park.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent, children:[{path:'products/:id',component:ProductInfoComponent}]},
  {path:'products',component:ProductsComponent, 
            canActivate: [AuthGaurdService] },
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo: 'not-found'}
  
]

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
    InventoryComponent,
    HomeComponent,
    ProductInfoComponent,
    NotFoundComponent,
    ParkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
