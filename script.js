function buscarnotas() {
    let acorde = document.getElementById('nota')
    let acmaior = document.getElementById('maior')
    let acmenor = document.getElementById('menor')
    let nota = String(acorde.value)
    let maior = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
    let menor = ['Am','A#m','Bm','Cm','C#m','Dm','D#m','Em','Fm','F#m','Gm','G#m','Am','A#m','Bm','Cm','C#m','Dm','D#m','Em','Fm','F#m','Gm','G#m']
    let pos = 1
    let cma = maior.length
    let cme = menor.length
    if (sus.checked) {
        ++pos;
    }

    switch (nota) {
        case 'Lá':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos-1]} - ${menor[pos+1]} - ${menor[pos+3]} - ${maior[pos+4]} - ${maior[pos+6]} - ${menor[pos+8]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos-1]} - ${maior[pos+2]} - ${menor[pos+4]} - ${maior[pos+6]} - ${maior[pos+7]} - ${maior[pos+9]}</h3>`
            }
            
            break
        case 'Si':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+1]} - ${menor[pos+3]} - ${menor[pos+5]} - ${maior[pos+6]} - ${maior[pos+8]} - ${menor[pos+10]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+1]} - ${maior[pos+4]} - ${menor[pos+6]} - ${maior[pos+8]} - ${maior[pos+9]} - ${maior[pos-1]}</h3>`
            }
            if (sus.checked) {
                res.innerHTML = `Não existe ${nota} sustenido. Tente outra cifra.`
            }
            break
        case 'Dó':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+2]} - ${menor[pos+4]} - ${menor[pos+6]} - ${maior[pos+7]} - ${maior[pos+9]} - ${menor[pos-1]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+2]} - ${maior[pos+5]} - ${menor[pos+7]} - ${maior[pos+9]} - ${maior[pos+10]} - ${maior[pos]}</h3>`
            }
            break
        case 'Ré':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+4]} - ${menor[pos+6]} - ${menor[pos+8]} - ${maior[pos+9]} - ${maior[pos-1]} - ${menor[pos+1]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+4]} - ${maior[pos+7]} - ${menor[pos+9]} - ${maior[pos-1]} - ${maior[pos]} - ${maior[pos+2]}</h3>`
            }
            break
        case 'Mi':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+6]} - ${menor[pos+8]} - ${menor[pos+10]} - ${maior[pos-1]} - ${maior[pos+1]} - ${menor[pos+3]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+6]} - ${maior[pos+9]} - ${menor[pos-1]} - ${maior[pos+1]} - ${maior[pos+2]} - ${maior[pos+4]}</h3>`
            }
            if (sus.checked) {
                res.innerHTML = `Não existe ${nota} sustenido. Tente outra cifra.`
            }
            break
        case 'Fá':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+7]} - ${menor[pos+9]} - ${menor[pos-1]} - ${maior[pos]} - ${maior[pos+2]} - ${menor[pos+4]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+7]} - ${maior[pos+10]} - ${menor[pos]} - ${maior[pos+2]} - ${maior[pos+3]} - ${maior[pos+5]}</h3>`
            }
            break
        case 'Sol':
            if (acmaior.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${maior[pos+9]} - ${menor[pos-1]} - ${menor[pos+1]} - ${maior[pos+2]} - ${maior[pos+4]} - ${menor[pos+6]}</h3>`
            } else if (acmenor.checked) {
                res.innerHTML = `Campo Harmônico: <br>`
                res.innerHTML += `<h3>${menor[pos+9]} - ${maior[pos]} - ${menor[pos+2]} - ${maior[pos+4]} - ${maior[pos+5]} - ${maior[pos+7]}</h3>`
            }
            break
    }
}