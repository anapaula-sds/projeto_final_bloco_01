import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

while (true) {

console.log(colors.bg.black, colors.fg.yellow, 
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
            console.log(colors.fg.greenstrong, 
                "\nLIVRARIA HISTORIA EM CATALOGO  - Te ajudando a encontrar a verdade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar Livro\n\n", colors.reset);
            
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar um Produto\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
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
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();