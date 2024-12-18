import { Livro } from "./Livro";

export class Terror extends Livro{
    //atributo especifico da classe medicamento
    private _zumbi: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, zumbi: string) {
		super(id, nome, tipo, preco)
        this._zumbi = zumbi;
	}

    //Metodos Get e Set
	public get zumbi(): string {
		return this._zumbi;
	}

	public set zumbi(value: string) {
		this._zumbi = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Zumbi: " + this._zumbi);
    }

}