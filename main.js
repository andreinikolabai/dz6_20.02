let hour = prompt('Input number of hours', '');
let res;
if (hour <= 24) {
    res = 3600 * hour;
    alert(res);
}
else{
    alert('error');
}

