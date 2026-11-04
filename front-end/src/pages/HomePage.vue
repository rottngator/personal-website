<template>
  <div class="home-page">
    <section class="hero" aria-labelledby="home-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> WELCOME, VISITOR <span>NO. 001</span></p>
        <h1 id="home-heading">A little corner<br>of the <em>wild.</em></h1>
        <p class="hero-description">A personal field guide to the things I can’t stop thinking about: code, creatures, games, and everything a little strange.</p>
        <RouterLink class="button-link" to="/about">MEET YOUR GUIDE <span aria-hidden="true">→</span></RouterLink>
        <p class="hero-small">PLEASE STAY ON THE TRAIL. THE TRAIL IS MOSTLY THIS WEBSITE.</p>
      </div>
      <div class="hero-art">
        <img src="/images/about/games/pathoftitans.jpg" alt="Path of Titans game art featuring two dinosaurs">
        <div class="specimen-stamp">
          <span>SPECIMEN FILE</span>
          <strong>NO. 001</strong>
          <small>ANCIENT FAUNA / HANDLE WITH CARE</small>
        </div>
        <span class="image-caption">A VIEW FROM THE PRESERVE — PATH OF TITANS</span>
      </div>
    </section>

    <section class="welcome-grid" aria-label="Introduction and recent update">
      <article class="paper-card welcome-card">
        <p class="card-eyebrow">VISITOR CENTER / YOU ARE HERE</p>
        <h2>Heya, I’m gator.</h2>
        <p>I’m a Midwest web-development-and-design grad building a small home on the internet. This place is where I talk about my interests, keep track of what I’m making, and occasionally remember to update things.</p>
        <RouterLink class="text-link" to="/about">MORE ABOUT ME <span aria-hidden="true">→</span></RouterLink>
      </article>
      <article class="dispatch-card">
        <p class="card-eyebrow">LATEST DISPATCH <span>11.03.26</span></p>
        <h2>New map, same old explorer.</h2>
        <p>The park is getting a fresh coat of paint. This version is built with Vue and inspired by the adventure, wonder, and just-a-little-bit-of-danger of a 90s visitor center.</p>
        <span class="dispatch-mark" aria-hidden="true">FIELD NOTE / 01</span>
      </article>
    </section>

    <section class="interests-section" aria-labelledby="interests-heading">
      <div class="section-heading">
        <div>
          <p class="card-eyebrow">CURRENTLY TRACKING</p>
          <h2 id="interests-heading">Things in the undergrowth</h2>
        </div>
        <RouterLink class="text-link" to="/treasures">VIEW COLLECTION <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="interest-list">
        <article class="interest-item">
          <span class="interest-number">01</span>
          <div><h3>Ancient fauna</h3><p>Dinosaurs, natural history, and the creatures that make the forest feel enormous.</p></div>
          <span class="interest-symbol" aria-hidden="true">✳</span>
        </article>
        <article class="interest-item">
          <span class="interest-number">02</span>
          <div><h3>Creature games</h3><p>Jurassic Park, The Isle, Path of Titans, and Terrible Lizards.</p></div>
          <span class="interest-symbol" aria-hidden="true">⌁</span>
        </article>
        <article class="interest-item">
          <span class="interest-number">03</span>
          <div><h3>Horror & oddities</h3><p>Stories where the dark is interesting, the woods are suspicious, and the vibes are immaculate.</p></div>
          <span class="interest-symbol" aria-hidden="true">◉</span>
        </article>
      </div>
    </section>

    <section class="blinkie-row" aria-label="Vintage web badges">
      <span>FOUND IN THE VISITOR CENTER:</span>
      <img src="/images/blinkies/dinosarecool.gif" alt="Dinosaurs are cool animated badge">
      <img src="/images/blinkies/jurassic_park.gif" alt="Jurassic Park animated badge">
    </section>
  </div>
</template>
