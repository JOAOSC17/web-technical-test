let title = document.querySelector(".desc h4");
let description = document.querySelector(".desc p");
let terms= document.querySelector("#btnOne");
let join = document.querySelector("#btnTwo");
let img = document.querySelector(".img");
let main = document.querySelector("main");
let section = document.querySelector("section");
let onlyNew = document.querySelector("#OnlyNew")
let all = document.querySelector("#All")
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let cliente = JSON.parse(this.responseText);
     // title.innerHTML = `<h4>${cliente[0].name}</h4>`
    all.addEventListener("click", () => {

         main.innerHTML = `${getAll()}`;
       });
      onlyNew.addEventListener("click", () => {

         main.innerHTML = `${getOnly()}`;
       });
       window.addEventListener("load", () => {
        all.focus();
        main.innerHTML = `${getAll()}`;
       });
     function getAll() { 
          section = "";
            for(let i in cliente) {
                if(cliente[i].onlyNewCustomers === false ){
                section += `
                     <section>
                          <div class="img">${cliente[i].heroImageUrl}</div>
                         <div class="desc">
                             <h4>${cliente[i].name}</h4>
                             <p>${cliente[i].description}</p>
                             <div class="buttons">
                                
                             <button id="btnOne">${cliente[i].termsAndConditionsButtonText}</button>
                             <button id="btnTwo">${cliente[i].joinNowButtonText}</button>
                             </div>
                         </div> 
                         </section>`;       
                
             }
           }  
           
           return section; 
     }
     function getOnly(){
         section = "";
         for(let i in cliente) {
            if(cliente[i].onlyNewCustomers === true ){
            section += `
                 <section>
                      <div class="img">${cliente[i].heroImageUrl}</div>
                     <div class="desc">
                         <h4>${cliente[i].name}</h4>
                         <p>${cliente[i].description}</p>
                         <div class="buttons">
                            
                         <button id="btnOne">${cliente[i].termsAndConditionsButtonText}</button>
                         <button id="btnTwo">${cliente[i].joinNowButtonText}</button>
                         </div>
                     </div> 
                     </section>`;       
            
         }
       }  
       
       return section; 
     }
   }
 };

 xmlhttp.open("GET", "./data.json", true);
 xmlhttp.send(); 