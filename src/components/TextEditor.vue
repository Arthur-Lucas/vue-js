<script setup lang="ts">
console.log('editor loaded')

const props = defineProps({
  textEditorInput: { type: String },
})

props.textEditorInput // string

</script>

<template>
    <div>
        <input type="text" v-model="textEditorInput">
        <p> Votre code: {{ textEditorInput }}</p>
    </div>
</template>

<style lang="scss">

</style>