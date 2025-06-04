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
            <div class="w-100 d-flex justify-content-center align-items-center h-product">
                <!-- <div class="ex-img-product">IMG Product</div> -->
                <img v-if="productImg" class="img-product-card" :src="productImg" alt="">
            </div>
            <p class="m-0 detail-crad-product">{{ productName }}</p>
            <div class="w-100 mb-md-4">
                <div class="group-item-pricespecial my-3">
                    <span class="text-special-price">ราคาเริ่มต้น:
                        <span class="special-price-card">฿{{ FormatPrice(price) }}</span>
                    </span>
                </div>
                <!-- <div class="group-item-pricespecial">
                    <span class="text-normal-price">ราคาปกติ:
                        <span class="normal-price-card">฿{{ FormatPrice(price) }}</span>
                    </span>
                </div> -->
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
        gap: clamp(6px, 2vw, 16px);
    }
    .card-detail-product {
        width: 100%;
        height: 100%;
        padding: clamp(0.5rem, 3vw, 1.4rem);
        position: relative;
        box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 8px;
        cursor: pointer;
    }

    .detail-crad-product {
        font-size: clamp(15px, 4vw, 22px);
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
        font-size: clamp(15px, 4vw, 24px);
        color: #48484A;
        line-height: 18px;
        font-family: 'DBHeavent-Bold';
    }

    .special-price-card {
        color: #0A84FF;
    }

    .text-normal-price {
        font-size: clamp(14px, 4vw, 18px);
        font-style: normal;
        font-weight: 400;
        color: #8E8E93;
    }

    .normal-price-card {
        text-decoration: line-through;
    }

    .h-product {
        height: clamp(110px, 45vw, 260px);
    }

    @media only screen and (max-width: 560px) {
        .h-product {
            height: clamp(110px, 44vw, 260px);
        }

        .detail-crad-product {
            font-size: clamp(15px, 4vw, 22px);
        }
        
        .text-special-price {
            font-size: clamp(15px, 4vw, 24px);
        }

        .card-detail-product {
            padding: 14px;
        }
    }
</style>
