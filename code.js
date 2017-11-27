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