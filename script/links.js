// - - - - - - - - - - links
const link_w = " https://api.whatsapp.com/send/?phone=982291555&text=Olá,+gostaria+de+mais+informações!  ";

// funcção que atribui o link link_w para todos os btr

document.querySelectorAll("a.btn").forEach(btn => {  
    btn.href = link_w; 
    btn.target="_blank";
});
