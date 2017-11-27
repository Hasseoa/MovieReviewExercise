//handle data and stuff
function renderMovie(movie){
    document.getElementById("poster").setAttribute("src",movie.imageSrc);
    document.getElementById("title").innerText = movie.title;
    document.getElementById("text").innerText = movie.text;

    var actorList ="";    
    for(let i = 0; i < movie.actors.length; i++){
        let actor = movie.actors[i];
        actorList += ("<li>");           
        actorList += actor;
        actorList += ("</li>");               
    }    
    document.getElementById("actorList").innerHTML = actorList;  
}

renderMovie(movieData);

//Stars and stuff.....

function changeStarRating(grade){
    for(let i = 1; i <= 5; i++){
        let star = document.getElementById("star"+i);
        star.classList.remove("filledStar");
        star.classList.add("emptyStar");
    }
    for(let i = 1; i <= grade; i++){
        let star = document.getElementById("star"+i);
        star.classList.remove("emptyStar");       
        star.classList.add("filledStar"); 
    } 
  }

  for(let i = 1; i <= 5; i++){
      let star = document.getElementById("star"+i);
      star.addEventListener("click",function(){
          changeStarRating(i);
      });
  }

 

 

