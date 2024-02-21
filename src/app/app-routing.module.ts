import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMenuComponent } from './product/form-menu/form-menu.component';
import { GeneralComponent } from './product/formType/general/general.component';
import { SetupComponent } from './product/formType/setup/setup.component';

const routes: Routes = [
  {path:'',component:GeneralComponent},
  {path:"general",component:GeneralComponent},
  {path:"setup",component:SetupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
