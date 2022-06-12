
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 5000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('53.03');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 40000,
    years: 30,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('252.83');
});

it("should handle high loan amounts", function () {
// ..
const values = {
  amount: 1000000,
  years: 10,
  rate: 4
};
expect(calculateMonthlyPayment(values)).toEqual('10124.51');
});
