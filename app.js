
//fonction qui ajoute les photos dans le localstorage et qui les affiche pr l'user.
function ajouterPhoto(){
	var photo = JSON.parse(window.localStorage.getItem("galerie"));
	if (photo == null) 
	{
		var photo = [];
	}
	photo.push($("#divPhoto").val());
	for (var i = 0; i < photo.length; i++)
		window.localStorage.setItem("galerie", JSON.stringify(photo));
	{
		$("#divPhoto").show();  
	}
};

$("#buttonAjout").click(function(){

	ajouterPhoto();
	$("#divPhoto").show();
});



//function pour commenter les differentes photos.
function commenterPhoto(){
	var commantaire = $("#input").val();


};