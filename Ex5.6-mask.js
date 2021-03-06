/* Usually when you buy something, you're asked whether your credit card number, phone number
or answer to your most secret question is still correct. However, since someone could look over
your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. */

const maskify = (str) => {
  let maskStr = str;
  if (maskStr.length > 4) {
    for (let i = 0; i < str.length - 4; i++) {
      maskStr = maskStr.replace(str[i], "#");
    }
    return maskStr;
  }
  return str;
};

// testing:
console.log(maskify("64607935616")); // ==> #######5616
console.log(maskify("4556364607935616")); // ==> ############5616
console.log(maskify("456")); // ==> 456
console.log(maskify("1234674")); // ==> ###4674
console.log(maskify("q   wehes")); // ==> #####ehes
