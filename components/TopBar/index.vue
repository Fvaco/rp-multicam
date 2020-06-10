<template>
  <div
    id="top-bar"
    :class="{ collapsed: isCollapsed }"
    @mouseover="isCollapsed = false"
    @mouseleave="isCollapsed = true"
  >
    <div class="flex flex-col justify-center">
      <SearchBox
        :add-stream="addStream"
        @searchQueryAdded="hasSearchQuery = true"
        @searchQueryEmpty="hasSearchQuery = false"
      />
      <WidthSlider :on-width-change="onWidthChange" :width="width" />
    </div>
    <div
      class="text-purple-200 h-10 py-1 text-2xl flex items-center justify-center"
    >
      <i class="mdi mdi-chevron-down"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    isStreamsListEmpty: {
      type: Boolean,
      required: false,
      default: true
    },
    addStream: {
      type: Function,
      required: true
    },
    onWidthChange: {
      type: Function,
      required: true
    }
  },
  data() {
    return { streamCollapsed: true, hasSearchQuery: false };
  },
  computed: {
    isCollapsed: {
      get() {
        return (
          this.streamCollapsed &&
          !this.hasSearchQuery &&
          !this.isStreamsListEmpty
        );
      },
      set(newValue) {
        this.streamCollapsed = newValue;
      }
    }
  }
};
</script>
<style scoped lang="postcss">
#top-bar {
  @apply fixed top-0;
  @apply px-5 flex justify-center flex-col text-center w-full z-10 bg-purple-900 shadow-md;
  @apply transition transition-all duration-200 ease-in-out;
  &.collapsed {
    transform: translateY(calc(-100% + theme('spacing.10')));
  }
}
</style>
