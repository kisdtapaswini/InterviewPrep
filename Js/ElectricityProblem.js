function calcElectricityBill(n){
        if(n <= 50) {
            return n*0.5
        } else if(n <= 150){
            return 50*0.5 + (n-50)*.75;
        } else if(n <=250){
            return 50*0.5 + 100 *0.75 + (n-150) * 1.20;
        }else{
            return 50*0.5 + 100 *0.75 + 100 * 1.20 + (n-250) * 1.50;
        }
}
console.log(calcElectricityBill(500));