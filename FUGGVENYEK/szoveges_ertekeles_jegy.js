<script>
/* Készíts egy függvényt, ami paraméterként kapott jegy után, 
visszaadja a jegyhez tartozó szöveges értékelést*/

/* 
    1->"Elégtelen"
    2->"Elégséges"
    3->"Közepes"
    4->"Jó"
    5->"Jeles"
*/

function ertekeles(jegy){
let ertekeles="";
	 if(jegy==1){
     	ertekeles="elégtelen"
     }
    
    else if (jegy==2){
     	ertekeles="elégséges"
     }
    
    else if (jegy==3){
     	ertekeles="közepes"
     }
    
    else if (jegy==4){
     	ertekeles="jó"
     }
    
    else if (jegy==5){
     	ertekeles="jeles"
     }
    
    else{
    ertekeles="hibas adat"
    }

return ertekeles;
}

document.write(ertekeles(1));
document.write("<hr>");
document.write(ertekeles(2));
document.write("<hr>");
document.write(ertekeles(3));
document.write("<hr>");
document.write(ertekeles(4));
document.write("<hr>");
document.write(ertekeles(5));

</script>