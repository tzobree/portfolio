import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        navHome: 'Home',
        navProjects: 'Projects',
        home: {
            general: 'general',
            general1: 'September 2018 / October 2020 - freelancing | HTML / CSS / JS (Vue) / Wordpress',
            general2: 'October 2020 / till present - frontend developer at Treeshaker d.o.o. | Vue',
            css1: 'responsive on any screen size',
            css2: 'from design (PDF, Invision, Figma...) to finished interface',
            css3: 'I always use SASS(SCSS)',
            css4: 'I have used Vuetify, Quasar, Bulma/Buefy, Tailwind.css, Bootstrap, UIkit...',
            css5: 'CSS3, Flexbox, Grid, Transitions...',
            other: 'other',
            other2: 'I have worked on Laravel|Vue projects',
            other3: '...and on several Wordpress websites',
            plan: 'future plans',
            more: 'more about me',
            more1: 'I\'ve worked both on a team and single-handed',
            more2: '',
            more3: 'in my free time I\'m usually on a bicycle or hiking',
            contact: 'contact',
            contact2: 'LinkedIn profile',
        },
        projects: {
            title: 'Projects',
            gym1: 'Web app for administration in gyms and fitness centers. Laravel, Inertia.js, Vue and Vuetify, 50+ pages and components.',
            startups1: 'Database of startups in Africa, client from Nigeria, app is making some traffic so development of this version is omitted new one is in progress. Vue is framework, Quasar has been introduced on new version.',
            bitbata1: 'Documentation for crypto API, frontend is Gridsome (Vue) and Tailwind.css.',
            brainbox1: 'Web app, platform for uploading graduate exam projects and materials. Frontend is Vue.js.',
            beds: 'Beds',
            beds1: 'Website for the bed manufacturing company built with Wordpress. Adapted theme, added CSS, 3 languages...'
        },
        gym: {
            title: 'Administration for gyms and fitness centres',
            desc: 'Application MVP is finished, website is in progress. Backend is Laravel and Inertia.js, frontend is Vue/Vuetify.'
        }
    },
    'sr': {
        navHome: 'Početna',
        navProjects: 'Projekti',
        home: {
            general: 'opšte',
            general1: 'Septembar 2018 / Oktobar 2020 - freelancing | HTML / CSS / JS (Vue) / Wordpress',
            general2: 'Oktobar 2020 / do sad - frontend developer u Treeshaker d.o.o. | Vue',
            css1: 'potpuno responzivno i za najmanje ekrane',
            css2: 'od dizajna (PDF, Invision, Figma...) do gotovog interfejsa',
            css3: 'uvek koristim SASS(SCSS)',
            css4: 'radio sam sa Vuetify, Quasar, Bulma/Buefy, Tailwind.css, Bootstrap, UIkit...',
            css5: 'CSS3, Flexbox, Grid, Tranzicije...',
            other: 'ostalo',
            other2: 'radio sam na Laravel|Vue projektima',
            other3: 'imam i nekoliko urađenih Wordpress sajtova',
            plan: 'u planu',
            more: 'još nešto',
            more1: 'radio sam u timu i samostalno, za domaće i inostrane klijente',
            more2: 'engleski odličan',
            more3: 'slobodno vreme trošim uglavnom na biciklizam i planinarenje',
            contact: 'kontakt',
            contact2: 'LinkedIn profil',
        },
        projects: {
            title: 'Projekti',
            gym1: 'Web aplikacija za administraciju u teretanama i fitnes centrima. Laravel, inertia.js, Vue i Vuetify, 50+ stranica i komponenti.',
            startups1: 'Baza startup-ova u Africi, za klijenta iz Nigerije, ostvaruje dosta poseta pa se više ne razvija u izradi je druga verzija. Oba su rađena u Vue, u drugoj je dodat Quasar.',
            bitbata1: 'Dokumentacija za kripto API, frontend je Gridsome (Vue) i Tailwind.css.',
            brainbox1: 'Web app, platforma za postavljanje diplomskih radova. Frontend je Vue.js.',
            beds: 'Kreveti',
            beds1: 'Sajt kompanije koja proizvodi krevete rađen u Wordpress-u. Prilagođena tema, dorađen CSS, 3 jezika...'
        },
        gym: {
            title: 'Administracija za teretane i fitnes centre',
            desc: 'MVP aplikacije je završen, stranica je u izradi. Backend je Laravel i Inertia.js, frontend je Vue i Vuetify.'
        }
    }
}

const i18n = new VueI18n({
    locale: 'sr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n