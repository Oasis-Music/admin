<template>
  <div :class="['container', { disabled }]">
    <input
      type="checkbox"
      class="base-input"
      :class="['base-input', { disabled }]"
      :disabled="disabled"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <svg
      class="icon"
      :class="{ 'icon-checked': isChecked, 'icon-disabled': disabled }"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path
        v-if="isChecked"
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
      <path
        v-else
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      />
    </svg>
    <label v-if="label">{{ label }}</label>
  </div>
</template>
<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: true,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    isChecked() {
      return this.modelValue
    },
  },
}
</script>
<style scoped lang="scss">
.container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  padding: 9px;
  border-radius: 50%;
}

.disabled {
  color: #757575;
  cursor: not-allowed;
}

.base-input {
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.icon {
  font-size: 2rem;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
}

.icon-checked {
  fill: #00e8c8;
}
.icon-disabled {
  fill: #aeaeae;
}

label {
  color: inherit;
  font-size: inherit;
  font-weight: 500;
  padding-left: 5px;
}
</style>
