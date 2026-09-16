const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML='<i class="fas fa-sun"></i>';
    }else{
        darkBtn.innerHTML='<i class="fas fa-moon"></i>';
    }

};


const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});