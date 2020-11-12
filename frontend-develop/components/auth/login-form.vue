<template>
    <div class="userForm">
        <h4>Sign in to CodeSnippet</h4>
        <p class="invalid-feedback" v-if="showError.unauthorized">{{ error.unauthorized }}</p>
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required="required" v-model="username">
            <p class="invalid-feedback" v-if="showError.username">{{ error.username }}</p>
        </div>
        <div>
            <label for="password">Password</label>
            <label class="right"><n-link :to="localePath('/auth/reset-password')">Forgot password</n-link></label>
            <input type="password" name="password" id="password" required="required" v-model="password">
            <p class="invalid-feedback" v-if="showError.password">{{ error.password }}</p>
        </div>
        <button @click="signIn()" type="submit">SIGN IN</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                showError: {
                    username: false,
                    password: false,
                    unauthorized: false,
                },
                error: {
                    username: "Username is missing",
                    password: "Password is missing",
                    unauthorized: "Username and/or password are incorrect",
                }
            }
        },
        methods: {
             async signIn() {
                this.showError.username = (this.username === "");
                this.showError.password = (this.password === "");

                if (this.showError.username === false && this.showError.password === false) {
                    await this.$store.dispatch("auth/login", {
                        username: this.username,
                        password: this.password,
                    });

                    const loggedIn = await this.$store.dispatch("auth/isLoggedIn");
                    if (loggedIn) {
                        this.$router.push(this.localePath('/'));

                        this.$notify({
                            type: 'success',
                            duration: 5000,
                            title: 'Succesfully logged in',
                        });
                    }
                    else {
                        this.showError.unauthorized = true;
                    } 
                }
            }
        }
    }
</script>
