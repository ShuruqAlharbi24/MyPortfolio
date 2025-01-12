import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css' // Import Tailwind CSS
import router from './router'
import AOS from 'aos' // Import AOS
import 'aos/dist/aos.css' // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  once: true, // Whether animation should happen only once
})

const app = createApp(App)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')
