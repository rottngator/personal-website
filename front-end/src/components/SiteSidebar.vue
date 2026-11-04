<script setup>
import { useRoute } from 'vue-router'
import { navigation } from '../data/navigation'

const route = useRoute()
</script>

<template>
  <aside class="sidebar" aria-label="Site navigation and status">
    <RouterLink class="brand" to="/" aria-label="Gator Field Notes home">
      <span class="brand-mark" aria-hidden="true">G</span>
      <span class="brand-name">GATOR<br><strong>FIELD NOTES</strong></span>
    </RouterLink>

    <p class="sidebar-label">PERSONAL ARCHIVE <span>90s INSPIRED</span></p>

    <nav class="site-nav" aria-label="Main navigation">
      <span class="nav-heading">TRAIL MAP</span>
      <RouterLink
        v-for="item in navigation"
        :key="item.path"
        :to="item.path"
        class="nav-link"
        :class="{ 'is-active': route.path === item.path }"
        :aria-current="route.path === item.path ? 'page' : undefined"
      >
        <span class="nav-number">{{ item.number }}</span>
        <span>{{ item.label }}</span>
        <span class="nav-arrow" aria-hidden="true">↗</span>
      </RouterLink>
    </nav>

    <section class="sidebar-card" aria-labelledby="status-heading">
      <p class="card-eyebrow">RANGER STATION / STATUS</p>
      <h2 id="status-heading">The gates are open.</h2>
      <p class="sidebar-copy">Currently listening to “What If...?” by HIMALAYAS + The Haunt.</p>
      <audio controls preload="none" aria-label="Play What If...? by HIMALAYAS and The Haunt">
        <source src="/music/What_If.mp3" type="audio/mpeg">
        Your browser does not support audio playback.
      </audio>
      <p class="sidebar-copy reading"><span>ON THE NIGHTSTAND</span><br>Goth — Otsuchi</p>
    </section>

    <div class="sidebar-outposts">
      <span class="nav-heading">OTHER OUTPOSTS</span>
      <a href="https://gatorgutz.carrd.co" target="_blank" rel="noreferrer">Carrd <span>↗</span></a>
      <a href="https://github.com/rottngator" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      <a href="https://steamcommunity.com/profiles/76561198392106811/" target="_blank" rel="noreferrer">Steam <span>↗</span></a>
    </div>
  </aside>
</template>
