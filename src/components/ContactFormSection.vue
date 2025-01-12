<template>
  <section
    id="contact-form"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary/90 py-20"
  >
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-light mb-12" data-aos="fade-down">
        Contact <span class="text-secondary">Me</span>
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <!-- Email Card -->
        <div
          class="p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 transform transition-transform duration-300 hover:scale-105"
        >
          <div class="text-5xl text-secondary mb-6">📧</div>
          <h3 class="text-2xl font-bold text-light mb-4">Email</h3>
          <a
            href="mailto:shuruqalharbi@outlook.com"
            class="text-lg text-light hover:text-secondary transition-colors duration-300"
          >
            shuruqalharbi@outlook.com
          </a>
        </div>

        <!-- Phone Card -->
        <div
          class="p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 transform transition-transform duration-300 hover:scale-105"
        >
          <div class="text-5xl text-secondary mb-6">📞</div>
          <h3 class="text-2xl font-bold text-light mb-4">Phone</h3>
          <a
            href="tel:+966583265442"
            class="text-lg text-light hover:text-secondary transition-colors duration-300"
          >
            +966 58 326 5442
          </a>
        </div>
      </div>

      <!-- Optional: Call-to-Action Message -->
      <p
        class="text-lg text-light mt-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Feel free to reach out! I’d love to hear from you. 😊
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactFormSection",
};
</script>
