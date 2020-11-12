<template>
    <div class="userForm">
        <h4>Create account</h4>
        <form>
            <div class="input-group">
                <label>Full name</label>
                <input type="text" :name="form.fullName.name" :id="form.fullName.name" required="required" v-model="form.fullName.value" :minlength="form.fullName.minlength"
                       @blur="doesValueComply(form.fullName.name)">
                <p class="invalid-feedback" v-if="form.fullName.error !== '' ">{{ form.fullName.error }}</p>
            </div>
            <div>
                <label>E-mail adress</label>
                <input type="email" :name="form.email.name" :id="form.email.name" required="required" v-model="form.email.value" :minlength="form.email.minlength"
                       @blur="doesValueExist(form.email.name)">
                <p class="invalid-feedback" v-if="form.email.error !== '' ">{{ form.email.error }}</p>
                <p class="valid-feedback" v-if="form.email.feedback !== '' && form.email.error ==='' ">{{ form.email.feedback }}</p>
            </div>
            <div>
                <label>Username</label>
                <input type="text" :name="form.username.name" :id="form.username.name" required="required" v-model="form.username.value" :minlength="form.username.minlength"
                       @blur="doesValueExist(form.username.name)">
                <p class="invalid-feedback" v-if="form.username.error !== ''">{{ form.username.error }}</p>
                <p class="valid-feedback" v-if="form.username.feedback !== '' && form.username.error === '' ">{{ form.username.feedback }}</p>
            </div>
            <div>
                <label>Password</label>
                <input type="password" :name="form.password.name" :id="form.password.name" required="required" v-model="form.password.value" :minlength="form.password.minlength"
                       @blur="doesValueComply(form.password.name)">
                <p class="invalid-feedback" v-if="form.password.error !== '' ">{{ form.password.error }}</p>
            </div>
            <div>
                <label>Confirm password</label>
                <input type="password" :name="form.confirmPassword.name" :id="form.confirmPassword.name" required="required" v-model="form.confirmPassword.value"
                       :minlength="form.confirmPassword.minlength" @blur="doesValueComply(form.confirmPassword.name)">
                <p class="invalid-feedback" v-if="form.confirmPassword.error !== '' ">{{ form.confirmPassword.error }}</p>
            </div>

            <button @click="submitAccount()">SIGN UP</button>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    fullName: {
                        name: 'fullName',
                        value: "",
                        minlength: 3,
                        error: "",
                        feedback: ""
                    },
                    email: {
                        name: "email",
                        value: "",
                        minlength: 6,
                        error: "",
                        feedback: ""
                    },
                    username: {
                        name: "username",
                        value: "",
                        minlength: 3,
                        error: "",
                        feedback: "",
                    },
                    password: {
                        name: "password",
                        value: "",
                        minlength: 8,
                        error: "",
                        feedback: "",
                    },
                    confirmPassword: {
                        name: "confirmPassword",
                        value: "",
                        minlength: 8,
                        error: "",
                        feedback: "",
                    }
                },
            }
        },
        methods: {
            async submitAccount() {
                event.preventDefault();

                const check = await this.checkForm();

                if (check) {
                    const user = {
                        "fullName": this.form.fullName.value,
                        "email": this.form.email.value,
                        "username": this.form.username.value,
                        "password": this.form.password.value,
                    };

                    this.$store.dispatch("users/createUser", user)
                        .then(() => {
                            this.$router.push(this.localePath("/"));

                            this.$notify({
                                type: 'success',
                                duration: 5000,
                                title: 'Account has been made!',
                                text: 'You received an e-mail with a verification code.'
                            });
                        })
                        .catch((e) => {
                            console.log(e);
                        });


                }
            },

            async checkForm() {
                const inputs = Object.keys(this.form);

                for (const input of inputs) {
                    const inputError = await this.doesValueComply(this.form[input].name);

                    if (inputError === false) {
                        return false;
                    }
                }
                return true;
            },

            async doesValueExist(value) {
                this.doesValueComply(value);

                if (this.form[value].error === "") {
                    const result = await this.$store.dispatch("users/checkValueForExistence", this.form[value].value);
                    if (!result) {
                        this.form[value].error = "";
                        this.form[value].feedback = `${value} is available`;
                    } else {
                        this.form[value].error = `${value} is already used`;
                    }
                }
            },

            doesValueComply(value) {
                if (this.form[value].value === "") {
                    this.form[value].error = `${value} is missing`;
                    return false;
                } else if (this.form[value].value.length <= this.form[value].minlength) {
                    this.form[value].error = `${value} is too short!`;
                    return false;
                } else if (this.form[value].name === this.form.confirmPassword.name) {
                    if (this.form.confirmPassword.value !== this.form.password.value) {
                        this.form[value].error = `${value} doesn't match password`;
                        return false;
                    }
                }

                this.form[value].error = "";
                return true;
            },
        }
    }
</script>
