<script>
//Tömbök: SZÁM TÖMB alapok
let szamtomb=[42,3,13,21,1,101,4]
document.write(szamtomb[0],"<br>");
szamtomb[0]=15;
document.write(szamtomb[0]+"<br>");

document.write("A számtömb elemei:");
for (let i=0; i<szamtomb.length; i++){
	document.write(szamtomb[i]+",");
}


//Tömbök: SZÖVEG TÖMB alapok
let szovegtomb=["alma", "körte", "barack", "szilva"];
document.write("<hr>A szövegtömb elemei:<ul>");
for (let i=0; i<szovegtomb.length; i++){
document.write("<li>",szovegtomb[i]+"</li>");
}
document.write("</ul>");
</script>