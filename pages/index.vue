<template>
	<div class="container">
		<div class="img_container">
			<app-image/>
		</div>
		<div class="form_container">
			<app-sing-up/>
		</div>
	</div>
</template>

<script>

import AppImage from '@/components/AppImage'
import AppSingIn from '@/components/AppSingIn'
import AppSingUp from '@/components/AppSingUp'

	export default {
		components: {
			AppImage,
			AppSingIn,
			AppSingUp,
		},
	}
</script>

<style scoped>
.img_container {
	background: #FAFAFA;
}
.form_container {
	width: 350px;
	margin-left: 3%;
}
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 25px;
	padding: 20px;
}
</style>