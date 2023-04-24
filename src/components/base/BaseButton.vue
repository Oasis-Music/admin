<template>
  <button :class="['base-button', { load }]" :disabled="disabled">
    <div v-if="load" class="spinner" />
    <slot v-else>base button</slot>
  </button>
</template>
<script>
export default {
  props: {
    load: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  mounted() {
    console.log(this.$props)
  },
}
</script>
<style scoped lang="scss">
.base-button {
  cursor: pointer;
  user-select: none;
  padding: 13px 17px;
  border-radius: 7px;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  border: none;
  color: #fff;
  background-color: #111111;
  transition: all 0.3s;
  &:hover:not(:disabled) {
    color: #111111;
    background-color: #00e8c8;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #3e3e3e;
  }
}

.load {
  &:hover:not(:disabled) {
    color: #fff;
    background-color: #111111;
  }
}

.spinner {
  width: 16px;
  height: 16px;
  margin: 0 auto;
  border: 3px #00caaf solid;
  border-top: 3px #0cffe7 solid;
  border-radius: 50%;
  animation: spCircRot 0.6s infinite linear;
}

@keyframes spCircRot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
