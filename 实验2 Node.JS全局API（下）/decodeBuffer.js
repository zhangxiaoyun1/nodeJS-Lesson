var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf=Buffer.from(base64str,"base64");
console.log(buf.toString("utf-8"));