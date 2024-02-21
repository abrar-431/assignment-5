let cnt = 0;
function addColor(elementId){
    if(cnt >= 4) document.getElementById(elementId).removeEventListener();
    cnt++;
    document.getElementById(elementId).classList.add('bg-green-500');
    const totalSeat = document.getElementById('totalSeat').innerText;
    document.getElementById('totalSeat').innerText = parseInt(totalSeat)-1;
    const seatBooked = document.getElementById('seatBooked').innerText;
    document.getElementById('seatBooked').innerText = parseInt(seatBooked)+1;
    addInformation(elementId);
}