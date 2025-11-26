alert ("informe as notas de 0 a 10")

let nota1 = parseFloat (prompt("Digite a primeira nota : "))
let nota2 = parseFloat (prompt("Digite asegunda nota : "))
let nota3 = parseFloat (prompt("Digite a terceira nota : "))
let nota4 = parseFloat (prompt("Digite a quarta nota : "))

let media  = (nota1 = nota2 = nota3 = nota4)/4 

console.log ("A media do aluno é: " + media)

if(media >= 7){
    console.log("APROVADO")
}
else if( media < 7 && media >= 5){
    console.log("RECUPERAÇÃO")
}
else {
    console.log("REPROVADO!!")
}