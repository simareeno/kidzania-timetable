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

    row(date, 'santafe_calling', 11, 0, 11, 30);
    row(date, 'tokio_calling', 11, 15, 11, 45);
    row(date, 'moscow_calling', 11, 30, 12, 0);
    row(date, 'london_calling', 12, 0, 12, 30);
    row(date, 'dubai_calling', 12, 30, 13, 0);
    row(date, 'seoul_calling', 12, 40, 13, 10);
    row(date, 'stambul_calling', 12, 40, 13, 10);
    row(date, 'lissabon_calling', 12, 50, 13, 20);

}, 5000);



function row(date, name, pHour, pMin, fHour, fMin) {

  var newDate = date;
  var newName = document.getElementById(name);

  if (newDate.getHours() == pHour && newDate.getMinutes() >= pMin) {
    newName.innerHTML = 'Посадка';
    newName.className += ' posadka';
  } else if (newDate.getHours() >= fHour && newDate.getMinutes() >= fMin) {
    newName.innerHTML = 'Посадка завершена';
    newName.className += ' opozdal';
  }

}
