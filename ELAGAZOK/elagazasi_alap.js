<script>
let beolvasott_ertek = Number(prompt("Adj meg egy értéket"));
if (beolvasott_ertek > 5)
document.write(`a ${beolvasott_ertek} nagyobb mint öt`);

else if (beolvasott_ertek == 0)
document.write(`a ${beolvasott_ertek} pontosan nulla`);

else
document.write(`a ${beolvasott_ertek} kisebb mint öt`);

</script>