import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from '@coreui/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { ShortenDescriptionPipe } from './pipes/shorten-description.pipe';
import { CategoryComponent } from './admin/category/category.component';
import { ShopsComponent } from './shops/shops.component';
import { MapComponent } from './map/map.component';
import { AboutUsComponent } from './about-us/about-us.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductsComponent,
    AdminHomeComponent,
    SingleProductComponent,
    NavbarComponent,
    ProductPricePipe,
    ShortenDescriptionPipe,
    CategoryComponent,
    ShopsComponent,
    MapComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    AngularToastifyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
