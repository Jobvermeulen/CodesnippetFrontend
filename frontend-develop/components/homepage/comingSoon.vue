<template>
    <div class="container mt-10">
        <AppModal :showModal="showModal" @close-modal="closeModal"/>
        <div class="homepage">
            <div class="homepage__text-left">
                <h1 class="special_glow_txt">{{$t('homepage.comingSoon.header')}}</h1>
                <h2 class="special_glow_txt">{{$t('homepage.comingSoon.underline')}}</h2>
                <p class="regular_txt">{{$t('homepage.comingSoon.regText')}}</p>

                <h3 class="special_glow_txt">{{$t('homepage.comingSoon.callToAction')}}</h3>
                <button class="button_special" :ref="'modalBTN'" @click="openModal">{{$t('navigation.remindMe')}}</button>
            </div>
            <div class="homepage__text-right">
                <AppBlobMiddle class="blobSVG"/>

                <img class="homepage__mobileSVG" src="~assets/img/mobileCS.svg" alt="mobileCS image">
                <AppComputerSVG class="homepage__desktopSVG"/>
            </div>
            <img class="homepage__underBlob" src="~/assets/img/blobBottomV2.svg" alt="">
        </div>
    </div>
</template>

<script>
    import AppComputerSVG from '~/components/animations/computerSVG'
    import AppBlobMiddle from '~/components/animations/middleBlob'
    import AppModal from '~/components/homepage/modalRemind'

    export default {
        data() {
            return {
                showModal: false,
            }
        },
        components: {
            AppComputerSVG,
            AppBlobMiddle,
            AppModal,
        },
        mounted() {
        },
        methods: {
            async closeModal() {
                await this.$store.dispatch("modal/setComingSoonModal", false);
            },

            async openModal() {
                await this.$store.dispatch("modal/setComingSoonModal", true);
            }
        }
    }
</script>
