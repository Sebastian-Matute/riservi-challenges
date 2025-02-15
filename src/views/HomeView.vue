<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentos</template>

      En la raíz de este proyecto también se encontraran los archivos que fueron
      enviados para cada prueba con sus respectivas respuestas, estos se encuentran la ruta '/src/answers'. 
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Explicación</template>

      En el documento word donde se encuentra la explicación de la prueba,
      tambien se encuentra una explicación de algunos puntos que tuve en cuenta
      al desarrollar la solución.
    </WelcomeItem>
  </main>
</template>

<script setup>
import WelcomeItem from "../components/WelcomeItem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
</script>
