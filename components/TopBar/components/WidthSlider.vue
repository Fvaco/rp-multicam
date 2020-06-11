<template>
  <div class="flex items-center w-full justify-center">
    <input
      v-model.number="sliderValue"
      step="1"
      type="range"
      class="w-full pl-4 sm:w-1/2 sm:p-0"
      :min="minWidth"
      :max="maxWidth"
    />
    <div class="font-semibold text-purple-300 pl-2">{{ sliderPercent }}%</div>
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
    sliderPercent() {
      return Math.round((this.width * 100) / this.maxWidth);
    },
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
<style lang="postcss" scoped>
input[type='range'] {
  height: 25px;
  -webkit-appearance: none;
  background: transparent;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: theme(colors.purple.500);
  border-radius: 1px;
}
input[type='range']::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: theme(colors.purple.500);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: theme(colors.purple.500);
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: theme(colors.purple.500);
  border-radius: 1px;
}
input[type='range']::-moz-range-thumb {
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: theme(colors.purple.500);
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: theme(colors.purple.500);
  border-radius: 2px;
}
input[type='range']::-ms-fill-upper {
  background: theme(colors.purple.500);
  border-radius: 2px;
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: theme(colors.purple.500);
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: theme(colors.purple.500);
}
input[type='range']:focus::-ms-fill-upper {
  background: theme(colors.purple.500);
}
</style>
