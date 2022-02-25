const meals = document.getElementById('meals');

getRandomMeal()

async function getRandomMeal()
{
    const resp = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php'));
    const respData = await resp.json();
    const randomMeal = respData.meals[0]
    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById(id)
{
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}

async function getMealBySearch(term)
{
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

// function
addMeal(mealData, random = false)
{
    
}