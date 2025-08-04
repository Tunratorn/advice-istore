<script lang="ts" setup>
   const viewport = useViewport()
   
</script>

<template>
    <div v-if="!viewport.isGreaterOrEquals('tablet-md')" class="d-flex justify-content-center align-items-center px-sm-4 mb-2">
        <h2 class="">ส่งด่วนภายใน 2 ชั่วโมง (Warp 2)</h2>
    </div>
    <div class="header-card-content">
        <div class="text-header-card">
            ส่งด่วนภายใน 2 ชั่วโมง (Warp 2)
        </div>
    </div>
    <div class="body-content-card px-sm-4 pb-5">
        <div class="px-0 px-md-5 pt-md-3">
            <img v-if="viewport.isGreaterOrEquals('tablet-sm')" src="https://img.advice.co.th/images_nas/iStore/warrantyimg.png" alt="img-service-warranty" class="img-service-warranty">
            <img v-else src="https://img.advice.co.th/images_nas/iStore/smallWarranty.png" alt="img-service-warranty" class="img-service-warranty">
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title"><IconShippingFast class="icon-service"></IconShippingFast> ส่งด่วน 3 ชั่วโมง นับจากเวลาได้รับ SMS</h4>
            
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title mb-4"><IconShippingFast class="icon-service"></IconShippingFast> พื้นที่จัดส่งครอบคลุม 13 จังหวัด</h4>
            <h5>1. ซื้อสินค้ามูลค่ารวม 3,000 บาทขึ้นไป ส่งฟรี | ซื้อสินค้ามูลค่ารวม 500 บาทขึ้นไป ค่าบริการขนส่ง 200 บาท</h5>
            <table class="mb-4">
                <thead>
                    <tr>
                        <th class="set-th">จังหวัด</th>
                        <th>เขต/อำเภอ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>กรุงเทพฯ</td>
                        <td>
                            <ul class="m-0">
                                <li class="warranty-list">ทุกเขต</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>นนทบุรี</td>
                        <td>
                            <ul class="m-0">
                                <li class="warranty-list">ทุกอำเภอ</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>ปทุมธานี</td>
                        <td>
                            <ul class="m-0">
                                <li class="warranty-list">อ.คลองหลวง (ทุกตำบล)</li>
                                <li class="warranty-list">อ.เมืองปทุมธานี (ทุกตำบล)</li>
                                <li class="warranty-list">อ.ลาดหลุมแก้ว (ทุกตำบล)</li>
                                <li class="warranty-list">อ.สามโคก (ทุกตำบล)</li>
                                <li class="warranty-list">อ.ธัญบุรี (เฉพาะ ต.บึงยี่โถ, ต.ประชาธิปัตย์, ต.รังสิต และต.คลองหนึ่ง)</li>
                                <li class="warranty-list">อ.ลำลูกกา (เฉพาะ ต.คูคต, ต.บึงคำพร้อย และต.ลาดสวาย)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สมุทรปราการ</td>
                        <td>
                            <ul class="m-0">
                                <li class="warranty-list">อ.พระประแดง (ทุกตำบล)</li>
                                <li class="warranty-list">อ.เมืองสมุทรปราการ (ตำบลสำโรงเหนือ, เทพารักษ์, บางเมืองใหม่, บางด้วน, บางโปรง, ปากน้ำ,
                                    แพรกษา, บางเมือง)</li>
                                <li class="warranty-list">อ.บางพลี (ตำบลบางแก้ว, บางพลี, ราชาเทวะ)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>นครปฐม</td>
                        <td>
                            <ul class="m-0">
                                <li class="warranty-list">อ.พุทธมณฑล (ทุกตำบล)</li>
                                <li class="warranty-list">อ.สามพราน (เฉพาะ ต.ทรงคนอง, ต.บางเตย, ต.บางกระทึก และ ต.กระทุ่มล้ม)</li>
                                <li class="warranty-list">อ.นครชัยศรี (เฉพาะ ต.บางแก้วฟ้า, ต.ห้วยพลู, ต.ดอนแฝก และ ต.ลานตากฟ้า)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h5>2. ซื้อสินค้ามูลค่ารวม 5,000 บาทขึ้นไป ส่งฟรี | ซื้อสินค้ามูลค่ารวม 3,000 บาทขึ้นไป ค่าบริการขนส่ง 200 บาท | ซื้อสินค้ามูลค่ารวม 500 บาทขึ้นไป ค่าบริการขนส่ง 300 บาท</h5>
            <table>
                <thead>
                    <tr>
                        <th class="set-th">จังหวัด</th>
                        <th>เขต/อำเภอ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ปทุมธานี</td>
                        <td>
                        <ul class="m-0">
                            <li class="warranty-list">อ.หนองเสือ (ทุกตำบล)</li>
                            <li class="warranty-list">อ.ธัญบุรี (เฉพาะ ต.บึงน้ำรักษ์ และต.บึงสนั่น)</li>
                            <li class="warranty-list">อ.ลำลูกกา (เฉพาะ ต.ลำสนธิแก้ว, ลำลูกกา, ต.บึงทองหลาง, ต.ลำไทร, ต.พืชอุดม และต.บึงคอไห)</li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สมุทรปราการ</td>
                        <td>
                        <ul class="m-0">
                            <li class="warranty-list">อ.บางพลี (เฉพาะ ต.บางโฉลง, ต.บางปลา และ ต.หนองปรือ)</li>
                            <li class="warranty-list">อ.เมืองสมุทรปราการ (เฉพาะ ต.ท้ายบ้าน, ต.ท้ายบ้านใหม่, ต.บางปู, ต.บางปูใหม่ และต.แพรกษาใหม่)</li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>นครปฐม</td>
                        <td>
                        <ul class="m-0">
                            <li class="warranty-list">อ.เมืองนครปฐม (ทุกตำบล)</li>
                            <li class="warranty-list">อ.สามพราน (เฉพาะ ต.คลองจินดา, ต.ตลาดจินดา, ต.ท่าข้าม, ต.ท่าตลาด, ต.บางช้าง, ต.บ้านใหม่, ต.ยายชา, ต.ไร่ขิง, ต.สามพราน, ต.หอมเกร็ด และต.วัดใหม่สุคนธาราม)</li>
                            <li class="warranty-list">อ.นครชัยศรี (เฉพาะ ต.ขุนแก้ว, ต.โคกพระเจดีย์, ต.วัดละมุด, ต.วัดสำโรง, ต.ศีรษะทอง, ต.แหลมบัว ฯลฯ)</li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สมุทรสาคร</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.เมืองสมุทรสาคร, อ.กระทุ่มแบน</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>พระนครศรีอยุธยา</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.บางไทร, อ.เมือง, อ.ลาดบัวหลวง, อ.บางปะอิน, อ.วังน้อย</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สมุทรสงคราม</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">อ.บางคนที เฉพาะ ต.ควนประเวศ, ต.ดอนมะโนรา (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>ฉะเชิงเทรา</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.บางน้ำเปรี้ยว (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>ราชบุรี</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">อ.บ้านโป่ง เฉพาะ ต.บ้านโป่ง, ต.ท่าผา, ต.กรับใหญ่, ต.ปากแรต, ต.หนองอ้อ, ต.ดอนกระเบื้อง, ต.สวนกล้วย, ต.นครชุมน์ (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สุพรรณบุรี</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.สองพี่น้อง (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>นครนายก</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.องครักษ์ (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>สระบุรี</td>
                        <td>
                        <ul class="m-0"><li class="warranty-list">เฉพาะ อ.หนองแค (09.00–17.00 น.)</li></ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul class="my-3">
                <li class="warranty-list text-black">สินค้าหมวด Gaming Chair, Rack, Cable หมวด CCTV accessories, Air Conditioner, Nas, จอสกรีน หมวด Projectorและสินค้า By Order ไม่สามารถเลือกรูปแบบการจัดส่ง "รับสินค้าภายใน 3 ชม."ได้ แต่ท่านยังสามารถเลือกรูปแบบการจัดส่งอื่นได้</li>
                <li class="warranty-list text-black">จอขนาด 27" ขึ้นไป และจอ Curve ไม่สามารถเลือกบริการส่งด่วนได้ แต่ลูกค้ายังสามารถเลือกรูปแบบจัดส่งอื่นได้</li>
            </ul>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> สงวนสิทธิ์เฉพาะลูกค้าที่ทำรายการสั่งซื้อและชำระเงินเสร็จสิ้นภายในเวลา 09.00 - 22.00 น. (ทุกวันยกเว้นวันหยุดนักขัตฤกษ์)</h4>
            <div style="padding-left: 42px;">
                <p class="m-0 font-18 color-gray">กรณีชำระเงินหลัง 22.00 น. จะได้รับสินค้าในวันถัดไป</p>

            </div>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> ชดเชยเงินให้ 500 บาท กรณีจัดส่งสินค้าล่าช้าเกินกำหนด 3 ชั่วโมง</h4>
            <div style="padding-left: 42px;">
                <p class="mb-2 font-20 color-gray">กรณีชำระเงินหลัง 22.00 น. จะได้รับสินค้าในวันถัดไป</p>
                <p class="m-0 font-20 color-red">** บริษัท จะไม่ชดเชยเงิน 500 บาท อันเนื่องมาจาก</p>
                <ul class="m-0">
                    <li class="warranty-list">ลูกค้าไม่ได้เลือกรูปแบบการจัดส่ง เป็นแบบรับสินค้าวันนี้ภายใน 3 ชม.</li>
                    <li class="warranty-list">ไม่มีการทำรายการสั่งซื้อ หรือแจ้งหลักฐานการโอนเงินเข้ามาตามขั้นตอน,ระยะเวลา และเงื่อนการสั่งซื้อของบริษัทฯ</li>
                    <li class="warranty-list">สินค้าในรายการคำสั่งซื้อที่ชำระเงินเข้ามาแล้วหมด ,สินค้าไม่เพียงพอ (เจ้าหน้าที่จะทำการติดต่อลูกค้าเพื่อแจ้งให้ทราบเพื่อเสนอเปลี่ยนสินค้าหรือคืนเงิน)</li>
                    <li class="warranty-list">สาเหตุอื่นๆ ที่ไม่ใช่การจัดส่งหรือขนย้ายสินค้าจากบริษัทฯไปยังลูกค้า</li>
                    <li class="warranty-list">ลูกค้าเป็นผู้กระทำให้ล่าช้า  เช่น การขอแก้ไข/เปลี่ยนแปลงข้อมูลการสั่งซื้อในภายหลังการทำรายการเข้ามา  ทำให้ระบบการดำเนินงานภายในของบริษัทฯล่าช้ากว่ากำหนด  เป็นต้น</li>
                    <li class="warranty-list">ไม่สามารถติดต่อผู้รับปลายทางได้เป็นระยะเวลาเกินกว่า 10นาทีเมื่อเจ้าหน้าที่ไปถึงปลายทางไม่เกินเวลาที่กำหนด</li>
                    <li class="warranty-list">ผู้รับไม่สามารถรับสินค้าได้ หรือขอเลื่อนเวลาการรับสินค้าในช่วงเวลาที่เจ้าหน้าที่ไปถึงปลายทางภายในระยะเวลาที่กำหนด</li>
                    <li class="warranty-list">ลูกค้าติดต่อขอรับค่าชดเชยภายหลัง 7 วัน นับจากวันที่เซ็นต์รับสินค้</li>
                    <li class="warranty-list">ลูกค้าสามารถใช้สิทธิ์ในการรับเงินชดเชย 1 รหัสลูกค้า หรือ สถานที่ส่งสินค้าที่เดียวกัน 1 ครั้งต่อวันเท่าน้ัน</li>
                </ul>
            </div>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> ชดเชยเงินให้ 5,555 บาท</h4>
            <div style="padding-left: 42px;">
                <p class="mb-2 font-20 color-gray">กรณีจัดส่งสินค้าล่าช้าเกินกำหนด 3 ชั่วโมง ติดต่อกัน 5 ครั้ง</p>
                <p class="m-0 font-20 color-red">***เพื่อเป็นขวัญและกำลังใจให้ซื้อต่อ บริษัทฯยินดีจ่ายเงินชดเชยเป็นเงินจำนวน 5,555 บาท ภายใต้เงื่อนไข 3 ข้อดังต่อไปนี้</p>
                <ul class="m-0">
                    <li class="warranty-list">หากบริษัทฯจัดส่งช้าเกิน 3 ชั่วโมงติดต่อกันถึง 5 ครั้ง ภายใน 6 เดือน นับแต่วันที่เปิดบิลครั้งแรก หรือนับแต่วันที่ในบิลที่ได้เปิดหลังจากบิลใบที่ส่งช้าติดต่อกันครั้งที่ 5</li>
                    <li class="warranty-list">เป็นการซื้อสินค้าของรหัสลูกค้าและที่อยู่เดียวกัน</li>
                    <li class="warranty-list">ลูกค้าต้องติดต่อและส่งข้อมูลหรือเอกสารการขอรับเงินชดเชยให้ครบถ้วนภายใน 5 วัน เริ่มนับตั้งแต่วันที่ลงชื่อรับสินค้าที่ส่งช้าติดต่อกันครั้งที่ 5โดยจะทำการโอนเงินเข้าบัญชีลูกค้าภายใน 5 วันทำการ นับถัดจากวันที่ได้รับเอกสารครบถ้วน และไม่ว่ากรณีใดๆ หากขาดเงื่อนไขข้อหนึ่งข้อใดบริษัทฯจะไม่จ่ายเงินชดเชย บริษัทฯขอสงวนสิทธิในการขอแก้ไขเงื่อนไขในการจ่ายเงินชดเชยโดยไม่ต้องแจ้งให้ลูกค้าทราบล่วงหน้า</li>
                </ul>
            </div>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> จำกัดขนาดสินค้าต้องมีขนาด (กว้าง + ยาว + สูง) รวมกันไม่เกิน 150 เซนติเมตร และด้านใดด้านหนึ่งไม่เกิน 100 เซนติเมตร</h4>
            <div style="padding-left: 42px;">
                <p class="m-0 font-20 color-red">***น้ำหนักไม่เกิน 20 กิโลกรัม ต่อ 1 ใบเสร็จ</p>
                <ul class="m-0">
                    <li class="warranty-list">สินค้าต้องมีน้ำหนักไม่เกิน 20 kg/1 ใบเสร็จ</li>
                    <li class="warranty-list">สินค้าต้องมีขนาด กว้าง*สูง*ยาว รวมกันไม่เกิน 150 cm และด้านใดด้านหนึ่งไม่เกิน 100 cm จึงทำการส่งด่วนภายในเวลาที่กำหนดได้ หากสินค้ามีขนาดหรือน้ำหนักเกิน จะไม่สามารถนำส่งได้ เจ้าหน้าที่จะแจ้งให้ทราบก่อน และทำการจัดส่งสินค้าให้ภายในวัน รวมถึงไม่อยู่ในเงื่อนไขได้รับค่าชดเชยทุกกรณี</li>
                </ul>
            </div>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> ข้อจำกัดการให้บริการ (บางกรณี)</h4>
            <div style="padding-left: 42px;">
                <p class="m-0 font-20 color-red">***นำส่งสินค้าบนตึก / อาคารสูงที่ไม่อนุญาติให้บุคคลภายนอกเข้า</p>
                <ul class="m-0">
                    <li class="warranty-list">ไม่สามารถนำส่งสินค้าบนตึก/อาคารสูง ที่ไม่อนุญาตให้บุคคลภายนอกเข้า หรือเนื่องจากเป็นช่วงเวลายามวิกาล</li>
                    <li class="warranty-list">ไม่สามารถนำส่งสินค้าบนตึก/อาคารสูงที่ไม่มีลิฟท์กรณีชั้นที่ต้องการให้ส่งสินค้าสูงเกินกว่า 2 ชั้นขึ้นไป</li>
                    <li class="warranty-list">ไม่สามารถนำส่งสินค้าบนตึก/อาคารสูง กรณีสินค้ามีน้ำหนักและขนาดใหญ่ที่จำเป็นต้องใช้หลายคนแบกหรือไม่มีทางสำหรับนำรถขนส่งขึ้นไปส่งยังชั้นที่ผู้รับพักอาศัย</li>
                    <li class="warranty-list">ไม่มีบริการยกสินค้าขึ้นไปส่งหรือบริการประกอบ ถอด แยก แกะ ตรวจสอบชิ้นส่วนสินค้าภายในกล่องพัสดุ ไปยังห้องพัก ทั้งในรูปแบบบ้านพัก คอนโด อพาร์ทเม้น แฟลต ห้องเช่าฯลฯ (ลูกค้าจะต้องจัดเตรียมเจ้าหน้าที่เพื่อขนย้ายหรือถอด แยกประกอบเอง)</li>
                </ul>
            </div>
        </div>
        <div class="px-0 px-md-5">
            <hr>
        </div>
        <div class="warranty-section px-0 px-md-5 mt-4">
            <h4 class="group-title m-0"><IconShippingFast class="icon-service"></IconShippingFast> สินค้าเสียหายใน 7 วัน ทางบริษัทฯ ไปรับของถึงบ้านท่านฟรี 09.00 - 22.00 น. (ทุกวันยกเว้นวันหยุดนักขัตฤกษ์)</h4>
            <div style="padding-left: 42px;">
                <p class="mb-2 font-20 color-gray">(จำนวน 1 ครั้ง เฉพาะการเข้าไปรับสินค้าเท่านั้น ไม่รวมส่งคืน)</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .header-card-content {
        background: #000;
        padding: .6rem 2rem;
        border-radius: 8px 8px 0 0;
        text-align: center;
        color: white;
        font-size: 28px;
        font-weight: 500;
    }

    .body-content-card {
        width: 100%;
        height: auto;
        padding: 1rem 2rem;
        background: #fff;
        border-radius: 0 0 8px 8px;
        margin-bottom: 5rem;
    }

    .icon-service {
        width: 25px;
        height: 25px;
        margin-bottom: 5px;
        margin-right: 8px;
    }

    .group-title {
        display: grid;
        grid-template-columns: 25px auto;
        gap: 12px;
    }

    .img-service-warranty {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    thead {
      background-color: #000000;
      color: white;
    }

    table {
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #e5e7eb;
        width: 100%;
        border-radius: 8px;
        overflow: hidden; 
    }

    thead tr:first-child th:first-child {
        border-top-left-radius: 8px;
    }

    thead tr:first-child th:last-child {
        border-top-right-radius: 8px;
    }

    tbody tr:last-child td:first-child {
        border-bottom-left-radius: 8px;
    }

    tbody tr:last-child td:last-child {
        border-bottom-right-radius: 8px;
    }

     th, td {
        text-align: left;
        vertical-align: top;
        padding: 12px;
        border-right: 1px solid #e5e7eb; /* เพิ่มเส้นแนวตั้ง */
    }

    th, td {
      text-align: left;
      vertical-align: top;
      padding: 10px 26px;
      font-size: 20px;
      font-weight: unset;
    }

    tbody tr:nth-child(even) {
      background-color: #F9FAFB;
    }

    .set-th {
        width: 22%;
    }


    li.warranty-list {
        list-style: disc !important;
        font-size: 20px;
        color: #808080;
    }

    @media only screen and (max-width: 992px) { 
        .header-card-content, .body-content-card {
            background: unset;
            padding: 0;
        }

        .text-header-card {
            display: none;
        }

    }

    @media only screen and (max-width: 768px) { 
        th, td {
            text-align: left;
            vertical-align: top;
            padding: 8px 14px;
            font-size: 20px;
            font-weight: unset;
        }

        th,td, .warranty-list {
            font-size: 16px !important;
        }
    }
</style>
