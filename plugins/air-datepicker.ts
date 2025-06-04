import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('AirDatepicker', AirDatepicker)
})