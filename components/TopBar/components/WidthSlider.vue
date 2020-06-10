<template>
  <div class="flex items-center w-full justify-center">
    <input
      v-model.number="sliderValue"
      step="1"
      class="w-full p-0 sm:w-1/2 outline-none h-1 border-none bg-purple-300 appearance-none"
      type="range"
      :min="minWidth"
      :max="maxWidth"
    />
    <div class="font-semibold text-purple-300 pl-2">{{ sliderValue }}px</div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    minWidth: {
      type: Number,
      required: true
    },
    maxWidth: {
      type: Number,
      required: true
    },
    onWidthChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    sliderValue: {
      get() {
        return this.width;
      },
      set(newValue) {
        this.onWidthChange(newValue);
      }
    }
  }
};
</script>
