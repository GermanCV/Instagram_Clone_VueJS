<template>
  <button class="btn">{{txt}}</button>
</template>

<script>
  export default {
    props: ['txt']
  }
</script>

<style scoped>
.btn {
  border: none;
  background: #3897f0;
  width: 100%;
  height: 27px;
  border-radius: 4px;
  outline: none;
}
.btn:hover {
  cursor: pointer;
}
</style>