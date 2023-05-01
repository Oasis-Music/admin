<template>
  <div class="wrapper">
    <p class="sub-title">Button:</p>
    <ul class="ui-items-list">
      <li>
        <BaseButton @click="handleButtonClick">Google</BaseButton>
      </li>
      <li>
        <BaseButton :disabled="true">Disabled</BaseButton>
      </li>
      <li>
        <BaseButton load>Loading</BaseButton>
      </li>
      <li>
        <BaseButton
          :load="toggleLoading"
          @click="toggleLoading = !toggleLoading"
          >Toggle loading</BaseButton
        >
      </li>
      <li style="flex-grow: 1">
        <BaseButton class="full-width-button">Full width</BaseButton>
      </li>
    </ul>
    <p class="sub-title">Input:</p>
    <ul class="ui-items-list input-list">
      <li>
        <BaseInput />
      </li>
      <li>
        <BaseInput placeholder="Name" v-model="inputValue" />
      </li>
      <li>
        <BaseInput disabled placeholder="Disabled" v-model="inputValue" />
      </li>
      <li>
        <BaseInput
          type="password"
          placeholder="Password"
          v-model="inputValue"
        />
      </li>
      <li>
        <BaseInput type="number" placeholder="Number" />
      </li>
      <li>
        <BaseInput
          placeholder="With validation"
          v-model="inputWithValidationValue"
          :err="inputValidationErr"
        />
      </li>
      <li>
        <BaseInput placeholder="Error" err="your err message" />
      </li>
    </ul>
    <p class="sub-title">Checkbox: {{ baseCheckbox }}</p>
    <ul class="ui-items-list input-list">
      <li>
        <BaseCheckbox v-model="baseCheckbox" />
      </li>
      <li>
        <BaseCheckbox label="Google" v-model="baseCheckbox" />
      </li>
      <li>
        <BaseCheckbox
          label="Disable next"
          v-model="customCheckbox"
          @update:modelValue="handleChecked"
        />
      </li>
      <li>
        <BaseCheckbox
          :label="disabledCheckbox ? 'Disabled' : 'Available'"
          v-model="disabledCheckbox"
          :disabled="customCheckbox"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleLoading: false,
      inputValue: "Google",
      inputWithValidationValue: "",
      baseCheckbox: false,
      customCheckbox: true,
      disabledCheckbox: true,
    }
  },

  computed: {
    inputValidationErr() {
      const max = 7

      if (this.inputWithValidationValue.length > max) {
        return `max ${max} values`
      }
      return ""
    },
  },

  methods: {
    handleButtonClick() {
      console.log("ccc")
    },
    handleChecked(value) {
      console.log("custom checkbox handler:", value)
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px 3%;
}

.sub-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
}

.ui-items-list {
  display: flex;
  list-style: none;
  margin-top: 5px;
  padding: 0;
  & > li {
    padding-right: 15px;
    margin-bottom: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.input-list {
  flex-wrap: wrap;
  & > li {
    flex-basis: 25%;
  }
}

.full-width-button {
  width: 100%;
}
</style>
