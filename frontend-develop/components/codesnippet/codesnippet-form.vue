<template>
    <form>
        <div v-if="dataLoaded">
            <AppInputField ref="codesnippetTitle" :name="'CodeSnippetTitle'" :labelText="'Codesnippet title'" :type="'text'" :minLength="4" v-model="codesnippetTitle"
                           :defaultInput="codesnippetTitle"/>
            <AppInputField ref="codesnippetDescription" :name="'CodeSnippetDescription'" :labelText="'Description'" :type="'text'" :minLength="0" v-model="codesnippetDescription"
                           :defaultInput="codesnippetDescription"/>

            <select v-model="codeLanguage" @change="selectChange()">
                <option v-for="language in languages" :value="language.id" :key="language.id">{{language.name}}</option>
            </select>

            <select v-model="codeCategory">
                <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
            </select>

            <AppEditor ref="editor" :code_mode="defaultCodeLang" :read_only="false" v-model="code" :set_code="edit_CodeSnippet.snippet"/>
            <button @click="saveSnippet">Save</button>
        </div>
    </form>
</template>
<script>
    import AppInputField from "@/components/uikit/input-field.vue";
    import AppEditor from "@codesnippet/editor";

    export default {
        components: {
            AppInputField,
            AppEditor
        },
        props: {
            edit_Mode: {
                required: false,
                default: false,
            },
            edit_CodeSnippet: {
                required: false,
                type: Object,
                default: () => {
                    return {
                        id: '',
                        userId: 0,
                        title: '',
                        description: '',
                        private: false,
                        code: '',
                        rating: 0,
                        category: {},
                        language: {},
                        user: {},
                        createdAt: '',
                        changedAt: '',
                    }
                }
            },
        },
        data() {
            return {
                defaultCodeLang: 'htmlEmbedded',
                code: "",
                codeLanguage: '',
                codeCategory: '',
                codesnippetTitle: '',
                codesnippetDescription: '',
                categories: {},
                languages: {},
                dataLoaded: false,
            }
        },
        async mounted() {
            await this.getCategoriesAndLanguages();

            if (this.edit_Mode) {
                this.codesnippetTitle = this.edit_CodeSnippet.name;
                this.codesnippetDescription = this.edit_CodeSnippet.description;
                this.defaultCodeLang = this.edit_CodeSnippet.language.value;
                this.codeLanguage = this.edit_CodeSnippet.language.id;
                this.codeCategory = this.edit_CodeSnippet.category.id;
                this.code = this.edit_CodeSnippet.snippet;
            }

            this.dataLoaded = true;
        },
        methods: {
            async saveSnippet() {
                event.preventDefault();

                if (this.codesnippetTitle === '') {
                    return;
                }

                const codesnippet = {
                    id: 0,
                    userId: this.$store.state.users.userId,
                    name: this.codesnippetTitle,
                    snippet: this.code,
                    description: this.codesnippetDescription,
                    languageId: this.codeLanguage,
                    private: false,
                    categoryId: this.codeCategory,
                };

                if (this.edit_Mode === false) {
                    try {
                        await this.$store.dispatch("snippet/createSnippet", codesnippet);
                        await this.$router.push(this.localePath("/codesnippet"));

                        this.$notify({
                            type: 'success',
                            duration: 5000,
                            title: 'Snippet has been made!',
                        });
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {
                        codesnippet.id = this.edit_CodeSnippet.id;

                        await this.$store.dispatch("snippet/updateSnippet", codesnippet);
                        await this.$router.push(this.localePath("/codesnippet"));

                        this.$notify({
                            type: 'success',
                            duration: 5000,
                            title: 'Snippet has been updated!',
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        },
        async selectChange() {
            const val = this.languages.find(lang => lang.id === this.codeLanguage);
            if (val) {
                await this.$refs.editor.changeMode(val.value);
            }
        },
        async getCategoriesAndLanguages() {
            await this.$store.dispatch("snippet/getLanguages");
            await this.$store.dispatch("snippet/getCategories");
            this.languages = this.$store.state.snippet.languages;
            this.categories = this.$store.state.snippet.categories;
        }
    }
</script>
