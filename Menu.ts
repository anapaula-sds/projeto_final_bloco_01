import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors"
import { Terror } from "./src/model/Terror"
import { Conto } from "./src/model/Conto"
import { LivroController } from "./src/controller/LivroController";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, tipoTerror, deFadas: string;
    let tipoLivro = ['Terror', 'Conto']

    //Instanciar um objeto da classe LivroController
    const livros = new LivroController();

while (true) {

console.log(colors.bg.black, colors.fg.bluestrong, 
            "*****************************************************");
console.log("                                                     ");
console.log("            LIVRARIA HISTORIA EM CATALOGO            ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Cadastrar Livro                      ");
console.log("            2 - Listar Todos os Livros               ");
console.log("            3 - Listar Livro po Id                   ");
console.log("            4 - Atualizar Dados dos Livros           ");
console.log("            5 - Apagar Livro                         ");
console.log("            6 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ", 
colors.reset);

console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.blue, 
                "\nLIVRARIA HISTORIA EM CATALOGO  - Te ajudando a encontrar a verdade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.greenstrong, 
                    "\n\nCadastrar Livro\n\n", colors.reset);
                    console.log(colors.fg.greenstrong, 
                        "\n\nCadastrar Livro\n\n", colors.reset);
                    nome = readlinesync.question("Digite o Nome do Livro: ");
     
                    tipo = readlinesync.keyInSelect(tipoLivro, "", { cancel: false }) + 1;
     
                    preco = readlinesync.questionFloat("Digite o preco: ");
    
                    switch(tipo){
                        case 1:
                            tipoTerror = readlinesync.question("Digite o Tipo do Livro de Terror: ");
                            //Instanciar o objeto dentro do próprio método
                            livros.cadastrar(new Terror(livros.gerarId(), nome, tipo, preco, tipoTerror))
                        break;
    
                        case 2:
                            deFadas = readlinesync.question("Digite o tema contos de Livros: ");
                            livros.cadastrar(new Conto(livros.gerarId(), nome, tipo, preco, deFadas))
                        break;
                    }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.greenstrong, 
                    "\n\nListar todos os Livros\n\n", colors.reset);
                    livros.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.greenstrong, 
                    "\n\nListar Livro Por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id: ")
                    livros.procurarPorId(id);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.greenstrong, 
                    "\n\nAtualizar dados do Livro\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Livro: ");
 
                // Verifica se o Produto existe
                let livro = livros.buscarNoArray(id);
 
                if (livro !== null) {
 
                    nome = readlinesync.question("Digite o Nome do Livro: ");
 
                    tipo = livro.tipo;
 
                    preco = readlinesync.questionFloat("Digite o preco: ");
 
                    switch (tipo) {
                        case 1:
                            tipoTerror = readlinesync.question("Digite o Tipo do Livro de Terror: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            livros.atualizar(new Terror(id,
                                nome, tipo, preco, tipoTerror));
                            break;
                        case 2:
                            deFadas = readlinesync.question("Digite o tema contos de Livros: ");
                            // Observe que na atualização, enviamos o id, ao invés de chamaramos
                            // o método gerarId()
                            livros.atualizar(new Conto(id,
                                nome, tipo, preco, deFadas));
                            break;
                    }
 
                } else
                    console.log("Livro não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.greenstrong, 
                    "\n\nApagar um Livro\n\n", colors.reset);
                    id = readlinesync.questionInt("Digite o Id: ")
                    livros.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.blue, 
                    "\nLIVRARIA HISTORIA EM CATALOGO  - Te ajudando a encontrar a verdade!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Ana Paula Santana - anapaula-sds@hotmail.com");
    console.log("https://github.com/anapaula-sds");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();