<template>
  <form action="" v-on:submit.prevent="login">
      <app-input name="username" :label="user.username.label" v-model="user.username.info" :rules="rules.username.rule" @showMessage="Message" autocomplete="username"/>
      <app-input name="password" :label="user.password.label" v-model="user.password.info" :rules="rules.password.rule" @showMessage="Message" autocomplete="current-password" type="password"/>
    <app-button txt="Iniciar sesión" type="submit" class="btn_login"/>
     <div class="box-message">
      <div class="container-message" v-for="(msg, i) in rules" :key="i">
        <p class="message">{{Object.values(msg)[2]}}</p>
        <ol class="item" v-for="(item, i) in Object.values(msg)[3]" :key="i">- {{item}}</ol>
      </div>
    </div>
  </form>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import gql from "graphql-tag";

  export default {
    components: {
      AppButton,
      AppInput
    },
    data: () => ({
      boxError: false,
       rules: {
        username: {
          rule: /^[a-z]{6,12}$/,
          message: 'Usuario invalido: sólo letras minúsculas',
          messageActive: '',
          itemsActive: '',
        },
        password: {
          rule: /^(?=^([^\s]){8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$/,
          message: 'La contraseña debe contener:',
          messageActive: '',
          itemsActive: '',
          items:[
            '8 caracteres como minimo',
            'Al menos un caracter especial',
            'Al menos una letra minuscula',
            'Al menos una letra mayúscula',
            'Al menos un número',
          ]
        },
      },
      user: { 
       username: {
         info: '',
         label: 'Teléfono, usuario o correo electrónico',
       },
       password: {
         info: '',
         label: 'Contraseña',
       },
      },
    }),
    methods: {
      Message(payload){
        console.log('tag', payload)
        const state = payload.state;
        const name = payload.name;

        if (state) {

          this.boxError = false;
          this.rules[name].messageActive = '';
          this.rules[name].itemsActive = '';

        }else{

          this.boxError = true;
          this.rules[name].messageActive = this.rules[name].message;
          this.rules[name].itemsActive = this.rules[name].items;

        }
      },
      login(){
        console.log('tag', this.user)
        this.$apollo.mutate({
          mutation: gql`mutation ($email: String!, $password: String!) {
            login(email: $email, password: $password){
              success
              token
              errors {
                path
                message
              }
            }
          }`,
          variables: {
            email: this.user.username.info,
            password: this.user.password.info,
          },
        }).then((response) => {
          console.log( response.data)
        })
      },
    },
  }
</script>

<style scoped>
.item{
  font-size: 10px;
  margin: 5px;
  padding-left: 10px;
  color: rgba(0,0,0,.5);
}
.message {
  padding-left: 5px;
  margin: 0;
  font-size: 13px;
  color: rgba(0,0,0,.8);
}
.container-message {
}
.box-message {
  background: rgba(255,104,98,.25);
  border-radius: 4px;
}
.btn_login {
  margin: 5px 0;
  color: #ffffff;
  font-weight: 600;
}
.input {
  margin-bottom: 5px;
}
</style>