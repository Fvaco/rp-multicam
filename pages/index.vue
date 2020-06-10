<template>
  <div
    class=" min-h-screen min-w-screen"
    @mousewheel.shift.exact="onZoomChange"
  >
    <TopBar
      :width="width"
      :add-stream="addStream"
      :on-width-change="onWidthChange"
      :is-streams-list-empty="isStreamsListEmpty"
    />
    <div class="flex flex-wrap justify-center items-center px-2 pb-12 pt-24">
      <div
        v-if="isStreamsListEmpty"
        class="absolute inset-0 text-3xl text-center text-purple-700 opacity-50 font-thin mt-56"
      >
        Escribe el nombre de un canal para empezar 🚀
      </div>
      <StreamPlayerBox
        v-for="stream in streams"
        :key="stream.channel"
        tabindex="-1"
        :class="{ 'pointer-events-none': isZoomActive }"
        :stream="stream"
        :width="width"
        :remove-stream="removeStream"
      />
    </div>
  </div>
</template>

<script>
import { createStreamPlayers } from '~/lib/utils/createStreamPlayers';
const SHIFT_KEY_CODE = 16;
export default {
  data() {
    return {
      width: 630,
      isCollapsed: true,
      hasUnrendered: true,
      isZoomActive: false,
      streams: []
    };
  },
  computed: {
    unrenderedStreams() {
      return this.streams.filter(stream => !stream.rendered);
    },
    height() {
      return Math.round(this.width / 1.78);
    },
    isStreamsListEmpty() {
      return !this.streams.length;
    }
  },
  watch: {
    width() {
      document.querySelectorAll('iframe').forEach(iframe => {
        iframe.height = this.height;
      });
    },
    hasUnrendered() {
      if (this.hasUnrendered) {
        setTimeout(() => {
          this.addUnrederedStreams();
        }, 0);
      }
    }
  },
  mounted() {
    this.addUnrederedStreams();
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = true;
    });
    window.addEventListener('keyup', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = false;
    });
  },
  beforeDestroy() {
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = true;
    });
    window.addEventListener('keyup', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = false;
    });
  },
  methods: {
    setIsZoomActive(value) {
      this.isZoomActive = value;
    },
    onZoomChange(event) {
      const { deltaX } = event;
      if (deltaX > 0 && this.width < 1000) this.onWidthChange(this.width + 50);
      if ((deltaX < 0) & (this.width > 200))
        this.onWidthChange(this.width - 50);
    },
    addUnrederedStreams() {
      createStreamPlayers(this.unrenderedStreams, {
        initialHeight: this.height
      });
      this.streams = this.streams.map(stream => ({
        ...stream,
        rendered: true
      }));
      this.hasUnrendered = false;
    },
    removeStream(channel) {
      this.streams = this.streams.filter(stream => stream.channel !== channel);
    },
    isExistingStream(streamId) {
      return !!~this.streams.findIndex(stream => stream.channel === streamId);
    },
    onWidthChange(newWidthValue) {
      const safeWidthValue =
        newWidthValue > 1000 ? 1000 : newWidthValue < 200 ? 200 : newWidthValue;
      this.width = safeWidthValue;
    },
    addStream(channelName) {
      const streamNameKey = channelName.toLowerCase();
      if (!this.isExistingStream(streamNameKey)) {
        this.streams = [
          ...this.streams,
          {
            width: '100%',
            height: 200,
            channel: streamNameKey,
            rendered: false
          }
        ];
        this.hasUnrendered = true;
      }
      setTimeout(() => {
        const element = document.getElementById(streamNameKey);
        const topBar = document.getElementById('top-bar');
        const topBarHeight = topBar.getBoundingClientRect().height + 20;

        const elementPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          topBarHeight;
        window.scrollTo(0, elementPosition);
      }, 100);
    }
  }
};
</script>
