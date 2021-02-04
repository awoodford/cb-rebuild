<template>
  <div>
    <a
      :href="data.href"
      :target="data.target"
      :title="data.title"
      class="cta"
      :class="'cta__' + data.theme"
      >{{ data.label }}</a
    >

    <slot v-if="data.type == 'modalTrigger'"></slot>
  </div>
</template>

<script>
export default {
  name: "CTA",
  props: ["data"]
};
</script>
