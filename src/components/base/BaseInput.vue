<template>
  <input
    :class="['base-input', { 'with-err': withErr }]"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <span :class="['warn', { visible: withErr }]">{{ err }}</span>
</template>
<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
      validator: (value) => {
        return ["text", "number", "password"].includes(value)
      },
    },
    err: {
      type: String,
      required: false,
      default: "",
    },
  },

  computed: {
    withErr() {
      return this.err.length > 0
    },
  },
}
</script>
<style scoped lang="scss">
.base-input {
  display: block;
  width: 100%;
  outline: none;
  max-width: 250px;
  color: #111111;
  padding: 13px 10px 13px 13px;
  border-radius: 7px;
  font-size: 15px;
  line-height: 16px;
  font-weight: 600;
  border: none;
  border: 1px solid;
  border-color: #9c9c9c;
  &:disabled {
    background-color: rgb(0 0 0 / 5%);
  }
  &:focus {
    border-color: #111111;
  }
}

.with-err {
  border-color: #ff0000;
}

.warn {
  display: inline-block;
  height: 15px;
  font-size: 15px;
  line-height: 15px;
  padding-left: 5px;
  color: #7a7a7a;
  opacity: 0;
  transition: opacity 0.2s;
}

.visible {
  opacity: 1;
}
</style>
