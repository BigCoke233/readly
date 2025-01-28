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
      <div id="action-area">
        <div id="timer-display">
          {{ timerStore.timer }}
        </div>
        <div id="timer-button">
          <button @click="timerStore.toggle()">⏲</button>
        </div>
      </div>
    </section>

  </div>
</template>
