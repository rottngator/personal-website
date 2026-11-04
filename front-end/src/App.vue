<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteSidebar from './components/SiteSidebar.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="site-shell">
    <SiteSidebar />

    <div class="main-column">
      <header class="topbar">
        <span><span class="status-dot"></span> FIELD STATION / MIDWEST, USA</span>
        <span class="topbar-right">A PERSONAL SITE — NOT AN ACTUAL PARK</span>
      </header>

      <main id="main-content">
        <RouterView />
      </main>

      <SiteFooter />
    </div>
  </div>
</template>
