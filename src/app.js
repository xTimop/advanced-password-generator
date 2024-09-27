function hashPassword(event){
    event.preventDefault()

    let password = document.getElementById('password').value;
    let service = document.getElementById('service').value.toLowerCase();
    let info = document.getElementById('info').value.toLowerCase();

    res = b85encode(fromHexString(sha3_256(concat3(
        byteHashOfStr(password),
        byteHashOfStr(service),
        byteHashOfStr(info)
    ))));

    document.getElementById('result').value = res;
    document.getElementById('result').style.display = '';
}
