<script lang="ts" setup>
    const props = defineProps(['objectProduct'])
    // console.log(props);
    
    var productName = ref(props.objectProduct.product_name)
    var productStorage = ref(props.objectProduct.storage)
    var productImg = ref(props.objectProduct.product_img)
    var product = ref(props.objectProduct.menu_group_name)
    var serie = ref(props.objectProduct.menu_list_name)
    var model = ref(props.objectProduct.menu_list_dtl_name)
    var linkProductDetail = ref(`/productdetails/${product.value.toLowerCase().replaceAll(' ','-')}/${serie.value.toLowerCase().replaceAll(' ','-')}/${model.value.toLowerCase().replaceAll(' ','-')}`)
</script>

<template>
    <div class="card-detail-product">
        <div class="form-contal-imgproduct">
            <NuxtLink :to="linkProductDetail" class="link-none-underlines">
                <div class="w-100 d-flex justify-content-center align-items-center">
                    <!-- <div class="ex-img-product">IMG Product</div> -->
                    <img v-if="productImg" class="img-product-card" :src="productImg" alt="img-product-advice" srcset="">
                </div>
                <p class="m-0 mt-4 mb-2 detail-crad-product">{{ productName }}</p>
                <p class="m-0 text-size-product">{{ productStorage }}</p>
                <div class="d-flex justify-content-center mt-2">
                    <button class="btn-buy-product">ซื้อ</button>
                </div>
            </NuxtLink>
        </div>

    </div>
</template>

<style lang="css" scoped>
    .ex-img-product {
        width: 100%;
        height: 220px;
        background: #ccc;
        color: #b5b5b5;
        text-transform: uppercase;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-product-card {
        max-width: fit-content;
        max-height: 240px;
        width: auto;
        height: auto;
    }

    .form-contal-imgproduct {
        display: flex;
        flex-flow: column;
        position: relative;
    }
    .card-detail-product {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        position: relative;
        border-radius: 8px;
        cursor: pointer;
    }

    .detail-crad-product {
        font-size: clamp(20px, 3vw, 24px);
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.43px;
        color: #48484A;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }

    .group-item-pricespecial {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 100%;
    }

    .text-special-price {
        font-size: 22px;
        color: #48484A;
        line-height: 18px;
        font-family: 'DBHeavent-Bold';
    }

    .special-price-card {
        color: #0A84FF;
    }

    .text-normal-price {
        font-size: clamp(15px, 2vw, 18px);
        font-style: normal;
        font-weight: 400;
        color: #8E8E93;
    }

    .normal-price-card {
        text-decoration: line-through;
    }

    .text-size-product {
        font-size: clamp(22px, 3vw, 28px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        color: #000;
    }

    .btn-buy-product {
        font-size: clamp(17px, 2vw, 20px);
        font-weight: 400;
        line-height: normal;
        border-radius: 20px;
        padding: 6px 30px;
        border: none;
        outline: none !important;
        background: #0A84FF;
        color: #fff;
        transition: .1s;
    }
    .btn-buy-product:hover {
        opacity: 0.7;
        transition: 0.2s;
        cursor: pointer;
    }
    .btn-buy-product:active {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
</style>
