const Products:any = document.getElementById("products");

var w:any = 0;

class product{
    name:string;
    img:string;
    cost:number;
    discription:string;
    html:any;
    constructor(name:string, img:string, cost:number, discription:string){
        this.name = name;
        this.img = img;
        this.cost = cost;
        this.discription = discription;
    }
    init(){
        this.html = "<div class='product' id='"
        + this.name
        + "'><h1>"
        + this.name
        + "</h1><img style='width:10;height:10vh;' class='pixel' src='"
        + this.img
        + "'><h3>&euro;"
        + this.cost
        + "</h3><p>"
        + this.discription
        + "</p>";
        Products.innerHTML += this.html;
        w += 25.9;
        Products.style.width = w + "vh"
    }
};

const products = [
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
    new product("test", "order/img/test.png", 100, "test object").init(),
];

