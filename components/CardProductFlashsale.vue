<script lang="ts" setup>
    const props = defineProps(['objectProduct'])
  
    const productName = ref(props.objectProduct.product_name)
    const price = ref(props.objectProduct.sale_price)
    const specialPrice = ref(props.objectProduct.special_price)
    const productImg = ref(props.objectProduct.product_img)
</script>

<template>
    <div class="card-detail-product">
        <div class="form-contal-imgproduct">
            <div class="w-100 d-flex justify-content-end position-absolute">
                <div>
                    <img class="icon-zero-precen" src="/images/icon/Installmentzero.png"
                        alt="img-bg-Frameproduct" srcset="">
                </div>
            </div>
            <div class="w-100 d-flex justify-content-center align-items-center">
                <!-- <div class="ex-img-product">IMG Product</div> -->
                <img v-if="productImg" class="img-product-card" :src="productImg" alt="">
            </div>
            <p class="m-0 mt-4 detail-crad-product">{{ productName }}</p>
            <div class="w-100 mt-3">
                <div class="group-item-pricespecial">
                    <span class="text-special-price">ราคาพิเศษ:
                        <span class="special-price-card">฿{{ FormatPrice(specialPrice) }}</span>
                    </span>
                </div>
                <div class="group-item-pricespecial">
                    <span class="text-normal-price">ราคาปกติ:
                        <span class="normal-price-card">฿{{ FormatPrice(price) }}</span>
                    </span>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-between align-items-center mt-2">
                <div class="item-specbar"></div>
                <span class="text-economical-price">ประหยัด: ฿9,000</span>
            </div>
            <p class="text-still-left">สินค้าเหลือเพียง 1</p>
            <div class="w-100">
                <button class="btn-buy-flashsale">ซื้อเลย</button>
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
        max-height: 260px;
        width: 100%;
        height: auto;
    }

    .form-contal-imgproduct {
        display: flex;
        flex-wrap: wrap;
        position: relative;
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
        font-size: clamp(16px, 3vw, 22px);
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
        font-size: clamp(18px, 3vw, 22px);
        color: #48484A;
        line-height: 16px;
        font-family: 'DBHeavent-Bold';
    }

    .special-price-card {
        color: #0A84FF;
    }

    .text-normal-price {
        font-size: clamp(16px, 3vw, 22px);
        font-style: normal;
        font-weight: 400;
        color: #8E8E93;
    }

    .normal-price-card {
        text-decoration: line-through;
    }

    .text-economical-price {
        font-size: clamp(14px, 3vw, 18px);
        font-family: 'DBHeavent-Bold';
        color: #8E8E93;
    }

    .item-specbar {
        width: 110px;
        height: clamp(4px, 1vw, 6px);
        background: #E5E5EA;
        border-radius: 20px;
    }

    .text-still-left {
        color: #0A84FF;
        font-size: clamp(14px, 3vw, 18px);
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0.06px;
    }

    .btn-buy-flashsale {
        border-radius: 8px;
        border: none;
        outline: none !important;
        color: #fff;
        font-size: clamp(16px, 3vw, 20px);
        font-weight: 400;
        padding: 8px 20px;
        width: 100%;
        background-color: #0A84FF;
        transition: .1s;
    }
    .btn-buy-flashsale:hover {
        transition: 0.3s;
        background-color: #54aaff;
    }
    .btn-buy-flashsale:active {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
</style>
