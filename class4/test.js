var dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
+ "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
+ "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
+ "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
+ "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
+ "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
+ "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
+ "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
+ "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
+ "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
+ "<P Salinge> Main Street, +1-098-512-2222, Denve\n";

function phone(string, num) {
    var reg = new RegExp(num, "g");
    var count = 0;
    var res = [];

    do {
        res = reg.exec(string);
        count++
    } while (res != null)

    /*
        这里 count 几种情况
        1
        2
        >2

        switch
    */

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

    function findStr (_str, _num) {
        var _reg = new RegExp("(\n|\/)(.*)" + _num + ".*\n", "g");
        var _res = _str.match(_reg)[0].replace(/\n|\/|.\+|\,|\;|\+|\_|\!|\?/g, " ").replace(/^(\s+)|(\s+)$/g, "");
        var _phone = _res.match(/(\d{1,}\-){3}\d{1,}/)[0];
        var _name = _res.match(/<.+>/)[0].replace(/<|>/g, "");
        var _addr = _res.replace(/(\d{1,}\-){3}\d{1,}/g, "").replace(/<.+>/g, "").replace(/\s{1,}/g, " ").replace(/^(\s+)|(\s+)$/g, "");

        return "Phone => " + _phone + ", Name => " + _name + ", Address => " + _addr;

    }
    
}
/*
    string 字符串
    num 数字
    
    从字符串中找到匹配的记录，然后返回
*/

phone(dr, 1-541-754-3010);