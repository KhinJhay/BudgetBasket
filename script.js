let currency = '$';
let selectedDiet = 'omnivore';

const mealData = {
  omnivore: {
    breakfast: [
      {name:'Egg & Toast Plate',emoji:'🍳',ingredients:[{n:'Eggs (2)',c:0.50},{n:'Whole wheat bread',c:0.40},{n:'Butter',c:0.20},{n:'Orange juice',c:0.60}],cal:380},
      {name:'Oatmeal Bowl',emoji:'🥣',ingredients:[{n:'Rolled oats',c:0.30},{n:'Banana',c:0.25},{n:'Honey',c:0.20},{n:'Milk',c:0.35}],cal:310},
      {name:'Avocado Toast',emoji:'🥑',ingredients:[{n:'Sourdough bread',c:0.60},{n:'Avocado (½)',c:0.80},{n:'Eggs (2)',c:0.50},{n:'Chili flakes',c:0.05}],cal:420},
    ],
    lunch: [
      {name:'Chicken Rice Bowl',emoji:'🍚',ingredients:[{n:'Chicken breast',c:1.20},{n:'Brown rice',c:0.40},{n:'Mixed veggies',c:0.60},{n:'Soy sauce',c:0.10}],cal:520},
      {name:'Lentil Soup',emoji:'🥣',ingredients:[{n:'Red lentils',c:0.40},{n:'Carrots & onion',c:0.35},{n:'Tomato paste',c:0.20},{n:'Bread roll',c:0.35}],cal:380},
      {name:'Tuna Sandwich',emoji:'🥪',ingredients:[{n:'Canned tuna',c:0.80},{n:'Whole wheat bread',c:0.40},{n:'Lettuce & tomato',c:0.30},{n:'Mayo',c:0.15}],cal:440},
    ],
    dinner: [
      {name:'Pasta Bolognese',emoji:'🍝',ingredients:[{n:'Pasta (200g)',c:0.50},{n:'Ground beef',c:1.80},{n:'Tomato sauce',c:0.60},{n:'Parmesan',c:0.40}],cal:680},
      {name:'Stir Fry & Rice',emoji:'🥘',ingredients:[{n:'Chicken thigh',c:1.00},{n:'Bell peppers',c:0.60},{n:'Rice',c:0.40},{n:'Stir fry sauce',c:0.30}],cal:580},
      {name:'Bean Tacos',emoji:'🌮',ingredients:[{n:'Black beans',c:0.50},{n:'Corn tortillas',c:0.60},{n:'Cheese',c:0.80},{n:'Salsa & lime',c:0.30}],cal:520},
    ],
    snack: [
      {name:'Apple & Peanut Butter',emoji:'🍎',ingredients:[{n:'Apple',c:0.40},{n:'Peanut butter (2tbsp)',c:0.30}],cal:200},
      {name:'Yogurt & Granola',emoji:'🫙',ingredients:[{n:'Greek yogurt',c:0.60},{n:'Granola',c:0.40}],cal:240},
    ]
  },
  vegetarian: {
    breakfast: [
      {name:'Veggie Omelette',emoji:'🍳',ingredients:[{n:'Eggs (3)',c:0.60},{n:'Mushrooms',c:0.50},{n:'Bell pepper',c:0.40},{n:'Cheese',c:0.30}],cal:380},
      {name:'Smoothie Bowl',emoji:'🍓',ingredients:[{n:'Frozen berries',c:0.80},{n:'Banana',c:0.25},{n:'Almond milk',c:0.40},{n:'Granola topping',c:0.35}],cal:340},
    ],
    lunch: [
      {name:'Caprese Salad',emoji:'🥗',ingredients:[{n:'Fresh mozzarella',c:1.20},{n:'Tomatoes',c:0.50},{n:'Fresh basil',c:0.30},{n:'Olive oil',c:0.20}],cal:380},
      {name:'Veggie Wrap',emoji:'🌯',ingredients:[{n:'Large tortilla',c:0.40},{n:'Hummus',c:0.50},{n:'Mixed veg',c:0.60},{n:'Feta cheese',c:0.60}],cal:440},
    ],
    dinner: [
      {name:'Vegetable Curry',emoji:'🍛',ingredients:[{n:'Chickpeas',c:0.50},{n:'Coconut milk',c:0.70},{n:'Mixed veggies',c:0.60},{n:'Basmati rice',c:0.40}],cal:560},
      {name:'Mushroom Risotto',emoji:'🍄',ingredients:[{n:'Arborio rice',c:0.60},{n:'Mushrooms',c:0.80},{n:'Vegetable stock',c:0.30},{n:'Parmesan',c:0.50}],cal:580},
    ],
    snack: [
      {name:'Trail Mix',emoji:'🥜',ingredients:[{n:'Mixed nuts (30g)',c:0.60},{n:'Dried cranberries',c:0.30}],cal:180},
    ]
  },
  vegan: {
    breakfast: [
      {name:'Overnight Oats',emoji:'🥣',ingredients:[{n:'Rolled oats',c:0.30},{n:'Oat milk',c:0.50},{n:'Chia seeds',c:0.30},{n:'Maple syrup',c:0.20}],cal:320},
      {name:'Peanut Butter Toast',emoji:'🍞',ingredients:[{n:'Whole grain bread',c:0.40},{n:'Peanut butter',c:0.40},{n:'Banana slices',c:0.25},{n:'Hemp seeds',c:0.20}],cal:400},
    ],
    lunch: [
      {name:'Buddha Bowl',emoji:'🥗',ingredients:[{n:'Quinoa',c:0.80},{n:'Roasted chickpeas',c:0.50},{n:'Kale & spinach',c:0.50},{n:'Tahini dressing',c:0.30}],cal:480},
      {name:'Lentil Soup',emoji:'🥣',ingredients:[{n:'Red lentils',c:0.40},{n:'Tomatoes & onion',c:0.40},{n:'Cumin & spices',c:0.15},{n:'Pita bread',c:0.40}],cal:380},
    ],
    dinner: [
      {name:'Tofu Stir Fry',emoji:'🥘',ingredients:[{n:'Firm tofu',c:0.90},{n:'Mixed vegetables',c:0.60},{n:'Rice noodles',c:0.50},{n:'Soy & ginger sauce',c:0.20}],cal:520},
      {name:'Black Bean Tacos',emoji:'🌮',ingredients:[{n:'Black beans',c:0.50},{n:'Corn tortillas',c:0.60},{n:'Avocado',c:0.80},{n:'Mango salsa',c:0.40}],cal:500},
    ],
    snack: [
      {name:'Apple & Almond Butter',emoji:'🍎',ingredients:[{n:'Apple',c:0.40},{n:'Almond butter',c:0.50}],cal:220},
    ]
  },
  glutenfree: {
    breakfast: [
      {name:'GF Egg Scramble',emoji:'🍳',ingredients:[{n:'Eggs (3)',c:0.60},{n:'Sweet potato hash',c:0.60},{n:'Spinach',c:0.30},{n:'Feta cheese',c:0.50}],cal:400},
    ],
    lunch: [
      {name:'Rice & Bean Bowl',emoji:'🍚',ingredients:[{n:'Brown rice',c:0.40},{n:'Black beans',c:0.50},{n:'Corn & peppers',c:0.50},{n:'GF salsa',c:0.30}],cal:460},
    ],
    dinner: [
      {name:'Grilled Salmon',emoji:'🐟',ingredients:[{n:'Salmon fillet',c:2.50},{n:'Quinoa',c:0.80},{n:'Asparagus',c:0.70},{n:'Lemon & herbs',c:0.20}],cal:580},
    ],
    snack: [
      {name:'Rice Cakes & Hummus',emoji:'🫘',ingredients:[{n:'Rice cakes (3)',c:0.30},{n:'Hummus',c:0.50}],cal:160},
    ]
  }
};

function selectDiet(el) {
  document.querySelectorAll('.diet-opt').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  selectedDiet = el.dataset.diet;
}

function setCurrency(val) {
  currency = val;
  document.getElementById('currencySymbol').textContent = val;
}

function openSettings() { document.getElementById('settingsOverlay').classList.add('open'); }
function closeSettings() { document.getElementById('settingsOverlay').classList.remove('open'); }
function toggleDark(el) { document.documentElement.setAttribute('data-theme', el.checked ? 'dark' : ''); }

function generateMealPlan() {
  const budget = parseFloat(document.getElementById('budgetInput').value);
  if (!budget || budget < 1) { alert('Please enter a valid budget!'); return; }
  
  const loader = document.getElementById('loadingOverlay');
  loader.classList.add('show');
  
  setTimeout(() => {
    loader.classList.remove('show');
    buildMealPlan(budget);
  }, 1800);
}

function buildMealPlan(budget) {
  const mealCount = parseInt(document.getElementById('mealCount').value);
  const diet = selectedDiet in mealData ? selectedDiet : 'omnivore';
  const data = mealData[diet];
  const mealTypes = ['breakfast','lunch','dinner','snack'].slice(0, mealCount);
  
  const budgetPerMeal = budget / mealCount;
  let totalCost = 0;
  const selectedMeals = [];

  mealTypes.forEach(type => {
    const options = data[type] || data['snack'];
    const affordable = options.filter(m => m.ingredients.reduce((s,i) => s+i.c, 0) <= budgetPerMeal * 1.2);
    const meal = affordable.length > 0 
      ? affordable[Math.floor(Math.random() * affordable.length)]
      : options[0];
    const cost = meal.ingredients.reduce((s,i) => s+i.c, 0);
    totalCost += cost;
    selectedMeals.push({...meal, type, cost});
  });

  const showCals = document.getElementById('calToggle').checked;
  document.getElementById('resultsSubtitle').textContent = 
    `${mealCount} meal${mealCount>1?'s':''} • ${selectedDiet.charAt(0).toUpperCase()+selectedDiet.slice(1)} • ${currency}${budget.toFixed(2)} budget`;

  const grid = document.getElementById('mealsGrid');
  grid.innerHTML = '';
  selectedMeals.forEach((meal, i) => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="meal-card-header">
        <span class="meal-type">${meal.type.toUpperCase()}</span>
        <span class="meal-emoji">${meal.emoji}</span>
      </div>
      <div class="meal-card-body">
        <div class="meal-name">${meal.name}</div>
        ${showCals ? `<div style="font-size:12px;color:var(--sage);font-family:'Space Mono',monospace;margin-bottom:10px;">~${meal.cal} kcal</div>` : ''}
        <ul class="ingredient-list">
          ${meal.ingredients.map(ing => `<li><span class="ing-name">${ing.n}</span><span class="ing-cost">${currency}${ing.c.toFixed(2)}</span></li>`).join('')}
        </ul>
        <div class="meal-total">
          <span class="meal-total-label">Meal Total</span>
          <span class="meal-total-val">${currency}${meal.cost.toFixed(2)}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  const remaining = budget - totalCost;
  const pct = Math.min((totalCost / budget) * 100, 100);
  
  document.getElementById('summaryCard').innerHTML = `
    <div class="summary-stat"><div class="summary-stat-num">${currency}${totalCost.toFixed(2)}</div><div class="summary-stat-label">Total Spent</div></div>
    <div class="summary-stat"><div class="summary-stat-num">${currency}${Math.max(remaining, 0).toFixed(2)}</div><div class="summary-stat-label">Remaining</div></div>
    <div class="summary-stat"><div class="summary-stat-num">${mealCount}</div><div class="summary-stat-label">Meals Planned</div></div>
    <div class="summary-msg">${remaining >= 0 ? `🎉 You're ${currency}${remaining.toFixed(2)} under budget — maybe grab a treat?` : `⚠ This plan is ${currency}${Math.abs(remaining).toFixed(2)} over. Consider swapping one meal.`}</div>
  `;

  document.getElementById('meterSection').style.display = 'block';
  document.getElementById('meterLabel').textContent = `${currency}${totalCost.toFixed(2)} / ${currency}${budget.toFixed(2)}`;
  setTimeout(() => { document.getElementById('meterFill').style.width = pct + '%'; }, 100);

  document.getElementById('resultsSection').style.display = 'block';
  document.getElementById('resultsSection').scrollIntoView({behavior:'smooth', block:'start'});
}

function resetPlan() {
  document.getElementById('resultsSection').style.display = 'none';
  document.getElementById('meterSection').style.display = 'none';
  document.getElementById('meterFill').style.width = '0%';
  document.getElementById('budgetInput').value = '';
  window.scrollTo({top:0, behavior:'smooth'});
}