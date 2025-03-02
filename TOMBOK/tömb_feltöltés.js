<script>
//Tömb: FELTÖLTÉS

let tomb=[]; //1. Tömb létrehozás
let tombmeret=5; //2. Tömb méret meghatárzás, hány db index érték legyen benne
for (let i=0; i<tombmeret; i++){ //3. Tömb bejárás képlet
let generaltSzam=Math.round(Math.random()*100); //4. példa: szám generálás random számokkal
tomb.push(generaltSzam); //5. Random generált számok feltöltése a tömbbe
}
document.write("A tömb elemei:"); //6. Kíiratása a tömb szöveges részének
for (let i=0; i<tomb.length; i++){ //7. Tömb bejárás képlete a tömb hosszának-egészének
document.write(tomb[i]+","); //8. Kiírása a tömb generált random értékeinek 0-100-ig,5 db (index), vesszővel elválasztva
}
</script>