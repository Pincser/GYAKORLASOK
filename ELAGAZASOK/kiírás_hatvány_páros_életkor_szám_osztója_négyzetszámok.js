<script>
// 1. Feladat (kiírások)

document.write("Szabó Áron <br>");
document.write(`16TEAM tagja`, "<br>");
document.write("HTML: 80", "<br>");
document.write(`CSS: 80` , `<br>`);
document.write("JavaScript: 10");
document.write("<hr>");



//2.Feladat (hatványozás)

let szam = Number(prompt("adj meg egy számot"));
let hatvany = Number(prompt("adj meg egy hatványértéket"));

ertek = (szam**hatvany)

document.write(`A megadott ${szam}-os szám és a megadott hatvány ${hatvany} értéke: ${ertek}`);
document.write("<hr>");



//3. Feladat 

let összeg = Math.round(Math.random()*100);

if (összeg % 2 == 0){
document.write("A szám páros");
}

else{
document.write("A szám páratlan");
}

document.write("<hr>");




//4. Feladat (életkor)

let életkor = Number(prompt("Adj meg egy életkort!"));

if (életkor > 120 || életkor <= 0){
document.write("Hiba");
}
else if (életkor  >0 && életkor < 6){
document.write("Kisgyermekkor");
}
else if (életkor > 6 && életkor < 12){
document.write("Gyermekkor");
}
else if (életkor > 12 && életkor < 16){
document.write("Serdülőkor");
}
else if (életkor > 16 && életkor < 20){
document.write("Ifjúkor");
}
else if (életkor > 20 && életkor < 30){
document.write("Fiatal felnőtt kor");
}
else if (életkor > 30 && életkor <60){
document.write("Felnőtt kor");
}
else {
document.write("Aggkor");
}

document.write("<hr>");





//5. Feladat (szám osztoja)

let szam=Number(prompt("Adj meg egy számot"));
let oszto=Number(prompt("Adj meg egy osztót"));

if (szam%oszto == 0){
document.write(`A ${szam} oszható ${oszto}-vel`);
}
else{
document.write(`A ${szam} nem osztható ${oszto}-vel`);
}

document.write("<hr>");


// 6 Feladat (négyzetszámok FOR ciklussal)
for (let i = 1 ; i<=10; i++){
document.write(`${i*i},`);
}
</script>