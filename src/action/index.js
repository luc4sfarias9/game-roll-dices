let continuar = true

while (continuar) {
    // Lançamento do dado
    const dado = Math.floor(Math.random() * 6) + 1
    
    // Escolha do jogador
    let escolha = prompt("Escolha par ou ímpar (p/i): ").toLowerCase()
    
    // Verificação se a escolha do jogador é válida
    const decideEscolha = escolha !== 'p' && escolha !== 'i'

    if (decideEscolha) {
        alert("Escolha inválida. Por favor, escolha 'p' para par ou 'i' para ímpar.")
        continue
    }
    
    console.log(`Você escolheu ${escolha}.`)
    
    // Resultado do lançamento
    console.log(`O dado foi lançado e caiu em: ${dado}.`)
    
    // Verificando se o resultado é par ou ímpar
    const resultado = dado % 2 === 0 ? 'p' : 'i'
    console.log(`O resultado é ${resultado}.`)
    
    // Verificando o vencedor
    const decideResultado = resultado === escolha ? 'Você venceu!' : 'Você perdeu :('
    console.log(`O resultado é ${decideResultado}.`)

    // Perguntar ao jogador se deseja continuar jogando
    const opcao = prompt("Deseja continuar jogando? (s/n): ").toLowerCase()
    
    const decideOpcao = opcao !== 's'

    if (decideOpcao) {
        continuar = false
    }
}
