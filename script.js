// var x = 10;
// console.log(x);
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

// console.log(1==true);
// console.log(1===true);

// let receive = 999999;
// let rate;
// if(receive <= 150000){
//     rate = 0;
// }
// else if(receive <= 300000){
//     rate = (receive - 150000) * 0.05;
// }
// else if(receive <= 500000){
//     rate = ((receive - 300000) * 0.1) + 7500;
// }
// else if(receive <= 750000){
//     rate = ((receive - 500000) * 0.15) + 27500;
// }
// else if(receive <= 1000000){
//     rate = ((receive - 750000) * 0.2) + 65000;
// }
// else if(receive <= 2000000){
//     rate = ((receive - 1000000) * 0.25) + 115000;
// }
// else if(receive <= 5000000){
//     rate = ((receive - 2000000) * 0.3) + 365000;
// }
// else{
//     rate = ((receive - 5000000) * 0.35) + 1265000;
// }
// console.log('You have to pay ' + rate );

let nf = 3;
let fac_f = 1;
if(nf==0){
    console.log('1');
}
else{
    for (let i = 1; i <= nf; i++) {
        fac_f = fac_f * i;
    }
    console.log(fac_f);
}

let nw = 5;
let fac_w = 1;
while(nw > 0){
    fac_w = fac_w * nw;
    nw--;
}
console.log(fac_w);



