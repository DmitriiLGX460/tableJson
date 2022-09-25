<template>
  <button :style="StyleButton" @click="click">
    Клик!
  </button>
</template>

<script>

import {ComponentsState} from "@/ComponentsState";

export default {
  name: "RandomButton",
  data() {
    return {
      StyleButton: {
        color: 'rgb(0, 0, 0)',
        background: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        borderColor: 'rgb(0, 0, 0)'
      },
      ComponentsState,
    }
  },
  methods: {
    random(max = 255) {
      return Math.floor(Math.random() * max); // 0..255
    },

    click() {
      ComponentsState.showModalWindow = true;
      // Вычисление случайно значения для параметров фона Red Green Blue и присвоение его к переменной, которая динамически меняет стили
      let red = this.random();
      let blue = this.random();
      let green = this.random();

      this.StyleButton.background = `rgb(${red}, ${green}, ${blue})`;

      // Вычисление инверсии значения фоня для параметров цвета текста и присвоение его к переменной, которая динамически меняет стили
      this.StyleButton.color = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;

      // Рандомные значения для округления кнопки
      this.StyleButton.borderRadius =  this.random(130) + 'px'; // 0..130 + 'px'
      this.StyleButton.borderColor = `rgb( ${ this.random()}, ${this.random()}, ${ this.random()})`;
      // rgb( 0..255, 0..255, 0..255  )
    }
  }
}
</script>

<style scoped>
button {
  transform: rotate(0deg);
  border-style: solid;
  font-size: 4rem;
  width: 500px;
  height: 250px;
  transition: 2s;
}

button:hover {
  transform: rotate(360deg);
}
</style>