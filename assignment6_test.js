
const expect = chai.expect


describe('MyFunctions' , function() {
    describe('#haveWinner' , function() {
        it('should evaluate who the winner of the game is', function(){
            var x = haveWinner(26,0);
            expect(x).to.equal(26);
        });

        it('should throw an error if lower score wins'), function(){
            expect(function() {
                haveWinner(26,0);
            }).to.throw(Error)
        }
    });
});