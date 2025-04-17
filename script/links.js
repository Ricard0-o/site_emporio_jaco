// - - - - - - - - - - links
const link_w = "https://www.youtube.com/";

// funcção que atribui o link link_w para todos os btr

document.querySelectorAll("a.btn").forEach(btn => {  
    btn.href = link_w; 
    btn.target="_blank";
});
