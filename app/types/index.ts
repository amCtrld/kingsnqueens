export interface Meal {
  id: string
  name: string
  description: string
  price: number
  image: string
  featured: boolean
}

export interface MenuItem {
  id: string
  category: "breakfast" | "lunch-dinner" | "beverages-desserts"
  name: string
  description: string
  price: number
  image: string
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  rating: number
}

export interface GalleryImage {
  id: string
  imageUrl: string
  category: "food" | "space" | "events"
}

export interface CateringPackage {
  id: string
  name: string
  description: string
  price: number
  servings: number
}

export interface Inquiry {
  name: string
  phone: string
  email: string
  eventType: string
  message: string
  createdAt: Date
}

export interface Reservation {
  name: string
  guests: number
  date: string
  time: string
  message: string
  createdAt: Date
}
