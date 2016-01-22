describe('pizza', function() {

  it("is a number divisible by 15, change to pizzapie", function() {
    expect(pizza(15)).to.equal("pizzapie");
  });

  it("is a number divisible by 3, change to pizza", function() {
    expect(pizza(3)).to.equal("pizza");
  });

  it("is a number divisible by 5, change to pie", function() {
    expect(pizza(5)).to.equal("pie");
  });

  it("is a number not divisible by 3, 5, 15, return number", function() {
    expect(pizza(7)).to.equal(true);
  });









});
