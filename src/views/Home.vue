<template>
  <div>
    <!-- AppMenu Section -->
    <AppMenu />

    <!-- Home Section -->
    <HomeSection data-aos="fade-up" />

    <!-- About Section -->
    <AboutSection data-aos="fade-down" />

    <!-- Skills Section -->
    <SkillsSection data-aos="fade-left" />

    <!-- Experience Section -->
    <ExperienceSection data-aos="fade-right" />

    <!-- Projects Section -->
    <ProjectsSection data-aos="zoom-in" />

    <!-- Certifications Section -->
    <CertificationsSection data-aos="zoom-out" />

    <!-- Contact Form Section -->
    <ContactFormSection data-aos="flip-up" />

    <!-- Fun Facts Section -->
    <FunFactsSection data-aos="flip-down" />

    <!-- FooterSection Section -->
    <FooterSection />
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AppMenu from '@/components/AppMenu.vue'
import FooterSection from '@/components/FooterSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CertificationsSection from '@/components/CertificationsSection.vue'
import ContactFormSection from '@/components/ContactFormSection.vue'
import FunFactsSection from '@/components/FunFactsSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    CertificationsSection,
    ContactFormSection,
    FunFactsSection,
    FooterSection,
    AppMenu,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
body {
  margin: 0;
  font-family: 'Oswald', serif;
  background-color: #6e44ff; /* Light Lavender */
  color: #ffc2e2; /* Dark Gray */
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
