<script lang="ts" setup>

</script>

<template>
    <div>
        <div class="header-card-content">
            <div class="text-header-card">
                <IconAddressProduct class="icon-header-card"></IconAddressProduct>
                ที่อยู่ในการรับสินค้า
            </div>
        </div>
        <div class="body-content-card py-4">
            <div class="mb-4">
                <h4 class="font-bold-26">ที่อยู่เริ่มต้น:</h4>
                <div class="box-item-address">
                    <IconDots class="icon-edit-address"></IconDots>
                    <div class="item-default-address mb-2">ค่าเริ่มต้น</div>
                    <div>
                        <span class="font-bold-24 me-2 pe-1">Dev Tunratorn</span>
                        <span class="font-22 color-gray">0981856065</span>
                    </div>
                    <p class="font-22 color-gray m-0">บริษัท แอดไวซ์ ไอที อินฟินิท จำกัด (มหาชน) 74/1 หมู่ 1 ต.ท่าอิฐ
                        อ.ปากเกร็ด จ.นนทบุรี 11120</p>
                </div>
            </div>
            <div class="mb-4">
                <h4 class="font-bold-26">ที่อยู่อื่น:</h4>
                <div v-for="n in 4" class="box-item-address mb-2">
                    <IconDots class="icon-edit-address"></IconDots>
                    <div>
                        <span class="font-bold-24 me-2 pe-1">Dev Tunratorn</span>
                        <span class="font-22 color-gray">0981856065</span>
                    </div>
                    <p class="font-22 color-gray m-0">บริษัท แอดไวซ์ ไอที อินฟินิท จำกัด (มหาชน) 74/1 หมู่ 1 ต.ท่าอิฐ
                        อ.ปากเกร็ด จ.นนทบุรี 11120</p>
                </div>
                <div class="box-add-address">
                    <span class="addnew-address">
                        <IconPlusAdd></IconPlusAdd> เพิ่มที่อยู่ในการรับสินค้าใหม่
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
     /* card address product */
    .icon-header-card {
        fill: #fff;
        width: 26px;
    }

    .header-card-content {
        background: #000;
        padding: .6rem 2rem;
        border-radius: 8px 8px 0 0;
    }

    .body-content-card {
        width: 100%;
        height: auto;
        padding: 1rem 2rem;
        background: #fff;
        border-radius: 0 0 8px 8px;
    }

    .text-header-card {
        color: #fff;
        font-size: 28px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .box-item-address {
        border: 1px solid #D1D5DB;
        border-radius: 8px;
        padding: 1.2rem;
        position: relative;
    }

    .item-default-address {
        border-radius: 6px;
        padding: 2px 12px;
        font-size: 16px;
        color: #fff;
        width: fit-content;
        background: #0095DA;
    }

    .icon-edit-address {
        position: absolute;
        z-index: 99;
        right: 1.2rem;
        cursor: pointer;
    }
    .icon-edit-address:hover {
        opacity: 0.5;
    }

    .box-add-address {
        border: 1px dashed #D1D5DB;
        border-radius: 8px;
        padding: .6rem 1rem;
        display: flex;
        justify-content: center;
    }

    .addnew-address {
        font-size: 24px;
        font-weight: 400;
        color: #9CA3AF;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: 0.3s;
    }
    .addnew-address:hover {
        opacity: 0.8;
    }
</style>
