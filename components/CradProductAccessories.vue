<script lang="ts" setup>
    const props = defineProps(['objectProduct'])

    const productName = ref(props.objectProduct.product_name)
    const productPrice = ref(props.objectProduct.sale_price)
    const productImg = ref(props.objectProduct.product_img)
    const code = ref(props.objectProduct.code)
  
</script>

<template>
    <div class="card-detail-product">
        <div class="form-contal-imgproduct">
            <div class="w-100 d-flex justify-content-center align-items-center" style="height: clamp(160px, 40vw, 200px);">
                <!-- <div class="ex-img-product">IMG Product</div> -->
                <img v-if="productImg" class="img-product-card" :src="productImg" alt="img-product-advice" srcset="">
            </div>
            <p class="m-0 detail-crad-product">{{ productName }}</p>
            <div class="w-100">
                <div class="group-item-pricespecial">
                    <span class="text-special-price">฿{{ FormatPrice(productPrice) }}</span>
                </div>
            </div>
            <div class="d-flex justify-content-center w-100">
                <button class="btn-addcart" @click="addCart(code,1),showSnackbar(productName,productImg)"><i class="fa-solid fa-plus icon-addcart"></i>เพิ่มลงตะกร้า</button>
            </div>
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
        max-height: 200px;
        width: 100%;
        height: auto;
    }

    .form-contal-imgproduct {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        gap: 16px;
    }
    .card-detail-product {
        width: 100%;
        height: 100%;
        padding: 14px;
        position: relative;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        cursor: pointer;
    }

    .detail-crad-product {
        font-size: clamp(18px, 3vw, 22px);
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.43px;
        color: #48484A;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 36px;
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
        font-size: clamp(20px, 3vw, 24px);
        color: #48484A;
        line-height: 18px;
        font-family: 'DBHeavent-Bold';
    }

    .special-price-card {
        color: #0A84FF;
    }

    .text-normal-price {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        color: #8E8E93;
    }

    .normal-price-card {
        text-decoration: line-through;
    }

    
</style>
