<template>
  <section
    id="certifications"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-secondary mb-12" data-aos="fade-down">
        My <span class="text-primary">Certifications</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Vue.js Certification -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">
            AI Certification
          </h3>
          <p class="text-secondary mb-6">
            The Advanced Pathways in Artificial Intelligence | November 2024
          </p>
          <a
            href="https://drive.google.com/file/d/1lYVxSwDyOtEzijXps-qbMSDD-euvCqio/view?usp=sharing"
            target="_blank"
            class="text-primary font-bold hover:text-secondary transition-colors duration-300"
          >
            View Certificate →
          </a>
        </div>

        <!-- Advanced JavaScript -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">
            DeepLearning.AI
          </h3>
          <p class="text-secondary mb-6">
            Natural Language Processing | Novmber 2024
          </p>
          <a
            href="https://drive.google.com/file/d/1G6Z5C1SN92B_zdj6ef55wJCWrEJTemX2/view?usp=sharing"
            target="_blank"
            class="text-primary font-bold hover:text-secondary transition-colors duration-300"
          >
            View Certificate →
          </a>
        </div>

        <!-- Tailwind CSS Certification -->
        <div
          class="p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 class="text-2xl font-bold text-secondary mb-4">IBM</h3>
          <p class="text-secondary mb-6">
            Introduction to Software Engineering | Jul 2023
          </p>
          <a
            href="https://drive.google.com/file/d/1cy28DQjiu5V2Ud6d69uGJVrquonCjpnV/view?usp=sharing"
            target="_blank"
            class="text-primary font-bold hover:text-secondary transition-colors duration-300"
          >
            View Certificate →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CertificationsSection",
};
</script>
