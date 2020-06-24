<template>
  <form
    autocomplete="off"
    class="relative flex my-5 mx-auto items-center w-11/12 md:w-3/4"
  >
    <div v-show="suggestedResults.length" class="suggestion-box">
      <ul>
        <li
          v-for="(result, index) in suggestedResults"
          :key="result.channel"
          :ref="`suggestion-${index}`"
          :tabindex="index + 1"
          class="px-4 py-2 hover:bg-purple-200 focus:bg-purple-200 cursor-pointer outline-none"
          @click="() => onSuggestionSelected(result)"
          @keypress.enter="() => onSuggestionSelected(result)"
          @keydown.down="() => onTabPress(index, 'down')"
          @keydown.up="() => onTabPress(index, 'up')"
          @keydown.tab.prevent.exact="() => onTabPress(index, 'down')"
          @keydown.shift.tab.exact.prevent="() => onTabPress(index, 'up')"
        >
          <div class="font-semibold flex leading-none items-center">
            <div class="text-lg">{{ result.name }}</div>
            <div
              class="ml-2 text-xs px-2 py-1 bg-purple-200 text-purple-800 rounded"
            >
              {{ result.server }}
            </div>
          </div>

          <div class="font-semibold text-sm text-gray-600">
            @{{ result.channel }}
          </div>
        </li>
      </ul>
    </div>

    <input
      ref="search-input"
      :value="newStreamName"
      minlength="1"
      tabindex="1"
      :autofocus="!suggestedResults.length"
      type="search"
      class="py-1 px-4 sm:py-2 flex-1 bg-purple-100 text-purple-800 font-medium rounded-tr-lg rounded-br-lg sm:rounded-tr-none sm:rounded-br-none  rounded-tl-lg rounded-bl-lg text-xl outline-none"
      placeholder="Nombre de un canal..."
      @input="onNewStreamNameChange"
      @keydown.down.exact="() => onTabPress()"
      @keydown.tab.prevent.exact="() => onTabPress()"
    />
    <button
      tabindex="-1"
      class="hidden outline-none sm:block py-1 px-3 sm:py-2 sm:px-4 text-xl border border-purple-700 text-white bg-purple-700 rounded-tr-lg rounded-br-lg"
      type="submit"
      @click.prevent="onAddStream"
    >
      <i class="mdi mdi-plus"></i>
    </button>
  </form>
</template>
<script>
import { getCharactersByQuery } from '~/lib/utils/getCharactersByQuery';
export default {
  props: {
    addStream: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      newStreamName: ''
    };
  },
  computed: {
    suggestedResults() {
      const clearedSearchQuery = this.newStreamName.trim().toLowerCase();
      if (!clearedSearchQuery || clearedSearchQuery.length < 2) return [];
      return getCharactersByQuery(clearedSearchQuery);
    }
  },
  watch: {
    newStreamName(newValue) {
      if (newValue.length) this.$emit('searchQueryAdded', this.newStreamName);
      else this.$emit('searchQueryEmpty');
    }
  },
  methods: {
    onNewStreamNameChange(event) {
      this.newStreamName = event.target.value;
    },
    onTabPress(index = -1, direction = 'down') {
      const isDown = direction === 'down';
      const targetRefIdx = isDown ? index + 1 : index - 1;
      const listRef = this.$refs[`suggestion-${targetRefIdx}`];
      if (!!~targetRefIdx && listRef && listRef.length)
        return listRef[0].focus();
      return this.$refs['search-input'].focus();
    },
    onAddStream() {
      if (!this.newStreamName.length) return;
      this.addStream(this.newStreamName);
      this.newStreamName = '';
      this.$refs['search-input'].focus();
    },
    onSuggestionSelected(suggestionResult) {
      this.newStreamName = suggestionResult.channel;
      this.$refs['search-input'].focus();
      this.onAddStream();
    }
  }
};
</script>
<style lang="postcss" scoped>
.suggestion-box {
  @apply bg-purple-100 text-purple-900;
  @apply absolute py-2 rounded text-left overflow-y-auto;
  top: 100%;
  max-height: 80vh;
}
</style>
