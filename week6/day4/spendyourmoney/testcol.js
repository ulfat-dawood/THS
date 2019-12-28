
    
var arr=[
    {
        imgurl: "img/persian_cat.jpg",
        name: "Persian Cat",
        desc: 1,
        price: 1000,
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
    } 
]   



for(i=0;i<3;i++){
    console.log(cardText)
}

var cardText=          `<div class="col-sm">
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
                </div>`
        