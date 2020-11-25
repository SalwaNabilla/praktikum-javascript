function validasi () {
     nama = document.getElementById ("nama").value;
     email = document.getElementById ("email").value;
     jam = document.getElementById ("waktu").value;
     tujuan = document.getElementById ("tujuan").value;
     tiket = document.getElementById ("tiket").value;
     teks = document.getElementById ('teks').value;

    if (nama == "" || email == "" || jam == "" || tujuan == "" || tiket == ""){
        alert ("Data Harus Lengkap!");
        return false ;
    }
    else if (nama.length >= 30) {
        alert ("Maksimal 30 Huruf!");
        return false ;
    }
    else if (tiket <= 0 || tiket > 10) {
        alert ('Maksimal Pembelian tiket 10');
        return false ;
    }
    else {
       teks.innerHTML = "Nama :" + nama ;
       teks.innerHTML = "Email :" + email ;
       teks.innerHTML = "Waktu Keberangkatan :" + jam ;
       teks.innerHTML = "Tujuan Keberangkatan :" + tujuan ;
       teks.innerHTML = "Jumlah Tiket :" + tiket ;
    }
}