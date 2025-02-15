<script setup lang="ts">
defineProps<{
  msg: string
  subtitle: string
}>()
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h1 class="green">{{ subtitle }}</h1>
    <h3>
      En este pequeño proyecto se encuentran mis respuestas a los ejercicios propuestos.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h2,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2,
  .greetings h3 {
    text-align: left;
  }
}
</style>
