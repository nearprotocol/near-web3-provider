const utils = require('../src/utils');

describe('utils', () => {
    describe('#remove0x', () => {
        test('removes 0x from value', () => {
            const value = '0x0000';
            const result = utils.remove0x(value);
            expect(result).toEqual('0000');
        });

        test('returns string', () => {
            const value = '0x0000';
            const result = utils.remove0x(value);
            expect(typeof result).toEqual('string');
        });

        test('errors if arg is not string', () => {
            const value = 10;
            expect(() => utils.remove0x(value)).toThrow();
        });
    });

    describe('#include0x', () => {
        test('adds 0x to value without 0x', () => {
            const value = '0000';
            const result = utils.include0x(value);
            expect(result).toEqual('0x0000');
        });

        test('does not add extra 0x if value already contains 0x', () => {
            const value = '0x0000';
            const result = utils.include0x(value);
            expect(result).toEqual('0x0000');
        });

        test('returns string', () => {
            const value = '0x0000';
            const result = utils.include0x(value);
            expect(typeof result).toEqual('string');
        });

        test('errors if arg is not string', () => {
            const value = 10;
            expect(() => utils.include0x(value)).toThrow();
        });
    });

    describe('#isHex', () => {
        test('returns true if string is hex', () => {
            const value = '0x0000';
            const isHex = utils.isHex(value);
            expect(isHex).toBe(true);
        });

        test('returns false if string is not hex', () => {
            const value = 'HyvTTSooKwerRvo1bv5y16SNNCQivBtYtreHnDwdp4m9';
            const isHex = utils.isHex(value);
            expect(isHex).toBe(false);
        });

        test('errors if arg is not string', () => {
            const value = 12;
            expect(() => utils.isHex(value)).toThrow();
        });
    });

    describe('#isValidAccountID', () => {
        test('returns true if string is valid', () => {
            const value = 'abcd-1234.fffff';
            const isValidAccountID = utils.isValidAccountID(value);
            expect(isValidAccountID).toBe(true);
        });

        test('returns false if string has any capital letters', () => {
            const value = 'abcdE123';
            expect(utils.isValidAccountID(value)).toBe(false);
        });

        test('returns false if string has invalid symbols', () => {
            const value = "invalid.&&id";
            expect(utils.isValidAccountID(value)).toBe(false);
        });

        test('returns false if there are consecutive periods', () => {
            const value = "invalid..id";
            expect(utils.isValidAccountID(value)).toBe(false);
        });

        test('returns false if it is less than 2 characters', () => {
            const value = "e";
            expect(utils.isValidAccountID(value)).toBe(false);
        });

        test('returns false if it is more than 64 characters', () => {
            const value = "e".repeat(65);
            expect(utils.isValidAccountID(value)).toBe(false);
        });

        test('throws an error if value is not a string', () => {
            const value = 123456;
            expect(() => utils.isValidAccountID(value)).toThrow();
        });
    });

    describe('#decToHex', () => {

    });

    describe('#hexToDec', () => {

    });

    describe('#base58ToHex', () => {

    });

    describe('#hexToBase58', () => {

    });

    describe('#base64ToHex', () => {

    });

    describe('#base64ToString', () => {

    });

    describe('#convertTimestamp', () => {

    });

    describe('#getTxHashAndAccountId', () => {
        test('splits txHash and accountId', () => {
            const txHashAndAccountId = '0x0000:accountId';
            const result = utils.getTxHashAndAccountId(txHashAndAccountId);
            expect(typeof result).toEqual('object');
            expect(result.txHash).toEqual('0x0000');
            expect(result.accountId).toEqual('accountId');
        });
    });

    describe('#nearAccountToEvmAddress', () => {
        test('calculates addresses correctly', () => {
            expect(utils.nearAccountToEvmAddress('test.near'))
                .toEqual('0xcbda96b3f2b8eb962f97ae50c3852ca976740e2b');
        });
    });
});
