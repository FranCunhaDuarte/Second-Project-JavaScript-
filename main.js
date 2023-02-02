const order=[];
let orderPrice=0;
let address="";
class Food{
    constructor(name,price,label){
        this.name=name;
        this.price=price;
        this.label=label;
    }
}
const americanBurger=new Food("American Burger",5.99,"Burger");
const cheeseBacon=new Food("Cheese Bacon",4.99,"Burger");
const cheeseBurger=new Food("Cheese Burger",3.99,"Burger");
const oklahoma=new Food("Oklahoma",4.99,"Burger");
const royaleBurger=new Food("Royale Burger",3.99,"Burger");
mainMenu();
function mainMenu(){
    let orderPriceVisible=orderPrice.toFixed(2);
    let option=parseInt(prompt("Welcome to \"Funny Burger\" restarunat."+"\n\nTotal order: $"+orderPriceVisible+"\n\nPlease make your order:\n\nEnter \"1\" for order burgers.\nEnter \"2\" for check the order."));
    if(option==1){
        option=0;
        burgersMenu();
    }else if(option==2){
        option=0;
        checkorder();
    }else{
        option=0;
        alert("Invalid number. Please check.")
        mainMenu();
    }
}
function burgersMenu(){
    let orderPriceVisible=orderPrice.toFixed(2);
    let option=parseInt(prompt("Total order: $"+orderPriceVisible+"\n\nSelect a number for add the burger to your order.\n\nEnter \"1\" for an American Burger.     $"+americanBurger.price+".\nEnter \"2\" for an a Cheese Bacon.     $"+cheeseBacon.price+"\nEnter \"3\" for an a Cheese Burger.     $"+cheeseBurger.price+"\nEnter \"4\" for an a Royale Burger.     $"+americanBurger.price+"\n\n\nEnter \"0\" for go back."));
        switch(option){
            case 1:
                orderPrice+=americanBurger.price;
                order.push(americanBurger);
                burgersMenu();
                break;
            case 2:
                orderPrice+=cheeseBacon.price;
                order.push(cheeseBacon);
                burgersMenu();
                break;
            case 3:
                orderPrice+=cheeseBurger.price;
                order.push(cheeseBurger);
                burgersMenu();
                break;
            case 4:
                orderPrice+=oklahoma.price;
                order.push(oklahoma);
                burgersMenu();
                break;
            case 5:
                orderPrice+=royaleBurger.price;
                order.push(royaleBurger);
                burgersMenu();
                break;
            case 0:
                mainMenu();
                break;
            default:
                alert("Invalid number. Please Check!");
                burgersMenu();
        }
}
function checkorder(){
    const names=order.map((el)=>el.name)
    console.log(names);
    let orderPriceVisible=orderPrice.toFixed(2);
    let option=parseInt(prompt("Total order: $"+orderPriceVisible+"\n\nEnter \"1\" for make de purchase.\nEnter \"0\" for go back."));
    if(option==1){
        confirm();
    }else if(option==0){
        mainMenu();
    }else{
        alert("Invalid number. Please check.")
        checkorder();
    }
}
function confirm(){
    if(orderPrice==0){
        alert("Please, first add some products to your order. Thank you.")
        mainMenu();
    }else{
        address=prompt("Enter your address.");
        alert("Thanks for trust in us. Enjoy your food.");
        mainMenu();
    }
}