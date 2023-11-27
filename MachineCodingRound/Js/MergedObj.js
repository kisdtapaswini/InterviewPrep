// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// My way : ---------------
let users = [{"name" : "Mili", "bank": "HDFC"}, {"name" : "Eli", "bank": "SBI"},
{"name" : "Pitu", "bank": "SBI"}];

let bank = [{"bank" : "HDFC", "services" : ["s1", "s2", "s3"]},
{"bank" : "SBI", "services" : ["sbi1", "sbi2", "sbi3"]}];

let mergedObj = [...users];

mergedObj.forEach((each)=>{
    let bankName = each.bank;
    let filteredObj = bank.filter((_)=>_.bank == bankName)
    each.services = filteredObj[0].services
})

console.log(mergedObj);

