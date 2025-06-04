<script setup>
import Swiper from 'swiper/bundle';

const navbarMenu_ = navbarMenu()
navbarMenu_.value = ''

const arrProduct = ref('')
const arrNewProduct = ref([])
const arriPhone = ref([])
const arrMac = ref([])
const arrAppleWatch = ref([])
const arrAccessories = ref([])
const arrFlashsale = ref([])

const slidesPerView_swiperNew = ref(3)
const slidesPerView_swiperFlashsale = ref(3)

const getProduct = async () => {
    const responProduct = await $fetch('https://api2.advice.in.th/api/getProductHomePage')
    const responFlashsale = await $fetch('https://api2.advice.in.th/api/getProductFlashsale')
    arrProduct.value = JSON.parse(responProduct).data
    arrFlashsale.value = JSON.parse(responFlashsale).data

    let n = 0
    for (const [key, value] of Object.entries(arrProduct.value)) {
        arrNewProduct.value.push({
            product: key,
            item: []
        })
        for (const [key2, value2] of Object.entries(arrProduct.value[key].item)) {
            if (value2['new_product'] == 'T') {
                arrNewProduct.value[n].item.push(value2)                
            }
        }        

        if (key == 'iphone') {
            value.item.forEach(val => {
                arriPhone.value.push(val)                
            });
        }
        else if (key == 'mac') {
            value.item.forEach(val => {
                arrMac.value.push(val)                
            });
        }
        else if (key == 'watch') {
            value.item.forEach(val => {
                arrAppleWatch.value.push(val)                
            });
        }
        else if (key == 'accessories') {
            value.item.forEach(val => {
                arrAccessories.value.push(val)                
            });
        }
        
        n++
    }
    
}

var swiper_flashsale
const swiperFlashsale = async () => {
    if (swiper_flashsale) {
        await swiper_flashsale.destroy(true, true); // Destroy Swiper and remove all its styles
    }

    swiper_flashsale = new Swiper(".swiper-content-flashsale", {
      slidesPerView: slidesPerView_swiperFlashsale.value,
      spaceBetween: 20,
      freeMode: true,
    //   loop: true,
      pagination: {
        el: ".swiper-pagination-flashsale",
        clickable: true,
        dynamicBullets: true,
      },
    });
}

var swiper_new
const swiperNew = async () => {
    if (swiper_new) {
        await swiper_new.destroy(true, true); // Destroy Swiper and remove all its styles
    }

    swiper_new = new Swiper(".swiper-content-new", {
      slidesPerView: slidesPerView_swiperNew.value,
      spaceBetween: 20,
    //   loop: true,
      pagination: {
        el: ".swiper-pagination-new",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-new-next",
        prevEl: ".swiper-new-prev",
      },
    });
}

const swiper_product = ref(0)

const updateWidth = async () => {
    swiper_product.value += 1

    slidesPerView_swiperNew.value = 1
    slidesPerView_swiperFlashsale.value = 1
    if (window.innerWidth > 1200) {
        slidesPerView_swiperNew.value = 3
        slidesPerView_swiperFlashsale.value = 3
    }
    else if (window.innerWidth > 991) {
        slidesPerView_swiperNew.value = 2
        slidesPerView_swiperFlashsale.value = 2
    } 
    
    await swiperFlashsale()
    await swiperNew()
}

onMounted(async () => {
    await getProduct()
    await updateWidth()
    await window.addEventListener('resize', updateWidth)
    await swiperNew()
    await swiperFlashsale()


})
</script>

<template>
    <NuxtLayout name="istore">
        <div>
            <img width="100%" class="" src="/images/banner/banneriStoreHome.jpg" alt="" srcset="">
        </div>
        <section class="container-fluid p-3 px-sm-5">
            <div class="mt-md-5 mt-4 mb-sm-0">
                <h1 class="text-subject">ดูผลิตภัณฑ์ Apple</h1>
                <div class="mt-md-4 text-fadein overflow-x-scroll">
                    <ul class="form-control-menuproduct mb-0 mb-md-3">
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/mac">
                                <img class="img-menuproduct" src="/images/img-menu-mac.png" alt="" srcset="">
                                <span class="text-list-menuproduct">Mac</span>
                            </NuxtLink>
                        </li>
                        <li class="item-apple-menu">
                            <img class="img-menuproduct" src="/images/img-menu-ipad.png" alt="" srcset="">
                            <span class="text-list-menuproduct">iPad</span>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="/images/img-menu-iphone.png" alt="" srcset="">
                                <span class="text-list-menuproduct">iPhone</span>
                            </NuxtLink>
                        </li>
                        <li class="item-apple-menu">
                            <img class="img-menuproduct" src="/images/img-menu-applewatch.png" alt="" srcset="">
                            <span class="text-list-menuproduct">Apple Watch</span>
                        </li>
                        <li class="item-apple-menu">
                            <img class="img-menuproduct" src="/images/img-menu-airpod.png" alt="" srcset="">
                            <span class="text-list-menuproduct">AirPods</span>
                        </li>
                        <li class="item-apple-menu">
                            <img class="img-menuproduct" src="/images/img-menu-home.png" style="max-height: 60px;" alt="" srcset="">
                            <span class="text-list-menuproduct">Home Entertainment</span>
                        </li>
                        <li class="item-apple-menu">
                            <img class="img-menuproduct" src="/images/img-menu-telphone.png" alt="" srcset="">
                            <span class="text-list-menuproduct">Accessories</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="mb-4 mb-md-5">
            <div class="mb-0 mb-xl-5 pb-md-3 position-relative">
                <!-- <h1 class="text-subject">สินค้าใหม่ล่าสุด</h1> -->
                <SwiperProductHome :key="swiper_product" v-if="arrNewProduct != ''" :objectProduct="arrNewProduct" :className="'swiper-newproduct'" :isMenu="'T'" :subject="'newProduct'"></SwiperProductHome>
            </div>          
        </section>

        <!-- content Flashsale -->
        <section class="my-5 bg-flashsale p-sm-5">
            <div class="row m-0">
                <div class="col-12 col-sm-5 col-md-6 col-lg-3 d-flex justify-content-center align-items-center p-0">
                    <div class="item-time-flashsale">
                        <div class="px-5 pt-4 pt-sm-0 px-sm-0">
                            <img class="logo-flashsale" src="/images/logo/FlashSaletext.png" alt="img-text-flashsale">
                        </div>
                        <p class="font-22 text-light">จะจบลงใน:</p>
                        <div class="form-time-flashsale">
                            <div class="box-ime-flashsale">
                                00
                            </div>
                            <span class="text-light mx-2 font-24">:</span>
                            <div class="box-ime-flashsale">
                                00
                            </div>
                            <span class="text-light mx-2 font-24">:</span>
                            <div class="box-ime-flashsale">
                                00
                            </div>
                        </div>
                        <p class="font-22 text-light m-4">พบกับราคาสุดพิเศษที่คุณไม่ควรพลาด
                            ช่วงเวลาพิเศษสำหรับการซื้อสินค้า ที่คัดสรรมาเพื่อคุณ พร้อมให้เป็นเจ้าของแล้วตอนนี้
                        </p>
                        <div class="d-flex justify-content-center align-items-center">
                            <img class="flashsale-logo-istore" src="/images/logo/logo-istore-light.png" alt="img-text-flashsale">
                            <span class="mx-4 mx-sm-3 mx-xl-4" style="width: 1px;height: 40px;background-color: #fff;display: block;"></span>
                            <img class="flashsale-logo-apple" src="/images/logo/logo-apple-light.png" alt="img-text-flashsale">
                        </div>
                        <div class="text-center mt-4 mt-lg-5">
                            <a class="font-22 text-light" href="#">ดูทั้งหมด</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-7 col-md-6 col-lg-9 pt-4 form-flashsale">
                    <div class="overflow-hidden form-swiper-flashsale">
                        <div class="row-swiper position-relative m-2">
                            <div class="swiper d-flex align-items-center swiper-content-flashsale">
                                <div class="swiper-wrapper swiper-wrapper-flashsale">
                                    <div v-for="itemFlashsale in arrFlashsale" class="swiper-slide box-card-product">
                                        <CardProductFlashsale :objectProduct="itemFlashsale"></CardProductFlashsale>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination item-swiper-pagination swiper-pagination-flashsale"></div>
                        </div>
                    </div>
                </div>
            </div>             
        </section>
        <section class="container-fluid p-3 px-sm-5">
            <div class="group-special container-lg mb-5">
                <div class="group-text-benefits">
                    <div>
                        <h1 class="text-subject mb-3">จุดเด่นของ <span class="color-bluedark">iStore สิทธิประโยชน์</span><br> ที่คุณไม่ควรพลาด</h1>
                        <img class="img-gropspecial" src="/images/istoregroup.png" alt="img-gropspecial" srcset="">
                    </div>
                </div>
                <div class="group-frm-detail">
                    <div class="form-borderbox-detail">
                        <div>
                            <img class="img-icon-detail" src="/images/icon/icon-chatpp.png" alt="icon-detail" srcset="">
                        </div>
                        <div class="box-text-detail">
                            <div>
                                <h1 class="text-subject text-benefits">บริการแลกเปลี่ยน</h1>
                                <p class="text-detail-help">ให้คุณเข้าถึงเทคโนโลยีใหม่ๆจากทาง Apple ได้ง่ายมากยิ่งขึ้น ด้วยบริการสุดพิเศษจากทางแอดไวซ์ เปลี่ยนเครื่องเดิมของคุณ เป็นเครื่องใหม่ และช่วยรักษ์โลกไปพร้อมกัน !</p>
                            </div>
                            <button class="btn-detail-data">ดูข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>
                    <div class="form-borderbox-detail">
                        <div>
                            <img class="img-icon-detail" src="/images/icon/icon-trantacts.png" alt="icon-detail" srcset="">
                        </div>
                        <div class="box-text-detail">
                            <div>
                                <h1 class="text-subject text-benefits">บริการจัดส่งฟรี </h1>
                                <p class="text-detail-help">จัดส่งฟรีถึงบ้าน หรือนัดรับที่สาขาใกล้บ้านคุณเพื่อความสะดวกสบายที่มากยิ่งขึ้น</p>
                            </div>
                            <button class="btn-detail-data">ดูข้อมูลเพิ่มเติม</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-md-5 position-relative">
                <SwiperProductHome :key="swiper_product" v-if="arriPhone != ''" :objectProduct="arriPhone" :className="'swiper-iphone'" :isMenu="''" :subject="'iPhone'"></SwiperProductHome>
            </div>
            <div class="mb-md-5 position-relative">
                <SwiperProductHome :key="swiper_product" v-if="arrMac != ''" :objectProduct="arrMac" :className="'swiper-macbook'" :isMenu="''" :subject="'Mac'"></SwiperProductHome>
            </div>
            <div class="mb-md-5 position-relative">
                <SwiperProductHome :key="swiper_product" v-if="arrAppleWatch != ''" :objectProduct="arrAppleWatch" :className="'swiper-watch'" :isMenu="''" :subject="'Watch'"></SwiperProductHome>
            </div>
            <div class="mb-md-5 position-relative">
                <SwiperProductHome :key="swiper_product" v-if="arrAccessories != ''" :objectProduct="arrAccessories" :className="'swiper-accessories'" :isMenu="''" :subject="'Accessories'"></SwiperProductHome>
            </div>
        </section>
        <section style="background-color: #E5E7EB;">
            <div class="container-fluid py-5">
                <div class="mb-md-5 mb-4 position-relative">
                    <div class="d-flex justify-content-between align-items-center">
                        <h1 class="text-subject">โปรโมชั่น / สิทธิประโยชน์</h1>
                        <div class="form-link-detail">
                            <span class="font-20">ดูโปรโมชั่น / สิทธิประโยชน์ทั้งหมด</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_3854_26829)">
                                    <path d="M4.04826 15.4942C4.04808 15.3629 4.07391 15.2328 4.12426 15.1115C4.1746 14.9902 4.24847 14.8801 4.34159 14.7875L9.45626 9.67217C9.61107 9.5174 9.73387 9.33365 9.81766 9.13142C9.90144 8.92918 9.94457 8.71241 9.94457 8.49351C9.94457 8.2746 9.90144 8.05784 9.81766 7.8556C9.73387 7.65336 9.61107 7.46961 9.45626 7.31484L4.34826 2.20751C4.25275 2.11526 4.17656 2.00492 4.12415 1.88291C4.07175 1.76091 4.04416 1.62969 4.04301 1.49691C4.04185 1.36413 4.06715 1.23245 4.11743 1.10955C4.16772 0.986657 4.24197 0.875006 4.33586 0.781114C4.42975 0.687221 4.54141 0.612967 4.6643 0.562687C4.7872 0.512405 4.91888 0.487104 5.05166 0.488258C5.18444 0.489412 5.31566 0.516997 5.43766 0.569406C5.55966 0.621816 5.67001 0.697997 5.76226 0.793508L10.8703 5.90084C11.557 6.5889 11.9428 7.52135 11.9428 8.49351C11.9428 9.46567 11.557 10.3981 10.8703 11.0862L5.75559 16.2015C5.61574 16.3415 5.43751 16.4368 5.24347 16.4754C5.04943 16.514 4.84829 16.4942 4.66551 16.4185C4.48273 16.3428 4.32652 16.2145 4.21664 16.05C4.10677 15.8855 4.04817 15.692 4.04826 15.4942Z" fill="#48484A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3854_26829">
                                    <rect width="16" height="16" fill="white" transform="translate(0 16.5) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div class="overflow-hidden">
                        <div class="row-swiper position-relative my-3 mx-2 mb-2">
                            <div class="swiper swiper-content-new">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="box-item-new"><img class="img-card-new" src="/images/news/newimgv1.png" alt="img-news-card"></div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="box-item-new"><img class="img-card-new" src="/images/news/newimgv2.png" alt="img-news-card"></div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="box-item-new"><img class="img-card-new" src="/images/news/newimgv3.png" alt="img-news-card"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination item-swiper-pagination swiper-pagination-new"></div>
                        </div>
                    </div>
                    <div class="group-btn-swiper">
                        <button class="btn-swiper btn-swiper-prev swiper-new-prev"><i class="fa-solid fa-angle-left" style="font-size:16px;" data-v-02281a80=""></i></button>
                        <button class="btn-swiper btn-swiper-next swiper-new-next"><i class="fa-solid fa-angle-right" style="font-size:16px;" data-v-02281a80=""></i></button>
                    </div>
                </div>
                <div class="">
                    <div class="d-flex justify-content-between align-items-center mb-2 mb-md-3">
                        <h1 class="text-subject">บทความ</h1>
                        <div class="form-link-detail">
                            <span class="font-20">ดูบทความทั้งหมด</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 17" fill="none">
                                <g clip-path="url(#clip0_3854_26829)">
                                    <path d="M4.04826 15.4942C4.04808 15.3629 4.07391 15.2328 4.12426 15.1115C4.1746 14.9902 4.24847 14.8801 4.34159 14.7875L9.45626 9.67217C9.61107 9.5174 9.73387 9.33365 9.81766 9.13142C9.90144 8.92918 9.94457 8.71241 9.94457 8.49351C9.94457 8.2746 9.90144 8.05784 9.81766 7.8556C9.73387 7.65336 9.61107 7.46961 9.45626 7.31484L4.34826 2.20751C4.25275 2.11526 4.17656 2.00492 4.12415 1.88291C4.07175 1.76091 4.04416 1.62969 4.04301 1.49691C4.04185 1.36413 4.06715 1.23245 4.11743 1.10955C4.16772 0.986657 4.24197 0.875006 4.33586 0.781114C4.42975 0.687221 4.54141 0.612967 4.6643 0.562687C4.7872 0.512405 4.91888 0.487104 5.05166 0.488258C5.18444 0.489412 5.31566 0.516997 5.43766 0.569406C5.55966 0.621816 5.67001 0.697997 5.76226 0.793508L10.8703 5.90084C11.557 6.5889 11.9428 7.52135 11.9428 8.49351C11.9428 9.46567 11.557 10.3981 10.8703 11.0862L5.75559 16.2015C5.61574 16.3415 5.43751 16.4368 5.24347 16.4754C5.04943 16.514 4.84829 16.4942 4.66551 16.4185C4.48273 16.3428 4.32652 16.2145 4.21664 16.05C4.10677 15.8855 4.04817 15.692 4.04826 15.4942Z" fill="#48484A"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3854_26829">
                                    <rect width="16" height="16" fill="white" transform="translate(0 16.5) rotate(-90)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div class="row pt-2">
                        <div class="col-12 col-lg-6 pb-2 pb-lg-0 pe-lg-1">
                            <div class="card new-card">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <div class="content-new-card1">
                                            <img class="img-card-new" src="/images/example/contentimgv1.png" alt="img-news-card">
                                        </div>
                                    </div>
                                    <h4 class="card-title">Advice iStore ระยอง คุ้มค่าและครบครันในที่เดียว</h4>
                                    <p class="card-text text-content-new">Advice iStore ระยอง ที่เดียวครบทุกความต้องการด้านเทคโนโลยี เดินหน้าเป็นผู้นำด้านเทคโนโลยีอย่างต่อเนื่อง เปิด Advice iStore แห่งที่ 2 ที่จังหวัดระยอง</p>
                                    <p class="text-date-new">06/06/2023</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 ps-lg-1">
                            <div class="row h-100">
                                <div class="col-12 h-content-new pb-1">
                                    <div class="card new-card sub-content-new mb-md-3">
                                        <div class="row p-3 h-100 g-0">
                                            <div class="col-6">
                                                <div class="content-new-card2">
                                                    <img class="img-card-new" src="/images/example/contentimgv2.png" alt="img-news-card">
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="card-body">
                                                    <h4 class="card-title">ตกหลุมรักพิจิตร ไปกับ Advice iStore</h4>
                                                    <p class="card-text text-content-new">มา ตกหลุมรักพิจิตร ไปด้วยกันกับ Advice iStore เปิดตัวสุดยิ่งใหญ่ กับ Advice iStore ที่แรกของ</p>
                                                    <p class="text-date-new">06/06/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 h-content-new pt-1">
                                    <div class="card new-card sub-content-new mb-md-3">
                                        <div class="row p-3 h-100 g-0">
                                            <div class="col-6 h-100">
                                                <div class="content-new-card2">
                                                    <img class="img-card-new" src="/images/example/contentimgv3.png" alt="img-news-card">
                                                </div>
                                            </div>
                                            <div class="col-6 h-100">
                                                <div class="card-body">
                                                    <h4 class="card-title">Advice แม่กลอง ที่แรกที่เดียวในสมุทรสงคราม เปิดสาขาใหม่ใหญ่ม้ากกกกก พร้อมโปรโมชั่นจัดเต็มสุดคุ้ม!!</h4>
                                                    <p class="card-text text-content-new">Stand Alone แอดไวซ์สมุทรสงคราม - แม่กลอง เปิดสาขาใหม่ ยิ่งใหญ่ ใจกลางเมือง!! แอดไวซ์เปิดสาขาใหม่ ใจกลางเมืองสมุทรสงคราม สาขาตั้งอยู่ตรงข้ามเย</p>
                                                    <p class="text-date-new">06/06/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style lang="css" scoped>

    .img-gropspecial {
        width: auto;
        height: clamp(90px, 50vw, 114px);
    }

    .form-borderbox {
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .btn-detail-data {
        border: 1px solid #48484A;
        border-radius: 100px;
        padding: 6px 26px;
        font-size: clamp(14px, 3vw, 18px);
        font-weight: 400;
        line-height: normal;
        background: none;
        transition: 0.3s;
    }
    .btn-detail-data:hover {
        opacity: 0.5;
    }

    .img-icon-detail {
        width: clamp(36px, 10vw, 60px);
        height: auto;
    }

    .form-borderbox-detail {
        display: flex;
        padding: 22px 32px;
        justify-content: center;
        align-items: start;
        gap: clamp(12px, 4vw, 28px);
        border-radius: 20px;
        background: #FFF;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    .new-card {
        border-radius: 8px;
    }

    .card-title {
        font-size: clamp(22px, 3vw, 26px);
        font-weight: 500;
        line-height: 24px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .text-content-new {
        font-size: clamp(18px, 3vw, 22px);
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.43px;
        color: #8E8E93;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 44px;
    }

    .text-date-new {
        font-size: clamp(16px, 3vw, 20px);
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.43px;
        color: #C7C7CC;
        margin: 0;
    }

    .box-card-product {
        border-radius: 8px;
    }    

    .form-time-flashsale {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .box-ime-flashsale {
        background-color: #fff;
        font-size: 30px;
        font-weight: 500;
        font-style: normal;
        color: #007AFF;
        border-radius: 8px;
        padding: 10px;
        width: 50px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-card-new {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 800px) and (min-width: 651px) {

    }

    @media screen and (max-width: 768px) {
        .form-flashsale {
            display: flex;
            justify-content: center;
        }

        .form-swiper-flashsale {
            width: clamp(240px, 60vw, 340px);
        }
    }
</style>
