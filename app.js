console.log("hello");



$("#buttonAjout").click(function(){

	ajouterPhoto();
	$("#divPhoto").show();
});
//fonction qui ajoute les photos dans le localstorage et qui les affiche pr l'user.
function ajouterPhoto(){
	$("#divPhoto").empty();
	var photo = JSON.parse(window.localStorage.getItem("galerie"));
	if (photo == null) 
	{
		var photo = [];
	}

	var nouvelle_image = document.getElementById("inPhoto").files[0].name;
 

	photo.push( nouvelle_image );

	window.localStorage.setItem("galerie", JSON.stringify(photo));

	for (var i = 0; i < photo.length; i++)
	{
		$("#divPhoto").append('<img src="images/' + photo[i] + '"/>');
	}
};
