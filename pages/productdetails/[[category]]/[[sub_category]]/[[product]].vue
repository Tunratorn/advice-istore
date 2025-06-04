<script lang="ts" setup>
    import Swiper from 'swiper/bundle';

    const route = useRoute()
    const category = ref(route.params.category)
    const sub_category = ref(route.params.sub_category)
    const product = ref(route.params.product)
    const navbarMenu_ = navbarMenu()
    navbarMenu_.value = category.value
    
    const arrProduct = ref([])
    const linkProduct = ref('')
    const linkSerie = ref('')
    const productModel = ref('')
    const prodcutImg = ref([])
    const arrSpecMaster = ref([])
    const arrColor = ref([])
    const arrProcessor = ref([])
    const arrMemory = ref([])
    const arrStorage = ref([])
    const productPrice = ref('')
    const productAccessories = ref([])
    const productRecommend = ref([])
    const dataProductSelected = ref('')
    const codeProduct = ref('')
    const switch_btn_detail_product = ref(false)
    const img_detail_product = ref('')
    const arrProduct_img = ref([])
    const arrImg_detail_product = ref([])

    // element 
    const element_detail_product = ref(null)
    const form_detail_product = ref(null)
    const form_btn_showdetail = ref(null)

    const wrapperSelectColor = ref(false)
    const wrapperSelectProcessor = ref(false)
    const wrapperSelectMemory = ref(false)
    const wrapperSelectStorage = ref(false)

    const navbar_productName = ref('')
    const navbar_productPrice = ref('')
    const navbar_productImg = ref('')

    const device_size = ref(0)

    const slidesPerView_accessories = ref(0)
    const slidesPerView_recommend = ref(0)


    async function getDataProduct() {
        const respon = await $fetch('https://api2.advice.in.th/api/getProductDetail', {
            method: 'POST',
            body: {
                "product": category.value,
                "serie": sub_category.value,
                "model": product.value
            }
        })
        
        if (JSON.parse(respon).status == "success") {
            arrProduct.value = JSON.parse(respon).data_product        
            let itemSpec = JSON.parse(respon).data_spec
            let data_recommend = JSON.parse(respon).data_recommend   
            let arrImg = JSON.parse(respon).product_img

            for (const color in arrImg) {
                arrProduct_img.value[color] = arrImg[color].filter(item => item.type_img === '');
                arrImg_detail_product.value[color] = arrImg[color].filter(item => item.type_img === 'detail');
            }
            
            await swiperImgproduct()

            if (data_recommend.menu_group_name.toLowerCase().replaceAll(' ','-') != category.value) {
                await navigateTo('/')
            } else if (data_recommend.menu_list_name.toLowerCase().replaceAll(' ','-') != sub_category.value) {
                await navigateTo('/')
            } else if (data_recommend.menu_list_dtl_name.toLowerCase().replaceAll(' ','-') != product.value) {
                await navigateTo('/')
            } else {
                
                linkProduct.value = data_recommend.menu_group_name
                linkSerie.value = data_recommend.menu_list_name
                productModel.value = data_recommend.menu_list_dtl_name
                productPrice.value = data_recommend.recommend_price

                //fig demo color 
                if (category.value == 'mac') {
                    prodcutImg.value = arrProduct_img.value['Space Black']
                    img_detail_product.value = arrImg_detail_product.value['Space Black'][0].product_img
                } else if (category.value == 'iphone') {
                    prodcutImg.value = arrProduct_img.value['Desert Titanium']
                    img_detail_product.value = arrImg_detail_product.value['Desert Titanium'][0].product_img
                }
            
                
                for (const [keySpec, valueSpec] of Object.entries(itemSpec)) {
                    arrSpecMaster.value.push({
                        "spec_name": keySpec.toLowerCase(),
                        "spec_value": ''
                    })
                    for (const [key, value] of Object.entries(valueSpec)) {
                        if (keySpec.toLowerCase() == 'color') {
                            arrColor.value.push({
                                    'color_name': key, 
                                    'color_code': value.color_code, 
                                    'active': 'T'
                            })
                        } else if (keySpec.toLowerCase() == 'processor') {
                            arrProcessor.value.push({
                                    'name': value, 
                                    'active': 'T'
                            })
                        } else if (keySpec.toLowerCase() == 'memory') {
                            let val_memory = value.replaceAll(' ','')
                            arrMemory.value.push({
                                    'name': val_memory, 
                                    'active': 'T'
                            })
                        } else if (keySpec.toLowerCase() == 'storage') {
                            let val_storage = value.replaceAll(' ','')
                            arrStorage.value.push({
                                    'name': val_storage, 
                                    'active': 'T'
                            })
                        }
                    }
                }
                
                for (const [key, value] of Object.entries(arrProduct.value)) {
                    for (const [key_spec, value_spec] of Object.entries(value.spec)) {
                        if (key_spec == 'memory' || key_spec == 'storage') {
                            value.spec[key_spec] = value_spec.replaceAll(' ','')
                        }
                    }
                }
      
                arrMemory.value.sort((a, b) => parseProductSize(a.name) - parseProductSize(b.name));
                arrStorage.value.sort((a, b) => parseProductSize(a.name) - parseProductSize(b.name));
            }
        } else {
            await navigateTo('/')
        }
    }

    const parseProductSize = (storage: String) => {
        storage = storage.replaceAll(' ','')
        let result_str = storage.slice(-2)
        let value_number = storage.slice(0,-2)
        return result_str === "TB" ? value_number * 1000 : value_number; // แปลง TB → GB (1 TB = 1000 GB)
    }

    var swiper_accessories
    const swiperiAccessories = async () => {
        if (swiper_accessories) {
            await swiper_accessories.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper_accessories = new Swiper(".swiper-content-accessories", {
            slidesPerView: slidesPerView_accessories.value,
            spaceBetween: 10,
            freeMode: true,
            // loop: true,
            pagination: {
                el: ".swiper-pagination-accessories",
                clickable: true,
            },
        });
    }

    var swiper_recommend
    const swiperRecommend = async () => {
        if (swiper_recommend) {
            await swiper_recommend.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper_recommend = new Swiper(".swiper-content-recommend", {
            slidesPerView: slidesPerView_recommend.value,
            spaceBetween: 20,
            freeMode: true,
            // loop: true,
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

    var swiper_imgproduct
    const swiperImgproduct = async () => {
        if (swiper_imgproduct) {
            await swiper_imgproduct.destroy(true, true); // Destroy Swiper and remove all its styles
        }

        swiper_imgproduct = new Swiper(".swiper-content-imgproduct", {
            pagination: {
                el: ".pagination-imgproduct",
            },
        });
    }   

    const getCodeProduct = async (spec_name: String,spec_value: String) => {
        let indexSpec = arrSpecMaster.value.map(i => i.spec_name).indexOf(spec_name)
        let keyitem = parseInt(indexSpec)+1
        let nextStep = ''
        
        if (keyitem >= arrSpecMaster.value.length) {
            keyitem = arrSpecMaster.value.length - 1
        }
        
        nextStep = arrSpecMaster.value[keyitem]
        nextStep.spec_name == 'color' ?  wrapperSelectColor.value = true : ''
        nextStep.spec_name == 'processor' ?  wrapperSelectProcessor.value = true : ''
        nextStep.spec_name == 'memory' ?  wrapperSelectMemory.value = true : ''
        nextStep.spec_name == 'storage' ?  wrapperSelectStorage.value = true : ''

        arrSpecMaster.value[indexSpec].spec_name == 'color' ? arrSpecMaster.value[indexSpec].spec_value = spec_value : ''
        arrSpecMaster.value[indexSpec].spec_name == 'processor' ? arrSpecMaster.value[indexSpec].spec_value = spec_value : ''
        arrSpecMaster.value[indexSpec].spec_name == 'memory' ? arrSpecMaster.value[indexSpec].spec_value = spec_value : ''
        arrSpecMaster.value[indexSpec].spec_name == 'storage' ? arrSpecMaster.value[indexSpec].spec_value = spec_value : ''

        let specSelected = []
        arrSpecMaster.value.forEach(val => {
            specSelected[val.spec_name] = val.spec_value
        });

        dataProductSelected.value = ''

        document.querySelector('.product-img-preview').classList.remove('anime-fade-in')

        if (spec_name == 'color') {
            setTimeout(async () => {
                document.querySelector('.product-img-preview').classList.add('anime-fade-in')
                prodcutImg.value = arrProduct_img.value[spec_value]
                await swiperImgproduct()
                img_detail_product.value = arrImg_detail_product.value[spec_value][0].product_img
            }, 100);
        }

        for (const [productKey, productValue] of Object.entries(arrProduct.value)) {
            // Check if the product matches the specSelected
            let matchFound = true;
            for (const [specKey, specValue] of Object.entries(specSelected)) {
                if (productValue.spec[specKey] !== specValue) {
                    matchFound = false;
                    break;
                }
            }
            // console.log(`${productKey}: ${matchFound ? 'Matches' : 'Does not match'}`);
            matchFound ? dataProductSelected.value = productValue : ''

            //select Image product
            // if (spec_name == 'color' && spec_value == productValue.spec.color && prodcutImg.value != productValue.item.product_img) {
            //     setTimeout(() => {
            //         document.querySelector('.product-img-preview').classList.add('anime-fade-in')
            //         prodcutImg.value = productValue.item.product_img
                    
            //     }, 100);
            //     break;
            // }
            
        }

        if (dataProductSelected.value != '') {
            codeProduct.value = dataProductSelected.value.item.code
            document.getElementById('bar_buyProduct')?.classList.add('show')
            document.getElementById('bar_buyProduct_mobile')?.classList.add('show')
            navbar_productName.value = dataProductSelected.value.item.product_name
            navbar_productPrice.value = dataProductSelected.value.item.sale_price
            navbar_productImg.value = dataProductSelected.value.item.product_img
        } else {
            codeProduct.value = ''
            document.getElementById('bar_buyProduct')?.classList.remove('show')
            document.getElementById('bar_buyProduct_mobile')?.classList.remove('show')
            resetDataProductNavbar()
        }
    }

    const setSpecSeleted = (spec_name) => {
        return arrSpecMaster.value.find(i => i.spec_name == spec_name).spec_value
    }

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            document.getElementById('frmImgProduct')?.classList.remove('set-frmimgproduct-down')
        } else {
            document.getElementById('frmImgProduct')?.classList.add('set-frmimgproduct-down')
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }

    function resetDataProductNavbar() {
        navbar_productName.value = ''
        navbar_productPrice.value = ''
        navbar_productImg.value = ''
    }

    const oponDetailProduct = () => {
        form_detail_product.value.style.height = `${element_detail_product.value.clientHeight}px`
        switch_btn_detail_product.value = true
    }

    const closeDetailProduct = () => {
        form_detail_product.value.style.height = `clamp(600px, 150vw, 1500px)`
        switch_btn_detail_product.value = false
    }

    // const colroSelected = useState<string>('colroSelected', () => '')
    // const processorSelected = useState<string>('processorSelected', () => '')
    // const memorySelected = useState<string>('memorySelected', () => '')
    // const storageSelected = useState<string>('storageSelected', () => '')
    const qtyProduct = useState<number>('qtyProduct', () => 1)

    const updateWidth = async () => {
        setTimeout(() => {
            device_size.value = window.innerWidth
        
            slidesPerView_accessories.value = 2
            slidesPerView_recommend.value = 2
            if (window.innerWidth > 1200) {
                slidesPerView_accessories.value = 5
                slidesPerView_recommend.value = 5
            }
            else if (window.innerWidth > 991) {
                slidesPerView_accessories.value = 4
                slidesPerView_recommend.value = 4
            } 
            else if (window.innerWidth > 768) {
                slidesPerView_accessories.value = 3
                slidesPerView_recommend.value = 3
            } 
            else if (window.innerWidth > 670) {
                slidesPerView_accessories.value = 3
                slidesPerView_recommend.value = 3
            } 
            else if (window.innerWidth > 450) {
                slidesPerView_accessories.value = 2
            } 
            
        }, 100);
    
        await swiperImgproduct()
        await swiperiAccessories()
        await swiperRecommend()
    }

    onMounted(async () => {    
        await updateWidth()
        await window.addEventListener('resize', updateWidth)

        const responProductAccessories = await $fetch('https://api2.advice.in.th/api/getProductAccessories', {
            method: 'POST',
            body: {
                "model": product.value,
            }
        })
        productAccessories.value = JSON.parse(responProductAccessories).data

        const responProductRecommend = await $fetch('https://api2.advice.in.th/api/getProductRecommend', {
            method: 'POST',
            body: {
                "serie": sub_category.value,
                "model": product.value,
            }
        })
        productRecommend.value = JSON.parse(responProductRecommend).data
        
        await getDataProduct()
        await swiperiAccessories()
        await swiperRecommend()
        await resetDataProductNavbar()

        qtyProduct.value = 1

        wrapperSelectColor.value = false
        wrapperSelectProcessor.value = false
        wrapperSelectMemory.value = false
        wrapperSelectStorage.value = false

        var scrollableElement = document.body; 

        scrollableElement.addEventListener('wheel', checkScrollDirection);

       
    })
</script>

<template>
    <NuxtLayout name="istore">
        <section class="bg-white">
            <div class="container-fluid py-3">
                <ul v-if="device_size > 1024" class="form-submenu-product m-0">
                    <li class="submenu-product"><NuxtLink class="link-submenu" to="/">หน้าหลัก</NuxtLink></li>
                    <li class="submenu-product"><NuxtLink class="link-submenu" :to="`/product/${String(category)}`">{{linkProduct}}</NuxtLink></li>
                    <li class="submenu-product"><NuxtLink class="link-submenu" :to="`/${String(category)}/${String(sub_category)}`">{{linkSerie}}</NuxtLink></li>
                </ul>
                <div class="row p-4 p-lg-0 mt-3">
                    <div class="col-12 col-lg-7">
                        <div id="frmImgProduct" class="frame-img-productdetail">
                            <!-- Swiper -->
                           <div class="swiper swiper-content-imgproduct">
                               <div class="swiper-wrapper">
                                   <div class="swiper-slide d-flex justify-content-center align-items-center pb-4" v-for="item_img in prodcutImg">
                                        <img class="product-img-preview anime-fade-in" :src="item_img.product_img" alt="product-img-detail">
                                   </div>
                               </div>
                               <div class="pagination-imgproduct d-flex justify-content-center position-relative" style="z-index: 999;"></div>
                           </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5 ps-0 ps-lg-4">
                        <NuxtLink class="link-product link-none-underlines" :to="`/product/${String(category)}`">
                            {{ linkProduct }}
                        </NuxtLink>
                        <h1 class="text-subject-productdetail">{{ productModel }}</h1>
                        <hr>
                        <div class="mb-4">
                            <h3 class="mb-1 text-special-price">ราคาพิเศษ: ฿{{ FormatPrice(productPrice) }} </h3>
                            <h5 class="mb-1 font-bold-22 color-gray">ราคาปกติ: ฿{{ FormatPrice(productPrice) }} </h5>
                            <p class="mb-1 font-22 color-gray">หรือ</p>
                            <p class="mb-1 font-22 color-gray">ราคา ฿4,580 /เดือน | สำหรับผ่อนชำระ 0% 10 เดือน*</p>      
                        </div>
                        <hr>
                        <div v-for="spec_master in arrSpecMaster" class="mb-4">
                            <div v-if="spec_master.spec_name == 'color'">
                                <h3 class="">เลือกสี: <span class="color-gray font-22" style="font-weight: 400;">{{ setSpecSeleted('color') }}</span></h3>
                                <div class="mb-4 position-relative">
                                    <div v-if="!wrapperSelectColor" id="wrapper-color" class="wrapper-select-product"></div>
                                    <div class="form-color-selector">
                                        <button v-for="itemColor in arrColor" class="color-selector" :class="{'active': itemColor.color_name == setSpecSeleted('color')}" @click="getCodeProduct('color',itemColor.color_name)" :disabled="itemColor.active == 'F'">
                                            <div class="color-product" :style="`background-color: ${itemColor.color_code}`"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="spec_master.spec_name == 'processor'">
                                <h3 class="">โปรเซสเซอร์: <span class="color-gray font-22" style="font-weight: 400;">{{ setSpecSeleted('processor') }}</span></h3>
                                <div class="mb-4 position-relative">
                                    <div v-if="!wrapperSelectProcessor" id="wrapper-processor" class="wrapper-select-product"></div>
                                    <div class="form-selector-processor">
                                        <button v-for="itemProcessor in arrProcessor" class="product-selector" :class="{'active': itemProcessor.name == setSpecSeleted('processor')}" @click="getCodeProduct('processor',itemProcessor.name)" :disabled="itemProcessor.active == 'F'">
                                            <div class="text-center">
                                                <p class="m-0 text-uppercase font-bold-22 line-height-18">{{ itemProcessor.name }}</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="spec_master.spec_name == 'memory'">
                                <h3 class="">เลือกหน่วยความจำ: <span class="color-gray font-22" style="font-weight: 400;">{{ setSpecSeleted('memory') }}</span></h3>
                                <div class="mb-4 position-relative">
                                    <div v-if="!wrapperSelectMemory" id="wrapper-memory" class="wrapper-select-product"></div>
                                    <div class="form-product-selector">
                                        <button v-for="itemMemory in arrMemory" class="product-selector" :class="{'active': itemMemory.name == setSpecSeleted('memory')}" @click="getCodeProduct('memory',itemMemory.name)" :disabled="itemMemory.active == 'F'">
                                            <div class="text-center">
                                                <p class="m-0 text-uppercase font-bold-22 line-height-18">{{ itemMemory.name }}</p>
                                            </div>
                                        </button>
                                        <!-- <li class="product-selector">
                                            <div class="text-center">
                                                <p class="m-0 text-uppercase font-bold-22 line-height-18">512GB</p>
                                                <p class="m-0 font-20">฿21,000</p>
                                            </div>
                                        </li>
                                        <li class="product-selector">
                                            <div class="text-center">
                                                <p class="m-0 text-uppercase font-bold-22 line-height-18">512GB</p>
                                                <p class="m-0 font-20">฿21,000</p>
                                            </div>
                                        </li> -->
                                    </div>
                                </div>
                            </div>
                            <div v-if="spec_master.spec_name == 'storage'">
                                <h3 class="">เลือกพื้นที่จัดเก็บข้อมูล: <span class="color-gray font-22" style="font-weight: 400;">{{ setSpecSeleted('storage') }}</span></h3>
                                <div class="mb-4 position-relative">
                                    <div v-if="!wrapperSelectStorage" id="wrapper-storage" class="wrapper-select-product"></div>
                                    <div class="form-product-selector">
                                        <button v-for="itemStorage in arrStorage" class="product-selector" :class="{'active': itemStorage.name == setSpecSeleted('storage')}" @click="getCodeProduct('storage',itemStorage.name)" :disabled="itemStorage.active == 'F'">
                                            <div class="text-center">
                                                <p class="m-0 text-uppercase font-bold-22 line-height-18">{{ itemStorage.name }}</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="mb-4">
                            <h3 class="">จำนวน:</h3>
                            <div class="form-control-quantity">
                                <button @click="qtyProduct--" class="item-quantity" :disabled="qtyProduct == 1"><i class="fa-solid fa-minus"></i></button>
                                <h1 class="m-0">{{ qtyProduct }}</h1>
                                <button @click="qtyProduct++" class="item-quantity"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <hr>
                        <div class="mb-4">
                            <h3 class="">รับความคุ้มครอง AppleCare+:</h3>
                            <div v-if="category == 'mac'" class="form-checkbox-applecare mb-md-2">
                                <div class="form-check d-flex align-items-center gap-3">
                                    <input class="form-check-input checkbox-applecare mb-3" type="checkbox" value="" id="checkboxapplecare">
                                    <img width="auto" height="48px" class="" src="~/assets/img/icon/AppleCareplus.png" alt="img-AppleCare">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="m-0 text-applecare">AppleCare+:  MacBook Pro รุ่น 16 นิ้ว (ชิป M4)</h4>
                                        <h4 class="m-0 text-applecare-price">฿7,790.00</h4>
                                    </div>
                                    <p class="m-0 font-22 color-gray">เพิ่มความคุ้มครอง รวมถึงอุบัติเหตุ 3 ปี</p>
                                    <p class="m-0 font-22">
                                        <a class="color-bluedark font-20 link-none-underlines" href="#">ดูรายละเอียดเพิ่มเติม</a>
                                    </p>
                                </div>
                            </div>
                            <div v-if="category == 'iphone'" class="form-checkbox-applecare mb-md-2">
                                <div class="form-check d-flex align-items-center gap-3">
                                    <input class="form-check-input checkbox-applecare mb-3" type="checkbox" value="" id="checkboxapplecare">
                                    <img width="auto" height="48px" class="" src="~/assets/img/icon/AppleCareplus.png" alt="img-AppleCare">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="m-0 text-applecare">AppleCare+:  iPhone 16 Pro Max</h4>
                                        <h4 class="m-0 text-applecare-price">฿7,790.00</h4>
                                    </div>
                                    <p class="m-0 font-22 color-gray">เพิ่มความคุ้มครอง รวมถึงอุบัติเหตุ 3 ปี</p>
                                    <p class="m-0 font-22">
                                        <a class="color-bluedark font-20 link-none-underlines" href="#">ดูรายละเอียดเพิ่มเติม</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="mb-4">
                            <h3 class="">Trade-in เก่าแลกใหม่:</h3>
                            <p class="mb-2 font-22 color-graydark">Apple Trade In ให้คุณนำอุปกรณ์เครื่องปัจจุบันมาแลกเป็นเครดิตอย่างคุ้มค่าเพื่อนำไปใช้ซื้ออุปกรณ์เครื่องใหม่คุณสามารถแลกอุปกรณ์ได้ทั้งทางออนไลน์หรือที่ Advice</p>
                            <p class="m-0 font-bold-22">
                                <a class="color-bluedark font-22 link-none-underlines" href="#">ดูข้อมูล Trade-in เพิ่มเติม</a>
                            </p>
                        </div>
                        <hr>
                        <div class="mb-4">
                            <h3 class="">รายละเอียดการจัดส่งและชำระเงิน:</h3>
                            <!-- <ul class="installment-wrapper">
                                <li class="item-installment">
                                    <img width="auto" height="38px" class="" src="~/assets/img/icon/Installmentzero.png" alt="img-Installmentzero">
                                    <div>
                                        <p class="m-0 font-bold-20">ผ่อนชำระ 0%</p>
                                        <p class="m-0 font-16 color-bluedark">ดูรายละเอียด</p>
                                    </div>
                                </li>
                                <li class="item-installment">
                                    <img width="auto" height="38px" class="" src="~/assets/img/icon/icon-Installment.png" alt="img-Installmentzero">
                                    <div>
                                        <p class="m-0 font-bold-20">ส่งด่วน 2-5 ชั่วโมง</p>
                                        <p class="m-0 font-16 color-bluedark">ดูรายละเอียด</p>
                                    </div>
                                </li>
                                <li class="item-installment">
                                    <img width="auto" height="38px" class="" src="~/assets/img/icon/icon-Installmentdetails.png" alt="img-Installmentzero">
                                    <div>
                                        <p class="m-0 font-bold-20">รับสินค้าสาขาใกล้บ้าน</p>
                                        <p class="m-0 font-16 color-bluedark">ดูรายละเอียด</p>
                                    </div>
                                </li>
                            </ul> -->
                            <div class="installment-zero-wrapper">
                                <div class="col">
                                    <div class="card-installment">
                                        <div class="d-flex align-items-center" style="gap: 12px;">
                                            <img class="icon-installment-zero" src="https://img.advice.co.th/images_nas/iStore/icon/Installment_gray.png" alt="icon-installment">
                                            <h3 class="m-0">ออนไลน์</h3>
                                        </div>
                                        <hr class="my-2" style="border-style: dashed;">
                                        <ul class="bank-list">
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/firstchoice-k.png" alt="First Choice">
                                                    First Choice
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/KTC-Pround_new.png" alt="First Choice">
                                                    KTC PROUD
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/KTC_new.png" alt="First Choice">
                                                    KTC
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/BAY_new.png" alt="First Choice">
                                                    กรุงศรีอยุธยา
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/kungthai.png" alt="First Choice">
                                                    กรุงไทย
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/kbank.png" alt="First Choice">
                                                    กสิกรไทย
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-installment">
                                        <div class="d-flex align-items-center" style="gap: 12px;">
                                            <img class="icon-installment-zero" src="https://img.advice.co.th/images_nas/iStore/icon/Installment_gray.png" alt="icon-installment">
                                            <h3 class="m-0">สาขา</h3>
                                        </div>
                                        <hr class="my-2" style="border-style: dashed;">
                                        <ul class="bank-list">
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/firstchoice-k.png" alt="First Choice">
                                                    First Choice
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/KTC-Pround_new.png" alt="First Choice">
                                                    KTC PROUD
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/KTC_new.png" alt="First Choice">
                                                    KTC
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/BAY_new.png" alt="First Choice">
                                                    กรุงศรีอยุธยา
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/kungthai.png" alt="First Choice">
                                                    กรุงไทย
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                            <li>
                                                <span class="d-flex align-items-center gap-2">
                                                    <img class="icon-bank-installment" src="https://img.advice.co.th/images_nas/advice/oneweb/assets/images/icon/bank/kbank.png" alt="First Choice">
                                                    กสิกรไทย
                                                </span>
                                                <span>ผ่อนสูงสุด 12 เดือน</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <hr> -->
                        <!-- <div class="mb-4">
                            <h3 class="">รายละเอียดการจัดส่ง:</h3>
                            <ul class="delivery-details-list">
                                <li>1. ไม่จำกัดยอดการสั่งซื้อ</li>
                                <li>2. จัดส่งทุกพื้นที่ภายในประเทศ</li>
                                <li>3. จัดส่ง วันจันทร์ – เสาร์ (ยกเว้นวันอาทิตย์ และวันหยุดนักขัตฤกษ์ตามประกาศของบริษัทฯและขนส่ง)</li>
                                <li>4. ระยะเวลาจัดส่ง 1-2 วันทำการ (ยกเว้นลูกค้าไม่รับโทรศัพท์/ไม่สามารถติดต่อได้ หรือเกิดเหตุสุดวิสัย เช่น น้ำท่วม เกิดประท้วง รวมถึงเทศกาลต่าง ๆ)</li>
                                <li>5. ตารางคำนวนค่าขนส่ง</li>
                            </ul>
                            <div class="mt-3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>พื้นที่</th>
                                            <th>ยอดสั่งซื้อ</th>
                                            <th>ค่าจัดส่ง</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="2" class="left-align">
                                                กทม-ปริมณฑล <span class="note">*</span><br>และต่างจังหวัด
                                            </td>
                                            <td>1 - 499</td>
                                            <td>เริ่มต้น 35 บาท</td>
                                        </tr>
                                        <tr>
                                            <td>มากกว่า 500</td>
                                            <td>ฟรี</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="mt-5 mb-1">
                    <h3 class="">อุปกรณ์เสริม:</h3>
                    <div class="overflow-hidden form-swiper-accessories" style="border-radius: 8px;background: #F2F2F7;">
                        <div class="row-swiper m-2">
                            <div class="swiper swiper-product-wrapper swiper-content-accessories">
                                <div class="swiper-wrapper swiper-product">
                                    <div v-for="itemAcces in productAccessories" class="swiper-slide box-card-product">
                                        <CradProductAccessories :objectProduct="itemAcces"></CradProductAccessories>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination item-swiper-pagination swiper-pagination-accessories"></div>
                </div>
                <div class="my-5 pb-5">
                    <div class="form-control-detailpro">
                        <ul class="form-menudetails">
                            <li class="menu-detail">ภาพรวมสินค้า</li>
                            <li class="menu-detail">คุณสมบัติ</li>
                        </ul>
                        <hr class="m-0">
                    </div>
                    <div class="detail-product-wrapper">
                        <div class="details-wrapper">
                            <div ref="form_detail_product" class="wrapper-detail-product">
                                <img ref="element_detail_product" class="img-detial-product" :src="img_detail_product" alt="img-detil-product">
                            </div>
                        </div>
                    </div>
                    <!-- <div ref="form_btn_showdetail" class="form-btn-showdetail mt-3" @click="form_btn_showdetail.classList.toggle('show')">
                        <button v-if="!switch_btn_detail_product" class="btn-show-details" @click="oponDetailProduct()">แสดงเพิ่มเติม</button>
                        <button v-else class="btn-show-details" @click="closeDetailProduct()">ย่อขนาด</button>
                    </div> -->
                </div>
                <div class="my-5 pb-5 position-relative">
                    <h1 class="text-subject">สินค้าแนะนำ</h1>
                    <div class="overflow-hidden">
                        <div class="row-swiper m-2">
                            <div class="swiper d-flex align-items-center swiper-content-recommend p-1">
                                <div class="swiper-wrapper">
                                    <div v-for="itemRecommend in productRecommend" class="swiper-slide box-card-product">
                                        <CardProductRecommend :objectProduct="itemRecommend"></CardProductRecommend>
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
                </div>
            </div>
        </section>
        <footer v-if="device_size < 1024" id="bar_buyProduct_mobile" class="footer-product-detail">
            <div class="row m-0 p-3 pb-3 pt-4 form-btn-buyproduct">
                <div class="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-between align-items-center gap-5">
                    <p class="m-0 font-22">{{ navbar_productName }}</p>
                    <h2 class="font-bold-35 line-height-34 m-0 d-flex align-items-center gap-3"><span class="font-bold-22">x{{ qtyProduct }}</span>฿{{ FormatPrice(navbar_productPrice) }}</h2>
                </div>
                <div class="col-12 col-md-6 mb-2 mb-md-0">
                    <div class="row">
                        <div class="col-5 pe-2 pe-sm-2 p-md-0 pe-md-2 col-md-12 d-flex justify-content-center">
                            <button v-if="device_size < 640" class="btn-addcart" @click="showSnackbar_mobile(navbar_productName,navbar_productImg)"><i class="fa-solid fa-plus icon-addcart"></i>เพิ่มลงตะกร้า</button>
                            <button v-else class="btn-addcart" @click="addCart(codeProduct,qtyProduct),showSnackbar(navbar_productName,navbar_productImg)"><i class="fa-solid fa-plus icon-addcart"></i>เพิ่มลงตะกร้า</button>
                        </div>
                        <div class="col-7 ps-1 ps-sm-2 ps-md-0 p-md-2 col-md-12 d-flex justify-content-center">
                            <NuxtLink @click="addCart(codeProduct,qtyProduct)" to="/cart" class="btn-buyproduct">ซื้อเลย</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer v-else id="bar_buyProduct" class="form-control-buyproduct">
            <div class="container-fluid py-3">
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <div class="d-flex gap-2">
                            <IconBoxalt></IconBoxalt>
                            <div class="d-block">
                                <h4 class="m-0 font-bold-24 line-height-26">รับสินค้าที่ Advice ใกล้บ้านคุณ</h4>
                                <p class="m-0 color-gray font-22 line-height-30">เรามีสาขามากกว่า 350 สาขา ทั่วประเทศไทย</p>
                                <NuxtLink class="font-18 color-bluedark link-none-underlines" to="/">ดูรายละเอียดเพิ่มเติม</NuxtLink>
                            </div>
                        </div>
                        <div class="box-or-shop mx-5">
                            <span class="border-or"></span>
                            <span class="font-18 position-absolute" style="color: #C7C7CC;background: #ffff;padding: 5px;">หรือ</span>
                        </div>
                        <div class="d-flex gap-2">
                            <IconShoppingFast></IconShoppingFast>
                            <div class="ps-1">
                                <h4 class="m-0 font-24 line-height-22" style="font-weight: 500">จัดส่งทันที:
                                    <span class="color-gray font-24">เมื่อสั่งซื้อก่อน 12.00 น.</span>
                                </h4>
                                <h4 class="m-0 font-24 line-height-22" style="font-weight: 500">จัดส่งปกติ:
                                    <span class="color-gray font-24">2-3 วันทำการ</span>
                                </h4>
                                <NuxtLink class="font-18 color-bluedark link-none-underlines" to="/">ดูรายละเอียดเพิ่มเติม</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center w-100 justify-content-center">
                            <div class="d-flex align-items-center gap-4 w-100 justify-content-center">
                                <div class="d-flex flex-column align-items-end">
                                    <p class="m-0 font-22">{{ navbar_productName }}</p>
                                    <h2 class="font-bold-35 line-height-34 m-0 d-flex align-items-center gap-3"><span class="font-bold-22">x{{ qtyProduct }}</span>฿{{ FormatPrice(navbar_productPrice) }}</h2>
                                    <p class="m-0 d-flex align-items-center">
                                        <span class="color-gray font-20">฿4,580 /เดือน</span>
                                        <span class="mx-2" style="display:block;width: 1px;height: 15px;background: #C7C7CC;"></span>
                                        <span class="color-gray font-20">สำหรับผ่อนชำระ 0% 10 เดือน*</span>
                                    </p>
                                    <NuxtLink class="font-18 color-bluedark link-none-underlines" to="/">ดูรายละเอียดเพิ่มเติม</NuxtLink>
                                </div>
                                <div class="box-img-product">
                                    <img class="img-product-card" :src="navbar_productImg" alt="img-product-istore">
                                </div>
                            </div>
                            <div class="group-btnbuy-product">
                                <NuxtLink @click="addCart(codeProduct,qtyProduct)" to="/cart" class="btn-buyproduct">ซื้อเลย</NuxtLink>
                                <button class="btn-addcart" @click="addCart(codeProduct,qtyProduct),showSnackbar(navbar_productName,navbar_productImg)"><i class="fa-solid fa-plus icon-addcart"></i>เพิ่มลงตะกร้า</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </NuxtLayout>
</template>

<style scoped>
.wrapper-detail-product {
    background-color: #8E8E93;
    width: 100%;
    /* height: clamp(600px, 150vw, 1500px); */
    height: auto;
    transition: 1s;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%);
}

    .text-special-price {
        font-size: clamp(20px, 3vw, 24px);
    }

    .text-applecare,.text-applecare-price {
        font-size: clamp(18px, 3vw, 22px);
    }

    .product-img-preview {
        width: auto;
        height: 100%;
        max-width: 100%;
    }

    .set-frmimgproduct-down {
        top: 5%;
    }

    .link-product {
        color: #0A84FF;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px; 
        letter-spacing: normal;
        text-decoration: none;
    }

    hr {
        background-color: #ccc;
    }

    .form-menudetails {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1.6rem;
    }

    .menu-detail {
        font-size: 22px;
        font-weight: 500;
        padding: 4px 6px;
        color: #8E8E93;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: 0.3s;
    }
    .menu-detail:hover ,.menu-detail.active {
        font-size: 22px;
        font-weight: 500;
        padding: 4px 6px;
        color: #0A84FF;
        border-bottom: 2px solid #0A84FF;
    }

    .form-btn-showdetail {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: 0 -50px 100px 150px #fff;
    }
    .form-btn-showdetail.show {
        box-shadow: none;
    }

    .btn-show-details {
        background: none;
        padding: 2px 16px;
        border-radius: 5px;
        border: 1px solid #0A84FF;
        color: #0A84FF;
        font-size: 18px;
        font-weight: 500;
        outline: none !important;
        cursor: pointer;
    }
    .btn-show-details:hover {
        opacity: 0.7;
        transition: 0.3s
    }

    .details-wrapper {
        width: 100%;
        height: auto;
        overflow: hidden;
        transition: 0.5s
    }

    .form-control-buyproduct {
        width: 100%;
        height: auto;
        background: #fff;
        border-top: 3px solid #0A84FF;
        position: sticky;
        bottom: -180px;
        z-index: 99;
        transition: 0.3s;
        visibility: hidden;
        opacity: 0;
    }

    .form-control-buyproduct.show {
        bottom: 0;
        opacity: 1;
        visibility: visible;
    }

    .box-or-shop {
        width: auto;
        height: 80%;
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

    .box-img-product {
        width: 110px;
        height: 110px;
        border-radius: 16px;
        background-color: #efefef;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-product-card {
        max-width: fit-content;
        max-height: 260px;
        width: 100%;
        height: auto;
    }

    .img-detial-product {
        width: 100%;
    }

    .delivery-details-list {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 20px;
        font-weight: 400;
        line-height: 22px;
        color: #636366;
    }
    .delivery-details-list li {
        margin-bottom: 2px;
    }
    
    table {
        border-collapse: collapse;
        width: 100%;
        max-width: 450px;
    }

    th, td {
        border: 1px solid #000;
        padding: 5px;
        text-align: center;
        vertical-align: middle;
        font-size: 18px;
    }

    th {
        background-color: #f8f8f8;
        font-family: "DBHeaventRounded";
        font-weight: 500;
    }

    .note {
        color: red;
    }

    .icon-installment-zero {
        width: 32px;
        height: auto;
    }

    .bank-list {
        margin: 0;
        padding: 0;
    }
    .bank-list li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        padding: 4px 0;
    }

    .icon-bank-installment {
        width: 26px;
        height: auto;
    }

    .card-installment {
        background-color: #F9FAFB;
        border-radius: 20px;
        padding: 1.5rem;
    }

    .installment-zero-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-gap: 0.7rem;
    }
</style>
