
    
var arr=[
    {
        imgurl: "img/cat.jpg",
        name: "Cat",
        desc: 1,
        price: 200,
        qty:0
    }  ,
    {
        imgurl:"img/icecream.png" ,
        name: "Black Dianond Ice-cream",
        desc: 1,
        price: 25000,
        qty:0
    } , 
    {
        imgurl:"img/toilet_paper.png" ,
        name: "Toilet Paper" ,
        desc: 1,
        price: 2,
        qty:0
    } ,
    {
        imgurl:"img/diaper" ,
        name: "Diaper" ,
        desc: 1,
        price: 0.14,
        qty:0
    } ,
    {

        imgurl:"nailCutter.jpeg" ,
        name: "Nail Cutter" ,
        desc: 1,
        price: 2 ,
        qty:0
    } ,

    {imgurl:"burger.jpeg" ,
    name: "Burger" ,
    desc: 1,
    price: 5,
    qty:0
    } ,

    {imgurl:"img/bottle.jpeg" ,
    name: "Water Bottle 1L" ,
    desc: 1,
    price: 0.50,
    qty:0
    } ,

    {imgurl:"img/bulb.jpeg" ,
    name: "Light Bulb" ,
    desc: 1,
    price:3 ,
    qty:0
    } ,

    {imgurl:"img/pin.jpeg" ,
    name: "Bobby Pin" ,
    desc: 1,
    price: 0.10 ,
    qty:0
    } ,

    {imgurl:"img/dog.jpeg" ,
    name: "Dog" ,
    desc: 1,
    price: 50 ,
    qty:0
    } ,

    {imgurl:"img/ants.jpg" ,
    name: "Ant colony with a queen" ,
    desc: 1,
    price: 30,
    qty:0
    } ,

    {imgurl:"img/bag.jpeg" ,
    name: "Jackie Crocodile bag" ,
    desc: 1,
    price: 37000,
    qty:0
    } ,
]   



var tag;
for(var i=0;i<arr.length/3;i++){
   tag= `<div class="row">`
    

    tag+=`</div>`
}






console.log(`<div class="col-sm">
                                <div class="card " style="width: 20rem; line-height: 40%;  ">
                                    <img src="${arr[i].imgurl}"
                                        class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${arr[i].name}</h5>
                                        <p class="desc ">You can buy ${arr[i].desc} ${arr[i].name}\s</p>
                                        <h2 class="card-text">$${arr[i].price}</h2>
                                        <div class="btn-group">
                                            <button type="button"
                                                class="btn btn-outline-success btn-sm btn-outline-secondary" style="outline: none;">Buy</button>
                                            <button type="button"
                                                class="btn btn-outline-danger btn-sm btn-outline-secondary">Sell</button>
                                        </div>
                                        <input type="number" class="form-control form-control-sm d-inline" placeholder="quantity"
                                            name="text1" style="width: 80px;">
                                    </div>
                                </div>
                        </div>
                </div>`)
        