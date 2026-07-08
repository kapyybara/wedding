<script setup lang="ts">
// Decorative lace oval frame rendered as SVG for crisp scaling.
// Purely decorative — hidden from assistive tech.
</script>

<template>
  <svg
    class="lace-oval"
    viewBox="0 0 400 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <radialGradient id="laceShade" cx="50%" cy="45%" r="60%">
        <stop offset="70%" stop-color="#f3efe6" />
        <stop offset="100%" stop-color="#d9d2c2" />
      </radialGradient>
    </defs>

    <!-- scalloped lace ring built from repeated petals -->
    <g>
      <g v-for="n in 40" :key="n" :transform="`rotate(${(360 / 40) * n} 200 160)`">
        <ellipse
          cx="200"
          cy="22"
          rx="13"
          ry="20"
          fill="url(#laceShade)"
          stroke="#cabfa6"
          stroke-width="0.8"
          opacity="0.96"
        />
      </g>
      <g v-for="n in 40" :key="`i-${n}`" :transform="`rotate(${(360 / 40) * n + 4.5} 200 160)`">
        <ellipse
          cx="200"
          cy="42"
          rx="9"
          ry="14"
          fill="url(#laceShade)"
          stroke="#cabfa6"
          stroke-width="0.6"
          opacity="0.92"
        />
      </g>
    </g>

    <!-- inner ring of dots -->
    <g>
      <circle
        v-for="n in 56"
        :key="`d-${n}`"
        :cx="200 + 138 * Math.cos((2 * Math.PI * n) / 56)"
        :cy="160 + 108 * Math.sin((2 * Math.PI * n) / 56)"
        r="3.2"
        fill="#efe9dc"
        stroke="#c9bea4"
        stroke-width="0.5"
      />
    </g>
  </svg>
</template>

<style scoped>
.lace-oval {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35));
}
</style>
