var app = {
	URL: "https://dog.ceo/api/breeds/image/random",
	initialize: function() {
		$("#next").click(function(){
			console.log("Clicked search");
			$("#results").html("");
			app.searchDog();
		}),

		$("body").keypress(function(e){
			//If enter key is pressed
			if (e.which == 13){
				$("#next").trigger('click');
			}
		});
	},

	searchDog: function() {
		fetch ('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(response => {console.log(response); var searchResults = response[1]; this.revealDogPicture(response);})
		.catch(error => console.log(error))
	},

	revealDogPicture: function(response) {
		var searchResults = response.message;
		$('#results').html(`<img id="dogImage" src="${searchResults}"></img>`);
	},
}
