<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { contentPages } from '../../data/pages'

const route = useRoute()
const page = computed(() => contentPages[route.name])
</script>

<template>
  <div class="content-page">
    <section class="page-heading">
      <p class="eyebrow"><span class="eyebrow-line"></span> {{ page.code }}</p>
      <h1>{{ page.title }}</h1>
      <p>{{ page.intro }}</p>
    </section>

    <section v-if="page.facts" class="profile-layout" aria-label="About gator">
      <article class="profile-card paper-card">
        <p class="card-eyebrow">RANGER IDENTIFICATION</p>
        <dl class="fact-list">
          <div v-for="fact in page.facts" :key="fact[0]">
            <dt>{{ fact[0] }}</dt><dd>{{ fact[1] }}</dd>
          </div>
        </dl>
        <img class="profile-flair" src="/images/decor/about/demi_flag.gif" alt="Demisexual pride flag">
      </article>
      <div class="page-sections">
        <article v-for="section in page.sections" :key="section.title" class="content-card">
          <p class="card-eyebrow">FIELD NOTE</p>
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </article>
      </div>
    </section>

    <section v-else class="page-sections">
      <article v-for="section in page.sections" :key="section.title" class="content-card">
        <div class="content-card-heading">
          <p class="card-eyebrow">FIELD NOTE</p>
          <span v-if="section.tag" class="status-tag">{{ section.tag }}</span>
        </div>
        <h2>{{ section.title }}</h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </article>
      <RouterLink v-if="route.name === 'guestbook'" class="button-link" to="/about">MEET YOUR GUIDE <span aria-hidden="true">→</span></RouterLink>
    </section>

    <section class="page-return">
      <RouterLink class="text-link" to="/">← BACK TO THE ENTRANCE</RouterLink>
    </section>
  </div>
</template>
