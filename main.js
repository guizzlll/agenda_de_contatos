const form = document.getElementById('form-agenda');
const atividades = [];
const notas = [];
let linhas = " "

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha (){
    const inputNome = document.getElementById('nome-contato')
    const inputTelefone = document.getElementById('numero-contato')

    if(atividades.includes(inputNome.value)){
        alert (`A atividade: ${inputTelefone.value} ja foi inserida`)
    } else{
        
    atividades.push(inputNome.value);
    notas.push(parseFloat(inputTelefone.value))

    let linha = '<tr/>'
    linha += `<td>${inputNome.value}`
    linha += `<td>${inputTelefone.value}`
    linha += '</tr>'

    linhas += linha; 
    }


    inputNome.value = " "
    inputTelefone.value = " "
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}