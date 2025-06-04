<script lang="ts" setup>
    import Swiper from 'swiper/bundle';
    const userToken = useCookie('user-token')
    const pathLogin_ = pathLogin()
    const dataCookieProduct = useCookie('data-product');
    const arrProduct = ref([])
    const data_combineOrders = ref([])

    const getProductCart = async () => {
        let arrCode = []
        dataCookieProduct.value.forEach(val => {
            arrCode.push(val.code)
        });
       
        const respon = await $fetch('https://api2.advice.in.th/api/getProductCart', {
            method: 'POST',
            body: {
                "code": arrCode
            }
        })
   
        if (JSON.parse(respon).status == "success") {
            arrProduct.value = JSON.parse(respon).data       

            arrProduct.value.forEach(val => {
                val['qty'] = dataCookieProduct.value.find(i => i.code == val.code).qty
            });
        }
    }

    const swiperRecommend = () => {
        new Swiper(".swiper-content-recommend", {
            slidesPerView: 5,
            spaceBetween: 20,
            freeMode: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination-recommend",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-recommend-next",
                prevEl: ".swiper-recommend-prev",
            },
        });
    }

    const checklogin = () => {
        if (!userToken.value) {
            pathLogin_.value = 'checkout'
            let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalLogin')) // Returns a Bootstrap modal instance
            modal.show();
        } else {
            navigateTo('/checkout')
        }
    }

    const plusQty = (code: String) => {
        let indexProduct = arrProduct.value.map(i => i.code).indexOf(code)
        arrProduct.value[indexProduct].qty += 1
        addCart(code,1)
        combineOrders()
    }
   
    const minusQty = (code: String) => {
        let indexProduct = arrProduct.value.map(i => i.code).indexOf(code)
        arrProduct.value[indexProduct].qty -= 1
        if (arrProduct.value[indexProduct].qty == 0) {
            arrProduct.value = arrProduct.value.filter(i => i.code != code)
        } 
        removeCart(code,1)
        combineOrders()
    }

    const combineOrders = () => {
        data_combineOrders.value = []
        
        let qty = 0
        let price = 0
        let discount = 500

        arrProduct.value.forEach(val => {
            qty += parseInt(val.qty)
            price += parseInt(val.sale_price)
        });

        data_combineOrders.value['sum_qty'] = qty
        data_combineOrders.value['sum_price'] = price * qty
        data_combineOrders.value['discount'] = discount
        data_combineOrders.value['order_price'] = (price * qty) - discount
    }

    onMounted(async () => {
        await getProductCart()
        await swiperRecommend()
        await combineOrders()

        // let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalAppleCare')) // Returns a Bootstrap modal instance
        // Show or hide:
        // modal.show();
    })
</script>

<template>
    <NuxtLayout name="istore">
        <!-- Modal Applecare -->
        <div class="modal fade" id="modalAppleCare" tabindex="-1" aria-labelledby="modalAppleCareLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-login" style="max-width: 650px;">
                <div class="modal-content form-modal-registor" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-body p-0">
                        <div class="w-100 position-relative">
                            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="p-4 p-md-5">
                            <div class="d-flex justify-content-center align-items-center flex-column gap-2">
                                <img class="logo-applecare-cart" width="110px" src="~/assets/img/icon/AppleCare.png" alt="applecare-img">
                                <span class="font-25 text-center">AppleCare+ สำหรับ iPhone 15 Pro Max ( แผน 2 ปี )</span>
                                <div class="group-price-applecare">
                                    <h3 class="m-0">฿6,110.00</h3>
                                    <button class="btn-add-applecare">เพิ่ม</button>
                                </div>
                                <div class="w-100 text-start px-md-5 mb-4">
                                    <ul class="ps-4 detail-applecare">
                                        <li class="font-18">ซ่อมไม่จำกัดจำนวนครั้งสำหรับความคุ้มครองด้านความเสียหายจากอุบัติเหตุ Footnote</li>
                                        <li class="font-18">บริการซ่อมที่ผ่านการรับรองจาก Apple ซึ่งใช้อะไหล่แท้ของ Apple</li>
                                        <li class="font-18">สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple</li>
                                        <li class="font-18">iPhone ทุกเครื่องมาพร้อมกับการรับประกันแบบจำกัดที่มีระยะเวลา 1 ปี และ บริการช่วยเหลือด้านเทคนิคโดยไม่คิดค่าใช้จ่ายเป็นเวลา 90 วัน AppleCare+</li>
                                        <li class="font-18">สำหรับ iPad เป็น 2 ปี นับจากวันที่คุณซื้อ AppleCare+ และเพิ่มความคุ้มครองความเสียหายจากอุบัติเหตุแบบไม่จำกัดจำนวนครั้ง โดยแต่ละครั้งมีค่าธรรมเนียมการให้บริการ</li>
                                    </ul>
                                </div>
                                <NuxtLink class="link-checkdata-payment d-flex align-items-center gap-1">ดูข้อมูลการผ่อนชำระเพิ่มเติม
                                    <i class="fa-solid fa-angle-right" style="font-size: 12px;color: #0A84FF;"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section v-if="arrProduct.length > 0" class="bg-white">
            <div class="container-fluid pt-4 pb-5">
                <div class="mb-5">
                    <h1 class="text-subject-productdetail">ตะกร้าสินค้า</h1>
                    <div class="form-list-productcart p-1 px-sm-3 px-md-5 pt-3">
                        <div v-for="itemProduct in arrProduct" class="list-product-cart mb-5">
                            <div class="wrapper-productcart">
                                <div class="box-product-cart">
                                    <img v-if="itemProduct.product_img" class="img-product-cart" :src="itemProduct.product_img" alt="product-img" srcset="">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between">
                                        <ul class="m-0 p-0">
                                            <li class="text-name-productcart">{{ itemProduct.product_name }}</li>
                                            <li class="text-price-productcart">฿{{ FormatPrice(itemProduct.sale_price) }}</li>
                                            <li class="d-flex align-items-center">
                                                <span class="text-detail-install">฿4,580 /เดือน</span>
                                                <span class="mx-2" style="display:block;width: 1px;height: 16px;background: #C7C7CC;"></span>
                                                <span class="text-detail-install">สำหรับผ่อนชำระ 0% 10 เดือน*</span>
                                            </li>
                                        </ul>
                                        <div class="d-flex align-items-center gap-2 gap-sm-3">
                                            <button @click="minusQty(itemProduct.code)" class="btn-qty-product">
                                                <i class="color-gray fa-solid fa-minus"></i>
                                            </button>
                                            <input class="input-product-qty" type="text" :value="`${itemProduct.qty}`" disabled>
                                            <button @click="plusQty(itemProduct.code)" class="btn-qty-product">
                                                <i class="color-gray fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <NuxtLink class="link-checkdata-payment d-flex align-items-center gap-1">ดูข้อมูลการผ่อนชำระเพิ่มเติม
                                            <i class="fa-solid fa-angle-right" style="font-size: 12px;color: #0A84FF;"></i>
                                        </NuxtLink>
                                        <span class="link-checkdata-payment">รับสินค้าที่สาขา</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-applecare mt-3">
                                <div class="group-item-applecare">
                                    <img class="logo-applecare-cart" width="110px" src="~/assets/img/icon/AppleCare.png" alt="applecare-img">
                                    <div class="d-flex justify-content-between align-items-center gap-2 w-100">
                                        <div class="">
                                            <span class="text-name-productcart">AppleCare+ สำหรับ iPhone 15 Pro Max ( แผน 2 ปี ) <span class="font-bold-22">฿6,110.00</span></span>
                                            <ul class="ps-4 mb-1 detail-applecare">
                                                <li class="text-detail-applecare">ซ่อมไม่จำกัดจำนวนครั้งสำหรับความคุ้มครองด้านความเสียหายจากอุบัติเหตุFootnote</li>
                                                <li class="text-detail-applecare">บริการซ่อมที่ผ่านการรับรองจาก Apple ซึ่งใช้อะไหล่แท้ของ Apple</li>
                                                <li class="text-detail-applecare">สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple</li>
                                            </ul>
                                            <NuxtLink class="link-checkdata-payment d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#modalAppleCare">ดูข้อมูลเพิ่มเติม
                                                <i class="fa-solid fa-angle-right" style="font-size: 12px;color: #0A84FF;"></i>
                                            </NuxtLink>
                                        </div>
                                        <button class="btn-add-applecare">เพิ่ม</button>
                                        <button class="btn-add-applecare btn-cancel-applecare" hidden>ยกเลิก</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="list-product-cart mb-5">
                            <div class="wrapper-productcart">
                                <div class="box-product-cart">
                                    <img class="img-product-cart" src="~/assets/img/exipadpor.png" alt="product-img" srcset="">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between">
                                        <ul class="m-0 p-0">
                                            <li class="font-22">Apple iPad Pro M2 - (WiFi)	2TB²	Silver</li>
                                            <li class="font-bold-36 line-height-38">฿45,800.00</li>
                                            <li class="d-flex align-items-center">
                                                <span class="font-20 color-gray">฿4,580 /เดือน</span>
                                                <span class="mx-2" style="display:block;width: 1px;height: 16px;background: #C7C7CC;"></span>
                                                <span class="font-20 color-gray">สำหรับผ่อนชำระ 0% 10 เดือน*</span>
                                            </li>
                                        </ul>
                                        <div class="d-flex align-items-center gap-3">
                                            <i class="color-gray fa-solid fa-minus"></i>
                                            <input class="input-product-qty" type="text" value="2" disabled>
                                            <i class="color-gray fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <NuxtLink class="font-18 color-bluedark link-none-underlines d-flex align-items-center gap-1">ดูข้อมูลการผ่อนชำระเพิ่มเติม
                                            <i class="fa-solid fa-angle-right" style="font-size: 12px;color: #0A84FF;"></i>
                                        </NuxtLink>
                                        <span class="font-18 color-bluedark">เช็คสินค้าที่สาขา</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-applecare form-applecare-disable mt-3">
                                <div class="d-flex align-items-center gap-4 w-100" style="max-width: 1270px;">
                                    <img class="" width="110px" src="~/assets/img/icon/AppleCare.png" alt="applecare-img" srcset="">
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div class="">
                                            <span class="font-22">AppleCare+ สำหรับ iPhone 15 Pro Max ( แผน 2 ปี ) <span class="font-bold-22">฿6,110.00</span></span>
                                            <ul class="ps-4 detail-applecare">
                                                <li class="font-20">ซ่อมไม่จำกัดจำนวนครั้งสำหรับความคุ้มครองด้านความเสียหายจากอุบัติเหตุFootnote</li>
                                                <li class="font-20">บริการซ่อมที่ผ่านการรับรองจาก Apple ซึ่งใช้อะไหล่แท้ของ Apple</li>
                                                <li class="font-20">สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple</li>
                                            </ul>
                                        </div>
                                        <button class="btn-add-applecare" hidden>เพิ่ม</button>
                                        <button class="btn-add-applecare btn-cancel-applecare">ยกเลิก</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-product-cart mb-5">
                            <div class="wrapper-productcart">
                                <div class="box-product-cart">
                                    <img class="img-product-cart" src="~/assets/img/exipadpor.png" alt="product-img" srcset="">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between">
                                        <ul class="m-0 p-0">
                                            <li class="font-22">Apple iPad Pro M2 - (WiFi)	2TB²	Silver</li>
                                            <li class="font-bold-36 line-height-38">฿45,800.00</li>
                                            <li class="d-flex align-items-center">
                                                <span class="font-20 color-gray">฿4,580 /เดือน</span>
                                                <span class="mx-2" style="display:block;width: 1px;height: 16px;background: #C7C7CC;"></span>
                                                <span class="font-20 color-gray">สำหรับผ่อนชำระ 0% 10 เดือน*</span>
                                            </li>
                                        </ul>
                                        <div class="d-flex align-items-center gap-3">
                                            <i class="color-gray fa-solid fa-minus"></i>
                                            <input class="input-product-qty" type="text" value="2" disabled>
                                            <i class="color-gray fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <NuxtLink class="font-18 color-bluedark link-none-underlines d-flex align-items-center gap-1">ดูข้อมูลการผ่อนชำระเพิ่มเติม
                                            <i class="fa-solid fa-angle-right" style="font-size: 12px;color: #0A84FF;"></i>
                                        </NuxtLink>
                                        <span class="font-18 color-bluedark">เช็คสินค้าที่สาขา</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-applecare mt-3">
                                <div class="d-flex align-items-center gap-4 w-100" style="max-width: 1270px;">
                                    <img class="" width="110px" src="~/assets/img/icon/AppleCare.png" alt="applecare-img" srcset="">
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div class="">
                                            <span class="font-22">AppleCare+ สำหรับ iPhone 15 Pro Max ( แผน 2 ปี ) <span class="font-bold-22">฿6,110.00</span></span>
                                            <ul class="ps-4 detail-applecare">
                                                <li class="font-20">ซ่อมไม่จำกัดจำนวนครั้งสำหรับความคุ้มครองด้านความเสียหายจากอุบัติเหตุFootnote</li>
                                                <li class="font-20">บริการซ่อมที่ผ่านการรับรองจาก Apple ซึ่งใช้อะไหล่แท้ของ Apple</li>
                                                <li class="font-20">สิทธิพิเศษในการติดต่อกับผู้เชี่ยวชาญของ Apple</li>
                                            </ul>
                                        </div>
                                        <button class="btn-add-applecare">เพิ่ม</button>
                                        <button class="btn-add-applecare btn-cancel-applecare" hidden>ยกเลิก</button>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                    </div>

                    <div class="form-control-coupon">
                        <div class="p-4" style="width: 100%;max-width: 1000px;">
                            <div class="d-flex align-items-center gap-2">
                                <IconCoupon></IconCoupon>
                                <h3 class="m-0 mt-1 font-bold-24">โค้ดส่วนลด</h3>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-2 mb-3">
                                <input type="text" class="form-control font-20 input-login" id="coupon" placeholder="กรอกโค้ดส่วนลด">
                                <button class="btn-coupon">ใช้โค้ด</button>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <IconReceipt></IconReceipt>
                                <h3 class="m-0 mt-1 font-bold-24">สรุปคำสั่งซื้อ</h3>
                            </div>
                            <ul class="p-0">
                                <li class="list-bill my-2">
                                    <span class="font-bold-22">คำสั่งซื้อสินค้าทั้งหมด ({{ data_combineOrders['sum_qty'] }} ชิ้น)</span>
                                    <span class="font-bold-22">฿{{ FormatPrice(data_combineOrders['sum_price']) }}</span>
                                </li>
                                <li class="list-bill my-2">
                                    <span class="font-bold-22">โค้ดส่วนลด</span>
                                    <span v-if="data_combineOrders['discount'] > 0" class="font-bold-22 color-red">-฿{{ FormatPrice(data_combineOrders['discount']) }}</span>
                                    <span v-else class="font-bold-22">-</span>
                                </li>
                                <hr>
                                <li class="list-bill">
                                    <span class="font-bold-24 color-bluedark">ยอดรวมสุทธิทั้งหมด:</span>
                                    <span class="font-bold-24 color-bluedark">฿{{ FormatPrice(data_combineOrders['order_price']) }}</span>
                                </li>
                                <li class="font-18 color-gray">(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</li>
                            </ul>
                            <div class="d-flex justify-content-center mt-5 mb-4">
                                <button @click="checklogin" class="btn-pay" :disabled="arrProduct.length == 0">ชำระเงิน</button>
                            </div>
                            <!-- <div class="d-flex justify-content-center mt-3">
                                <button class="btn-adjust" :disabled="arrProduct.length == 0"><IconDocument></IconDocument>ขอใบเสนอราคา</button>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="mb-5 position-relative">
                    <h1 class="text-subject-productdetail">สินค้าแนะนำ</h1>
                    <div class="overflow-hidden">
                        <div class="position-relative row-swiper m-2">
                            <div class="swiper d-flex align-items-center swiper-content-recommend">
                                <div class="swiper-wrapper">
                                    <div v-for="n in 10" class="swiper-slide box-card-product">
                                        <CardProductHome></CardProductHome>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination item-swiper-pagination swiper-pagination-recommend"></div>
                        </div>
                    </div>
                    <div class="group-btn-swiper">
                        <button class="btn-swiper btn-swiper-prev swiper-recommend-prev"><i class="fa-solid fa-angle-left" style="font-size:16px;" data-v-02281a80=""></i></button>
                        <button class="btn-swiper btn-swiper-next swiper-recommend-next"><i class="fa-solid fa-angle-right" style="font-size:16px;" data-v-02281a80=""></i></button>
                    </div>
                </div> -->
                <div class="form-detail-conditioncart mb-5">
                    <div class="d-flex gap-2">
                        <IconBoxalt></IconBoxalt>
                        <div class="ps-1">
                            <h4 class="m-0 line-height-26 font-bold-24">รับสินค้าที่ Advice ใกล้บ้านคุณ</h4>
                            <p class="m-0 color-gray font-24">เรามีสาขามากกว่า 350 สาขา ทั่วประเทศไทย</p>
                            <NuxtLink class="font-20 color-bluedark link-none-underlines" to="/">ดูรายละเอียดเพิ่มเติม</NuxtLink>
                        </div>
                    </div>
                    <div class="box-or-shop mx-md-5">
                        <span class="border-or"></span>
                        <span class="font-18 position-absolute" style="color: #C7C7CC;background: #ffff;padding: 5px;">หรือ</span>
                    </div>
                    <div class="d-flex gap-2">
                        <IconShoppingFast></IconShoppingFast>
                        <div class="ps-1">
                            <h4 class="m-0 line-height-26 font-bold-24">จัดส่งทันที:
                                <span class="color-gray font-24">เมื่อสั่งซื้อก่อน 12.00 น.</span>
                            </h4>
                            <h4 class="m-0 line-height-26 font-bold-24">จัดส่งปกติ:
                                <span class="color-gray font-24">2-3 วันทำการ</span>
                            </h4>
                            <NuxtLink class="font-20 color-bluedark link-none-underlines" to="/">ดูรายละเอียดเพิ่มเติม</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-else class="bg-white">
            <div class="container-fluid pt-4 pb-5">
                <h1 class="text-subject-productdetail">ตะกร้าสินค้า</h1>
                <div class="bg-none-product mt-3">
                    <p class="font-28 m-1">ตะกร้าไม่มีสินค้า</p>
                    <p class="font-24 m-1 color-gray">โปรดเลือกสินค้าที่ต้องการซื้อลงตะกร้า</p>
                     <NuxtLink to="/" class="btn-pay link-none-underlines text-center m-3">เลือกซื้อสินค้า</NuxtLink>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style scoped>
    .row-swiper .swiper {
        overflow: visible;
    }

    .box-or-shop {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .border-or {
        display: block;
        width: 1px;
        height: 100%;
        background: #C7C7CC;
    }

    .list-bill {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-cancel-applecare {
        color: #AEAEB2;
        border: 1px solid #AEAEB2;
        transition: 0.3s ease;
    }

    .detail-applecare > li {
        list-style: disc;
    }

    .list-product-cart:nth-last-child(n+2)::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 2.5rem;
    }

    .btn-qty-product {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
    }

    .btn-qty-product:hover i {
        color: #007AFF;
    }

    .bg-none-product {
        background-color: #F9FAFB;
        width: 100%;
        height: 650px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .text-detail-install {
        font-size: clamp(10px, 3vw, 20px);
        line-height: clamp(12px, 3vw, 32px);
        color: #8E8E93;
    }

    .text-price-productcart {
        font-size: clamp(24px, 4vw, 36px);
        font-weight: 500;
        line-height: clamp(28px, 5vw, 38px);
    }

    .text-name-productcart {
        font-size: clamp(16px, 3vw, 22px);
        line-height: clamp(16px, 3vw, 32px);
    }

    .link-checkdata-payment {
        font-size: clamp(12px, 2vw, 18px);
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
        color: #007AFF;
    }

    .logo-applecare-cart {
        width: clamp(40px, 15vw, 100px);
        height: auto;
    }

    .text-detail-applecare {
        font-size: clamp(12px, 2vw, 20px);
        line-height: clamp(14px, 3vw, 28px);
    }

    .group-price-applecare {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        .group-price-applecare {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
        }
    }
</style>
