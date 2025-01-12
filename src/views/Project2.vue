<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-secondary mb-6 sm:mb-12">
        Project 2 Booking Management Dashboard
      </h2>
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="modules"
        class="mySwiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <swiper-slide v-for="i in 9" :key="i">
          <div
            v-if="!imageUrls[i - 1]"
            class="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center"
          >
            Loading image {{ i }}...
          </div>
          <img
            v-else
            :src="imageUrls[i - 1]"
            :alt="`Project 2 Image ${i}`"
            class="w-full h-full object-contain rounded-lg"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { ref, onMounted } from 'vue'

export default {
  name: 'Project2',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const imageUrls = ref([])

    const preloadImages = async () => {
      for (let i = 1; i <= 9; i++) {
        try {
          const imageModule = await import(`@/assets/project2/${i}.png`)
          imageUrls.value.push(imageModule.default)
        } catch (error) {
          console.error(`Error loading image ${i}:`, error)
          imageUrls.value.push('') // Fallback for missing images
        }
      }
    }

    onMounted(() => {
      preloadImages().then(() => {
        console.log('Loaded image URLs:', imageUrls.value)
      })
    })

    return {
      modules: [Navigation, Pagination],
      imageUrls,
    }
  },
}
</script>

<style scoped>
/* No additional styles needed since Tailwind is used */
</style>
