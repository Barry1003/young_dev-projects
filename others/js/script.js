/* ================typing animation=========================*/
 

/* ================ Aside=========================*/

const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li");
totalNav = navList.length;
allsection = document.querySelectorAll(".section");
totalsection = allsection.length;
for (let i = 0; i < totalNav; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", () => {
        for (let j = 0; j < totalNav; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        a.classList.add("active");
        showSection(a);
    });
}

function showSection(element) {
    for(let i = 0; i<totalsection; i++){
        allssection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

/*========================= NAV TOGGLER ==================*/

const closeBtn = document.querySelector("#close_menu-btn")
const openBtn = document.querySelector("#open_menu-btn")
const Aside = document.querySelector(".aside")

openBtn.addEventListener("click", () =>{
   Aside.style.display = "flex";
    openBtn.style.display= "none";
    closeBtn.style.display= "flex";
    closeBtn.style.transform= "rotate('90deg')";
});

closeBtn.addEventListener("click", () =>{
    Aside.style.display = "none";
    openBtn.style.display= "flex";
    closeBtn.style.display= "none";
});
