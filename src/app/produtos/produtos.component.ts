import { Produto } from '../Produto';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  produtos: Produto[] = [];
  formulario: FormGroup;

  constructor() {
    
    this.formulario = new FormGroup({});
  }

  ngOnInit(): void {
    this.ExibirProdutos();
    this.formulario = new FormGroup({
      produtoId: new FormControl(),
      nome: new FormControl(),
      quantidade: new FormControl(),
      isComprado: new FormControl(),
    });

    this.ExibirProdutos();
  }

  CadastrarProduto(): void {
    this.formulario.value.produtoId = Guid.create().toString();
    this.formulario.value.isComprado = false;
    const produto: Produto = this.formulario.value;
    this.produtos.push(produto);
    localStorage.setItem('BD', JSON.stringify(this.produtos));
    this.formulario.reset();
  }

  ExibirProdutos(): void {
    const bd = localStorage.getItem('BD');
    if (bd) {
      this.produtos = JSON.parse(bd);
    } else {
      this.produtos = [];
    }
  }


AtualizarProduto(produtoId:string): void{
  const indice: number=this.produtos.findIndex(p=> p.produtoId==produtoId);
if (this.produtos[indice].isComprado){
  this.produtos[indice].isComprado=false
}
else{
  this.produtos[indice].isComprado=true;
}

localStorage.setItem('BD',JSON.stringify(this.produtos));
}

}
