# 🎢 GSAP Scroll Animation with 3D Cubes – Next.js Project

This is a visually engaging scroll-triggered animation project using **Next.js**, **GSAP**, **ScrollTrigger**, and **Lenis**. It showcases 3D cubes with smooth scrolling and animated transitions. Perfect for learning scroll-based effects and advanced front-end interactions.

## 🔗 Live Demo  
[👉 View the Live Project on Vercel]((https://woxro-test.vercel.app/))  

---

## ✨ Features

- ⚛️ Built with **Next.js**
- 🌀 **Lenis** for buttery smooth scrolling
- 🎞️ Scroll animations powered by **GSAP + ScrollTrigger**
- 🧊 3D cube transformations with dynamic image faces
- 🖼️ Parallax-like blur, scale, and opacity effects on text
- 📱 Fully responsive and performance-optimized

---

## 🚀 Tech Stack

- **Next.js** – React framework for production
- **GSAP** – Animation engine
- **ScrollTrigger** – For scroll-based animation control
- **Lenis** – Smooth scrolling behavior
- **HTML/CSS/JS** – DOM manipulation via `useRef`
- **Vercel** – Instant deployment and hosting

---
📸 Screenshots

![image](https://github.com/user-attachments/assets/5c51aff8-ce53-4c00-8df7-091e333f3287)

![image](https://github.com/user-attachments/assets/da116cfc-e153-4559-83b2-89218e09dd0f)

![image](https://github.com/user-attachments/assets/516e135d-0a39-4b7a-94da-f5fd0baa0ef8)

![image](https://github.com/user-attachments/assets/d270e1b2-760f-4d8a-a949-ca265940ec73)

![image](https://github.com/user-attachments/assets/416c64f7-c10f-42f1-b716-cf1329da72f8)






## 📂 Folder Structure

```bash
.
├── components/
│ └── Hero.jsx
├── public/
│ └── assets/
│ └── img1.jpeg ... imgN.jpeg
├── pages/
│ └── index.js
├── cubeData.js
├── styles/
│ └── globals.css
├── tsconfig.json
├── README.md
└── ...
```


---

## ⚙️ How to Run Locally

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git

npm install

npm run dev
```

-----
🧪 How It Works

requestAnimationFrame ensures all animations wait for DOM to be ready.

Cubes are dynamically loaded with images using React useRef.

GSAP ScrollTrigger updates styles on scroll progress, modifying:

cube position, rotation, depth (translate3d)

text blur, scale, and opacity

The Lenis library updates scroll timing via GSAP's internal ticker.

-----
🙋‍♂️ Author
Adithyan S
GitHub: @adithyanS007

📝 License
This project is licensed under the MIT License. See LICENSE for details.
