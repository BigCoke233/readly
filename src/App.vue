<script setup>
import { useTimerStore } from './stores/timer'

const timerStore = useTimerStore(); // Keep the store instance reactive
</script>

<template>
  <div class="mx-auto w-xl">

    <header class="text-center">
      <h1 class="text-3xl text-emerald-500 font-bold">Readly</h1>
      <p>Test your reading speed in different languages and contexts.</p>
    </header>

    <section>
      <div id="text-area">

      </div>
      <div id="action-area" class="flex justify-center items-center gap-5">
        <button id="reset-button" class="bg-slate-100 rounded-full w-[2rem] h-[2rem] cursor-pointer transition-all"
        >🔄</button>
        <div id="timer-display" class="bg-slate-100 text-xl font-mono py-2 px-4 border border-slate-300 rounded">
          {{ timerStore.timer }}
        </div>
        <button id="timer-button" class="bg-slate-700 rounded-full w-[2rem] h-[2rem] cursor-pointer transition-all"
          @click="timerStore.toggle()">⏲</button>
      </div>
    </section>

  </div>
</template>
