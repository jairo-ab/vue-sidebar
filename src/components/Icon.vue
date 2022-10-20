 <script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props){
    const icon = computed(() => {
      return props.icon
    })

    return icon
  }
})
</script>

<template>
  <iconify-icon :icon="icon" :class="$attrs.class" mode="style" />
</template>

<style>
    span.iconify {
        background: #5551;
        border-radius: 100%;
        min-width: 1em;
        min-height: 1em;
        display: block;
    }
</style>