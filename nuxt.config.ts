// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		head: {
			title: 'Advice iStore',
			meta: [
				{ name: 'robots', content: 'noindex' }
			],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
					integrity: 'sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p',
					crossorigin: 'anonymous'
				},
				{
					src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
					integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
					crossorigin: "anonymous"
				},
			],
			link: [
				{ rel: 'stylesheet', href: 'https://img.advice.co.th/images_nas/advice/oneweb/assets/css/font.css?v=1.2' },
				{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' },
				{
					rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css', integrity:
						'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==', crossorigin:
						'anonymous', 'referrerpolicy': 'no-referrer'
				},
				{
					href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
					rel: "stylesheet",
					integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
					crossorigin: "anonymous"
				},
				{ rel: 'icon', type: 'image/x-icon', href: '/images/icon/apple-logo.png' },
			],
		}
	},

	css: ['~/assets/css/main.css', '~/assets/css/product.css', '~/assets/css/animetion.css', '~/assets/css/fontsize.css', '~/assets/css/main_mobile.css',],
	modules: ['nuxt-swiper', 'nuxt-viewport', 'nuxt-anchorscroll'],
	compatibilityDate: '2025-01-13',

})