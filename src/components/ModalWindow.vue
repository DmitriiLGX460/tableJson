<template>
  <div class="modal" :style="{
    /**
    * if (ComponentsState.showModalWindow) {
    *   return 'block'
    * } else {
    *   return 'none'
    * }
    */
    display: ComponentsState.showModalWindow ? 'block' : 'none'
  }">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="close()">&times;</span>
      <p>Some text in the Modal..</p>
    </div>

  </div>
</template>

<script>

import { ComponentsState } from '@/ComponentsState.js'

export default {
  name: "ModalWindow",
  methods: {
    close() {
      ComponentsState.showModalWindow = false;
    }
  },
  data() {
    return {
      ComponentsState
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal_show {
  display: block;
}
</style>