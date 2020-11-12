<template>
    <div class="userForm" v-if="Object.keys(this.tokenData).length > 0">
        <h4>Reset your password</h4>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required="required" v-model="password.value" @blur="checkPassword">
            <p class="invalid-feedback" v-if="password.error !== ''">{{ password.error }}</p>
        </div>
        <div>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" required="required" v-model="confirmPassword.value" @blur="checkMatch">
            <p class="invalid-feedback" v-if="confirmPassword.error !== '' ">{{ confirmPassword.error }}</p>
            <p class="valid-feedback" v-if="confirmPassword.feedback !== '' && confirmPassword.error === '' ">{{ confirmPassword.feedback }}</p>
        </div>
        <button @click="resetPassword()" type="submit">RESET PASSWORD</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tokenData: "",
            password: {
                value: "",
                minLength: 8,
                error: "",
            },
            confirmPassword: {
                value: "",
                minLength: 8,
                error: "",
                feedback: "",
            },
        }
    },
    async beforeCreate() {
        const token = this.$route.params.token;
        this.tokenData = await this.$store.dispatch("users/getTokenData", token); 

        if (Object.keys(this.tokenData).length === 0) {
            this.$router.push(this.localePath("/"));

            this.$notify({
                type: 'warning',
                duration: 5000,
                title: 'Reset Password url not valid',
                text: 'The token you used is not valid anymore'
            });
        }
    },
    methods: {
        resetPassword() {
            this.checkPassword();
            this.checkMatch();

            if (this.password.error === "" && this.confirmPassword.error === "") {
                this.$store.dispatch("users/updatePassword", { 
                    password: this.password.value,
                    UserResetPassword: this.tokenData,
                }).
                then(() => {
                    this.$router.push(this.localePath("/"));

                    this.$notify({
                        type: 'success',
                        duration: 5000,
                        title: 'Password succesfully changed',
                        text: 'Login with your new password to go back using CodeSnippet'
                    });
                }).
                catch( error => {
                    this.$notify({
                        type: 'error',
                        duration: 5000,
                        title: 'Password not changed',
                        text: 'Please try changing your password again'
                    });
                    console.log(error);
                });
            }
        },

        checkPassword() {
            if (this.password.value === "") {
                this.password.error = "The password is missing";
            } else if (this.password.value.length <= this.password.minLength) {
                this.password.error = "The password is to short"
            } else {
                this.password.error = "";
            }
        },

        checkMatch() {
            if (this.password.value === this.confirmPassword.value) {
                this.confirmPassword.feedback = "Passwords are a match";
                this.confirmPassword.error = "";
            } else if (this.password.value !== this.confirmPassword.value) {
                this.confirmPassword.error = "Passwords are not a match";
            }
        }
    }
}
</script>
