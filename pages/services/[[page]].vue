<script lang="ts" setup>
    import { useI18n } from 'vue-i18n'
    const { t, locale } = useI18n();
    const viewport = useViewport()
    const route = useRoute()
    const page = ref(route.params.page)
   
    

    const openSubmenus = ref(new Set())

    function toggleSubmenu(event) {
        const menuItem = event.currentTarget
        const submenuId = menuItem.getAttribute('data-submenu')
        if (!submenuId) return

        addClickEffect(menuItem)

        const submenu = document.getElementById(submenuId)
        const arrow = menuItem.querySelector('.menu-content')

        // Accessibility
        menuItem.setAttribute('aria-expanded', !openSubmenus.value.has(submenuId))

        if (openSubmenus.value.has(submenuId)) {
            closeSubmenu(submenu, submenuId, arrow)
        } else {
            openSubmenus.value.add(submenuId)
            openSubmenu(submenu, submenuId, arrow)
        }
    }

    function openSubmenu(submenu, submenuId, arrow) {
        openSubmenus.value.add(submenuId)
        arrow.classList.add('rotated')
        submenu.style.maxHeight = 'none'
        const height = submenu.scrollHeight
        submenu.style.maxHeight = '0'
        submenu.offsetHeight // force reflow
        requestAnimationFrame(() => {
            submenu.style.maxHeight = height + 'px'
            submenu.classList.add('open')
        })
        setTimeout(() => {
            if (openSubmenus.value.has(submenuId)) {
                submenu.style.maxHeight = 'none'
            }
        }, 400)
    }

    function closeSubmenu(submenu, submenuId, arrow) {
        openSubmenus.value.delete(submenuId)
        arrow.classList.remove('rotated')
        const height = submenu.scrollHeight
        submenu.style.maxHeight = height + 'px'
        submenu.offsetHeight // force reflow
        requestAnimationFrame(() => {
            submenu.style.maxHeight = '0'
            submenu.classList.remove('open')
        })
        // Close nested submenus
        const nestedSubmenus = submenu.querySelectorAll('.submenu')
        nestedSubmenus.forEach(nested => {
            const nestedId = nested.id
            if (nestedId && openSubmenus.value.has(nestedId)) {
                const nestedParent = document.querySelector(`[data-submenu="${nestedId}"]`)
                if (nestedParent) {
                    const nestedArrow = nestedParent.querySelector('.menu-content')
                    closeSubmenu(nested, nestedId, nestedArrow)
                }
            }
        })
    }

    function addClickEffect(menuItem) {
        menuItem.classList.add('clicked')
        setTimeout(() => menuItem.classList.remove('clicked'), 150)
    }

    const isClassActive = (event) => {
        const link = event.currentTarget
        const activeLink = document.querySelector('.link-active')
        if (activeLink) {
            activeLink.classList.remove('link-active')
        }
        link.classList.add('link-active')
    }

    const isActive = (newPage) => {
        page.value = newPage

    }


    onMounted(async () => {
        // Auto open fast-shipping submenu if page param is 'fast-shipping'
        if (page.value === 'fast-shipping') {
            // เปิด shipping-submenu ก่อน
            const shippingMenuItem = document.querySelector('[data-submenu="shipping-submenu"]')
            const shippingSubmenu = document.getElementById('shipping-submenu')
            const shippingArrow = shippingMenuItem?.querySelector('.menu-content')
            if (shippingMenuItem && shippingSubmenu && shippingArrow) {
                openSubmenu(shippingSubmenu, 'shipping-submenu', shippingArrow)
            }
            // เปิด fast-shipping submenu
            const fastMenuItem = document.querySelector('[data-submenu="fast-shipping"]')
            const fastSubmenu = document.getElementById('fast-shipping')
            const fastArrow = fastMenuItem?.querySelector('.menu-content')
            if (fastMenuItem && fastSubmenu && fastArrow) {
                openSubmenu(fastSubmenu, 'fast-shipping', fastArrow)
            }
        } else if (page.value === 'warranty') {
            // เปิด warranty-submenu
            const warrantyMenuItem = document.querySelector('[data-submenu="warranty-submenu"]')
            const warrantySubmenu = document.getElementById('warranty-submenu')
            const warrantyArrow = warrantyMenuItem?.querySelector('.menu-content')
            if (warrantyMenuItem && warrantySubmenu && warrantyArrow) {
                openSubmenu(warrantySubmenu, 'warranty-submenu', warrantyArrow)
            }
        }
    })
</script>

<template>
    <NuxtLayout name="istore">
        <div v-if="page === '' && viewport.isLessThan('tablet-md') || viewport.isGreaterOrEquals('tablet-md')" class="bg-white">
            <nav class="container-fluid py-3">
                <ul class="form-submenu-product m-0">
                    <li class="submenu-product">
                        <NuxtLink class="link-submenu" to="/">{{ $t('back_to_home') }}</NuxtLink>
                    </li>
                    <li class="submenu-product">
                        <NuxtLink class="link-submenu" >{{ $t('support_services') }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-if="page !== '' && viewport.isLessThan('tablet-md')" class="bg-white mb-1">
            <div class="container-fluid d-flex align-items-center justify-content-between py-3">
                <NuxtLink to="/services" class="d-flex align-items-center justify-content-start link-back">
                    <IconArrowLeft class="icon-arrow-left me-2"></IconArrowLeft>
                    {{ $t('back') }}
                </NuxtLink>
            </div>
        </div>
        <div class="container-fluid bg-content-white py-3">
            <div class="row">
                <div v-if="viewport.isGreaterOrEquals('tablet-md')" class="col-3">
                    <ul class="main-menu">
                        <li class="wrapper-menu">
                            <div class="menu-item menu-lv1" @click="toggleSubmenu" data-submenu="shipping-submenu" tabindex="0">
                                <div class="menu-content">
                                    <IconShipping class="icon-service"></IconShipping>
                                    <span class="menu-text">เงื่อนไขการจัดส่งสินค้า</span>
                                </div>
                            </div>
                            <ul class="submenu menu-lv2" id="shipping-submenu">
                                <li>
                                    <div class="menu-item" data-submenu="normal-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">การจัดส่งสินค้าแบบปกติ</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="menu-item" @click="toggleSubmenu" data-submenu="fast-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">ส่งด่วน</span>
                                        </div>
                                    </div>
                                    <ul class="submenu ps-3" id="fast-shipping">
                                        <li>
                                            <div class="menu-item" tabindex="0">
                                                <div @click="isClassActive,isActive('fast-shipping')" class="menu-content-link" :class="{ 'link-active': page === 'fast-shipping' }">
                                                    <!-- <NuxtLink to="/services/fast-shipping" class="menu-text" :class="{ 'link-active': page === 'fast-shipping' }">ส่งด่วนภายใน 3 ชั่วโมง (Fast 3)</NuxtLink> -->
                                                    <span class="menu-text">ส่งด่วนภายใน 3 ชั่วโมง (Fast 3)</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="menu-item" data-submenu="get-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">รับสินค้าเอง</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="wrapper-menu">
                            <div class="menu-item menu-lv1" @click="toggleSubmenu" data-submenu="warranty-submenu" tabindex="0">
                                <div class="menu-content">
                                    <IconWarrantys class="icon-service"></IconWarrantys>
                                    <span class="menu-text">เงื่อนไขการรับประกัน</span>
                                </div>
                            </div>
                            <ul class="submenu menu-lv2" id="warranty-submenu">
                                <li>
                                    <div class="menu-item" data-submenu="normal-warranty" tabindex="0">
                                        <div @click="isClassActive,isActive('warranty')" class="menu-content" :class="{ 'link-active': page === 'warranty' }">
                                            <!-- <NuxtLink to="/services/warranty" class="menu-text" :class="{ 'link-active': page === 'warranty' }">การรับประกัน</NuxtLink> -->
                                             <span class="menu-text">การรับประกัน</span>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
                <div v-if="viewport.isLessThan('tablet-md') && page == ''" class="col-12">
                    <ul class="main-menu m-0 p-0">
                        <li class="wrapper-menu">
                            <div class="menu-item menu-lv1" @click="toggleSubmenu" data-submenu="shipping-submenu" tabindex="0">
                                <div class="menu-content">
                                    <IconShipping class="icon-service"></IconShipping>
                                    <span class="menu-text">เงื่อนไขการจัดส่งสินค้า</span>
                                </div>
                            </div>
                            <ul class="submenu menu-lv2" id="shipping-submenu">
                                <li>
                                    <div class="menu-item" data-submenu="normal-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">การจัดส่งสินค้าแบบปกติ</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="menu-item" @click="toggleSubmenu" data-submenu="fast-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">ส่งด่วน</span>
                                        </div>
                                    </div>
                                    <ul class="submenu ps-3" id="fast-shipping">
                                        <li>
                                            <div class="menu-item" tabindex="0">
                                                <div @click="isClassActive,isActive('fast-shipping')" class="menu-content-link" :class="{ 'link-active': page === 'fast-shipping' }">
                                                    <NuxtLink to="/services/fast-shipping" class="menu-text" :class="{ 'link-active': page === 'fast-shipping' }">ส่งด่วนภายใน 3 ชั่วโมง (Fast 3)</NuxtLink>
                                                    <!-- <span class="menu-text">ส่งด่วนภายใน 3 ชั่วโมง (Fast 3)</span> -->
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="menu-item" data-submenu="get-shipping" tabindex="0">
                                        <div class="menu-content">
                                            <span class="menu-text">รับสินค้าเอง</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="wrapper-menu">
                            <div class="menu-item menu-lv1" @click="toggleSubmenu" data-submenu="warranty-submenu" tabindex="0">
                                <div class="menu-content">
                                    <IconWarrantys class="icon-service"></IconWarrantys>
                                    <span class="menu-text">เงื่อนไขการรับประกัน</span>
                                </div>
                            </div>
                            <ul class="submenu menu-lv2" id="warranty-submenu">
                                <li>
                                    <div class="menu-item" data-submenu="normal-warranty" tabindex="0">
                                        <div @click="isClassActive,isActive('warranty')" class="menu-content" :class="{ 'link-active': page === 'warranty' }">
                                            <NuxtLink to="/services/warranty" class="menu-text" :class="{ 'link-active': page === 'warranty' }">การรับประกัน</NuxtLink>
                                             <!-- <span class="menu-text">การรับประกัน</span> -->
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-9" style="min-height: 600px;">
                    <ServiceShipping v-if="page === 'fast-shipping'"></ServiceShipping>
                    <ServiceWarranty v-if="page === 'warranty'"></ServiceWarranty>
                </div>
            </div>
        </div>  
                
    </NuxtLayout>
</template>

<style lang="css" scoped>
    .icon-service {
        width: 20px;
        height: 20px;
    }

    .menu-lv1 {
        height: 70px;
    }

    .menu-lv2 {
        position: relative;
        top: -10px;
    }

    .menu-lv2 li:last-child {
        margin-bottom: 0.8rem;
    }

    .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 22px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        background-color: white;
        user-select: none;
    }

    .menu-content-link {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        position: relative;
    }

    .menu-content {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        position: relative;
    }

    .menu-content::after {
        content: '\f105';
        position: absolute;
        right: 0;
        font: var(--fa-font-solid);
        color: #000;
        font-size: 14px;
        transition: 0.3s;
    }
    
    .menu-content.rotated::after {
        transform: rotate(90deg);
    }

    /* Submenu styling with animation */
    .submenu {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s ease;
        background-color: #ffffff;
    }

    .submenu.open {
        max-height: 1000px;
    }

    /* Level 1 submenu items */
    .submenu .menu-item {
        transition: all 0.3s ease;
    }
    
    .menu-text {
        font-size: 22px;
        color: #1d1d1f;
        font-weight: 400;
        text-decoration: none;
    }

    .wrapper-menu {
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .link-active > .menu-text {
        color: #0A84FF;
    }

    .link-back {
        color: #1d1d1f;
        text-decoration: none;
        width: fit-content;
        font-size: 22px;
    }

    .bg-content-white {
        background: unset;
    }

    @media only screen and (max-width: 992px) { 
        .bg-content-white {
            background: white;
        }
    }
</style>
