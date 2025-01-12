<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-cover bg-center relative py-16"
  >
    <!-- Background Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 opacity-90"
    ></div>

    <!-- Content Container -->
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 z-20"
    >
      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src="@/assets/images/image1.png"
          alt="Shuruq"
          class="max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] object-contain rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      <!-- Welcome Text -->
      <div
        class="w-full md:w-1/2 text-center md:text-left"
        data-aos="fade-left"
      >
        <h1 class="text-4xl font-extrabold text-light leading-snug md:text-6xl">
          Hello, I'm <span class="text-primary">Shuruq</span>
        </h1>
        <p class="mt-6 text-lg md:text-xl text-light leading-relaxed">
          A passionate web developer dedicated to creating beautiful and
          functional websites. Let’s collaborate and bring your ideas to life!
        </p>
        <div class="mt-8">
          <a
            href="#about"
            class="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Discover More About Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
};
</script>
