var hak  = 5,user;
var tahmin,sayac =0;
var sayi = Math.floor((Math.random()*10)+1);
console.log(sayi);
user=Number(prompt("kaç kerede bileceksiniz? "));
hak=user;

while(hak > 0 ) {
    hak--;
    sayac++;
    tahmin = Number(prompt("bir sayi giriniz: "));
    if( sayi == tahmin){
        console.log(`tebrikler ${sayac} defada bildiniz :) `);
        console.log(`puan : ${100- (100/user)*(sayac-1)}`);
        break;
    }else if(sayi > tahmin){
        console.log("yukarı");
    }else{
        console.log("asagı");
    }
    
    if(hak == 0 ){
        console.log("hakkınız bitti :(  sayi: "+ sayi);
    }
}