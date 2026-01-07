// Sample product data (this will be stored in localStorage)
const defaultItems = [
    {
        id: 1,
        name: "Mystic Brainrot",
        category: "brainrot",
        price: 49.99,
        description: "A rare and powerful Brainrot character with unique abilities and stunning visual effects.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EMystic Brainrot%3C/text%3E%3C/svg%3E",
        featured: true
    },
    {
        id: 2,
        name: "Golden Garama",
        category: "garama",
        price: 89.99,
        description: "Premium Garama with exclusive golden skin and enhanced stats for competitive gameplay.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f093fb'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EGolden Garama%3C/text%3E%3C/svg%3E",
        featured: true
    },
    {
        id: 3,
        name: "Fire Dragon",
        category: "dragon",
        price: 129.99,
        description: "Legendary Fire Dragon mount with flame effects and blazing speed. One of the rarest items!",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f5576c'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EFire Dragon%3C/text%3E%3C/svg%3E",
        featured: true
    },
    {
        id: 4,
        name: "Ice Brainrot",
        category: "brainrot",
        price: 39.99,
        description: "Cool and collected Ice Brainrot with freezing abilities and arctic theme.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%234facfe'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EIce Brainrot%3C/text%3E%3C/svg%3E",
        featured: false
    },
    {
        id: 5,
        name: "Shadow Garama",
        category: "garama",
        price: 69.99,
        description: "Stealthy Shadow Garama perfect for night missions with darkness manipulation powers.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23764ba2'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EShadow Garama%3C/text%3E%3C/svg%3E",
        featured: false
    },
    {
        id: 6,
        name: "Thunder Dragon",
        category: "dragon",
        price: 149.99,
        description: "Epic Thunder Dragon with lightning strikes and storm-summoning capabilities.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EThunder Dragon%3C/text%3E%3C/svg%3E",
        featured: false
    },
    {
        id: 7,
        name: "Rainbow Brainrot",
        category: "brainrot",
        price: 59.99,
        description: "Vibrant Rainbow Brainrot with multi-colored effects and cheerful personality.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f093fb'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3ERainbow Brainrot%3C/text%3E%3C/svg%3E",
        featured: false
    },
    {
        id: 8,
        name: "Crystal Garama",
        category: "garama",
        price: 79.99,
        description: "Beautiful Crystal Garama with transparent crystalline body and light refraction effects.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%234facfe'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3ECrystal Garama%3C/text%3E%3C/svg%3E",
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
    // Simple ID generation - in production, use crypto.randomUUID() or server-generated IDs
    const newItem = {
        ...item,
        id: Date.now()
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
