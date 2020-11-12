<template>
    <div class="overlay" :class="{active: getStatus, flyIn: getStatus}">
        <div class="modal" id="comingSoonModal" :class="{active: getStatus, flyIn: getStatus}">
            <h3 class="special_glow_txt">{{$t('homepage.modal.remind.header')}}</h3>
            <label class="close-cross" @click="closeModal">
                <span></span>
                <span></span>
            </label>
            <form>
                <AppInputField ref="emailAddress" :name="'emailAddress'" :labelText="$t('homepage.modal.remind.label')" :type="'text'" :minLength="4"
                               :placeholder="$t('homepage.modal.remind.placeholder')" class="inputbox" v-model="emailAddress" :errorPlaceholder="error"/>

                <button class="button_special" @click="addRemind">{{$t('homepage.modal.remind.submit')}}</button>
            </form>
        </div>
    </div>
</template>
<script>
    import AppInputField from "@/components/uikit/input-field.vue";
    import App from "../../.nuxt/App";

    export default {
        data() {
            return {
                modalLoaded: false,
                emailAddress: '',
                error: '',
            }
        },
        components: {
            AppInputField
        },
        props: {
            showModal: {
                type: Boolean,
                required: true,
            },
        },
        beforeMount() {
            document.body.addEventListener("click", event => {
                if (this.getStatus === false || this.modalLoaded === false) {
                    this.modalLoaded = true;
                    return;
                }

                if (!this.isDescendant(document.querySelector("#comingSoonModal"), event.target)) {
                    this.closeModal();
                }
            });
        },

        methods: {
            async closeModal() {
                await this.$store.dispatch("modal/setComingSoonModal", false);
                this.modalLoaded = false;
            },

            isDescendant(parent, child) {
                let node = child;

                while (node !== null) {
                    if (node === parent) {
                        return true;
                    }

                    node = node.parentNode;
                }
                return false;
            },

            async addRemind() {
                event.preventDefault();

                if (this.emailAddress !== '') {
                    if (await this.validateEmail(this.emailAddress)) {
                        this.error = '';

                        const completed = await this.$store.dispatch('modal/sendRemindMe', this.emailAddress);
                        if (!completed) {
                            this.$notify({
                                type: 'error',
                                duration: 5000,
                                title: this.$t('homepage.modal.remind.errorDuringTitle'),
                                text: this.$t('homepage.modal.remind.errorDuringText'),
                            });
                            this.closeModal();
                            return;
                        }

                        this.$notify({
                            type: 'success',
                            duration: 5000,
                            title: this.$t('homepage.modal.remind.successTitle'),
                            text: this.$t('homepage.modal.remind.successDescription'),
                        });
                        this.closeModal();
                    } else {
                        this.error = this.$t('homepage.modal.remind.errorEmail');
                    }
                }
            },

            async validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
                return re.test(String(email).toLowerCase());
            }
        },
        computed: {
            getStatus() {
                return this.$store.state.modal.comingSoon.state;
            },
        }
    }
</script>
