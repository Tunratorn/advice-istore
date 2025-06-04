<script lang="ts" setup>
    import Swiper from 'swiper/bundle';

    const props = defineProps(['objectMenu','objectProduct','className','slidesPerView'])

    const arrMenu = ref(props.objectMenu)
    const arrProduct = ref(props.objectProduct)
    const swiperClass = ref(props.className)
    const slidesPerView = ref(props.slidesPerView)
    const itemProduct = ref([])
    
    const setDataProduct = () => {
        let n = 0
        for (const [key, val] of Object.entries(arrProduct.value.item)) {
            if (n == 0) {
                itemProduct.value.push({
                    'model': val.product_name,
                    'color': val.item_spec.color,
                    'item_product': val.item
                })
            }
            n++
        }

        let numColor = 0
        if (itemProduct.value[0].color != undefined) {
            for (const [keyColor, valColor] of Object.entries(itemProduct.value[0].color)) {
                if (numColor == 0) {
                    selectColorProduct(valColor.color_name)
                }
                numColor++
            }
        }
    }
    

    var swiper

    const swiperProduct = async () => {
        if (swiper) {
            await swiper.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper = await new Swiper(`.${swiperClass.value}`, {
            slidesPerView: slidesPerView.value,
            spaceBetween: 20,
            freeMode: true,
            navigation: {
                prevEl: `.prev-${swiperClass.value}`,
                nextEl: `.next-${swiperClass.value}`
            },
        });
    }

    const selectProduct = async (model: String) => {
        let key_model = model.toLowerCase().replaceAll(' ','-')
        console.log(arrProduct.value.item[key_model]);
        itemProduct.value[0].model = model
        itemProduct.value[0].item_product = arrProduct.value.item[key_model].item
        
        //set color first
        console.log(arrProduct.value.item[key_model].item_spec.color,'setcolor');
        
        itemProduct.value[0].color = []
        let numColor = 0
        for (const [key, val] of Object.entries(arrProduct.value.item[key_model].item_spec.color)) {
            itemProduct.value[0]['color'].push({
                'color_name': val.color_name,
                'color_code': val.color_code,
                'color_selected': numColor == 0 ? true : false
            })
            
            if (numColor == 0) {
                selectColorProduct(val.color_name)
            }
            numColor++
        }
    }

    const selectColorProduct = async (color: String) => {
        for (const [keyColor, valColor] of Object.entries(itemProduct.value[0].color)) {
            valColor.color_selected = false
            if (valColor.color_name == color) {
                valColor.color_selected = true
            }
        }

        let key_model = itemProduct.value[0].model.toLowerCase().replaceAll(' ','-')
        itemProduct.value[0].item_product = []
        let getData = arrProduct.value.item[key_model].item
        
        for (const [key, val] of Object.entries(getData)) {
            if (val.color == color) {
                itemProduct.value[0].item_product.push(val)
            }
        }

        setTimeout(() => {
            swiperProduct()
        }, 0)
    }

    onMounted(async () => {
        await setDataProduct()
        await swiperProduct()
    })
</script>

<template>
    <div v-if="itemProduct.length > 0" class="product-wrapper">
        <div class="frame-card-menu m-2">
            <div class="p-5">
                <ul class="menuproduct-wrapper">
                    <li v-for="(itemModel,keyModel) in arrMenu" class="list-product"
                        :class="{ 'active': itemProduct[0].model == itemModel.product_name}"
                        @click="selectProduct(itemModel.product_name)">
                        {{ itemModel.product_name }}</li>
                </ul>
                <hr class="my-4">
                <ul v-if="itemProduct.length > 0" class="form-color-product">
                    <li v-for="itemColor in itemProduct[0].color" @click="selectColorProduct(itemColor.color_name)" class="wrapper-color-product" :class="{'active': itemColor.color_selected}">
                        <div class="color-product" :style="`background-color: ${itemColor.color_code}`"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="itemProduct.length > 0" class="overflow-hidden">
            <div class="row-swiper m-2">
                <div class="swiper swiper-product-wrapper swiper-content" :class="`${swiperClass}`">
                    <div class="swiper-wrapper swiper-product">
                        <div v-for="product in itemProduct[0].item_product" class="swiper-slide box-card-product">
                            <CardProduct :key="product" :objectProduct="product"></CardProduct>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="group-btn-swiper-under mt-3">
        <button class="btn-swiper btn-swiper-prev-under" :class="`prev-${swiperClass}`"><i class="fa-solid fa-angle-left" style="font-size:16px;" data-v-02281a80=""></i></button>
        <button class="btn-swiper btn-swiper-next-under" :class="`next-${swiperClass}`"><i class="fa-solid fa-angle-right" style="font-size:16px;" data-v-02281a80=""></i></button>
    </div>
</template>

<style lang="css" scoped>
    
</style>
