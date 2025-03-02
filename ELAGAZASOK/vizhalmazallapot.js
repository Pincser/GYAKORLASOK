<script>
//Hőmérséklet halmazállapotai:)

let homerseklet = Number(prompt("Írj be egy hőmérsékletet!"));

if (homerseklet == 0 || homerseklet == 100)
document.write(`Éppen halmazállapot változás van`);

else if (homerseklet > 100)
document.write(` Gőz halmazállapot`);

else if (homerseklet < 0)
document.write(`Jég halmazállapot van`);

else
document.write(`Víz halmazállapot van`);

</script>