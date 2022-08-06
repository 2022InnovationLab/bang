const hospitalchange = document.getElementById('hosptial');
function InternalMedicine_MOVE() {
    location.href = '../result/result.html';
    hospitalchange.innerText = "내과입니다.";
}

function OTOLARYNGOLOGY_MOVE() {
    location.href = '../result/result.html';
    hospital = "정형외과";
}

function ORTHOPEDICS_MOVE() {
    location.href = '../result/result.html';
    hospital = "이비인후과";
}

function NEUROSURGER_MOVE() {
    location.href = '../result/result.html';
    hospital = "신경외과";
}

function start() {
    location.href = './result/start.html';
}