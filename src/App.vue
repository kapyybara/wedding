<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import CountdownSection from './components/CountdownSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import MonogramSection from './components/MonogramSection.vue'
import StorySection from './components/StorySection.vue'
import EventsSection from './components/EventsSection.vue'
import ItinerarySection from './components/ItinerarySection.vue'
import GallerySection from './components/GallerySection.vue'
import RsvpSection from './components/RsvpSection.vue'
import GiftSection from './components/GiftSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import FloatingNav from './components/FloatingNav.vue'
import BackToTop from './components/BackToTop.vue'
import FloatingRsvp from './components/FloatingRsvp.vue'
import PageLoader from './components/PageLoader.vue'
</script>

<template>
  <PageLoader />
  <main class="min-h-screen bg-cream">
    <ScrollProgress />
    <FloatingNav />
    <HeroSection class="snap-anchor" />
    <div id="welcome" class="snap-anchor"><WelcomeSection /></div>
    <div id="events" class="snap-anchor"><EventsSection /></div>
    <div id="countdown" class="snap-anchor"><CountdownSection /></div>
    <div id="story" class="snap-anchor"><StorySection /></div>
    <MonogramSection />
    <div id="gallery" class="snap-anchor"><GallerySection /></div>
    <div id="itinerary" class="snap-anchor"><ItinerarySection /></div>
    <div id="rsvp" class="snap-anchor"><RsvpSection /></div>
    <div id="gift" class="snap-anchor"><GiftSection /></div>
    <ContactSection />
    <FooterSection />
    <BackToTop />
    <FloatingRsvp />
  </main>
</template>
