<script setup>

const arrLocationBranch = ref([])
const qtyBranch = ref('')
const locationMap = ref('12.6838721,101.2715246')

const getLocation = async () => {
    const respon = await $fetch('https://api2.advice.in.th/api/getLocationBranch', {
        method: 'POST',
        body: {
            "location": "mono"
        }
    })
    arrLocationBranch.value = JSON.parse(respon).data
    qtyBranch.value = arrLocationBranch.value.length
}

const selectLocation = (location) => {
    locationMap.value = location
}

onMounted(async () => {
    await getLocation()

})
</script>

<template>
    <NuxtLayout name="istore" class="bg-white">
        <section class="container-fluid">
            <h1 class="text-center mt-5">ค้นหาสาขาใกล้ฉัน</h1>
            <div class="form-btn-location my-5">
                <button class="btn-location group-item-btn active"><IconLocation class="icon-location"></IconLocation> ใช้ตำแหน่งปัจจุบันของคุณ</button>
                <button class="btn-location">ภาคกลาง</button>
                <button class="btn-location">ภาคเหนือ</button>
                <button class="btn-location">ภาคตะวันออกเฉียงเหนือ</button>
                <button class="btn-location">ภาคตะวันออก</button>
                <button class="btn-location">ภาคใต้</button>
            </div>
        </section>
        <section class="container-fluid mb-5 pb-5">
            <div class="row">
                <div class="col-6">
                    <div class="input-group form-item-search">
                        <IconSearch class="icon-search"></IconSearch>
                        <input id="search_branch" type="text" class="input-search-branch" placeholder="ค้นหาสาขา">
                    </div>
                    <div class="d-flex justify-content-between align-items-center mx-2 my-4">
                        <div class="group-item-text">
                            <div class="box-icon-location">
                                <IconLocation class="icon-location"></IconLocation>
                            </div>
                            <h3 class="m-0">ใช้ตำแหน่งปัจจุบันของคุณ</h3>
                        </div>
                        <h3 class="m-0">{{ qtyBranch }} สาขา</h3>
                    </div>
                    <hr>
                    <div class="form-control-branch mt-4">
                        <div v-for="item_location in arrLocationBranch" @click="selectLocation(item_location.map)" class="row wrapper-branch">
                            <div class="col-6">
                                <div class="form-img-branch" :style="`background-image: url(${item_location.picture})`">
                                    <!-- <img class="item-img-branch" src="~assets/img/exbranchv1.png" alt="img-branch"> -->
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="pe-4">
                                    <h3 class="m-0 line-height-24">{{ item_location.name }}</h3>
                                    <hr class="my-2">
                                    <p v-if="item_location.startdate1 != ''" class="text-data-branch line-height-20 mb-1">วันและเวลาทำการ:  {{ item_location.startdate1 }}</p>
                                    <p class="text-data-branch line-height-20 mb-1">{{ item_location.branch_address }}</p>
                                    <hr class="my-2">
                                    <div class="w-100 row align-items-center">
                                        <div v-if="item_location.branch_tel != ''" class="col-item-title line-height-20 text-data-branch">Tel:</div>
                                        <div v-if="item_location.branch_tel != ''" class="col-item-text line-height-20 text-data-branch">{{ item_location.branch_tel }}</div>
                                        <div class="col-item-title line-height-20 text-data-branch">Phone:</div>
                                        <div class="col-item-text line-height-20 text-data-branch">{{ item_location.branch_mobile }}</div>
                                        <div class="col-item-title line-height-20 text-data-branch">Email:</div>
                                        <div class="col-item-text line-height-20"><a class="font-18 color-primary" href="#" target="_blank" rel="noopener noreferrer">{{ item_location.branch_email }}</a></div>
                                        <div class="col-item-title line-height-20 text-data-branch">Website:</div>
                                        <div class="col-item-text line-height-20"><a class="font-18 color-primary" href="#" target="_blank" rel="noopener noreferrer">{{ item_location.branch_website }}</a></div>
                                        <div class="col-item-title line-height-20 text-data-branch">Facebook:</div>
                                        <div class="col-item-text line-height-20"><a class="font-18 color-primary" href="#" target="_blank" rel="noopener noreferrer">{{ item_location.fanpage }}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-control-map">
                        <iframe width="100%" height="100%" style="border:0;" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" :src="`https://www.google.com/maps?q=${locationMap}&hl=en&z=17&output=embed`"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<style lang="css" scoped>
   .form-btn-location {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
   }

   .btn-location {
        border: 1px solid #ccc;
        border-radius: 120px;
        padding: 10px 32px;
        width: auto;
        font-size: clamp(20px, 2vw, 22px);
        color: #374151;
        outline: none;
        background: none;
   }

   .btn-location.active {
        border-radius: 120px;
        background: var(--Gradient-blue, linear-gradient(90deg, #0073BB 1.79%, #0095DA 100%));
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
        color: #FFFF;
        border: none;
   }

   .btn-location.active .icon-location {
        fill: #ffff;
   }

   .icon-location {
        width: 22px;
        height: 22px;
   }

   .group-item-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
   }

    .input-search-branch {
        border: none;
        border-radius: 120px;
        font-size: 24px;
        background: none;
        outline: none;
        width: 100%;
        padding-left: 2rem;
    }   

    .input-search-branch::placeholder {
        color: #9CA3AF;
    }

    .icon-search {
        position: absolute;
        fill: #9CA3AF;
        margin-bottom: 2px;
    }

    .form-item-search {
        align-items: center;
        padding: 0.4rem 1.4rem;
        border: 1px solid #ccc;
        border-radius: 120px;
        gap: 8px;
    }

    .box-icon-location {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #F4F5F7;
        padding: 7px;
    }

    .group-item-text { 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: fit-content;
    }

    .form-control-map {
        background-color: #ccc;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        max-height: 860px;
    }

    .form-control-branch {
        display: flex;
        flex-flow: column;
        gap: 35px;
        height: 700px;
        overflow: auto;
        cursor: pointer;
    }

    .wrapper-branch {
        width: 100%;
        min-height: 250px;
    }

    .form-img-branch {
        width: 100%;
        min-height: 250px;
    }

    .form-img-branch {
        background-color: #f5f5f5;
        /* background-image: url(~/assets/img/exbranchv1.png); */
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
    }

    .col-item-title {
        width: 70px;
    }

    .col-item-text {
        width: calc(100% - 70px);
    }

    .text-data-branch {
        color: #6B7280;
        font-size: 18px;
        font-weight: 400;
    }



/* width */
.form-control-branch::-webkit-scrollbar {
  width: 10px;
  display: block;
}

/* Track */
.form-control-branch::-webkit-scrollbar-track {
  background: #f4f4f4; 
  border-radius: 10px;
}
 
/* Handle */
.form-control-branch::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px;
}

/* Handle on hover */
.form-control-branch::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>