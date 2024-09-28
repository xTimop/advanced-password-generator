function hashPassword(event){
    let password = document.getElementById('password').value;
    if(password == '') {
        document.getElementById('result').style.display = 'none';
        return;
    };
    let service = document.getElementById('service').value.toLowerCase();
    if(service == '') {
        document.getElementById('result').style.display = 'none';
        return;
    };
    let info = document.getElementById('info').value.toLowerCase();

    res = b85encode(fromHexString(sha3_256(concat3(
        byteHashOfStr(password),
        byteHashOfStr(service),
        byteHashOfStr(info)
    ))));

    document.getElementById('result').value = res;
    document.getElementById('result').style.display = '';
}
