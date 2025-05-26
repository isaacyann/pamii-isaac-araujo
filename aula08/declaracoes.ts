let nome: string = 'alison';
let idade: number = 18;
let estaAtivo: boolean = true;

let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['ana', 'bruno', 'carlos'];
let misto: (string | number)[] = ['ana', 25, 'carlos', 30];
let misto2: Array<string | number> = ['ana', 25, 'carlos', 30];

let pessoa: [ string, number] = ['maria', 30];

let id: number | string = 123;
id = 'ABC123';

interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

let novo_usuario: Usuario = {
    nome: 'amanda',
    idade: 18
};