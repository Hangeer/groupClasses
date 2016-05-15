function phone(string, num) {
    let reg = new RegExp(num, "g");
    let count = 0;
    let res = {};
    let resStr = "";
    
     function findStr (_str, _num) {
       let _reg = new RegExp("(\n|\/)(.+)" + _num + ".*\n", "g");
       let _res = _str.match(_reg)[0].replace(/\n|\/|.\+|\,|\;|\+|\_|\!|\?/g, " ");
       let _phone = _res.match(/(\d{1,}\-){3}\d{1,}/)[0];
       let _name = _res.match(/<.+>/)[0].replace(/<|>/g, "");
       let _addr = _res.replace(/(\d{1,}\-){3}\d{1,}/g, "").replace(/<.+>/g, "").replace(/\s{1,}/g, " ").replace(/^(\s+)|(\s+)$/g, "");
        
       return "Phone => " + _phone + ", Name => " + _name + ", Address => " + _addr; 
       
     }  
    
    do {
      res = reg.exec(string);
      count ++;
    } while (res !== null)
    
    switch (count) {
      case 1:
        resStr = "Error => Not found: " + num;
        break;
      case 2:
        resStr = findStr(string, num);
        break;
      default:
        resStr = "Error => Too many people: " + num;
        break;
    }
    
    return resStr;
}