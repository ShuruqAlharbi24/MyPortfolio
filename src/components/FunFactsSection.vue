<template>
  <section
    id="fun-facts"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-secondary mb-12" data-aos="fade-down">
        Fun <span class="text-primary">Facts</span>
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:justify-center"
      >
        <!-- Music Lover -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <h3 class="text-5xl font-bold text-secondary mb-6">🎶</h3>
          <p class="text-secondary">
            Music is my therapy. Always have a playlist for every mood!
          </p>
        </div>

        <!-- Caffeine Addict -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-5xl font-bold text-secondary mb-6">☕</h3>
          <p class="text-secondary">
            Fueled by caffeine. Coffee > Sleep, any day!
          </p>
        </div>

        <!-- Travel Enthusiast -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 class="text-5xl font-bold text-secondary mb-6">✈️</h3>
          <p class="text-secondary">
            Wanderlust is real. Always planning the next adventure!
          </p>
        </div>

        <!-- Manhua Reader -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 class="text-5xl font-bold text-secondary mb-6">📖</h3>
          <p class="text-secondary">
            Addicted to manhua. Always binge-reading the latest series!
          </p>
        </div>

        <!-- PlayStation Gamer -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 class="text-5xl font-bold text-secondary mb-6">🎮</h3>
          <p class="text-secondary">
            PlayStation fanatic. Let’s game and conquer worlds!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FunFactsSection",
};
</script>
