<template>
  <div class="home-page">
    <section class="hero" aria-labelledby="home-heading">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> HEY, HI. YOU FOUND ME.</p>
        <h1 id="home-heading">Welcome to my<br>little corner<br>of the <em>wild.</em></h1>
        <p class="hero-description">I’m gator. I like dinosaurs, games where things try to eat you, spooky stories, and making this little corner of the internet feel like mine.</p>
        <RouterLink class="button-link" to="/about">A BIT ABOUT ME <span aria-hidden="true">→</span></RouterLink>
        <p class="hero-small handwritten-note">please don’t feed the dinosaurs</p>
      </div>
      <div class="hero-art">
        <img src="/images/about/games/pathoftitans.jpg" alt="Path of Titans game art featuring two dinosaurs">
        <div class="photo-note">
          <span>My current<br>dinosaur-game hole:</span>
          <strong>Path of Titans</strong>
        </div>
        <span class="image-caption">pictured: big lizards doing their thing</span>
      </div>
    </section>

    <section class="welcome-grid" aria-label="Introduction and recent update">
      <article class="paper-card welcome-card">
        <p class="card-eyebrow">A LITTLE ABOUT ME</p>
        <h2>Heya, I’m gator.</h2>
        <p>I’m a Midwest web-development-and-design grad building a small home on the internet. This place is where I talk about my interests, keep track of what I’m making, and occasionally remember to update things.</p>
        <RouterLink class="text-link" to="/about">MORE ABOUT ME <span aria-hidden="true">→</span></RouterLink>
      </article>
      <article class="dispatch-card">
        <p class="card-eyebrow">A LITTLE SITE UPDATE <span>11.03.26</span></p>
        <h2>Turns out I missed having a website.</h2>
        <p>I started this thing last December, wandered off for a while, and came back wanting dinosaurs everywhere. So here we are. I’m still figuring it out as I go.</p>
        <span class="dispatch-mark handwritten-note">thanks for stopping by!</span>
      </article>
    </section>

    <section class="interests-section" aria-labelledby="interests-heading">
      <div class="section-heading">
        <div>
          <p class="card-eyebrow">THINGS I KEEP COMING BACK TO</p>
          <h2 id="interests-heading">The stuff I’m into lately</h2>
        </div>
        <RouterLink class="text-link" to="/treasures">VIEW COLLECTION <span aria-hidden="true">→</span></RouterLink>
      </div>
      <div class="interest-list">
        <article class="interest-item">
          <span class="interest-number">01</span>
          <div>
            <h3>Dinosaurs & old bones</h3>
            <p>Ancient animals, natural history, and the slightly unreasonable amount of time I can spend thinking about them.</p>
          </div>
          <span class="interest-symbol" aria-hidden="true">✳</span>
        </article>
        <article class="interest-item">
          <span class="interest-number">02</span>
          <div>
            <h3>Creature games</h3>
            <p>Jurassic Park, The Isle, Path of Titans, Terrible Lizards — if it has big creatures, I’m probably interested.</p>
          </div>
          <span class="interest-symbol" aria-hidden="true">⌁</span>
        </article>
        <article class="interest-item">
          <span class="interest-number">03</span>
          <div>
            <h3>Horror & oddities</h3>
            <p>Spooky stories, suspicious woods, and all the strange little things that make life interesting.</p>
          </div>
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
