var num
var termos = [undefined, undefined, undefined]
var displayBuffer = ""
var resultado = undefined;

function pressNum(btn) {
    num = num.concat(btn.innerHTML)
    showDisplay(btn.innerHTML)
}

function pressOperator(op) {
    termos[0] = num
    termos[1] = op.innerHTML
    showDisplay(op.innerHTML)
    num = ""
}

function pressEqual() {
    termos[2] = num
    switch(termos[1]) {
        case '+':
            resultado = Number(termos[0]) + Number(termos[2])
            break
        case '-':
            resultado = Number(termos[0]) - Number(termos[2])
            break
        case '*':
            resultado = Number(termos[0]) * Number(termos[2])
            break
        case '/':
            resultado = Number(termos[0]) / Number(termos[2])
            break  
    }
    clearAll()
    showDisplay(resultado)
}

function clearAll() {
    displayBuffer = ""
    var display = document.getElementById('display')
    display.value = displayBuffer
    num = 0;
}

function showDisplay(cont) {
displayBuffer = displayBuffer.concat(cont)
var display = document.getElementById('display')
display.value = displayBuffer
}