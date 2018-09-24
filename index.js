fetch('https://my.api.mockaroo.com/email.json?key=85694220')
.then(function(response) {
return response.json();

})

.then(function(data){

abc = data;



const HtmlSninnet=abc.map ((  ab ,index)   => 
     `
     <div class="email-item email-item-selected pure-g">
     <div class="pure-u">
         <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src=${ab.avatar}>
     </div>

     <div class="pure-u-3-4">
         <h5 class="email-name">${ab.last_name}</h5>
         <h4 class="email-subject">${ab.email}</h4>
         <p class="email-desc">
         ${ab.body}
         </p>
     </div>
 </div>

` );
const main = document.querySelector("#list");    
main.innerHTML= HtmlSninnet;

})

const btns = [...document.querySelectorAll("#qwe")];
btns.map (btns => 
btns.addEventListener ("click", function() {
    response.push();

})
);

























