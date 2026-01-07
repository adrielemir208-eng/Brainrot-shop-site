// Sample product data (this will be stored in localStorage)
const defaultItems = [
    {
        id: 1,
        name: "Mystic Brainrot",
        category: "brainrot",
        price: 49.99,
        description: "A rare and powerful Brainrot character with unique abilities and stunning visual effects.",
        image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Mystic+Brainrot",
        featured: true
    },
    {
        id: 2,
        name: "Golden Garama",
        category: "garama",
        price: 89.99,
        description: "Premium Garama with exclusive golden skin and enhanced stats for competitive gameplay.",
        image: "https://via.placeholder.com/400x300/f093fb/ffffff?text=Golden+Garama",
        featured: true
    },
    {
        id: 3,
        name: "Fire Dragon",
        category: "dragon",
        price: 129.99,
        description: "Legendary Fire Dragon mount with flame effects and blazing speed. One of the rarest items!",
        image: "https://via.placeholder.com/400x300/f5576c/ffffff?text=Fire+Dragon",
        featured: true
    },
    {
        id: 4,
        name: "Ice Brainrot",
        category: "brainrot",
        price: 39.99,
        description: "Cool and collected Ice Brainrot with freezing abilities and arctic theme.",
        image: "https://via.placeholder.com/400x300/4facfe/ffffff?text=Ice+Brainrot",
        featured: false
    },
    {
        id: 5,
        name: "Shadow Garama",
        category: "garama",
        price: 69.99,
        description: "Stealthy Shadow Garama perfect for night missions with darkness manipulation powers.",
        image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Shadow+Garama",
        featured: false
    },
    {
        id: 6,
        name: "Thunder Dragon",
        category: "dragon",
        price: 149.99,
        description: "Epic Thunder Dragon with lightning strikes and storm-summoning capabilities.",
        image: "https://via.placeholder.com/400x300/667eea/ffffff?text=Thunder+Dragon",
        featured: false
    },
    {
        id: 7,
        name: "Rainbow Brainrot",
        category: "brainrot",
        price: 59.99,
        description: "Vibrant Rainbow Brainrot with multi-colored effects and cheerful personality.",
        image: "https://via.placeholder.com/400x300/f093fb/ffffff?text=Rainbow+Brainrot",
        featured: false
    },
    {
        id: 8,
        name: "Crystal Garama",
        category: "garama",
        price: 79.99,
        description: "Beautiful Crystal Garama with transparent crystalline body and light refraction effects.",
        image: "https://via.placeholder.com/400x300/4facfe/ffffff?text=Crystal+Garama",
        featured: false
    }
];

// Initialize data in localStorage if not exists
function initializeData() {
    if (!localStorage.getItem('brainrotItems')) {
        localStorage.setItem('brainrotItems', JSON.stringify(defaultItems));
    }
}

// Get all items from localStorage
function getItems() {
    const items = localStorage.getItem('brainrotItems');
    return items ? JSON.parse(items) : [];
}

// Get item by ID
function getItemById(id) {
    const items = getItems();
    return items.find(item => item.id === parseInt(id));
}

// Add new item
function addItem(item) {
    const items = getItems();
    const newItem = {
        ...item,
        id: Date.now() // Simple ID generation
    };
    items.push(newItem);
    localStorage.setItem('brainrotItems', JSON.stringify(items));
    return newItem;
}

// Update item
function updateItem(id, updatedData) {
    const items = getItems();
    const index = items.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        items[index] = { ...items[index], ...updatedData };
        localStorage.setItem('brainrotItems', JSON.stringify(items));
        return items[index];
    }
    return null;
}

// Delete item
function deleteItem(id) {
    const items = getItems();
    const filteredItems = items.filter(item => item.id !== parseInt(id));
    localStorage.setItem('brainrotItems', JSON.stringify(filteredItems));
}

// Get featured items
function getFeaturedItems() {
    const items = getItems();
    return items.filter(item => item.featured);
}

// Filter items by category
function getItemsByCategory(category) {
    const items = getItems();
    if (category === 'all') {
        return items;
    }
    return items.filter(item => item.category === category);
}

// Initialize data on load
initializeData();
