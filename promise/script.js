// var p= new Promise(function(resolve, reject ){
//     if (true) {
//         resolve('success');
//     }else{
//         reject('false');
//     }
// });

// //verdiğimiz söz gerçekleşirse ; sonraa
// p.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })

//promise objesi tanımlıyoruz
new Promise(function(resolve, reject ){
    setTimeout(()=> {
        resolve(5);
    },1000); //1 sn bekleyip numberı yazdırıyor 
}).then(function(number){
    console.log(number);//5
    return number*number;
}).then(function(number){
    console.log(number);//25
});


const isMomHappy = true;
const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        const phone ={
            name : "ıphone 8",
            price : 4000 ,
            color :'silver'
        }
        resolve(phone);
    }else{
        const error = new Error ('mom is not happy');
        reject(error);
    }
});

const showToFriends = function(phone){
    const message ="hi friends this is my new phone " + phone.name ;
    const resolved = Promise.resolve(message);
    return resolved;
}

const askMom = function(){
    willGetNewPhone
    .then(showToFriends)
    .then(message => console.log(message))
    .catch(error => {
        console.log(error);
    })
}

askMom();
