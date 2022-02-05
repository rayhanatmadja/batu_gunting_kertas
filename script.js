// method pilihan komputer untuk mengacak pilihan dari komputer
function getPilihanKomputer(){
    const komp = Math.random();
    if(komp < 0.34 ) return 'gunting';
    if(komp >= 0.34 && komp < 0.67 ) return 'kertas';
    return 'batu';
}

// rules & hasil
function getHasil(komp, pemain){
    if(pemain == komp) return 'SERI!';
    if(pemain == 'kertas') return (komp == 'gunting') ? 'KALAH!' : 'MENANG!';
    if(pemain == 'gunting') return (komp == 'kertas') ? 'MENANG!' : 'KALAH!';
    if(pemain == 'batu') return (komp == 'gunting') ? 'MENANG!' : 'KALAH!';
}


function acakGambar(){
    const imgKomputer = document.querySelector('.img-komputer');
    const isiGambar = ['gunting', 'kertas', 'batu'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + isiGambar[i++] + '.jpg');
        if(i === isiGambar.length){
            i = 0;
        }
    },100
    )
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pilihanMain){
    pilihanMain.addEventListener('click', function(){
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pilihanMain.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    acakGambar();

    setTimeout(function(){
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
        // teks info
        const infoHasil = document.querySelector('.info');
        infoHasil.innerHTML = hasil;
    },1000)

    
    })
})

