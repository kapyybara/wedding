<script setup lang="ts">
// Decorative dove with a lace-textured wing. Purely ornamental.
</script>

<template>
  <svg
    viewBox="0 0 200 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <!-- body -->
    <path
      d="M40 96c10 14 34 22 58 16 20-5 33-20 40-38 3-8 9-14 18-16-6 9-7 16-5 23 8-3 16-3 24 2-9 1-15 5-19 12-7 13-22 28-46 33-30 6-58-4-70-21-4-6-3-11 0-11 0 0 0 0 0 0z"
      fill="#f1ece2"
      stroke="#cabfa6"
      stroke-width="1"
    />
    <!-- head + beak -->
    <circle cx="150" cy="64" r="9" fill="#f1ece2" stroke="#cabfa6" stroke-width="1" />
    <path d="M158 62l12-3-9 8z" fill="#b69b6a" />
    <circle cx="152" cy="62" r="1.4" fill="#3c4a31" />
    <!-- lace wing made of small ellipses -->
    <g stroke="#cabfa6" stroke-width="0.6">
      <ellipse cx="70" cy="70" rx="9" ry="5" fill="#f1ece2" transform="rotate(-25 70 70)" />
      <ellipse cx="84" cy="64" rx="11" ry="5.5" fill="#f1ece2" transform="rotate(-25 84 64)" />
      <ellipse cx="98" cy="60" rx="12" ry="6" fill="#f1ece2" transform="rotate(-25 98 60)" />
      <ellipse cx="112" cy="58" rx="11" ry="5.5" fill="#f1ece2" transform="rotate(-25 112 58)" />
      <circle v-for="n in 8" :key="n" :cx="62 + n * 8" :cy="82 - n * 1.5" r="2.4" fill="#efe9dc" />
    </g>
    <!-- tail -->
    <path d="M40 96l-26 6 22-14z" fill="#f1ece2" stroke="#cabfa6" stroke-width="1" />
  </svg>
</template>
