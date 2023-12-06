document.getElementById("mybutton").addEventListener("click", pontok);

function pontok()
{let pontszam = 0;

const a1 = document.getElementById("1/1").checked;
const b1 = document.getElementById("1/2").checked;
const c1 = document.getElementById("1/3").checked;

if (b1==1)
{pontszam = pontszam+1;};

const a2 = document.getElementById("2/1").checked;
const b2 = document.getElementById("2/2").checked;
const c2 = document.getElementById("2/3").checked;

if (a2==1)
{pontszam = pontszam+1;};

const a3 = document.getElementById("3/1").checked;
const b3 = document.getElementById("3/2").checked;
const c3 = document.getElementById("3/3").checked;

if (c3==1)
{pontszam = pontszam+1;};

const a4 = document.getElementById("4/1").checked;
const b4 = document.getElementById("4/2").checked;
const c4 = document.getElementById("4/3").checked;

if (a4==1)
{pontszam = pontszam+1;};

const a5 = document.getElementById("5/1").checked;
const b5 = document.getElementById("5/2").checked;
const c5 = document.getElementById("5/3").checked;

if (b5==1)
{pontszam = pontszam+1;};

if (pontszam < 1) {
    document.getElementById("pontszam").innerText = "A pontszámod: " + String(pontszam) + "\nHát ez nem sikerült túl jól, de nem baj, még fejlődhetsz, ha tovább olvasod az oldalt!";

} 

 else if (pontszam < 5) {
    document.getElementById("pontszam").innerText = "A pontszámod: " + String(pontszam) + "\nNagyon szép eredmény, jól ismered Ronaldo-t!";

} else {
    document.getElementById("pontszam").innerText = "A pontszámod: " + String(pontszam) + "\nAzta, ez igen, egy igazi Ronaldo Fan vagy! :)";

}}



document.getElementById("kosar").addEventListener("click", fizetendo);

function fizetendo()
{

let mezdb = Number(document.getElementById("mez_darabszam").value);
let parnadb = Number(document.getElementById("parna_darabszam").value);

let osszeg = 0;
osszeg = (30000*mezdb + 5000*parnadb);

document.getElementById("vegosszeg").innerText = "Végösszeg: "+String(osszeg)+" Ft";}