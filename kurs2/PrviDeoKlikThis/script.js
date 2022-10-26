
function pokreniMe(dugme){
    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;
    

    let message = document.querySelector(`#kliknutoDugme`)
    message.innerText = nazivDugmeta + ` - ` + klasaDugmeta
    

};