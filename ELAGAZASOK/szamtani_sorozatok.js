<script>
//számtani sorazat
/*számtani sorozat*/
//képlete: a-b=b-c

let a = Number(prompt("add meg `a` számot"));
let b = Number(prompt("add meg `b` számot"));
let c = Number(prompt("add meg `c` számot"));

if (a-b == b-c)
document.write(`a ${a} , ${b} , ${c} számok számtani sorozatok`);

else
document.write(`nem számtani sorozatok`);

</script>