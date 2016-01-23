describe('numReplace', function() {

  it("is a number divisible by 3, change to pizza!", function() {
    expect(numReplace(3)).to.equal[ ' 1', '2', ' pizza!'];
  });

  it("is a number divisible by 5, change to pie!", function() {
    expect(numReplace(5)).to.equal[ ' 1', ' 2', ' pizza!', ' 4', ' pie!' ];
  });

  it("is a number divisible by 15, change to pizza-pie!", function() {
    expect(numReplace(15)).to.equal[ Array(15) ];
  });

  it("is a number not divisible by 3, 5, 15, return number", function() {
    expect(numReplace(7)).to.equal[ Array(7) ];
  });

});
