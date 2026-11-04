<script setup>
import { navigation } from '../data/navigation'
</script>

<template>
  <section class="page-heading">
    <p class="eyebrow"><span class="eyebrow-line"></span> SITE DIRECTORY / 08</p>
    <h1>Choose your trail.</h1>
    <p>Every path through this little preserve, in one place.</p>
  </section>

  <section class="sitemap-grid" aria-label="All site pages">
    <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" class="sitemap-link">
      <span>{{ item.number }}</span><strong>{{ item.label }}</strong><span aria-hidden="true">↗</span>
    </RouterLink>
  </section>
</template>
