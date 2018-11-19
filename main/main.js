module.exports = function main(inputs) {
var expectText = '***<store earning no money>Receipt ***\n';
var array_new = [];
var count = 0;
var total = 0;

inputs.forEach(function (n){
        if (array_new.includes(n.Name)){
        }
        else{
            array_new.push(n.Name);
            inputs.forEach(function (j) {
                if (j.Name == n.Name){
                    count += 1;
                }
            });
            if (n.Unit != 'a')
                expectText += 'Name: ' + n.Name + ', Quantity: ' + count + ' ' + n.Unit + 's, Unit price: ' + n.Price.toFixed(2) + ' (yuan), Subtotal: ' + ((n.Price)*count).toFixed(2) + ' (yuan)\n';
            else
                expectText += 'Name: ' + n.Name + ', Quantity: ' + count + ', Unit price: ' + n.Price.toFixed(2) + ' (yuan), Subtotal: ' + ((n.Price)*count).toFixed(2) + ' (yuan)\n';
            total += (n.Price)*count;
            count = 0;
            }
    });

    expectText += '----------------------\n' +
        'Total: ' + total.toFixed(2) + ' (yuan)\n' +
        '**********************\n'
        console.log(expectText);

return expectText;
};