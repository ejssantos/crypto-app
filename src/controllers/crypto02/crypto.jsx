import React from "react";
import CryptoJS from "crypto-js";

const secretPass = "XkhZG4fW2t2W";

class Crypto extends React.Component {

    encryptedData(text) {
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(text),
            secretPass
        ).toString();
    
        return data;
    };
    
    decryptedData(text) {
        const bytes = CryptoJS.AES.decrypt(text, secretPass);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
        return data;
    };
}

export default Crypto;