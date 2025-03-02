<script>
// Függvény alsó és felső határt megkapva, kigenerál egy számot

function RandomSzam (hatar_egy,hatar_ketto){
	if(hatar_egy<hatar_ketto){
		var alsoHatar = hatar_egy;
        var felsoHatar = hatar_ketto;
        }
        
    else{
    	var alsoHatar = hatar_ketto;
        var felsoHatar = hatar_egy;
        }
        
let RandomSzam = Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
return RandomSzam;
}

document.write(RandomSzam(10,20));

</script>