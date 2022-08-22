import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduit } from '../stock/iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  stock: Iproduit[] = [
    {
      id: 1,
      name: "Coca 33cl",
      description: "C'est une boisson alcoolisée à base de coca, de noix de kola et de damiana, Pemberton se serait inspiré de la recette du vin Mariani, un mélange de vin de ...",
      image: "https://africalicious.be/wp-content/uploads/2020/12/Coca-e1608292123533.jpg",
      price: 2,
      quantity: 0
    },
    {
      id: 2,
      name: "Fanta 33cl",
      description: "Bright, bubbly and popular, Fanta is the soft drink that intensifies fun. Introduced in 1940, Fanta is the second oldest brand of The Coca-Cola Company. Bright, ...",
      image: "https://cdn.shopify.com/s/files/1/0020/9417/0167/products/fanta-grape-049000014242-31792001548451_660x.jpg?v=1660374201",
      price: 3,
      quantity: 3
    },
    {
      id: 3,
      name: "Sprite 33cl",
      description: "Crisp, refreshing and clean-tasting, Sprite is a lemon and lime-flavoured soft drink. It first hit shop shelves back in 1961 and today it's sold in more than ...",
      image: "https://www.saudasulf.com/wp-content/uploads/2022/01/12628509-0-M.jpg",
      price: 4,
      quantity: 3
    },
    {
      id: 4,
      name: "Ice-tea 33cl",
      description: "Iced tea is a form of cold tea. It may or may not be sweetened and is also a popular packaged drink. It can be mixed with flavored syrup with multiple ...",
      image: "https://www.menu-touch.fr/resto/media/7118/2a5bb805c9ceb12f6a29042bea615720.jpg",
      price: 5,
      quantity: 3
    },
    {
      id: 5,
      name: "Red-bull 33cl",
      description: "Red Bull est une boisson énergisante qui vous donne des ailes quel que soit le moment où vous en avez besoin.",
      image: "https://www.thuisdrinken.nl/crop/660x660/products/5299/5299_40",
      price: 6,
      quantity: 3
    }
  ]
 
  selectedProduct?: Iproduit;


  constructor(route: ActivatedRoute) {
    const selectedId = route.snapshot.params['id'];
    this.selectedProduct = this.stock.find( (e) => e.id == selectedId );
  }

  ngOnInit(): void {
  }

}
