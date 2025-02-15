<script setup lang="ts">
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import { answers } from "../assets/anwsers";
</script>

<template>
  <main>
    <h1>Sentencia SQL</h1>
    <p>Para testear revisar .xls</p>
    <code-highlight language="javascript" >
      <pre>
        {{ answers.second }}
      </pre>
    </code-highlight>
  </main>
</template>
