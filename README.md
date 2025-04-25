# 🪙 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time cryptocurrency price tracking, similar to CoinMarketCap. Built as part of an internship assignment for XivTech.

## 🚀 Features

- Displays data for 5 crypto assets in a responsive table
- Simulates live price updates using `setInterval`
- All state is managed using Redux Toolkit
- Color-coded percentage changes (green for positive, red for negative)
- Mobile/tablet responsive with horizontal scroll

## 🛠️ Tech Stack

- React (Vite)
- Redux Toolkit
- JavaScript (ES6+)
- CSS for styling and responsiveness

## 🧠 Architecture

- **Redux Slice:** All crypto asset data is stored in a slice (`cryptoSlice.js`)
- **Mock WebSocket:** Simulated real-time updates via `setInterval`
- **State Flow:** Redux state is updated every 2 seconds and reflected across components

## 📦 Installation & Setup

```bash
git clone https://github.com/Yadav003/Crypto-Tracker.git
cd crypto-tracker
npm install
npm run dev

## The Demo Video link is  
