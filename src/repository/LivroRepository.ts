import { Livro } from "../model/Livro";

export interface LivroRepository {

	// CRUD da Produto
	procurarPorId(numero: number): void;
	listarTodas(): void;
	cadastrar(livro: Livro): void;
	atualizar(livro: Livro): void;
	deletar(numero: number): void;
	
}