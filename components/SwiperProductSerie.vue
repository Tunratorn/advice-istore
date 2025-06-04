<script lang="ts" setup>
    import Swiper from 'swiper/bundle';

    const props = defineProps(['objectColor','objectProduct','className','slidesPerView'])

    const arrColor = ref(props.objectColor)
    const arrProduct = ref(props.objectProduct)
    const swiperClass = ref(props.className)
    const slidesPerView = ref(props.slidesPerView)
    const itemProductSelected = ref([])

    var swiper

    const swiperProduct = async () => {
        if (swiper) {
            await swiper.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper = await new Swiper(`.${swiperClass.value}`, {
            slidesPerView: slidesPerView.value,
            spaceBetween: 10,
            freeMode: true
        });
    }

    const setDataProduct = () => {
        let color = ''

        if (arrColor.value != undefined) {
            for (const [key_color, val_color] of Object.entries(arrColor.value)) {
                if (val_color.color_selected) {
                    color = val_color.color_name
                }
            }
        }

        for (const [key, val] of Object.entries(arrProduct.value)) {
            if (val.color == color) {
                itemProductSelected.value.push(val)
            }
        }
    }

    const selectColor = (color:String) => {
        itemProductSelected.value = []

        for (const [key, val] of Object.entries(arrProduct.value)) {
            if (val.color == color) {
                itemProductSelected.value.push(val)
            }
        }

        for (const [key_color, val_color] of Object.entries(arrColor.value)) {
            val_color.color_selected = false
            if (key_color == color) {
                val_color.color_selected = true
            }
        }

        swiperProduct()
    }

    onMounted(async () => {
        await setDataProduct()
        await swiperProduct()
    })
</script>

<template>
    <div class="wrapper-select-color">
        <h4 class="m-0 font-bold-24" style="white-space: nowrap;">เลือกสี:</h4>
        <ul class="form-control-color">
            <li v-for="itemColor in arrColor" @click="selectColor(itemColor.color_name)" class="item-color-product" :class="{'active': itemColor.color_selected}">
                <div class="color-select" :style="`background-color: ${itemColor.color_code}`"></div>
                {{ itemColor.color_name }}
            </li>
        </ul>
    </div>
    <div class="overflow-hidden wrapper-swiper-overflow">
        <div class="row-swiper m-2">
            <div class="swiper swiper-product-wrapper"  :class="`${swiperClass}`">
                <div class="swiper-wrapper swiper-product">
                    <div v-for="product in itemProductSelected" class="swiper-slide box-card-product">
                        <CardProduct :key="product" :objectProduct="product"></CardProduct>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
      .wrapper-select-color {
        background: #fff;
        border-radius: 10px;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        gap: 14px;
        padding: .8rem 1.4rem;
    }

    .form-control-color {
        padding: 0;
        margin: 0;
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        gap: 10px;
        white-space: nowrap;
        overflow-x: auto;
    }

    .color-select {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        background-color: #ccc;
        box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%) inset;
        border: 1px solid #cccccc4a;
    }

    .item-color-product {
        display: flex;
        align-items: center;
        gap: 10px;
        width: fit-content;
        font-size: clamp(17px, 3vw, 22px);
        border: 1px solid #0a84ff00;
        border-radius: 50px;
        padding: 2px 14px 2px 10px;
        transition: 0.3s ease;
    }

    .item-color-product:hover {
        border: 1px solid #0A84FF;
    }
   
    .item-color-product.active {
        border: 1px solid #0A84FF;
    }
</style>
