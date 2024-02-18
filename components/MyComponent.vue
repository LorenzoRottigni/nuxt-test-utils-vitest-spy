<script setup lang="ts">
import type { MyComponentProps } from '~/types/component-props';

defineProps<MyComponentProps>();

const exampleMethod = () => {
  console.log('hello world');
};
</script>

<template>
  <div>
    {{ title }}
    <button @click="exampleMethod">Click me</button>
  </div>
</template>
