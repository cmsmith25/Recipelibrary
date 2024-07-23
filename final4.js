const search = document.getElementById('search');
const resultTitle = document.getElementById('recipe-result-title'); //creates a variable for the title of the resulting recipes
const recipesEl = document.getElementById('recipes');


//This function will fetch data from the API
function findRecipe(e) {
	e.preventDefault();

const item = search.value; //creates a variable for the user's input. 
	
if(item.trim()) {
	
	//will fetch API data and display it to the user
	fetch(`https://www.themealdb.com/api/json/v1/1/
	search.php?s=${item}`)
		.then((res) => res.json()) //the response we get is loaded into an object
		.then((data) => { //grabs all of the data from the API
			resultTitle.innerHTML =`Search Result for ${item}`;
			
			if(data.meal===null){ //if the API does not have a recipe with the food entered, it will return the oops! message
				resultTitle.innerHTML = `Oops! There was no result for meal ${item}`;
			
			}else{
			recipesEl.innerHTML = data.meals.map((meal)=> //passes the meals array name into the function and loops to find every recipe that includes the input in the API data.
			//The image for each specific recipe found is displayed along with the title of that recipe to the user.
	`<div class="rec">
			<img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
			<div class="'rec-info" data-recId="${meal.idMeal}">
	<h3>${meal.strMeal}</h3>
	</div> 
			</div>`
			)
			.join("");//this will return the array as a string without being separated by commas when it is displayed.
		}	
	});
}else{ //will alert the user to enter a food item or recipe if the search button is clicked without an input
	alert("Please enter a meal name to search for recipes");
	}
}


submit.addEventListener("submit", findRecipe); //gives the search button functionality

