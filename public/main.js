function showOptions() {
    const dM = ['Objetivo', 'Direto', 'Ousado', 'Dominador', 'Exigente', 'Enérgico', 'Disposto a correr riscos',
        'Aventureiro', 'Decisivo', 'Curioso', 'Autoconfiante', 'Competitivo', 'Rápido', 'Seguro de si', 'Controlador'
    ]
    const iM = ['Entusiasta', 'Social', 'Persuasivo', 'Impulsivo', 'Emocional', 'Oferecido', 'Comunicador',
        'Influente', 'Agradável', 'Sociável', 'Generoso', 'Equilibrado', 'Encantador', 'Confiante', 'Convincente'
    ]
    const sM = ['Diplomata', 'Paciente', 'Leal', 'Previsível', 'Pessoa de equipe', 'Calmo', 'Ponderado', 'Recatado',
        'Observador', 'Tranquilo', 'Pacífico', 'Prudente', 'Amigável', 'Estável', 'Versátil'
    ]
    const cM = ['Perfeccionista', 'Preciso', 'Descobridor de fatos', 'Pesquisador', 'Sistemático', 'Convencional',
        'Cordial', 'Cuidadoso', 'Contido', 'Altos Padrões', 'Analítico', 'Sensível', 'Maduro', 'Evasivo', 'Centrado'
    ]

    const dF = ['Objetiva', 'Direta', 'Ousada', 'Dominadora', 'Exigente', 'Enérgica', 'Disposta a correr riscos',
        'Aventureira', 'Decisiva', 'Curiosa', 'Autoconfiante', 'Competitiva', 'Rápida', 'Segura de si', 'Controladora'
    ]
    const iF = ['Entusiasta', 'Social', 'Persuasiva', 'Impulsiva', 'Emocional', 'Oferecida', 'Comunicadora',
        'Influente', 'Agradável', 'Sociável', 'Generosa', 'Equilibrada', 'Encantadora', 'Confiante', 'Convincente'
    ]
    const sF = ['Diplomata', 'Paciente', 'Leal', 'Previsível', 'Pessoa de equipe', 'Calma', 'Ponderada', 'Recatada',
        'Observadora', 'Tranquila', 'Pacífica', 'Prudente', 'Amigável', 'Estável', 'Versátil'
    ]
    const cF = ['Perfeccionista', 'Precisa', 'Descobridora de fatos', 'Pesquisadora', 'Sistemática', 'Convencional',
        'Cordial', 'Cuidadosa', 'Contida', 'Altos Padrões', 'Analítica', 'Sensível', 'Madura', 'Evasiva', 'Centrada'
    ]

    const lista = document.getElementById('lista')
    const RadioSexoOptions = document.getElementsByName('RadioSexoOptions')
    let sexo = ''
    for (let index = 0; index < RadioSexoOptions.length; index++) {
        const element = RadioSexoOptions[index];
        if (element.checked) sexo = element.value
    }
    lista.innerHTML = ""
    const tamanhoOpcoes = dM.length
    if (sexo === 'M') {
        for (let index = 0; index < tamanhoOpcoes; index++) {
            lista.appendChild(criaDivCompleta(dM[index], 'D'))
            lista.appendChild(criaDivCompleta(iM[index], 'I'))
            lista.appendChild(criaDivCompleta(sM[index], 'S'))
            lista.appendChild(criaDivCompleta(cM[index], 'C'))
        }
    } else {
        for (let index = 0; index < tamanhoOpcoes; index++) {
            lista.appendChild(criaDivCompleta(dF[index], 'D'))
            lista.appendChild(criaDivCompleta(iF[index], 'I'))
            lista.appendChild(criaDivCompleta(sF[index], 'S'))
            lista.appendChild(criaDivCompleta(cF[index], 'C'))
        }
    }
    document.getElementById('btnResponder').setAttribute('class', "btn btn-primary")
    document.getElementById('btnReiniciar').setAttribute('class', "btn btn-default")
    document.getElementById('btnImprimir').setAttribute('class', "btn btn-default")
}

function criaDivCompleta(nome, value) {
    const div = document.createElement('div')
    div.setAttribute('class', "col-xs-6 col-md-3")
    criaInput(div, nome, value)
    return div
}

function criaInput(div, nome, value) {
    const label = document.createElement('label')
    label.setAttribute('class', "checkbox-inline")
    const input1 = document.createElement('input')
    input1.type = "checkbox"
    input1.name = nome
    input1.id = nome
    input1.value = value
    label.appendChild(input1)
    label.innerHTML += nome
    div.appendChild(label)
}

function count() {
    let count = [0, 0, 0, 0]
    const checks = document.getElementsByTagName('INPUT')
    for (let index = 0; index < checks.length; index++) {
        const element = checks[index];
        if (element.checked && element.type === 'checkbox') {
            switch (element.value) {
                case 'D':
                    count[0]++
                    break;
                case 'I':
                    count[1]++
                    break;
                case 'S':
                    count[2]++
                    break;
                case 'C':
                    count[3]++
                    break;
                default:
                    break;
            }
        }

    }
    let resultado = ''
    let contagem = 0
    for (let i = 0; i < 3; i++) {
        if (isMax(count, count[i])) {
            contagem++
        }
    }
    if (isMax(count, count[0])) {
        resultado += "<a href='#resultDominante' class='alert-link'>Dominante<span class='badge badge-secondary'>Ir</span></a>"
    }
    if (isMax(count, count[1])) {
        if (contagem == 2) {
            resultado += " e "
        } else if (contagem > 2) {
            resultado += ", "
        }
        resultado += "<a href='#resultInfluente' class='alert-link'>Influente<span class='badge badge-secondary'>Ir</span></a></a>"
    }
    if (isMax(count, count[2])) {
        if (contagem == 2) {
            resultado += " e "
        } else if (contagem > 2) {
            resultado += ", "
        }
        resultado += "<a href='#resultSeguro' class='alert-link'>Seguro<span class='badge badge-secondary'>Ir</span></a></a>"
    }
    if (isMax(count, count[3])) {
        if (contagem >= 1) {
            resultado += " e "
        }
        resultado += "<a href='#resultCauteloso' class='alert-link'>Cauteloso<span class='badge badge-secondary'>Ir</span></a></a>"
    }
    const alert = document.getElementById('alert')
    alert.innerHTML = "<strong>Parabéns!</strong> Seu perfil comportamental é <strong>" + resultado + "</strong>"
    alert.setAttribute('class', "alert alert-success")
    document.getElementById('badgeDominante').innerHTML = count[0]
    document.getElementById('badgeInfluente').innerHTML = count[1]
    document.getElementById('badgeSeguro').innerHTML = count[2]
    document.getElementById('badgeCauteloso').innerHTML = count[3]
    document.getElementById('resultados').setAttribute('class', "d-block")
}

function getMax(array) {
    let value = 0
    array.forEach(i => {
        if (i > value) value = i
    })
    return value
}

function isMax(array, value) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > value) return false
    }
    return true
}

function clearOptions() {
    const lista = document.getElementById('lista')
    lista.innerHTML = ''
    document.getElementById('alert').setAttribute('class', "d-none")
    document.getElementById('btnResponder').setAttribute('class', "d-none")
    document.getElementById('btnReiniciar').setAttribute('class', "d-none")
    document.getElementById('btnImprimir').setAttribute('class', "d-none")
    document.getElementById('resultados').setAttribute('class', "d-none")
    document.getElementById('badgeDominante').innerHTML = 0
    document.getElementById('badgeInfluente').innerHTML = 0
    document.getElementById('badgeSeguro').innerHTML = 0
    document.getElementById('badgeCauteloso').innerHTML = 0
    const RadioSexoOptions = document.getElementsByName('RadioSexoOptions')
    RadioSexoOptions[0].checked = false
    RadioSexoOptions[1].checked = false
    showTop()
}

function showTop(){
    window.scrollTo(0,0)
}

function imprimir() {
    window.print()
}