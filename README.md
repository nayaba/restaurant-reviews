# restaurant-reviews

## Restaurant
- name: string
- location: string
- photo: string
- review: ref Id

## Review
- name: string
- title: string
- body: string
- rating: number

## Routes

GET all restaurants -> /api/restaurants
GET single restaurant -> /api/restaurants/:id
POST single restaurant -> /api/restaurants