
it('should calculate the monthly rate correctly', function () {
const values = { 
    amount: 120000,
    years: 10,
    rate:4.5
};
expect(calculateMonthlyPayment(values)).toEqual('1243.66');
});


it("should return a result with 2 decimal places", function() {
 
  const values = { 
    amount: 34000,
    years: 10,
    rate:6.5
}
expect(calculateMonthlyPayment(values)).toEqual('386.06');
});


it('should calculate the monthly high rate correctly', function(){
const values = {
  amount: 1500,
  years: 7,
  rate: 89
};
expect(calculateMonthlyPayment(values)).toEqual('111.52');

});