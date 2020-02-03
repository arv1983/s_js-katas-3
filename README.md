# Avaliação: Katas de JavaScript 3

### Visão Geral

Você irá criar uma única página web com um cabeçalho identificado para cada kata seguido de sua solução. Nesses katas, em vez de usar `console.log()` ou `document.write()`, você **precisa** inserir seus resultados no HTML usando os métodos `document.createElement()` e `node.appendChild()`.

*Dê o nome 'katas3' ao seu repositório e 'katas3.js' ao seu arquivo Javascript; além disso, suas funções devem ter os nomes kata1(), kata2(), kata3(), etc. Isso permitirá que nossos testes encontrem suas funções*

A maneira mais fácil de começar é copiando o arquivo de exemplo da **Mini-Aula: Inserindo novos elementos em uma Página**. Você pode copiar e colar o código que está incorporado na aula.

Você pode continuar adicionando cada novo kata no final da página.

Vários destes katas usarão a seguinte amostra de array, que você pode copiar e colar em seu código:

```js
    const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
```

### Katas ###

1.  Exibir os números de 1 a 25: _(1, 2, 3, …, 24, 25)_
2.  Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
3.  Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
4.  Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
5.  Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
6.  Exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
7.  Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
8.  Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
9.  Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)_
10. Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
11. Exibir todos os números pares contidos em sampleArray. _(244, 758, 450, …, 940, 472)_
12. Exibir todos os números ímpares contidos em sampleArray. _(469, 755, 245, …, 179, 535)_
13. Exibir os números divisíveis por 8 em sampleArray: _(712, 456, …, 472)_
14. Exibir o quadrado de cada elemento de sampleArray. _(219961, 570025, …, 222784)_
15. Exibir a soma de todos os números de 1 a 20.
16. Exibir a soma de todos os elementos de sampleArray.
17. Exibir o menor elemento de sampleArray.
18. Exibir o maior elemento de sampleArray.

### Bônus

Se você gosta de um desafio extra, tente completar cada um dos itens acima novamente _sem usar_ quaisquer loops `for` ou `while`.

### *Opcional* Bônus (5 pontos)

*Estes problemas envolvem o uso de estilização CSS, e exigem um certo conhecimento de CSS para serem completados. Iremos cobrir isso mais adiante, mas sinta-se a vontade para fazer uma pesquisa por conta própria se quiser ganhar alguns pontos extras!*

19. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.
20. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px (lembre-se do #4 acima).
21. Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray.
22. Como no #21, mas alternando cores para que retângulo sim, retângulo não seja vermelho.
23. Como no #21, mas pinte os retângulos de largura par de vermelho.

### Envio

Faça o push do código para o seu repositório GitLab e implemente-o via GitLab pages. No Canvas, por favor, envie sua url do Gitlab Pages (ex: https://nomedeusuário.gitlab.io/js-katas-03/) e, no GitLab, adicione KA_grading como membro do seu projeto com a permissão "Reporter".
