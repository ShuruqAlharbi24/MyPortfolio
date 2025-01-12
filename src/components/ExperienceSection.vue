<template>
  <section
    id="experience"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary/90 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-light mb-12" data-aos="fade-down">
        My <span class="text-secondary">Experience</span>
      </h2>
      <div class="space-y-8 max-w-2xl mx-auto">
        <!-- Web Developer Intern -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-right"
        >
          <h3 class="text-2xl font-bold text-primary mb-2">
            Web Developer Intern
          </h3>
          <p class="text-lg text-secondary mb-4">
            Quickstep Company | December 2023 - June 2024
          </p>
          <ul class="list-disc list-inside text-secondary text-left">
            <li>
              Developed responsive web applications using Vue.js and Tailwind
              CSS.
            </li>
            <li>
              Collaborated with the design team to implement user-friendly
              interfaces.
            </li>
          </ul>
        </div>

        <!-- Information System Intern -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-left"
        >
          <h3 class="text-2xl font-bold text-primary mb-2">
            Information System Intern
          </h3>
          <p class="text-lg text-secondary mb-4">
            Ministry of National Guard Health Affairs | June 2022 - May 2022
          </p>
          <ul class="list-disc list-inside text-secondary text-left">
            <li>Developed diagrams to outline logical operational steps.</li>
            <li>
              Assisted in team-based IT projects and supported technology
              rollout and maintenance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",
};
</script>
