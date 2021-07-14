const searchBtn = document.getElementById('search');
const panel = document.getElementById('panel');
searchBtn.addEventListener('click', () => {
	const searchText = document.getElementById('input-text');
	console.log(searchText.value);
});

async function getRandomMeal() {
	const resp = await fetch(
		'https://www.themealdb.com/api/json/v1/1/random.php'
	);
	const respData = await resp.json();
	const randomMealData = respData.meals[0];
	console.log(respData.meals[0]);
	addMeal(randomMealData, true);
}

getRandomMeal();

function addMeal(randomMealData, random = false) {
	const randomMeal = document.createElement('div');
	randomMeal.classList.add('random--meal');
	panel.appendChild(randomMeal);
	randomMeal.innerHTML = `
    <div class="random--meal__image">
    ${random ? `<span> ${randomMealData.strMeal}</span>` : ''}
    <img src="${randomMealData.strMealThumb}" alt="${randomMealData.strMeal}">
    </div>  
    `;
}
