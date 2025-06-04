import Snackbar from 'node-snackbar';
import 'node-snackbar/dist/snackbar.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('snackbar', Snackbar);
});
