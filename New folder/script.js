var getproduct = JSON.parse(localStorage.getItem("Products")) || [];
// console.log(getproduct)
var total = getproduct.length;
var items = document.createElement("h1");
items.innerText = `Total items in bag ${total}`;
document.querySelector("#counter").append(items);
getproduct.map(function(el, i) {

    var box = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.image_url;
    var name = document.createElement("p");
    name.innerHTML = el.name;
    var price = document.createElement("p");
    price.innerHTML = `$${el.price}`;
    var sold = document.createElement("button");
    sold.innerText = el.sold;
    if (el.sold == false) {
        sold.style.backgroundColor = "green";
    } else {
        sold.style.backgroundColor = "red";
    }
    sold.addEventListener("click", function() {
        changethetext(el, i);
    });
    var remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", function() {
        removeitems(el, i);
    });



    box.append(img, name, price, sold, remove);
    document.querySelector(".product").append(box);
});


function removeitems(el, i) {
    getproduct.splice(i, 1);
    window.location.reload();
    localStorage.setItem("Products", JSON.stringify(getproduct));

}
var change;

function changethetext(el, i) {
    if (el.sold == false) {
        change = true;
    } else {
        change = false;

    }
    var update = JSON.parse(localStorage.getItem("Products"));
    update[i].sold = change;
    console.log(update);
    localStorage.setItem("Products", JSON.stringify(update));
    window.location.reload();
}