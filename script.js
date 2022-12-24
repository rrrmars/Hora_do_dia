function carregar() {
var msg = document.getElementById('conteudo')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `${hora}h`
if (hora >= 0 && hora < 12) {
    document.getElementById('img').style.setProperty("background", "url('manha.png')")
    
} else if (hora >= 12 && hora < 18) {
    document.getElementById('img').style.setProperty("background", "url('tarde.png')")
    
    
} else {
    document.getElementById('img').style.setProperty("background", "url('noite.png')")
}

}
