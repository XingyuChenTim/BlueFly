new Vue({
    el: '#app',
    data: {
        currentFilter: 'Appetizers',
        projects: [
            {image: "Food/Appetizers/A1.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A2.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A3.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A4.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A6.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A7.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A8.jpg", category: 'Appetizers'},
            {image: "Food/Appetizers/A9.jpg", category: 'Appetizers'},

            {image: "Food/Starters/S1.jpg", category: 'Starters'},
            {image: "Food/Starters/S2.jpg", category: 'Starters'},
            {image: "Food/Starters/S3.jpg", category: 'Starters'},

            {image: "Food/Entrees/1.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nStir-fried with bell peppers, onions, carrots, celery and water chestnuts in a brown sauce topped with almonds."},
            {image: "Food/Entrees/2.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nStir-fried with broccoli, celery, onions, bell peppers, carrots and water chestnuts in a brown sauce topped with cashews."},
            {image: "Food/Entrees/3.jpg", category: 'Entrees', nutrition: "Choice of Beef or Chicken or Triple Crown (Combo): \nWok-seared with onions, scallions and mushrooms in special Mongolian sauce."},
            {image: "Food/Entrees/4.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nStir-fried with celery, onions, mushrooms, carrots and water chestnuts in a garlic sauce"},
            {image: "Food/Entrees/5.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Shrimp: \nStir-fried with broccoli and carrots in a brown sauce."},
            {image: "Food/Entrees/6.jpg", category: 'Entrees', nutrition: "Choice of Steak or Chicken or Pork: \nStir-fried with green peppers, onions and carrots in a brown sauce."},
            {image: "Food/Entrees/7.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nSpicy Sichuan chili sauce with bell peppers, onions, carrots, celery and water chestnuts topped with peanuts."},
            {image: "Food/Entrees/8.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nStir-fried with celery, onions, mushrooms, carrots and water chestnuts in a spicy garlic sauce."},
            {image: "Food/Entrees/9.jpg", category: 'Entrees', nutrition: "Choice of Chicken or Beef or Pork or Shrimp: \nHunan style chili sauce with carrots, bamboo shoots, broccoli and water chestnuts."},
            {image: "Food/Entrees/10.jpg", category: 'Entrees', nutrition: "Shrimp and sliced beef with vegetables cooked in a brown sauce and served on a sizzling plate."},
            {image: "Food/Entrees/11.jpg", category: 'Entrees', nutrition: "A splendid combination of Shrimp, chicken and beef with water chestnuts, carrots, broccoli and mushrooms."},

            {image: "Food/B&F Favorites/12.jpg", category: 'Favorites', nutrition: "Choice of Chicken or Pork or Shrimp: \nTossed with pineapple, bell peppers and onions in a sweet & sour sauce."},
            {image: "Food/B&F Favorites/13.jpg", category: 'Favorites', nutrition: "Choice of Chicken or Beef: \nSesame sauce with broccoli, bell peppers and onions."},
            {image: "Food/B&F Favorites/14.jpg", category: 'Favorites', nutrition: "Choice of Chicken"},
            {image: "Food/B&F Favorites/15.jpg", category: 'Favorites', nutrition: "Choice of Chicken or Pork or Shrimp: \nDeep fried and topped with a special sweet-spicy sauce."},
            {image: "Food/B&F Favorites/16.jpg", category: 'Favorites', nutrition: "Choice of Chicken: \nSpicy Sesame sauce with broccoli, carrots, water chestnuts and celery."},
            {image: "Food/B&F Favorites/17.jpg", category: 'Favorites', nutrition: "Choice of Chicken or Beef"},
            {image: "Food/B&F Favorites/18.jpg", category: 'Favorites', nutrition: "Choice of Chicken or Beef"},

            {image: "Food/B&F Old Fashions/19.jpg", category: 'Old Fashions', nutrition: "Choice of Chicken or Beef or Pork or Shrimp or Combo: \nSavory soy sauce tossed with wok-seared noodles and fresh vegetables (cabbage, mushrooms, onions and carrots)."},
            {image: "Food/B&F Old Fashions/20.jpg", category: 'Old Fashions', nutrition: "Choice of Chicken or Beef or Pork or Shrimp or Combo: \nTossed in savory soy sauce with egg, peas, green onions and carrots."},
            {image: "Food/B&F Old Fashions/21.jpg", category: 'Old Fashions', nutrition: "Choice of Chicken or Beef of Pork or Shrimp or Combo: \nStir-fried with combination vegetables of cabbage, carrots, mushrooms, onions, water chestnuts and bamboo shoots in a brown sauce."},

            {image: "Food/Vegetarian/22.jpg", category: 'Vegetarian', nutrition: "Broccoli, bell peppers, carrots, celery, mushrooms, water chestnuts and onions with brown sauce."},
            {image: "Food/Vegetarian/23.jpg", category: 'Vegetarian', nutrition: "Spicy chili sauce and Ma la flavor peppers with silken bean curd."},
            {image: "Food/Vegetarian/24.jpg", category: 'Vegetarian', nutrition: "Spicy Sichuan chili sauce with bell peppers , onions, carrots, celery and water chestnuts topped with peanuts."},
            {image: "Food/Vegetarian/25.jpg", category: 'Vegetarian', nutrition: "Silken bean curd with Broccoli, bell peppers, carrots, celery, mushrooms, water chestnuts, bamboo shoots and onions in a brown sauce."},
            {image: "Food/Vegetarian/26.jpg", category: 'Vegetarian', nutrition: "Savory soy sauce tossed with wok-seared noodles and fresh vegetables (cabbage, mushrooms, onion, water chestnuts and bamboo shoots)."},
            {image: "Food/Vegetarian/27.jpg", category: 'Vegetarian', nutrition: "Tossed in savory soy sauce with egg, peas, green onions, carrots and all other fresh vegetables in kitchen. "},

            {image: "Food/Appetizers(Salad)/A1.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A2.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A3.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A4.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A5.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A6.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A7.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A8.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A9.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A10.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A11.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A12.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A13.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A16.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A18.jpg", category: 'Appetizers(Salad)'},
            {image: "Food/Appetizers(Salad)/A19.jpg", category: 'Appetizers(Salad)'},

            {image: "Food/Vegetables/V1.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V2.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V3.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V4.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V5.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V6.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V7.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V8.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V9.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V10.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V11.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V12.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V13.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V14.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V15.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V16.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V18.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V19.jpg", category: 'Vegetables'},
            {image: "Food/Vegetables/V20.jpg", category: 'Vegetables'},

            {image: "Food/Seafood/S1.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S2.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S3.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S4.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S5.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S6.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S7.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S8.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S9.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S10.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S11.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S12.jpg", category: 'Seafood'},
            {image: "Food/Seafood/S13.jpg", category: 'Seafood'},

            {image: "Food/Meat/M1.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M2.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M3.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M4.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M5.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M6.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M7.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M8.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M9.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M10.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M11.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M12.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M13.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M14.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M15.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M16.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M17.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M18.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M19.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M20.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M21.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M22.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M23.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M24.jpg", category: 'Beef, Chiken, Pork, Lamb'},
            {image: "Food/Meat/M25.jpg", category: 'Beef, Chiken, Pork, Lamb'},

            {image: "Food/Casserole/C1.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C2.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C3.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C4.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C5.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C6.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C7.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C8.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C9.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C10.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C11.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C12.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C14.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C15.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C16.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C17.jpg", category: 'Casserole, Noodle, Rice'},
            {image: "Food/Casserole/C18.jpg", category: 'Casserole, Noodle, Rice'},

            {image: "Food/Soup/P1.jpg", category: 'Soup'},
            {image: "Food/Soup/P2.jpg", category: 'Soup'},
            {image: "Food/Soup/P3.jpg", category: 'Soup'},
            {image: "Food/Soup/P4.jpg", category: 'Soup'},
            {image: "Food/Soup/P5.jpg", category: 'Soup'},

            {image: "Food/Dessert/Caramel pudding.jpg", category: 'Dessert(limited offer)'},
            {image: "Food/Dessert/Mango Tapioca..jpg", category: 'Dessert(limited offer)'},
        ]
    },
    methods: {
        nutrition: function(idx)
        {
            swal({title: "Food description", text: this.projects[idx].nutrition,});
        },
        setFilter: function(filter) {
            this.currentFilter = filter;
        }
    }
})