<script lang="ts" setup>

</script>

<template>
    <div>
        <div class="header-card-content">
            <div class="text-header-card">
                <IconOrderList class="icon-header-card"></IconOrderList>
                รายการสั่งซื้อ
            </div>
        </div>
        <div class="body-content-card pb-0">
            <ul class="form-menu-order">
                <li class="item-order-list active">
                    <span class="active">ทั้งหมด (99)</span>
                </li>
                <li class="item-order-list">
                    <span>ที่ต้องชำระ (99)</span>
                </li>
                <li class="item-order-list">
                    <span>กำลังดำเนินการ (99)</span>
                </li>
                <li class="item-order-list">
                    <span>กำลังจัดส่ง (99)</span>
                </li>
                <li class="item-order-list">
                    <span>จัดส่งสำเร็จ (99)</span>
                </li>
            </ul>
        </div>
        <div class="form-input-search mb-3">
            <IconSearch class="icon-search"></IconSearch>
            <input class="search-orderlist" type="text" placeholder="ค้นหาสินค้า, แบรนด์, รุ่น หรือหมายเลขคำสั่งซื้อ">
        </div>
        <div class="form-list-order">
            <div class="py-3 pe-4 d-flex justify-content-between align-items-center">
                <div class="item-status-order status-wait">
                    <IconStatusLoading></IconStatusLoading>
                    กำลังจัดเตรียมสินค้า
                </div>
                <div class="d-flex gap-3">
                    <span class="font-22 color-graydark">วันที่สั่งซื้อ: </span>
                    <span class="font-bold-22">30/01/2023 11:44:27</span>
                    <span style="width: 1px;height: auto;display: block; background: #E5E7EB;"></span>
                    <span class="font-22 color-graydark"><IconInvoiceState width="20"></IconInvoiceState> เลขที่ใบสั่งซื้อ: </span>
                    <span class="font-bold-22 color-bluedark">AT23015003</span>
                </div>
            </div>
            <div class="p-4 pt-0">
                <div class="warrper-item-product">
                    <div class="row">
                        <div class="col-7">
                            <div class="d-flex gap-4">
                                <div class="box-imgproduct">
                                    <img class="img-product" src="~/assets/img/eximgproduct1.png" alt="" srcset="">
                                </div>
                                <div>
                                    <p class="m-0 text-uppercase font-18 color-bluedark">Apple</p>
                                    <p class="m-0 font-bold-26">iPhone 16 Pro ความจุ 512GB สีไทเทเนียมดำ</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="d-flex justify-content-between align-items-center px-3">
                                <p class="m-0 font-24 color-graydark">จำนวน <span class="font-bold-24 color-black ms-2">1</span></p>
                                <div class="d-flex align-items-end flex-column">
                                    <h1 class="m-0 font-bold-36">฿127,590</h1>
                                    <div class="d-flex gap-2 align-items-center">
                                        <span class="item-save-prirce">-฿1,500</span>
                                        <span class="item-normal-price">฿129,090</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end mt-2">
                    <span class="m-0 font-bold-26 me-5">รวมรายการสั่งซื้อ 1 ชิ้น</span>
                    <span class="m-0 font-26 color-graydark">ยอดรวมสุทธิ: </span>
                    <span class="ms-2 font-bold-36 color-black">฿324,890.-</span>
                </div>
            </div>
        </div>
        <div class="form-list-order">
            <div class="py-3 pe-4 d-flex justify-content-between align-items-center">
                <div class="item-status-order status-cancel">
                    <IconStatusTimedelete></IconStatusTimedelete>
                    ยกเลิกคำสั่งซื้อโดยระบบ
                </div>
                <div class="d-flex gap-3">
                    <span class="font-22 color-graydark">วันที่สั่งซื้อ: </span>
                    <span class="font-bold-22">30/01/2023 11:44:27</span>
                    <span style="width: 1px;height: auto;display: block; background: #E5E7EB;"></span>
                    <span class="font-22 color-graydark"><IconInvoiceState width="20"></IconInvoiceState> เลขที่ใบสั่งซื้อ: </span>
                    <span class="font-bold-22 color-bluedark">AT23015003</span>
                </div>
            </div>
            <div class="p-4 pt-0">
                <div class="warrper-item-product">
                    <div class="row">
                        <div class="col-7">
                            <div class="d-flex gap-4">
                                <div class="box-imgproduct">
                                    <img class="img-product" src="~/assets/img/eximgproduct1.png" alt="" srcset="">
                                </div>
                                <div>
                                    <p class="m-0 text-uppercase font-18 color-bluedark">Apple</p>
                                    <p class="m-0 font-bold-26">iPhone 16 Pro ความจุ 512GB สีไทเทเนียมดำ</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="d-flex justify-content-between align-items-center px-3">
                                <p class="m-0 font-24 color-graydark">จำนวน <span class="font-bold-24 color-black ms-2">1</span></p>
                                <div class="d-flex align-items-end flex-column">
                                    <h1 class="m-0 font-bold-36">฿127,590</h1>
                                    <div class="d-flex gap-2 align-items-center">
                                        <span class="item-save-prirce">-฿1,500</span>
                                        <span class="item-normal-price">฿129,090</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end mt-2">
                    <span class="m-0 font-bold-26 me-5">รวมรายการสั่งซื้อ 1 ชิ้น</span>
                    <span class="m-0 font-26 color-graydark">ยอดรวมสุทธิ: </span>
                    <span class="ms-2 font-bold-36 color-black">฿324,890.-</span>
                </div>
            </div>
        </div>
        <div class="form-list-order">
            <div class="py-3 pe-4 d-flex justify-content-between align-items-center">
                <div class="item-status-order status-shipping">
                    <IconStatusShopFast></IconStatusShopFast>
                    กำลังจัดส่ง
                </div>
                <div class="d-flex gap-3">
                    <span class="font-22 color-graydark">วันที่สั่งซื้อ: </span>
                    <span class="font-bold-22">30/01/2023 11:44:27</span>
                    <span style="width: 1px;height: auto;display: block; background: #E5E7EB;"></span>
                    <span class="font-22 color-graydark"><IconInvoiceState width="20"></IconInvoiceState> เลขที่ใบสั่งซื้อ: </span>
                    <span class="font-bold-22 color-bluedark">AT23015003</span>
                </div>
            </div>
            <div class="p-4 pt-0">
                <div class="warrper-item-product">
                    <div class="row">
                        <div class="col-7">
                            <div class="d-flex gap-4">
                                <div class="box-imgproduct">
                                    <img class="img-product" src="~/assets/img/eximgproduct1.png" alt="" srcset="">
                                </div>
                                <div>
                                    <p class="m-0 text-uppercase font-18 color-bluedark">Apple</p>
                                    <p class="m-0 font-bold-26">iPhone 16 Pro ความจุ 512GB สีไทเทเนียมดำ</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="d-flex justify-content-between align-items-center px-3">
                                <p class="m-0 font-24 color-graydark">จำนวน <span class="font-bold-24 color-black ms-2">1</span></p>
                                <div class="d-flex align-items-end flex-column">
                                    <h1 class="m-0 font-bold-36">฿127,590</h1>
                                    <div class="d-flex gap-2 align-items-center">
                                        <span class="item-save-prirce">-฿1,500</span>
                                        <span class="item-normal-price">฿129,090</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end mt-2">
                    <span class="m-0 font-bold-26 me-5">รวมรายการสั่งซื้อ 1 ชิ้น</span>
                    <span class="m-0 font-26 color-graydark">ยอดรวมสุทธิ: </span>
                    <span class="ms-2 font-bold-36 color-black">฿324,890.-</span>
                </div>
                <div class="form-comfirm-product mt-2">
                    <p class="m-0 font-24 d-flex align-items-center gap-2"><IconBoxconfirm></IconBoxconfirm> ยืนยันได้รับสินค้าภายในวันที่: 03/02/66</p>
                    <p class="m-0 font-24 d-flex align-items-center gap-2" style="display: none !important;">ได้รับสินค้าสำเร็จ: 03/02/66</p>
                    <button class="btn-confirm-product">ยืนยันได้รับสินค้า</button>
                </div>
            </div>
        </div>
        <div class="form-list-order">
            <div class="py-3 pe-4 d-flex justify-content-between align-items-center">
                <div class="item-status-order status-complete">
                    <IconStatusBoxcheck></IconStatusBoxcheck>
                    จัดส่งสำเร็จ
                </div>
                <div class="d-flex gap-3">
                    <span class="font-22 color-graydark">วันที่สั่งซื้อ: </span>
                    <span class="font-bold-22">30/01/2023 11:44:27</span>
                    <span style="width: 1px;height: auto;display: block; background: #E5E7EB;"></span>
                    <span class="font-22 color-graydark"><IconInvoiceState width="20"></IconInvoiceState> เลขที่ใบสั่งซื้อ: </span>
                    <span class="font-bold-22 color-bluedark">AT23015003</span>
                </div>
            </div>
            <div class="p-4 pt-0">
                <div class="warrper-item-product">
                    <div class="row">
                        <div class="col-7">
                            <div class="d-flex gap-4">
                                <div class="box-imgproduct">
                                    <img class="img-product" src="~/assets/img/eximgproduct1.png" alt="" srcset="">
                                </div>
                                <div>
                                    <p class="m-0 text-uppercase font-18 color-bluedark">Apple</p>
                                    <p class="m-0 font-bold-26">iPhone 16 Pro ความจุ 512GB สีไทเทเนียมดำ</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-5">
                            <div class="d-flex justify-content-between align-items-center px-3">
                                <p class="m-0 font-24 color-graydark">จำนวน <span class="font-bold-24 color-black ms-2">1</span></p>
                                <div class="d-flex align-items-end flex-column">
                                    <h1 class="m-0 font-bold-36">฿127,590</h1>
                                    <div class="d-flex gap-2 align-items-center">
                                        <span class="item-save-prirce">-฿1,500</span>
                                        <span class="item-normal-price">฿129,090</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end mt-2">
                    <span class="m-0 font-bold-26 me-5">รวมรายการสั่งซื้อ 1 ชิ้น</span>
                    <span class="m-0 font-26 color-graydark">ยอดรวมสุทธิ: </span>
                    <span class="ms-2 font-bold-36 color-black">฿324,890.-</span>
                </div>
                <div class="form-comfirm-product active mt-2">
                    <p class="m-0 font-24 d-flex align-items-center gap-2" style="display: none !important;"><IconBoxconfirm></IconBoxconfirm> ยืนยันได้รับสินค้าภายในวันที่: 03/02/66</p>
                    <p class="m-0 font-24 d-flex align-items-center gap-2">ได้รับสินค้าสำเร็จ: 03/02/66</p>
                    <button class="btn-confirm-product" disabled>ยืนยันได้รับสินค้า</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .icon-header-card {
        fill: #fff;
        width: 26px;
    }

    .header-card-content {
        background: #000;
        padding: .6rem 2rem;
        border-radius: 8px 8px 0 0;
    }

    .body-content-card {
        width: 100%;
        height: auto;
        padding: 1rem 2rem;
        background: #fff;
        border-radius: 0 0 8px 8px;
    }

    .text-header-card {
        color: #fff;
        font-size: 28px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .form-menu-order {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0;
    }

    .item-order-list {
        width: fit-content;
        border-bottom: 3px solid #0d96da00;
        padding: 0 10px;
        cursor: pointer;
        transition: 0.3s;
    }

    .item-order-list > span:not(.active):hover {
        color: #0D95DA;
    }

    .item-order-list > span {
        color: #6B7280;
        font-size: 20px;
        font-weight: 400;
    }
   
    .item-order-list.active {
        width: fit-content;
        border-bottom: 3px solid #0D95DA;
        padding: 0 10px;
    }

    .item-order-list > span.active {
        color: #0D95DA;
        font-size: 20px;
    }

    .search-orderlist {
        border: none;
        font-size: 24px;
        font-weight: 400;
        width: 100%;
        background: none;
        outline: none !important;
    }

    .icon-search {
        fill: #6B7280 !important;
    }

    .form-input-search {
        border: 1px solid #6B7280;
        border-radius: 50px;
        padding: .4rem 1.6rem;
    }

    .form-list-order {
        background: #fff;
        border-radius: 8px;
        margin-bottom: 12px;
    }

    .item-status-order {
        background: #ccc;
        width: fit-content;
        padding: 4px 25px;
        font-size: 20px;
        font-weight: 400;
        border-radius: 0 50px 50px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .status-wait {
        color: #936F0D;
        background-color: #FFD332;
    }

    .status-cancel {
        color: #ffff;
        background-color: #FF5252;
    }
    
    .status-shipping {
        color: #47A836;
        background-color: #CDF6B3;
    }
   
    .status-complete {
        color: #CDF6B3;
        background-color: #47A836;
    }

    .warrper-item-product {
        border: 1px solid #E5E7EB;
        border-radius: 8px;
        padding: 10px;
    }

    .img-product {
        max-width: fit-content;
        max-height: 140px;
        width: 100%;
        height: auto;
        border: 1px solid #E5E7EB;
        border-radius: 8px;
    }

    .item-save-prirce {
        background: #CD1201;
        border-radius: 50px;
        padding: 0 16px;
        font-size: 20px;
        font-weight: 400;
        color: #ffff;
    }

    .item-normal-price {
        color: #6B7280;
        font-size: 24px;
        font-weight: 400;
        text-decoration: line-through;
    }

    .form-comfirm-product {
        border-radius: 8px;
        border: 1px solid #DBAA00;
        background: #FFFCEC;
        padding: 1.4rem 1.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .form-comfirm-product.active {
        border-radius: 8px;
        border: 1px solid #E5E7EB;
        background: none;
        padding: 1.4rem 1.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-confirm-product {
        color: #ffff;
        font-size: 24px;
        outline: none !important;
        border: none;
        padding: .5rem 2.2rem;
        border-radius: 120px;
        background: var(--Gradient-blue, linear-gradient(90deg, #0073BB 1.79%, #0095DA 100%));
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
        transition: 0.3s;
        cursor: pointer;
    }
    .btn-confirm-product:hover {
        opacity: 0.8;
    }   
    .btn-confirm-product:disabled {
        color: #9CA3AF;
        background: #E5E7EB;
        border-radius: 120px;
        cursor: default;
    }
</style>
