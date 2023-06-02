let Body = document.querySelector(".changeSite");
let a_click = document.querySelectorAll("li a");
let dot = document.querySelectorAll(".dot");
a_click.forEach(el =>{
    el.addEventListener("click", (x)=>{
        document.body.style.opacity="0";
        Body.style.transform="scaleY(1)";
        setTimeout(()=>{
            Body.style.transform="scaleY(0)"
            document.body.style.opacity="1";
        },1500)
    })

})
function load(){
    document.querySelectorAll(`section`).forEach(el1=>{
        el1.style.height="0vh";
        el1.style.visibility="hidden";
        el1.style.opacity="0";
    });
    document.querySelector(`#home`).style.height="100vh";
    document.querySelector(`#home`).style.visibility="visible";
    document.querySelector(`#home`).style.opacity="1";
}
function check_click(x){
    document.querySelectorAll(`section`).forEach(el1=>{
        el1.style.height="0vh";
        el1.style.visibility="hidden";
        el1.style.opacity="0";
    });
    if(x == 'destination'){
        destination(0);
    }
    document.querySelector(`#${x}`).style.height="100vh";
    document.querySelector(`#${x}`).style.visibility="visible";
    document.querySelector(`#${x}`).style.opacity="1";
}
crew(0);
function destination(x){
    fetch("./data.json")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        document.querySelector(".planet .imgPlanet").innerHTML=`<img src="${data.destinations[x].images.png}">`;
        document.querySelector(".planet .info h1").innerHTML=`${data.destinations[x].name}`;
        document.querySelector(".planet .info p").innerHTML=`${data.destinations[x].description}`;
        document.querySelector(".planet .info .stats .distance p").innerHTML=`${data.destinations[x].distance}`;
        document.querySelector(".planet .info .stats .travelTime p").innerHTML=`${data.destinations[x].travel}`
        console.log(data.destinations);
    })
}

function crew(x){
    for(let y = 0;y<=3;y++){
        document.querySelector(".d"+(y)).style.backgroundColor="#ffffff7c";
    }
    const myTimeout1 = setTimeout(()=>{
        document.querySelector("#crew .img").classList.add("hide");
        document.querySelector("#crew .img").classList.remove("show");

        document.querySelector("#crew .info").classList.add("hide");
        document.querySelector("#crew .info").classList.remove("show");
    },8000)
    const myTimeout2 =setTimeout(()=>{
        if(x==3){
            crew(0);
        }
        else{
            crew(x+1);
        }
        
    },9000)
    const myTimeout3 = setTimeout(()=>{
        document.querySelector("#crew .info").classList.add("show");
        document.querySelector("#crew .info").classList.remove("hide");
        document.querySelector("#crew .img").classList.add("show");
        document.querySelector("#crew .img").classList.remove("hide");
        
    },9000)
    

    fetch("./data.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        
        document.querySelector(".d"+(x)).style.backgroundColor="white";
        document.querySelector("#crew .info").innerHTML=`
        <h3 class="title">${data.crew[x].role}</h3>
        <h1 class="name">${data.crew[x].name}</h1>
        <p class="description">${data.crew[x].bio}</p>
        `;
        document.querySelector("#crew .img").innerHTML=`
        <img src="${data.crew[x].images.png}">
        `;

    })
}

function tech(x){
    fetch("./data.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        document.querySelector("#tech .main .description .title").innerHTML=`${data.technology[x].name}`;
        document.querySelector("#tech .main .description p").innerHTML=`${data.technology[x].description}`;
        document.querySelector("#tech .main .img").innerHTML=`<img src='${data.technology[x].images.portrait}' alt='tech'>`;
    })
}
tech(0);