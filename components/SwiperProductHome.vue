<script lang="ts" setup>
    import Swiper from 'swiper/bundle';

    const props = defineProps(['objectProduct','className','slidesPerView','isMenu','subject'])

    const viewport = useViewport()
    const view_breakpoint = ref(viewport.breakpoint)

    const arrProduct = ref(props.objectProduct)
    const dataProduct = ref([])
    const textSelectProduct = ref('')
    const swiperClass = ref(props.className)
    const slidesPerView = ref('')
    const spaceBetween = ref('')
    const isMenu = ref(props.isMenu)
    const isSubject = ref(props.subject)
    const linkMenu = ref('')
  
    var swiper

    const swiperProduct = async () => {
        if (swiper) {
            await swiper.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper = await new Swiper(`.${swiperClass.value}`, {
            slidesPerView: slidesPerView.value,
            spaceBetween: spaceBetween.value,
            // freeMode: true,

            // slidesPerGroup: slidesPerView.value,
            // centeredSlides: false,
            // slidesPerGroupSkip: 1,
            // grabCursor: true,
            // keyboard: {
            //     enabled: true,
            // },
            //   loop: true,
            pagination: {
                el: `.pagination-${swiperClass.value}`,
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                prevEl: `.prev-${swiperClass.value}`,
                nextEl: `.next-${swiperClass.value}`
            },
        });
    }

    const selectViewProduct = async (product: String) => {
        dataProduct.value = []
        await swiperProduct()
        textSelectProduct.value = product
        linkMenu.value = product.toLowerCase().replaceAll(' ','-')
        let numindex = arrProduct.value.map(i => i.product).indexOf(product.toLowerCase())
        dataProduct.value = arrProduct.value[numindex].item
    }

    const setSlidesPerView = () => {
        if (window.innerWidth > 1450) {
            slidesPerView.value = 5
            spaceBetween.value = 20
        }
        else if (window.innerWidth > 1200) {
            slidesPerView.value = 4
            spaceBetween.value = 20
        } 
        else if (window.innerWidth > 992) {
            slidesPerView.value = 3
            spaceBetween.value = 15
        }
        else if (window.innerWidth > 768) {
            slidesPerView.value = 3
            spaceBetween.value = 12
        } 
        else {
            slidesPerView.value = 2
            spaceBetween.value = 15
        }
    }

    onMounted(async () => {
        await setSlidesPerView()
        if (isMenu.value) {
            await selectViewProduct('Mac')
        } else {
            dataProduct.value = arrProduct.value
            await swiperProduct()
        }
        
    })
</script>

<template>
    <div v-if="isSubject == 'newProduct'" class="d-flex justify-content-between">
        <h1 class="text-subject">สินค้าใหม่ล่าสุด</h1>
        <NuxtLink class="form-link-detail" :to="`/product/${linkMenu}`" v-if="view_breakpoint != 'desktop' && view_breakpoint != 'desktopMedium' && view_breakpoint != 'desktopWide'">
            <span class="font-20" style="width: max-content;">ดู {{ textSelectProduct }} ทั้งหมด</span>
            <IconArrowRight></IconArrowRight>
        </NuxtLink>
    </div>
    <div v-if="isSubject == 'iPhone'" class="d-flex justify-content-between">
        <h1 class="text-subject">ให้ <span class="text-highlight">iPhone</span> พาคุณไปเจอกับสิ่งใหม่</h1>
        <NuxtLink class="form-link-detail" to="/product/iphone">
            <span class="font-20" style="width: max-content;">ดู iPhone ทั้งหมด</span>
            <IconArrowRight></IconArrowRight>
        </NuxtLink>
    </div>
    <div v-if="isSubject == 'Mac'" class="d-flex justify-content-between">
        <h1 class="text-subject">เปิดโลกใบใหม่กับ <span class="text-highlight">Mac</span> ราคาพิเศษเฉพาะที่ Advice iStore</h1>
        <NuxtLink class="form-link-detail" to="/product/mac">
            <span class="font-20" style="width: max-content;">ดู Mac ทั้งหมด</span>
            <IconArrowRight></IconArrowRight>
        </NuxtLink>
    </div>
    <div v-if="isSubject == 'Watch'" class="d-flex justify-content-between">
        <h1 class="text-subject">รักทุกวันกับ <span class="text-highlight">Apple Watch</span> คู่หูที่คุณขาดไม่ได้</h1>
        <NuxtLink class="form-link-detail" to="/product/watch">
            <span class="font-20" style="width: max-content;">ดู Apple Watch ทั้งหมด</span>
            <IconArrowRight></IconArrowRight>
        </NuxtLink>
    </div>
    <div v-if="isSubject == 'Accessories'" class="d-flex justify-content-between">
        <h1 class="text-subject">เติมเต็มประสบการณ์ Apple ของคุณด้วย <span class="text-highlight">Accessories</span> ที่ลงตัว</h1>
        <NuxtLink class="form-link-detail" to="/product">
            <span class="font-20" style="width: max-content;">ดู Accessories ทั้งหมด</span>
            <IconArrowRight></IconArrowRight>
        </NuxtLink>
    </div>

    <div v-if="isMenu" class=" overflow-x-scroll">
        <div class="d-flex justify-content-between align-items-center mt-2 mt-md-3" style="min-width: max-content;">
            <ul class="group-newproduct-menulist">
                <li @click="selectViewProduct('Mac')" class="item-newproduct" :class="{'active': textSelectProduct == 'Mac'}">Mac</li>
                <li class="item-newproduct">iPad</li>
                <li @click="selectViewProduct('iPhone')" class="item-newproduct" :class="{'active': textSelectProduct == 'iPhone'}">iPhone</li>
                <li class="item-newproduct">Apple Watch</li>
                <li class="item-newproduct">AirPods</li>
                <li class="item-newproduct">AirTag</li>
                <li class="item-newproduct">Home Entertainment</li>
                <li class="item-newproduct">Accessories</li>
            </ul>
            <NuxtLink class="form-link-detail" :to="`/product/${linkMenu}`" v-if="view_breakpoint == 'desktop' || view_breakpoint == 'desktopMedium' || view_breakpoint == 'desktopWide'">
                <span class="font-20">ดู {{ textSelectProduct }} ทั้งหมด</span>
                <IconArrowRight></IconArrowRight>
            </NuxtLink>
        </div>
    </div>
    <div class="overflow-hidden">
        <div class="row-swiper position-relative my-3 mx-2">
            <div class="swiper d-flex align-items-center" :class="`${swiperClass}`">
                <div class="swiper-wrapper">
                    <div v-for="itemNewProduct in dataProduct" class="swiper-slide box-card-product">
                        <CardProductHome :objectProduct="itemNewProduct"></CardProductHome>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination item-swiper-pagination" :class="`pagination-${swiperClass}`"></div>
        </div>
    </div>
    <div class="group-btn-swiper">
        <button class="btn-swiper btn-swiper-prev" :class="`prev-${swiperClass}`"><i class="fa-solid fa-angle-left" style="font-size:16px;" data-v-02281a80=""></i></button>
        <button class="btn-swiper btn-swiper-next" :class="`next-${swiperClass}`"><i class="fa-solid fa-angle-right" style="font-size:16px;" data-v-02281a80=""></i></button>
    </div>
</template>

<style lang="css" scoped>
    .text-highlight {
        color: #007AFF;
    }
</style>
