// ⚠️ SECURITY WARNING: This is for demonstration purposes only!
// In production, implement proper server-side authentication with:
// - Secure password hashing (bcrypt, argon2)
// - Session management
// - HTTPS encryption
// - Environment variables for sensitive data
const ADMIN_PASSWORD = 'admin123'; // TODO: Replace with secure authentication
let isAdminLoggedIn = false;

// Navigation
function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile menu toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Setup navigation links
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            navigateToSection(sectionId);
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// Render items
function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div class="item-card" onclick="showItemModal(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="item-image" onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=Image+Not+Found'">
            <span class="item-category">${item.category}</span>
            <h3 class="item-name">${item.name}</h3>
            <p class="item-description">${item.description}</p>
            <div class="item-price">$${item.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// Show item modal
function showItemModal(itemId) {
    const item = getItemById(itemId);
    if (!item) return;
    
    const modal = document.getElementById('item-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" class="item-image" style="margin: 1rem 0;" onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=Image+Not+Found'">
        <p><strong>Category:</strong> <span class="item-category">${item.category}</span></p>
        <p><strong>Price:</strong> <span style="color: var(--primary-color); font-size: 1.5rem; font-weight: bold;">$${item.price.toFixed(2)}</span></p>
        <p><strong>Description:</strong> ${item.description}</p>
        <div style="margin-top: 1.5rem;">
            <p><strong>How to Purchase:</strong></p>
            <ol style="margin-left: 1.5rem; margin-top: 0.5rem;">
                <li>Choose your preferred payment method from the Payment section</li>
                <li>Send the payment with your Roblox username</li>
                <li>Contact us with payment confirmation</li>
                <li>Receive your item within 24 hours!</li>
            </ol>
        </div>
        <button class="btn btn-primary" onclick="closeModal(); navigateToSection('payment');" style="margin-top: 1.5rem; width: 100%;">
            Go to Payment Options
        </button>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('item-modal');
    modal.classList.remove('active');
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('item-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// Setup shop filters
function setupShopFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            const category = btn.getAttribute('data-category');
            const items = getItemsByCategory(category);
            renderItems(items, 'shop-items');
        });
    });
}

// Admin login
function adminLogin() {
    const password = document.getElementById('admin-password').value;
    const errorEl = document.getElementById('login-error');
    
    if (password === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadAdminItems();
        errorEl.textContent = '';
    } else {
        errorEl.textContent = 'Incorrect password. Please try again.';
    }
}

// Admin logout
function adminLogout() {
    isAdminLoggedIn = false;
    document.getElementById('admin-login').style.display = 'block';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('admin-password').value = '';
}

// Setup admin form
function setupAdminForm() {
    const form = document.getElementById('add-item-form');
    const imageUpload = document.getElementById('item-image-upload');
    const imageUrlInput = document.getElementById('item-image');
    const uploadPreview = document.getElementById('upload-preview');
    const previewImage = document.getElementById('preview-image');
    const uploadFilename = document.getElementById('upload-filename');
    let uploadedImageData = null;
    
    // Handle image file upload
    if (imageUpload) {
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Check file size (max 2MB)
                if (file.size > 2 * 1024 * 1024) {
                    alert('Image file is too large! Please choose an image smaller than 2MB.');
                    imageUpload.value = '';
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    uploadedImageData = event.target.result;
                    previewImage.src = uploadedImageData;
                    uploadFilename.textContent = file.name;
                    uploadPreview.style.display = 'block';
                    // Clear URL input when file is uploaded
                    imageUrlInput.value = '';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Use uploaded image data or URL input
        const imageValue = uploadedImageData || imageUrlInput.value;
        
        if (!imageValue) {
            alert('Please upload an image or provide an image URL!');
            return;
        }
        
        const newItem = {
            name: document.getElementById('item-name').value,
            category: document.getElementById('item-category').value,
            price: parseFloat(document.getElementById('item-price').value),
            description: document.getElementById('item-description').value,
            image: imageValue,
            featured: document.getElementById('item-featured').checked
        };
        
        addItem(newItem);
        
        // Reset form and preview
        form.reset();
        uploadedImageData = null;
        uploadPreview.style.display = 'none';
        
        // Reload admin items
        loadAdminItems();
        
        // Refresh displays
        loadFeaturedItems();
        loadShopItems();
        
        alert('Item added successfully!');
    });
}

// Load admin items
function loadAdminItems() {
    const items = getItems();
    const container = document.getElementById('admin-items-list');
    
    container.innerHTML = items.map(item => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${item.name}</h4>
                <p>${item.category} - $${item.price.toFixed(2)} ${item.featured ? '⭐ Featured' : ''}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn btn-danger" onclick="deleteItemAdmin(${item.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Delete item (admin)
function deleteItemAdmin(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        deleteItem(itemId);
        loadAdminItems();
        loadFeaturedItems();
        loadShopItems();
    }
}

// Load featured items
function loadFeaturedItems() {
    const featuredItems = getFeaturedItems();
    renderItems(featuredItems, 'featured-items');
}

// Load shop items
function loadShopItems() {
    const items = getItems();
    renderItems(items, 'shop-items');
}

// Handle enter key on admin password
function setupAdminPasswordEnter() {
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                adminLogin();
            }
        });
    }
}

// Initialize app
function init() {
    setupNavigation();
    setupMobileMenu();
    setupModal();
    setupShopFilters();
    setupAdminForm();
    setupAdminPasswordEnter();
    loadFeaturedItems();
    loadShopItems();
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
