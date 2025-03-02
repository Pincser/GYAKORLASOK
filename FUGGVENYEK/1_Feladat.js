<script>
// 1. Feladat

/* 
    1->"Nev"
    2->"Csoport"
    3->"HTML"
    4->"CSS"
    5->"JavaScript"
*/

function feladat(szam){
let feladat="";
	 if(szam==1){
     	feladat="Szabó Áron"
     }
    
    else if (szam==2){
     	feladat="TEAM16"
     }
    
    else if (szam==3){
     	feladat="70%"
     }
    
    else if (szam==4){
     	feladat="70%"
     }
    
    else if (szam==5){
     	feladat="10%"
     }
    
    else{
    feladat="hibas adat"
    }

return feladat;
}

document.write(feladat(1));
document.write("<hr>");
document.write(feladat(2));
document.write("<hr>");
document.write(feladat(3));
document.write("<hr>");
document.write(feladat(4));
document.write("<hr>");
document.write(feladat(5));
</script>