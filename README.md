#Exercicios #Semana2 #MarianaVNS #Calculadora #ConceitosBásicos

# Conceitos Básicos de Programação

# **Sumário**

**1 - [Bits em Toda Parte](#Bits-em-toda-parte)**

• [Agrupamentos de Bits](#Agrupamento-de-bits)</br>
 ○ [8 Bits é igual a 1 Byte](#8-Bits-é-igual-a-1-Byte)</br>
 ○ [Vários e vários bytes são Valores](#Vários-e-vários-bytes-são-Valores)</br>

**2 - [Valores Inalteráveis são os Tipos Primitivos](#Valores-inalteráveis-são-os-Tipos-Primitivos)** 

• [Números](#Números)</br>
 ○ [Números Comuns](#Números-Comuns)</br>
 ○ *[BigInt](#BigInt)*</br>
 ○ *[Números Especiais](#Números-Especiais)*</br>
   ° *(infinity+, infinity- e NaN)*
</br>

• [Strings](#Strings)
</br>

• [Booleanos](#Booleanos)
</br>

• [Valores Indefinidos](#Valores-Indefinidos)
</br>

> **3 - [Operadores](#Operadores)**

• [Operadores Unários](#Operadores-Unários)
</br>

• [Operadores Binários](#Operadores-Binários)</br>
 ○ [Operadores Binários de Concatenação](#Operadores-Binários-de-Concatenação)</br>
 ○ [Operadores Binários Aritméticos](#Operadores-Binários-Aritméticos)</br>
 ○ [Operadores Binários de Comparação](#Operadores-Binários-de-Comparação)</br>
 ○ [Operadores Binários Lógicos](#Operadores-Binários-Lógicos)</br>
 </br>

• [Operador ternário](#Operador-Ternário)</br>
° Importante!


> **4 - [Consertos Internos de Tipos do JavaScript](#Consertos-Internos-de-Tipos-do-Javascript)**

>**3 - [Escopo e Tipos de Variáveis](#Escopo-e-Tipos-de-Variáveis)**

>**4 - [Detalhando o Escopo Global](#Detalhando-o-Escopo-Global)**
</br>
</br>

# Bits em Toda Parte
> Abaixo da parte superficial da máquina, o programa se movimenta. Sem esforço, ele se expande e se contrai. Com grande harmonia, os elétrons se espalham e se reagrupam. As formas no monitor são como ondulações na água. A essência permanece invisível por baixo.</br>
> — Master Yuan-Ma, The Book of Programming

Quando ligamos o computador, os bits já começam a funcionar. </br></br> 
O bit é a menor parcela de informação que pode ser armazenada ou transmitida pelo computador, e é representado por `0` ou `1`, significando corte ou passagem de energia.

Sendo assim, um bit sozinho não consegue representar um caracter, certo? Afinal a informação que ele carrega é apenas `0` ou `1`. Então como conseguimos escrever tantas letras e frases diferentes sem que elas virem apenas `0` e `1` na tela?

## Agrupamento de bits

### 8 Bits é igual a 1 Byte

Para permitir maiores combinações de bits e, consequentemente, maior variedade do que pode ser escrito em tela, o computador usa o **byte**.
</br></br>
O byte é um *conjunto de 8 bits*.
</br></br>
Conforme cada bit dentro de um byte esteja "ligado" ou não, o byte corresponde a um valor na tabela, numa correspondência direta. A tabela avança de um bit para outro numa potência de 2*. Veja abaixo:

**Tabela central de byte:**
```
bit                  8°  7°  6°  5°  4°  3°  2°  1°
o bit está ligado?   1   1   1   1   1   1   1   1
valor              128  64  32  16   8   4   2   1
```
</br>

**Conversões de números:**

Número  | Número em byte
------- | ------
13      | "1101" (completo: 0000 1101) = 8 + 4 + 1
200     | "1100 1000" = 128 + 64 + 8

</br>
Temos ainda a Tabela ASCII, que reaproveita a representação de números para representar caracteres também.
</br></br>

**Conversões de caracteres:**

Caracter | Caracter em byte
-------- | ---------------------------
m | "110 1101" (completo 0110 1101) = determinado pela TABELA ASCII. É o mesmo código do número `109`.
@ | "100 0000" (completo 0100 0000) = determinado pela TABELA ASCII. É o mesmo código do número `64`.

</br>

![tabelaascii](https://i.ibb.co/9wCSSF4/tabelaascii.gif)

</br>
</br>
*Por que a tabela avança numa potência de 2?
</br>
</br>
Pensa comigo:</br>
- Se tenho apenas 1 copo e 2 sabores de suco, morango e laranja, tenho 2 possibilidades: encher com suco de morango ou de laranja. Possibilidades: 2, ou 2¹.
</br>
</br>
- Se agora tenho 2 copos, tenho 4 possibilidades: encher com (morango e morango) ou (morango e laranja) ou (laranja e laranja) ou (laranja e morango). Possibilidades: 4, ou 2². 
</br>
</br>
- Se tenho mais um copo, as possibilidades já pulam para 8! (MMM), (MML), (MLM), (MLL), (LLL), (LLM), (LML), (LMM)! Haja variações! Possibilidades: 8, ou 2³.
</br>
</br>
Assim é a sequência binária. Se eu ganho "mais um copo para encher", ou seja, mais um bit, ganho mais um lugar para aumentar minhas combinações.

E já que o *byte é uma sequencia de 8 bits, tenho 2⁸ possibilidades*, ou 256! Então consigo contar de 0 a 255 apenas com 1 byte!

Se quiser passar de 255, preciso adicionar mais um bit.

### Vários e vários bytes são Valores

Como já deu pra perceber, o computador faz muito mais coisas além de escrever números e letras. Ele calcula, nos permite entrar em programas, mostra e edita imagens, se conecta na internet, atualiza o sistema operacional... Tudo isso seria impossível usando apenas letras e números puramente.

Para permitir tantas funções, milhões de bites e bytes se organizam em números, letras, combinações lógicas e, **no JavaScript**, eles são organizados em pequenos pedaços chamados **valores**.

Os valores são:
- Números;
- Strings;
- Booleanos;
- Valores Indefinidos;
- Funções;
- Objetos.

# Valores inalteráveis são os Tipos Primitivos

Em JavaScript, temos esses seis tipos principais de "coisas" que formam outras. Mas esses são as bases.

Os quatro primeiros valores formam um grupo chamado "Tipos Primitivos". Números, strings, booleanos e valores indefinidos são tipos primitivos. Eles têm esse nome pois seus valores não podem ser alterados de forma alguma.

Os outros dois, funções e objetos, não serão tratados neste texto.

## Números

### Números Comuns

Os números que já conhecemos são armazenados no computador em até 64 bits. Ou seja, podem chegar em até 2^64 ou 18 quintilhões, que é 18 seguido de 18 zeros. Já é muita coisa, né?

Mas vale pensar que nem todos os inteiros até 18 quintilhões podem ser representados, pois existem os números decimais e o pontinho do decimal já conta como um bit consumido. 

Números negativos também existem no JavaScript, então mais um bit é gasto para o sinal de negativo. Já perdemos dois espaços.

Para retratar números maiores que os 18 quintilhões, ou algo perto disso, o JavaScript trouxe um outro tipo primitivo dentro de números: o BigInt.

### BigInt

O BigInt consegue retratar números maiores que 9 quatriliones (9*10^15). Ao expressar 500 quintilhões em JS, por exemplo, usamos o BigInt da seguinte forma:

`var big = BigInt(50000000000000000000000000000000000000000000000000)`

Mas esse recurso só precisa ser usado em cálculos de precisão com números enormes. 
> Importante: é vetado realizar operações com números comuns e bigint juntos.

### Números Especiais
(infinity+, infinity- e NaN)

- `Infinity` e `-Infinity` são os infinitos que conhecemos, tanto positivo quanto negativo. **∞**
- `NaN` é um tipo de número JS, mesmo significando *"Not a Number"*. Ele aparece se for dividido zero por zero ou infinity - infinity, ou caso haja cálculos que resultem em algo não preciso ou significativo.

## Strings

Strings são os textos, as frases, tudo o que colocamos entre aspas, sejam elas simples ou duplas. Caso precise incluir caracteres especiais, como as próprias aspas ou quebra de linha, usamos a barra invertida (\). Exemplos:


- Quebra de linha: \n

`console.log ('Agora sim café com pão \n Agora sim voa fumaça')`

Resultado no console:

```js
Agora sim café com pão
Agora sim voa fumaça
```

- Tabulação: \t

`console.log ('Estado \t Cidade \n Pernambuco \t Jaboatão \n Acre \t Rio Branco')`

Resultado no console:
```js
Estado       Cidade
Pernambuco   Jaboatão
Acre         Rio Branco
```

- Imprimir a própria barra invertida ou as aspas:

`console.log('Usamos a barra invertida (\'\\\') para mudar a estrutura de uma string.')`

Resultado no console:

`Usamos a barra invertida ('\') para mudar a estrutura de uma string.`

## Booleanos

Os booleanos podem ser considerados o tipo de valor mais simples, pois só tem duas possibilidades: `true` ou `false`. É aplicado quando é necessário fazer validações como:
```js
console.log(100 < 3) // false
console.log(35 >= 2) // true`
```

A título de curiosidade: Os caracteres também podem ser comparados! Lembra que cada caracter corresponde a um número na tabela ASCII? É esse número que o JS usa quando comparamos dois caracteres!
```js
console.log('A' < 'm') // true
console.log('!' >= '#') // false
console.log('@' == '_') // false
```

## Valores Indefinidos

> Existem dois valores especiais, null e undefined, que são usados para indicar a ausência de um valor com significado. Eles são valores por si sós, mas não carregam nenhum tipo de informação.

Tente pensar neles, por enquanto, como uma coisa só.

# Operadores

## Operadores Unários

Operam sobre apenas um elemento. Um exemplo muito útil é o `typeof`. Assim como o sinal de adição ou subtração, o typeof também é um operador, mas atua retornando qual o tipo do valor em questão. Exemplos:
```js
console.log(typeof 13)              //number
console.log(typeof 0/0)             //NaN
console.log(typeof NaN)             //number (!!!)
console.log(typeof 'preto')         //string
console.log(typeof true)            //boolean
console.log(typeof undefined)       //undefined
console.log(typeof console.log)     //function
console.log(typeof [2, 4, -1, 0])   //object
```
O sinal de subtração pode ser unário também, assim: `console.log( - (10-2))`. Aqui ele apenas muda o sinal de um único valor.

## Operadores Binários 
Operam com dois fatores, seja somando, concatenando, comparando...

### Operadores Binários de Concatenação
`+`: Quando usado com strings, une.

### Operadores Binários Aritméticos
`+ - * / e %`

**%** é o operador de resto. `10 % 2` retornará o valor `0` e `529 % 12` retornará o valor `7`.

### Operadores Binários de Comparação
```js
> < // maior que, menor que.
>=, <= // maior ou igual a, menor ou igual a.
==, != // double equal: igual/diferente em conteúdo.
===, !== // triple equal: igual/diferente em conteúdo e tipo.
```
Curiosidade: `console.log(NaN == NaN) // → false` :joy:

NaN é supostamente usado para indicar o resultado de alguma operação que não tenha sentido e, por isso, ele não será igual ao resultado de quaisquer outras operações sem sentido.

### Operadores Binários Lógicos
```js
&& // and, e
|| // or, ou
```

## Operador Ternário
> Importante!

`?` e `:`
Os dois juntos funcionam como uma condição. Exemplo:

```js
console.log ( idade >= 18 ? 'Pode entrar!' : 'Proibida a entrada' )
```
Tradução: idade é maior ou = a 18? 'Pode entrar!' Não é? 'Proibida a entrada'

# Consertos Internos de Tipos do JavaScript

Pode acontecer de misturarmos os tipos numa mesma operação, mesmo não sendo o certo. O javaScript vai fazer seu máximo para consertar isso internamente, como nos exemplos abaixo:

```js
console.log ( '5' - 1 ) // 4 → A string '5' foi transformada em número. 
console.log ( '5' + 1 ) // 51 → O número 1 foi transformado em string e concatenado.
console.log ( 8 * null ) // 0 → O 'null' foi interpretado como zero.
console.log ( true == 1 ) // true → True é simbolizado por 1 em bits
console.log ( false == 0 ) // true → true 
```

Mas, ainda assim, se um programa for escrito com vários tipos diferentes misturados, a chance de dar errado é grande. Confira sempre e só misture do jeito certo. :wink:

# Para um próximo capítulo
## Escopo e Tipos de Variáveis

O escopo é um lugar no código delimitado por chaves. 

Alguns elementos são próprios de cada escopo e não é possível puxá-los para fora.

A variável* `var` é a única que permite que isso aconteça. Ela consegue ser acessada de qualquer lugar, sendo aquilo que chamamos de *variável global*. Isso acaba ocasionando mais erros, pois a `var` pode ser reatribuída em qualquer parte do código, e descobrir onde está o erro de reatribuição pode ser um problemão.

Por isso, a mais nova versão do JavaScript, a ECMAScript 6 (ES6) trouxe os conceitos de `let` e da `const`. Vamos entender:

A `let` é como uma `var`: ela pode ser redeclarada, sem problema. Mas a `let` só funciona dentro do seu escopo. Exemplo:
```js
{
    let nome = 'Mariana'
    console.log(nome) // terminal; 'Mariana'
}
console.log(nome) // "nome is not defined"
}
```  
A `const` é mais restrita: funciona apenas no seu escopo e não pode ser reatribuída nem redeclarada.

### Sombreamento

É possível ter *lets* com o mesmo nome, *desde que* elas estejam em blocos diferentes e não-alinhados. É o chamado **sombreamento**.

## Detalhando o Escopo Global

Uma variável está no escopo global quando ela é declarada fora de chaves. Dessa forma, qualquer escopo menorzinho consegue pegar aquele valor. Exemplo:

```js
let nome = 'Mariana'
{
let sobrenome = 'Souza'
console.log(`${sobrenome}, ${nome}`) 
}
// Terminal: Souza, Mariana.
// O console.log conseguiu acessar as duas variáveis, 
//tanto a global quanto a variável que estava no mesmo escopo que ele.


{
let nome = 'Mariana'
let sobrenome = 'Souza'
}
    console.log(`${sobrenome}, ${nome}`)

// Terminal: "nome is not defined", pois "nome" está num escopo fechado 
//e o console.log não consegue acessar.
```

*As variáveis são elementos que são **içados** para o início do escopo em que está. Por isso, é permitido digitar uma variável que ainda não foi declarada.
