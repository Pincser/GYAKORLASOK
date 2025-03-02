<script>
// Évszakok hónappban
/* 	március || április || május       = tavasz
	június  || július  || augusztus   = nyár
    szeptember || október || november = ősz
    december   || január  || február  = tél
    minden más = hibás adat*/
    
let honap = prompt("adj meg egy hónapot");

if (honap == "március" || honap== "április" || honap == "május")
document.write(`tavasz évszak`);

else if (honap == "június" || honap == "július" || honap == "augusztus")
document.write(`nyár évszak`);

else if (honap == "szeptember" || honap == "október" || honap == "november")
document.write(`ősz évszak`);

else if (honap == "december" || honap == "január" || honap == "február")
document.write(`tél évszak`);

else
document.write(`hibás adat`)

</script>