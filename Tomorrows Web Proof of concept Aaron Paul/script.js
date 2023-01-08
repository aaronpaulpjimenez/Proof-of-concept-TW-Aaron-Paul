document.getElementById("btn").addEventListener("click", changeImg);

function changeImg(){
  $.getJSON( "https://dog.ceo/api/breeds/image/random")
    .done (function( json ) {
      let img = document.getElementById("img");
      img.src = json.message;
    })
    .fail(function(){
      console.log('something went wrong');
    });
}