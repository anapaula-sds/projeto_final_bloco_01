import { Livro } from "./Livro";

export class Terror extends Livro{
    //atributo especifico da classe medicamento
    private _tipoTerror: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, tipoTerror: string) {
		super(id, nome, tipo, preco)
        this._tipoTerror = tipoTerror;
	}

    //Metodos Get e Set
	public get tipoTerror(): string {
		return this._tipoTerror;
	}

	public set tipoTerror(value: string) {
		this._tipoTerror = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo do Terror: " + this._tipoTerror);
    }

}