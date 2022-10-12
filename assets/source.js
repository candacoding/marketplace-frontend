document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price){
    const message = `Hallo, saya mau beli ${product_name} dengan Harga Rp.${product_price}`
    const whatsapp = `https://wa.me/6282149305275?text=${message}`
    open(whatsapp, "_blank")
}

function chat() {
    const message = `Hallo, min saya mau nanya nih..!`
    const whatsapp = `https://wa.me/6282236235850&text=${message}`
    open(whatsapp, "_blank")
}