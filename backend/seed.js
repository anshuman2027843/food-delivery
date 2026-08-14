import mongoose from "mongoose";
import 'dotenv/config';
import foodModel from "./models/foodModel.js";

const seedFoods = [
    {
        name: "Greek salad",
        image: "food_1.png",
        price: 199,
        description: "Fresh lettuce, olives, feta cheese, and cucumbers tossed in a tangy vinaigrette",
        category: "Salad"
    },
    {
        name: "Veg salad",
        image: "food_2.png",
        price: 149,
        description: "A refreshing mix of seasonal vegetables with a light lemon dressing",
        category: "Salad"
    },
    {
        name: "Clover Salad",
        image: "food_3.png",
        price: 179,
        description: "Crunchy greens with cherry tomatoes, croutons, and honey mustard dressing",
        category: "Salad"
    },
    {
        name: "Chicken Salad",
        image: "food_4.png",
        price: 249,
        description: "Grilled chicken strips over fresh greens with Caesar dressing",
        category: "Salad"
    },
    {
        name: "Lasagna Rolls",
        image: "food_5.png",
        price: 219,
        description: "Cheesy lasagna sheets rolled with rich meat sauce and baked to perfection",
        category: "Rolls"
    },
    {
        name: "Peri Peri Rolls",
        image: "food_6.png",
        price: 159,
        description: "Spicy peri peri chicken wrapped in a soft tortilla with fresh veggies",
        category: "Rolls"
    },
    {
        name: "Chicken Rolls",
        image: "food_7.png",
        price: 179,
        description: "Tender chicken tikka rolled in flaky paratha with mint chutney",
        category: "Rolls"
    },
    {
        name: "Veg Rolls",
        image: "food_8.png",
        price: 129,
        description: "Crispy paneer and crunchy veggies wrapped in a rumali roti",
        category: "Rolls"
    },
    {
        name: "Ripple Ice Cream",
        image: "food_9.png",
        price: 149,
        description: "Creamy vanilla ice cream swirled with rich chocolate ripple",
        category: "Deserts"
    },
    {
        name: "Fruit Ice Cream",
        image: "food_10.png",
        price: 179,
        description: "A tropical blend of mango, strawberry, and kiwi in creamy ice cream",
        category: "Deserts"
    },
    {
        name: "Jar Ice Cream",
        image: "food_11.png",
        price: 199,
        description: "Layered ice cream sundae served in a mason jar with crunchy toppings",
        category: "Deserts"
    },
    {
        name: "Vanilla Ice Cream",
        image: "food_12.png",
        price: 119,
        description: "Classic rich and creamy vanilla bean ice cream with wafer",
        category: "Deserts"
    },
    {
        name: "Chicken Sandwich",
        image: "food_13.png",
        price: 189,
        description: "Grilled chicken breast with lettuce, tomato, and mayo on toasted bread",
        category: "Sandwich"
    },
    {
        name: "Vegan Sandwich",
        image: "food_14.png",
        price: 159,
        description: "Avocado, hummus, and roasted veggies on multigrain bread",
        category: "Sandwich"
    },
    {
        name: "Grilled Sandwich",
        image: "food_15.png",
        price: 139,
        description: "Classic Indian grilled sandwich with spiced potato, cheese, and chutney",
        category: "Sandwich"
    },
    {
        name: "Bread Sandwich",
        image: "food_16.png",
        price: 99,
        description: "Simple and tasty triple-layer sandwich with fresh veggies and butter",
        category: "Sandwich"
    },
    {
        name: "Cup Cake",
        image: "food_17.png",
        price: 89,
        description: "Fluffy vanilla cupcake topped with rich buttercream frosting",
        category: "Cake"
    },
    {
        name: "Vegan Cake",
        image: "food_18.png",
        price: 149,
        description: "Moist eggless chocolate cake made with plant-based ingredients",
        category: "Cake"
    },
    {
        name: "Butterscotch Cake",
        image: "food_19.png",
        price: 349,
        description: "Layered butterscotch sponge cake with caramel drizzle and praline",
        category: "Cake"
    },
    {
        name: "Sliced Cake",
        image: "food_20.png",
        price: 129,
        description: "A generous slice of freshly baked cake — chef's daily special",
        category: "Cake"
    },
    {
        name: "Garlic Mushroom",
        image: "food_21.png",
        price: 219,
        description: "Button mushrooms sautéed in garlic butter with fresh herbs",
        category: "Pure Veg"
    },
    {
        name: "Fried Cauliflower",
        image: "food_22.png",
        price: 179,
        description: "Crispy battered cauliflower florets served with spicy dipping sauce",
        category: "Pure Veg"
    },
    {
        name: "Mix Veg Pulao",
        image: "food_23.png",
        price: 159,
        description: "Fragrant basmati rice cooked with seasonal vegetables and whole spices",
        category: "Pure Veg"
    },
    {
        name: "Rice Zucchini",
        image: "food_24.png",
        price: 189,
        description: "Herbed rice bowl topped with grilled zucchini and a lemon glaze",
        category: "Pure Veg"
    },
    {
        name: "Cheese Pasta",
        image: "food_25.png",
        price: 229,
        description: "Penne in a rich three-cheese sauce with a hint of black pepper",
        category: "Pasta"
    },
    {
        name: "Tomato Pasta",
        image: "food_26.png",
        price: 199,
        description: "Classic spaghetti in a fresh basil and tomato marinara sauce",
        category: "Pasta"
    },
    {
        name: "Creamy Pasta",
        image: "food_27.png",
        price: 249,
        description: "Fettuccine in a velvety white sauce with sautéed mushrooms",
        category: "Pasta"
    },
    {
        name: "Chicken Pasta",
        image: "food_28.png",
        price: 289,
        description: "Penne tossed with grilled chicken in a creamy pesto sauce",
        category: "Pasta"
    },
    {
        name: "Butter Noodles",
        image: "food_29.png",
        price: 169,
        description: "Silky egg noodles tossed in golden butter with garlic and chives",
        category: "Noodles"
    },
    {
        name: "Veg Noodles",
        image: "food_30.png",
        price: 149,
        description: "Hakka-style stir-fried noodles loaded with crunchy vegetables",
        category: "Noodles"
    },
    {
        name: "Somen Noodles",
        image: "food_31.png",
        price: 199,
        description: "Delicate Japanese wheat noodles served in a light chilled broth",
        category: "Noodles"
    },
    {
        name: "Cooked Noodles",
        image: "food_32.png",
        price: 159,
        description: "Classic Indo-Chinese chow mein with soy sauce and vegetables",
        category: "Noodles"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB, clearing old foods...");
        await foodModel.deleteMany({});
        console.log("Inserting 32 food items with realistic INR prices...");
        await foodModel.insertMany(seedFoods);
        console.log("Database seeded successfully with 32 items!");
    } catch (err) {
        console.error("Error seeding DB:", err);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
