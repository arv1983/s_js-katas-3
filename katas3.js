// inserir seus resultados no HTML usando os métodos document.createElement() e node.appendChild().

function resultado(arr, kata) {
    var tag = document.createElement('h2');
    var cabecalho = document.createTextNode(kata);
    tag.appendChild(cabecalho);
    document.body.appendChild(tag);

    var tag = document.createElement('h5');
    var cabecalho = document.createTextNode(arr);
    tag.appendChild(cabecalho);
    document.body.appendChild(tag);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];



kata1();

function kata1() {
    let arr = [];

    for (let i = 1; i <= 25; i++) {
        arr.push(i);
    }

    let kata = 'Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)';
    resultado(arr, kata);
}

kata2();

function kata2() {
    let arr = [];

    for (let i = 25; i >= 1; i--) {
        arr.push(i);
    }

    let kata = 'Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)';
    resultado(arr, kata);
}

kata3();

function kata3() {
    let arr = [];

    for (let i = -1; i >= -25; i--) {
        arr.push(i);
    }
    let kata = 'Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)';
    resultado(arr, kata);
}

kata4();

function kata4() {
    let arr = [];
    for (let i = -25; i <= -1; i++) {
        arr.push(i);
    }


    let kata = 'Exibir os números de - 25 a - 1: (-25, -24, -23, …, -2, -1)';
    resultado(arr, kata);
}

kata5();

function kata5() {
    //Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)

    let arr = [];
    let a = 26;
    for (let i = 0; i <= 52; i++) {
        if (i % 2 == 1) {
            arr.push(a);

        }
        a--;
    }


    let kata = 'Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)';
    resultado(arr, kata);

}

kata6();

function kata6() {
    let arr = [];
    for (let i = 1; i <= 99; i++) {
        if (i % 3 == 0) {
            arr.push(i);
        }
    }

    let kata = 'Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)';
    resultado(arr, kata);
}

kata7();
//Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
function kata7() {
    let arr = [];
    for (let i = 1; i <= 99; i++) {
        if (i % 7 == 0) {
            arr.push(i);
        }
    }


    let kata = 'Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)';
    resultado(arr, kata);
}

kata8();

function kata8() {
    // implemente o código do kata 8 aqui

    let arr = [];

    for (let i = 100; i >= 1; i--) {
        if (i % 3 == 0 || i % 7 == 0) {
            arr.push(i);
        }
    }
    let kata = '8 Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)';
    resultado(arr, kata);
}



kata9();

function kata9() {

    let arr = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0 && i % 2 == 1) {
            arr.push(i);
        }
    }
    let kata = 'Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)';
    resultado(arr, kata);
}

kata10();

function kata10() {



    let kata = 'Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)';
    resultado(sampleArray, kata);

}

kata11();

function kata11() {
    // implemente o código do kata 11 aqui

    //sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    //let sample = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let arr = [];

    for (let i = 0; i <= sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 0) {
            arr.push(sampleArray[i]);
        }
    }
    let kata = 'Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)';
    resultado(arr, kata);
}

kata12();

function kata12() {
    let arr = [];

    for (let i = 0; i <= sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 1) {
            arr.push(sampleArray[i]);
        }
    }
    // implemente o código do kata 12 aqui
    let kata = 'Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)';
    resultado(arr, kata);
}


kata13();

function kata13() {
    let arr = [];

    for (let i = 0; i <= sampleArray.length; i++) {

        if (sampleArray[i] % 8 == 0) {
            arr.push(sampleArray[i]);
        }
    }
    let kata = 'Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)';
    resultado(arr, kata);
}


kata14();

function kata14() {

    let arr = [];

    for (let i = 0; i < sampleArray.length; i++) {
        let resultado = sampleArray[i] * sampleArray[i];
        arr.push(resultado);
    }

    let kata = 'Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)';
    resultado(arr, kata);
}


kata15();

function kata15() {

    let soma = 0;
    for (let i = 0; i <= 20; i++) {
        soma += i;
    }

    let kata = 'Exibir a soma de todos os números de 1 a 20.';
    resultado(soma, kata);

}

kata16();

function kata16() {

    let soma2 = 0;
    for (let i = 0; i < sampleArray.length; i++) {

        soma2 += sampleArray[i];
    }

    let kata = 'Exibir a soma de todos os elementos de sampleArray.';
    resultado(soma2, kata);
}

kata17();

function kata17() {
    let gambiarra = sampleArray.sort((a, b) => a - b);
    let arr = gambiarra[0];

    let kata = 'Exibir o menor elemento de sampleArray.';
    resultado(arr, kata);
}

kata18();

function kata18() {

    let gambiarra = sampleArray.sort((a, b) => b - a);
    let arr = gambiarra[0];


    let kata = 'Exibir o maior elemento de sampleArray.';
    resultado(arr, kata);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}