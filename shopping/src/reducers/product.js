const initialState = [
    {
        id : 1,
        name :"Iphone X",
        image:"https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        discription :"Made by Apple",
        price : 1000 ,  
        inventory :10 ,
        rating :4 
    },
    {
        id : 2,
        name :"Galaxy S21 Ultra",
        image:"https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-den-600x600-1-200x200.jpg",
        discription :"Made by Samsung",
        price : 1200 ,  
        inventory :15 ,
        rating :3
    },
    {
        id : 3,
        name :"LG V50 ThinQ",
        image:"https://cdn.tgdd.vn/Products/Images/42/199012/lg-v50-thinq-1-600x600.jpg",
        discription :"Made by LG Electronux",
        price : 800 ,  
        inventory : 5 ,
        rating : 5
    },
    {
        id : 4,
        name :"Iphone XS Max",
        image:"https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
        discription :"Made by Apple Cor",
        price : 1200 ,  
        inventory : 5 ,
        rating : 5
    },
    {
        id : 5,
        name :"One Plus 7 Pro",
        image:"https://cdn.tgdd.vn/Products/Images/42/201392/oneplus-7-pro-5g-1-600x600.jpg",
        discription :"Made by One Plus",
        price : 1000 ,  
        inventory : 5 ,
        rating : 4
    },
    {
        id : 6,
        name :"Xiaomi Mi 11",
        image:"https://cdn.tgdd.vn/Products/Images/42/230769/xiaomi-mi-11-pro-600x600-3-600x600.jpg",
        discription :"Made by Xiaomi China",
        price : 1100 ,  
        inventory : 5 ,
        rating : 3
    }
]

const products = (state= initialState , action ) =>{
    switch(action.types){
        default : return state
    }
}
export default products;