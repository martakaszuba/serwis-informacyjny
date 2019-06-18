document.addEventListener("DOMContentLoaded", Load);
function Load(){
    fetch("klucz")
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       var articles = data.articles;
       var main = document.querySelector("#main");
       articles.forEach(function(val){
        main.innerHTML += `<a href=${val.url}
        <div class="product shadow-lg">
            <div class="title">
                <h4>${val.source.name}</h4>
                </div>
                <div class="content">
            <p>${val.title}</p>
            </div>
            </div>
            </a>`
       })

   });
}
