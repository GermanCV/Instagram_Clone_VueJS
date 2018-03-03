<template>
	<div class="container">
		<div class="img_container">
			<app-image/>
		</div>
		<div class="form_container">
			<app-login/>
		</div>
	</div>
</template>

<script>

import AppImage from '@/components/AppImage'
import AppLogin from '@/components/AppLogin'
import gql from "graphql-tag";
import ALL_USERS from "@/apollo/allUsers.graphql"
import { mapState } from 'vuex';

	export default {
		components: {
			AppImage,
			AppLogin,
    },/* 
    mounted () {
      console.log('ssss', this.$apollo.getClient());
      console.log('U2', this.allUsers);
      console.log('User1', this.getUser);
      console.log('User2', this.getUser2);
		},
		 asyncData (context) {
		let client = context.app.apolloProvider.defaultClient
		console.log('tag', client)
  },
    data: () => ({
      allUsers: [],
      getUser: {},
      getUser2: {},
    }),
    apollo:{
			allUsers:  gql`{
				allUsers{
					_id
					username
					password
					email
					fullname
				}
			}`,
			getUser:
				gql`{
				getUser(_id:"5a95af0b22ddd46066e90ce1"){
					username
					password
				},
			}`,
			getUser2: {
				query: ALL_USERS,
				update(data) {
        return data.getUser;
      }
			}
		}, */
		computed: {
			...mapState(['user']),
		}
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
 @media (min-width: 320px) and (max-width: 480px) {
	 .img_container {
     display: none
		 }
 }
 @media (min-width: 481px) and (max-width: 767px) {
   .img_container {
     display: none
		 }
}
</style>