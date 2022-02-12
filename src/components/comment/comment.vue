<template>
  <div class="c-comment">
    <p v-if="ifEmpty">
      <span>{{ ifEmpty }}</span>
    </p>
    <p v-else>
      <span class="issues-username">{{ issueUsername }}</span>
     <span class="issues-text">{{ issueText }}</span>
    </p>
  </div>
</template>

<script>

export default {
  props: {
    issueUsername: String,
    issueText: String,
    ifEmpty: String
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
