<template>
  <div>
    <h2 class="sub_title">Regístrate para ver fotos y videos de tus amigos</h2>
    <app-button txt="Iniciar sesion con Facebook" class="btn_facebook"/>
    <div class="container_separator">
      <div class="vertical_separator"></div>
      <div class="separator">o</div>
      <div class="vertical_separator"></div>
    </div>
    <form action="">
      <!-- Email input -->
      <app-input name='email' @showMessage="Message"
      :label="user.email.label" v-model="user.email.info" :rules="rules.email.rule"/>
      <!-- Fullname input -->
      <app-input name="fullname" @showMessage="Message"
      :label="user.fullname.label" v-model="user.fullname.info" :rules="rules.fullname.rule"/>
      <!-- Username input -->
      <app-input name="username" @showMessage="Message"
      :label="user.username.label" v-model="user.username.info" :rules="rules.username.rule"/>
      <!-- Password input -->
      <app-input name="password" @showMessage="Message"
      :label="user.password.label" v-model="user.password.info" :rules="rules.password.rule"
      type="password" autocomplete="new-password current-password"/>
    </form>
    <app-button txt="Registrate" class="btn_register" @click.native="createUser"/>
     <div class="box-message">
      <div class="container-message" v-for="(msg, i) in rules" :key="i">
        <p class="message">{{Object.values(msg)[2]}}</p>
        <ol class="item" v-for="(item, i) in Object.values(msg)[3]" :key="i">- {{item}}</ol>
      </div>
    </div>
    <p class="info">Al registrarte, aceptas nuestras <span>Condiciones</span> y la <span>Política de privacidad</span></p>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import { mapState} from 'vuex';
import gql from "graphql-tag";

  export default {
    components: {
      AppButton,
      AppInput,
    },
    data: () => ({
      model: '',
      label:'somos label',
      rules: {
        email: {
          rule: /^((\w{3,})([.|+]*\w*){0,3})@([a-z]+)[.]+(\w{2,4})?(.)?(\w{2,4})$/,
          message: 'ingrese un email válido',
          messageActive: '',
          itemsActive: '',
        },
        fullname: {
          rule: /^[A-Za-z\s]{5,}$/,
          message: 'Ingrese un nombre válido',
          messageActive: '',
          itemsActive: '',
        },
        username: {
          rule: /^[a-z]{6,12}$/,
          message: 'usuario invalido: sólo letras minúsculas',
        },
        password: {
          rule: /^(?=^([^\s]){8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$/,
          message: 'la contraseña debe contener:',
          messageActive: '',
          itemsActive: '',
          items:[
            '8 caracteres como minimo',
            'al menos un caracter especial',
            'al menos una letra minuscula',
            'al menos una letra mayúscula',
            'al menos un número',
          ]
        },
          rule: /^(?=^([^\s]){8,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$/,
      },
      userAll: '',
      addClass: {
        email: false,
        fullname: false,
        password: false,
        username: false,
      },
      user: { 
       username: {
         info: '',
         label: 'Nombre de usuario',
       },
       password: {
         info: '',
         label: 'Contraseña',
       },
       email: {
         info: '',
         label: 'Número de celular o correo electrónico',
       },
       fullname: {
         info: '',
         label: 'Nombre completo',
       },
      },
    }),
    directives: {
      twoWay: true,
      rules:(el, binding)=> {
       //function for change the styles
       const changeStyle = params => {
          if (value.length > 0) {
              if(!params){
              el.style.border = '1px solid rgba(255,104,98,.5)';
              }else {
              el.style.border = '1px solid rgba(98,104,9255,.5)';
              } 
            } else {
              el.style.border = 'none';
            }
        }
        //Recovering the rules
        const email = binding.value.emailRule; 
        const password = binding.value.passwordRule;
        const fullname = binding.value.fullnameRule;
        const username = binding.value.usernameRule;
        let value = el.value;

        //for email
        if (email) {
        const valEmail = email.test(value);
          changeStyle(valEmail);
        }
        //for password
        if (password) {
        const evalPassword = password.test(value);
         changeStyle(evalPassword);
        }
        //for username
        if (username) {
        const evalUsername = username.test(value);
         changeStyle(evalUsername);
         console.log('tag', this.user)
        }
        //for fullname
        if (fullname) {
        const evalFullname = fullname.test(value);
         changeStyle(evalFullname);
        }
      }
    },
    computed: {
      ...mapState(['userRegister','pro'])
    },
    methods: {
      Message(payload){
        console.log('tag', payload)
        const state = payload.state;
        const name = payload.name;
        if (state) {
          this.rules[name].messageActive = '';
          this.rules[name].itemsActive = '';
          } else{
          this.rules[name].messageActive = this.rules[name].message;
          this.rules[name].itemsActive = this.rules[name].items;
        }
      },
      createUser(){
        console.log('funciona', );
        this.$apollo.mutate({
          mutation: gql`mutation ($username: String!, $password: String!, $email: String!, $fullname: String!) {
            createUser(username: $username, password: $password, email: $email, fullname: $fullname){
              success
              errors {
                path
                message
              }
            }
          }`,
          variables: {
            username: this.user.username.info,
            fullname: this.user.fullname.info,
            password: this.user.password.info,
            email: this.user.email.info,
          },
        }).then((data) => {
          console.log(data, data.data.createUser.errors)
        })
      },
       putClass() {
        //for email
        if (this.user.email.info === '') {
          this.addClass.email = false;
        } else {
          this.addClass.email = true;
        }
        //for username
        if (this.user.username.info === '') {
          this.addClass.username = false;
        } else {
          this.addClass.username = true;
        }
        //for fullname
        if (this.user.fullname.info === '') {
          this.addClass.fullname = false;
        } else {
          this.addClass.fullname = true;
        }
        //for password
        if (this.user.password.info === '') {
          this.addClass.password = false;
        } else {
          this.addClass.password = true;
        }
      }
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
  color: rgba(0,0,0,.65);
}
.container-message {
}
.box-message {
  background: rgba(255,104,98,.25);
  border-radius: 4px;
}

.info span{
  font-weight: 600;
}
.info {
  color: #999;
  text-align: center;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Helvetica, Arial, sans-serif;
}
.btn_register {
  margin-top: 5px;
  margin-bottom: 5px;
}
.btn_register, .btn_facebook {
  color: #ffffff;
  font-weight: 600;
}
.input {
  margin-bottom: 5px;
}
.vertical_separator {
  background: #c7c7c7;
  height: 0.07em;
  width: 40%;
}
.container_separator {
  width: 100%;
  display: flex;
  justify-content:space-around;
  align-items: center;
  flex-wrap: nowrap;
  height: 55px;
}
.sub_title {
  color: #999;
  text-align: center;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  padding-bottom: 5px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  margin: 10px;

}
</style>