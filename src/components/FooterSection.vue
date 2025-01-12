<template>
  <footer
    class="bg-gradient-to-br from-primary to-secondary/90 py-8 text-center"
  >
    <div class="container mx-auto px-4">
      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="text-light hover:text-secondary transition-colors duration-300"
        >
          <i class="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          class="text-light hover:text-secondary transition-colors duration-300"
        >
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          class="text-light hover:text-secondary transition-colors duration-300"
        >
          <i class="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="mailto:shuruqalharbi@outlook.com"
          class="text-light hover:text-secondary transition-colors duration-300"
        >
          <i class="fas fa-envelope text-2xl"></i>
        </a>
      </div>

      <!-- Copyright Text -->
      <p class="text-light text-sm md:text-base">
        &copy; 2024 Shuruq Alharbi. All Rights Reserved.
      </p>

      <!-- Optional: Back to Top Button -->
      <button
        class="mt-4 px-4 py-2 bg-secondary text-light rounded-lg hover:bg-light hover:text-secondary transition-colors duration-300"
        @click="scrollToTop"
      >
        Back to Top
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<!-- Add FontAwesome for Icons -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
