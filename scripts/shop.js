const products = {
    totes: [
        { name: "Olive Canvas Tote", image: "images/tote1.jpg", price: "$25.00", description: "Eco-friendly olive canvas tote for daily use." },
        { name: "Beige Straw Tote", image: "images/tote2.jpg", price: "$30.00", description: "Stylish beige straw tote perfect for the beach." },
    ],
    backpacks: [
        { name: "Beige Hiking Backpack", image: "images/backpack1.jpg", price: "$50.00", description: "Durable and eco-friendly backpack for adventures." },
    ],
    crossbody: [
        { name: "Olive Crossbody Bag", image: "images/crossbody1.jpg", price: "$40.00", description: "Compact olive bag perfect for daily use." },
    ],
    wallets: [
        { name: "Eco Leather Wallet", image: "images/wallet1.jpg", price: "$20.00", description: "Sustainable wallet made from eco-friendly leather." },
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const categoryTitle = document.getElementById('category-title');
const productsContainer = document.getElementById('products-container');

if (category && products[category]) {
    categoryTitle.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Bags`; 
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
} else {
    categoryTitle.innerText = "Category not found";
}

function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.length;
    document.getElementById('cart-count').innerText = cartCount;
}

updateCartCount(); // Update cart count on page load


// Product data for each category
const products = {
    totes: [
        { name: "Organic Cotton Tote", image: "images/totes1.jpg", price: "$25.00", description: "Eco-friendly cotton tote for your daily essentials." },
        { name: "Recycled Jute Tote", image: "images/totes2.jpg", price: "$30.00", description: "Sustainable jute tote with a stylish design." },
        { name: "Foldable Tote Bag", image: "images/totes3.jpg", price: "$22.00", description: "Compact and foldable tote bag for convenience." }
    ],
    backpacks: [
        { name: "Recycled Backpack", image: "images/backpacks1.jpg", price: "$45.00", description: "Durable and sustainable backpack made from recycled materials." },
        { name: "Canvas Backpack", image: "images/backpacks2.jpg", price: "$40.00", description: "Classic canvas backpack for everyday use." },
        { name: "Eco-Friendly Backpack", image: "images/backpacks3.jpg", price: "$50.00", description: "Stylish eco-friendly backpack for all your needs." }
    ],
    crossbody: [
        { name: "Vegan Leather Crossbody", image: "images/crossbody1.jpg", price: "$35.00", description: "Sustainable and stylish vegan leather crossbody bag." },
        { name: "Recycled Fabric Crossbody", image: "images/crossbody2.jpg", price: "$28.00", description: "Compact and eco-friendly crossbody bag made from recycled fabric." },
        { name: "Canvas Crossbody", image: "images/crossbody3.jpg", price: "$32.00", description: "Stylish and durable canvas crossbody bag." }
    ],
    wallets: [
        { name: "Recycled Leather Wallet", image: "images/wallets1.jpg", price: "$20.00", description: "Sustainable wallet made from recycled leather." },
        { name: "Vegan Leather Wallet", image: "images/wallets2.jpg", price: "$18.00", description: "Eco-friendly wallet made from vegan leather." },
        { name: "Canvas Wallet", image: "images/wallets3.jpg", price: "$15.00", description: "Durable canvas wallet for everyday use." }
    ]
};

// Get the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Display the corresponding products
const categoryTitle = document.getElementById('category-title');
const productsContainer = document.getElementById('products-container');

// Check if the category is valid, and show the products for that category
if (category && products[category]) {
    categoryTitle.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Bags`;
    products[category].forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
} else {
    // If the category is not valid, show an error message
    categoryTitle.innerText = "Category not found";
}



const totesProducts = [
    { name: "Eco Tote Bag", image: "images/tote1.jpg", price: "$25.00", description: "A stylish and eco-friendly tote bag made from sustainable materials." },
    { name: "Canvas Tote Bag", image: "images/tote2.jpg", price: "$30.00", description: "Durable and spacious, perfect for your daily essentials." },
    { name: "Recycled Tote", image: "images/tote3.jpg", price: "$20.00", description: "A chic tote bag made from recycled materials, combining style and sustainability." }
];

const productsContainer = document.getElementById('products-container');

totesProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="price">${product.price}</span>
        <button class="add-to-cart">Add to Cart</button>
    `;
    productsContainer.appendChild(productElement);
});

