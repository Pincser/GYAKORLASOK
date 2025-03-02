<script>
function Vízhalmazállapot(homerseklet){
	if (homerseklet<0){
    	document.write(`A víz halamzállapota ${homerseklet} fokon: szilárd (jég) <br>`);
   }     
	else if (homerseklet>100){
   		document.write(`A víz halamzállapota ${homerseklet} fokon: légnemű (gőz) <br>`);
    }
    else{
    	document.write(`A víz halamzállapota ${homerseklet} fokon: folyékony (víz) <br>`);
    }
}
Vízhalmazállapot(-20);
Vízhalmazállapot(20);
Vízhalmazállapot(200);
</script>