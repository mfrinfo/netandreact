
export function MensagemTraduzida(stateCode, errorMessage, methods) {
    let message200 = 'Executado com Sucesso'
    if (methods === "PUT" && stateCode === 200) {
        message200 = "Registro Alterado com Sucesso"
    }

    switch (stateCode) {
        case 401: return 'Não autorizado'
        case 201: return 'Registro Criado com Sucesso'
        case 204: return 'Atualizado com Sucesso'
        case 200: return message200
        case 400: return 'Algo de Errado Aconteceu'
        default: return errorMessage
    }
}

