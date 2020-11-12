<template>
    <div class="homepage_section homepage_section__odd">
        <div class="container">
            <img src="~/assets/img/blobWhyCS1.svg" alt="" id="whyCs1">
            <h3 class="headerSection">{{$t('homepage.whyCodesnippet.header')}}</h3>
            <h2 class="headerSection__underline">{{$t('homepage.whyCodesnippet.underline')}}</h2>
            <div class="content">
                <p class="regular_txt__section content__text" v-html="$t('homepage.whyCodesnippet.leftText')"></p>
                <p class="regular_txt__section content__text" v-html="$t('homepage.whyCodesnippet.rightText')"></p>
            </div>
            <img src="~/assets/img/blobWhyCS2.svg" alt="" id="whyCs2">
        </div>
    </div>
</template>

