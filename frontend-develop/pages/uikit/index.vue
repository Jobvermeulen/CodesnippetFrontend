<template>
    <div>
        <AppNav/>
        <div class="container mt-10">
            <h1>Uikit</h1>
            <n-link to="/"><- Back</n-link>

            <section class="border-top  my-3 py-3">
                <h2 class="font-weight-bolder">Headings</h2>

                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p>P text element</p>
            </section>

            <section class="border-top my-3 py-3 d-flex flex-row">
                <div class="card--uikit bg_primary">
                    <p>$_primary</p>
                </div>
                <div class="card--uikit bg_secondary">
                    <p>$_secondary</p>
                </div>
                <div class="card--uikit bg_light-green">
                    <p>$_light-green</p>
                </div>
                <div class="card--uikit bg_light-blue">
                    <p>$_light-blue</p>
                </div>
                <div class="card--uikit bg_dark-blue">
                    <p>$_dark-blue</p>
                </div>
                <div class="card--uikit bg_dark-gray">
                    <p>$_dark-gray</p>
                </div>
                <div class="card--uikit bg_egg-white">
                    <p>$_egg-white</p>
                </div>
            </section>

            <section class="border-top  my-3 py-3">
                <h2 class="font-weight-bolder">Cards</h2>

                <div class="card w-50">
                    <h3 class="card-header">Text</h3>
                    <p class="card-body">Description</p>
                </div>
            </section>

            <section class="border-top my-3 py-3">
                <h2 class="font-weight-bolder">Forms</h2>

                <form>
                    <div class="form-group">
                        <label for="UsernameInput">Username</label>
                        <div class="input-group">
                            <input type="email" class="form-control" id="UsernameInput" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput">Password</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><img class="password" src="~/assets/icons/key.svg" alt="password"></div>
                            </div>
                            <input type="text" class="form-control" id="passwordInput" placeholder="Password">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="DropdownInput">Dropdown form</label>
                        <select class="form-control form-control-md" id="DropdownInput">
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                        <label class="form-check-label" for="defaultCheck2">
                            Disabled checkbox
                        </label>
                    </div>

                    <div class="row mt-2 pl-3">
                        <div class="valid-feedback">Alles is rustâgh</div>
                        <div class="invalid-feedback">Alles is niet zo rustâgh</div>
                    </div>
                </form>
            </section>
        </div>

        <AppFooter/>
    </div>
</template>

<script>
    import AppNav from "@/components/uikit/nav";
    import AppFooter from "@/components/uikit/footer";

    export default ({
        components: {
            AppNav,
            AppFooter
        }

    });
</script>

