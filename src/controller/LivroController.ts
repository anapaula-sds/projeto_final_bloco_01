import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";
import { colors } from "../util/Colors";

export class LivroController implements LivroRepository{

    listaLivros = new Array <Livro>();

    public id: number =0;

    procurarPorId(id: number): void {
        let buscaLivro = this.buscarNoArray(id);
 
        if (buscaLivro != null) {
            buscaLivro.visualizar();
        } else
            console.log(colors.fg.red, "\nO Livro id: " + id
                + " não foi encontrada!", colors.reset);
    }

    listarTodas(): void {
        this.listaLivros.forEach(Livro => Livro.visualizar());
    }

    cadastrar(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log("O Produto foi cadastrado com sucesso!")
    }

    atualizar(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.id);
 
        if (buscaLivro != null) {
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log(colors.fg.green, "\nO produto Id: " + livro.id + 
                        " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + livro.id + 
                        " não foi encontrada!", colors.reset);
    }

    deletar(id: number): void {
        let buscaLivro = this.buscarNoArray(id);
 
        if (buscaLivro != null) {
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1); //1 pq apaga somente um 
        	console.log(colors.fg.green,"\nO Livro id: " + id + 
                        " foi apagado com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nO Livro id: " + id + 
                    " não foi encontrado!", colors.reset);
    }

     /*Métodos Auxiliares*/

    /*Gerar Id da Produto*/
    public gerarId(): number {
        return ++this.id;
    }

    /*Checa se um Produto existe*/
    public buscarNoArray(id: number): Livro | null {

        for (let produto of this.listaLivros) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

}