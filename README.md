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

## Description
Grammable Cuisine is an app that allows users to post instagram worthy restaurant locations for other users to find.  Restaurants can be searched by cuisine, dietary restriction, color scheme, or all three!