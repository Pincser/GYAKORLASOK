<script>
function TeglalapKerulet(a_oldal, b_oldal){
let kerulet = (a_oldal + b_oldal)*2;
let terulet = (a_oldal * b_oldal);
document.write(`A téglalap ${a_oldal} + ${b_oldal} kerülete: ${kerulet} <br>`);
document.write(`A téglalap ${a_oldal} + ${b_oldal} területe: ${terulet}`);
}

TeglalapKerulet(5,6);

</script>