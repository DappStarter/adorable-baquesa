require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain equip imitate private fresh segment'; 
let testAccounts = [
"0xd403dfe11041e8de29f1685067319dc17d00719ad9f3a00fac7560a3148ac363",
"0xc58b2a281e33a08168049057433b2e638b418a8308d509f0ad93cf3207a1e647",
"0x3ac94faab9fcd7a9c204434976ba1abdc822ac9dae89917e5ef30626445296d2",
"0xb7ad495ae3549d11f3f2546bdcbf21d677694c18843c6224d6cd3ff63c1bcaad",
"0xc13f31e682172d8e446877a0b162df3eef294a119b9b4844a81737dbdb489a8a",
"0xc4590fb3f7986f7c75c00367181572685c8cb3c354b7f86bc451b694d4265624",
"0x51bbcd5c4d28727067e649ba6e5184f5bcd431252762231f2781269bfff94127",
"0x444738bc7b1b25e6bcaf4953b3f68221fb0170bbf27733956619d8fb167c283c",
"0x99d2875b713baf33faaa923bcf02ccf92fdcf8cfd07d8ca5ba4dd113ad1e72e7",
"0xf3dd02c1aab468b2f5aadad4c48d964918d85a885c678003bc74b016f55f8b2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
