const titles = ["Home","Features","Pricing"];
const navBar = document.querySelector(".navbar-nav");
//onst body = document.querySelector("body");


const testForLoop = () =>{
    titles.forEach((answer, index, length) => {
        console.log(answer, index, length);
    });
};


window.addEventListener('load', () => {
    //console.log('form loaded');
    titles.forEach(title => {
        //console.log(title);
        const navElements = document.createElement('a');
        navElements.setAttribute("class", "nav-link");
        navElements.textContent = title;
        navBar.appendChild(navElements); 
    });
    testForLoop();
});


