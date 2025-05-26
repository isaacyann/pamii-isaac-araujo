let nome: string = "Mouse";
let preco: number = 59.09;
let disponivel: boolean = true;

interface Produto { 
    nome: string;
    preco: number;
    disponivel?: boolean;
}

function ixibirProduto(produto: Produto): void {
    console.log('Nome: ${produto.nome}');
    console.log('Nome: ${produto.number}');
    console.log('Nome: ${produto.disponivel}');
}