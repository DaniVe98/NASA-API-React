# APOD NASA API App

A simple but powerful web app that shows a new image every day, built with React and optimized for performance and user experience.

# Features

✅ Daily Refresh – A new image is displayed every 24 hours.  
✅ Smart Caching – Images are cached in localStorage so reloads are instant ⚡.  
✅ Automatic Expiration – The cache refreshes automatically after 24 hours.  
✅ Responsive Design – Works smoothly on desktop and mobile.  
✅ Deployed Live – Check it out here 👉 LIVE DEMO: https://nasa-api-cache-react.netlify.app/

# Tech Stack

⚛️ React  
🖼️ Public Image API (APOD from NASA)  
💾 LocalStorage for caching  
🌐 Deployment with Vercel / Netlify  

# Project Structure  
├── src  
│   ├── components   # Reusable components  
│   ├── hooks        # Custom hooks  
│   ├── utils        # Helpers (cache, date handling)  
│   └── App.jsx      # Main app  
└── public

# How It Works

1. On first load, the app fetches today’s image.  
2. It stores the image + timestamp in localStorage.  
3. If you reload, it uses the cached image instantly.  
4. After 24h, the cache expires and a new image is fetched.  

# Screenshots
<img width="1365" height="636" alt="image" src="https://github.com/user-attachments/assets/4543acf1-c366-4c4a-b92e-5d60e8133613" />
<img width="1350" height="638" alt="image" src="https://github.com/user-attachments/assets/0070f795-c43c-4aee-972d-e1521b3cf968" />
<img width="1365" height="652" alt="image" src="https://github.com/user-attachments/assets/2aea8aeb-1ac0-4d63-9e20-db12e9c2f1e0" />


# Contributing

Pull requests are welcome! If you have ideas to improve the project, feel free to fork and create a PR.

# License

MIT License – Free to use and modify.
