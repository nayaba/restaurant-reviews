import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RestaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import RestaurantDetails from './pages/RestaurantDetails'
import ReviewForm from './pages/ReviewForm'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      let res = await axios.get(`${BASE_URL}/api/restaurants`)
      console.log(res)
      setRestaurants(res.data)
    }
    getRestaurants()
  }, [])

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/restaurants"
            element={<RestaurantList restaurants={restaurants} />}
          />
          <Route path="add" element={<RestaurantForm />} />
          <Route
            path="restaurant/:restaurantId/review/:reviewId"
            element={<ReviewDetails />}
          />
          <Route
            path="restaurants/:restaurantId"
            element={<RestaurantDetails />}
          />
          <Route
            path="restaurants/:restaurantId/review"
            element={<ReviewForm />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
