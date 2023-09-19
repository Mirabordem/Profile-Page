// console.log("This is my profile page!");

const initializePage = async() => {

    document.body.style.backgroundColor = "#808080";
    document.body.style.margin = "30px";


    // name
    const headerName = document.createElement("h1");
    headerName.innerText = "Mira Borkowska";
    document.body.appendChild(headerName);
    headerName.style.color = "#f7faf4f2";
    headerName.style.fontSize = "48px";
    headerName.style.display = "flex";
    headerName.style.marginTop = "70px";
    headerName.style.marginBottom = "60px";
    headerName.style.fontFamily = "Roboto, sans-serif";
    headerName.style.fontWeight = "1000";
    headerName.style.justifyContent = "center";
    headerName.setAttribute("id", "name");

    // main container

    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "main-container");
    mainContainer.style.display = "grid";
    mainContainer.style.gridTemplateColumns = "1fr 1fr";
    mainContainer.style.gap = "20px";
    mainContainer.style.margin = "10px";
    document.body.appendChild(mainContainer);


    // picture

    const imgContainer = document.createElement("img")
    imgContainer.setAttribute("id", "picture")
    imgContainer.src = 'https://image.jimcdn.com/app/cms/image/transf/dimension=1024x2048:format=png/path/sd0536822daf447dd/image/if4bf4575b01e100c/version/1599752572/image.png';
    mainContainer.appendChild(imgContainer)
    imgContainer.style.maxWidth = "100%";
    imgContainer.style.maxHeight = "700px";
    // imgContainer.style.display = "flex";
    // imgContainer.style.justifyContent = "flex-end";
    imgContainer.style.marginLeft = "370px";

    // text

    const textContainer = document.createElement("div");
    textContainer.setAttribute("id", "text-container");
    mainContainer.appendChild(textContainer)
    textContainer.style.backgroundColor = "#f7faf4f2";
    textContainer.style.marginRight = "370px"
    // textContainer.style.display = "flex";
    // textContainer.style.alignItems = "center";

    // h2

    const h2Container = document.createElement("div")
    textContainer.appendChild(h2Container)
    h2Container.style.backgroundColor = "#808080"
    h2Container.style.margin = "30px"
    h2Container.style.height = "80px"
    h2Container.style.display = "flex";
    h2Container.style.justifyContent = "center";
    h2Container.style.alignItems = "center";
    h2Container.style.marginTop = "50px";



    const h2 = document.createElement("h2")
    h2.innerText = "My favorite things to do:"
    h2Container.appendChild(h2)
    h2.style.color = "white"
    h2.style.fontFamily = "Roboto, sans-serif";
    h2.style.fontSize = "28px";
    h2.style.fontWeight = "1000";



     // ul

    const myList = document.createElement("ul");
    myList.setAttribute("id", "list");
    myList.setAttribute("class", "my-list");
    textContainer.appendChild(myList);


    // list array

    const myListArr = [
    "<li class='detail'>I LOVE ART, I am an active, exhibiting sculptor.</li>",
    "<li class='detail'>I am a Yogi, practicing daily.</li>",
    "<li class='detail'>I enjoy swimming long distances.</li>",
    "<li class='detail'>I'm a 'wimhofer', enjoying cold plunges.</li>",
    "<li class='detail'>I eat plants and fish only.</li>",
    "<li class='detail'>I love travelling with my family, and friends.</li>",
    "<li class='detail'>I love to play with my dog Milu, and my cat Bell.</li>"
    ]
    const liString = myListArr.join(" ");
    const listElement = document.getElementById("list");
    listElement.innerHTML = liString;
    listElement.style.fontSize = "34px"
    listElement.style.fontWeight = "1000"
    listElement.style.rowGap = "36px"
    listElement.style.color = "#808080";
    listElement.style.marginTop = "40px";
    listElement.style.marginLeft = "40px";
    listElement.style.marginRight = "30px";



    //  clock

    // const clockContainer = document.createElement("div");
    // document.body.appendChild(clockContainer);


    const clock = document.createElement("div");
    clock.setAttribute("id", "clock");
    document.body.appendChild(clock);


    const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clock.innerHTML = "Current date and time: " + date;
    };
    setInterval(time, 500);


    clock.style.color = "white";
    clock.style.marginLeft = "680px"
    clock.style.marginTop = "20px";


};





window.onload = async () => {
    initializePage()
};
