function osszead() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    var osszeg = parseInt(elso) + parseInt(masodik);
    document.getElementById("eredmeny").innerHTML = osszeg;
}
function kivon() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    var osszeg = parseInt(elso) - parseInt(masodik);
    document.getElementById("eredmeny").innerHTML = osszeg;
}
function szoroz() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    var osszeg = parseInt(elso) * parseInt(masodik);
    document.getElementById("eredmeny").innerHTML = osszeg;
}
function oszt() {
    var elso = document.getElementById("elso").value;
    var masodik = document.getElementById("masodik").value;
    var osszeg = parseInt(elso) / parseInt(masodik);
    document.getElementById("eredmeny").innerHTML = osszeg;
}