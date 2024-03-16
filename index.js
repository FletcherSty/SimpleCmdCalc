const readline = require("readline");

var opc;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Pegando números do usuário
rl.question( "Digite o primeiro número: ", (res) => {
    var opc1 = parseFloat(res);
    console.log( "Você digitou: " + opc1 );
// Pegando números do usuário
rl.question( "Digite o segundo número: ", (res)  => {
    var opc2 = parseFloat(res);
    console.log( "Você digitou: " + opc2);
// Pegando operação do usuário
rl.question( "Digite a operação: 1 = Multiplicação, 2 = Soma, 3 = Subtração, 4 = Divisão: ", (res) => {
    opc = parseFloat(res);
    switch( opc ){
    case 1:
        var res = opc1 * opc2;
        console.log( res % 2 === 0 ? res + ": Par"  : res + ": Impar");
    break;
    case 2:
        var res = opc1 + opc2;
        console.log( res % 2 === 0 ? res + ": Par"  : res + ": Impar");
    break;
    case 3:
        var res = opc1 - opc2;
        console.log( res % 2 === 0 ? res + ": Par"  : res + ": Impar");
    break;
    case 4:
        var res = opc1 / opc2;
        console.log( res % 2 === 0 ? res + ": Par"  : res + ": Impar");
    break;
    default:
            console.log( "Operação iválida" );
    };
    rl.close();
        });
    });
});
