import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormMenuComponent } from './product/form-menu/form-menu.component';
import { FormTypeComponent } from './product/form-type/form-type.component';
import { GeneralComponent } from './product/formType/general/general.component';
import { SetupComponent } from './product/formType/setup/setup.component';
import { FormFooterComponent } from './product/form-footer/form-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FormMenuComponent,
    FormTypeComponent,
    GeneralComponent,
    SetupComponent,
    FormFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
