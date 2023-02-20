let hour = prompt('input number of hours', '');
let res;
if (hour <= 24) {
    res = 3600 * hour;
    alert('in ' + hour + ' hour - ' + res + ' sec');
}
else{
    alert('error');
}

