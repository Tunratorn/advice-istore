<script lang="ts" setup>
    const route = useRoute()
    const page = ref(route.params.page)
    const userLogin = useCookie('user-token')
</script>

<template>
    <NuxtLayout name="istore">
        <div class="container-fluid py-5 mb-5">
            <div class="form-control-profile">
                <div class="pe-4" style="width: 350px;">
                    <ul class="form-menu-profile">
                        <li class="item-menu-profile form-profile-name">
                            <div class="form-img-profile">
                                <img width="100%" height="100%" src="/images/wraith2profile.png" alt="img-icon-login">
                            </div>
                            Hi!, Dev Tunratorn
                        </li>
                        <li class="item-menu-profile">
                            <h2 class="text-header-menu">การสั่งซื้อของฉัน</h2>
                            <div class="menu-control">
                                <NuxtLink class="link-menu-profile" to="/profile/order" :class="{'active': page == 'order'}">
                                    <IconOrderList class="icon-menu" :class="{'active': page == 'order'}"></IconOrderList>
                                    รายการสั่งซื้อ
                                    <span class="item-qty-menu">99</span>
                                </NuxtLink>                                
                            </div>
                            <div class="menu-control">
                                <NuxtLink class="link-menu-profile" to="/profile/quotation" :class="{'active': page == 'quotation'}">
                                    <IconQuotation class="icon-menu" :class="{'active': page == 'quotation'}"></IconQuotation>
                                    ใบเสนอราคา
                                    <span class="item-qty-menu">99</span>
                                </NuxtLink>                                
                            </div>
                        </li>
                        <li class="item-menu-profile">
                            <h2 class="text-header-menu">ตั้งค่าบัญชี</h2>
                            <div class="menu-control">
                                <NuxtLink class="link-menu-profile" to="/profile" :class="{'active': page == ''}">
                                    <IconAccount class="icon-menu" :class="{'active': page == ''}"></IconAccount> บัญชีของฉัน
                                </NuxtLink>                                
                            </div>
                            <div class="menu-control">
                                <NuxtLink class="link-menu-profile" to="/profile/shipping-address" :class="{'active': page == 'shipping-address'}">
                                    <IconAddressProduct class="icon-menu" :class="{'active': page == 'shipping-address'}"></IconAddressProduct>
                                    ที่อยู่ในการรับสินค้า
                                </NuxtLink>                                
                            </div>
                            <div class="menu-control">
                                <NuxtLink class="link-menu-profile" to="/profile/tax" :class="{'active': page == 'tax'}">
                                    <IconTaxBill class="icon-menu" :class="{'active': page == 'tax'}"></IconTaxBill>
                                    ที่อยู่ใบกำกับภาษี
                                </NuxtLink>                                
                            </div>
                        </li>
                        <li class="item-menu-profile py-1">
                            <div class="menu-control">
                                <NuxtLink @click="userLogin = null" class="link-menu-profile" to="/">
                                    <IconLogout class="icon-menu"></IconLogout>
                                    ออกจากระบบ
                                </NuxtLink>                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="form-content-profile">
                    <profile v-if="page == ''"></profile>
                    <ProfileAddressProduct v-if="page == 'shipping-address'"></ProfileAddressProduct>
                    <ProfileOrderList v-if="page == 'order'"></ProfileOrderList>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
    .form-control-profile {
        display: grid;
        grid-template-columns: 350px calc(100% - 350px);
    }

    .form-content-profile {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .form-menu-profile {
        padding: 0;
    }
    .form-menu-profile > li {
        margin-bottom: 10px;
    }

    .item-menu-profile {
        border-radius: 8px;
        background: #fff;
        padding: .9rem 1.5rem;
    }

    .item-menu-profile > .menu-control:nth-last-child(n+2) {
        border-bottom: 1px solid #f3f3f3;
    }

    .item-menu-profile > .menu-control {
        padding: 10px 0;
    }
    
    .menu-control {
        width: 100%;
    }

    .link-menu-profile {
        width: fit-content;
        text-decoration: none;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 24px;
        font-weight: 400;
        color: #374151;
    }

    .link-menu-profile:not(.active):hover,.icon-menu:not(.active):hover {
        opacity: 0.6;
    }

    .link-menu-profile.active {
        color: #0095DA;
    }

    .icon-menu {
        width: 26px;
    }

    .icon-menu.active {
        fill: #0095DA;
    }

    .form-profile-name {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 30px;
        font-weight: 500;
    }
    
    .form-img-profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .text-header-menu {
        font-size: 26px;
        font-weight: 500;
    }

    .item-qty-menu {
        background: #F04438;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
</style>
