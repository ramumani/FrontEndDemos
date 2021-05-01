const items = document.querySelectorAll("li");

items.forEach(item => {
    //console.log(item);
    item.addEventListener('click', e => {
        e.target.remove();
    });
});