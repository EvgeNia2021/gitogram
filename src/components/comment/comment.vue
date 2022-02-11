<template>
  <div class="c-comment">
    <p>
      <span class="issues-username">{{ issueUsername }}</span>
     <span class="issues-text">{{ issueText }}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  props: {
    issueUsername: {
      type: String,
      required: true
    },
    issueText: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
