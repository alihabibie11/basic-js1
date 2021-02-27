//pop box/dialog box
//alert(''); give simple alert/notif
//prompt(''); with textbox ex var nama = prompt('')
//confirm(''); with yes no return boolean ex : var tes = confirm('yakin?'); if( tes === true) { alert('user menekan OK') } else { alert('user menekan CANCEL') }

// var tes = confirm('Tes?');
// if( tes === true ) {
//     alert('OK Selected..')
// } else {
//     alert('CANCEL Selected..')
// }

//simple popbox program
alert('selamat datang');
var lagi = true;
while( lagi) {
var nama = prompt('masukkan nama:');
alert('halo ' + nama);

lagi = confirm('coba lagi?');

alert('terima kasih');
}



//pengulangan while
var i = 1
while(i <= 5) {
    console.log('Hello While! ' + i + 'x');
    i++;
}

//pengulangan for
for( var i = 1; i <= 5; i++ ) {
    console.log('Hello For! ' + i + 'x');
}