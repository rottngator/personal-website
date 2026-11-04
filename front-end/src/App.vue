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
        <span><span class="status-dot"></span> SOMEWHERE IN THE MIDWEST</span>
        <span class="topbar-right">COME HAVE A LOOK AROUND</span>
      </header>

      <main id="main-content">
        <RouterView />
      </main>

      <SiteFooter />
    </div>
  </div>
</template>
