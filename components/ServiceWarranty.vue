<script lang="ts" setup>
   const viewport = useViewport()


</script>

<template>
    <div v-if="!viewport.isGreaterOrEquals('tablet-md')" class="d-flex justify-content-center align-items-center px-sm-4 mb-2">
        <h2 class="">เงื่อนไขการรับประกัน</h2>
    </div>
    <div class="header-card-content">
        <div class="text-header-card">
            การรับประกัน
        </div>
    </div>
    <div class="body-content-card px-sm-4 pb-5">
        <div class="px-0 px-md-5">
            <img src="https://img.advice.co.th/images_nas/iStore/warrantycard.jpg" alt="img-service-warranty" class="img-service-warranty">
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4 mt-md-5">
            <h4 class="d-flex align-items-center gap-3"><IconShippingFast class="icon-service"></IconShippingFast> เงื่อนไขการรับประกันสินค้า Apple</h4>
            <ul style="margin-left: 28px;">
                <li class="warranty-list">สำหรับหน้าสาขา ลูกค้าต้องตรวจเช็คเครื่องให้เรียบร้อยก่อนรับเครื่อง กรณีรับเครื่องเรียบร้อยแล้วพบว่าสินค้ามีปัญหา สามารถเข้ารับบริการหลังการขายโดยตรงที่ศูนย์บริการหลังการขายของ Apple (Apple Authorized Service Provider) ทั่วประเทศ</li>
                <li class="warranty-list">สินค้า Apple สามารถตรวจสอบเงื่อนไขการรับประกันได้ที่ https://www.apple.com/th/legal/warranty</li>
                <li class="warranty-list">การรับประกันสินค้า จะไม่ครอบคลุมถึงความเสียหายอันเนื่องมาจาก สินค้ามีสภาพผิดปกติไปจากเดิมมาจากรูปทรง ได้แก่ แตก, หัก, บิ่น, งอ, ยุบ, เบี้ยว, ร้าว, ทะลุ, มีบางส่วนขาดหายไป มีการแก้ไขก่อนโดยไม่ได้รับอนุญาต มีร่องรอยการเปิดแกะ หรือร่องรอยการซ่อมที่ไม่ได้รับการแต่งตั้งจากผู้ผลิต</li>
                <li class="warranty-list">ศูนย์บริการหลังการขายของ Apple หรือ Apple Authorized Service Provider (AASP) ได้แก่ iCare, iService เป็นต้น สามารถดูเพิ่มเติมได้ที่ https://locate.apple.com/th/th/</li>
                <li class="warranty-list">การรับประกันสินค้าเป็นไปตามที่ผู้ผลิตกำหนด โดยรับประกันสินค้าทางด้านซอฟต์แวร์เป็นเวลา 1 ปี ไม่รวมประกันอุบัติเหตุหรือสินค้าที่มีรอยอันเกิดจากการผลิต</li>
                <li class="warranty-list">กรณีที่สินค้ามีปัญหาหลังจากมีการเปิดเครื่องและทำการเชื่อมต่อ Wi-Fi (Unbrick) บริษัทฯ ขอสงวนสิทธิ์ในการรับคืนสินค้าเพื่อขอเงินคืน โดยบริษัทจะให้บริการดูแลสินค้าผ่านทางศูนย์บริการที่ได้รับการแต่งตั้งอย่างเป็นทางการแทน</li>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .header-card-content {
        background: #000;
        padding: .6rem 2rem;
        border-radius: 8px 8px 0 0;
        text-align: center;
        color: white;
        font-size: 28px;
        font-weight: 500;
    }

    .body-content-card {
        width: 100%;
        height: auto;
        padding: 1rem 2rem;
        background: #fff;
        border-radius: 0 0 8px 8px;
        margin-bottom: 5rem;
    }

    .icon-service {
        width: 25px;
        height: 25px;
    }

    .img-service-warranty {
        width: 100%;
        height: auto;
    }

    li.warranty-list {
        list-style: disc !important;
        font-size: 20px;
        color: #808080;
    }
    
    @media only screen and (max-width: 992px) { 
        .header-card-content, .body-content-card {
            background: unset;
            padding: 0;
        }

        .text-header-card {
            display: none;
        }

        .img-service-warranty {
            border-radius: 8px;
        }
    }
</style>
