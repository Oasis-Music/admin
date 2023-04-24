<template>
  <div class="wrapper">
    <p class="sub-title">Buttons:</p>
    <ul class="button-list">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleLoading: false,
    }
  },

  methods: {
    handleButtonClick() {
      console.log("ccc")
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

.button-list {
  display: flex;
  list-style: none;
  margin-top: 5px;
  padding: 0;
  & > li {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.full-width-button {
  width: 100%;
}
</style>
