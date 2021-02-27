function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if( this.penumpang.length == 0 ) {
          this.penumpang.push(namaPenumpang);
          console.log( namaPenumpang + ' sudah naik.' )
          return penumpang;
        } else {
            for( var i = 0; i < this.penumpang.length;  i++) {
                if( this.penumpang[i] == namaPenumpang ) {
                    console.log('tidak bisa. ' + namaPenumpang + ' sudah ada.');
                    return penumpang;
                } else if( i == this.penumpang.length - 1 ) {
                    this.penumpang.push(namaPenumpang);
                    console.log(namaPenumpang + " sudah naik.");
                    return penumpang;
                }
            }
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if( this.penumpang.length == 0 ) {
            console.log('tidak ada penumpang.');
            return penumpang;
        } else {
            for( var i = 0; i < this.penumpang.length; i++ ) {
                if( this.penumpang[i] == namaPenumpang ) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    console.log( namaPenumpang + ' sudah turun' )
                    return penumpang;
                }
            }
            if (this.penumpang[i] == undefined) {
              console.log("tidak ada anjim");
              return penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Ali Habibie', ['Kresek', 'Balaraja'], [undefined], 0);