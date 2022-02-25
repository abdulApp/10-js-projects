const meals = document.getElementById("meals");
// document.getElementById('meals');
// document

getRandomMeal();

async function getRandomMeal()
{
    const resp = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php'));
    const respData = await resp.json();
    const randomMeal = respData.meals[0]
    console.log("randomMeal");

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

function addMeal(mealData, random = false)
{
    console.log("addMeal");
    const meal = document.createElement('div');
    meal.classList.add('meal');
    
    meal.innerHTML = `
                            
        <div class="meal-header">

            ${random ? `<span class="random">Random Recip</span>` : ''}

            <img 
                src="${mealData.strMealThumb}" 
                alt="${mealData.strMeal}"
            >

        </div>

        <div class="meal-body">

            <h4>${mealData.strMeal}</h4>

            <button id="close-popup" class="fav-btn">
                <i class="far fa-heart"></i>
            </button>

        </div>

    `;

    const btn = meal.querySelector('.meal-body .fav-btn');
    btn.addEventListener('click', () => {
        // alert("hello");
        btn.target.classList.toggle('activ');
    });

    meals.appendChild(meal);
}

function addMealToLS(mealId)
{
    
    const mealIds = getMealsFromLS();

    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLS()
{
    
}

function getMealsFromLS()
{
    
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));

    return mealIds;
}