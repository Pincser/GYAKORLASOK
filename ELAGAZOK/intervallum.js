<script>
// INTERVALLUM
// FELADAT: 0-20-ig behnne van az intervallumban, egyébként nincs.

let szam = Number(prompt("Adj meg egy számot 1-20-ig:"));

if (szam>=0 && szam<=20)
document.write(`a ${szam} benne van az intervallumban`);

else
document.write(`a ${szam} nincs benne az intervallumban`);

</script>