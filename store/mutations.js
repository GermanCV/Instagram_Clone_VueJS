export default {
  UPDATE_USER_REGISTER: (state, payload) => {
    console.log("LLEGUE", "¿?", payload);
    state.userRegister.email = payload;
  }
};
