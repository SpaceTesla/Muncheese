import { db } from './utils/firebase.js'; // Ensure your firebase.js is set up
import admin from 'firebase-admin'; // Import firebase-admin SDK

const seedFirestore = async () => {
  try {
    const defaultImageUrl = 'https://wallpaperaccess.com/full/1306253.jpg'; // Replace with your default image URL

    const categories = [
      {
        id: 'loaded-fries',
        name: 'Loaded Fries',
        description: 'Loaded fries with various toppings.',
        image: defaultImageUrl, // Add specific image if available
      },
      {
        id: 'dips-sauces',
        name: 'Dips/Sauces',
        description: 'A variety of dips and sauces to complement your meal.',
        image: defaultImageUrl, // Using the default image
      },
      {
        id: 'biryani-bowl-platter',
        name: 'Biryani Bowl & Platter',
        description: 'Biryani bowls with delicious platters.',
        image: defaultImageUrl,
      },
      {
        id: 'desserts-beverage',
        name: 'Desserts and Beverage',
        description:
          'End your meal on a sweet note with our desserts and beverages.',
        image: defaultImageUrl,
      },
      {
        id: 'hot-spicy-chicken',
        name: 'Hot & Spicy Chicken',
        description: 'Spicy chicken dishes for those who love a kick.',
        image: defaultImageUrl,
      },
      {
        id: 'breakfast',
        name: 'Breakfast',
        description: 'A hearty breakfast to start your day right.',
        image: defaultImageUrl,
      },
      {
        id: 'burgers-combos',
        name: 'Burgers and Burger Combos',
        description: 'Juicy burgers and combos with sides.',
        image: defaultImageUrl,
      },
      {
        id: 'london-doners',
        name: 'London Doners',
        description: 'Delicious doners with authentic London flavors.',
        image: defaultImageUrl,
      },
      {
        id: 'peri-peri-chicken',
        name: 'Peri Peri Chicken',
        description: 'Peri Peri flavored chicken dishes.',
        image: defaultImageUrl,
      },
      {
        id: 'salads',
        name: 'Salads',
        description: 'Fresh and healthy salads.',
        image: defaultImageUrl,
      },
      {
        id: 'snacks',
        name: 'Snacks',
        description: 'A selection of light snacks.',
        image: defaultImageUrl,
      },
    ];

    const items = [
      {
        id: 'paneer-popcorn-loaded-fries',
        name: 'Paneer Popcorn Loaded Fries',
        price: 218,
        description: 'Loaded Fries with 12pc Paneer Popcorn',
        isCustomizable: true,
        servingSize: '235gms',
        energy: '456kcal',
        category: 'loaded-fries',
      },
      {
        id: 'cheesy-loaded-fries',
        name: 'Cheesy Loaded Fries',
        price: 199,
        description: 'Fries topped with melted cheese and jalapeños',
        isCustomizable: true,
        servingSize: '250gms',
        energy: '480kcal',
        category: 'loaded-fries',
      },
      {
        id: 'honey-mustard-dip',
        name: 'Honey Mustard Dip',
        price: 50,
        description: 'Sweet and tangy honey mustard sauce',
        isCustomizable: false,
        servingSize: '50gms',
        energy: '150kcal',
        category: 'dips-sauces',
      },
      {
        id: 'spicy-sriracha-dip',
        name: 'Spicy Sriracha Dip',
        price: 55,
        description: 'Fiery sriracha sauce perfect for fries',
        isCustomizable: false,
        servingSize: '50gms',
        energy: '160kcal',
        category: 'dips-sauces',
      },
      {
        id: 'biryani-bowl-regular',
        name: 'Regular Biryani Bowl',
        price: 299,
        description: 'Classic chicken biryani served in a bowl',
        isCustomizable: false,
        servingSize: '400gms',
        energy: '800kcal',
        category: 'biryani-bowl-platter',
      },
      {
        id: 'biryani-platter',
        name: 'Biryani Platter',
        price: 499,
        description: 'Assorted biryani platter with raita and salad',
        isCustomizable: false,
        servingSize: '600gms',
        energy: '1000kcal',
        category: 'biryani-bowl-platter',
      },
      {
        id: 'chocolate-mousse',
        name: 'Chocolate Mousse',
        price: 120,
        description: 'Rich and creamy chocolate mousse',
        isCustomizable: false,
        servingSize: '150gms',
        energy: '350kcal',
        category: 'desserts-beverage',
      },
      {
        id: 'mango-lassi',
        name: 'Mango Lassi',
        price: 70,
        description: 'Refreshing mango yogurt drink',
        isCustomizable: false,
        servingSize: '250ml',
        energy: '200kcal',
        category: 'desserts-beverage',
      },
      {
        id: 'hot-spicy-chicken-wings',
        name: 'Hot & Spicy Chicken Wings',
        price: 250,
        description: 'Crispy chicken wings tossed in spicy sauce',
        isCustomizable: true,
        servingSize: '300gms',
        energy: '700kcal',
        category: 'hot-spicy-chicken',
      },
      {
        id: 'spicy-chicken-burger',
        name: 'Spicy Chicken Burger',
        price: 180,
        description: 'Spicy chicken patty with lettuce and mayo',
        isCustomizable: true,
        servingSize: '250gms',
        energy: '500kcal',
        category: 'hot-spicy-chicken',
      },
      {
        id: 'classic-english-breakfast',
        name: 'Classic English Breakfast',
        price: 350,
        description: 'Full English breakfast with eggs, bacon, and toast',
        isCustomizable: false,
        servingSize: '500gms',
        energy: '900kcal',
        category: 'breakfast',
      },
      {
        id: 'veggie-omelette',
        name: 'Veggie Omelette',
        price: 120,
        description: 'Omelette loaded with fresh vegetables',
        isCustomizable: true,
        servingSize: '200gms',
        energy: '300kcal',
        category: 'breakfast',
      },
      {
        id: 'beef-burger',
        name: 'Beef Burger',
        price: 220,
        description: 'Juicy beef burger with cheese and toppings',
        isCustomizable: true,
        servingSize: '300gms',
        energy: '600kcal',
        category: 'burgers-combos',
      },
      {
        id: 'chicken-burger',
        name: 'Chicken Burger',
        price: 150,
        description: 'Crispy chicken burger',
        isCustomizable: false,
        servingSize: '200gms',
        energy: '350kcal',
        category: 'burgers-combos',
      },
      {
        id: 'london-doner-chicken',
        name: 'London Doner Chicken',
        price: 300,
        description: 'Delicious doner with marinated chicken and veggies',
        isCustomizable: false,
        servingSize: '350gms',
        energy: '800kcal',
        category: 'london-doners',
      },
      {
        id: 'london-doner-beef',
        name: 'London Doner Beef',
        price: 320,
        description: 'Succulent doner with marinated beef',
        isCustomizable: false,
        servingSize: '350gms',
        energy: '850kcal',
        category: 'london-doners',
      },
      {
        id: 'peri-peri-chicken-strips',
        name: 'Peri Peri Chicken Strips',
        price: 250,
        description: 'Crispy chicken strips marinated in peri peri spices',
        isCustomizable: true,
        servingSize: '300gms',
        energy: '650kcal',
        category: 'peri-peri-chicken',
      },
      {
        id: 'peri-peri-chicken-burger',
        name: 'Peri Peri Chicken Burger',
        price: 190,
        description: 'Spicy peri peri chicken burger',
        isCustomizable: true,
        servingSize: '250gms',
        energy: '500kcal',
        category: 'peri-peri-chicken',
      },
      {
        id: 'caesar-salad',
        name: 'Caesar Salad',
        price: 180,
        description: 'Classic Caesar salad with croutons and dressing',
        isCustomizable: false,
        servingSize: '250gms',
        energy: '400kcal',
        category: 'salads',
      },
      {
        id: 'greek-salad',
        name: 'Greek Salad',
        price: 160,
        description: 'Fresh Greek salad with feta cheese and olives',
        isCustomizable: false,
        servingSize: '200gms',
        energy: '350kcal',
        category: 'salads',
      },
      {
        id: 'mixed-snack-platter',
        name: 'Mixed Snack Platter',
        price: 280,
        description: 'A selection of snacks including fries and spring rolls',
        isCustomizable: false,
        servingSize: '400gms',
        energy: '600kcal',
        category: 'snacks',
      },
      {
        id: 'spring-rolls',
        name: 'Spring Rolls',
        price: 150,
        description: 'Crispy vegetable spring rolls served with dip',
        isCustomizable: true,
        servingSize: '200gms',
        energy: '400kcal',
        category: 'snacks',
      },
    ];

    // Seed categories
    const categoryPromises = categories.map(async (category) => {
      const docRef = db.collection('categories').doc(category.id);
      await docRef.set(category);
      console.log(`Added category with ID: ${category.id}`);
    });

    await Promise.all(categoryPromises);

    // Seed items
    const itemPromises = items.map(async (item) => {
      const docRef = db.collection('items').doc(item.id);
      await docRef.set(item);
      console.log(`Added item with ID: ${item.id}`);
    });

    await Promise.all(itemPromises);
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding Firestore:', error);
  }
};

seedFirestore();
