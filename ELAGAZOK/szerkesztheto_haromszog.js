<script>
/*Szerkeszthető háromszög:
	- akkor szerkeszthető, ha 2 oldal összege nagyobb mint a harmadik oldalé!
    - képlet tehát: a+b>c ÉS b+c>a ÉS c+a>b
    - 		   kód: a+b>c && b+c>a &&  c+a>b */

let a = Number(prompt("Adj meg egy oldal értéket"));
let b = Number(prompt("Adj meg egy másik oldal értéket"));
let c = Number(prompt("Adj meg egy haramdik oldal értéket"));

if (a+b>c && b+c>a && c+a>b)
document.write(`A háromszög szerkeszthető!`);

else 
document.write(`A háromszög nem szerkeszthető`);


</script>