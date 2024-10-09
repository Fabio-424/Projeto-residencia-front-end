export class Produto {
    produtoId: string;
    nome: string;
    quantidade: number;
    isComprado: boolean; 
  
    constructor() {
      this.produtoId = '';
      this.nome = '';
      this.quantidade = 0;
      this.isComprado = false; 
    }
  }
  