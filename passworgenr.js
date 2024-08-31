
function generatePass() {
    const lcase = document.getElementById('lcase').checked;
    const ucase = document.getElementById('ucase').checked;
    const num = document.getElementById('num').checked;
    const sumb = document.getElementById('sumb').checked;
    const len = document.getElementById('psslong').value;
    const res = document.getElementById('res');
    
    const sumbch = `!@#%^&*()+[]{}|;:,.<>?/`;
    const numch = '0123456789';
    const lcasech = 'abcdefghijklmnopqrstuvwxyz';
    const ucasech = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (!(lcase || ucase || num || sumb)) {
        res.style.display = 'inline-block'
        res.innerHTML = "Choose the type of characters";
        
        return;
    }
    
    let carecter = '';
    if (lcase) carecter += lcasech;
    if (ucase) carecter += ucasech;
    if (num) carecter += numch;
    if (sumb) carecter += sumbch;
    
    let password = '';
    for (let i = 0; i < len; i++) {
        let n = Math.floor(Math.random() * carecter.length);
        password += carecter[n];
    }
    res.style.display = 'inline-block'
    res.innerHTML = password;
}
