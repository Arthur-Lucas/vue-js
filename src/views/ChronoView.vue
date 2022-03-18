<script>
export default {
  data() {
    return {
      duration: 15000,
      passed: 0,
    };
  },
  created() {
    let lastTime = performance.now();
    const update = () => {
      const time = performance.now();
      this.passed += Math.min(time - lastTime, this.duration - this.passed);
      lastTime = time;
      this.handle = requestAnimationFrame(update);
    };
    update();
  },
  unmounted() {
    cancelAnimationFrame(this.handle);
  },
};
</script>

<template>
  <label>Elapsed Time: <progress :value="passed / duration"></progress></label>

  <div>{{ (passed / 1000).toFixed(1) }}s</div>

  <div>
    Duration: <input type="range" v-model="duration" min="1" max="30000" />
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <button @click="passed = 0">Reset</button>
  <p v-if="passed >= duration">Time is up !!!</p>
</template>

<style>
.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  height: 10px;
}
</style>
