<script lang="ts" setup>
    const route = useRoute()
    const page = ref(route.params.productlist)
    const serie = ref(route.params.product)    
    const navbarMenu_ = navbarMenu()
    navbarMenu_.value = page.value
    const page_comingsoon = ref(true)

    const device_size = ref(0)
    
    var arrProduct = ref([])

    const bannerProduct = ref('')
    const videoProduct = ref('')
    const productName = ref('')
    const productSeries = ref('')
    const listProduct = ref([])
    const numScrollTop = ref([])
    const arrlistProduct = ref([])

    const slidesPerView_product = ref(0)

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
        videoProduct.value = arrProduct.value[page.value].video
        listProduct.value = arrProduct.value[page.value].item[serie.value].item
        productSeries.value = arrProduct.value[page.value].item[serie.value].serie
        
        for (const [key, val] of Object.entries(listProduct.value)) {
            arrlistProduct.value.push({
                'model': key,
                'item_product': []
            })

            let n = 0
            if (val.item_spec.length != 0) {
                for (const [key_color, val_color] of Object.entries(val.item_spec.color)) {
                    val_color['color_selected'] = false
                    if (n ==0) {
                        val_color['color_selected'] = true
                        
                        for (const [key_product, val_product] of Object.entries(val.item)) {
                            if (val_product.color == key_color) {
                                let i = arrlistProduct.value.map(i => i.model).indexOf(key)
                                arrlistProduct.value[i].item_product.push(val_product)
                            }
                        }
                    }
                    n++
                }
            }
        }
    }

    function scrollToSection(sectionId:String,index:Number) {
        document.getElementById('header-menu-main')?.classList.add('header-down') 
        const section = document.getElementById(sectionId);
        let numTop = numScrollTop.value[index]

        if (section) {
            const top = numTop - 20;
            window.scrollTo({
                top: top,
                behavior: 'smooth',
            });
        }
    }

    const updateWidth = async () => {
        setTimeout(() => {
            device_size.value = window.innerWidth
        
            slidesPerView_product.value = 2
            if (window.innerWidth > 1200) {
                slidesPerView_product.value = 4
            }
            else if (window.innerWidth > 991) {
                slidesPerView_product.value = 4
            } 
            else if (window.innerWidth > 768) {
                slidesPerView_product.value = 3
            } 
            else if (window.innerWidth > 450) {
                slidesPerView_product.value = 2
            } 
            
        }, 100);
    
    }


    onMounted(async () => {
        await updateWidth()
        await window.addEventListener('resize', updateWidth)
        await getDataProduct()
        
        //set scroll Top content
        // setTimeout(() => {
        //     window.scrollTo(0, 0);
        //     listProduct.value.forEach((val,index) => {
        //         numScrollTop.value.push(document.getElementById(`product${index}`)?.offsetTop)
        //     })            
        // }, 100);
        
        // var scrollableElement = document.body; 
 
        // scrollableElement.addEventListener('wheel', function(){
        //     const section1 = document.getElementById('product0');
        // })
    })
</script>

<template>
    <NuxtLayout v-if="!page_comingsoon" name="istore">
        <section  class="form-control-comingsoon">
            Coming Soon
        </section>
    </NuxtLayout>
    <NuxtLayout v-else name="istore">
        <div v-if="device_size < 1024" class="form-banner-product-mobile">
            <img class="img-banner-product-mobile" src="/images/example/bannerCatEX.png" alt="banner-ipad">
        </div>
        <div v-else class="banner-product">
            <div class="d-flex justify-content-center align-items-center w-100 h-100">
                <img v-if="bannerProduct" class="img-banner-product" :src="bannerProduct" alt="banner-ipad" srcset="">
            </div>
        </div>
        <div v-if="device_size > 1024" class="bg-white">
            <nav class="container-fluid py-3">
                <ul class="form-submenu-product m-0">
                    <li class="submenu-product"><NuxtLink class="link-submenu" to="/">หน้าหลัก</NuxtLink></li>
                    <li class="submenu-product"><NuxtLink class="link-submenu" :to="`/${String(page)}/${String(serie)}`">{{productName}}</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <section id="containerDiv" class="bg-white py-4 mt-2">
            <div class="container-fluid ">
                <h1 class="text-subject mb-2">ผลิตภัณฑ์ {{productSeries}} ทั้งหมด</h1>
                <div class="series-wrapper">
                    <ul class="form-control-product">
                        <li v-for="(item,key) in listProduct" class="item-series">
                            <div @click="scrollToSection(`product${key}`,key)" class="group-series-items">
                                <div class="item-icon-series">
                                    <img v-if="item.product_img" class="img-product-menu" :src="item.product_img" alt="img-product">                                  
                                </div>
                                <span class="text-series-product">{{item.product_name}}</span>
                                <span class="text-price-product">ราคาเริ่มต้น ฿{{ FormatPrice(item.recommend_price) }} THB</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class=" py-2 mt-4 mb-5">
            <div class="container-fluid">
                <h1 class="text-subject mb-3">ทำความรู้จักกับ {{ productName }}</h1>                 
            </div>
            <div class="d-flex justify-content-center w-100">
                <div class="container-fluid anime-product-video">
                    <video class="item-video-product anime-product-video" :src="videoProduct" type="video/mp4" autoplay loop muted></video>
                </div>
            </div>
        </section>
        <section :id="`product${key}`" v-for="(itemlistProduct,key) in listProduct" class="container-fluid mb-5">
            <h1 class="text-subject mb-3">ผลิตภัณฑ์ของ {{ itemlistProduct.product_name }}</h1>
            <SwiperProductSerie 
                :objectColor="itemlistProduct.item_spec.color" 
                :objectProduct="itemlistProduct.item"
                :className="`swiper-${key}`"
                :slidesPerView="slidesPerView_product"
            ></SwiperProductSerie>
        </section>
    </NuxtLayout>
</template>

<style lang="css" scoped>
    .form-control-product {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .item-icon-series {
        width: 200px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .group-series-items {
        display: flex;
        flex-flow: column;
        gap: 5px;
        width: fit-content;
    }

    .text-series-product {
        font-size: clamp(20px, 3vw, 24px);
        font-weight: 500;
        font-style: normal;
        line-height: 20px;
    }

    .text-price-product {
        font-size: clamp(20px, 3vw, 24px);
        font-weight: 400;
        font-style: normal;
        line-height: 24px;
        color: #6B7280;
    }

  

    
</style>
