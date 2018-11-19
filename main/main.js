module.exports = function printInventory(inputs) {

var array_new = [];
var neverExist = true;
var output_string = '';

for(var i = 0; i < inputs.length; i++){
    for (var j = 0; j < array_new.length; j++){
        if (array_new[j].Barcode == inputs[i]) {
            array_new[i].count += 1;
            neverExist = false;
        }else{
            neverExist = true
        }
    }
    if(neverExist){
        output.push({barcode:inputs[i].Barcode, name:inputs[i].Name, unit:inputs[i].Unit, price:inputs[i].Price, count:1});
    }
}

function caclSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += (array[i].price);
    }
    return sum;
};

for(var k = 0; k < array_new; k++) {
    output_string += 'Name: '+ array_new[k].name +', Quantity: 5 bottles, Unit price: ' + array_new[k].price +' (yuan), Subtotal: ' + array_new[k].price * array_new[k].sum +'(yuan)\n'
}


return
    '***<store earning no money>Receipt ***\n' +
    output_string +
    '----------------------\n' +
    'Total: '+ caclSum(array_new) +' (yuan)\n' +
    '**********************\n';


};