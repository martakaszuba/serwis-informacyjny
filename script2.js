document.addEventListener("DOMContentLoaded", Load);
function Load(){
    fetch("https://newsapi.org/v2/top-headlines?country=pl&category=technology&apiKey=5611edf8385a4cce97e57f8beec3264f")
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