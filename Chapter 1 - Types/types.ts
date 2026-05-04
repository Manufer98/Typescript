const calculateTotal = (price:number, quantity:number, discount:number) : number =>{
    return price * quantity * (1 - discount);

}


console.log(calculateTotal(1,1,1)); 


