<script setup lang="ts">
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import { answers } from "../assets/anwsers";
</script>

<template>
  <main>
    <h1>Función PHP</h1>
    <p>Para testear usar archivo .php</p>
    <code-highlight language="javascript">
      <pre>{{ answers.first }}</pre>
    </code-highlight>
  </main>
</template>
