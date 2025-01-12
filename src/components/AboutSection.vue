<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/10 text-secondary px-6 py-12"
  >
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-12">
      <!-- Image -->
      <div class="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src="@/assets/images/image2.png"
          alt="Shuruq"
          class="max-w-[400px] max-h-[400px] object-contain rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- About Text -->
      <div class="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          About <span class="text-primary">Me</span>
        </h2>
        <p class="text-lg md:text-xl leading-relaxed mb-8">
          Hey there! I’m Shuruq, a web developer who’s part coder, part problem-solver, and
          full-time coffee enthusiast. I turn "I have no idea what I’m doing" into "Hey, it actually
          works!" on a daily basis. When I’m not wrestling with CSS (why does it hate me?) or
          debugging code that worked perfectly yesterday, I’m probably exploring new tech or
          laughing at my own coding jokes (they’re hilarious, I promise). I believe in making the
          web a cooler place—one pixel and one semicolon at a time. Let’s create something amazing
          together and maybe share a virtual high-five when it works!
        </p>
        <a
          href="#contact-form"
          class="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
        >
          Let’s Chat!
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>
