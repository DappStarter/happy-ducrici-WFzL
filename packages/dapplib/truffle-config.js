require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone deny miss essay gloom end army gauge'; 
let testAccounts = [
"0xd799e4f61ccdfbe88396fca1fd84f20d60d6356b6823f31683b271595df85864",
"0xd7702a417369dc43ab9ed3d8a8164dfd0a9813bda3c8b69ba0fd19f11387d420",
"0x12970686bd9cd4e5505de7eae9c13c963bd2d79aa5311402be9c3701af806d32",
"0x1b85d3e0960822664046925a81b9e00e0a87bb781642fc6d393cc18ca00df9e5",
"0x7f29d240514a72afaf27a7fb3a19bb6c6e7853b7a733b00dfdb68921e32aa414",
"0x6d160d9b42cbc14fb949d8707c687d6c050e23c8a1073b672b751c0182790760",
"0x583ac9b9444c7c7244016ff1820f39b0ebf54abbfa7f4f55a684ef0d7f2cc8b6",
"0x1bea12d4dfae5b7b2d5e06eed71fc754874445f8d686371472c7e50fe0ce3c8e",
"0xffd31c017bdbf1638ac05e981fc059b230ac8fe3f24c713f41e7bd5432209853",
"0x6ed3d6d1905674e12e0ec9bd351ee33eccc2d20e22b58e190cf25be30c5ba0cd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


