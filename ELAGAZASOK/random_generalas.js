<script>
let randomszam = Math.random();
document.write(`${randomszam}`);

let randomszam1 = Math.round(Math.random());
document.write(`<br> ${randomszam1}`);

let randomszam2 = Math.round(Math.random()*100);
document.write(`<br> ${randomszam2}`);

let randomszam3 = Math.round(Math.random()*100-50);
document.write(`<br> ${randomszam3}`);

let felsoHatar = 10;
let alsoHatar = -5;
let randomszam4 = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
document.write("<hr>")
document.write(randomszam4);


</script>