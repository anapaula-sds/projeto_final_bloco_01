import { Livro } from "./Livro";

export class Conto extends Livro{
    private _tipoConto: string;

    //Metodo Construtor
	constructor(id: number, nome: string, tipo: number, preco: number, tipoConto: string) {
        super(id, nome, tipo, preco)
		this._tipoConto = tipoConto;
	}

    //Metodos Get e Set
	public get tipoConto(): string {
		return this._tipoConto;
	}

	public set tipoConto(value: string) {
		this._tipoConto = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("Tipo do Conto: " + this._tipoConto);
    }

}