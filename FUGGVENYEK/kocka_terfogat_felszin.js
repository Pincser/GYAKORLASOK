<script>
// Kocka térfogat és felszín függvényben

function kockaTerfogat (a_oldal){
let terfogat = a_oldal*a_oldal*a_oldal;

return terfogat;
}

let eredmeny = kockaTerfogat (4)
document.write("A kocka térfogata:" + eredmeny + "<br>");

function kockaFelszin (a_oldal){
let felszin = a_oldal*a_oldal*6

return felszin;
}

let eredmeny2 = kockaFelszin (4)
document.write("A kocka felszíne:" + eredmeny2 + "<br>");


</script>