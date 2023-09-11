// Dados das refeições e suas informações nutricionais
const meals = [
    { calories: 300, proteins: 20, carbs: 45, fats: 10 },
    { calories: 400, proteins: 25, carbs: 50, fats: 15 },
    { calories: 350, proteins: 18, carbs: 42, fats: 12 }
];

const mealButtons = document.querySelectorAll('.meal-button');
const mealInfoDivs = document.querySelectorAll('.meal-info');

mealButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        mealInfoDivs.forEach((div, i) => {
            if (i === index) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    });
});
