// problem number-1
// we know 40 seer =  1 mon

  function seerToMon(seer){
    if(seer<0 || typeof seer !='number'){
        return 'please give a positive number'
    }
    const mon = seer/40;
    return mon;
}
  let mySeer = seerToMon(40);
 console.log(mySeer)  
 

// problem number 2

 /* shirt er Price =100
 pant er Price = 200
 shoes er Price = 500 */
 function totalSales(shirt, pant, shoes){
    const  shirtPrice =100;
    const pantPrice = 200;
    const shoesPrice = 500;
    if (shirt<0 || pant<0 || shoes<0){
        return 'please give a positive number'
    }
    if(typeof shirt !='number' && typeof pant !='number '&& typeof shoes !='number' ){
        return 'your input are invalid' 
    }
    let totalShirtPrice = shirt*shirtPrice;
    let totalPantPrice = pant*pantPrice;
    let totalshoesPrice = shoes*shoesPrice;
    const totalPrice = totalShirtPrice + totalPantPrice + totalshoesPrice;
    return totalPrice;
}
 let sales = totalSales(2, 4, 1);
 console.log(sales)  

//problem number 3
 /* delivery er sonkha 100 er kom ba beshi hole delivery cost per shirt 100;
delivery er sonkha 100 er beshi   200 er soman  hole delivery cost per shirt 80;
delivery er sonkha 200 er beshi hole delivery cost per shirt 50; */

function deliveryCost(shirtDeliveryQuantity){
    const shirtDeliveryCostFor100 = 100;
    const shirtDeliveryCostFor200 = 80;
    const shirtDeliveryCostUp200 = 50;
    if (shirtDeliveryQuantity<0 || typeof shirtDeliveryQuantity != 'number'){
        return 'Your input are invalid'
    }
    if(shirtDeliveryQuantity<=100){
        const deliveryCostFor100 = shirtDeliveryQuantity * shirtDeliveryCostFor100;
        return deliveryCostFor100;
    }
    else if(shirtDeliveryQuantity<=200){
        const deliveryCostFor100 = 100 * shirtDeliveryCostFor100;
        const restDeliveryQuantity= shirtDeliveryQuantity-100;
        const deliveryCostFor200  = restDeliveryQuantity  * shirtDeliveryCostFor200 ;
        const totalDeliveryCost = deliveryCostFor100 + deliveryCostFor200 ;
        return totalDeliveryCost;
    }
    else{
        const deliveryCostFor100 = 100 * shirtDeliveryCostFor100;
        const deliveryCostFor200 = 100 * shirtDeliveryCostFor200;
        const restDeliveryQuantity= shirtDeliveryQuantity-200;
        const restDeliveryCost = restDeliveryQuantity * shirtDeliveryCostUp200;
        const totalDeliveryCost = deliveryCostFor100 + deliveryCostFor200 + restDeliveryCost;
        return totalDeliveryCost;
    }
}
console.log(deliveryCost(47))

// problem number 4

/*   array input nite hobe friends der name er and j name er srting length 5 hobe take return korte hobe.*/
const friendsName = ['Rahela', 'Piu', 'Efti', 'Akash', 'Rakib', 'Maria'];
function perfectFriend(friendsName){
    for(let name of friendsName){
        if(name.length==5){
            return name;
        }
    }
    if( typeof friendsName !='string'){
        return 'Please give string values';
    }
}
console.log(perfectFriend()) 

 


