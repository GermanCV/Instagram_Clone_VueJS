<template>
<div>
  <div class="container_sing_up">
    <img src="../assets/Instagram_logo.png" alt="" class="logo">
    <sing-up v-if="sing"/>
    <sing-in v-else/>
  </div>
  <div class="box_sing_in">
    <p> ¿Tienes cuenta? <a href="" class="link">Inicia sesión</a></p>
  </div>
</div>
  
</template>

<script>

import SingUp from '@/components/SingUp';
import SingIn from '@/components/SingIn';

  export default {
    components: {
      SingUp,
      SingIn,
    },
    data: () => ({
      sing: true,
    }),
  }
</script>

<style>

.link {
  color: #3897f0;
  text-decoration: none;
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