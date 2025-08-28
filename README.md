# Lugano Eventi Telegram Bot (Google Apps Script)

A Telegram bot that provides up-to-date information about events in **Lugano, Switzerland**, sourced from [luganoeventi.ch](https://luganoeventi.ch/en/).

---

## 🛡️ Badges

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15281999.svg)](https://doi.org/10.5281/zenodo.15281999)


---

## ✨ Features

This bot allows users to:

- 🗓️ Discover events happening today, tomorrow, or during the week
- 🔍 Search for events by keyword
- 📍 View event details including title, date, location, and link
- ⚡ Get fast and reliable responses directly in Telegram
- 🔄 Stay updated with the latest events from LuganoEventi.ch

---

## 📂 Project Structure

```
telegram-bot-lugano-eventi/
├── .env.example          # Example environment file showing required variables (BOT_TOKEN)
└── src/                  # Main source code folder
    ├── api.js            # Handles API requests to fetch event data from luganoeventi.ch
    ├── config.js         # Configuration settings (e.g., API endpoints, constants)
    ├── handlers.js       # Logic for processing Telegram bot commands and user interactions
    ├── main.js           # Entry point for running the bot
    ├── messages.js       # Predefined bot messages and templates for user responses
    └── utils.js          # Utility functions for data formatting, parsing, and helpers
```

---


## 🛠 Setup

### 1. Create your Telegram Bot
- Message [@BotFather](https://t.me/BotFather)
- `/newbot` → follow prompts → note down your **Bot Token**

### 2. Create Apps Script project
- Go to [script.google.com](https://script.google.com)
- Create a new project
- Add `.gs` files matching this repo’s structure and paste in the corresponding code

### 3. Add Script Properties (Secrets)
In **Project Settings → Script Properties**, add:

| Property Name     | Value |
|-------------------|-------|
| `TELEGRAM_TOKEN`  | Bot token from BotFather |
| `WEBAPP_URL`      | Will be set after you deploy as a Web App (step 4) |

> ❗ **Never** commit these values to GitHub

### 4. Deploy as a Web App
- **Deploy > New deployment**
- Select **Web app**
- Execute as: **Me**
- Who has access: **Anyone**
- Deploy and copy the Web App URL
- Update your Script Property `WEBAPP_URL` with this URL

### 5. Set Telegram Webhook
- In Apps Script, run the `setWebhook()` function to link your bot to the Web App

---

## 💡 Usage

Once the bot is running, you can interact with it directly in Telegram.  
Here are some example commands you can try:

- `/oggi` – Shows events happening today in Lugano  
- `/domani` – Shows events happening tomorrow  
- `/settimana` – Lists events for the current week  
- `/cerca <keyword>` – Searches events by keyword

Commands are designed to be short and intuitive, so you can quickly find what you’re looking for without scrolling through long menus.

---

## 💻 Local Development with clasp *(optional)*

You can use [clasp](https://github.com/google/clasp) to push/pull code between Google Apps Script and your local machine, then sync with GitHub.

---

## 🛡️ Security Notes

- This repo is **safe for public sharing** — no tokens or IDs in code.
- All sensitive values live in Script Properties (server‑side, in your account only).
- Don’t paste webhook URLs, tokens, or private calendar details into issues or commits.

---

## 📜 License

MIT — feel free to fork, improve, and adapt.
