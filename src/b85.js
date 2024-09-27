const _b85alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~";

function _85encode(b, chars, chars2, pad = false, foldnuls = false, foldspaces = false) {
    const padding = (4 - (b.length % 4)) % 4;
    if (padding) {
        b = new Uint8Array([...b, ...new Uint8Array(padding)]);
    }

    const words = [];
    for (let i = 0; i < b.length; i += 4) {
        const word = (b[i] * 16777216) + (b[i + 1] * 65536) + (b[i + 2] * 256) + b[i + 3];
        words.push(word);
    }

    const chunks = words.map(word => {
        if (foldnuls && word === 0) {
            return 'z';
        } else if (foldspaces && word === 0x20202020) {
            return 'y';
        } else {
            return (
                chars2[Math.floor(word / 614125)] +
                chars2[Math.floor(word / 85) % 7225] +
                chars[word % 85]
            );
        }
    });

    if (padding && !pad) {
        if (chunks[chunks.length - 1] === 'z') {
            chunks[chunks.length - 1] = chars[0].repeat(5);
        }
        chunks[chunks.length - 1] = chunks[chunks.length - 1].slice(0, -padding);
    }

    return chunks.join('');
}

function b85encode(b, pad = false) {
    const _b85chars = Array.from(_b85alphabet).map(c => String.fromCharCode(c.charCodeAt(0)));
    const _b85chars2 = _b85chars.flatMap(a => _b85chars.map(b => a + b));
    return _85encode(b, _b85chars, _b85chars2, pad);
}
