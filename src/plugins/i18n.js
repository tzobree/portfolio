import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        home: 'Home',
        projects: 'Projects',
        general: 'general',
        general1: 'September 2018 / October 2020 - freelancing | HTML / CSS / JS (Vue) / Wordpress',
        general2: 'October 2020 / till present - frontend developer at Treeshaker d.o.o. | Vue',
        css1: 'responsive on any screen size',
        css2: 'from design (PDF, Invision, Figma...) to finished interface',
        css3: 'I always use SASS(SCSS)',
        css4: 'I have used Vuetify, Quasar, Bulma/Buefy, Tailwind.css, Bootstrap, UIkit...',
        css5: 'CSS3, Flexbox, Grid, Transitions...',
    },
    'sr': {
        home: 'Početna',
        projects: 'Projekti',
        general: 'opšte',
        general1: 'Septembar 2018 / Oktobar 2020 - freelancing | HTML / CSS / JS (Vue) / Wordpress',
        general2: 'Oktobar 2020 / do sad - frontend developer u Treeshaker d.o.o. | Vue',
        css1: 'potpuno responzivno i za najmanje ekrane',
        css2: 'od dizajna (PDF, Invision, Figma...) do gotovog interfejsa',
        css3: 'uvek koristim SASS(SCSS)',
        css4: 'radio sam sa Vuetify, Quasar, Bulma/Buefy, Tailwind.css, Bootstrap, UIkit...',
        css5: 'CSS3, Flexbox, Grid, Tranzicije...',
    }
}

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n