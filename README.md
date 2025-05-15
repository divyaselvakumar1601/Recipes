# 🍽️ Recipes API

A full-stack CRUD API for managing food recipes, built with Node.js, Express, and MongoDB.

## 🚀 Live API
[https://recipes-api-xao8.onrender.com](https://recipes-api-xao8.onrender.com)

## 📦 Features
- Create, Read, Update, Delete recipes
- Category filter (e.g., Breakfast, Lunch)
- MongoDB + Mongoose models

## 📌 Endpoints

### GET all recipes
`GET /recipes`

### POST a new recipe
`POST /recipes`
```json
{
  "title": "Pasta",
  "ingredients": "Pasta, sauce",
  "instructions": "Cook and mix",
  "category": "Lunch"
}
