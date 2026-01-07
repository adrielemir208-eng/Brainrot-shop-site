# 🧠 Brainrot Shop

A modern, responsive e-commerce website for selling premium Roblox items and in-game assets.

## ✨ Features

- **🏠 Homepage** - Eye-catching hero section with featured items
- **🛍️ Shop** - Filterable product catalog with multiple categories
- **🔧 Admin Dashboard** - Easy-to-use item management system
- **💳 Multiple Payment Options** - PayPal, Venmo, Cash App, and Cryptocurrency
- **📱 Fully Responsive** - Works perfectly on all devices
- **🎨 Modern Design** - Fun, colorful theme inspired by Roblox

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in a web browser
3. **Browse the shop** - No installation required!

## 🔐 Admin Access

- Navigate to the Admin section
- Default password: `admin123`
- **⚠️ Change this password in `js/app.js` for production!**

## 📁 File Structure

```
Brainrot-shop-site/
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   ├── app.js          # Application logic
│   └── data.js         # Data management
├── images/             # Product and payment images
├── DOCUMENTATION.md    # Detailed guide
└── README.md           # This file
```

## 🌐 Deployment

Deploy to any static hosting service:

### GitHub Pages
1. Push code to GitHub
2. Enable Pages in repository settings
3. Your site is live!

### Netlify / Vercel
1. Sign up for free account
2. Drag and drop your folder
3. Instant deployment!

See **DOCUMENTATION.md** for detailed deployment instructions.

## 🛠️ Managing Items

### Adding Items
1. Login to Admin Dashboard
2. Fill out the item form
3. Click "Add Item"
4. Item appears instantly!

### Item Details
- **Name** - Product name
- **Category** - Brainrot, Garama, or Dragon
- **Price** - USD amount
- **Description** - Item details
- **Image URL** - Link to product image
- **Featured** - Show on homepage

## 💰 Payment Methods Supported

- 💙 PayPal
- 💰 Venmo  
- 💵 Cash App
- ₿ Bitcoin
- 💎 Ethereum

**Note:** Update payment details in `index.html` with your actual payment information.

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... more options ... */
}
```

### Change Admin Password
Edit `js/app.js`:
```javascript
const ADMIN_PASSWORD = 'your-password-here';
```

### Add Categories
Edit the category options in `index.html` and filter buttons in the shop section.

## 📖 Documentation

For detailed documentation including:
- Complete deployment guide
- Item management
- Customization options
- Payment setup
- Troubleshooting
- Security best practices

**See DOCUMENTATION.md**

## 🔒 Security Notes

⚠️ **Important for Production:**
1. Change the default admin password
2. Implement server-side authentication
3. Use HTTPS
4. Consider moving from localStorage to a proper database
5. Never store payment credentials in code

## 🌟 Features Highlights

### For Shop Owners
- ✅ No coding required to add/remove items
- ✅ Real-time updates
- ✅ Mobile-friendly admin panel
- ✅ Easy payment instructions

### For Customers
- ✅ Beautiful, intuitive interface
- ✅ Detailed item information
- ✅ Multiple payment options
- ✅ Works on all devices

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available for personal and commercial use.

## 🆘 Support

Need help?
1. Check **DOCUMENTATION.md** for detailed guides
2. Open an issue on GitHub
3. Review troubleshooting section

## 🎮 About

Brainrot Shop is designed specifically for the Roblox community to easily sell premium items and in-game assets. The clean, modern interface makes browsing and purchasing items a breeze!

---

**Made with ❤️ for the Roblox community**

Ready to start selling? Open `index.html` and get started! 🚀
