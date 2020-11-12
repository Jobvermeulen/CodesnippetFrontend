<template>
    <div class="csInput">
        <label v-if="labelText !== ''" v-bind:for="name">{{this.labelText}}</label>
        <input :id="name" :type="type" :minlength="minLength" v-model="input" @blur="checkMinLength()" @change="returnInput" :placeholder="placeholder">
        <p class="invalid-feedback" v-if="this.checkError">{{ this.checkError }}</p>
    </div>
</template>
<script>
    export default {
        props: {
            name: String,
            labelText: {
                type: String,
                default: ''
            },
            type: String,
            minLength: {
                type: Number,
                default: 4
            },
            defaultInput: {
                type: String,
                default: '',
                required: false,
            },
            placeholder: {
                type: String,
                default: '',
                required: false
            },
            errorPlaceholder: {
                type: String,
                default: '',
                required: false
            }
        },
        data() {
            return {
                input: '',
                errorText: '',
            }
        },
        mounted() {
            this.input = this.defaultInput;
            this.errorText = this.errorPlaceholder;
        },
        methods:{
            clearError(){
                this.errorText = '';
            },
            clearInput(){
                this.input = '';
            },
            returnInput(){
                this.$emit('input', this.input);
            },
            checkMinLength(){
                if (this.minLength === 0){
                    return;
                }

                if (this.input === "") {
                    this.errorText = 'This input field cannot be empty!';
                    return;
                }

                if (this.input.length <= this.minlength) {
                    this.errorText = "These aren't enough characters! There should be at least " + this.minLength + " in this input field.";
                    return;
                }

                this.clearError();
            }
        },
        computed: {
            checkError() {
                if (this.errorText !== '') {
                    return this.errorText;
                }
                if(this.errorPlaceholder !== '') {
                    return this.errorPlaceholder;
                }
                return false;
            }
        }
    }
</script>
