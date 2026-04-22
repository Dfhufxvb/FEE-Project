const RESTAURANTS = [
  {
    id:1, name:"Spice Garden", emoji:"🍛", rating:4.8, reviews:2340,
    time:"20-30", minOrder:149, delivery:0, price:2,
    discount:"40% OFF up to ₹80", promoted:true, isOpen:true,
    color:"linear-gradient(135deg,#1a0a00,#5c2a00)", cats:["biryani","north-indian"],
    tags:["North Indian","Biryani","Mughlai"], cuisine:"North Indian",
    img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    menu:{
      "🏆 Bestsellers":[
        {id:"sg1",name:"Chicken Biryani",emoji:"🍛",price:299,orig:399,desc:"Slow-cooked dum biryani with tender chicken, saffron & whole spices. Served with raita.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:620},
        {id:"sg2",name:"Paneer Butter Masala",emoji:"🧀",price:249,orig:null,desc:"Soft paneer cubes in rich, creamy tomato-butter gravy. Goes best with naan.",veg:true,stars:"★★★★★",badge:null,cal:450},
        {id:"sg3",name:"Butter Chicken",emoji:"🍗",price:279,orig:349,desc:"Tender chicken in silky tomato-butter sauce. Delhi's most loved dish.",veg:false,stars:"★★★★☆",badge:"Trending",cal:580},
      ],
      "🍚 Biryani & Rice":[
        {id:"sg4",name:"Veg Biryani",emoji:"🌿",price:219,orig:null,desc:"Aromatic basmati with seasonal vegetables, fried onions & mint.",veg:true,stars:"★★★★☆",badge:null,cal:520},
        {id:"sg5",name:"Mutton Biryani",emoji:"🐑",price:359,orig:449,desc:"Slow-cooked mutton dum biryani, tender chunks, whole spices.",veg:false,stars:"★★★★★",badge:"Chef's Special",cal:720},
        {id:"sg6",name:"Jeera Rice",emoji:"🍚",price:89,orig:null,desc:"Fragrant basmati with cumin tempering.",veg:true,stars:"★★★★☆",badge:null,cal:280},
      ],
      "🫓 Breads":[
        {id:"sg7",name:"Garlic Naan",emoji:"🫓",price:69,orig:null,desc:"Tandoor-baked, brushed with garlic butter & coriander.",veg:true,stars:"★★★★☆",badge:null,cal:180},
        {id:"sg8",name:"Lachha Paratha",emoji:"🥙",price:59,orig:null,desc:"Flaky layered whole wheat paratha from tandoor.",veg:true,stars:"★★★★☆",badge:null,cal:220},
        {id:"sg9",name:"Butter Naan",emoji:"🫓",price:55,orig:null,desc:"Soft pillowy naan with generous butter.",veg:true,stars:"★★★★☆",badge:null,cal:190},
      ],
      "🥗 Starters":[
        {id:"sg10",name:"Paneer Tikka",emoji:"🔥",price:249,orig:299,desc:"Marinated paneer grilled in tandoor with onions & peppers.",veg:true,stars:"★★★★★",badge:"Must Try",cal:380},
        {id:"sg11",name:"Seekh Kebab (4pcs)",emoji:"🍢",price:229,orig:null,desc:"Minced lamb kebabs on skewers, grilled over charcoal.",veg:false,stars:"★★★★☆",badge:null,cal:340},
        {id:"sg12",name:"Dahi Puri (6pcs)",emoji:"🫙",price:99,orig:null,desc:"Crispy puris stuffed with tangy yogurt, tamarind & spiced potato.",veg:true,stars:"★★★★☆",badge:"New",cal:210},
      ],
      "🍮 Desserts":[
        {id:"sg13",name:"Gulab Jamun (4pcs)",emoji:"🟤",price:89,orig:null,desc:"Soft milk-solid dumplings soaked in rose-cardamom syrup.",veg:true,stars:"★★★★★",badge:null,cal:320},
        {id:"sg14",name:"Shahi Tukda",emoji:"🍞",price:119,orig:null,desc:"Fried bread soaked in milk, garnished with rabri & nuts.",veg:true,stars:"★★★★☆",badge:null,cal:410},
      ],
      "🧃 Beverages":[
        {id:"sg15",name:"Sweet Lassi",emoji:"🥛",price:79,orig:null,desc:"Thick chilled yogurt drink, sweetened with sugar & cardamom.",veg:true,stars:"★★★★☆",badge:null,cal:180},
        {id:"sg16",name:"Masala Chai",emoji:"☕",price:49,orig:null,desc:"Spiced Indian tea brewed with ginger, cardamom & milk.",veg:true,stars:"★★★★☆",badge:null,cal:90},
      ]
    }
  },
  {
    id:2, name:"Pizza Palazzo", emoji:"🍕", rating:4.6, reviews:1890,
    time:"25-35", minOrder:199, delivery:30, price:3,
    discount:"Buy 1 Get 1 Free on Pizzas", promoted:false, isOpen:true,
    color:"linear-gradient(135deg,#1a0000,#4a0000)", cats:["pizza","italian"],
    tags:["Italian","Pizza","Pasta"], cuisine:"Italian",
    img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    menu:{
      "🍕 Signature Pizzas":[
        {id:"pp1",name:"Margherita Classic",emoji:"🍕",price:299,orig:null,desc:"San Marzano tomatoes, fresh mozzarella, basil on crispy thin crust.",veg:true,stars:"★★★★☆",badge:null,cal:680},
        {id:"pp2",name:"BBQ Chicken Ranch",emoji:"🍗",price:399,orig:479,desc:"Smoky BBQ sauce, grilled chicken, red onion, jalapeños, ranch drizzle.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:820},
        {id:"pp3",name:"Four Cheese Delight",emoji:"🧀",price:379,orig:null,desc:"Mozzarella, cheddar, gouda & blue cheese blend on garlic base.",veg:true,stars:"★★★★★",badge:"Most Loved",cal:760},
        {id:"pp4",name:"Spicy Arrabiata",emoji:"🌶️",price:329,orig:null,desc:"Spicy tomato sauce, black olives, capers, chilli flakes.",veg:true,stars:"★★★★☆",badge:null,cal:640},
        {id:"pp5",name:"Pepperoni Supreme",emoji:"🔴",price:419,orig:499,desc:"Loaded with double pepperoni, mushrooms, capsicum.",veg:false,stars:"★★★★★",badge:"New",cal:880},
      ],
      "🍝 Pasta":[
        {id:"pp6",name:"Penne Arrabbiata",emoji:"🍝",price:249,orig:null,desc:"Penne in fiery tomato-garlic sauce, fresh basil.",veg:true,stars:"★★★★☆",badge:null,cal:520},
        {id:"pp7",name:"Chicken Alfredo",emoji:"🍜",price:329,orig:null,desc:"Creamy white sauce, grilled chicken, parmesan.",veg:false,stars:"★★★★★",badge:"Chef's Pick",cal:650},
        {id:"pp8",name:"Mushroom Truffle Pasta",emoji:"🍄",price:349,orig:null,desc:"Sautéed mixed mushrooms, truffle oil, parmesan shavings.",veg:true,stars:"★★★★★",badge:null,cal:580},
      ],
      "🥗 Sides":[
        {id:"pp9",name:"Garlic Bread (4pcs)",emoji:"🫓",price:149,orig:null,desc:"Crispy ciabatta toasted with herb garlic butter.",veg:true,stars:"★★★★☆",badge:null,cal:320},
        {id:"pp10",name:"Caesar Salad",emoji:"🥗",price:199,orig:null,desc:"Romaine, croutons, parmesan, classic caesar dressing.",veg:true,stars:"★★★★☆",badge:null,cal:280},
      ],
      "🍰 Desserts":[
        {id:"pp11",name:"Tiramisu",emoji:"☕",price:229,orig:null,desc:"Classic Italian mascarpone dessert with espresso ladyfingers.",veg:true,stars:"★★★★★",badge:null,cal:420},
        {id:"pp12",name:"Panna Cotta",emoji:"🍮",price:179,orig:null,desc:"Silky Italian cream dessert with berry compote.",veg:true,stars:"★★★★☆",badge:null,cal:360},
      ],
      "🥤 Drinks":[
        {id:"pp13",name:"Fresh Lime Soda",emoji:"🍋",price:79,orig:null,desc:"Freshly squeezed lime with sparkling water, sweet or salty.",veg:true,stars:"★★★★☆",badge:null,cal:60},
        {id:"pp14",name:"Italian Soda (Peach)",emoji:"🍑",price:99,orig:null,desc:"Sparkling peach syrup with soda and ice.",veg:true,stars:"★★★★☆",badge:null,cal:110},
      ]
    }
  },
  {
    id:3, name:"Burger Republic", emoji:"🍔", rating:4.4, reviews:1450,
    time:"15-25", minOrder:99, delivery:20, price:2,
    discount:"Free Fries on orders above ₹299", promoted:true, isOpen:true,
    color:"linear-gradient(135deg,#1a1000,#5a3a00)", cats:["burger","american"],
    tags:["Burgers","Fast Food","American"], cuisine:"American",
    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    menu:{
      "🍔 Signature Burgers":[
        {id:"br1",name:"Classic Smash Burger",emoji:"🍔",price:249,orig:null,desc:"Double smash patty, American cheese, pickles, special burger sauce.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:680},
        {id:"br2",name:"Crispy Chicken Burger",emoji:"🍗",price:229,orig:279,desc:"Buttermilk fried chicken, coleslaw, chipotle mayo, brioche bun.",veg:false,stars:"★★★★★",badge:"Trending",cal:620},
        {id:"br3",name:"Mushroom Swiss",emoji:"🍄",price:199,orig:null,desc:"Sautéed mushrooms, Swiss cheese, lettuce, garlic aioli.",veg:true,stars:"★★★★☆",badge:null,cal:540},
        {id:"br4",name:"Spicy Sriracha Burger",emoji:"🌶️",price:269,orig:null,desc:"Spicy patty, sriracha glaze, pickled onions, jalapeños.",veg:false,stars:"★★★★☆",badge:"Hot 🔥",cal:700},
        {id:"br5",name:"Plant-Based Patty",emoji:"🌿",price:289,orig:null,desc:"100% plant patty, vegan cheese, special smoky sauce.",veg:true,stars:"★★★★☆",badge:"New",cal:490},
      ],
      "🍟 Sides":[
        {id:"br6",name:"Loaded Cheese Fries",emoji:"🍟",price:149,orig:null,desc:"Crispy fries topped with cheddar sauce, jalapeños, sour cream.",veg:true,stars:"★★★★★",badge:"Must Try",cal:480},
        {id:"br7",name:"Onion Rings (8pcs)",emoji:"🧅",price:129,orig:null,desc:"Crispy battered onion rings with dipping sauce.",veg:true,stars:"★★★★☆",badge:null,cal:380},
        {id:"br8",name:"Coleslaw Cup",emoji:"🥗",price:69,orig:null,desc:"Creamy house coleslaw with hint of mustard.",veg:true,stars:"★★★★☆",badge:null,cal:120},
        {id:"br9",name:"Waffle Fries",emoji:"🍟",price:119,orig:null,desc:"Thick waffle-cut fries, lightly seasoned.",veg:true,stars:"★★★★☆",badge:null,cal:340},
      ],
      "🥤 Shakes & Drinks":[
        {id:"br10",name:"Oreo Milkshake",emoji:"🍪",price:149,orig:null,desc:"Thick blended Oreo shake with whipped cream and cookie crumbles.",veg:true,stars:"★★★★★",badge:"Most Ordered",cal:520},
        {id:"br11",name:"Chocolate Lava Shake",emoji:"🍫",price:169,orig:null,desc:"Rich chocolate shake with hot fudge swirl.",veg:true,stars:"★★★★★",badge:null,cal:580},
        {id:"br12",name:"Strawberry Smoothie",emoji:"🍓",price:129,orig:null,desc:"Fresh strawberry blended with yogurt, no added sugar.",veg:true,stars:"★★★★☆",badge:null,cal:190},
        {id:"br13",name:"Cold Brew Coffee",emoji:"☕",price:119,orig:null,desc:"12-hour cold brewed, served with ice and milk.",veg:true,stars:"★★★★☆",badge:null,cal:80},
      ]
    }
  },
  {
    id:4, name:"Zen Bowl", emoji:"🍱", rating:4.7, reviews:980,
    time:"30-45", minOrder:299, delivery:40, price:4,
    discount:"15% OFF on orders above ₹499", promoted:false, isOpen:true,
    color:"linear-gradient(135deg,#001a0a,#003a1a)", cats:["sushi","japanese"],
    tags:["Japanese","Sushi","Pan-Asian"], cuisine:"Japanese",
    img:"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    menu:{
      "🍣 Signature Rolls":[
        {id:"zb1",name:"Dragon Roll (8pcs)",emoji:"🐉",price:520,orig:599,desc:"Prawn tempura inside, avocado outside, eel sauce & sesame.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:380},
        {id:"zb2",name:"Spicy Tuna Roll (8pcs)",emoji:"🌶️",price:480,orig:null,desc:"Fresh bluefin tuna, cucumber, spicy sriracha mayo.",veg:false,stars:"★★★★★",badge:"Chef's Pick",cal:340},
        {id:"zb3",name:"Rainbow Roll (8pcs)",emoji:"🌈",price:540,orig:null,desc:"California roll topped with assorted sashimi slices.",veg:false,stars:"★★★★★",badge:"Premium",cal:420},
        {id:"zb4",name:"Avocado Maki (6pcs)",emoji:"🥑",price:320,orig:null,desc:"Ripe avocado in seasoned rice and nori.",veg:true,stars:"★★★★☆",badge:null,cal:280},
        {id:"zb5",name:"Crunchy Veggie Roll (8pcs)",emoji:"🥕",price:280,orig:null,desc:"Crispy tempura vegetables, cream cheese, teriyaki glaze.",veg:true,stars:"★★★★☆",badge:null,cal:310},
      ],
      "🍜 Ramen & Noodles":[
        {id:"zb6",name:"Tonkotsu Ramen",emoji:"🍜",price:420,orig:null,desc:"Rich pork bone broth, chashu pork, soft-boiled egg, nori.",veg:false,stars:"★★★★★",badge:"Must Try",cal:680},
        {id:"zb7",name:"Miso Ramen",emoji:"🍲",price:380,orig:null,desc:"White miso broth, corn, bamboo shoots, mushrooms.",veg:true,stars:"★★★★☆",badge:null,cal:560},
        {id:"zb8",name:"Pad Thai (Chicken)",emoji:"🍝",price:360,orig:null,desc:"Stir-fried rice noodles, bean sprouts, peanuts, lime.",veg:false,stars:"★★★★☆",badge:null,cal:620},
      ],
      "🥗 Salads & Starters":[
        {id:"zb9",name:"Edamame",emoji:"🫘",price:149,orig:null,desc:"Steamed salted soybeans, light soy & sesame dip.",veg:true,stars:"★★★★☆",badge:null,cal:120},
        {id:"zb10",name:"Gyoza (6pcs)",emoji:"🥟",price:299,orig:null,desc:"Pan-fried pork & cabbage dumplings, ponzu dipping sauce.",veg:false,stars:"★★★★★",badge:"Trending",cal:290},
        {id:"zb11",name:"Seaweed Salad",emoji:"🌿",price:199,orig:null,desc:"Wakame seaweed, sesame oil, rice vinegar dressing.",veg:true,stars:"★★★★☆",badge:null,cal:80},
      ],
      "🍵 Bowls":[
        {id:"zb12",name:"Teriyaki Salmon Bowl",emoji:"🐟",price:560,orig:null,desc:"Grilled salmon, steamed rice, teriyaki glaze, pickled ginger.",veg:false,stars:"★★★★★",badge:"Premium",cal:680},
        {id:"zb13",name:"Buddha Bowl",emoji:"🥗",price:380,orig:null,desc:"Quinoa, roasted veggies, avocado, miso tahini dressing.",veg:true,stars:"★★★★★",badge:"Healthy",cal:420},
      ],
      "🍵 Drinks":[
        {id:"zb14",name:"Matcha Latte",emoji:"🍵",price:179,orig:null,desc:"Ceremonial grade matcha with steamed oat milk.",veg:true,stars:"★★★★★",badge:null,cal:120},
        {id:"zb15",name:"Yuzu Lemonade",emoji:"🍋",price:149,orig:null,desc:"Japanese yuzu citrus with sparkling water and honey.",veg:true,stars:"★★★★☆",badge:null,cal:80},
      ]
    }
  },
  {
    id:5, name:"Sweet Dreams", emoji:"🍰", rating:4.9, reviews:3200,
    time:"20-30", minOrder:149, delivery:0, price:2,
    discount:"FLAT ₹50 OFF on cakes", promoted:true, isOpen:true,
    color:"linear-gradient(135deg,#1a001a,#4a004a)", cats:["dessert","bakery"],
    tags:["Desserts","Cakes","Ice Cream","Bakery"], cuisine:"Desserts",
    img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    menu:{
      "🎂 Cakes & Pastries":[
        {id:"sd1",name:"Belgian Chocolate Truffle",emoji:"🍫",price:199,orig:249,desc:"Dark chocolate ganache, cocoa sponge, chocolate shards.",veg:true,stars:"★★★★★",badge:"Bestseller",cal:520},
        {id:"sd2",name:"Strawberry Cheesecake",emoji:"🍓",price:229,orig:null,desc:"NY-style baked cheesecake, fresh strawberry coulis.",veg:true,stars:"★★★★★",badge:"Most Loved",cal:480},
        {id:"sd3",name:"Tiramisu Slice",emoji:"☕",price:199,orig:null,desc:"Classic mascarpone, espresso ladyfingers, cocoa dusting.",veg:true,stars:"★★★★★",badge:null,cal:420},
        {id:"sd4",name:"Red Velvet Slice",emoji:"❤️",price:219,orig:null,desc:"Red velvet sponge, cream cheese frosting.",veg:true,stars:"★★★★☆",badge:null,cal:490},
        {id:"sd5",name:"Lemon Tart",emoji:"🍋",price:179,orig:null,desc:"Buttery pastry shell, zesty lemon curd, meringue.",veg:true,stars:"★★★★☆",badge:null,cal:380},
      ],
      "🍨 Ice Creams":[
        {id:"sd6",name:"Brownie Sundae",emoji:"🍨",price:179,orig:null,desc:"Warm chocolate brownie, vanilla ice cream, hot fudge, nuts.",veg:true,stars:"★★★★★",badge:"Must Try",cal:640},
        {id:"sd7",name:"Mango Sorbet (2 scoops)",emoji:"🥭",price:129,orig:null,desc:"Alphonso mango sorbet, no added sugar.",veg:true,stars:"★★★★☆",badge:"Summer Special",cal:160},
        {id:"sd8",name:"Affogato",emoji:"☕",price:149,orig:null,desc:"Vanilla gelato with hot espresso poured over.",veg:true,stars:"★★★★★",badge:null,cal:220},
      ],
      "🥐 Bakery":[
        {id:"sd9",name:"Croissant (Butter)",emoji:"🥐",price:99,orig:null,desc:"Flaky French-style butter croissant, baked fresh daily.",veg:true,stars:"★★★★☆",badge:null,cal:260},
        {id:"sd10",name:"Chocolate Éclair",emoji:"🍩",price:89,orig:null,desc:"Choux pastry filled with cream, topped with chocolate glaze.",veg:true,stars:"★★★★☆",badge:null,cal:310},
        {id:"sd11",name:"Cinnamon Roll",emoji:"🌀",price:119,orig:null,desc:"Soft dough, cinnamon sugar filling, cream cheese glaze.",veg:true,stars:"★★★★★",badge:"New",cal:380},
      ],
      "🧋 Drinks":[
        {id:"sd12",name:"Belgian Hot Chocolate",emoji:"☕",price:149,orig:null,desc:"Rich Callebaut chocolate, steamed milk, whipped cream.",veg:true,stars:"★★★★★",badge:null,cal:280},
        {id:"sd13",name:"Mango Lassi",emoji:"🥭",price:119,orig:null,desc:"Thick chilled yogurt blended with Alphonso mango pulp.",veg:true,stars:"★★★★★",badge:null,cal:220},
        {id:"sd14",name:"Filter Coffee",emoji:"☕",price:79,orig:null,desc:"South Indian filter decoction with thick milk.",veg:true,stars:"★★★★★",badge:null,cal:90},
      ]
    }
  },
  {
    id:6, name:"Dragon Palace", emoji:"🥟", rating:4.3, reviews:870,
    time:"25-35", minOrder:149, delivery:25, price:2,
    discount:"2 Momos free on ₹350+", promoted:false, isOpen:true,
    color:"linear-gradient(135deg,#120018,#3a0050)", cats:["chinese","dimsum"],
    tags:["Chinese","Dimsum","Noodles","Indo-Chinese"], cuisine:"Chinese",
    img:"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
    menu:{
      "🥟 Dimsum & Momos":[
        {id:"dp1",name:"Steamed Chicken Dimsum (8pcs)",emoji:"🥟",price:199,orig:null,desc:"Juicy chicken & prawn dumplings, ginger-chilli oil.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:320},
        {id:"dp2",name:"Veg Steamed Momos (8pcs)",emoji:"🫕",price:159,orig:null,desc:"Spiced vegetable dumplings, spicy tomato chutney.",veg:true,stars:"★★★★★",badge:"Most Ordered",cal:280},
        {id:"dp3",name:"Fried Pork Dimsum (6pcs)",emoji:"🍖",price:229,orig:null,desc:"Crispy fried pork dumplings, sweet-chilli dip.",veg:false,stars:"★★★★☆",badge:null,cal:390},
        {id:"dp4",name:"Soup Dumplings XLB (6pcs)",emoji:"🫙",price:279,orig:null,desc:"Soup-filled Shanghai xiaolongbao, ginger-vinegar dip.",veg:false,stars:"★★★★★",badge:"Chef's Special",cal:360},
      ],
      "🍜 Noodles & Rice":[
        {id:"dp5",name:"Hakka Noodles (Veg)",emoji:"🍜",price:189,orig:null,desc:"Stir-fried thin noodles, soy sauce, veggies.",veg:true,stars:"★★★★☆",badge:null,cal:480},
        {id:"dp6",name:"Dragon Chicken Noodles",emoji:"🐉",price:249,orig:null,desc:"Spicy Sichuan-style noodles with chilli chicken.",veg:false,stars:"★★★★★",badge:"Trending",cal:580},
        {id:"dp7",name:"Fried Rice (Chicken)",emoji:"🍚",price:219,orig:null,desc:"Wok-tossed rice, chicken, egg, spring onion.",veg:false,stars:"★★★★☆",badge:null,cal:520},
        {id:"dp8",name:"Singapore Noodles",emoji:"🌶️",price:239,orig:null,desc:"Rice vermicelli, prawns, egg, curry paste.",veg:false,stars:"★★★★☆",badge:null,cal:540},
      ],
      "🍲 Mains":[
        {id:"dp9",name:"Kung Pao Chicken",emoji:"🍲",price:289,orig:349,desc:"Wok-tossed chicken, peanuts, dried chillis, Sichuan pepper.",veg:false,stars:"★★★★★",badge:"Must Try",cal:620},
        {id:"dp10",name:"Mapo Tofu",emoji:"🧊",price:239,orig:null,desc:"Silken tofu in spicy fermented bean paste, minced pork.",veg:false,stars:"★★★★☆",badge:null,cal:380},
        {id:"dp11",name:"Honey Chilli Potato",emoji:"🍯",price:199,orig:null,desc:"Crispy fried potato strips, honey chilli glaze.",veg:true,stars:"★★★★★",badge:"Favourite",cal:440},
      ],
      "🥗 Starters":[
        {id:"dp12",name:"Spring Rolls (4pcs)",emoji:"🌯",price:149,orig:null,desc:"Crispy rolls stuffed with seasoned cabbage & noodles.",veg:true,stars:"★★★★☆",badge:null,cal:280},
        {id:"dp13",name:"Chilli Chicken (Dry)",emoji:"🌶️",price:279,orig:null,desc:"Crispy chicken tossed in Indo-Chinese chilli sauce.",veg:false,stars:"★★★★★",badge:"Bestseller",cal:490},
        {id:"dp14",name:"Manchurian Gravy (Veg)",emoji:"🟤",price:219,orig:null,desc:"Vegetable balls in tangy Manchurian sauce.",veg:true,stars:"★★★★☆",badge:null,cal:420},
      ],
      "🧋 Drinks":[
        {id:"dp15",name:"Bubble Tea (Taro)",emoji:"🧋",price:149,orig:null,desc:"Taro milk tea with tapioca pearls.",veg:true,stars:"★★★★☆",badge:null,cal:320},
        {id:"dp16",name:"Lychee Soda",emoji:"🍹",price:89,orig:null,desc:"Sparkling lychee drink with basil seeds.",veg:true,stars:"★★★★☆",badge:null,cal:110},
      ]
    }
  },
  {
    id:7, name:"South Spice", emoji:"🥘", rating:4.5, reviews:1340,
    time:"20-30", minOrder:129, delivery:0, price:1,
    discount:"FLAT 30% OFF", promoted:false, isOpen:true,
    color:"linear-gradient(135deg,#001a1a,#003a3a)", cats:["south-indian"],
    tags:["South Indian","Dosa","Kerala","Tamil"], cuisine:"South Indian",
    img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80",
    menu:{
      "🥞 Dosas":[
        {id:"ss1",name:"Masala Dosa",emoji:"🥞",price:119,orig:149,desc:"Crispy fermented rice crepe with spiced potato filling, sambar & chutney.",veg:true,stars:"★★★★★",badge:"Bestseller",cal:380},
        {id:"ss2",name:"Rava Dosa",emoji:"🥞",price:129,orig:null,desc:"Crispy semolina dosa with onion & coriander.",veg:true,stars:"★★★★☆",badge:null,cal:350},
        {id:"ss3",name:"Cheese Dosa",emoji:"🧀",price:149,orig:null,desc:"Regular dosa with grated cheese & butter filling.",veg:true,stars:"★★★★☆",badge:"Kids Love",cal:420},
        {id:"ss4",name:"Set Dosa (3pcs)",emoji:"🍀",price:99,orig:null,desc:"Soft fluffy small dosas, served with vegetable kurma.",veg:true,stars:"★★★★☆",badge:null,cal:320},
      ],
      "🫙 Idli & Vada":[
        {id:"ss5",name:"Idli Sambar (4pcs)",emoji:"🫙",price:89,orig:null,desc:"Soft steamed rice cakes with vegetable sambar & coconut chutney.",veg:true,stars:"★★★★★",badge:"Most Ordered",cal:240},
        {id:"ss6",name:"Medu Vada (3pcs)",emoji:"🍩",price:79,orig:null,desc:"Crispy lentil fritters with sambar & 2 chutneys.",veg:true,stars:"★★★★☆",badge:null,cal:310},
        {id:"ss7",name:"Pongal",emoji:"🍚",price:99,orig:null,desc:"Creamy rice-lentil porridge with ghee, cashews & black pepper.",veg:true,stars:"★★★★☆",badge:null,cal:380},
      ],
      "🍛 Curries & Rice":[
        {id:"ss8",name:"Chettinad Chicken Curry",emoji:"🍗",price:249,orig:null,desc:"Fiery Tamil curry with kalpasi & marathi mokku spices.",veg:false,stars:"★★★★★",badge:"Spicy 🔥",cal:520},
        {id:"ss9",name:"Kerala Fish Curry",emoji:"🐟",price:299,orig:null,desc:"Raw mango & coconut milk fish curry in a clay pot.",veg:false,stars:"★★★★★",badge:"Chef's Special",cal:480},
        {id:"ss10",name:"Sambar Rice",emoji:"🍲",price:119,orig:null,desc:"Steamed rice with freshly made vegetable sambar & papad.",veg:true,stars:"★★★★☆",badge:null,cal:400},
      ],
      "🥥 Kerala Specials":[
        {id:"ss11",name:"Appam with Stew",emoji:"🍳",price:169,orig:null,desc:"Lacy fermented appam with creamy vegetable & coconut stew.",veg:true,stars:"★★★★★",badge:null,cal:420},
        {id:"ss12",name:"Puttu & Kadala Curry",emoji:"🫙",price:139,orig:null,desc:"Steamed coconut rice cake with spiced black chickpea curry.",veg:true,stars:"★★★★★",badge:"Authentic",cal:460},
      ],
      "🍹 Drinks":[
        {id:"ss13",name:"Filter Coffee",emoji:"☕",price:49,orig:null,desc:"Traditional South Indian filter decoction with thick milk.",veg:true,stars:"★★★★★",badge:null,cal:90},
        {id:"ss14",name:"Tender Coconut Water",emoji:"🥥",price:79,orig:null,desc:"Fresh tender coconut with coconut meat.",veg:true,stars:"★★★★★",badge:null,cal:60},
        {id:"ss15",name:"Buttermilk (Mor)",emoji:"🥛",price:49,orig:null,desc:"Spiced thin buttermilk with ginger, coriander, curry leaves.",veg:true,stars:"★★★★☆",badge:null,cal:45},
      ]
    }
  },
  {
    id:8, name:"The Grill House", emoji:"🥩", rating:4.6, reviews:1120,
    time:"35-50", minOrder:399, delivery:50, price:5,
    discount:"10% OFF on first order", promoted:false, isOpen:false,
    color:"linear-gradient(135deg,#0a0a0a,#2a1a00)", cats:["bbq","continental"],
    tags:["BBQ","Grills","Continental","Steaks"], cuisine:"Continental",
    img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    menu:{
      "🥩 Grills & BBQ":[
        {id:"gh1",name:"Chargrilled Ribeye Steak",emoji:"🥩",price:1199,orig:1499,desc:"300g USDA ribeye, chimichurri, roasted garlic mash.",veg:false,stars:"★★★★★",badge:"Premium",cal:980},
        {id:"gh2",name:"BBQ Pork Ribs (Half Rack)",emoji:"🍖",price:899,orig:null,desc:"Slow-cooked baby back ribs, house BBQ glaze, coleslaw.",veg:false,stars:"★★★★★",badge:"Chef's Pick",cal:1100},
        {id:"gh3",name:"Grilled Salmon",emoji:"🐟",price:699,orig:null,desc:"Norwegian salmon fillet, dill butter, capers, lemon.",veg:false,stars:"★★★★☆",badge:null,cal:620},
      ],
      "🍔 Gourmet Burgers":[
        {id:"gh4",name:"Wagyu Smash Burger",emoji:"🍔",price:549,orig:null,desc:"Wagyu beef smash patty, aged cheddar, truffle mayo.",veg:false,stars:"★★★★★",badge:"Premium",cal:820},
        {id:"gh5",name:"Portobello Mushroom Burger",emoji:"🍄",price:399,orig:null,desc:"Grilled portobello, goat cheese, rocket, balsamic.",veg:true,stars:"★★★★☆",badge:null,cal:540},
      ],
      "🥗 Sides & Starters":[
        {id:"gh6",name:"Truffle Parmesan Fries",emoji:"🍟",price:249,orig:null,desc:"Thin fries, truffle oil, parmesan, rosemary.",veg:true,stars:"★★★★★",badge:"Popular",cal:390},
        {id:"gh7",name:"Bruschetta (4pcs)",emoji:"🍞",price:199,orig:null,desc:"Toasted ciabatta, fresh tomato, basil, garlic, olive oil.",veg:true,stars:"★★★★☆",badge:null,cal:280},
      ],
      "🍷 Desserts":[
        {id:"gh8",name:"Crème Brûlée",emoji:"🍮",price:299,orig:null,desc:"Classic French vanilla custard with caramelized sugar top.",veg:true,stars:"★★★★★",badge:null,cal:420},
        {id:"gh9",name:"Chocolate Fondant",emoji:"🍫",price:329,orig:null,desc:"Warm dark chocolate fondant, vanilla ice cream.",veg:true,stars:"★★★★★",badge:null,cal:560},
      ]
    }
  }
];

const OFFERS = [
  {icon:"🎉",title:"50% OFF up to ₹100",sub:"On orders above ₹299"},
  {icon:"🆓",title:"Free Delivery",sub:"All orders above ₹199"},
  {icon:"🎁",title:"Buy 1 Get 1",sub:"On Pizzas & Burgers"},
  {icon:"⚡",title:"30 Min Delivery",sub:"Or next order free"},
  {icon:"💳",title:"10% Cashback",sub:"On UPI payments"},
  {icon:"🌙",title:"Late Night Deals",sub:"10PM - 2AM"},
];

const POPULAR_AREAS = ["Connaught Place","Saket","Hauz Khas","Lajpat Nagar","Punjabi Bagh","Dwarka","Noida Sector 18","Gurgaon Cyber City","Greater Kailash","Vasant Vihar"];

// STATE
let user = JSON.parse(localStorage.getItem('zest_user')||'null');
let cart = {};
let cartRestId = null;
let currentRestId = null;
let vegOnly = false;
let promoDiscount = 0;
let checkoutStep = 1;
let selectedPayment = 'upi';
let selectedAddress = 0;
let orderHistory = JSON.parse(localStorage.getItem('zest_orders')||'[]');
let ratingOrderId = null;
let ratingValue = 0;
const ADDRESSES = [
  {type:"Home",icon:"🏠",text:"A-204, Sagar Apartments, Saket, New Delhi - 110017",default:true},
  {type:"Work",icon:"🏢",text:"Zomato HQ, Block C, Sector 48, Gurugram - 122018",default:false},
];

// FOOD IMAGES
const FOOD_IMAGES = {
  "sg1":"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&q=80",
  "sg2":"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80",
  "sg3":"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&q=80",
  "sg4":"https://images.unsplash.com/photo-1645177628172-a94c1f96debb?w=300&q=80",
  "sg5":"https://images.unsplash.com/photo-1512058454905-6b841e7ad132?w=300&q=80",
  "sg6":"https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300&q=80",
  "sg7":"https://images.unsplash.com/photo-1568727349530-bedd9e97e9bf?w=300&q=80",
  "sg8":"https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&q=80",
  "sg10":"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80",
  "sg11":"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&q=80",
  "pp1":"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80",
  "pp2":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80",
  "pp3":"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80",
  "pp6":"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&q=80",
  "pp7":"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&q=80",
  "pp9":"https://images.unsplash.com/photo-1619531040576-f9416740661e?w=300&q=80",
  "pp10":"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
  "pp11":"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&q=80",
  "br1":"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80",
  "br2":"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&q=80",
  "br3":"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&q=80",
  "br4":"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&q=80",
  "br6":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&q=80",
  "br10":"https://images.unsplash.com/photo-1572490122747-3e9b8f3e7e89?w=300&q=80",
  "br11":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80",
  "zb1":"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=300&q=80",
  "zb2":"https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&q=80",
  "zb3":"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&q=80",
  "zb4":"https://images.unsplash.com/photo-1562802378-063ec186a863?w=300&q=80",
  "zb6":"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80",
  "zb9":"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&q=80",
  "zb10":"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&q=80",
  "zb12":"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&q=80",
  "zb13":"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80",
  "sd1":"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80",
  "sd2":"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&q=80",
  "sd3":"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&q=80",
  "sd4":"https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&q=80",
  "sd5":"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=300&q=80",
  "sd6":"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80",
  "sd7":"https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&q=80",
  "sd9":"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80",
  "sd11":"https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300&q=80",
  "dp1":"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&q=80",
  "dp2":"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=300&q=80",
  "dp5":"https://images.unsplash.com/photo-1516901121982-4ba1e90c1e0e?w=300&q=80",
  "dp6":"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80",
  "dp9":"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=300&q=80",
  "dp11":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&q=80",
  "dp13":"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&q=80",
  "ss1":"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&q=80",
  "ss2":"https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=300&q=80",
  "ss4":"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&q=80",
  "gh1":"https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80",
  "gh2":"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&q=80",
  "gh3":"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&q=80",
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INIT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function init() {
  renderOffers(); renderCats(); renderRestaurants(RESTAURANTS);
  updateUserUI(); renderPopularAreas();
}

function renderOffers() {
  document.getElementById('offerScroll').innerHTML = OFFERS.map(o=>`
    <div class="offer-pill" onclick="toast('${o.icon} ${o.title} applied!')">
      <div class="o-icon">${o.icon}</div>
      <div><div class="o-title">${o.title}</div><div class="o-sub">${o.sub}</div></div>
    </div>`).join('');
}

function renderCats() {
  const cats = [
    {id:'all',icon:'🍽️',label:'All',img:null},
    {id:'biryani',icon:'🍛',label:'Biryani',img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=220&q=80'},
    {id:'pizza',icon:'🍕',label:'Pizza',img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=220&q=80'},
    {id:'burger',icon:'🍔',label:'Burgers',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=220&q=80'},
    {id:'south-indian',icon:'🥘',label:'South Indian',img:'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=220&q=80'},
    {id:'sushi',icon:'🍱',label:'Sushi',img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=220&q=80'},
    {id:'dessert',icon:'🍰',label:'Desserts',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=220&q=80'},
    {id:'chinese',icon:'🥟',label:'Chinese',img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=220&q=80'},
    {id:'bbq',icon:'🥩',label:'Grills',img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=220&q=80'},
    {id:'italian',icon:'🍝',label:'Italian',img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=220&q=80'},
  ];
  document.getElementById('catsRow').innerHTML = cats.map(c=>`
    <div class="cat-chip ${c.id==='all'?'on':''}" onclick="filterCat('${c.id}',this)">
      <div class="cat-img-wrap" ${!c.img?'style="background:linear-gradient(135deg,#fff2ee,#ffe0d5)"':''}>
        ${c.img?`<img src="${c.img}" alt="${c.label}" loading="lazy">`:`<span class="ci">${c.icon}</span>`}
      </div>
      <div class="cat-chip-label"><span class="cl">${c.label}</span></div>
    </div>`).join('');
}

function renderRestaurants(data) {
  const grid = document.getElementById('restGrid');
  grid.innerHTML = data.length ? data.map(r=>`
    <div class="rc" onclick="openRestaurant(${r.id})">
      <div class="rc-img" style="background:${r.color}">
        <div class="rc-img-bg" style="${r.img?`background:url('${r.img}') center/cover no-repeat`:`background:${r.color}`}"></div>
        <div class="rc-img-overlay"></div>
        ${r.discount?`<div class="rc-discount">${r.discount}</div>`:''}
        ${r.promoted?`<div class="promoted-tag">PROMOTED</div>`:''}
        ${!r.isOpen?`<div class="rc-closed">CLOSED · Opens at 11 AM</div>`:''}
        <div class="rc-fav" onclick="event.stopPropagation();toggleFav(this)">🤍</div>
      </div>
      <div class="rc-body">
        <div class="rc-name">${r.name}</div>
        <div class="rc-meta">
          <span class="rc-rating">★ ${r.rating}</span>
          <span style="font-size:10px;color:var(--muted)">(${r.reviews}+)</span>
          <span class="rc-sep"></span>
          <span>🕐 ${r.time} min</span>
          <span class="rc-sep"></span>
          <span>${'₹'.repeat(r.price)}</span>
        </div>
        <div class="rc-tags">${r.tags.map(t=>`<span class="rc-tag">${t}</span>`).join('')}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:10px;font-size:12px;color:var(--green);font-weight:600">
          🛵 ${r.delivery===0?'<b>Free delivery</b>':'₹'+r.delivery+' delivery'}
          <span style="color:var(--muted)">· Min ₹${r.minOrder}</span>
        </div>
      </div>
    </div>`).join('') :
    `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--muted)">😕 No restaurants found</div>`;
}

function filterCat(id, el) {
  document.querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  const filtered = id==='all' ? RESTAURANTS : RESTAURANTS.filter(r=>r.cats.includes(id));
  renderRestaurants(filtered);
}

function handleSearch(val) {
  const q = val.toLowerCase();
  const filtered = RESTAURANTS.filter(r=>
    r.name.toLowerCase().includes(q)||r.tags.some(t=>t.toLowerCase().includes(q))||r.cuisine.toLowerCase().includes(q)
  );
  renderRestaurants(filtered);
  document.getElementById('restHeading').textContent = q ? `🔍 Results for "${val}"` : '🏪 Restaurants Near You';
}

function sortRestaurants(val) {
  let sorted = [...RESTAURANTS];
  if(val==='rating') sorted.sort((a,b)=>b.rating-a.rating);
  else if(val==='time') sorted.sort((a,b)=>parseInt(a.time)-parseInt(b.time));
  else if(val==='price_low') sorted.sort((a,b)=>a.price-b.price);
  else if(val==='discount') sorted.sort((a,b)=>(b.discount?1:0)-(a.discount?1:0));
  renderRestaurants(sorted);
}

function toggleFav(el) {
  el.classList.toggle('faved');
  el.textContent = el.classList.contains('faved')?'❤️':'🤍';
  toast(el.classList.contains('faved')?'❤️ Added to favourites!':'Removed from favourites');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// RESTAURANT PAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openRestaurant(id) {
  const r = RESTAURANTS.find(x=>x.id===id);
  if(!r) return;
  currentRestId = id;
  if(cartRestId && cartRestId !== id && Object.keys(cart).length > 0) {
    if(!confirm(`Clear cart from ${RESTAURANTS.find(x=>x.id===cartRestId)?.name} and switch to ${r.name}?`)) return;
    cart = {}; cartRestId = null; promoDiscount = 0;
  }
  document.getElementById('restHeroName').textContent = r.name;
  document.getElementById('restHeroEmoji').textContent = r.emoji;
  const heroEl = document.getElementById('restHero');
  heroEl.style.background = r.color;
  if(r.img) { heroEl.style.backgroundImage=`url('${r.img}')`; heroEl.style.backgroundSize='cover'; heroEl.style.backgroundPosition='center'; }
  document.getElementById('restHeroMeta').innerHTML = `<span>🍽️ ${r.cuisine}</span><span>₹${r.minOrder} min order</span><span>${r.tags.join(', ')}</span>`;
  document.getElementById('restInfoBar').innerHTML = `
    <div class="info-stat"><strong style="color:var(--green)">★ ${r.rating}</strong><span>${r.reviews}+ ratings</span></div>
    <div class="info-sep"></div>
    <div class="info-stat"><strong>🕐 ${r.time}</strong><span>minutes</span></div>
    <div class="info-sep"></div>
    <div class="info-stat"><strong>${r.delivery===0?'🆓 Free':'₹'+r.delivery}</strong><span>delivery</span></div>
    <div class="info-sep"></div>
    <div class="info-stat"><strong>₹${r.minOrder}</strong><span>min order</span></div>
    ${r.discount?`<div class="offer-tags"><span class="offer-tag">🏷️ ${r.discount}</span></div>`:''}`;
  const sections = Object.keys(r.menu);
  document.getElementById('menuNav').innerHTML = sections.map((s,i)=>`
    <div class="menu-nav-item ${i===0?'active':''}" onclick="scrollToSection('${s}',this)">${s}</div>`).join('');
  document.getElementById('cartRestName').textContent = r.name;
  document.getElementById('cartRestSub').textContent = r.tags[0]+' · '+r.time+' min';
  renderMenuSections(r.menu);
  renderCart();
  showPage('restPage');
  window.scrollTo(0,0);
}

function renderMenuSections(menu, filterText='') {
  const sections = [];
  Object.entries(menu).forEach(([section, items])=>{
    let filtered = items;
    if(vegOnly) filtered = filtered.filter(i=>i.veg);
    if(filterText) filtered = filtered.filter(i=>i.name.toLowerCase().includes(filterText)||i.desc.toLowerCase().includes(filterText));
    if(!filtered.length) return;
    sections.push({section, items: filtered});
  });
  document.getElementById('menuSections').innerHTML = sections.map(({section,items})=>`
    <div class="menu-section-block" id="sec-${encodeURIComponent(section)}">
      <div class="menu-section-head">${section} <span class="count">${items.length} items</span></div>
      ${items.map(item=>renderMenuItem(item)).join('')}
    </div>`).join('');
}

function renderMenuItem(item) {
  const qty = cart[item.id]||0;
  const imgUrl = FOOD_IMAGES[item.id];
  return `<div class="mi" id="mi-${item.id}">
    <div class="mi-img" style="background:${item.veg?'#f1f8f4':'#fff5f5'}">
      ${item.badge?`<div class="mi-badge">${item.badge}</div>`:''}
      ${imgUrl?`<img src="${imgUrl}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`:''}
      <span style="position:relative;z-index:2;font-size:34px;${imgUrl?'display:none':''}">${item.emoji}</span>
    </div>
    <div class="mi-details">
      <div class="mi-veg ${item.veg?'':'mi-nveg'}">${item.veg?'🟢 VEG':'🔴 NON-VEG'}</div>
      <div class="mi-name">${item.name}</div>
      <div class="mi-stars">${item.stars}</div>
      <div class="mi-desc">${item.desc}</div>
      ${item.cal?`<div style="font-size:11px;color:var(--muted);margin-bottom:4px">🔥 ${item.cal} cal</div>`:''}
      <div class="mi-price">₹${item.price}${item.orig?`<span class="mi-original">₹${item.orig}</span>`:''}</div>
    </div>
    <div class="add-ctrl">
      ${qty===0
        ? `<button class="add-btn-green" onclick="addToCart('${item.id}',${item.price},'${item.name}','${item.emoji}')">ADD</button>
           <div class="customizable">+ customise</div>`
        : `<div class="qty-ctrl">
            <button class="qb" onclick="updateCart('${item.id}',-1)">−</button>
            <span class="qn">${qty}</span>
            <button class="qb" onclick="updateCart('${item.id}',1)">+</button>
           </div>`
      }
    </div>
  </div>`;
}

function scrollToSection(sec, el) {
  document.querySelectorAll('.menu-nav-item').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  const target = document.getElementById('sec-'+encodeURIComponent(sec));
  if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
}

function filterMenu(val) {
  const r = RESTAURANTS.find(x=>x.id===currentRestId);
  renderMenuSections(r.menu, val.toLowerCase());
}

function toggleVeg() {
  vegOnly = !vegOnly;
  const tog = document.getElementById('vegToggle');
  tog.classList.toggle('on', vegOnly);
  const r = RESTAURANTS.find(x=>x.id===currentRestId);
  renderMenuSections(r.menu);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CART
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function addToCart(id, price, name, emoji) {
  if(!user) { openAuth('login'); toast('Please sign in to add items'); return; }
  cart[id] = 1; cartRestId = currentRestId;
  refreshMenuItem(id); renderCart();
  toast(`🛒 ${name} added!`,'success');
}

function updateCart(id, delta) {
  cart[id] = (cart[id]||0)+delta;
  if(cart[id]<=0) delete cart[id];
  if(Object.keys(cart).length===0) cartRestId=null;
  refreshMenuItem(id); renderCart();
}

function refreshMenuItem(id) {
  const r = RESTAURANTS.find(x=>x.id===currentRestId);
  if(!r) return;
  const allItems = Object.values(r.menu).flat();
  const item = allItems.find(x=>x.id===id);
  if(item) { const el = document.getElementById('mi-'+id); if(el) el.outerHTML = renderMenuItem(item); }
}

function renderCart() {
  const items = Object.entries(cart).map(([id,qty])=>{
    const r = RESTAURANTS.find(x=>x.id===currentRestId);
    if(!r) return null;
    const item = Object.values(r.menu).flat().find(x=>x.id===id);
    return item ? {...item, qty} : null;
  }).filter(Boolean);

  const cartDiv = document.getElementById('cartItems');
  const billSec = document.getElementById('cartBillSection');
  const placeBtn = document.getElementById('placeOrderBtn');
  const totalQty = items.reduce((a,i)=>a+i.qty,0);
  const subtotal = items.reduce((a,i)=>a+(i.price*i.qty),0);
  const r = RESTAURANTS.find(x=>x.id===currentRestId);
  const delivery = r?.delivery||0;
  const total = subtotal + delivery - promoDiscount;

  document.getElementById('cartCount').textContent = totalQty;
  document.getElementById('cartNavBtn').style.display = totalQty>0?'flex':'none';

  const fc = document.getElementById('floatCart');
  if(totalQty>0 && currentRestId) {
    fc.style.display='flex';
    document.getElementById('floatQty').textContent=totalQty;
    document.getElementById('floatTotal').textContent=total;
  } else { fc.style.display='none'; }

  if(!items.length) {
    cartDiv.innerHTML=`<div class="cart-empty"><div class="ce-icon">🛒</div><p>Your cart is empty.<br>Add items to start!</p></div>`;
    billSec.style.display='none'; return;
  }

  cartDiv.innerHTML = items.map(item=>`
    <div class="cart-item">
      <span>${item.emoji}</span>
      <div class="ci-name">${item.name}</div>
      <div class="ci-ctrl">
        <button class="ci-btn" onclick="updateCart('${item.id}',-1)">−</button>
        <span class="ci-qty">${item.qty}</span>
        <button class="ci-btn" onclick="updateCart('${item.id}',1)">+</button>
      </div>
      <div class="ci-price">₹${item.price*item.qty}</div>
    </div>`).join('');

  billSec.style.display='block';
  document.getElementById('cartBill').innerHTML=`
    <div class="bill-row"><span>Item total</span><span>₹${subtotal}</span></div>
    <div class="bill-row"><span>Delivery fee</span><span>${delivery===0?'<b style="color:var(--green)">FREE</b>':'₹'+delivery}</span></div>
    <div class="bill-row"><span>Platform fee</span><span>₹5</span></div>
    ${promoDiscount?`<div class="bill-row" style="color:var(--green)"><span>Discount (Promo)</span><span>-₹${promoDiscount}</span></div>`:''}
    <div class="bill-row total"><span>To Pay</span><span>₹${total+5}</span></div>`;

  if(placeBtn) {
    placeBtn.disabled = subtotal < (r?.minOrder||0);
    placeBtn.textContent = subtotal < (r?.minOrder||0) ? `Add ₹${(r?.minOrder||0)-subtotal} more` : 'Proceed to Checkout →';
  }
}

function applyPromo() {
  const code = document.getElementById('promoCode')?.value?.toUpperCase().trim();
  const promos = {ZEST20:40, WELCOME50:50, NEWUSER:60, FLAT30:30};
  const ok = document.getElementById('promoOk');
  if(promos[code]) {
    promoDiscount = promos[code];
    if(ok){ok.style.display='block'; ok.textContent=`✅ ${code} applied — ₹${promoDiscount} off!`;}
    toast(`🎉 Promo applied! ₹${promoDiscount} off`,'success'); renderCart();
  } else {
    promoDiscount = 0;
    if(ok){ok.style.display='block'; ok.style.color='var(--accent)'; ok.textContent='❌ Invalid code. Try ZEST20 or WELCOME50';}
    renderCart();
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHECKOUT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openCheckout() {
  if(!user) { openAuth('login'); return; }
  if(!Object.keys(cart).length) { toast('Add items first!'); return; }
  checkoutStep=1; renderCheckoutStep(1);
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutSheet').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('checkoutSheet').classList.remove('open');
  document.body.style.overflow='';
}

function goCheckoutStep(n) {
  checkoutStep=n; renderCheckoutStep(n);
  document.querySelectorAll('.cs-step').forEach(s=>{
    const sn = parseInt(s.dataset.step);
    s.classList.toggle('active',sn===n);
    s.classList.toggle('done',sn<n);
  });
}

function renderCheckoutStep(n) {
  const body = document.getElementById('checkoutBody');
  const r = RESTAURANTS.find(x=>x.id===currentRestId||x.id===cartRestId);
  const items = Object.entries(cart).map(([id,qty])=>{
    const item = Object.values(r.menu).flat().find(x=>x.id===id);
    return item?{...item,qty}:null;
  }).filter(Boolean);
  const subtotal = items.reduce((a,i)=>a+(i.price*i.qty),0);
  const delivery = r?.delivery||0;
  const total = subtotal+delivery+5-promoDiscount;

  if(n===1) {
    body.innerHTML=`
      <div style="max-height:300px;overflow-y:auto;margin-bottom:16px">
        ${items.map(i=>`
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
            <span style="font-size:22px">${i.emoji}</span>
            <div style="flex:1"><div style="font-size:13px;font-weight:600">${i.name}</div><div style="font-size:12px;color:var(--muted)">₹${i.price} × ${i.qty}</div></div>
            <div style="display:flex;align-items:center;gap:0;border:1.5px solid var(--green);border-radius:8px;overflow:hidden">
              <button style="width:28px;height:28px;background:var(--green);color:white;border:none;cursor:pointer;font-size:16px;font-weight:700" onclick="updateCart('${i.id}',-1);renderCheckoutStep(1)">−</button>
              <span style="width:28px;text-align:center;font-size:13px;font-weight:800">${i.qty}</span>
              <button style="width:28px;height:28px;background:var(--green);color:white;border:none;cursor:pointer;font-size:16px;font-weight:700" onclick="updateCart('${i.id}',1);renderCheckoutStep(1)">+</button>
            </div>
            <div style="font-size:14px;font-weight:700;min-width:52px;text-align:right">₹${i.price*i.qty}</div>
          </div>`).join('')}
      </div>
      <div style="background:var(--bg);border-radius:14px;padding:14px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:var(--muted)"><span>Subtotal</span><span>₹${subtotal}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:var(--muted)"><span>Delivery</span><span>${delivery===0?'<span style="color:var(--green);font-weight:700">FREE</span>':'₹'+delivery}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:var(--muted)"><span>Platform fee</span><span>₹5</span></div>
        ${promoDiscount?`<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;color:var(--green);font-weight:600"><span>Promo discount</span><span>-₹${promoDiscount}</span></div>`:''}
        <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:800;border-top:1px solid var(--border);padding-top:10px;margin-top:6px"><span>Total</span><span>₹${total}</span></div>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="co_promo" type="text" placeholder="Promo code (try ZEST20)" style="flex:1;border:1.5px solid var(--border);border-radius:10px;padding:10px 14px;font-family:'DM Sans',sans-serif;font-size:13px;outline:none">
        <button onclick="applyCheckoutPromo()" style="background:var(--text);color:white;border:none;border-radius:10px;padding:10px 16px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;cursor:pointer">Apply</button>
      </div>
      <button onclick="goCheckoutStep(2)" style="width:100%;background:var(--accent);color:white;border:none;border-radius:14px;padding:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer">Choose Delivery Address →</button>`;
  }
  else if(n===2) {
    body.innerHTML=`
      <h4 style="font-size:14px;font-weight:700;margin-bottom:14px">📍 Saved Addresses</h4>
      ${ADDRESSES.map((a,i)=>`
        <div onclick="selectedAddress=${i};document.querySelectorAll('.addr-opt').forEach(x=>x.classList.remove('sel'));this.classList.add('sel')" class="addr-opt ${selectedAddress===i?'sel':''}" style="display:flex;gap:12px;align-items:flex-start;padding:14px;border:2px solid ${selectedAddress===i?'var(--accent)':'var(--border)'};border-radius:14px;margin-bottom:10px;cursor:pointer;transition:all 0.15s">
          <span style="font-size:22px">${a.icon}</span>
          <div style="flex:1">
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:var(--muted);margin-bottom:2px">${a.type}${a.default?'<span style="background:var(--green-bg);color:var(--green);font-size:10px;padding:2px 6px;border-radius:8px;margin-left:6px">DEFAULT</span>':''}</div>
            <div style="font-size:13px">${a.text}</div>
          </div>
          <div style="width:20px;height:20px;border-radius:50%;border:2px solid ${selectedAddress===i?'var(--accent)':'var(--border)'};background:${selectedAddress===i?'var(--accent)':'white'};flex-shrink:0;margin-top:2px;box-shadow:${selectedAddress===i?'inset 0 0 0 4px white':'none'}"></div>
        </div>`).join('')}
      <div style="border:2px dashed var(--border);border-radius:14px;padding:14px;text-align:center;cursor:pointer;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:20px" onclick="toast('📍 Address picker coming soon!')">+ Add New Address</div>
      <h4 style="font-size:14px;font-weight:700;margin-bottom:12px">🗒️ Delivery Instructions</h4>
      <textarea style="width:100%;border:1.5px solid var(--border);border-radius:12px;padding:12px 14px;font-family:'DM Sans',sans-serif;font-size:13px;outline:none;resize:none;min-height:62px;margin-bottom:16px" placeholder="e.g. Leave at door, call on arrival…"></textarea>
      <button onclick="goCheckoutStep(3)" style="width:100%;background:var(--accent);color:white;border:none;border-radius:14px;padding:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer">Choose Payment Method →</button>`;
  }
  else if(n===3) {
    const payMethods = [
      {id:'upi',icon:'📱',name:'UPI (PhonePe, GPay, Paytm)',tag:'RECOMMENDED'},
      {id:'card',icon:'💳',name:'Credit / Debit Card',tag:''},
      {id:'wallet',icon:'👛',name:'Zest Wallet (₹0 balance)',tag:''},
      {id:'cod',icon:'💵',name:'Cash on Delivery',tag:''},
    ];
    body.innerHTML=`
      <h4 style="font-size:14px;font-weight:700;margin-bottom:14px">💳 Payment Method</h4>
      ${payMethods.map(pm=>`
        <div class="payment-option ${selectedPayment===pm.id?'selected':''}" onclick="selectedPayment='${pm.id}';document.querySelectorAll('.payment-option').forEach(x=>{x.classList.remove('selected');x.querySelector('.radio-dot').style.cssText='border:2px solid var(--border)'});this.classList.add('selected');this.querySelector('.radio-dot').style.cssText='border:2px solid var(--accent);background:var(--accent);box-shadow:inset 0 0 0 3px white'">
          <span class="po-icon">${pm.icon}</span>
          <span class="po-name">${pm.name}</span>
          ${pm.tag?`<span class="po-tag">${pm.tag}</span>`:''}
          <div class="radio-dot" style="${selectedPayment===pm.id?'border:2px solid var(--accent);background:var(--accent);box-shadow:inset 0 0 0 3px white':'border:2px solid var(--border)'}"></div>
        </div>`).join('')}
      <div style="background:var(--green-bg);border-radius:14px;padding:14px;margin:16px 0;display:flex;gap:10px;align-items:center">
        <span>🔒</span>
        <span style="font-size:12px;color:var(--green);font-weight:500">100% secure payments. Your card details are never stored.</span>
      </div>
      <div style="background:var(--bg);border-radius:14px;padding:14px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:800"><span>Total Payable</span><span>₹${total}</span></div>
      </div>
      <button onclick="placeOrder()" style="width:100%;background:var(--accent);color:white;border:none;border-radius:14px;padding:16px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 6px 24px rgba(232,56,10,0.38)">🎉 Place Order · ₹${total}</button>`;
  }
}

function applyCheckoutPromo() {
  const code = document.getElementById('co_promo')?.value?.toUpperCase().trim();
  const promos = {ZEST20:40,WELCOME50:50,NEWUSER:60,FLAT30:30};
  if(promos[code]) { promoDiscount=promos[code]; toast(`🎉 ₹${promoDiscount} off applied!`,'success'); renderCart(); renderCheckoutStep(1); }
  else { toast('❌ Invalid promo. Try ZEST20','error'); }
}

function placeOrder() {
  const r = RESTAURANTS.find(x=>x.id===currentRestId||x.id===cartRestId);
  const items = Object.entries(cart).map(([id,qty])=>{
    const item = Object.values(r.menu).flat().find(x=>x.id===id);
    return item?{...item,qty}:null;
  }).filter(Boolean);
  const subtotal = items.reduce((a,i)=>a+(i.price*i.qty),0);
  const total = subtotal+(r?.delivery||0)+5-promoDiscount;
  const orderId = 'ZST'+Math.floor(10000+Math.random()*90000);
  const order = {
    id:orderId, restId:r.id, restName:r.name, restEmoji:r.emoji,
    items: items.map(i=>({name:i.name,emoji:i.emoji,qty:i.qty,price:i.price})),
    total, status:'active', date: new Date().toLocaleString('en-IN'),
    address: ADDRESSES[selectedAddress]?.text, payment: selectedPayment,
    eta: new Date(Date.now()+28*60000).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})
  };
  orderHistory.unshift(order);
  localStorage.setItem('zest_orders',JSON.stringify(orderHistory));
  closeCheckout(); cart={}; cartRestId=null; promoDiscount=0; renderCart(); openTracking(order);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openTracking(order) {
  const partners = ['Rahul Kumar','Ravi Singh','Amit Yadav','Suresh Kumar','Deepak Sharma'];
  document.getElementById('partnerName').textContent = partners[Math.floor(Math.random()*partners.length)];
  document.getElementById('trackOrderSummary').innerHTML = `
    <div class="tdc-row"><span>Order ID</span><span style="font-weight:700;font-family:'DM Mono',monospace">#${order.id}</span></div>
    <div class="tdc-row"><span>Restaurant</span><span style="font-weight:700">${order.restEmoji} ${order.restName}</span></div>
    <div class="tdc-row"><span>Items</span><span style="font-weight:700">${order.items.map(i=>`${i.emoji} ${i.name} ×${i.qty}`).join(', ')}</span></div>
    <div class="tdc-row"><span>Total Paid</span><span style="font-weight:700;color:var(--accent)">₹${order.total}</span></div>
    <div class="tdc-row"><span>Deliver to</span><span style="font-weight:700;max-width:200px;text-align:right">${order.address}</span></div>
    <div class="tdc-row"><span>ETA</span><span style="font-weight:700;color:var(--green)">${order.eta}</span></div>`;
  const steps = [
    {icon:'✓',title:'Order Confirmed',desc:'Your order has been placed',time:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}),state:'done'},
    {icon:'👨‍🍳',title:'Preparing Your Food',desc:`${order.restName} is preparing your order`,time:'',state:'active'},
    {icon:'🛵',title:'Out for Delivery',desc:'Rider is on the way to you',time:'',state:''},
    {icon:'🏠',title:'Delivered',desc:'Enjoy your meal!',time:'',state:''},
  ];
  document.getElementById('trackStepsContainer').innerHTML = steps.map(s=>`
    <div class="track-step ${s.state}">
      <div class="ts-icon">${s.icon}</div>
      <div class="ts-info"><h4>${s.title}</h4><p>${s.desc}</p></div>
      <div class="ts-time">${s.time}</div>
    </div>`).join('');
  let step=2;
  const interval = setInterval(()=>{
    if(step>4){clearInterval(interval);return;}
    const allSteps = document.querySelectorAll('.track-step');
    allSteps.forEach((el,i)=>{ el.className='track-step '+(i<step?'done':i===step?'active':''); });
    const etaMins = Math.max(0,28-(step*7));
    document.getElementById('mapEta').textContent = etaMins>0?`⏱ ${etaMins} mins away`:'🎉 Delivered!';
    if(step===4) {
      const o = orderHistory.find(x=>x.id===order.id);
      if(o){o.status='delivered';localStorage.setItem('zest_orders',JSON.stringify(orderHistory));}
      setTimeout(()=>{ openRatingModal(order.id, order.restName); },2000);
      clearInterval(interval);
    }
    step++;
  },4000);
  showPage('trackPage'); window.scrollTo(0,0);
  toast('🎉 Order placed! Tracking your food…','success');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ORDERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function goOrders() {
  if(!user) { openAuth('login'); return; }
  renderOrders('all'); showPage('ordersPage');
}

function switchOrderTab(filter, el) {
  document.querySelectorAll('.otab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active'); renderOrders(filter);
}

function renderOrders(filter) {
  let orders = orderHistory;
  if(filter!=='all') orders = orders.filter(o=>o.status===filter);
  const list = document.getElementById('ordersList');
  if(!orders.length) {
    list.innerHTML=`<div style="text-align:center;padding:64px 20px;color:var(--muted)"><div style="font-size:60px;margin-bottom:16px">📦</div><div style="font-size:16px;font-weight:700">No ${filter==='all'?'':filter} orders</div><p style="font-size:13px;margin-top:8px">Your orders will appear here</p></div>`;
    return;
  }
  list.innerHTML = orders.map(o=>`
    <div class="order-card">
      <div class="oc-top">
        <div class="oc-emoji">${o.restEmoji}</div>
        <div class="oc-info">
          <strong>${o.restName}</strong>
          <div class="oc-items">${o.items.map(i=>`${i.emoji} ${i.name} ×${i.qty}`).join(' · ')}</div>
          <div class="oc-date">📅 ${o.date} · ₹${o.total}</div>
        </div>
        <span class="oc-status ${o.status}">${o.status==='active'?'🚴 Active':o.status==='delivered'?'✅ Delivered':'❌ Cancelled'}</span>
      </div>
      <div class="oc-actions">
        ${o.status==='active'
          ? `<button class="oc-btn primary" onclick="goToTracking('${o.id}')">🗺️ Track Order</button>
             <button class="oc-btn" onclick="toast('📞 Calling support…')">📞 Help</button>`
          : `<button class="oc-btn primary" onclick="reorder('${o.id}')">🔄 Reorder</button>
             <button class="oc-btn" onclick="openRatingModal('${o.id}','${o.restName}')">⭐ Rate</button>`
        }
      </div>
    </div>`).join('');
}

function goToTracking(orderId) {
  const order = orderHistory.find(o=>o.id===orderId);
  if(order) openTracking(order);
}

function reorder(orderId) {
  const order = orderHistory.find(o=>o.id===orderId);
  if(!order) return;
  openRestaurant(order.restId);
  toast(`🔄 Redirecting to ${order.restName}…`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// RATING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openRatingModal(orderId, restName) {
  ratingOrderId = orderId; ratingValue = 0;
  document.getElementById('ratingSubtitle').textContent = `Rate your experience at ${restName}`;
  const stars = document.getElementById('rateStars');
  stars.innerHTML = '⭐⭐⭐⭐⭐'.split('').map((s,i)=>`
    <span class="rate-star" data-v="${i+1}" onclick="selectStar(${i+1})">⭐</span>`).join('');
  document.getElementById('rateComment').value='';
  document.getElementById('ratingModal').classList.add('open');
}

function selectStar(n) {
  ratingValue = n;
  document.querySelectorAll('.rate-star').forEach((s,i)=>{ s.style.filter = i<n?'none':'grayscale(1)'; });
}

function submitRating() {
  if(!ratingValue) { toast('Please select a star rating','error'); return; }
  toast(`⭐ Thanks for your ${ratingValue}-star rating!`,'success');
  closeModal('ratingModal');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROFILE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function goProfile() {
  if(!user) { openAuth('login'); return; }
  renderProfile(); showPage('profilePage');
}

function renderProfile() {
  const content = document.getElementById('profileContent');
  content.innerHTML=`
    <div class="profile-hero">
      <div class="profile-avatar">${user.name[0].toUpperCase()}</div>
      <div>
        <div class="profile-name">${user.name}</div>
        <div class="profile-email">${user.email}</div>
        <div class="profile-stats">
          <div class="profile-stat"><strong>${orderHistory.length}</strong><span>Orders</span></div>
          <div class="profile-stat"><strong>${orderHistory.filter(o=>o.status==='delivered').length}</strong><span>Delivered</span></div>
        </div>
      </div>
      <button class="edit-profile-btn" onclick="toast('✏️ Edit profile coming soon!')">Edit ✏️</button>
    </div>
    <div class="profile-section">
      <h3>📍 Saved Addresses</h3>
      ${ADDRESSES.map(a=>`
        <div class="addr-card">
          <span class="addr-icon">${a.icon}</span>
          <div class="addr-info">
            <div class="addr-type">${a.type}${a.default?'<span class="addr-default">DEFAULT</span>':''}</div>
            <div class="addr-text">${a.text}</div>
          </div>
          <button onclick="toast('✏️ Edit address')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:18px;padding:4px">✏️</button>
        </div>`).join('')}
      <button onclick="toast('📍 Add address feature coming soon!')" style="margin-top:12px;border:none;background:none;color:var(--accent);font-size:13px;font-weight:700;cursor:pointer;padding:0">+ Add New Address</button>
    </div>
    <div class="profile-section">
      <h3>⚙️ Account Settings</h3>
      <div class="menu-list-item" onclick="toast('👤 Edit account')"><span class="mli-icon">👤</span><span class="mli-label">Edit Profile</span><span class="mli-arr">›</span></div>
      <div class="menu-list-item" onclick="toast('🔔 Notification settings')"><span class="mli-icon">🔔</span><span class="mli-label">Notifications</span><span class="mli-badge">3 new</span><span class="mli-arr">›</span></div>
      <div class="menu-list-item" onclick="toast('🔒 Change password')"><span class="mli-icon">🔒</span><span class="mli-label">Change Password</span><span class="mli-arr">›</span></div>
      <div class="menu-list-item" onclick="toast('💳 Payment methods')"><span class="mli-icon">💳</span><span class="mli-label">Payment Methods</span><span class="mli-arr">›</span></div>
      <div class="menu-list-item" onclick="toast('❓ Help & Support')"><span class="mli-icon">❓</span><span class="mli-label">Help & Support</span><span class="mli-arr">›</span></div>
      <div class="menu-list-item" onclick="logout()" style="color:#b71c1c"><span class="mli-icon">🚪</span><span class="mli-label" style="color:#b71c1c">Logout</span><span class="mli-arr">›</span></div>
    </div>`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// AUTH
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openAuth(mode) { renderAuth(mode); document.getElementById('authModal').classList.add('open'); }
function closeAuth() { document.getElementById('authModal').classList.remove('open'); }

function renderAuth(mode) {
  const content = document.getElementById('authContent');
  if(mode==='login') {
    content.innerHTML=`
      <h2>Welcome back 👋</h2>
      <p>Sign in to your Zest account</p>
      <div class="social-login">
        <button class="social-btn" onclick="socialLogin('Google')">🔵 Google</button>
        <button class="social-btn" onclick="socialLogin('Facebook')">🔷 Facebook</button>
      </div>
      <div class="divider"><hr><span>or continue with email</span><hr></div>
      <div class="input-group"><label>Email Address</label><input type="email" id="loginEmail" placeholder="your@email.com"></div>
      <div class="input-group"><label>Password</label><input type="password" id="loginPass" placeholder="Enter your password"></div>
      <div style="text-align:right;margin-bottom:16px"><a onclick="toast('🔑 Reset email sent!')" style="font-size:12px;color:var(--accent);cursor:pointer;font-weight:600">Forgot password?</a></div>
      <button class="modal-submit" onclick="loginUser()">Sign In →</button>
      <div class="modal-switch">New to Zest? <a onclick="renderAuth('signup')">Create account</a></div>`;
  } else {
    content.innerHTML=`
      <h2>Join Zest! 🎉</h2>
      <p>Create your account and start ordering</p>
      <div class="social-login">
        <button class="social-btn" onclick="socialLogin('Google')">🔵 Google</button>
        <button class="social-btn" onclick="socialLogin('Facebook')">🔷 Facebook</button>
      </div>
      <div class="divider"><hr><span>or sign up with email</span><hr></div>
      <div class="input-group"><label>Full Name</label><input type="text" id="signupName" placeholder="Arjun Sharma"></div>
      <div class="input-group"><label>Mobile Number</label><input type="tel" id="signupPhone" placeholder="+91 98765 43210"></div>
      <div class="input-group"><label>Email Address</label><input type="email" id="signupEmail" placeholder="arjun@email.com"></div>
      <div class="input-group"><label>Password</label><input type="password" id="signupPass" placeholder="Create a password"></div>
      <button class="modal-submit" onclick="signupUser()">Create Account →</button>
      <div class="modal-switch">Already have an account? <a onclick="renderAuth('login')">Sign in</a></div>`;
  }
}

function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if(!email||!pass){toast('Fill all fields','error');return;}
  user = {name: email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()), email, phone:'+91 98765 43210'};
  localStorage.setItem('zest_user',JSON.stringify(user));
  closeAuth(); updateUserUI();
  toast(`👋 Welcome back, ${user.name}!`,'success');
}

function signupUser() {
  const name=document.getElementById('signupName').value;
  const phone=document.getElementById('signupPhone').value;
  const email=document.getElementById('signupEmail').value;
  const pass=document.getElementById('signupPass').value;
  if(!name||!email||!pass){toast('Fill all fields','error');return;}
  user = {name,email,phone};
  localStorage.setItem('zest_user',JSON.stringify(user));
  closeAuth(); updateUserUI();
  toast(`🎉 Welcome to Zest, ${name}!`,'success');
}

function socialLogin(provider) {
  user={name:'Demo User',email:'demo@zest.food',phone:'+91 99999 00000'};
  localStorage.setItem('zest_user',JSON.stringify(user));
  closeAuth(); updateUserUI();
  toast(`✅ Signed in with ${provider}!`,'success');
}

function logout() {
  user=null; localStorage.removeItem('zest_user');
  updateUserUI(); goHome(); toast('👋 Logged out successfully');
}

function updateUserUI() {
  document.getElementById('navUserName').textContent = user ? user.name.split(' ')[0] : 'Sign In';
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LOCATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderPopularAreas() {
  document.getElementById('popularAreas').innerHTML = POPULAR_AREAS.map(a=>`
    <div onclick="setLocation('${a}')" style="padding:11px 14px;border-radius:10px;cursor:pointer;font-size:14px;transition:background 0.15s;display:flex;align-items:center;gap:10px" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
      <span>📍</span>${a}
    </div>`).join('');
  renderSavedAddresses();
}

function renderSavedAddresses() {
  if(!user){document.getElementById('savedAddressList').innerHTML='<p style="font-size:13px;color:var(--muted);margin-bottom:8px">Sign in to see saved addresses</p>';return;}
  document.getElementById('savedAddressList').innerHTML=`
    <h4 style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">Saved</h4>
    ${ADDRESSES.map(a=>`
      <div onclick="setLocation('${a.type}')" style="display:flex;gap:10px;padding:11px 14px;border-radius:10px;cursor:pointer;align-items:center;transition:background 0.15s" onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background=''">
        <span>${a.icon}</span><div><div style="font-size:13px;font-weight:600">${a.type}</div><div style="font-size:12px;color:var(--muted)">${a.text.substring(0,40)}…</div></div>
      </div>`).join('')}`;
}

function setLocation(name) {
  document.getElementById('hCity').textContent = '📍 '+name;
  closeSheet('locationSheet','locationOverlay');
  toast(`📍 Location set to ${name}`);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SHEETS & MODALS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function openSheet(id) {
  const ovId = id.replace('Sheet','Overlay');
  document.getElementById(ovId)?.classList.add('open');
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow='hidden';
  if(id==='locationSheet') renderSavedAddresses();
}

function closeSheet(id, ovId) {
  document.getElementById(ovId)?.classList.remove('open');
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow='';
}

function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function showPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}

function goHome() { showPage('homePage'); window.scrollTo(0,0); }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOAST
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toast(msg, type='') {
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast-item ${type}`;
  const icon = type==='success'?'✅':type==='error'?'❌':'ℹ️';
  el.innerHTML = `<span class="ti-icon">${icon}</span><span>${msg}</span>`;
  container.appendChild(el);
  el.onclick = ()=>el.remove();
  setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateX(100%)'; el.style.transition='all 0.3s'; setTimeout(()=>el.remove(),300); }, 3200);
}

init();
