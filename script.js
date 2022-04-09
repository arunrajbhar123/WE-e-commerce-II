var arr = JSON.parse(localStorage.getItem("Products")) || [];

function Products(a, b, c, d, e, f) {
    this.name = a;
    this.category = b;
    this.image_url = c;
    this.price = d;
    this.gender = e;
    this.sold = f;
}

function storeProducts(e) {
    e.preventDefault();
    let form = document.getElementById("adminpanel");
    let name = form.name.value;
    let category = form.category.value;
    let img = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.checked;

    let all = new Products(name, category, img, price, gender, sold);
    arr.push(all);
    localStorage.setItem("Products", JSON.stringify(arr));
    console.log(sold)
}