<script>
//Szorgalom értékelés
/* 	5-példás
	4-jó
    3-változó
    2-hanyag
    minden más-hibás adat*/

let ertekeles = Number(prompt("Adj meg egy értékelést!"));

if (ertekeles == 5)
document.write(`az ${ertekeles} példás szorgalmi értékelés`);

else if (ertekeles == 4)
document.write(`a ${ertekeles} jó szorgalmi értékelés`);

else if (ertekeles == 3)
document.write(`a ${ertekeles} változó szorgalmi értékelés`);

else if (ertekeles == 2)
document.write(`a ${ertekeles} hanyag szorgalmi értékelés`);

else
document.write(`hibás adat`);

</script>