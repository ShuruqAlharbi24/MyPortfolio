<template>
  <section
    id="skills"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-secondary mb-12" data-aos="fade-down">
        My <span class="text-primary">Skills</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend Skills -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <div class="text-5xl text-primary mb-6">💻</div>
          <h3 class="text-2xl font-bold text-secondary mb-4">Frontend</h3>
          <ul class="text-secondary">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <!-- Tools & Platforms -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="text-5xl text-primary mb-6">🛠️</div>
          <h3 class="text-2xl font-bold text-secondary mb-4">
            Tools & Platforms
          </h3>
          <ul class="text-secondary">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Supabase</li>
          </ul>
        </div>

        <!-- Other Skills -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="text-5xl text-primary mb-6">🌟</div>
          <h3 class="text-2xl font-bold text-secondary mb-4">Other Skills</h3>
          <ul class="text-secondary">
            <li>Problem-solving and Troubleshooting</li>
            <li>Collaborative Teamwork</li>
            <li>Effective Communication</li>
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
};
</script>
