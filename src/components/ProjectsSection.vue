<template>
  <section
    id="projects"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-secondary mb-12" data-aos="fade-down">
        My <span class="text-primary">Projects</span>
      </h2>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1: Taibah Map -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">Taibah Map Visualization</h3>
          <p class="text-secondary mb-6">
            A web-based system for visualizing Taibah University's campus map, helping students and
            visitors navigate the campus efficiently.
          </p>

          <!-- Swiper for Project 1 -->
          <swiper
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :navigation="true"
            :modules="modules"
            class="mySwiper mb-6"
          >
            <swiper-slide>
              <img
                src="@/assets/project1/1.png"
                alt="Taibah Map Image 1"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project1/2.png"
                alt="Taibah Map Image 2"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project1/3.png"
                alt="Taibah Map Image 3"
                class="w-full rounded-lg"
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-center space-x-4">
            <a
              href="https://taibahmap.com"
              target="_blank"
              class="px-6 py-2 bg-primary text-light rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Live Preview
            </a>
            <a
              href="https://github.com/ShuruqAlharbi24/TaibahMap"
              target="_blank"
              class="px-6 py-2 bg-secondary text-light rounded-lg hover:bg-secondary/90 transition-colors duration-300"
            >
              View Code
            </a>
          </div>
        </div>

        <!-- Project 2: Booking Management -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">Booking Management System</h3>
          <p class="text-secondary mb-6">
            A dashboard for managing bookings, including halls, meeting rooms, beneficiaries,
            supervisors, and admin roles.
          </p>

          <!-- Swiper for Project 2 -->
          <swiper
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :navigation="true"
            :modules="modules"
            class="mySwiper mb-6"
          >
            <swiper-slide>
              <img
                src="@/assets/project2/1.png"
                alt="Booking Management Image 1"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project2/2.png"
                alt="Booking Management Image 2"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project2/3.png"
                alt="Booking Management Image 3"
                class="w-full rounded-lg"
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-center space-x-4">
            <router-link
              to="/project2"
              class="px-6 py-2 bg-primary text-light rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Live Preview
            </router-link>
            <a
              target="_blank"
              href="https://github.com/ShuruqAlharbi24/BookingManagement"
              class="px-6 py-2 bg-secondary text-light rounded-lg hover:bg-secondary/90 transition-colors duration-300"
            >
              View Code
            </a>
          </div>
        </div>

        <!-- Project 3: Cleaning Service -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">Cleaning Service Landing Page</h3>
          <p class="text-secondary mb-6">
            A responsive landing page for a cleaning service, built with HTML, CSS, and JavaScript
            to showcase my front-end development skills.
          </p>

          <!-- Swiper for Project 3 -->
          <swiper
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :navigation="true"
            :modules="modules"
            class="mySwiper mb-6"
          >
            <swiper-slide>
              <img
                src="@/assets/project3/1.png"
                alt="Cleaning Service Image 1"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project3/2.png"
                alt="Cleaning Service Image 2"
                class="w-full rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/project3/3.png"
                alt="Cleaning Service Image 3"
                class="w-full rounded-lg"
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-center space-x-4">
            <a
              href="https://shuruqalharbi24.github.io/CleaningService/"
              target="_blank"
              class="px-6 py-2 bg-primary text-light rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Live Preview
            </a>
            <a
              href="https://github.com/ShuruqAlharbi24/CleaningService"
              target="_blank"
              class="px-6 py-2 bg-secondary text-light rounded-lg hover:bg-secondary/90 transition-colors duration-300"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules' // Import Swiper modules
import 'swiper/swiper-bundle.css' // Import Swiper styles

export default {
  name: 'ProjectsSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination], // Add Swiper modules
    }
  },
}
</script>

<style scoped>
/* Custom Swiper styles */
.swiper-container {
  max-width: 100%; /* Ensure Swiper doesn't overflow */
  margin: 0 auto; /* Center the Swiper */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
