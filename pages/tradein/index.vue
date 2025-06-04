<script lang="ts" setup>

</script>

<template>
    <NuxtLayout name="istore">
        <section class="bg-white">
            <div class="container-fluid py-3 mb-3">
                <ul class="form-submenu-product m-0">
                    <li class="submenu-product"><NuxtLink class="link-submenu" to="/">หน้าหลัก</NuxtLink></li>
                    <li class="submenu-product"><NuxtLink class="link-submenu" to="/wheretobuy">ค้นหาสาขาใกล้ฉัน</NuxtLink></li>
                </ul>
            </div>
            <div class="container" style="padding-bottom: 6rem;">
                <div class="mb-5" style="background-color: #ccc;width: 100%;height: 450px;">
                    <img width="100%" src="/images/banner/banner-tradeins.png" alt="">
                </div>
                <div class="p-4" style="background-color: #f4f4f4;width: 100%;height: auto;">
                    <h1 class="font-bold-46 text-center m-0">สามารถนำอุปกรณ์เก่าสูงสุด <span class="color-bluedark">5 เครื่อง</span></h1>
                    <h1 class="font-bold-46 text-center">เปลี่ยนเป็นเครื่องใหม่ง่ายๆ ใน <span class="color-bluedark">4 ขั้นตอน</span></h1>
                    <ul class="form-step-trade mt-4 mb-2">
                        <li class="d-flex justify-content-center align-items-center flex-column gap-3">
                            <img style="border-radius: 8px;width: 180px;height: 160px;" src="/images/trade1.png" alt="">
                            <ul class="d-flex align-items-center gap-2 p-0">
                                <li><h1 class="font-bold-96 line-height-56 color-bluedark m-0">1</h1></li>
                                <li>
                                    <p class="font-bold-20 color-bluedark m-0">ตรวจสอบราคา</p>
                                    <p class="font-18 m-0 line-height-19">แลกเปลี่ยนเบื้องต้นตามตารางตารางด้านล่าง</p>
                                </li>
                            </ul>
                        </li>
                        <li class="d-flex justify-content-center align-items-center flex-column gap-3">
                            <img style="border-radius: 8px;width: 180px;height: 160px;" src="/images/trade2.png" alt="">
                            <ul class="d-flex align-items-center gap-2 p-0">
                                <li><h1 class="font-bold-96 line-height-56 color-bluedark m-0">2</h1></li>
                                <li>
                                    <p class="font-bold-20 color-bluedark m-0">นำอุปกรณ์เดิม</p>
                                    <p class="font-18 m-0 line-height-19">พร้อมบัตรประชาชนเข้ารับบริการได้ทุกสาขา</p>
                                </li>
                            </ul>
                        </li>
                        <li class="d-flex justify-content-center align-items-center flex-column gap-3">
                            <img style="border-radius: 8px;width: 180px;height: 160px;" src="/images/trade3.png" alt="">
                            <ul class="d-flex align-items-center gap-2 p-0">
                                <li><h1 class="font-bold-96 line-height-56 color-bluedark m-0">3</h1></li>
                                <li>
                                    <p class="font-bold-20 color-bluedark m-0">เจ้าหน้าที่ตรวจสอบ</p>
                                    <p class="font-18 m-0 line-height-19">สภาพตัวเครื่องและอุปกรณ์เสริมต่างๆ</p>
                                </li>
                            </ul>
                        </li>
                        <li class="d-flex justify-content-center align-items-center flex-column gap-3">
                            <img style="border-radius: 8px;width: 180px;height: 160px;" src="/images/trade4.png" alt="">
                            <ul class="d-flex align-items-center gap-2 p-0">
                                <li><h1 class="font-bold-96 line-height-56 color-bluedark m-0">4</h1></li>
                                <li>
                                    <p class="font-bold-20 color-bluedark m-0">มูลค่า Tread in</p>
                                    <p class="font-18 m-0 line-height-19">ลูกค้าจะได้รับโค้ดส่วนลดสำหรับซื้อสินค้าภายในร้าน</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="form-con-trade mt-5 pt-4">
                    <div class="text-center">
                        <img class="mb-2" width="180px" src="/images/values__bhdzybdgpkxe_large.jpg.png" alt="">
                        <h1 class="line-height-36 my-4">ราคาประเมินโทรศัพท์มือถือ iPhone, iPad, <br>
                            Samsung, และมือถือรุ่นอื่นๆ เบื้องต้น</h1>
                    </div>
                    <ul class="form-control-menuproduct my-5">
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/mac">
                                <img class="img-menuproduct" src="/images/img-menu-iphone.png" alt="" srcset="">
                                <span class="text-list-menuproduct active">iPhone</span>
                                <IconBorderActive></IconBorderActive>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="https://img.advice.co.th/images_nas/iStore/product/iPad/iPad_Pro/13-inch_iPad_Pro_M4.jpg" alt="" srcset="">
                                <span class="text-list-menuproduct">iPad</span>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="/images/example/imgsamsung.png" alt="" srcset="">
                                <span class="text-list-menuproduct">Samsung</span>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="/images/example/imgtradeother.png" alt="" srcset="">
                                <span class="text-list-menuproduct">Other</span>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="/images/img-menu-mac.png" alt="" srcset="">
                                <span class="text-list-menuproduct">Macbook</span>
                            </NuxtLink>
                        </li>
                        <li class="">
                            <NuxtLink class="link-menu-product item-apple-menu" to="/product/iphone">
                                <img class="img-menuproduct" src="/images/img-menu-applewatch.png" alt="" srcset="">
                                <span class="text-list-menuproduct">Watch</span>
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="px-2">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="font-bold-22">Model</th>
                                    <th scope="col" class="font-bold-22 text-center" style="width: 15%;">Excellent</th>
                                    <th scope="col" class="font-bold-22 text-center" style="width: 15%;">Good</th>
                                    <th scope="col" class="font-bold-22 text-center" style="width: 15%;">Fair</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="n in 10" class="tr-details">
                                    <th class="font-20">iPhone 15 Promax 1TB²</th>
                                    <td class="font-20 text-center">{{ FormatPrice('6000') }}</td>
                                    <td class="font-20 text-center">{{ FormatPrice('6000') }}</td>
                                    <td class="font-20 text-center">{{ FormatPrice('6000') }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center w-100 gap-5 my-5 py-3">
                    <NuxtLink to="/wheretobuy" class="btn-branch">ค้นหาสาขาใกล้คุณ</NuxtLink>
                    <NuxtLink class="btn-branch">โปรโมชั่นประจำเดือน</NuxtLink>
                </div>
                <div class="my-5 pt-4">
                    <img width="100%" src="/images/example/Screenshot-trade.png" alt="">
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style scoped>
    .form-step-trade {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(4, 200px);
        justify-content: center;
        align-items: center;
        grid-gap: 3rem;
    }

    .from-product-trade {
        display: grid;
        grid-template-columns: repeat(6,200px);
        justify-content: center;
        align-items: center;
        grid-gap: 3rem;
    }

    .btn-branch {
        padding: 0.5rem 1rem;
        width: 100%;
        max-width: 330px;
        border-radius: 8px;
        color: #fff;
        background-color: #0A84FF;
        outline: none;
        border: none;
        font-size: 22px;
        font-weight: 500;
        transition: 0.3s;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
    }
    .btn-branch:hover {
        opacity: 0.8;
    }
    .btn-branch:active {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    tbody, td, tfoot, th, thead, tr {
        border: none;
    }

    .tr-details {
        border-bottom: 1px dashed #C7C7CC;
    }

    .text-list-menuproduct.active {
        color: #0A84FF;
    }
</style>
