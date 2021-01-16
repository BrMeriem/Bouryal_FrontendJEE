import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {ClientComponent} from './client/client.component';



const routes: Routes = [{

  path: 'produit',
  component: ProduitComponent

},
  {
    path: 'client',
    component: ClientComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
