const form = document.getElementById('form-compare')

form.addEventListener('submit', function(e){
    e.preventDefault()

        
    const valorA = document.getElementById('valor-a').value
    const valorB = document.getElementById('valor-b').value

    const mensagemSucesso = `SUCESSO! O valor B é maior que o valor A!`
    const mensagemErro = `ERRO! O valor B é menor ou igual ao valor A!`

    valorB <= valorA ? alert(mensagemErro) : alert(mensagemSucesso) 
})