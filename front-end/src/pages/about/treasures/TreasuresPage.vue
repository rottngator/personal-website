<script setup>
import { favoriteCharacters, favoriteCollections } from '../../../data/pages'
</script>

<template>
  <div class="treasures-page">
    <section class="page-heading">
      <p class="eyebrow"><span class="eyebrow-line"></span> CABINET OF CURIOSITIES / 06</p>
      <h1>Little treasures</h1>
      <p>A few games, stories, songs, and characters I keep finding my way back to.</p>
    </section>

    <section class="collection-content" aria-label="Favorite media and characters">
      <div class="favorites-grid">
        <article v-for="collection in favoriteCollections" :key="collection.title" class="favorite-card">
          <p class="card-eyebrow">COLLECTION / {{ collection.items.length }}</p>
          <h2>{{ collection.title }}</h2>
          <ul>
            <li v-for="item in collection.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
      <div class="section-heading character-heading">
        <div>
          <p class="card-eyebrow">FAVORITE CHARACTERS</p>
          <h2>Familiar faces from other worlds</h2>
        </div>
      </div>
      <div class="character-grid">
        <article v-for="character in favoriteCharacters" :key="character.name" class="character-card">
          <img :src="`/images/about/favcharacters/${character.image}`" :alt="character.name" loading="lazy">
          <h3>{{ character.name }}</h3>
        </article>
      </div>
    </section>

    <section class="page-return">
      <RouterLink class="text-link" to="/">← BACK TO THE ENTRANCE</RouterLink>
    </section>
  </div>
</template>
