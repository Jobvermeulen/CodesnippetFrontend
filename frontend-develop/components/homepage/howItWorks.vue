<template>
    <div class="homepage_section homepage_section__even">
        <div class="container">
            <h3 class="headerSection">{{$t('homepage.howItWorks.header')}}</h3>
            <h2 class="headerSection__underline">{{$t('homepage.howItWorks.underline')}}</h2>
            <div class="content">
                <div class="content__step">
                    <div class="image">
                        <img src="~/assets/img/hiws1.png" alt="code">
                    </div>
                    <div class="information">
                        <h5>{{$t('homepage.howItWorks.step1.title')}}</h5>
                        <p class="regular_txt__section">{{$t('homepage.howItWorks.step1.description')}}</p>
                    </div>
                </div>
                <div class="content__step">
                    <div class="image">
                        <img src="~/assets/img/hiws2.png" alt="save">
                    </div>
                    <div class="information">
                        <h5>{{$t('homepage.howItWorks.step2.title')}}</h5>
                        <p class="regular_txt__section">{{$t('homepage.howItWorks.step2.description')}}</p>
                    </div>
                </div>
                <div class="content__step">
                    <div class="image">
                        <img src="~/assets/img/hiws3.png" alt="reuse">
                    </div>
                    <div class="information">
                        <h5>{{$t('homepage.howItWorks.step3.title')}}</h5>
                        <p class="regular_txt__section">{{$t('homepage.howItWorks.step3.description')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

