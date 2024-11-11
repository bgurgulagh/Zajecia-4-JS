function weryfikacja(form){
    walidacjaAllFocus(form.elements["imie"], "Podaj swoje imię!", walidujNapis);
    walidacjaAllFocus(form.elements["email"], "Adres e-mail jest niepoprawny!", walidujAdres);
    walidacjaAllFocus(form.elements["kod"], "Błędny kod pocztowy!", walidujNapis);
};
function walidacjaAllFocus(obiekt, wiadomosc, waliduj){
    let str = obiekt.value;
    let errorField = "blad_" + obiekt.name;
    if (waliduj(str)){
        document.getElementById(errorField).textContent = "";
        return true;
    } else {
        document.getElementById(errorField).textContent = wiadomosc;
        obiekt.focus();
        return false;
    }
};
function walidujNapis(string){
    return !(string.length === 0 || /[\s\t\r\n]{1,}/.test(string));
};
function walidujAdres(adres){
    let email_form = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]/;
    return email_form.test(adres);
};
function kodWidocznosc(){
    let wyksztalcenie = this.form.wyksztalcenie.value;
    if (wyksztalcenie === "wyksztalcenie_p"){
        document.getElementById("kodPocztowy").style.visibility = "visible";
    } else {
        document.getElementById("kodPocztowy").style.visibility = "hidden";
    }
};
function pokazElement(element){
    document.getElementById(element).style.visibility = "visible";
};
function ukryjElement(element){
    document.getElementById(element).style.visibility = "hidden";
};
function licznik(obiekt, pole, ilosc){
    console.log(obiekt.value.length);
    pole.textContent = ilosc - obiekt.value.length;
};
function licznikWierszy(i, e){
    //i = licznik wierszy; e = wiersz
    if (e){
        if (i % 2 == 1){
            e.setAttribute("style", "background-color: Red;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1){
            e = e.nextSibling;
        }
        licznikWierszy(++i, e);
    }
};
function nastepnyWezel(e){
    while (e && e.nodeType != 1){
        e = e.nextSibling;
    }
    return e;
};
function poprzedniWezel(e){
    while (e && e.nodeType != 1){
        e = e.previousSibling;
    }
    return e;
};
function zamienWezly(){
    let b = document.querySelector("table");
    console.log(b);
    let tab = poprzedniWezel(b.previousSibling);
    let tBody = nastepnyWezel(tab.firstChild);
    let lastNode = poprzedniWezel(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nastepnyWezel(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
};
window.onload = function() {
    let tabela = document.querySelector("table tbody");
    licznikWierszy(1, tabela.getElementsByTagName("tr")[0]);
};