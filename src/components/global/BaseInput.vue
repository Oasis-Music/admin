<template>
  <div class="container">
    <input
      :class="['base-input', { 'with-err': withErr }]"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Transition name="fade">
      <span class="warn" v-if="withErr">{{ err }}</span>
    </Transition>
  </div>
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
$base-err-area: 18px;

.container {
  position: relative;
}

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
  margin-bottom: $base-err-area;
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
  display: block;
  position: absolute;
  bottom: -$base-err-area;
  height: 15px;
  font-size: 15px;
  line-height: 15px;
  padding-left: 5px;
  color: #7a7a7a;
}
</style>
