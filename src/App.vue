<template>
  <RandomButton></RandomButton>
  <ModalWindow></ModalWindow>

</template>

<script>
import RandomButton from "@/components/RandomButton";
import ModalWindow from "@/components/ModalWindow";

export default {
  name: 'App',
  components: {
    RandomButton,
    ModalWindow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
