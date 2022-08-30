
// default
const loadFood = () => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
        .then(res => res.json())
        .then(data => displayFood(data.meals))

}

const displayFood = foods => {
    const foodContainer = document.getElementById('food-container');
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
                <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt=${food.strMeal}>
                <div style="height:80px"class="card-body text-center bg-dark ">
                    <h4  class="card-title text-warning fw-bold"> ${food.strMeal}</h4>
                
                </div>
            </div>

    `;

        foodContainer.appendChild(foodDiv);
    });
}
loadFood();




// ...................


// search field
const nameText = document.getElementById('text');

const searchFood = () => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

    const name = nameText.value;
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    nameText.value = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
        .then(res => res.json())
        .then(data => displaySearch(data.meals))



}

const displaySearch = foods => {
    const sfoodContainer = document.getElementById('s-food-container');
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
        <div class="card">
        <img src="${food.strMealThumb}" class="card-img-top" alt=${food.strMeal}>
        <div style="height:80px"class="card-body text-center bg-dark ">
            <h4  class="card-title text-warning fw-bold"> ${food.strMeal}</h4>
           
        </div>
    </div>  

    `;

        sfoodContainer.appendChild(foodDiv);
    });



}

