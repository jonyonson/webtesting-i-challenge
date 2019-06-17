const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('should restore durability to 100', () => {
      const item = { durability: 0 };
      expect(enhancer.repair(item).durability).toBe(100);
    });

    describe('succeed()', () => {
      it('should increase enhancement by 1 if the enhancement level is less than 20', () => {
        const item = { enhancement: 10 };
        expect(enhancer.succeed(item).enhancement).toBe(11);
      });

      it('should not increase enhancement if enhancement level is 20', () => {
        const item = { enhancement: 20 };
        expect(enhancer.succeed(item).enhancement).toBe(20);
      });

      it('should not change durability', () => {
        const item = { enhancement: 15, durability: 80 };
        expect(enhancer.succeed(item).durability).toBe(80);
      });
    });

    describe('fail()', () => {
      it('should decrease durability by 5 if enhancement is less than 15', () => {
        const item = { enhancement: 10, durability: 80 };
        expect(enhancer.fail(item).durability).toBe(75);
      });

      it('should decrease durability by 10 if enhancement is 15 or more', () => {
        const item = { enhancement: 16, durability: 90 };
        expect(enhancer.fail(item).durability).toBe(80);
      });

      it('should decrease enhancement by 1 if enhancement is greater than 16', () => {
        const item = { enhancement: 18 };
        expect(enhancer.fail(item).enhancement).toBe(17);
      });

      it('should not decrease durability to less than 0', () => {
        const item = { durability: 5, enhancement: 20 };
        expect(enhancer.fail(item).durability).toBe(0);
      });
    });
  });
});
