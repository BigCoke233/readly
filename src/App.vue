<script setup>
import { reactive, computed } from 'vue';
import { useTimerStore } from './stores/timer'
import { useTextStore } from './stores/text'

const timerStore = useTimerStore();
const textStore = useTextStore();

const textSelection = reactive({
  lang: "简体中文",
  style: "professional"
})
const currentText = computed(() => textStore.getText(textSelection.lang, textSelection.style))
</script>

<template>
  <div class="mx-auto w-xl">

    <header class="text-center my-5">
      <h1 class="text-3xl text-emerald-500 font-bold">Readly</h1>
      <p>Test your reading speed in different languages and contexts.</p>
    </header>

    <section class="flex flex-col gap-5">

      <div id="text-select">
        <select id="language-select" v-model="textSelection.lang">
          <option v-for="(item, index) in textStore.categories.lang"
            :key="index">
            {{ item }}
          </option>
        </select>
        <select id="style-select" v-model="textSelection.style">
          <option v-for="(item, index) in textStore.categories.style"
            :key="index">
            {{ item }}
          </option>
        </select>
      </div>

      <div id="text-area" class="border border-slate-200 p-5 inset-shadow-2xs text-lg">
        {{ currentText.text }}
      </div>

      <div id="action-area" class="flex justify-center items-center gap-5">
        <button id="reset-button" class="bg-slate-100 rounded-full w-[2rem] h-[2rem] cursor-pointer transition-all"
          @click="timerStore.reset()">🔄</button>
        <div id="timer-display" class="bg-slate-100 text-xl font-mono py-2 px-4 border border-slate-300 rounded">
          {{ timerStore.timer }}
        </div>
        <button id="timer-button" class="bg-slate-700 rounded-full w-[2rem] h-[2rem] cursor-pointer transition-all"
          @click="timerStore.toggle()">⏲</button>
      </div>

      <div v-if="timerStore.secondCount!==0" id="wpm-result" class="text-center">
        WPM: {{ Math.floor((
          textSelection.lang=="简体中文" ? currentText.stats.characterCount : currentText.stats.wordCount
        ) / timerStore.secondCount * 60) }}
      </div>
    </section>

  </div>
</template>
