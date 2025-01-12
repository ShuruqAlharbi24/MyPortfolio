<template>
  <nav class="fixed top-0 w-full bg-primary/80 backdrop-blur-sm shadow-md z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo or Brand Name -->
      <div class="text-2xl font-bold text-light">Shuruq Alharbi</div>

      <!-- Hamburger Icon for Mobile -->
      <button
        class="md:hidden text-light focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Desktop Links -->
      <ul class="hidden md:flex space-x-8">
        <li v-for="link in links" :key="link.text" class="relative group">
          <a
            :href="link.href"
            class="text-light hover:text-secondary transition duration-300"
            :class="{ 'font-bold': activeSection === link.href.slice(1) }"
          >
            {{ link.text }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu (Dropdown) -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-primary/90 backdrop-blur-sm shadow-lg z-50"
    >
      <ul class="flex flex-col space-y-4 p-4">
        <li v-for="link in links" :key="link.text">
          <a
            :href="link.href"
            class="block text-light hover:text-secondary transition duration-300"
            :class="{ 'font-bold': activeSection === link.href.slice(1) }"
            @click="closeMenu"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      links: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Experience", href: "#experience" },
        { text: "Projects", href: "#projects" },
        { text: "Certifications", href: "#certifications" },
        { text: "Contact", href: "#contact-form" },
        { text: "Fun Facts", href: "#fun-facts" },
      ],
      activeSection: "home",
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    setActiveSection() {
      const sections = this.links.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight - 50
          ) {
            this.activeSection = section;
            break;
          }
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.setActiveSection);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.setActiveSection);
  },
};
</script>

<style scoped>
/* Smooth transition for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
