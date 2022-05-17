// var x = 10;
// console.log(x);
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

// console.log(1==true);
// console.log(1===true);

/// Tax
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

/// factorial
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

/// fibonacci
let n = 5;
let f0 = 0;
let f1 = 1;
let fb_for = 1;
for (let i = 2; i < n; i++){
    f0 = f1;
    f1 = fb_for;
    fb_for = f0 + f1; 
}
console.log(fb_for);

 n = 10;
 f0 = 0;
 f1 = 1;
 let fb_while = 1;
 let i = 2;
while (i < n) {
    f0 = f1;
    f1 = fb_while;
    fb_while = f0 + f1;
    i++; 
}
console.log(fb_while);

/// check prime
n = 17;
let prime = true;
for (i = 2; i*i <= n; i++) {
    if (n % i == 0){
        prime = false;
        break;
    }
}
console.log(prime);

n = 23;
for ( i = 2; i*i <= n; i++) {
    prime = true;
    for ( j = 2; j < i ; j++){
        if (n % i == 0){
            prime = false;
            break;
        }
    }
    if (prime != false){
        console.log(i);
    }
}