<template>
    <div class="userForm">
        <h4>Sign in to CodeSnippet</h4>
        <div>
            <label for="email">E-mail address</label>
            <input type="email" name="email" id="email" required="required" v-model="email.value">
            <p class="invalid-feedback" v-if="email.error !== ''">{{ email.error }}</p>
        </div>
        <button @click="resetPassword()">RESET PASSWORD</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: {
                value: "",
                error: "",
            }
        }
    },
    methods: {
        async resetPassword() {
            (this.email.error !== "") ? '' : 'Email is missing'; 
            this.email.error = (this.validEmail(this.email.value) === true) ? '' : 'Email is not in te correct pattern like: "john@dam.com"';

            if (this.email.error === "") {
                const result = await this.$store.dispatch("users/checkValueForExistence", this.email.value);
                if(result === false) {
                    this.$router.push(this.localePath("/"));

                    this.$notify({
                        type: 'warning',
                        duration: 5000,
                        title: 'Reset password url not send!',
                        text: 'Your e-mail is not in our system.'
                    });
                    return;
                }

                await this.$store.dispatch("users/resetPassword", this.email.value)
                    .then(() => {
                        this.$router.push(this.localePath("/"));

                        this.$notify({
                            type: 'success',
                            duration: 5000,
                            title: 'Reset password url send!',
                            text: 'You received an e-mail with a reset password code.'
                        });
                    })
                    .catch((e) => {
                        this.$notify({
                            type: 'error',
                            duration: 5000,
                            title: 'System failure!',
                            text: 'Please try again later to reset password.'
                        });
                        console.log(e);
                    });
            }
        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(re.test(email));
            return re.test(email);
        }
    }
}
</script>
