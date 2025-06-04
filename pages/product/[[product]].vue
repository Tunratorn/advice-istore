<script lang="ts" setup>
import Swiper from 'swiper/bundle';
const route = useRoute()
const page = ref(route.params.product)
const page_comingsoon = ref(true)
const navbarMenu_ = navbarMenu()
navbarMenu_.value = page.value

const arrProduct = ref([])
const bannerProduct = ref('')
const productName = ref('')
const listProduct = ref([])
const listAboutProduct = ref([])
// const itemProduct = ref([])

const device_size = ref(0)

const slidesPerView_product = ref(0)
const slidesPerView_about = ref(0)

const getDataProduct = async () => {
    const responProduct = await $fetch('https://api2.advice.in.th/api/getProductlist', {
        method: 'POST',
        body: {
            "product": page.value
        }
    })
    arrProduct.value = JSON.parse(responProduct).data
    let status = JSON.parse(responProduct).status
    if (status != 'success') {
        // navigateTo('/')
        page_comingsoon.value = false
    }

    productName.value = arrProduct.value[page.value].product
    bannerProduct.value = arrProduct.value[page.value].banner
    listAboutProduct.value = arrProduct.value[page.value].item_about
    listProduct.value = arrProduct.value[page.value].item
    
    // for (const [key, val] of Object.entries(listProduct.value)) {
    //     let n = 0
    //     for (const [key2, val2] of Object.entries(val.item)) {
    //         val2.product_selected = false
            
    //         if (n == 0) {
    //             val2.product_selected = true
    //             itemProduct.value.push({
    //                 'serie': val.serie,
    //                 'model': val2.product_name,
    //                 'color': [],
    //                 'item_product': []
    //             })

    //             selectProduct(val.serie,val2.product_name)
               
    //             let numColor = 0
    //             if (val2.item_spec.color != undefined) {
    //                 for (const [keyColor, valColor] of Object.entries(val2.item_spec.color)) {
    //                     if (numColor == 0) {
    //                         selectColorProduct(val.serie,valColor.color_name)
    //                     }

    //                     numColor++
    //                 }
    //             }
    //         }
    //         n++
    //     }
    // }
    
}

var swiper_about

const swiperAbout = async () => {
    if (swiper_about) {
        await swiper_about.destroy(true, true); // Destroy Swiper and remove all its styles
    }

    swiper_about = new Swiper(".swiper-content-about", {
        slidesPerView: slidesPerView_about.value,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-about-next",
            prevEl: ".swiper-about-prev",
        },
    });
}

function scrollToSection(sectionId: String, index: Number) {
    document.getElementById('header-menu-main')?.classList.add('header-down')
    const section = document.getElementById(sectionId);

    if (section) {
        const top = section.offsetTop - 20;

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
}



const updateWidth = async () => {
    setTimeout(() => {
        device_size.value = window.innerWidth
    
        slidesPerView_product.value = 1
        slidesPerView_about.value = 1
        if (window.innerWidth > 1200) {
            slidesPerView_about.value = 4
            slidesPerView_product.value = 3
        }
        else if (window.innerWidth > 991) {
            slidesPerView_about.value = 3
            slidesPerView_product.value = 3
        } 
        else if (window.innerWidth > 768) {
            slidesPerView_about.value = 3
            slidesPerView_product.value = 2
        } 
        else if (window.innerWidth > 450) {
            slidesPerView_about.value = 2
            slidesPerView_product.value = 1
        } 
        
    }, 100);
  
    await swiperAbout()
}

onMounted(async () => {
    await updateWidth()
    await window.addEventListener('resize', updateWidth)
    await getDataProduct()
    await swiperAbout()
    // await swiperProduct()
})
</script>

<template>
    <NuxtLayout v-if="!page_comingsoon" name="istore">
        <section class="form-control-comingsoon">
            Coming Soon
        </section>
    </NuxtLayout>
    <NuxtLayout v-else name="istore">
        <section>
            <div v-if="device_size < 1024" class="form-banner-product-mobile">
                <img class="img-banner-product-mobile" src="/images/example/bannerCatEX.png" alt="banner-ipad">
            </div>
            <div v-else class="banner-product">
                <div class="d-flex justify-content-center align-items-center w-100 h-100 overflow-hidden">
                    <img v-if="bannerProduct" class="img-banner-product" :src="bannerProduct" alt="banner-ipad">
                </div>
            </div>
            <div v-if="device_size > 1024" class="bg-white">
                <nav class="container-fluid py-3">
                    <ul class="form-submenu-product m-0">
                        <li class="submenu-product">
                            <NuxtLink class="link-submenu" to="/">หน้าหลัก</NuxtLink>
                        </li>
                        <li class="submenu-product">
                            <NuxtLink class="link-submenu" :to="String(page)">{{ productName }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="container-fluid bg-white mt-2 py-4 px-3">
                <h1 class="text-subject">ผลิตภัณฑ์ {{ productName }} ทั้งหมด</h1>
                <div class="series-wrapper mt-1 mb-3 mt-md-4 pt-md-3">
                    <ul class="form-control-product p-0">
                        <li v-for="(product, key) in listProduct" class="item-series">
                            <div @click="scrollToSection(`product${key}`, key)" class="group-series-items">
                                <div class="item-icon-series">
                                    <img v-if="product.product_img" class="img-product-menu" :src="product.product_img" alt="img-product"
                                        srcset="">
                                </div>
                                <span class="text-series-product">{{ product.serie }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container-fluid my-5 pb-1">
                <div class="mb-4">
                    <h1 v-if="productName == 'iPhone'" class="text-subject">ดูไฮไลท์ต่างๆ ของ iPhone</h1>
                    <h1 v-else class="text-subject">ทำความรู้จักกับ {{ productName }}</h1>
                    <div class="wrapper-content-about">
                        <div class="overflow-hidden content-swiper-about">
                            <div class="row-swiper position-relative mt-4 mb-3 mx-2">
                                <div class="swiper swiper-content-about">
                                    <div class="swiper-wrapper swiper-about">
                                        <div v-for="item in listAboutProduct" class="swiper-slide content-about"
                                            :style="`background-image: url(${item.about_img})`">
                                            <p class=" mb-2 font-22" :style="`color: ${item.color_font}`">
                                                {{ item.text_title1 }}</p>
                                            <h2 class="line-height-26 font-bold-36" :style="`color: ${item.color_font}`">
                                                {{ item.text_title2 }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-btn-swiper-under my-3">
                        <button class="btn-swiper btn-swiper-prev-under swiper-about-prev"><i
                                class="fa-solid fa-angle-left" style="font-size:16px;" data-v-02281a80=""></i></button>
                        <button class="btn-swiper btn-swiper-next-under swiper-about-next"><i
                                class="fa-solid fa-angle-right" style="font-size:16px;" data-v-02281a80=""></i></button>
                    </div>
                </div>
                <div :id="`product${keyProduct}`" v-for="(product,keyProduct,index) in listProduct" class="mb-3">
                    <h1 class="text-subject">ผลิตภัณฑ์ของ {{ product.serie }}</h1>
                    <div class="mt-3">
                        <SwiperProductCategory 
                            :object-menu="product.item"
                            :object-product="listProduct[keyProduct]"
                            :class-name="`swiper-${keyProduct}`"
                            :slides-per-view="slidesPerView_product"
                        ></SwiperProductCategory>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style scoped>
.img-banner-product {
    width: auto;
    height: 100%;
}

.banner-product {
    width: 100%;
    height: 680px;
    background-color: #000000;
}

.group-series-items {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.group-series-items:hover .img-product-menu {
    scale: 1.08;
    cursor: pointer;
}

.text-series-product {
    font-size: clamp(20px, 3vw, 24px);
    font-weight: 500;
    font-style: normal;
    line-height: normal;
}

.content-about {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 1.6rem;
    height: clamp(380px, 80vw, 550px);
    box-shadow: 0 0 10px #00000021;
}


</style>
