<template>
<div>
  <div class="container_sing_up">
    <img src="../assets/Instagram_logo.png" alt="" class="logo">
    <h2 class="sub_title">Regístrate para ver fotos y videos de tus amigos</h2>
    <app-button txt="Iniciar sesion con Facebook" class="btn_facebook"/>
    <div class="container_separator">
      <div class="vertical_separator"></div>
      <div class="separator">o</div>
      <div class="vertical_separator"></div>
    </div>
      <app-input label="Número de celular o correo electrónico" type="text" class="input"/>
      <app-input label="Nombre completo" type="text" class="input"/>
      <app-input label="Nombre de usuario" type="text" class="input"/>
      <app-input label="Contraseña" type="password" class="input"/>
      <app-button txt="Registrate" class="btn_register"/>
      <p class="info">Al registrarte, aceptas nuestras <span>Condiciones</span> y la <span>Política de privacidad</span>.</p>
  </div>
  <div class="box_sing_in">
    <p> ¿Tienes cuenta? <a href="" class="link">Inicia sesión</a></p>
  </div>
</div>
  
</template>

<script>

import AppInput from '@/components/AppInput';
import AppButton from '@/components/AppButton';

  export default {
    components: {
      AppInput,
      AppButton,
    }
  }
</script>

<style scoped>
.link {
  color: #3897f0;
  text-decoration: none;
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
.container_sing_up {
  padding: 20px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
  flex-wrap: wrap;
	background: #ffffff;
	border: solid 1px #e6e6e6;
}
.box_sing_in {
  margin-top: 10px;
  height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
  flex-wrap: wrap;
	background: #ffffff;
	border: solid 1px #e6e6e6;
}
.logo {
  width: 180px;
}
</style>