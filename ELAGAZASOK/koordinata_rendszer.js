<script>
// Koordináta rendszer pontjai
/* Képletek: x>0 && y<0 ,akkor I. negyedben van a pont
			 x<0 && y>0 ,akkor II. negyedben van a pont
             x<0 && y<0 ,akkor III. negyedben van a pont
             x>0 && y>0 ,akkor IV. negyedben van a pont
             x==0 && y==0 ,akkor az origóban a pont
             x==0 ,akkor az y tengelyen van a pont
             y==0 ,akkor az x tengelyen van a pont*/

let x = Number(prompt("Add meg az x értéket"));
let y = Number(prompt("Add meg az yértéket"));

if (x>0 && y<0)
document.write(`az [${x} és ${y}] értékek az I. negyedben vannak`);

else if (x<0 && y>0)
document.write(`az [${x} és ${y}] értékek az II. negyedben vannak`);

else if (x<0 && y<0)
document.write(`az [${x} és ${y}] értékek a III. negyedben vannak`);

else if (x>0 && y>0)
document.write(`az [${x} és ${y}] értékek a IV. negyedben vannak`);

else if (x==0 && y==0)
document.write(`az [${x} és ${y}] értékek az origóban vannak`);

else if (x==0)
document.write(`az [${x} és ${y}] értékek az y tengelyen vannak`);

else
document.write(`az [${x} és ${y}] értékek az x tengelyen vannak`);

</script>