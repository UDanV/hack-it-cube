document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за подписку!');
});

var locations = [
    {
        region: "Москва",
        name: "Концертный зал 'Москва'",
        address: "ул. Пушкина, 15",
        date: "2021-07-15",
        availableZones: 5
    },
];

function displayLocations() {
    var list = document.getElementById('locations-list');
    locations.forEach(function(location) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<strong>Регион:</strong> ' + location.region +
            ', <strong>Название:</strong> ' + location.name +
            ', <strong>Адрес:</strong> ' + location.address +
            ', <strong>Дата:</strong> ' + location.date +
            ', <strong>Доступно зон:</strong> ' + location.availableZones +
            ' <button onclick="selectLocation(\'' + location.name + '\')">Выбрать</button>';
        list.appendChild(listItem);
    });
}

function selectLocation(name) {
    alert('Вы выбрали локацию: ' + name);
}

document.addEventListener('DOMContentLoaded', function() {
    displayLocations();
});

var zones = [
    { id: 'zone1', name: 'Зона A', price: 5000, top: '50px', left: '100px', width: '100px', height: '100px' },
];

function createZoneElements() {
    var map = document.getElementById('location-map');
    zones.forEach(function(zone) {
        var zoneDiv = document.createElement('div');
        zoneDiv.className = 'zone';
        zoneDiv.style.top = zone.top;
        zoneDiv.style.left = zone.left;
        zoneDiv.style.width = zone.width;
        zoneDiv.style.height = zone.height;
        zoneDiv.innerText = zone.name;
        zoneDiv.onclick = function() {
            document.getElementById('zone-name').textContent = zone.name;
            document.getElementById('zone-price').textContent = zone.price + ' руб.';
            document.getElementById('zone-details').style.display = 'block';
        };
        map.appendChild(zoneDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createZoneElements();
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateAndBook();
});

function validateAndBook() {
    var email = document.getElementById('customer-email').value;
    if (email.trim() === '') {
        alert('Пожалуйста, введите ваш email');
        return;
    }
    alert('Спасибо за бронирование! Скоро с вами свяжется наш менеджер.');
}
