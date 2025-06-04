export const outFocusWrapper = () => {
    document.querySelectorAll('.item-wrapper-event').forEach((elem) => {
        elem.classList.remove('show')
    })
   
    const navbarMenu_ = navbarMenu()
    navbarMenu_.value = ''
}

export const outizeCloseWrapperMenuProduct = () => {
    document.querySelectorAll('.form-menuproduct.item-wrapper-event').forEach((elem) => {
        elem.classList.remove('show')
    })
    
    const navbarMenu_ = navbarMenu()
    navbarMenu_.value = ''
}

export const showPassword = (elem: string,elem_eye: string) => {
    let elem_password = document.getElementById(elem)
    
    if (elem_password?.getAttribute('type') == 'password') {
        elem_password?.setAttribute('type', 'text')        
    } else {
        elem_password?.setAttribute('type', 'password') 
    }

    let elem_eyepass = document.querySelectorAll('.'+elem_eye)

    elem_eyepass.forEach(element => {
        if (element.classList.contains('show')) {
            element.classList.remove('show')
        } else {
            element.classList.add('show')
        }        
    })
}

export const addCart = (code: String,qyt: number) => {
    //set cart page
    let dataCookieProduct = useCookie('data-product', { default: () => [] }); // กำหนดค่าเริ่มต้นเป็น array
    let currentCart = dataCookieProduct.value || []; // ตรวจสอบว่ามีค่าหรือไม่
    let indexProduct = dataCookieProduct.value.map(i => i.code).indexOf(code)
    if (indexProduct != -1) {
        currentCart[indexProduct].qty += qyt
    } else {
        currentCart.push({
            "code": code,
            "qty": qyt
        }); // เพิ่มสินค้าเข้าไปใน array
        dataCookieProduct.value = currentCart; // อัปเดตค่า cookie
    }

    let setNumcart = numCart();
    // setNumcart.value++  
    setNumcart.value = dataCookieProduct.value != undefined ? dataCookieProduct.value.reduce((sum, item) => sum + item.qty, 0) : 0
    let elemCart =  document.getElementById('numcart')

    if (setNumcart.value > 0) {
        elemCart?.classList.add('show')
    }

    let elemAnime = document.querySelector('#numcart.anime-cart')

    if (elemAnime != null) {
        elemCart?.classList.remove('anime-cart')
    }
  
    setTimeout(() => {
        elemCart?.classList.add('anime-cart')
    }, 0);     
}

export const removeCart = (code: String,qyt: number) => {
     //set cart page
     let dataCookieProduct = useCookie('data-product', { default: () => [] }); // กำหนดค่าเริ่มต้นเป็น array
     let currentCart = dataCookieProduct.value || []; // ตรวจสอบว่ามีค่าหรือไม่
     let indexProduct = dataCookieProduct.value.map(i => i.code).indexOf(code)
     if (indexProduct != -1) {
         currentCart[indexProduct].qty -= qyt
         if (currentCart[indexProduct].qty == 0) {
            currentCart = currentCart.filter(i => i.code != code)
         }
     } 
     dataCookieProduct.value = currentCart; // อัปเดตค่า cookie
 
     let setNumcart = numCart();
     // setNumcart.value++  
     setNumcart.value = dataCookieProduct.value != undefined ? dataCookieProduct.value.reduce((sum, item) => sum + item.qty, 0) : 0
     let elemCart =  document.getElementById('numcart')
 
     if (setNumcart.value > 0) {
         elemCart?.classList.add('show')
     }
 
     let elemAnime = document.querySelector('#numcart.anime-cart')
 
     if (elemAnime != null) {
         elemCart?.classList.remove('anime-cart')
     }
   
     setTimeout(() => {
         elemCart?.classList.add('anime-cart')
     }, 0);     
}

export const login = (path:String) => {
    const pathLogin_ = pathLogin()
    pathLogin_.value = ''
    
    const userToken = useCookie('user-token',{
        path: '/',              // Define the path
        maxAge: 60 * 60 * 24,   // Set expiry in seconds (1 day)
        secure: true,           // Send over HTTPS only
        sameSite: 'strict',     // CSRF protection
    });

    userToken.value = 'admin'

    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modalLogin')) // Returns a Bootstrap modal instance
    modal.hide();

    if (path != '') {
        return navigateTo(`/${path}`)
    } 
}

export const setLangCookie = (lang: string) => {

    const userLang = useCookie('user-lang',{
        maxAge: 60 * 60 * 24,   // Set expiry in seconds (1 day)
        secure: true,           // Send over HTTPS only
        sameSite: 'strict',     // CSRF protection
    });

    userLang.value = lang
}

export const FormatPrice = (number: number) => {
    let nf = new Intl.NumberFormat('en-US');
    return nf.format(number); 
}

export const FormatPriceDicemal = (number: number) => {
    let nf = new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
    return nf.format(number); 
}

export const showSnackbar = (name_product: String,img_product: String) => {
    const { $snackbar } = useNuxtApp()
    $snackbar.show({
        // text: 'Add to cart success',
        text: `<div class="d-flex align-items-center gap-3"><div class="notify-product"><img width="100%" height="auto" src="${img_product}" alt=""></div><div class="d-flex flex-column mb-1"><span class="font-bold-24">Add to cart success</span><span class="max-text-notify" style="color: #64b383;">${name_product}</span></div></div>`,
        actionText: 'Close',
        duration: 1500,
        backgroundColor: '#fff',
        textColor: '#08aa5e',
        actionTextColor: '#8a8a8a',
        pos: 'top-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
        showAction: false,
        customClass: 'snackbar-custom'
    })
}

export const showSnackbar_mobile = (name_product: String,img_product: String) => {
    const { $snackbar } = useNuxtApp()
    $snackbar.show({
        // text: 'Add to cart success',
        text: `<div class="d-flex align-items-center gap-3"><div class="notify-product"><img width="100%" height="auto" src="${img_product}" alt=""></div><div class="d-flex flex-column mb-1"><span class="font-bold-24">Add to cart success</span><span class="max-text-notify" style="color: #64b383;font-size: clamp(11px, 2vw, 14px);">${name_product}</span></div></div>`,
        actionText: 'Close',
        duration: 1500,
        backgroundColor: '#fff',
        textColor: '#08aa5e',
        actionTextColor: '#8a8a8a',
        pos: 'top-center', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
        showAction: false,
        customClass: 'snackbar-custom'
    })
}

