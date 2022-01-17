<template>
  <div class="c-header">
    <div class="g-container">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./header-bar.scss" scoped>
</style>
