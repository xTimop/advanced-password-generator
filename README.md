# Advanced Password Generator

The **Advanced Password Generator** is a web-based application designed to securely create unique passwords based on a user-provided secret password, the name of a service, and optional additional information (like an account name). This tool uses advanced hashing algorithms to ensure the generated passwords are secure and easy to manage.

This can be useful if your password is not strong enough, or if you need to register many accounts on many sites and you can't fit so many passwords in your head.

The main goal of the project is to use different passwords on different sites while memorizing just one. This is better than various programs like KeePass, because passwords are not stored anywhere even in encrypted form. If you lose access to your device, you can recover all passwords.

## Features

- Generates unique passwords based on user input.
- Uses SHA-3 (KECCAK) hashing for enhanced security.
- Allows for optional input (such as account name) to handle multiple accounts for the same service.
- Easy-to-use interface with clear prompts.

## Technologies Used

- **b85.js**: Base85 algorithm translated from python built-in base64 library (translation was painful)
- **sha3.js**: Implements the SHA-3 hashing algorithm. Source: https://github.com/emn178/js-sha3

## How It Works

1. Users enter their secret password, the name of the service they are using, and optionally additional information.
2. When the form is submitted, the `hashPassword` function is triggered:
   - It combines the SHA-3-256 hashes of the password, service name, and additional info.
   - The combined data is then hashed using SHA-3 as bytes.
   - Finally, the result is encoded in Base85 and displayed to the user. Result looks like: ```{^n82c9<jRTYX~WVcUaDlr&FqI+t`mQTGKMF#Vqi```  
  
Same algorithm in python:
```python
from hashlib import sha3_256
import base64

passw = getpass.getpass('Secret password: ').encode('utf-8')
service = input('Service name: ').lower().encode('utf-8')
info = input('Any other info (e.g. account name): ').lower().encode('utf-8')

passw = sha3_256(passw).digest()
service = sha3_256(service).digest()
info = sha3_256(info).digest()

res = sha3_256(passw+service+info).digest()
print(base64.b85encode(res).decode('ascii'))
```

## Installation

Use this [online demo](https://github.com/xTimop/advanced-password-generator), or:
1. Download `encryptor.min.html` from the [releases](https://github.com/xTimop/advanced-password-generator/releases/latest) tab
2. Open `encryptor.min.html` in your preferred web browser.

## Usage

1. Enter your secret password in the designated input field. (only you should know it, store it in a safe place. You can use it for all the websites)
2. Provide the name of the service you want to generate password for (e.g., "Discord", "Google", "Reddit").
3. Optionally enter any additional information related to the account, if you want to create multiple passwords for the same service.
4. Click the "Generate password" button to get your unique password.
5. Copy the generated password from the text field under the button.

Make sure you remember all of your inputs.

You can perform the following steps to recover a previously generated password, but be careful: all the data you enter must be exactly the same

## License

This project is open-source and available under the MIT License. Feel free to modify and improve upon the existing code as you see fit.
