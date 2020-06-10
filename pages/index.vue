<template>
  <div class="min-h-screen min-w-screen" @mousewheel.shift.exact="onZoomChange">
    <TopBar
      :width="width"
      :min-width="minWidth"
      :max-width="maxWidth"
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
import { DEFAULT_MIN_WIDTH, DEFAULT_MAX_WIDTH } from '~/lib/constants';

const SHIFT_KEY_CODE = 16;
export default {
  data() {
    return {
      width: DEFAULT_MIN_WIDTH,
      maxWidth: DEFAULT_MAX_WIDTH,
      minWidth: DEFAULT_MIN_WIDTH,
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
    this.setMinAndMaxWidth();
    const defaultWidth = Math.round((this.maxWidth - this.minWidth) * 0.6);
    this.onWidthChange(this.maxWidth > 450 ? defaultWidth : this.maxWidth);

    window.addEventListener('resize', _ => {
      this.setMinAndMaxWidth();
      this.onWidthChange(this.width);
    });
    window.addEventListener('keydown', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = true;
    });
    window.addEventListener('keyup', event => {
      const { keyCode } = event;
      if (keyCode === SHIFT_KEY_CODE) this.isZoomActive = false;
    });
  },
  destroyed() {
    window.addEventListener('resize', _ => {
      this.setMinAndMaxWidth();
      this.onWidthChange(this.width);
    });
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
    setMinAndMaxWidth() {
      this.maxWidth = Math.round(window.innerWidth * 0.9);
      this.minWidth = Math.round(this.maxWidth * 0.2);
    },
    setIsZoomActive(value) {
      this.isZoomActive = value;
    },
    onZoomChange(event) {
      const { deltaX } = event;
      if (deltaX > 0 && this.width < this.maxWidth)
        this.onWidthChange(this.width + 50);
      if ((deltaX < 0) & (this.width > this.minWidth))
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
        newWidthValue > this.maxWidth
          ? this.maxWidth
          : newWidthValue < this.minWidth
          ? this.minWidth
          : newWidthValue;
      this.width = safeWidthValue;
    },
    addStream(channelName) {
      const streamNameKey = channelName.toLowerCase();
      if (!this.isExistingStream(streamNameKey)) {
        this.streams = [
          ...this.streams,
          {
            width: '100%',
            height: DEFAULT_MIN_WIDTH,
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
