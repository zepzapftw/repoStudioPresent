function hamburger(){
    let x=document.getElementById("HambugerLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    window.addEventListener('resize', function() {
        var screenWidth = window.innerWidth;
        
        if (screenWidth > 600) {
            x.style.display = "none";
        }
    });

}

