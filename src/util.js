function stringToUint8Array(str) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
}

const fromHexString = (hexString) =>
    Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

function concat3(arr_1, arr_2, arr_3) {
    var mergedArray = new Uint8Array(arr_1.length + arr_2.length + arr_3.length);
    mergedArray.set(arr_1);
    mergedArray.set(arr_2, arr_1.length);
    mergedArray.set(arr_3, arr_1.length+arr_2.length)
    return mergedArray
}

const byteHashOfStr = (str) =>
    fromHexString(sha3_256(stringToUint8Array(str)));
