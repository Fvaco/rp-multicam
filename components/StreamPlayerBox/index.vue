<template>
  <div
    class="bg-purple-900 relative shadow-lg rounded-lg overflow-hidden m-1"
    :style="dimensionsStyle"
  >
    <div
      class="pr-3 pl-4 py-2 text-purple-200 flex justify-between items-center font-semibold"
    >
      <div>@{{ stream.channel }}</div>
      <button
        class="text-xl tracking-wide"
        @click="() => removeStream(stream.channel)"
      >
        <i class="mdi mdi-close"></i>
      </button>
    </div>
    <div>
      <div :id="stream.channel"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stream: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    removeStream: {
      type: Function,
      required: true
    }
  },
  computed: {
    dimensionsStyle() {
      return {
        width: `${this.width}px`
      };
    }
  }
};
</script>
