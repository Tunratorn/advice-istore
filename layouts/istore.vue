<template>
    <!-- Modal Login -->
    <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="modalLoginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-login">
            <div class="modal-content form-modal-login" style="border-radius: 20px;overflow: hidden;">
                <div class="modal-body p-0">
                    <div class="w-100 position-relative">
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div class="row m-0 p-0">
                            <div class="col-12 col-md-6 p-0">
                                <div class="banner-login-wrapper"></div>
                            </div>
                            <div class="col-12 col-md-6 p-0">
                                <div class="formlogin-wrapper">
                                    <div class="form-control-login p-4 p-sm-5 p-md-5">
                                        <div class="d-flex justify-content-center w-100">
                                            <img class="logo-adviceistore-login" src="/images/logo/iStore-Advice-Black.png" alt="logo-login-istore">
                                        </div>
                                        <form id="form_login" class="form-control-input mb-4" onsubmit="return false">
                                            <div class="form-group m-0 my-3">
                                                <label for="emailLogin" class="font-bold-20 mb-1">{{ $t('email') }}</label>
                                                <div class="group-item-login">
                                                    <input type="email" class="form-control font-20 input-login" id="emailLogin" aria-describedby="emailHelp" :placeholder="$t('placeholder_email')">
                                                    <IconWarningInput></IconWarningInput>
                                                </div>
                                            </div>
                                            <div class="form-group m-0 mb-2">
                                                <label for="passwordLogin" class="font-bold-20 mb-1">{{ $t('password') }}</label>
                                                <div class="group-item-login">
                                                    <input type="password" class="form-control font-20 input-login show" id="passwordLogin" aria-describedby="password" :placeholder="$t('placeholder_password')" autocomplete="off">
                                                    <IconWarningInput class="show"></IconWarningInput>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-end w-100">
                                                <a class="link-forgot-password" href="#" target="_blank" rel="">{{ $t('forgot') }}?</a>
                                            </div>
                                            <div class="w-100 d-flex justify-content-center mt-4 px-md-4">
                                                <button @click="login(pathLogin_)" class="btn-login">{{ $t('login') }}</button>
                                            </div>
                                            <div class="my-3 w-100 d-flex justify-content-center align-items-center gap-2">
                                                <span class="font-20 color-gray">ยังไม่ได้เป็นสมาชิก?</span>
                                                <span class="link-registor" data-bs-toggle="modal" data-bs-target="#modalRegistor">สมัครสมาชิก</span>
                                            </div>
                                            <div class="form-texthr my-4">
                                                <div id="hr">
                                                    <span></span>
                                                    <div class="w-100 d-flex justify-content-center position-absolute">
                                                        <p class="text-tosocial">หรือเข้าสู่ระบบด้วย</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="group-social my-3">
                                                <IconSocialApple class="icon-social"></IconSocialApple>
                                                <IconSocialFacebook class="icon-social"></IconSocialFacebook>
                                                <IconSocialGoogle class="icon-social"></IconSocialGoogle>
                                                <IconSocialLine class="icon-social"></IconSocialLine>
                                            </div>
                                            <div class="mt-4 w-100 d-flex justify-content-center">
                                                <div class="text-footer-login">เมื่อเข้าสู่ระบบ ถือว่าคุณได้ยอมรับ 
                                                    <a class="color-bluedark link-none-underlines" href="#" target="_blank">ข้อตกลงและเงื่อนไขการใช้งาน</a> 
                                                    และรับทราบ 
                                                    <a class="color-bluedark link-none-underlines" href="#" target="_blank">นโยบายความเป็นส่วนตัว</a>
                                                        ของ Advice
                                                </div>
                                            </div>
                                        </form>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Regisor -->
    <div class="modal fade" id="modalRegistor" tabindex="-1" aria-labelledby="modalRegistorLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-login" style="max-width: 1100px;">
            <div class="modal-content form-modal-registor" style="border-radius: 20px;overflow: hidden;">
                <div class="modal-body p-0">
                    <div class="w-100 position-relative">
                        <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row m-0 p-0 form-modal-registor">
                        <div class="col-12 col-md-6 p-0">
                            <div class="banner-login-wrapper"></div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <div class="formlogin-wrapper">
                                <div class="form-control-login p-4">
                                    <div class="d-flex justify-content-center w-100">
                                        <img class="logo-adviceistore-login" src="~/assets/img/iStore-Advice-Black.png" alt="logo-login-istore">
                                    </div>
                                    <h1 class="text-center font-bold-36 w-100 mt-3">สมัครสมาชิก</h1>
                                    <form id="form_register" class="form-control-input mb-4">
                                        <div class="row m-0">
                                            <div class="col-12 col-sm-6 p-0 pe-sm-2">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="nameRegistor" class="font-bold-20 mb-1">ชื่อ<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="text" class="form-control font-20 input-login" id="nameRegistor" aria-describedby="emailHelp" placeholder="">
                                                        <IconWarningInput></IconWarningInput>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6 p-0 ps-sm-2">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="lastnameRegistor" class="font-bold-20 mb-1">นามสกุล<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="text" class="form-control font-20 input-login" id="lastnameRegistor" aria-describedby="emailHelp" placeholder="">
                                                        <IconWarningInput></IconWarningInput>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 p-0 pe-sm-2">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="telRegistor" class="font-bold-20 mb-1">เบอร์โทรศัพท์มือถือ<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="text" class="form-control font-20 input-login" id="telRegistor" aria-describedby="emailHelp" placeholder="">
                                                        <IconWarningInput></IconWarningInput>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 p-0 ps-sm-2">
                                                <div class="form-group m-0 mb-2">
                                                    <div class="d-flex align-items-center gap-2 mb-1">
                                                        <label for="birthdayRegistor" class="font-bold-20 m-0">วัน / เดือน / ปีเกิด<span class="color-red">*</span></label>
                                                        <IconInfo></IconInfo>
                                                    </div>
                                                    <div class="group-item-login">
                                                        <input type="text" class="form-control font-20 input-login" id="birthdayRegistor" aria-describedby="emailHelp" placeholder="">
                                                        <IconWarningInput></IconWarningInput>
                                                        <label class="calendar-registor" for="birthdayRegistor">
                                                            <IconCalendar></IconCalendar>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 p-0">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="emailRegistor" class="font-bold-20 mb-1">อีเมล<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="email" class="form-control font-20 input-login" id="emailRegistor" aria-describedby="emailHelp" placeholder="ตัวอย่าง love@advice.co.th">
                                                        <IconWarningInput></IconWarningInput>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 p-0">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="passwordRegistor" class="font-bold-20 mb-1">รหัสผ่าน<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="password" class="form-control font-20 input-login" id="passwordRegistor" aria-describedby="password" placeholder="Abc@123456" autocomplete="off">
                                                        <IconWarningInput></IconWarningInput>
                                                        <IconEyeShow @click="showPassword('passwordRegistor','eyepassRegistor')" class="eyepassRegistor"></IconEyeShow>
                                                        <IconEyeHide @click="showPassword('passwordRegistor','eyepassRegistor')" class="eyepassRegistor show"></IconEyeHide>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 p-0">
                                                <div class="form-group m-0 mb-2">
                                                    <label for="password2Registor" class="font-bold-20 mb-1">ยืนยันรหัสผ่าน<span class="color-red">*</span></label>
                                                    <div class="group-item-login">
                                                        <input type="password" class="form-control font-20 input-login" id="password2Registor" aria-describedby="password" placeholder="Abc@123456" autocomplete="off">
                                                        <IconWarningInput></IconWarningInput>
                                                        <IconEyeShow @click="showPassword('password2Registor','eyepass2Registor')" class="eyepass2Registor"></IconEyeShow>
                                                        <IconEyeHide @click="showPassword('password2Registor','eyepass2Registor')" class="eyepass2Registor show"></IconEyeHide>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-check mt-3">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label line-height-16 font-16" for="flexCheckDefault">
                                                ฉันยอมรับ และยินยอมให้ข้อมูลส่วนบุคคลเพื่อรับการให้บริการจากบริษัท ฉันได้อ่านและทำความเข้าใจเกี่ยวกับ 
                                                <a class="color-bluedark link-none-underlines" href="#" target="_blank">ข้อกำหนดเงื่อนไข</a> 
                                                และ 
                                                <a class="color-bluedark link-none-underlines" href="#" target="_blank">นโยบายข้อมูลส่วนบุคคล</a> 
                                                ของแอดไวซ์แล้ว
                                            </label>
                                        </div>
                                        <div class="w-100 d-flex justify-content-center mt-3 px-4">
                                            <button class="btn-login">สมัครสมาชิก</button>
                                        </div>
                                        <div class="my-3 w-100 d-flex justify-content-center align-items-center gap-2">
                                            <span class="font-20 color-gray">เป็นสมาชิกอยู่แล้ว?</span>
                                            <span class="link-registor" data-bs-toggle="modal" data-bs-target="#modalLogin">เข้าสู่ระบบ</span>
                                        </div>
                                        <div class="form-texthr my-4">
                                            <div id="hr">
                                                <span></span>
                                                <div class="w-100 d-flex justify-content-center position-absolute">
                                                    <p class="text-tosocial">หรือ สมัครสมาชิกด้วย</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group-social my-3">
                                            <IconSocialApple class="icon-social"></IconSocialApple>
                                            <IconSocialFacebook class="icon-social"></IconSocialFacebook>
                                            <IconSocialGoogle class="icon-social"></IconSocialGoogle>
                                            <IconSocialLine class="icon-social"></IconSocialLine>
                                        </div>
                                    </form>                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- header mobile  -->
    <header v-if="device_size > 0 && device_size <= 1200" class="header-mobile">
        <nav id="nav_mobile" class="navbar bg-black navbar-mobile py-0">
            <div class="group-logo-mobile">
                <div class="group-line-bottom">
                    <NuxtLink @click="unlockPage()" to="/">
                        <img class="logo-adviceistore-mobile" src="/images/logo/iStore-Advice-Logos.png" alt="logo">
                    </NuxtLink>
                    <div class="w-100 d-flex position-absolute" style="bottom: -3px">
                        <span style="display: block;width: 100%;height: 3px;background: #fff;"></span>
                    </div>
                </div>
                <span style="width: 1px;height: clamp(32px, 5vw, 44px);background: #3f3f3f;display: block;"></span>
                <img class="logo-apple-mobile" src="/images/logo/apple-header.png" alt="logo">
            </div>
            <div class="d-flex align-items-center">
                <div class="groupm-icon-menu">
                    <span style="cursor: pointer;" @click="showSearch">
                        <IconSearch class="icon-search-mobile"></IconSearch>
                    </span>
                    <span style="cursor: pointer;">
                        <NuxtLink to="/cart">
                            <div class="position-relative d-flex">
                                <IconCart class="icon-cart-mobile"></IconCart>
                                <span id="numcart" class="quantity-cart" :class="{'show anime-cart': numCart_ > 0}">{{ numCart_ }}</span>
                            </div>  
                        </NuxtLink>
                    </span>
                </div>
                <span class="ms-3 me-1 ms-sm-4 me-sm-2" style="width: 1px;height: clamp(24px, 5vw, 32px);background: #3f3f3f;display: block;"></span>
                <div v-if="userLogin" class="form-profile-mobile ms-2 ms-sm-3">
                    <!-- <img width="22px" height="22px" src="/images/icon/userlogin.png" alt="img-icon-login"> -->
                    <img class="profile-mobile" src="/images/wraith2profile.png" alt="img-icon-login">
                </div>
                <IconHamburgerMenu id="hamburger_menu_mobile" @click="openMenuMobile()"></IconHamburgerMenu>
            </div>
        </nav>
        <section id="wrapper_menu_mobile" class="wrapper-menu-mobile">
            <div ref="scrollBox" id="content_menu_mobile" class="item-content-menumobile py-4 px-5">
                <div v-if="userLogin" class="form-menu-mobile group-item-profile-mobile pb-3">
                    <div class="form-profile-mobile-menu">
                        <!-- <img width="22px" height="22px" src="/images/icon/userlogin.png" alt="img-icon-login"> -->
                        <img class="profile-mobile" src="/images/wraith2profile.png" alt="img-icon-login">
                    </div>
                    <p class="text-menu-mobile m-0">devtun@advice.co.th</p>
                </div>
                <div class="form-menu-mobile">
                    <ul class="ul-menu-mobile p-0">
                        <li v-for="(itemMenu,key) in menuGroup">
                            <NuxtLink @click="unlockPage()" class="link-proudct-mobile" :to="`/product/${key.toLowerCase().replaceAll(` `,`-`)}`">{{ key }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="form-menu-mobile">
                    <ul class="ul-menu-mobile p-0">
                        <li>
                            <a class="link-proudct-mobile" aria-current="page" href="#">{{ $t('promotion') }}</a>
                        </li>
                        <li>
                            <NuxtLink @click="unlockPage()" class="link-proudct-mobile" to="/wheretobuy">ค้นหาสาขาใกล้ฉัน</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="unlockPage()" class="link-proudct-mobile" to="/tradein">{{ $t('tradein') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="unlockPage()" class="nav-link nav-link-white" to="/whybuy">ทำไมต้องซื้อสินค้ากับเรา</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="form-menu-mobile pt-1 pb-3">
                    <p class="text-menu-mobile d-flex align-items-center gap-2 m-0">ตะกร้าสินค้า <span v-if="numCart_ > 0" class="num-cart-mobile">{{ numCart_ }}</span></p>
                </div>
                <div class="form-menu-mobile py-2">
                    <div @click="menuLanguageMobile()" id="language_mobile" class="text-menu-mobile menu-language">
                        <div class="d-flex align-items-center">
                            <span class="me-3">ภาษาไทย</span>
                            <img v-if="languageWeb.locale == 'th'" width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai">
                            <img v-else width="24px" height="auto" src="/images/icon/icon-eng.png" alt="icon-thai">
                        </div>
                        <IconArrowDown></IconArrowDown>
                    </div>
                    <div id="form_content_language" class="wrapper-language-mobile mb-3">
                        <div class="list-footer-language w-100" @click="selectLanguage('th'),closeMenuLanguageMobile()" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="group-item-language">
                                <img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai">
                                <span class="text-language-mobile">ไทย</span>
                            </div>
                        </div>
                        <div class="list-footer-language w-100" @click="selectLanguage('en'),closeMenuLanguageMobile()" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="group-item-language">
                                <img width="24px" height="auto" src="/images/icon/icon-eng.png" alt="icon-thai">
                                <span class="text-language-mobile">English</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-menu-mobile pb-4">
                    <div v-if="!userLogin" class="d-flex justify-content-center pt-2">
                        <button class="btn-login-mobile" data-bs-toggle="modal" data-bs-target="#modalLogin">{{ $t('login') }}</button>
                    </div>
                    <button v-else @click="userLogin = null,closeMenuMobile()" class="btn-logout-mobile"><IconLogout class="icon-logout-mobile"></IconLogout> ออกจากระบบ</button>
                </div>
            </div>
        </section>
    </header>

    <header v-else id="header-menu-main" class="header-menu-main">
        <nav class="navbar navbar-expand-lg navbar-light bg-black p-0 position-relative" style="border-bottom: 3px solid #0589de;z-index: 99;" @mouseover="outizeCloseWrapperMenuProduct">
            <div class="container-fluid nav-menu">
                <div class="navbar-item nav-logo py-2 pe-2 position-relative d-flex flex-column">
                    <NuxtLink to="/">
                        <img class="logo-adviceistore" src="/images/logo/iStore-Advice-Logos.png" alt="logo">
                    </NuxtLink>
                    <div class="w-100 d-flex position-absolute" style="bottom: -3px">
                        <span style="display: block;width: 100%;height: 3px;background: #fff;"></span>
                    </div>
                </div>
                <span class="ms-3 me-2" style="width: 1px;height: 34px;background: #515151;display: block;"></span>
                <div class="navbar-item collapse navbar-collapse justify-content-between border-after px-3">
                    <div>
                        <a><img class="logo-apple" src="/images/logo/apple-header.png" alt="logo"></a>
                    </div>
                    <div class="d-flex align-items-center">
                        <ul class="navbar-nav px-4">
                            <li class="nav-item">
                                <a class="nav-link nav-link-white active" aria-current="page" href="#">{{ $t('promotion') }}</a>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link nav-link-white" to="/wheretobuy">ค้นหาสาขาใกล้ฉัน</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link nav-link-white" to="/tradein">{{ $t('tradein') }}</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link nav-link-white" to="/whybuy">ทำไมต้องซื้อสินค้ากับเรา</NuxtLink>
                            </li>
                        </ul>
                        <div class="navbar-item item-language item-language-white">
                            <span @click="$i18n.locale = 'th',selectLanguage('th')" class="border-after-language pe-2" :class="{'active': languageWeb.locale == 'th'}">TH</span>
                            <span @click="$i18n.locale = 'en',selectLanguage('en')" class="ps-2" :class="{'active': languageWeb.locale == 'en'}">EN</span>
                        </div>
                    </div>
                </div>
                <div class="navbar-item navbar-item-icon border-after px-3">
                    <span style="cursor: pointer;" @click="showSearch">
                        <IconSearch style="fill: #fff;"></IconSearch>
                    </span>
                    <span style="cursor: pointer;">
                        <NuxtLink to="/cart">
                            <div class="position-relative d-flex">
                                <IconCart style="fill: #fff;"></IconCart>
                                <span id="numcart" class="quantity-cart" :class="{'show anime-cart': numCart_ > 0}">{{ numCart_ }}</span>
                            </div>  
                        </NuxtLink>
                    </span>
                </div>
                <div class="navbar-item ps-3">
                    <NuxtLink v-if="userLogin" to="/profile" class="btn-link-profile">
                        <div class="form-img-login-profile">
                            <img width="100%" height="100%" src="/images/wraith2profile.png" alt="img-icon-login">
                        </div>
                        <span class="mt-1 color-white font-22">Dev Tunratorn</span>
                    </NuxtLink>
                    <button v-else @click="pathLogin_ = '',clearWrapperNavbar()" class="btn-login-navbar" data-bs-toggle="modal" data-bs-target="#modalLogin">
                        <!-- <IconPeopleLogin style="fill: #fff;"></IconPeopleLogin> -->
                        <img width="22px" height="22px" src="/images/icon/userlogin.png" alt="img-icon-login">
                        <span class="mt-1 color-white">{{ $t('login') }}</span>
                    </button>            
                </div>
            </div>
        </nav>
        <!-- header white  -->
        <!-- <nav class="navbar navbar-expand-lg navbar-light p-0" @mouseover="outizeCloseWrapperMenuProduct">
            <div class="container-fluid nav-menu">
                <div class="navbar-item nav-logo py-2 pe-2 position-relative d-flex flex-column">
                    <NuxtLink to="/">
                        <img class="logo-adviceistore" src="~/assets/img/iStore-Advice-Logo.png" alt="logo">
                    </NuxtLink>
                    <div class="w-100 d-flex position-absolute bottom-0">
                        <span style="display: block;width: 30%;height: 3px;background: #D7DF23;"></span>
                        <span style="display: block;width: 70%;height: 3px;background: #0095DA;"></span>
                    </div>
                </div>
                <span class="ms-3 me-2" style="width: 1px;height: 34px;background: #ccc;display: block;"></span>
                <div class="navbar-item collapse navbar-collapse justify-content-between border-after px-3">
                    <div>
                        <a><img class="logo-apple" src="~/assets/img/istore-apple.png" alt="logo"></a>
                    </div>
                    <div class="d-flex align-items-center">
                        <ul class="navbar-nav px-4">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">โปรโมชั่น</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ค้นหาสาขาใกล้ฉัน</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">เก่าแลกใหม่</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ทำไมต้องซื้อสินค้ากับเรา</a>
                            </li>
                        </ul>
                        <div class="navbar-item item-language">
                            <span class="border-after-language pe-2 active">TH</span>
                            <span class="ps-2">EN</span>
                        </div>
                    </div>
                </div>
                <div class="navbar-item navbar-item-icon border-after px-3">
                    <span style="cursor: pointer;" @click="showSearch">
                        <IconSearch></IconSearch>
                    </span>
                    <span style="cursor: pointer;">
                        <NuxtLink to="/cart">
                            <div class="position-relative d-flex">
                                <IconCart></IconCart>
                                <span id="numcart" class="quantity-cart" :class="{'show anime-cart': numCart_ > 0}">{{ numCart_ }}</span>
                            </div>  
                        </NuxtLink>
                    </span>
                </div>
                <div class="navbar-item ps-3">
                    <button class="btn-login-navbar" data-bs-toggle="modal" data-bs-target="#modalLogin">
                        <IconPeopleLogin></IconPeopleLogin>
                        <span class="mt-1">เข้าสู่ระบบ</span>
                    </button>
                </div>
            </div>
        </nav> -->
        <nav class="nav justify-content-center bg-black position-relative" style="z-index: 99;">
            <ul id="globalmenu-list" class="nav navbar-menu-product">
                <li v-for="(itemMenu,key) in menuGroup" class="nav-item">
                    <NuxtLink v-if="itemMenu.url != ''" :to="itemMenu.url" class="nav-link item-menu-header" :class="{'active': `${key.toLowerCase().replaceAll(` `,`-`)}` == navbarMenu_}">{{ key }}</NuxtLink>
                    <NuxtLink v-else :id="`${key.toLowerCase().replaceAll(` `,`-`)}`" class="nav-link item-menu-header" :class="{'active': `${key.toLowerCase().replaceAll(` `,`-`)}` == navbarMenu_}" @mouseover="showMenuProduct(`${key}`)">{{ key }}</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="form-control-search form-search item-wrapper-event position-absolute" style="z-index: 98;" @mouseleave="outFocusWrapper">
            <div class="search-wrappre">
                <div class="form-input-search">
                    <IconSearch></IconSearch>
                    <input ref="inputSearch" v-model="textSearch" @keyup="searchData" id="search" class="input-search" type="text" :placeholder="$t('search')" autocomplete="off">
                </div>
                <hr class="m-1">

            </div>
        </div>
        <article id="formSearch" class="bg-input-search form-search item-wrapper-event top-0" style="z-index: 0;">
        </article>
        <section class="slide-menu-product form-menuproduct item-wrapper-event position-absolute" style="z-index: 98;" @mouseleave="outFocusWrapper">
            <div class="container-fluid">
                <div class="row" style="padding: 2rem 0;">
                    <div class="col-2 pe-5" style="border-right: 1px solid #E5E7EB;">
                        <h4>สินค้า</h4>
                        <ul class="m-0 p-0">
                            <li class="nav-menu-product link-all-product"><NuxtLink class="link-menu-product" :to="'/product/'+routeProduct">ดู {{product}} ทั้งหมด</NuxtLink></li>
                            <li v-for="(item,key) in listMenuProduct" class="nav-menu-product">
                                <NuxtLink v-if="item.url != ''" :to="item.url" class="link-menu-product">{{ item.menu_name }}</NuxtLink>
                                <NuxtLink v-else class="link-menu-product" :class="{'active': menuListActive == item.menu_name}" @click="showDetailProduct(product,item.menu_name)">{{ item.menu_name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="col-10 ps-5">
                        <NuxtLink class="link-all-subproduct" :to="`/${routeProduct}/${menuListActive.toLowerCase().replaceAll(` `,`-`)}`">ดู {{menuListActive}} ทั้งหมด <IconArrowRight class="icon-arrow-linkproduct"></IconArrowRight></NuxtLink>
                        <div class="form-control-intoproduct mt-3">
                            <NuxtLink v-for="(item,index) in listMenuDetailProduct" class="wrapper-series-product" :to="`/productdetails/${product.toLowerCase().replaceAll(' ','-')}/${menuListActive.toLowerCase().replaceAll(' ','-')}/${item.product_name.toLowerCase().replaceAll(' ','-')}`">
                                <div class="wrapper-img-product mb-2">
                                    <img class="img-product-menu" :src="item.product_img" alt="picture-product">
                                </div>
                                <h4 class="mb-1 line-height-24">{{item.product_name}}</h4>
                                <p class="font-22 color-graydark">ราคาเริ่มต้น ฿{{ FormatPrice(item.sale_price) }} THB</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <article id="wrapper_menuproduct" class="wrapper-menu-product form-menuproduct item-wrapper-event" style="z-index: 0;top: 0;">
        </article>
    </header>

    <main>
        <slot />
    </main>

      <!-- footer mobile  -->
    <footer v-if="device_size > 0 && device_size <= 1200" class="d-flex justify-content-center p-4 px-sm-5 bg-black" style="position: relative;z-index: 998;">
        <div class="footer-content-mobile">
            <div class="form-menu-mobile group-logo-footer-mobile pt-3 pb-4">
                <img class="logo-footer-mobile-advice" src="/images/logo/logogadvicei.png" alt="logo-footer-advice">
                <span style="width: 1px;height: clamp(60px, 15vw, 100px);background: #3f3f3f;display: block;"></span>
                <img class="logo-footer-mobile-istore" src="/images/logo/Logo-Advice-iStoreis.png" alt="logo-footer-adviceiStore">
            </div>
            <div class="row m-0 mb-4 content-menu-mobile form-menu-mobile">
                <div class="col-12 col-md-6 item-menu-mobile pb-2 p-0 pe-md-4">
                    <div class="form-menu-mobile py-3 py-sm-4">
                        <div style="width: 100%;max-width: 450px;">
                            <img class="mb-3 mb-sm-4" style="height: clamp(40px, 8vw, 64px);" src="/images/logo/img-text-advice.png" alt="text-img-adviceiStore">
                            <p class="font-text-footer mb-1 mb-sm-3">Advice iStore เป็นร้านค้าออนไลน์ของ 
                                บริษัท แอดไวซ์ ไอที อินฟินิท จำกัด (มหาชน) 
                                พบกับสินค้าและอุปกรณ์เสริมจากแบรนด์ชั้นนำ ที่เราคัดสรรมาอย่างดี</p>
                                <p class="font-text-footer m-1">พร้อมโปรโมชั่นพิเศษมากมาย
                                และข้อเสนอที่คุณห้ามพลาดเพลิดเพลินกับการช้อปปิ้ง
                                ที่ปลอดภัยและรวดเร็ว พร้อมบริการลูกค้าและการจัดส่งที่เป็นเลิศ ขอให้เราได้ดูแลคุณ</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 item-menu-mobile p-0 ps-md-5">
                    <div class="form-menu-mobile py-2 py-sm-3">
                        <div class="row">
                            <div class="col-6">
                                <h3 class="text-light">{{ $t('product') }}</h3>
                                <ul class="footer-menu">
                                    <li class="font-text-footer">แมค</li>
                                    <li class="font-text-footer">ไอโฟน</li>
                                    <li class="font-text-footer">ไอแพด</li>
                                    <li class="font-text-footer">แอปเปิ้ล วอช</li>
                                    <li class="font-text-footer">แอร์พอด</li>
                                    <li class="font-text-footer">แอร์แทค</li>
                                    <li class="font-text-footer">แอปเปิ้ล ทีวี</li>
                                    <li class="font-text-footer">โฮมพอด มินิ</li>
                                    <li class="font-text-footer">อุปกรณ์เสริม</li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <h3 class="text-light">{{ $t('help') }}</h3>
                                <ul class="footer-menu">
                                    <li class="font-text-footer">ติดต่อเรา</li>
                                    <li class="font-text-footer">ช่วยเหลือด้านเทคนิค</li>
                                    <li class="font-text-footer">การคืนสินค้าและขอคืนเงินออนไลน์</li>
                                    <li class="font-text-footer">การจัดส่งสินค้า</li>
                                    <li class="font-text-footer">ช่องทางชำระเงิน</li>
                                    <li class="font-text-footer">ค้นหาสาขาใกล้ฉัน</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-menu-mobile pb-3 pt-1 pt-sm-2 pb-sm-4">
                <h3 class="text-light mb-3">{{ $t('contact_us') }}</h3>
                <div style="width: fit-content;">
                    <ul class="form-logo-social p-0 d-flex align-content-center me-4" style="gap: clamp(18px, 8vw, 30px);">
                        <li>
                            <img class="logo-footer-social" src="/images/logo/logo-line.png" alt="logo-social-line">
                        </li>
                        <li>
                            <img class="logo-footer-social" src="/images/logo/logo-facebook.png" alt="logo-social-facebook">
                        </li>
                        <li>
                            <img class="logo-footer-social" src="/images/logo/logo-ig.png" alt="logo-social-ig">
                        </li>
                        <li>
                            <img class="logo-footer-social" src="/images/logo/logo-youtube.png" alt="logog-social-youtube">
                        </li>
                        <li>
                            <img class="logo-footer-social" src="/images/logo/logo-x.png" alt="logo-scial-x">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-menu-mobile pt-2 pb-4">
                <div class="dropdown form-dropdown-language py-sm-3">
                    <div class="form-footer-language" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="group-item-language">
                            <img width="24px" height="auto" :src="`${languageWeb.icon}`" alt="icon-language">
                            <span class="text-language">{{ languageWeb.text }}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M14.0311 6.55779C13.9614 6.48749 13.8785 6.43169 13.7871 6.39362C13.6957 6.35554 13.5977 6.33594 13.4986 6.33594C13.3996 6.33594 13.3016 6.35554 13.2102 6.39362C13.1188 6.43169 13.0359 6.48749 12.9661 6.55779L9.53114 9.99279C9.46142 10.0631 9.37847 10.1189 9.28707 10.157C9.19568 10.195 9.09765 10.2146 8.99864 10.2146C8.89963 10.2146 8.8016 10.195 8.71021 10.157C8.61881 10.1189 8.53586 10.0631 8.46614 9.99279L5.03114 6.55779C4.96142 6.48749 4.87847 6.43169 4.78707 6.39362C4.69568 6.35554 4.59765 6.33594 4.49864 6.33594C4.39963 6.33594 4.3016 6.35554 4.21021 6.39362C4.11881 6.43169 4.03586 6.48749 3.96614 6.55779C3.82645 6.69831 3.74805 6.8884 3.74805 7.08654C3.74805 7.28468 3.82645 7.47476 3.96614 7.61529L7.40864 11.0578C7.83052 11.4791 8.40239 11.7158 8.99864 11.7158C9.59489 11.7158 10.1668 11.4791 10.5886 11.0578L14.0311 7.61529C14.1708 7.47476 14.2492 7.28468 14.2492 7.08654C14.2492 6.8884 14.1708 6.69831 14.0311 6.55779Z" fill="white"/>
                        </svg>
                    </div>
                    <ul class="dropdown-menu dropdown-language bg-black" aria-labelledby="dropdownMenuButton1">
                        <li class="list-footer-language" @click="selectLanguage('th')" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="group-item-language">
                                <img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai">
                                <span class="text-language">ไทย</span>
                            </div>
                        </li>
                        <li class="list-footer-language" @click="selectLanguage('en')" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="group-item-language">
                                <img width="24px" height="auto" src="/images/icon/icon-eng.png" alt="icon-thai">
                                <span class="text-language">English</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-menu-mobile pt-2">
                <p class="font-text-footer text-center m-0">© Advice IT Infinite Public Company Limited. สงวนสิทธิ์ทุกประการ</p>
                <div class="text-subject-footer d-flex justify-content-center align-items-center" style="gap: clamp(10px, 3vw, 15px);">
                    <p class="font-text-footer m-1">ข้อกำหนดการใช้งาน</p>
                    <span style="width: 1px;height: clamp(10px, 2vw, 15px);background: #3f3f3f;display: block;"></span>
                    <p class="font-text-footer m-1">นโยบายความเป็นส่วนตัว</p>
                </div>
            </div>
        </div>
    </footer>

    <footer v-else class="footer-layout">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center mb-5" style="gap: 80px;">
                <img class="" style="max-height: 45px;" src="/images/logo/logogadvicei.png" alt="logo-footer-advice">
                <span style="width: 1px;height: clamp(60px, 15vw, 86px);background: #3f3f3f;display: block;"></span>
                <img class="" style="max-height: 52px;" src="/images/logo/Logo-Advice-iStoreis.png" alt="logo-footer-adviceiStore">
            </div>
            <hr class="hr-footer">
            <div class="row my-4">
                <div class="col-3 pe-5">
                    <div class="pe-5">
                        <img class="mb-4" style="max-height: 60px;" src="/images/logo/img-text-advice.png" alt="text-img-adviceiStore">
                        <p class="font-text-footer">Advice iStore เป็นร้านค้าออนไลน์ของ 
                        บริษัท แอดไวซ์ ไอที อินฟินิท จำกัด (มหาชน) 
                        พบกับสินค้าและอุปกรณ์เสริมจากแบรนด์ชั้นนำ ที่เราคัดสรรมาอย่างดี</p>
                        <p class="font-text-footer">พร้อมโปรโมชั่นพิเศษมากมาย
                        และข้อเสนอที่คุณห้ามพลาดเพลิดเพลินกับการช้อปปิ้ง
                        ที่ปลอดภัยและรวดเร็ว พร้อมบริการลูกค้าและการจัดส่งที่เป็นเลิศ ขอให้เราได้ดูแลคุณ</p>
                    </div>
                </div>
                <div class="col-3">
                    <h3 class="text-light">{{ $t('product') }}</h3>
                    <ul class="footer-menu">
                        <li class="font-text-footer">Mac</li>
                        <li class="font-text-footer">iPhone</li>
                        <li class="font-text-footer">iPad</li>
                        <li class="font-text-footer">Watch</li>
                        <li class="font-text-footer">AirPods</li>
                        <li class="font-text-footer">Air Tag</li>
                        <li class="font-text-footer">Apple TV 4K</li>
                        <li class="font-text-footer">HomePod mini</li>
                        <li class="font-text-footer">Accessories</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3 class="text-light">{{ $t('help') }}</h3>
                    <ul class="footer-menu">
                        <li class="font-text-footer">ติดต่อเรา</li>
                        <li class="font-text-footer">ช่วยเหลือด้านเทคนิค</li>
                        <li class="font-text-footer">การคืนสินค้าและขอคืนเงินออนไลน์</li>
                        <li class="font-text-footer">การจัดส่งสินค้า</li>
                        <li class="font-text-footer">ช่องทางชำระเงิน</li>
                        <li class="font-text-footer">ค้นหาสาขาใกล้ฉัน</li>
                    </ul>
                </div>
                <div class="col-3">
                    <h3 class="text-light mb-3">{{ $t('contact_us') }}</h3>
                    <div style="width: fit-content;">
                        <ul class="form-logo-social p-0 d-flex align-content-center me-4" style="gap: 30px;">
                            <li>
                                <img class="logo-footer-social" src="/images/logo/logo-line.png" alt="logo-social-line">
                            </li>
                            <li>
                                <img class="logo-footer-social" src="/images/logo/logo-facebook.png" alt="logo-social-facebook">
                            </li>
                            <li>
                                <img class="logo-footer-social" src="/images/logo/logo-ig.png" alt="logo-social-ig">
                            </li>
                            <li>
                                <img class="logo-footer-social" src="/images/logo/logo-youtube.png" alt="logog-social-youtube">
                            </li>
                            <li>
                                <img class="logo-footer-social" src="/images/logo/logo-x.png" alt="logo-scial-x">
                            </li>
                        </ul>
                        <hr class="hr-footer" style="margin: 2rem 0;">
                        <div class="dropdown form-dropdown-language">
                            <div class="form-footer-language" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="group-item-language">
                                    <img width="24px" height="auto" :src="`${languageWeb.icon}`" alt="icon-language">
                                    <span class="text-language">{{ languageWeb.text }}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M14.0311 6.55779C13.9614 6.48749 13.8785 6.43169 13.7871 6.39362C13.6957 6.35554 13.5977 6.33594 13.4986 6.33594C13.3996 6.33594 13.3016 6.35554 13.2102 6.39362C13.1188 6.43169 13.0359 6.48749 12.9661 6.55779L9.53114 9.99279C9.46142 10.0631 9.37847 10.1189 9.28707 10.157C9.19568 10.195 9.09765 10.2146 8.99864 10.2146C8.89963 10.2146 8.8016 10.195 8.71021 10.157C8.61881 10.1189 8.53586 10.0631 8.46614 9.99279L5.03114 6.55779C4.96142 6.48749 4.87847 6.43169 4.78707 6.39362C4.69568 6.35554 4.59765 6.33594 4.49864 6.33594C4.39963 6.33594 4.3016 6.35554 4.21021 6.39362C4.11881 6.43169 4.03586 6.48749 3.96614 6.55779C3.82645 6.69831 3.74805 6.8884 3.74805 7.08654C3.74805 7.28468 3.82645 7.47476 3.96614 7.61529L7.40864 11.0578C7.83052 11.4791 8.40239 11.7158 8.99864 11.7158C9.59489 11.7158 10.1668 11.4791 10.5886 11.0578L14.0311 7.61529C14.1708 7.47476 14.2492 7.28468 14.2492 7.08654C14.2492 6.8884 14.1708 6.69831 14.0311 6.55779Z" fill="white"/>
                                </svg>
                            </div>
                            <ul class="dropdown-menu dropdown-language bg-black" aria-labelledby="dropdownMenuButton1">
                                <li class="list-footer-language" @click="selectLanguage('th')" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="group-item-language">
                                        <img width="24px" height="auto" src="/images/icon/icon-thai.png" alt="icon-thai">
                                        <span class="text-language">ไทย</span>
                                    </div>
                                </li>
                                <li class="list-footer-language" @click="selectLanguage('en')" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="group-item-language">
                                        <img width="24px" height="auto" src="/images/icon/icon-eng.png" alt="icon-thai">
                                        <span class="text-language">English</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hr-footer">
            <div class="text-subject-footer d-flex justify-content-center align-items-center mt-4">
                <p class="font-text-footer border-footer-sub m-0 p-0 pe-3">© Advice IT Infinite Public Company Limited. All rights reserved.</p>
                <p class="font-text-footer border-footer-sub m-0 p-0 px-3">Terms of Use</p>
                <p class="font-text-footer border-footer-sub m-0 p-0 px-3">Privacy Policy</p>
                <p class="font-text-footer m-0 p-0 ps-3">Privacy Notice</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';

const device_size = ref(0)

const { t, locale } = useI18n();
const languageWeb = ref([])
const inputSearch = ref(null)
const navbarMenu_ = navbarMenu()
const textSearch = ref('')
const menuGroup = ref([])
const pathLogin_ = pathLogin()
const product = ref('')
const menuListActive = ref('')
const listMenuProduct = ref([])
const listMenuDetailProduct = ref([])
const routeProduct = ref('')
const userLogin = useCookie('user-token')
const dataCookieProduct = useCookie('data-product');
const numCart_ = numCart();

numCart_.value = dataCookieProduct.value != undefined ? dataCookieProduct.value.reduce((sum, item) => sum + item.qty, 0) : 0


const checkLangCookie = () => {
    let cookie_lang = useCookie('user-lang').value
    if (cookie_lang == undefined || cookie_lang == '') {
        selectLanguage('en')
        locale.value = 'en'
    } else {
        selectLanguage(cookie_lang)
        locale.value = cookie_lang
    }
}

const selectLanguage = (language: String) => {
    let arrLang = [{
        'locale': 'en',
        'text': 'English',
        'icon': '/images/icon/icon-eng.png',
    },{
        'locale': 'th',
        'text': 'ไทย',
        'icon': '/images/icon/icon-thai.png',
    }]

    locale.value = language
    setLangCookie(language)
    languageWeb.value = arrLang.find(i => i.locale == language)
}

const searchData = () => {
   console.log(textSearch.value);
   
}

const showSearch = () => {
    document.querySelectorAll('.item-wrapper-event:not(.form-search)').forEach((elem) => {
        if (elem.classList.contains('show')) {
            elem.classList.remove('show')            
        }
    })
    textSearch.value = ''
    document.querySelectorAll('.form-search.item-wrapper-event').forEach((elem) => {
        elem.classList.toggle('show')
    })
    setTimeout(() => {
        document.getElementById('search')?.focus()    
        
    }, 500);
}

const showMenuProduct = (menu: string) => {    
    navbarMenu_.value = menu.toLowerCase().replaceAll(` `,`-`)    

    document.querySelectorAll('.item-wrapper-event:not(.form-menuproduct)').forEach((elem) => {
        if (elem.classList.contains('show')) {
            elem.classList.remove('show')                        
        }
    })
    
    routeProduct.value = menu.toLowerCase().replaceAll(` `,`-`)
    product.value = menu        
    listMenuProduct.value = menuGroup.value[menu].menu_list
    menuListActive.value = menuGroup.value[menu].menu_list[0].menu_name
    showDetailProduct(menu,menuListActive.value)
    
    document.querySelectorAll('.form-menuproduct.item-wrapper-event').forEach((elem) => {
        elem.classList.add('show')
    })    
}

const showDetailProduct = (item: String,product: string) => {
    menuListActive.value = product
    listMenuDetailProduct.value = menuGroup.value[item].menu_list_dtl[product]
}

function checkScrollDirection(event) {
   
   if (checkScrollDirectionIsUp(event)) {
       // console.log('UP');
       document.getElementById('header-menu-main')?.classList.remove('header-down')
   } else {
    //    if (document.documentElement.scrollTop > 100) {
    // }    
    document.getElementById('header-menu-main')?.classList.add('header-down')
   }
}

function checkScrollDirectionIsUp(event) {
   if (event.wheelDelta) {
       return event.wheelDelta > 0;
   }
   return event.deltaY < 0;
}

const clearWrapperNavbar = () => {
    document.querySelectorAll('.item-wrapper-event').forEach((elem) => {
        elem.classList.remove('show')
        navbarMenu_.value = ''
    })
}

const openMenuMobile = () => {
    document.body.classList.toggle('lock-page')
    document.getElementById('wrapper_menu_mobile').classList.toggle('show')
    document.getElementById('content_menu_mobile').classList.toggle('show')
    document.getElementById('language_mobile').classList.remove('active')
    document.getElementById('form_content_language').classList.remove('show')
}

const menuLanguageMobile = () => {
    document.getElementById('language_mobile').classList.toggle('active')
    document.getElementById('form_content_language').classList.toggle('show')
}

const closeMenuMobile = () => {
    document.body.classList.remove('lock-page')
    document.getElementById('language_mobile').classList.remove('active')
    document.getElementById('form_content_language').classList.remove('show')
    document.getElementById('wrapper_menu_mobile').classList.remove('show')
    document.getElementById('content_menu_mobile').classList.remove('show')
    document.getElementById('hamburger_menu_mobile').classList.remove('active')
}

const closeMenuLanguageMobile = () => {
    document.getElementById('language_mobile').classList.remove('active')
    document.getElementById('form_content_language').classList.remove('show')
}

const unlockPage = () => [
    document.body.classList.remove('lock-page')
]

const updateWidth = async () => {
    device_size.value = window.innerWidth
    setTimeout(() => {
        let getHeight = document.getElementById('nav_mobile').offsetHeight
        document.getElementById('content_menu_mobile').style.top = `${getHeight}px`
    }, 0);
    
}


onMounted(async () => {
    await updateWidth()
    await window.addEventListener('resize', updateWidth)
    await checkLangCookie()

    const respon_menu = await $fetch('https://api2.advice.in.th/api/getMenuProduct')
    menuGroup.value = JSON.parse(respon_menu).data

    window.addEventListener('scroll', (event) => {
        document.querySelectorAll('.item-wrapper-event').forEach((elem) => {
            elem.classList.remove('show')
            navbarMenu_.value = ''
        })
    })
    
    var scrollableElement = document.body; 

    scrollableElement.addEventListener('wheel', checkScrollDirection);


    new AirDatepicker('#birthdayRegistor', {
        locale: localeEn,
        dateFormat: 'dd / MM / yyyy',
        autoClose: true,
    })

    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalRegistor')) // Returns a Bootstrap modal instance
    // Show or hide:
    // modal.show();
    
})
</script>