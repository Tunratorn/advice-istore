<script lang="ts" setup>
    const dataCookieProduct = useCookie('data-product');
    const arrProduct = ref([])
    const arrBranch = ref([])
    const isReceive = ref('')
    const isTax = ref('')
    const search_addressBranch = ref('')
    const textFormBranch = ref('Branch')
    const item_branch = ref([])
    const address_branch = ref(null)
    const address_delivery = ref(null)
    const address_papertax = ref(null)
    const emailEtax = ref('')
    const isViewsize = ref('')

    // Element value 
    const radio_branch = ref(null)
    const radio_delivery = ref(null)

    const arrAddress = ref([{
        name: 'สมชาย',
        lastname: 'ใจดี',
        building: 'ตึกสกายไลน์',
        no: '123',
        floor: '10',
        moo: '5',
        village: 'กรีนวัลเลย์',
        soi: 'ซอย 12',
        road: 'ถนนหลัก',
        district: 'เขตกลาง',
        subdistrict: 'แขวงเหนือ',
        province: 'กรุงเทพมหานคร',
        zipcode: '10110',
        tel: '081-234-xxxx',
        addressfull: 'ตึกสกายไลน์ 123 ชั้น 10 หมู่ 5 กรีนวัลเลย์ ซอย 12 ถนนหลัก เขตกลาง แขวงเหนือ กรุงเทพมหานคร 10110'
    },
    {
        name: 'สมหญิง',
        lastname: 'ใจงาม',
        building: 'โอเชียนวิว',
        no: '456',
        floor: '5',
        moo: '3',
        village: 'บลูฮอไรซอน',
        soi: 'ซอย 8',
        road: 'ถนนชายหาด',
        district: 'เขตตะวันตก',
        subdistrict: 'แขวงใต้',
        province: 'ภูเก็ต',
        zipcode: '83000',
        tel: '089-876-xxxx',
        addressfull: 'โอเชียนวิว 456 ชั้น 5 หมู่ 3 บลูฮอไรซอน ซอย 8 ถนนชายหาด เขตตะวันตก แขวงใต้ ภูเก็ต 83000'
    }])

    const arrAddressTax = ref([{
        tax_name: 'บริษัท สมชาย ใจดี จำกัด',
        building: 'ตึกสกายไลน์',
        no: '123',
        floor: '10',
        moo: '5',
        village: 'กรีนวัลเลย์',
        soi: 'ซอย 12',
        road: 'ถนนหลัก',
        district: 'เขตกลาง',
        subdistrict: 'แขวงเหนือ',
        province: 'กรุงเทพมหานคร',
        zipcode: '10110',
        tel: '081-234-xxxx',
        addressfull: 'ตึกสกายไลน์ 123 ชั้น 10 หมู่ 5 กรีนวัลเลย์ ซอย 12 ถนนหลัก เขตกลาง แขวงเหนือ กรุงเทพมหานคร 10110',
        taxpayer_type: 'บุคคลธรรมดา',
        tax_branch: ''
    },
    {
        tax_name: 'บริษัท สมหญิง ใจงาม จำกัด',
        building: 'โอเชียนวิว',
        no: '456',
        floor: '5',
        moo: '3',
        village: 'บลูฮอไรซอน',
        soi: 'ซอย 8',
        road: 'ถนนชายหาด',
        district: 'เขตตะวันตก',
        subdistrict: 'แขวงใต้',
        province: 'ภูเก็ต',
        zipcode: '83000',
        tel: '089-876-xxxx',
        addressfull: 'โอเชียนวิว 456 ชั้น 5 หมู่ 3 บลูฮอไรซอน ซอย 8 ถนนชายหาด เขตตะวันตก แขวงใต้ ภูเก็ต 83000',
        taxpayer_type: 'นิติบุคคล',
        tax_branch: ''
    },
    {
        tax_name: 'บริษัท เดโม จำกัด',
        building: 'ตึกเดโม',
        no: '789',
        floor: '15',
        moo: '7',
        village: 'เดโมวิลเลจ',
        soi: 'ซอย 20',
        road: 'ถนนเดโม',
        district: 'เขตเดโม',
        subdistrict: 'แขวงเดโม',
        province: 'เชียงใหม่',
        zipcode: '50000',
        tel: '091-123-xxxx',
        addressfull: 'ตึกเดโม 789 ชั้น 15 หมู่ 7 เดโมวิลเลจ ซอย 20 ถนนเดโม เขตเดโม แขวงเดโม เชียงใหม่ 50000',
        taxpayer_type: 'นิติบุคคล',
        tax_branch: 'สำนักงานใหญ่'
    }])

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

    const selectBranch = async () => {
        let index = address_branch.value
        item_branch.value = []
        item_branch.value.push(arrBranch.value[index])
        let modal_branch = bootstrap.Modal.getOrCreateInstance(document.getElementById('BranchModal')) // Returns a Bootstrap modal instance
        modal_branch.hide();
        radio_branch.value.checked = true
        isReceive.value = 'branch'
        arrBranch.value = []
        search_addressBranch.value = ''
    }

    const getAddressBranch = async () => {
        arrBranch.value = []
        // if (search_addressBranch.value == '') {
        //     return false
        // }
        const respon_branch = await $fetch('https://api2.advice.in.th/api/getBranchProduct', {
            method: 'POST',
            body: {
                "address": search_addressBranch.value
            }
        })

        if (JSON.parse(respon_branch).status == "success") {
            arrBranch.value = JSON.parse(respon_branch).data
        } else {
            textFormBranch.value = 'ไม่พบข้อมูล'
        }

    }

    const openModalBranch = async (type: String) => {
        address_branch.value = null
        arrBranch.value = []
        textFormBranch.value = 'Branch'
        let modal_branch = bootstrap.Modal.getOrCreateInstance(document.getElementById('BranchModal')) // Returns a Bootstrap modal instance
        isReceive.value = 'branch'
        if (item_branch.value.length < 1) {
            modal_branch.show()
            isReceive.value = ''
            radio_branch.value.checked = false
        }

        if (type == 'edit_branch') {
            modal_branch.show()
        }

        search_addressBranch.value = ''
        await getAddressBranch()
    }

    const selectTax = (tax: String) => {
        document.querySelectorAll('.frm-tax-content').forEach(el => {
            el.style.height = "0";
        });

        isTax.value = tax
        if (tax == 'no_tax') {

        } else if (tax == 'paper_tax') {
            let paperTaxElement = document.getElementById('frm_paper');
            paperTaxElement.style.height = `${paperTaxElement.scrollHeight}px`;
        } else if (tax == 'etax') {
            let etaxElement = document.getElementById('frm_etax');
            etaxElement.style.height = `${etaxElement.scrollHeight}px`;
        }
    }

    const paymentSelect = (pay: String) => {
        document.querySelectorAll('.frm-payment-content').forEach(el => {
            el.style.height = "0";
        });

         document.getElementById('frm_installment').style.overflow = "hidden"
         document.getElementById('frm_detail_installment').style.height = "0"
         document.querySelectorAll('input[name="installment"]').forEach(el => el.checked = false);

        if (pay == 'qrcode') {
            let h_qr = document.getElementById('content_qrcode').offsetHeight + 20
            document.getElementById('frm_qrcode').style.height = `${h_qr}px`
        } else if (pay == 'credit') {
            document.getElementById('frm_credit').style.height = "115px"
        } else if (pay == 'installment') {
            dataIntallment.value = []
            document.getElementById('frm_installment').style.height = "115px"
            setTimeout(() => {
                document.getElementById('frm_installment').style.overflow = "visible"
            }, 300);
        }
    }

    const selectInstallment = (bank: String) => {
        document.getElementById('frm_installment').style.overflow = "hidden"
        document.getElementById('frm_detail_installment').style.height = "auto"
        dataIntallment.value = []
        setTimeout(() => {
            let height_detail = document.getElementById('frm_detail_installment').offsetHeight
            document.getElementById('frm_installment').style.height = `calc(115px + ${height_detail}px + 30px)`
        }, 300);
      
        dataIntallment.value.push({
            'bank': 'ธนาคารกรุงไทย (KTC)',
            'icon_bank': '/images/example/KTC-Logo.png' 
        })
        console.log(dataIntallment.value,'checkval');
        
    }

    const dataIntallment = useState<Object>('dataIntallment', () => [])

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            document.querySelector('.form-payment-checkout').style.top = '14%'
        } else {
            document.querySelector('.form-payment-checkout').style.top = '2%'
        }
    }

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }

    const addressDelivery = () => {
        isReceive.value = 'delivery'
        if (address_delivery.value == null) {
            let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('AddressModal')) // Returns a Bootstrap modal instance
            modal.show();
            isReceive.value = ''
            radio_delivery.value.checked = false
        } 
    }
   
    //check value null
    const addAddressForm = reactive({
        name: '',
        lastname: '',
        tel: '',
        building: '',
        no: '',
        floor: '',
        moo: '',
        village: '',
        soi: '',
        road: '',
        district: '',
        subdistrict: '',
        province: '',
        zipcode: ''
    })

    const addAddressPaperTax = reactive({
        building: '',
        no: '',
        floor: '',
        moo: '',
        village: '',
        soi: '',
        road: '',
        district: '',
        subdistrict: '',
        province: '',
        zipcode: '',
        taxpayer_type: '',
        tax_name: '',
        tax_number: '',
        tax_branch: '',
        tel: ''
    })

    // List of required fields
    const requiredFields = ['name', 'lastname', 'no', 'district', 'subdistrict', 'province', 'zipcode', 'tel']
    const requiredTaxFields = ['no', 'district', 'subdistrict', 'province', 'zipcode', 'taxpayer_type', 'tax_name', 'tax_number', 'tel']

    const isAddAddressDisabled = computed(() => {
        return requiredFields.some(field => !addAddressForm[field])
    })

    const isAddAddressPaperTaxDisabled = computed(() => {
        return requiredTaxFields.some(field => !addAddressPaperTax[field])
    })

    const isEmailInvalid = computed(() => {
        return emailEtax.value === '';
    });

    const cearteAddress = () => {
        let newAddress
        if (addAddressForm.province === 'กรุงเทพมหานคร') {
            newAddress = {
            ...addAddressForm,
            addressfull: `${addAddressForm.building ? addAddressForm.building + ' ' : ''}${addAddressForm.no} ${addAddressForm.floor ? 'ชั้น ' + addAddressForm.floor + ' ' : ''}${addAddressForm.moo ? 'หมู่ ' + addAddressForm.moo + ' ' : ''}${addAddressForm.village ? addAddressForm.village + ' ' : ''}${addAddressForm.soi ? 'ซอย ' + addAddressForm.soi + ' ' : ''}${addAddressForm.road ? 'ถนน ' + addAddressForm.road + ' ' : ''}แขวง${addAddressForm.subdistrict} เขต${addAddressForm.district} ${addAddressForm.province} ${addAddressForm.zipcode}`
            };
        } else {
            newAddress = {
            ...addAddressForm,
            addressfull: `${addAddressForm.building ? addAddressForm.building + ' ' : ''}${addAddressForm.no} ${addAddressForm.floor ? 'ชั้น ' + addAddressForm.floor + ' ' : ''}${addAddressForm.moo ? 'หมู่ ' + addAddressForm.moo + ' ' : ''}${addAddressForm.village ? addAddressForm.village + ' ' : ''}${addAddressForm.soi ? 'ซอย ' + addAddressForm.soi + ' ' : ''}${addAddressForm.road ? 'ถนน ' + addAddressForm.road + ' ' : ''}ตำบล${addAddressForm.subdistrict} อำเภอ${addAddressForm.district} จังหวัด${addAddressForm.province} ${addAddressForm.zipcode}`
            };
        }

        arrAddress.value.push(newAddress);
        
        // Clear the form values
        Object.keys(addAddressForm).forEach(key => {
            addAddressForm[key] = '';
        });

        // Close the modal addAddressModal
        let modal_cearte = bootstrap.Modal.getOrCreateInstance(document.getElementById('addAddressModal'));
        modal_cearte.hide();

        let modal_address = bootstrap.Modal.getOrCreateInstance(document.getElementById('AddressModal')) // Returns a Bootstrap modal instance
        modal_address.show();
    }

    const selectAddressDelivery = () => {
        let index
        let selectedRadio = document.querySelector('input[name="addresCustomer"]:checked');
        if (selectedRadio) {
            index = Array.from(document.querySelectorAll('input[name="addresCustomer"]')).indexOf(selectedRadio);
        }

        let selectedAddress = arrAddress.value[index];
        address_delivery.value = selectedAddress;

        // Close the modal
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('AddressModal'));
        modal.hide();

        radio_delivery.value.checked = true
        isReceive.value = 'delivery'
    }

    const selectAddressTax = async () => {
        let index;
        let selectedRadio = document.querySelector('input[name="addresPaperTaxCustomer"]:checked');
        if (selectedRadio) {
            index = Array.from(document.querySelectorAll('input[name="addresPaperTaxCustomer"]')).indexOf(selectedRadio);
        }

        let selectedAddress = arrAddressTax.value[index];
        address_papertax.value = selectedAddress;

        // Close the modal
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('AddressPaperTaxModal'));
        modal.hide();

        if (isTax.value == 'paper_tax') {
            // Set new height for frm_paper
            let paperTaxElement_paper = document.getElementById('frm_paper');
            await nextTick(); // Ensure DOM updates are applied before accessing scrollHeight
            paperTaxElement_paper.style.height = `${paperTaxElement_paper.scrollHeight}px`;
        } else if (isTax.value == 'etax') {
            // Set new height for frm_etax
            let paperTaxElement_etax = document.getElementById('frm_etax');
            await nextTick(); // Ensure DOM updates are applied before accessing scrollHeight
            paperTaxElement_etax.style.height = `${paperTaxElement_etax.scrollHeight}px`;
        }
    };

    const cearteAddressPaperTax = () => {
        let newAddress;
        if (addAddressPaperTax.province === 'กรุงเทพมหานคร') {
            newAddress = {
                ...addAddressPaperTax,
                addressfull: `${addAddressPaperTax.building ? addAddressPaperTax.building + ' ' : ''}${addAddressPaperTax.no} ${addAddressPaperTax.floor ? 'ชั้น ' + addAddressPaperTax.floor + ' ' : ''}${addAddressPaperTax.moo ? 'หมู่ ' + addAddressPaperTax.moo + ' ' : ''}${addAddressPaperTax.village ? addAddressPaperTax.village + ' ' : ''}${addAddressPaperTax.soi ? 'ซอย ' + addAddressPaperTax.soi + ' ' : ''}${addAddressPaperTax.road ? 'ถนน ' + addAddressPaperTax.road + ' ' : ''}แขวง${addAddressPaperTax.subdistrict} เขต${addAddressPaperTax.district} ${addAddressPaperTax.province} ${addAddressPaperTax.zipcode}`,
            };
        } else {
            newAddress = {
                ...addAddressPaperTax,
                addressfull: `${addAddressPaperTax.building ? addAddressPaperTax.building + ' ' : ''}${addAddressPaperTax.no} ${addAddressPaperTax.floor ? 'ชั้น ' + addAddressPaperTax.floor + ' ' : ''}${addAddressPaperTax.moo ? 'หมู่ ' + addAddressPaperTax.moo + ' ' : ''}${addAddressPaperTax.village ? addAddressPaperTax.village + ' ' : ''}${addAddressPaperTax.soi ? 'ซอย ' + addAddressPaperTax.soi + ' ' : ''}${addAddressPaperTax.road ? 'ถนน ' + addAddressPaperTax.road + ' ' : ''}ตำบล${addAddressPaperTax.subdistrict} อำเภอ${addAddressPaperTax.district} จังหวัด${addAddressPaperTax.province} ${addAddressPaperTax.zipcode}`,
            };
        }

        arrAddressTax.value.push(newAddress);

        // Clear the form values
        Object.keys(addAddressPaperTax).forEach(key => {
            addAddressPaperTax[key] = '';
        });

        // Close the modal addAddressPaperTaxModal
        let modal_cearte = bootstrap.Modal.getOrCreateInstance(document.getElementById('addAddressPaperTaxModal'));
        modal_cearte.hide();

        let modal_address = bootstrap.Modal.getOrCreateInstance(document.getElementById('AddressPaperTaxModal')); // Returns a Bootstrap modal instance
        modal_address.show();
    };

    const clearFormAddress = () => {
        // Clear the form values
        Object.keys(addAddressForm).forEach(key => {
            addAddressForm[key] = '';
        });
    }

    const clearFormAddressPaperTax = () => {
        // Clear the form values
        Object.keys(addAddressPaperTax).forEach(key => {
            addAddressPaperTax[key] = '';
        });

        // Reset the height of taxpayer forms
        document.getElementById('taxpayer_person').style.height = '0';
        document.getElementById('taxpayer_niti').style.height = '0';
    }
    
    const setTaxpayer_type = (type: string) => {
        if (type === 'person') {
            const taxpayerPerson = document.getElementById('taxpayer_person');
            taxpayerPerson.style.height = `${taxpayerPerson.scrollHeight}px`;
            document.getElementById('taxpayer_niti').style.height = '0';
        } else if (type === 'niti') {
            const taxpayerNiti = document.getElementById('taxpayer_niti');
            taxpayerNiti.style.height = `${taxpayerNiti.scrollHeight}px`;
            document.getElementById('taxpayer_person').style.height = '0';
        }
    }

    const updateWidth = async () => {
        isViewsize.value = window.innerWidth >= 992 ? 'desktop' : 'mobile';
    }

    onMounted(async () => {
        await getProductCart()
        
        var scrollableElement = document.body; 

        scrollableElement.addEventListener('wheel', checkScrollDirection);

        await updateWidth()
        await window.addEventListener('resize', updateWidth)
        
        // let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('addAddressPaperTaxModal')) // Returns a Bootstrap modal instance
        // modal.show();
    })

</script>

<template>
    <NuxtLayout name="istore">
        <!-- Modal Branch -->
        <div class="modal fade" id="BranchModal" tabindex="-1" aria-labelledby="BranchModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 650px;">
                <div class="modal-content" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-header d-flex justify-content-center p-4">
                        <h1 class="font-bold-28 m-0" id="BranchModalLabel">เลือกสาขาที่ต้องการรับสินค้า</h1>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <h5 class="text-subject mb-3">เลือกสาขา Advice iStore ที่ต้องการรับสินค้า</h5>                  
                        <div class="input-group mb-3">
                            <input v-model="search_addressBranch" @keyup.enter="getAddressBranch()" id="search_branch" type="text" class="form-control font-20" placeholder="ค้นหาชื่อจังหวัด , อำเภอ">
                            <button @click="getAddressBranch()" id="btn_search_branch" :disabled="search_addressBranch == ''" class="btn btn-outline-secondary btn-branch-search" type="button">ค้นหา</button>
                        </div>
                        <div v-if="arrBranch.length > 0" class="mt-4">
                            <h5 class="text-subject">สาขาที่ค้นพบ {{ arrBranch.length }} สาขา</h5>
                            <hr>
                        </div>
                        <!-- <div class="row">
                            <div class="col-6 mb-3">
                                <select class="form-select form-input-custom" id="selectSector">
                                    <option selected>เลือกภาค</option>
                                    <option value="1">ภาคกลาง</option>
                                    <option value="2">ภาคเหนือ</option>
                                    <option value="3">ภาคตะวันออกเฉียงเหนือ</option>
                                    <option value="3">ภาคตะวันออก</option>
                                    <option value="3">ภาคใต้</option>
                                </select>
                            </div>
                            <div class="col-6 mb-3">
                                <select class="form-select form-input-custom" id="selectProvince">
                                    <option selected>เลือกจังหวัด</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <select class="form-select form-input-custom" id="selectBranch">
                                    <option selected>เลือกสาขา</option>
                                </select>
                            </div>
                        </div> -->
                        <div v-if="arrBranch.length > 0" class="form-address-branch">
                            <div v-for="(itembranch,index_branch) in arrBranch" class="form-branch-select">
                                <input v-model="address_branch" class="form-check-input" type="radio" name="address_branch" :id="`branch${index_branch}`" :value="index_branch" hidden>
                                <label class="form-check-label" :for="`branch${index_branch}`">
                                    <h5 class="m-0 font-bold-22">Advice iStore - จังหวัดกำแพงเพชร</h5>
                                    <hr>
                                    <div class="form-data-branch">
                                        <div class="form-control-imgbranch">
                                            <img class="item-img-branch" :src="itembranch.picture" alt="img-branch">
                                        </div>
                                        <div class="pe-4">
                                            <h5 class="m-0 mb-1 mb-sm-0 font-bold-21 line-height-20">{{ itembranch.name }}</h5>
                                            <p class="text-data-branch mb-0">วันและเวลาทำการ: {{ itembranch.startdate1 }}</p>
                                            <p class="text-data-branch mb-1">{{ itembranch.branch_address }}</p>
                                            <div class="w-100 row align-items-center">
                                                <div class="col-item-title line-height-20 text-data-branch">Tel:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ itembranch.branch_tel }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Phone:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ itembranch.branch_mobile }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Email:</div>
                                                <div class="col-item-text line-height-20"><span class="font-18 color-primary">{{ itembranch.branch_email }}</span></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Website:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${itembranch.branch_website}`" target="_blank" rel="noopener noreferrer">{{ itembranch.branch_website }}</NuxtLink></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Facebook:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${itembranch.fanpage}`" target="_blank" rel="noopener noreferrer">{{ itembranch.fanpage }}</NuxtLink></div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div v-else class="item-form-branch">{{ textFormBranch }}</div>
                        <div class="w-100 d-flex justify-content-center mt-5 mb-3">
                            <button @click="selectBranch()" class="btn-pay" :disabled="address_branch == null">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal address -->
        <div class="modal fade" id="AddressModal" tabindex="-1" aria-labelledby="AddressModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 650px;">
                <div class="modal-content" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-header d-flex justify-content-center p-4">
                        <h1 class="font-bold-28 m-0" id="AddressModalLabel">เลือกที่อยู่ในการจัดส่ง</h1>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <label v-for="(address, index) in arrAddress" class="form-check frm-item-address" :for="`addresCustomer${index}`">
                            <IconDots class="icon-dots-address"></IconDots>
                            <input class="form-check-input" type="radio" name="addresCustomer" :id="`addresCustomer${index}`" style="margin-bottom: 3px;margin-left: unset;" :checked="index === 0">
                            <div class="">
                                <div v-if="index == 0" class="text-Default mb-1">ค่าเริ่มต้น</div>
                                <span class="font-bold-20 me-2">{{ address.name }} {{ address.lastname }}</span><span class="font-20 color-gray">{{ address.tel }}</span>
                                <p class="font-18 color-gray m-0">{{ address.addressfull }}</p>
                            </div>
                        </label>
                        <button class="btn-addnew-address" data-bs-toggle="modal" data-bs-target="#addAddressModal" @click="clearFormAddress">
                            <IconPlusAdd></IconPlusAdd>
                            เพิ่มที่อยู่ในการจัดส่งสินค้า {{ arrAddress.length }}/5
                        </button>
                        <div class="w-100 d-flex justify-content-center mt-5 mb-3">
                            <button @click="selectAddressDelivery" class="btn-pay">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <!-- Modal address PaperTax -->
        <div class="modal fade" id="AddressPaperTaxModal" tabindex="-1" aria-labelledby="AddressPaperTaxModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 650px;">
                <div class="modal-content" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-header d-flex justify-content-center p-4">
                        <h1 class="font-bold-28 m-0" id="AddressPaperTaxModalLabel">เลือกที่อยู่ในการออกใบกำกับภาษี</h1>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <label v-for="(address, index) in arrAddressTax" class="form-check frm-item-address" :for="`addresPaperTaxCustomer${index}`">
                            <IconDots class="icon-dots-address"></IconDots>
                            <input class="form-check-input" type="radio" name="addresPaperTaxCustomer" :id="`addresPaperTaxCustomer${index}`" style="margin-bottom: 3px;margin-left: unset;" :checked="index === 0">
                            <div class="">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="text-person-tax mb-1">{{ address.taxpayer_type }}</div>
                                    <div v-if="index == 0" class="text-Default mb-1">ค่าเริ่มต้น</div>
                                </div>
                                <span class="font-bold-20 me-2">{{ address.tax_name }}</span><span class="font-20 color-gray">{{ address.tel }}</span>
                                <p class="font-18 color-gray m-0">{{ address.addressfull }}</p>
                            </div>
                        </label>
                        <button class="btn-addnew-address" data-bs-toggle="modal" data-bs-target="#addAddressPaperTaxModal" @click="clearFormAddressPaperTax">
                            <IconPlusAdd></IconPlusAdd>
                            เพิ่มที่อยู่ในการออกใบกำกับภาษี {{ arrAddressTax.length }}/5
                        </button>
                        <div class="w-100 d-flex justify-content-center mt-5 mb-3">
                            <button @click="selectAddressTax" class="btn-pay">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal add address -->
        <div class="modal fade" id="addAddressModal" tabindex="-1" aria-labelledby="addAddressModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 660px;">
                <div class="modal-content" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-header d-flex justify-content-center p-4">
                        <h1 class="font-bold-28 m-0" id="addAddressModalLabel">เพิ่มที่อยู่ในการจัดส่งสินค้า</h1>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row mx-3">
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_name">ชื่อ<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.name" type="text" class="form-control" aria-describedby="addr_name" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_lastname">นามสกุล<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.lastname" type="text" class="form-control" aria-describedby="addr_lastname" maxlength="80">
                            </div>
                            <div class="col-12 pb-2">
                                <label class="text-form-address mb-1" for="addr_tel">เบอร์โทร<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.tel" type="text" class="form-control" aria-describedby="addr_tel" maxlength="10">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_building">ชื่ออาคาร</label>
                                <input v-model="addAddressForm.building" type="text" class="form-control" aria-describedby="addr_building" maxlength="50">
                            </div>
                            <div class="col-6 col-md-3 pb-2">
                                <label class="text-form-address mb-1" for="addr_no">เลขที่<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.no" type="text" class="form-control" aria-describedby="addr_no" maxlength="10">
                            </div>
                            <div class="col-6 col-md-3 pb-2">
                                <label class="text-form-address mb-1" for="addr_floor">ชั้นที่</label>
                                <input v-model="addAddressForm.floor" type="text" class="form-control" aria-describedby="addr_floor" maxlength="10">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_moo">หมู่บ้าน</label>
                                <input v-model="addAddressForm.village" type="text" class="form-control" aria-describedby="addr_moo" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_lastname">หมู่</label>
                                <input v-model="addAddressForm.moo" type="text" class="form-control" aria-describedby="addr_lastname" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">ซอย</label>
                                <input v-model="addAddressForm.soi" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">ถนน</label>
                                <input v-model="addAddressForm.road" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">อำเภอ / เขต<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.district" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">ตำบล / แขวง<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.subdistrict" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">จังหวัด<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.province" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">รหัสไปรษณีย์<span class="color-red">*</span></label>
                                <input v-model="addAddressForm.zipcode" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12">
                                <p class="font-bold-20 mt-2 mb-0">ตัวอย่าง</p>
                                <p class="font-18 color-gray mb-1">* กรุณาระบุข้อมูลตามที่ท่านต้องการ กรณีไม่มีข้อมูลให้เว้นว่างไว้ไม่ต้องใส่ - (ขีด)</p>
                                <div class="form-preview-address">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-center mt-5 mb-3">
                            <button @click="cearteAddress" class="btn-pay" :disabled="isAddAddressDisabled">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <!-- Modal add address PaperTax -->
        <div class="modal fade" id="addAddressPaperTaxModal" tabindex="-1" aria-labelledby="addAddressPaperTaxModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 660px;">
                <div class="modal-content" style="border-radius: 20px;overflow: hidden;">
                    <div class="modal-header d-flex justify-content-center p-4">
                        <h1 class="font-bold-28 m-0" id="addAddressPaperTaxModalLabel">เพิ่มที่อยู่ในการออกใบกำกับภาษีใหม่</h1>
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <h4 class="mb-0">1. ประเภทการขอใบกำกับภาษี</h4>
                        <p class="color-red font-16 ps-3">*กรณีลูกค้าเลือกไม่รับใบกำกับภาษีแล้ว หากต้องการขอใบกำกับภาษีเต็มรูปแบบสามารถขอได้ภายในวันที่ซื้อสินค้าเท่านั้น</p>
                        <div class="row mx-3">
                            <div class="col-12 col-md-6 pb-2">
                                <div class="d-flex gap-5">
                                    <div class="form-check">
                                        <input v-model="addAddressPaperTax.taxpayer_type" class="form-check-input" type="radio" id="individual" value="บุคคลธรรมดา" style="margin-top: 2px;" @click="setTaxpayer_type('person')">
                                        <label class="form-check-label font-18" for="individual">บุคคลธรรมดา</label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="addAddressPaperTax.taxpayer_type" class="form-check-input" type="radio" id="corporate" value="นิติบุคคล" style="margin-top: 2px;" @click="setTaxpayer_type('niti')">
                                        <label class="form-check-label font-18" for="corporate">นิติบุคคล</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref="taxpayer_person" id="taxpayer_person" class="row mx-3 form-item-taxpayer">
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="tax_name">ชื่อ - นามสกุล<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tax_name" type="text" class="form-control" aria-describedby="tax_name" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="tax_number">เลขประจำตัวผู้เสียภาษี<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tax_number" type="text" class="form-control" aria-describedby="tax_number" maxlength="13">
                            </div>
                        </div>
                        <div ref="taxpayer_niti" id="taxpayer_niti" class="row mx-3 form-item-taxpayer">
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="tax_name">ชื่อบริษัท หน่วยงาน หรือองค์กร<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tax_name" type="text" class="form-control" aria-describedby="tax_name" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="tax_number">เลขประจำตัวผู้เสียภาษี<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tax_number" type="text" class="form-control" aria-describedby="tax_number" maxlength="13">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="tax_number">สำนักงานใหญ่ / สาขา<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tax_branch" type="text" class="form-control" aria-describedby="tax_number" maxlength="13">
                            </div>
                        </div>
                        <hr>
                        <h4>2. ที่อยู่ในใบกำกับภาษี</h4>
                        <div class="row mx-3">
                            <div class="col-12 pb-2">
                                <label class="text-form-address mb-1" for="addr_tel">เบอร์โทร<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.tel" type="text" class="form-control" aria-describedby="addr_tel" maxlength="10">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_building">ชื่ออาคาร</label>
                                <input v-model="addAddressPaperTax.building" type="text" class="form-control" aria-describedby="addr_building" maxlength="50">
                            </div>
                            <div class="col-6 col-md-3 pb-2">
                                <label class="text-form-address mb-1" for="addr_no">เลขที่<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.no" type="text" class="form-control" aria-describedby="addr_no" maxlength="10">
                            </div>
                            <div class="col-6 col-md-3 pb-2">
                                <label class="text-form-address mb-1" for="addr_floor">ชั้นที่</label>
                                <input v-model="addAddressPaperTax.floor" type="text" class="form-control" aria-describedby="addr_floor" maxlength="10">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_moo">หมู่บ้าน</label>
                                <input v-model="addAddressPaperTax.village" type="text" class="form-control" aria-describedby="addr_moo" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_lastname">หมู่</label>
                                <input v-model="addAddressPaperTax.moo" type="text" class="form-control" aria-describedby="addr_lastname" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">ซอย</label>
                                <input v-model="addAddressPaperTax.soi" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">ถนน</label>
                                <input v-model="addAddressPaperTax.road" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">อำเภอ / เขต<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.district" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">ตำบล / แขวง<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.subdistrict" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_soi">จังหวัด<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.province" type="text" class="form-control" aria-describedby="addr_soi" maxlength="80">
                            </div>
                            <div class="col-12 col-md-6 pb-2">
                                <label class="text-form-address mb-1" for="addr_road">รหัสไปรษณีย์<span class="color-red">*</span></label>
                                <input v-model="addAddressPaperTax.zipcode" type="text" class="form-control" aria-describedby="addr_road" maxlength="80">
                            </div>
                            <div class="col-12">
                                <p class="font-bold-20 mt-2 mb-0">ตัวอย่าง</p>
                                <p class="font-18 color-gray mb-1">* กรุณาระบุข้อมูลตามที่ท่านต้องการ กรณีไม่มีข้อมูลให้เว้นว่างไว้ไม่ต้องใส่ - (ขีด)</p>
                                <div class="form-preview-address">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-center mt-5 mb-3">
                            <button @click="cearteAddressPaperTax" class="btn-pay" :disabled="isAddAddressPaperTaxDisabled">ยืนยัน</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-white">
            <div class="container-fluid pt-4" style="padding-bottom: 10rem;">
                <h1 class="text-subject-productdetail">ชำระเงิน</h1>
                <div class="row">
                    <div class="col-12 col-lg-6 p-4 pe-5 form-list-item">
                        <div v-if="isViewsize == 'desktop'" class="mb-4 item-checkout">
                            <h4 class="text-section mb-3">ข้อมูลการรับสินค้า<span class="color-red">*</span></h4>
                            <div class="group-item-receiv mb-3">
                                <label class="form-check frm-item-receiveing" for="receiveBranch" @click="openModalBranch('add_branch')">
                                    <input ref="radio_branch" class="form-check-input" type="radio" name="receive" id="receiveBranch" style="margin-bottom: 3px;margin-left: unset;">
                                    <span class="form-check-label item-text-receiving">
                                        <IconPackage class="icon-receive icon-box-receive"></IconPackage>รับสินค้าที่สาขา
                                    </span>
                                </label>
                                <label class="form-check frm-item-receiveing" for="delivery" @click="addressDelivery">
                                    <input ref="radio_delivery" class="form-check-input" type="radio" name="receive" id="delivery" style="margin-bottom: 3px;margin-left: unset;">
                                    <span class="form-check-label item-text-receiving">
                                        <IconTruckFast class="icon-receive"></IconTruckFast>จัดส่งสินค้า
                                    </span>
                                </label>
                            </div>
                            <div v-if="item_branch.length > 0 && isReceive == 'branch'" class="form-branch-select mb-2">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h5 class="text-subject m-0">รับสินค้าที่สาขา:</h5>
                                    <button class="btn-edit-form" @click="openModalBranch('edit_branch')">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                </div>
                               <div v-for="branch in item_branch" class="px-3">
                                    <h5 class="m-0 font-bold-22">Advice iStore - จังหวัดกำแพงเพชร</h5>
                                    <hr>
                                    <div class="form-data-branch">
                                        <div class="form-control-imgbranch">
                                            <img class="item-img-branch" :src="branch.picture" alt="img-branch">
                                        </div>
                                        <div class="100% pe-4">
                                            <h5 class="m-0 font-bold-21 line-height-20">{{ branch.name }}</h5>
                                            <p class="text-data-branch mb-0">วันและเวลาทำการ: {{ branch.startdate1 }}</p>
                                            <p class="text-data-branch mb-1">{{ branch.startdate1 }}</p>
                                            <div class="w-100 row align-items-center">
                                                <div class="col-item-title line-height-20 text-data-branch">Tel:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ branch.branch_tel }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Phone:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ branch.branch_mobile }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Email:</div>
                                                <div class="col-item-text line-height-20"><span class="font-18 color-primary">{{ branch.branch_email }}</span></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Website:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${branch.branch_website}`" target="_blank" rel="noopener noreferrer">{{ branch.branch_website }}</NuxtLink></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Facebook:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${branch.fanpage}`" target="_blank" rel="noopener noreferrer">{{ branch.fanpage }}</NuxtLink></div>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div v-if="address_delivery && isReceive == 'delivery'" class="form-mail-etax">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="text-subject m-0">ที่อยู่ในการจัดส่งสินค้า:</h5>
                                    <button class="btn-edit-form" data-bs-toggle="modal" data-bs-target="#AddressModal">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                </div>
                                <div class="px-3">
                                    <div class="group-item-nametel">
                                        <h5 class="m-0 font-bold-21">{{ address_delivery?.name }} {{ address_delivery?.lastname }}</h5>
                                        <span class="color-graydark font-21">{{ address_delivery?.tel }}</span>
                                    </div>
                                    <p class="m-0 font-18 color-gray">{{ address_delivery?.addressfull }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="mb-4 item-checkout">
                            <h4 class="text-section mb-3">ข้อมูลการรับสินค้า<span class="color-red">*</span></h4>
                            <label class="form-check frm-item-receiveing mb-2" for="receiveBranch" @click="openModalBranch('add_branch')">
                                <input ref="radio_branch" class="form-check-input" type="radio" name="receive" id="receiveBranch" style="margin-bottom: 3px;margin-left: unset;">
                                <span class="form-check-label item-text-receiving">
                                    <IconPackage class="icon-receive icon-box-receive"></IconPackage>รับสินค้าที่สาขา
                                </span>
                            </label>
                            <div v-if="item_branch.length > 0 && isReceive == 'branch'" class="form-branch-select mb-2">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <h5 class="text-subject m-0">รับสินค้าที่สาขา:</h5>
                                    <button class="btn-edit-form" @click="openModalBranch('edit_branch')">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                </div>
                               <div v-for="branch in item_branch" class="px-3">
                                    <h5 class="m-0 font-bold-22">Advice iStore - จังหวัดกำแพงเพชร</h5>
                                    <hr>
                                    <div class="form-data-branch">
                                        <div class="form-control-imgbranch">
                                            <img class="item-img-branch" :src="branch.picture" alt="img-branch">
                                        </div>
                                        <div class="100% pe-4">
                                            <h5 class="m-0 font-bold-21 line-height-20">{{ branch.name }}</h5>
                                            <p class="text-data-branch mb-0">วันและเวลาทำการ: {{ branch.startdate1 }}</p>
                                            <p class="text-data-branch mb-1">{{ branch.startdate1 }}</p>
                                            <div class="w-100 row align-items-center">
                                                <div class="col-item-title line-height-20 text-data-branch">Tel:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ branch.branch_tel }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Phone:</div>
                                                <div class="col-item-text line-height-20 text-data-branch">{{ branch.branch_mobile }}</div>
                                                <div class="col-item-title line-height-20 text-data-branch">Email:</div>
                                                <div class="col-item-text line-height-20"><span class="font-18 color-primary">{{ branch.branch_email }}</span></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Website:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${branch.branch_website}`" target="_blank" rel="noopener noreferrer">{{ branch.branch_website }}</NuxtLink></div>
                                                <div class="col-item-title line-height-20 text-data-branch">Facebook:</div>
                                                <div class="col-item-text line-height-20"><NuxtLink class="link-none-underlines font-18 color-primary" :to="`https://${branch.fanpage}`" target="_blank" rel="noopener noreferrer">{{ branch.fanpage }}</NuxtLink></div>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <label class="form-check frm-item-receiveing mb-2" for="delivery" @click="addressDelivery">
                                <input ref="radio_delivery" class="form-check-input" type="radio" name="receive" id="delivery" style="margin-bottom: 3px;margin-left: unset;">
                                <span class="form-check-label item-text-receiving">
                                    <IconTruckFast class="icon-receive"></IconTruckFast>จัดส่งสินค้า
                                </span>
                            </label>
                            <div v-if="address_delivery && isReceive == 'delivery'" class="form-mail-etax">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="text-subject m-0">ที่อยู่ในการจัดส่งสินค้า:</h5>
                                    <button class="btn-edit-form" data-bs-toggle="modal" data-bs-target="#AddressModal">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                </div>
                                <div class="px-3">
                                    <div class="group-item-nametel">
                                        <h5 class="m-0 font-bold-21">{{ address_delivery?.name }} {{ address_delivery?.lastname }}</h5>
                                        <span class="color-graydark font-21">{{ address_delivery?.tel }}</span>
                                    </div>
                                    <p class="m-0 font-18 color-gray">{{ address_delivery?.addressfull }}</p>
                                </div>
                            </div>
                        </div>
                      

                        <!-- <div v-if="isReceive == 'delivery'" class="mb-4 item-checkout">
                            <h4 class="text-section mb-3">ข้อมูลผู้รับสินค้า</h4>
                            <div class="row">
                                <div class="col-12 col-md-6 pb-3">
                                    <label class="text-subject mb-2" for="name">ชื่อ<span class="color-red">*</span></label>
                                    <input type="text" class="form-control form-input-custom" aria-describedby="name" placeholder="ชื่อผู้รับสินค้า">
                                </div>
                                <div class="col-12 col-md-6 pb-3">
                                    <label class="text-subject mb-2" for="lastname">นามสกุล<span class="color-red">*</span></label>
                                    <input type="text" class="form-control form-input-custom" aria-describedby="lastname" placeholder="ชื่อผู้รับสินค้า">
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="text-subject mb-2" for="tel">หมายเลขโทรศัพท์<span class="color-red">*</span></label>
                                    <div class="form-control form-input-custom form-group-tel">
                                        <div class="dropdown">
                                            <div class="form-country" type="button" data-bs-toggle="dropdown">
                                                <img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai" srcset="">
                                                <IconArrowDown style="fill: black;"></IconArrowDown>
                                            </div>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><span class="dropdown-item item-country"><img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai" srcset="">Thai</span></li>
                                                <li><span class="dropdown-item item-country"><img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai" srcset="">Thai</span></li>
                                                <li><span class="dropdown-item item-country"><img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai" srcset="">Thai</span></li>
                                                <li><span class="dropdown-item item-country"><img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai" srcset="">Thai</span></li>
                                            </ul>
                                        </div>
                                        <input type="text" class="form-control-tel" aria-describedby="tel" placeholder="หมายเลขโทรศัพท์">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="text-subject mb-2" for="email">อีเมล<span class="color-red">*</span></label>
                                    <input type="text" class="form-control form-input-custom" aria-describedby="email" placeholder="อีเมล">
                                </div>
                            </div>
                        </div> -->
                        <div class="mb-4 item-checkout">
                            <h4 class="text-section mb-3">ใบกำกับภาษี<span class="color-red">*</span></h4>
                            <div class="form-control-payment">
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="no_tax">
                                        <input @click="selectTax('no_tax')" class="form-check-input" type="radio" name="taxcard" id="no_tax" value="no_tax" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconScan class="icon-receive"></IconScan>ไม่รับใบกำกับภาษี
                                        </span>
                                    </label>

                                </div>
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="paper_tax">
                                        <input @click="selectTax('paper_tax')" class="form-check-input" type="radio" name="taxcard" id="paper_tax" value="paper_tax" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconCreditcard class="icon-receive"></IconCreditcard>แบบกระดาษ
                                        </span>
                                    </label>
                                    <div id="frm_paper" class="form-content-card-selected frm-tax-content">
                                        <div class="frm-etax-content">
                                            <span class="d-flex align-items-center gap-2 font-20 color-gray"><IconInfo style="width: 16px;height: 16px;"></IconInfo>เงื่อนไข:</span>
                                            <p class="mb-2 font-20 color-gray">*กรณีการสั่งซื้อสินค้าที่จัดส่งภายใน 2 - 3 วันเอกสารใบกำกัับภาษีจะออกจากคลังสินค้าภูมิภาค</p>
                                            <!-- <div class="w-100 d-flex align-items-start gap-2">
                                                <input id="use_address_delivery" class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                                                <label for="use_address_delivery" class="font-20">ใช้ที่อยู่เดียวกันกับที่อยู่ในการรับสินค้า</label>
                                            </div> -->
                                            <h5 class="text-subject mt-3 mb-2">เลือกที่อยู่ในการออกใบกำกับภาษี:</h5>
                                            <div v-if="address_papertax" class="form-mail-etax">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="text-person-tax mb-1">{{ address_papertax?.taxpayer_type }}</div>
                                                    <button class="btn-edit-form" data-bs-toggle="modal" data-bs-target="#AddressPaperTaxModal">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                                </div>
                                                <div class="px-3">
                                                    <div class="group-item-nametel">
                                                        <h5 class="m-0 font-bold-21">{{ address_papertax?.tax_name }}</h5>
                                                        <span class="color-graydark font-21">{{ address_papertax?.tel }}</span>
                                                    </div>
                                                    <p class="m-0 font-18 color-gray">{{ address_papertax?.addressfull }}</p>
                                                </div>
                                            </div>
                                            <div v-else>
                                               <button class="btn-addnew-address" data-bs-toggle="modal" data-bs-target="#AddressPaperTaxModal" @click="clearFormAddress">เลือกที่อยู่ในการออกใบกำกับภาษี</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="e_tax">
                                        <input @click="selectTax('etax')" class="form-check-input" type="radio" name="taxcard" id="e_tax" value="etax" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconCheckCalendar class="icon-receive"></IconCheckCalendar>แบบ E-Tax
                                        </span>
                                    </label>
                                    <div id="frm_etax" class="form-content-card-selected frm-tax-content">
                                        <!-- <div class="form-etax-card">
                                            <p class="mb-1 font-20">อีเมลใช้รับใบกำกับภาษีแบบ E-Tax:</p>
                                            <p class="m-0 ps-4 font-bold-24">i_love_advice@advice.com</p>
                                            <p class="m-0 ps-4 font-18 color-gray">*กรณีการสั่งซื้อสินค้าที่จัดส่งภายใน 2 - 3 วันเอกสารใบกำกัับภาษี
                                                จะออกจากคลังสินค้าภูมิภาค</p>
                                        </div> -->
                                        <div class="frm-etax-content">
                                            <span class="d-flex align-items-center gap-2 font-20 color-gray"><IconInfo style="width: 16px;height: 16px;"></IconInfo>เงื่อนไข:</span>
                                            <p class="mb-3 font-20 color-gray">*กรณีการสั่งซื้อสินค้าที่จัดส่งภายใน 2 - 3 วันเอกสารใบกำกัับภาษีจะออกจากคลังสินค้าภูมิภาค</p>
                                            <p class="font-20 mb-1">ตรวจสอบอีเมลเพื่อรับใบกำกับภาษีแบบ E-Tax</p>
                                            <div class="d-flex align-items-center gap-2 mt-2 mb-4">
                                                <input v-model="emailEtax" type="text" class="form-control font-20 input-login" id="mail_etax" placeholder="ระบุอีเมล เช่น i_love_advice@advice.com">
                                                <button class="btn-confirm-email" :disabled="isEmailInvalid">ยืนยันอีเมล</button>
                                            </div>
                                            <h5 class="text-subject mt-3 mb-2">เลือกที่อยู่ในการออกใบกำกับภาษี:</h5>
                                            <div v-if="address_papertax" class="form-mail-etax">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="text-person-tax mb-1">{{ address_papertax?.taxpayer_type }}</div>
                                                    <button class="btn-edit-form" data-bs-toggle="modal" data-bs-target="#AddressPaperTaxModal">แก้ไข<i class="fa-solid fa-angle-right" style="font-size: 12px;"></i></button>
                                                </div>
                                                <div class="px-3">
                                                    <div class="group-item-nametel">
                                                        <h5 class="m-0 font-bold-21">{{ address_papertax?.tax_name }}</h5>
                                                        <span class="color-graydark font-21">{{ address_papertax?.tel }}</span>
                                                    </div>
                                                    <p class="m-0 font-18 color-gray">{{ address_papertax?.addressfull }}</p>
                                                </div>
                                            </div>
                                            <div v-else>
                                               <button class="btn-addnew-address" data-bs-toggle="modal" data-bs-target="#AddressPaperTaxModal" @click="clearFormAddress">เลือกที่อยู่ในการออกใบกำกับภาษี</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 item-checkout">
                            <h4 class="text-section mb-3">ช่องทางการชำระเงิน<span class="color-red">*</span></h4>
                            <div class="form-control-payment">
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="paymentQR">
                                        <input @click="paymentSelect('qrcode')" class="form-check-input" type="radio" name="payment" id="paymentQR" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconScan class="icon-receive"></IconScan>QR-Code สแกนชำระเงิน
                                        </span>
                                    </label>
                                    <div id="frm_qrcode" class="form-content-card-selected frm-payment-content">
                                        <div id="content_qrcode" class="frm-etax-content">
                                            <span class="d-flex align-items-center gap-2 font-20 color-gray"><IconInfo style="width: 16px;height: 16px;"></IconInfo>เงื่อนไขการชำระเงิน:</span>
                                            <p class="m-0 font-20 color-gray">ลูกค้าสามารถใช้ Mobile Banking ของธนาคารที่ได้รับอนุญาตการชำระเงินด้วย
                                                QR Code ลูกค้ากรุณาทำรายการภายในเวลา10 นาที การชำระเงินไม่มีค่าธรรมเนียม
                                                และ ไม่ต้องแจ้งโอนเงิน</p>
                                            <span class="d-flex align-items-center gap-2 font-20 color-gray"><IconInfo style="width: 16px;height: 16px;"></IconInfo>วิธีการชำระเงิน:</span>
                                           <ul class="p-0">
                                                <li class="font-20 color-gray">1. หลังจากลูกค้ากดยืนยันคำสั่งซื้อ ระบบจะแสดง QR Code สำหรับชำระเงิน</li>
                                                <li class="font-20 color-gray">2. ใช้ Mobile Banking ของธนาคารใดก็ได้ Scan QR Code เพื่อชำระเงิน (กรณีซื้อผ่านมือถือให้ Capture QR Code เพื่อใช้ในการชำระผ่าน Mobile Banking)</li>
                                                <li class="font-20 color-gray">** ระบบจะเห็นการชำระเงินของคุณลูกค้าอัตโนมัติ โดยลูกค้าไม่ต้องแจ้งชำระเงิน **</li>
                                           </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="paymentCredit">
                                        <input @click="paymentSelect('credit')" class="form-check-input" type="radio" name="payment" id="paymentCredit" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconCreditcard class="icon-receive"></IconCreditcard>บัตรเครดิต/ บัตรเดบิต
                                        </span>
                                    </label>
                                    <div id="frm_credit" class="form-content-card-selected frm-payment-content">
                                        <div class="frm-etax-content">
                                            <span class="d-flex align-items-center gap-2 font-20 color-gray"><IconInfo style="width: 16px;height: 16px;"></IconInfo>เงื่อนไขการชำระเงิน:</span>
                                            <p class="mb-2 font-20 color-gray">ชำระเงินด้วยบัตรที่ออกโดยธนาคารในประเทศไทยเท่านั้น</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M30 23.3333C30 24.806 28.806 26 27.3333 26H4.66667C3.194 26 2 24.806 2 23.3333V8.66667C2 7.194 3.194 6 4.66667 6H27.3333C28.806 6 30 7.194 30 8.66667V23.3333Z" fill="#1565C0"/>
                                                <path d="M10.1285 12.6647L8.37788 17.8861C8.37788 17.8861 7.93321 15.6774 7.88921 15.4001C6.89254 13.1261 5.42188 13.2527 5.42188 13.2527L7.15521 19.9981V19.9967H9.26254L12.1765 12.6647H10.1285ZM11.7972 19.9981H13.7112L14.8685 12.6647H12.9305L11.7972 19.9981ZM25.3432 12.6647H23.3292L20.1892 19.9981H22.0905L22.4825 18.9507H24.8799L25.0839 19.9981H26.8259L25.3432 12.6647ZM23.0132 17.5501L24.0552 14.7787L24.6005 17.5501H23.0132ZM17.5839 14.8021C17.5839 14.3981 17.9159 14.0974 18.8679 14.0974C19.4865 14.0974 20.1952 14.5467 20.1952 14.5467L20.5059 13.0074C20.5059 13.0074 19.6005 12.6641 18.7119 12.6641C16.6992 12.6641 15.6612 13.6267 15.6612 14.8454C15.6612 17.0494 18.3139 16.7474 18.3139 17.8794C18.3139 18.0734 18.1599 18.5221 17.0552 18.5221C15.9472 18.5221 15.2159 18.1161 15.2159 18.1161L14.8859 19.5934C14.8859 19.5934 15.5945 19.9974 16.9639 19.9974C18.3365 19.9974 20.2405 18.9707 20.2405 17.4961C20.2405 15.7221 17.5839 15.5941 17.5839 14.8021Z" fill="white"/>
                                                <path d="M8.13704 16.6326L7.49304 13.4673C7.49304 13.4673 7.20171 12.7812 6.44438 12.7812C5.68704 12.7812 3.48438 12.7812 3.48438 12.7812C3.48438 12.7812 7.25837 13.8959 8.13704 16.6326Z" fill="#FFC107"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="none">
                                                <path d="M27.2396 7.60938H17.9062V24.3816H27.2396V7.60938Z" fill="#FF5F00"/>
                                                <path d="M18.4968 15.9948C18.4953 14.3795 18.8614 12.785 19.5672 11.3321C20.273 9.87921 21.3002 8.60593 22.5708 7.60866C20.9973 6.37181 19.1075 5.60264 17.1175 5.38905C15.1274 5.17545 13.1175 5.52606 11.3173 6.4008C9.51709 7.27554 7.99932 8.63912 6.93746 10.3357C5.8756 12.0322 5.3125 13.9933 5.3125 15.9948C5.3125 17.9962 5.8756 19.9573 6.93746 21.6539C7.99932 23.3504 9.51709 24.714 11.3173 25.5887C13.1175 26.4635 15.1274 26.8141 17.1175 26.6005C19.1075 26.3869 20.9973 25.6177 22.5708 24.3809C21.3002 23.3836 20.273 22.1103 19.5672 20.6574C18.8614 19.2045 18.4953 17.6101 18.4968 15.9948Z" fill="#EB001B"/>
                                                <path d="M39.8281 15.9948C39.8282 17.9962 39.2652 19.9573 38.2034 21.6538C37.1415 23.3504 35.6238 24.714 33.8237 25.5887C32.0235 26.4635 30.0136 26.8141 28.0236 26.6005C26.0336 26.3869 24.1438 25.6177 22.5703 24.3809C23.8399 23.3826 24.8662 22.1091 25.5719 20.6564C26.2776 19.2038 26.6443 17.6098 26.6443 15.9948C26.6443 14.3797 26.2776 12.7858 25.5719 11.3331C24.8662 9.88042 23.8399 8.60693 22.5703 7.60866C24.1438 6.37181 26.0336 5.60263 28.0236 5.38904C30.0136 5.17545 32.0235 5.52607 33.8237 6.40082C35.6238 7.27557 37.1415 8.63915 38.2034 10.3357C39.2652 12.0323 39.8282 13.9933 39.8281 15.9948Z" fill="#F79E1B"/>
                                                <path d="M38.8079 22.6015V22.2581H38.9464V22.1882H38.5938V22.2581H38.7323V22.6015H38.8079ZM39.4925 22.6015V22.1875H39.3844L39.2601 22.4723L39.1357 22.1875H39.0276V22.6015H39.1039V22.2892L39.2205 22.5585H39.2996L39.4162 22.2885V22.6015H39.4925Z" fill="#F79E1B"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>  
                                <div class="form-checkbox-selete">
                                    <label class="form-check frm-card-select" for="paymentInstallment">
                                        <input @click="paymentSelect('installment')" class="form-check-input" type="radio" name="payment" id="paymentInstallment" style="margin-bottom: 3px;margin-left: unset;">
                                        <span class="item-text-receiving">
                                            <IconCheckCalendar class="icon-receive"></IconCheckCalendar>ผ่อนชำระด้วยบัตรเดรดิต
                                        </span>
                                    </label>
                                    <div id="frm_installment" class="form-content-card-selected frm-payment-content">
                                        <div class="frm-etax-content">
                                            <span class="d-flex align-items-center gap-2 font-24 color-gray mb-2">ธนาคารที่ต้องการผ่อนชำระ:</span>
                                            <div class="dropdown" style="margin-bottom: 2rem;">
                                                <div class="form-payment-installment" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <div v-if="dataIntallment.length > 0" class="group-item-language">
                                                        <img width="34px" height="auto" :src="dataIntallment[0].icon_bank" alt="icon-bank">
                                                        <span class="text-language font-24 color-black">{{ dataIntallment[0].bank }}</span>
                                                    </div>
                                                    <div v-else class="group-item-language">
                                                        <span class="text-language font-24 color-black ps-2">เลือกธนาคาร</span>
                                                    </div>
                                                    <IconArrowRight class="icon-arrow-installment"></IconArrowRight>
                                                </div>
                                                <ul class="dropdown-menu dropdown-language form-payment-installment-select bg-white py-1" aria-labelledby="dropdownMenuButton1">
                                                    <li @click="selectInstallment('ktc')" class="list-installment px-4 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img width="28px" height="auto" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                        <span class="text-language color-black">ธนาคารกรุงไทย (KTC)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="frm_detail_installment" class="form-detail-installment">
                                                <div class="installment-zero mb-3">
                                                    <span class="d-flex align-items-center gap-2 font-24 color-gray mb-2">ผ่อนชำระ 0% :</span>
                                                    <ul class="p-0 d-flex flex-column" style="gap: 10px;">
                                                        <li>
                                                            <label :for="`installment_zero_`" class="group-item-installment">
                                                                <div class="d-flex align-items-center gap-2 gap-sm-3">
                                                                    <input :id="`installment_zero_`" class="form-check-input m-0" type="radio" name="installment">
                                                                    <img class="logo-installment-inset" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                                    <div class="px-1 px-sm-3 d-flex align-items-center gap-2 gap-sm-3">
                                                                        <span class="text-number-percen">0%</span>
                                                                        <span class="font-24">฿{{ FormatPriceDicemal('3500') }}</span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-month-installment">6 เดือน</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label :for="`installment_zero_`" class="group-item-installment">
                                                                <div class="d-flex align-items-center gap-2 gap-sm-3">
                                                                    <input :id="`installment_zero_`" class="form-check-input m-0" type="radio" name="installment">
                                                                    <img class="logo-installment-inset" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                                    <div class="px-1 px-sm-3 d-flex align-items-center gap-2 gap-sm-3">
                                                                        <span class="text-number-percen">0%</span>
                                                                        <span class="font-24">฿{{ FormatPriceDicemal('2450') }}</span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-month-installment">10 เดือน</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="installment-interest">
                                                    <span class="d-flex align-items-center gap-2 font-24 color-gray mb-2">ผ่อนชำระแบบมีดอกเบี้ย :</span>
                                                    <ul class="p-0 d-flex flex-column" style="gap: 10px;">
                                                        <li>
                                                            <label :for="`installment_interest_`" class="group-item-installment">
                                                                <div class="d-flex align-items-center gap-2 gap-sm-3">
                                                                    <input :id="`installment_interest_`" class="form-check-input m-0" type="radio" name="installment">
                                                                    <img class="logo-installment-inset" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                                    <div class="px-1 px-sm-3 d-flex align-items-center gap-2 gap-sm-3">
                                                                        <span class="text-number-percen">0.5%</span>
                                                                        <span class="font-24">฿{{ FormatPriceDicemal('2450') }}</span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-month-installment">6 เดือน</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label :for="`installment_interest_`" class="group-item-installment">
                                                                <div class="d-flex align-items-center gap-2 gap-sm-3">
                                                                    <input :id="`installment_interest_`" class="form-check-input m-0" type="radio" name="installment">
                                                                    <img class="logo-installment-inset" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                                    <div class="px-1 px-sm-3 d-flex align-items-center gap-2 gap-sm-3">
                                                                        <span class="text-number-percen">0.4%</span>
                                                                        <span class="font-24">฿{{ FormatPriceDicemal('1450') }}</span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-month-installment">10 เดือน</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label :for="`installment_interest_`" class="group-item-installment">
                                                                <div class="d-flex align-items-center gap-2 gap-sm-3">
                                                                    <input :id="`installment_interest_`" class="form-check-input m-0" type="radio" name="installment">
                                                                    <img class="logo-installment-inset" src="/images/example/KTC-Logo.png" alt="icon-bank">
                                                                    <div class="px-1 px-sm-3 d-flex align-items-center gap-2 gap-sm-3">
                                                                        <span class="text-number-percen">0.3%</span>
                                                                        <span class="font-24">฿{{ FormatPriceDicemal('1200') }}</span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-month-installment">12 เดือน</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 p-4 ps-5">
                        <div class="form-payment-checkout">
                            <h4 class="text-section mb-3">รายการสินค้า</h4>
                            <ul class="form-order-product p-0 pb-2 mb-4 pe-3">
                                <li v-for="itemProduct in arrProduct" class="list-item-product">
                                    <div class="d-flex align-items-center gap-2 gap-sm-3">
                                        <div class="form-img-product">
                                            <img v-if="itemProduct.product_img" class="img-product-cart" :src="itemProduct.product_img" alt="product-img">
                                        </div>
                                        <span class="font-22">{{ itemProduct.product_name }}</span>
                                    </div>
                                    <div>
                                        <p class="font-bold-22 m-0 text-end">฿{{ FormatPrice(itemProduct.sale_price) }}</p>
                                        <p class="font-bold-22 m-0 text-end">x{{ itemProduct.qty }}</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center gap-2">
                                <IconCoupon></IconCoupon>
                                <h3 class="m-0 mt-1">โค้ดส่วนลด</h3>
                            </div>
                            <div class="d-flex align-items-center gap-2 mt-2 mb-3">
                                <input type="text" class="form-control font-20 input-login" id="coupon" placeholder="กรอกโค้ดส่วนลด">
                                <button class="btn-coupon">ใช้โค้ด</button>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <IconReceipt></IconReceipt>
                                <h3 class="m-0 mt-1">สรุปคำสั่งซื้อ</h3>
                            </div>
                            <ul class="p-0 mb-4 pb-3">
                                <li class="list-bill my-2">
                                    <span class="font-bold-22">คำสั่งซื้อสินค้าทั้งหมด (2 ชิ้น)</span>
                                    <span class="font-bold-22">฿102,000.00</span>
                                </li>
                                <li class="list-bill my-2">
                                    <span class="font-bold-22">ค่าจัดส่ง</span>
                                    <span class="font-bold-22">฿200.00</span>
                                </li>
                                <li class="list-bill my-2">
                                    <span class="font-bold-22">โค้ดส่วนลด</span>
                                    <span class="font-bold-22 color-red">-฿500.00</span>
                                </li>
                                <hr>
                                <li class="list-bill">
                                    <span class="font-bold-26 color-bluedark">ยอดรวมสุทธิทั้งหมด:</span>
                                    <span class="font-bold-26 color-bluedark">฿102,000.00</span>
                                </li>
                                <li class="font-18 color-gray">(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</li>
                            </ul>
                            <div class="w-100 d-flex justify-content-center align-items-start gap-2 px-0 px-sm-5">
                                <input id="confirmPayment" class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                                <label for="confirmPayment" class="font-18">ฉันยอมรับ และยินยอมให้ข้อมูลส่วนบุคคลเพื่อรับการให้บริการจากบริษัท ฉันได้อ่านและทำความเข้าใจ เกี่ยวกับ 
                                    <a class="link-none-underlines" href="#">ข้อกำหนดเงื่อนไข</a> และ <a class="link-none-underlines" href="#">นโยบายข้อมูลส่วนบุคคล</a> ของแอดไวซ์แล้ว</label>
                            </div>
                            <div class="pt-4 group-item-btnpayment">
                                <!-- <button class="btn-adjust"><IconDocument></IconDocument>ขอใบเสนอราคา</button> -->
                                <button class="btn-pay">ชำระเงิน</button>
                            </div>              
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style lang="css" scoped>
    .form-payment-checkout {
        position: sticky;
        top: 2%;
        transition: 0.3s;
    }

    .form-checkbox-selete {
        border: 1px solid #DBDDE3;
        border-radius: 8px;
    }
    .form-checkbox-selete:hover {
        border: 1px solid #007AFF;
    }
    .form-checkbox-selete:has(input[type="radio"]:checked) {
        border: 1px solid #007AFF;
    }
    input[type="radio"]:checked + span > svg {
        fill: #007AFF;
    }
    input[type="radio"]:checked + span {
        color: #007AFF;
    }
    /* icon-receive */
    input[type="radio"]:checked + span > svg.icon-box-receive {
        fill: none;
        filter: invert(68%) sepia(81%) saturate(1345%) hue-rotate(201deg) brightness(93%) contrast(119%);
    }

    .frm-card-select {
        display: flex;
        align-items: center;
        gap: 18px;
        width: 100%;
        padding: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
    }

    .text-section {
        font-size: clamp(22px, 2vw, 26px);
        line-height: normal;
        font-weight: 500;
    }

    .text-subject {
        font-size: clamp(18px, 2vw, 22px);
        line-height: normal;
        font-weight: 500;
    }

    .item-text-receiving {
        font-size: clamp(20px, 2vw, 26px);
        line-height: normal;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .item-text-receiving.active {
        color: #007AFF;
    }
    
    .frm-item-receiveing {
        display: flex;
        align-items: center;
        gap: 18px;
        width: 100%;
        padding: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid #DBDDE3;
        border-radius: 8px;
    }
    .frm-item-receiveing:hover {
        border: 1px solid #007AFF;
    }
    .frm-item-receiveing:has(input[type="radio"]:checked) {
        border: 1px solid #007AFF;
    }

    .frm-item-address {
        display: flex;
        align-items: start;
        gap: 18px;
        width: 100%;
        border: 1px solid #DBDDE3;
        border-radius: 8px;
        padding: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        margin-bottom: 8px;
        position: relative;
    }
    .frm-item-address:hover {
        border: 1px solid #007AFF;
    }
    .frm-item-address.active {
        border: 1px solid #007AFF;  
    }

    .icon-dots-address {
        position: absolute;
        right: 12px;
        top: 10px;
    }
    .icon-dots-address:hover {
        opacity: 0.8;
    }
    
    .icon-receive {
        width: 24px;
        height: 24px;
    }

    .icon-receive.active {
        filter: sepia(500%) hue-rotate(195deg) saturate(800%);
    }

    .form-list-item > .item-checkout:nth-last-child(n+2)::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 2.2rem;
    }

    .form-country {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .item-country {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
    }

    .form-control-tel {
        border: none;
        outline: none;
    }

    .form-group-tel {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .form-input-custom {
        height: 44px;
        font-size: clamp(18px, 3vw, 20px);
    }

    input[type=radio] {
        width: 18px;
        height: 18px;
    }

    .form-payment {
        display: flex;
        align-items: center;
        padding: 1.4rem;
    }

    .form-control-payment > div.form-checkbox-selete:nth-last-child(n+2) {
        margin-bottom: 10px;
    }

    .list-bill {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li.list-item-product:nth-last-child(n+2) {
        margin-bottom: 12px;
    }

    .img-product-cart {
        max-width: fit-content;
        max-height: 100px;
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .item-img-branch {
        max-width: fit-content;
        max-height: 220px;
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .text-data-branch {
        color: #6B7280;
        font-size: clamp(12px, 2vw, 18px);
        font-weight: 400;
        line-height: clamp(14px, 3vw, 26px);
    }

    .col-item-title {
        width: 70px;
    }

    .col-item-text {
        width: calc(100% - 70px);
    }

    .icon-btn-edit {
        width: 10px;
        height: 10px;
    }

    .btn-addnew-address {
        border: 1px dashed #ccc;
        border-radius: 8px;
        padding: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        color: #9CA3AF;
        background: none;
        width: 100%;
        transition: .1s;
    }

    .text-form-address {
        font-size: 18px;
        font-weight: 500;
    }

    .form-preview-address {
        border: 1px solid #D1D5DB;
        border-radius: 8px;
        height: 80px;
    }

    .form-order-product {
        max-height: 400px;
        overflow-y: auto;
    }

    /* width */
    .form-order-product::-webkit-scrollbar {
    width: 10px;
    display: block;
    }

    /* Track */
    .form-order-product::-webkit-scrollbar-track {
    background: #f4f4f4; 
    border-radius: 10px;
    }
    
    /* Handle */
    .form-order-product::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
    }

    /* Handle on hover */
    .form-order-product::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }

    .form-content-card-selected {
        height: 0;
        overflow: hidden;
        transition: 0.3s;
    }

    .form-etax-card {
        background-color: #f8f8f8;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 0 2rem 1.4rem 56px;
    }
   
    .frm-etax-content {
        margin: 0 2rem 1.4rem 56px;
    }

    .form-detail-installment {
        height: 0;
        overflow: hidden;
    }

    .form-payment-installment {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid #D1D5DB;
        max-width: 550px;
        cursor: pointer;
    }

    .form-payment-installment .icon-arrow-installment {
        transition: 0.3s;
        transform: rotate(0deg);
   }
   .form-payment-installment.show .icon-arrow-installment {
        transition: 0.3s;
        transform: rotate(90deg);
   }

    .form-payment-installment-select {
        max-width: 550px;
    }

    .list-installment {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;
        padding: 4px 12px;
        width: 100%;
        cursor: pointer;
    }
    .list-installment:hover {
        background-color: #007AFF;
    }
    .list-installment:hover span {
        color: #fff;
    }
    
    .text-Default {
        background: #F4F4F4;
        color: #3F3F3F;
        border-radius: 22px;
        width: fit-content;
        padding: 2px 12px;
        font-size: 16px;
    }

    .text-person-tax {
        background: #E7F4FB;
        color: #0A84FF;
        border-radius: 22px;
        width: fit-content;
        padding: 2px 12px;
        font-size: 16px;
    }

    .form-item-taxpayer {
        overflow: hidden;
        height: 0;
        transition: 0.3s;
    }

    .group-item-nametel {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    /* responsive mobile  */
    @media only screen and (max-width: 500px) {
        .group-item-nametel {
            display: inline;
        }

    
    }
</style>
