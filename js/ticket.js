// Select and change the seat color when clicked
// document.getElementById('A1').addEventListener("click", function(){
//     document.getElementById('A1').classList.add('bg-green-500');
// })


function addInformation(elementId) {
    const td1 = document.createElement('td');
    td1.innerText = document.getElementById(elementId).innerText;
    const td2 = document.createElement('td');
    td2.innerText = 'Economoy';
    const td3 = document.createElement('td');
    td3.innerText = '550';
    const tr = document.createElement('tr');
    tr.append(td1, td2, td3)
    document.getElementById('bookingTable').append(tr);
    const totalPriceText = document.getElementById('totalPrice').innerText;
    let totalPrice = parseInt(totalPriceText);
    totalPrice += 550;
    document.getElementById('totalPrice').innerText = totalPrice;
    document.getElementById('grandTotal').innerText = totalPrice;
}

function scrollToBus() {
    document.getElementById('busSection').scrollIntoView({ behavior: 'smooth' });
}

function coupon() {
    const userApply = document.getElementById('couponApply').value;
    const coupon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;
    const totalPriceText = document.getElementById('totalPrice').innerText;
    let totalPrice = parseInt(totalPriceText);
    let discount = 0;
    if (userApply === coupon1) {
        discount = totalPrice * 15 / 100;
        document.getElementById('coupleDiv').classList.add('hidden');
    }
    else if (userApply === coupon2) {
        discount = totalPrice * 20 / 100;
        document.getElementById('coupleDiv').classList.add('hidden');
    }
    document.getElementById('grandTotal').innerText = totalPrice;
    const grandTotalText = document.getElementById('grandTotal').innerText;
    let grandTotal = parseInt(grandTotalText);
    grandTotal -= discount;
    document.getElementById('grandTotal').innerText = grandTotal;
}