function formatNum(num) {
    return ('00' + num).slice(-2);
}

setInterval(function() {
    var event = new CustomEvent('time', {
        detail: new Date()
    });

    document.dispatchEvent(event);

    var date = new Date(event.detail);

    document.getElementById("current_hour").innerHTML = formatNum(date.getHours());
    document.getElementById("current_minute").innerHTML = formatNum(date.getMinutes());

    if (new Date(event.detail).getHours() == 11 && new Date(event.detail).getMinutes() >= 30) {
      document.getElementById("moscow_calling").innerHTML = 'Посадка';
    } else if (new Date(event.detail).getHours() >= 12 && new Date(event.detail).getMinutes() >= 00) {
      document.getElementById("moscow_calling").innerHTML = 'Посадка завершена';
    }

}, 5000);
