<template>
  <div class="input_container">
    <label class="label" :class="{ add_label: addClass }">{{ label }}</label>
    <input :type="type" class="input_item" @keydown="putClass()" :class="{ add_input: addClass }">
  </div>
</template>

<script>
  export default {
    props: ['label', 'type'],
    data: () => ({
      addClass: false,
    }),
    methods: {
      putClass() {
        this.addClass = true;
        console.log('sadsad', this.addClass);
      }
    },
  }
</script>

<style scoped>
.input_container {
  background: #fafafa;
  position: relative;
  width: 266px;
  border: solid 1px #efefef;
  height: 36px;
  padding-left: 10px;
}
.input_item {
  border: 0;
  position: absolute;
  width: 100%;
  text-overflow: ellipsis;
  background: transparent;
  height: 33px;
  outline: none;
}
.label {
 position: absolute;
  width: 100%;
  font-size: 13px;
  color: #999;
  height:36px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.add_label {
  font-size: 13px;
  top: -10px;
}
.add_input {
  height: 25px;
  top: 12px;
}
</style>