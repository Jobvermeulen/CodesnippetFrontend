<template>
    <div>
        <input type="checkbox" name="menu__checkbox" id="menu__checkbox" class="checkbox" v-model="showMenu">

        <nav class="nav">
            <div class="container menu">
                <div class="menu__logo">
                    <n-link class="menu--brand menu__logo__brand special_glow_txt" to="/">C<span class="logo_hover">ode</span>S<span class="logo_hover">nippet</span></n-link>
                    <AppBlobNav class="menu__logo__bg-img"/>
                </div>

                <label class="menu__hamburger" for="menu__checkbox">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>


                <ul class="menu__main">
                    <li>
                        <h4>{{$t('navigation.menu')}}</h4>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" :to="localePath('/')" exact>{{$t('navigation.home')}}</n-link>
                    </li>

                    <li class="nav-item" v-if="!comingSoon">
                        <n-link class="nav-link" :to="localePath('/codesnippet')">{{$t('navigation.about')}}</n-link>
                    </li>
                    <li class="nav-item" v-if="!comingSoon">
                        <n-link class="nav-link" :to="localePath('/codesnippet')">{{$t('navigation.exploreSnippet')}}</n-link>
                    </li>
                    <li class="nav-item" v-if="!comingSoon">
                        <n-link class="nav-link" :to="localePath('/codesnippet')">{{$t('navigation.signIn')}}</n-link>
                    </li>
                    <li class="mobile-btn">
                        <button class="button_special" @click="openModal">{{$t('navigation.remindMe')}}</button>
                    </li>
                </ul>

                <button class="menu__button button_special" @click="openModal">{{$t('navigation.remindMe')}}</button>
            </div>
        </nav>
    </div>
</template>
<script>
    import AppBlobNav from "~/components/animations/blobNav";

    export default {
        components: {
            AppBlobNav,
        },
        data() {
            return {
                showMenu: false,
                loggedIn: false,
                comingSoon: true,
            }
        },
        async mounted() {
            this.loggedIn = await this.$store.dispatch('auth/isLoggedIn');
        },
        methods: {
            async openModal() {
                if(this.showMenu === true) {
                    this.showMenu = false;
                }

                await this.$store.dispatch("modal/setComingSoonModal", true);
            },
        }
    }
</script>
