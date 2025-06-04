<script lang="ts" setup>

</script>

<template>
    <div class="form-control-data">
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="text-header line-height-22 m-0">ตั้งค่าข้อมูลส่วนตัว</h2>
            <span class="btn-edit-data line-height-22">แก้ไข</span>
        </div>
        <hr>
        <div class="row">
            <div class="col-2 text-header-datauser">ชื่อ - นามสกุล:</div>
            <div class="col-10 text-datauser">DevTun No.1</div>
            <div class="col-2 text-header-datauser">อีเมล:</div>
            <div class="col-10 text-datauser d-flex align-items-center gap-2">ilove****@gmail.com
                <div class="wait-confirm"><IconClock class="icon-confirm-wait"></IconClock> รอการยืนยัน</div>
            </div>
            <div class="col-2 text-header-datauser">เบอร์โทรศัพท์:</div>
            <div class="col-10 text-datauser d-flex align-items-center gap-2">0811234567
                <div class="sucess-confirm"><IconSuesccCheck class="icon-confirm-sucess"></IconSuesccCheck> ยืนยันแล้ว</div>
            </div>
            <div class="col-2 text-header-datauser">วันเกิด:</div>
            <div class="col-10 text-datauser">2 มีนาคม 2540</div>
        </div>
    </div>
    <div class="form-control-data">
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="text-header line-height-22 m-0">เปลี่ยนรหัสผ่าน</h2>
            <span class="btn-edit-data line-height-22">เปลี่ยนรหัสผ่าน</span>
        </div>
        <hr>
        <div class="row">
            <div class="col-2 text-header-datauser">รหัสผ่าน:</div>
            <div class="col-10 text-datauser"><input class="input-password" type="password" value="12300929asdasd9" disabled></div>
        </div>
    </div>
    <div class="form-control-data">
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="text-header line-height-22 m-0">ตั้งค่าความเป็นส่วนตัว</h2>
            <span class="btn-edit-data line-height-22">แก้ไข</span>
        </div>
        <hr>
        <div class="mb-2">
            <p class="font-bold-22 m-0">ความยินยอมให้นำข้อมูลไปใช้ในการพัฒนาการบริการ และผลิตภัณฑ์ เพื่อตอบสนองความต้องการของลูกค้าได้ดียิ่งขึ้น </p>
            <p class="font-18 color-graydark m-0">ท่านอนุญาติให้บริษัทจัดเก็บนำไปใช้และเปิดเผยข้อมูลของท่านเพื่อใช้ในการพัฒนาบริการหรือผลิตภัณฑ์ของบริษัทได้ เช่น นำข้อมูลพฤติกรรมการเข้าชมสินค้าไปพัฒนารูปแบบการใช้งานเว็บไซต์เป็นต้น</p>
            <div class="d-flex align-items-center gap-5">
                <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="radioDevelop" id="radioDevelop">
                    <label class="form-check-label text-radio-profile mt-1" for="radioDevelop">
                        ยินยอม
                    </label>
                </div>
                <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="radioDevelop" id="radioDevelopNo" checked>
                    <label class="form-check-label text-radio-profile mt-1" for="radioDevelopNo">
                        ไม่ยินยอม
                    </label>
                </div>
            </div>
        </div>
        <div class="m-0">
            <p class="font-bold-22 m-0">ความยินยอมให้บริษัทนำเสนอ บริการ ผลิตภัณฑ์ โปรโมชั่นหรือเงื่อนไขสิทธิพิเศษต่าง ๆ </p>
            <p class="font-18 color-graydark m-0">ท่านอนุญาติให้บริษัทจัดเก็บนำไปใช้และเปิดเผยข้อมูลของท่านเพื่อใช้ในการพัฒนาบริการหรือผลิตภัณฑ์ของบริษัทได้ เช่น นำข้อมูลพฤติกรรมการเข้าชมสินค้า
                ไปพัฒนารูปแบบการใช้งานเว็บไซต์เป็นต้น</p>
            <div class="d-flex align-items-center gap-5">
                <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="radioDevelop" id="radioDevelop">
                    <label class="form-check-label text-radio-profile mt-1" for="radioDevelop">
                        ยินยอม
                    </label>
                </div>
                <div class="form-check d-flex align-items-center gap-2">
                    <input class="form-check-input" type="radio" name="radioDevelop" id="radioDevelopNo" checked>
                    <label class="form-check-label text-radio-profile mt-1" for="radioDevelopNo">
                        ไม่ยินยอม
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="form-control-data">
        <div class="d-flex justify-content-center align-items-center">
            <h2 class="text-header line-height-22 m-0">ตั้งค่าความเป็นส่วนตัว</h2>
        </div>
        <hr>
       <div class="d-flex gap-3 mt-4">
            <div class="form-control-loginsocial">
                <IconSocialFacebook2></IconSocialFacebook2>
                <h1 class="m-0 font-bold-24 ">เชื่อมต่อ</h1>
            </div>
            <div class="form-control-loginsocial">
                <IconSocialGoogle2></IconSocialGoogle2>
                <h1 class="m-0 font-bold-24 ">เชื่อมต่อ</h1>
            </div>
            <div class="form-control-loginsocial">
                <IconSocialApple2></IconSocialApple2>
                <h1 class="m-0 font-bold-24 ">เชื่อมต่อ</h1>
            </div>
       </div>
    </div>
    <div class="form-control-data">
        <div class="d-flex justify-content-center align-items-center">
            <h2 class="text-header line-height-22 m-0">ลบบัญชี</h2>
        </div>
        <hr>
        <div>
            <p class="font-bold-22 m-0">ความยินยอมให้นำข้อมูลไปใช้ในการพัฒนาการบริการและผลิตภัณฑ์เพื่อตอบสนองความต้องการของลูกค้าได้ดียิ่งขึ้น</p>
            <p class="font-18 color-graydark m-0">ท่านอนุญาตให้บริษัท แอดไวซ์ ไอที อินฟินิท จำกัด (มหาชน) จัดเก็บ นำไปใช้ และเปิดเผยข้อมูลของท่าน เพื่อใช้ในการพัฒนาบริการหรือผลิตภัณฑ์ของบริษัทได้เช่น นำข้อมูลพฤติกรรมการเข้าชมสินค้าไปพัฒนารูปแบบการใช้งานเว็บไซต์ เป็นต้น</p>
        </div>
        <div class="mt-3">
            <button class="btn-delete-account">แจ้งขอลบบัญชี</button>

        </div>
    </div>
</template>

<style lang="css" scoped>   
    hr {
        border-color: #b0b0b0;
    }

    .text-header {
        font-size: 26px;
        font-weight: 500;
    }

    .form-control-data {
        border-radius: 8px;
        background: #ffff;
        padding: 1.5rem 2rem;
        margin-bottom: 10px;
    }

    .btn-edit-data {
        font-size: 22px;
        font-weight: 400;
        color: #0D95DA;
        cursor: pointer;
        transition: 0.3s;
    }
    .btn-edit-data:hover {
        opacity: 0.8;
    }

    .text-header-datauser {
        font-size: 22px;
        font-weight: 400;
        color: #6B7280;
    }

    .text-datauser {
        font-size: 22px;
        font-weight: 500;
        color: #000;
    }

    .icon-confirm-wait {
        width: 20px;
    }

    .icon-confirm-sucess {
        width: 18px;
    }

    .input-password {
        border: none;
        background: none;
        outline: none;
        letter-spacing: 4px;
        max-width: 300px;
        width: 100%;
    }

    .text-radio-profile {
        font-size: 20px;
        font-weight: 400;
    }

    .btn-delete-account {
        font-size: 20px;
        font-weight: 400;
        border: 1px solid #6B7280;
        border-radius: 8px;
        outline: none !important;
        color: #6B7280;
        background: none;
        padding: .2rem 1.5rem;
        transition: 0.3s;
    }
    .btn-delete-account:hover {
        opacity: 0.6;
        border: 1px solid #acaeb2;
    }

    .form-control-loginsocial {
        border: 1px solid #86CAED;
        border-radius: 15px;
        width: 105px;
        height: 115px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: column;
        gap: 8px;
        padding: 10px;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    .form-control-loginsocial:hover {
        border: 1px solid #c6ebfd;
        box-shadow: 0 0 12px #86cbed67;
    }
</style>
