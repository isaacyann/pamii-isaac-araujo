function saudacao(nome: string): string {
    return 'olá, ${nome}!';
}
console.log(saudacao('leandro'));

interface Usuario { 
    nome: string;
    idade: number;
    email?: string;
}

function exibirUsuario(usuario: Usuario): void{
    console.log('nome: ${usuario.nome}');
    console.log('idade: ${usuario.idade');
}

exibirUsuario({ nome: ' marcos', idade: 22 });

function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['ana', 'bruno', 'carlos']);