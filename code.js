function pustoTu(ciag){
    if (ciag.length==0)return true; else return false;;
};
function weryfikacja(form){
    if (pustoTu(form.elements["imie"].value) || bialeZnaki(form.elements["imie"].value)){
        alert("Podaj swoje imię!");
        return false;
    }
    else return true;;
};
function bialeZnaki(string){
    return /[\s\t\r\n]{1,}/.test(string);
};
function walidujNapis(string, komunikat){
    
};