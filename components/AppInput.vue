<template>
  <div class="input_container">
        <label class="label" :class="{addLabel}">{{ label }}</label>
        <input
        :name="name"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        :type="type"
        class="input_item"
        :class="{ activeError,activeSuccess, addInput}"
        :autocomplete="autocomplete"/>
  </div>
</template>

<script>
  export default {
    props: {
      label:{
        type: String,
        required: true,
      },
      value:{
        type: String,
        required: true,
      },
      type:{
        type: String,
        required: false,
        default: 'text',
      },
      rules: {
        type: RegExp,
        required: false,
      },
      autocomplete: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: true,
      }
    },
    data: () =>({
      activeError: false,
      activeSuccess: false,
      addLabel: false,
      addInput: false,
    }),
    methods: {
      updateValue: function (value) {
        const rule = this.rules;
        const exp = new RegExp(rule);
        const evalItem = exp.test(value);
        const name = event.target.name;

          // Add class
        if (value.length>0) {

          this.addLabel = true;
          this.addInput = true;
          this.activeError = true;

          if (evalItem) {

          this.activeSuccess = true;
          this.activeError = false;
          this.$emit('showMessage', {state: true, name});

          } else {

          this.activeSuccess=false;
          this.activeError=true;
          this.$emit('showMessage', {state: false, name});

          }
        } else {
          
          this.addLabel = false;
          this.addInput = false;
          this.activeSuccess = false;
          this.activeError = false;
          this.$emit('showMessage', {state: true, name});
          

        }

        this.$emit('input', value);
      },
    }
  }
</script>
<style scoped>
.input_container {
  background: #fafafa;
  position: relative;
  width: 266px;
  border: solid 1px #efefef;
  height: 36px;
  margin-bottom: 5px;
}
.input_item {
  border: 0;
  position: absolute;
  width: 256px;
  text-overflow: ellipsis;
  background: transparent;
  height: 33px;
  outline: none;
  padding-left: 10px;
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
  padding-left: 10px;
}
.activeError{
  border: 1px solid rgba(255,104,98,.5);
}
.activeSuccess {
  border: 1px solid rgba(98,104,9255,.5);
}
  
.addLabel {
  font-size: 10px;
  top: -10px;
}
.addInput {
  padding-top: 2px;
  font-size: 15px;
}

</style>