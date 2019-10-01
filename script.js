function insert(num) {
    
    document.form.text.value = document.form.text.value + num
}

function equals() {
    document.form.text.value = eval(document.form.text.value)
}

function clean() {
    document.form.text.value = "";
}