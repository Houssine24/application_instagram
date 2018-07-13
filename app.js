console.log("hello");

$("#inPhoto").hide();

$("#buttonAjout").hide();

$("#vide").hide();



$("#add").click(function(){

	$("#inPhoto").show();

	$("#buttonAjout").show();

});





$("#buttonAjout").click(function(){



	ajouterPhoto();

	$("#divPhoto").show();

	

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



$("#inPhoto").hide();

$("#buttonAjout").hide();

});

var photo = JSON.parse(window.localStorage.getItem("galerie"));

if (photo == null) 

{

	var photo = [];

}

for (var i = 0; i < photo.length; i++)

{

	$("#divPhoto").append('<img src="images/' + photo[i] + '"/>');

}



// $('#supp').click(function()
// {

// 	var ligne = $(this).closest("tr");
// 	var idTmp = ligne.find(".id").text();
	

	
// 		var photos = JSON.parse(window.localStorage.getItem("galerie"));
// 		photos.splice(idTmp, 1);
// 		var val = JSON.stringify(photos);
// 		window.localStorage.setItem("galerie", val);
// 		location.href="accueil.html";

// });