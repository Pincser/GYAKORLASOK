<script>
let jegy = Number(prompt("Adj megy  egy jegyet 1-5-ig"));

if (jegy == 5)
document.write(`a jegy ${jegy}-ös, vagyis: jeles`);

else if (jegy == 4)
document.write(`a jegy ${jegy}-es, vagyis: jó`);

else if (jegy == 3)
document.write(`a jegy ${jegy}-as, vagyis: közepes`);

else if (jegy == 2)
document.write(` a jegy ${jegy}-es, vagyis: elégséges`);

else if (jegy == 1)
document.write(`a jegy ${jegy}-es, vagyis: elégtelen`);

else
document.write(`a beírt jegy ${jegy} hibás`);

</script>