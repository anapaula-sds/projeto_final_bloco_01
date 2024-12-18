import { Livro } from "./Livro";

export class Conto extends Livro{
    private _deFadas: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, deFadas: string) {
        super(id, nome, tipo, preco)
		this._deFadas = deFadas;
	}

    //Metodos Get e Set
	public get deFadas(): string {
		return this._deFadas;
	}

	public set deFadas(value: string) {
		this._deFadas = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("De Fadas: " + this._deFadas);
    }

}