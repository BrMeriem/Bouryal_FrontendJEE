import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  public products: any;


  constructor(private produitService: ProduitService) { }


  ngOnInit(): void {
    this.produitService.getProducts()
      .subscribe(data => {
        this.products = data;
      }, err => {
        console.log(err);
      });
  }

}
