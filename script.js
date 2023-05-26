let Body = document.querySelector(".changeSite");
let a_click = document.querySelectorAll("li a");
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
    fetch("./data.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        document.querySelector("#crew .info").innerHTML=`
        <h3 class="title">${data.crew[0].role}</h3>
        <h1 class="name">${data.crew[0].name}</h1>
        <p class="description">${data.crew[0].bio}</p>
        `;
        document.querySelector("#crew .img").innerHTML=`
        <img src="${data.crew[0].images.png}">
        `;
    })
}
crew(1);