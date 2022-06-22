var deferredPrompt;

if(!window.Promise){                          // This if condition is used to check whether in the window, there is an promise object
    window.Promise=Promise;                   // If there isn't any, then we create an promise object.
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')                   // this register function returns an promise once the sw is started/error occured while starting the sw
    .then(function() {
       console.log('Service Worker registered!');
    })
    .catch(function(){
        console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
  });
















/* 
var promise= new Promise(function(resolve, reject){
    setTimeout(function() {
       // reject({code: 500, msg:'An error occured'});
        //console.log('This is executed once the timer is done ');
    },4000);
});


//Sending a GET request via fetch

fetch('https://httpbin.org/ip')
  .then(function(response){
        let responseClone = response.clone();
        console.log(response);
        console.log(response.json());
        return responseClone.json();
  })
   .then(function(data){
       console.log(data);
   })
   .catch(function(err){
       console.log(err);
   });


// Sending a POST request via fetch

fetch('https://httpbin.org/post' , {
    method: 'POST',
    headers: {
        'Context-Type': 'application/json',
        'Accept': 'application/json',
    },
   // mode: 'cors',
    body: JSON.stringify({message: 'Does this work !'})
})
  .then(function(response){
        let responseClone = response.clone();
        console.log(response);
        console.log(response.json());
        return responseClone.json();
  })
   .then(function(data){
       console.log(data);
   })
   .catch(function(err){
       console.log(err);
   });
/* 
promise.then(function(text){
    console.log(text);
}).then(function(newText){
    console.log(newText);
}).catch(function(err){
    console.log(err.code, err.msg);
});
 */

//console.log('This will be executed after setTimeout');
