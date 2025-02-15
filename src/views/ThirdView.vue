<script setup lang="ts">
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import { answers } from "../assets/anwsers";
</script>

<template>
  <main>
    <h1>Vue y CSS</h1>
    <p>Para ver el resultado hacer <RouterLink to="/third-challenge/showcase">click aquí</RouterLink>.</p>
    <code-highlight language="javascript">
      <pre>
       {{ answers.third }}
      </pre>
    </code-highlight>
  </main>
</template>
