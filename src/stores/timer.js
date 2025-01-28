import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
  const secondCount = ref(0)
  const intervalId = ref(null) // To store the interval ID for stopping the timer

  const timer = computed(() => {
    const minuteCount = Math.floor(secondCount.value / 60)
    const currentMinute = String(minuteCount).padStart(2, '0') // Pad with zero for two digits
    const currentSecond = String(secondCount.value % 60).padStart(2, '0') // Pad with zero for two digits
    return `${currentMinute}:${currentSecond}` // Return formatted timer as a string
  })

  function increment() {
    secondCount.value++
  }

  function start() {
    if (!intervalId.value) {
      intervalId.value = setInterval(() => {
        increment()
      }, 1000) // Increment every second
    }
  }

  function stop() {
    if (intervalId.value) {
      clearInterval(intervalId.value) // Clear the interval
      intervalId.value = null // Reset the interval ID
    }
  }

  function toggle() {
    const button = document.getElementById("timer-button")
    if (intervalId.value) {
      stop()
      button.classList.remove("rotate-180")
    } else {
      start()
      button.classList.add("rotate-180")
    }
  }

  function reset() {
    stop()
    secondCount.value = 0
    intervalId.value = null
  }

  return { timer, secondCount, start, stop, toggle, reset }
})
