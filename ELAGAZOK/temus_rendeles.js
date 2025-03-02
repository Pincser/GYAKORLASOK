<script>
// Temus  rendelés
/*	7000 Ft alatt - nem rendelhetsz
	20000 Ft  - 5% kedvezmény (*0.95)
    40000 Ft - 10% kedvezmény (*0.90)
    80000 Ft - 20% kedvezmény (*0.80)
    120000 Ft - 30% kedvezmény (*0.70)*/

let osszeg = prompt("Adj meg egy összeget:");

if (osszeg < 7000)
document.write("Nem rendelhetsz");

else if (osszeg >=7000 && osszeg<20000)
document.write("Rendelésed összege:", osszeg, "Ft");

else if (osszeg >=20000 && osszeg<40000)
document.write("Rendelésed összege 5% kedvezménnyel:", osszeg * 0.95, "Ft");

else if (osszeg >=40000 && osszeg<80000)
document.write("Rendelésed összege 10% kedvezménnyel:", osszeg * 0.90, "Ft");

else if (osszeg >=80000 && osszeg <120000)
document.write("Rendelésed összege 20% kedvezménnyel:",osszeg * 0.80, "Ft");

else
document.write("Rendelésed összege 30% kedvezménnyel:", osszeg * 0.70, "Ft");

</script>
/*Mire figyeljek:
		-	tizedes számnál pontot használj így: 0.70
        - 	vesszőket tegyél a kiírásnál így: ,osszeg * 0.70,
*/