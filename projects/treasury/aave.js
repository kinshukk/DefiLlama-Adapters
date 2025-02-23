const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasuryContractsETH = [
  "0x89c51828427f70d77875c6747759fb17ba10ceb0", //Aave Grants DAO
  "0xe3d9988f676457123c5fd01297605efdd0cba1ae", //Aave V1 Treasury
  "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c", //Aave V2 Collector
  "0x25f2226b597e8f9514b3f68f00f494cf4f286491", //Aave Ecosystem Reserve
  "0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5", //V2 Incentives Controller
];

const treasuryContractsMATIC = [
  "0x7734280A4337F37Fbf4651073Db7c28C80B339e9", //Aave V2 Collector
  "0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383" //Aave V3 Treasury
];

const treasuryContractsAvax = [
  "0x467b92aF281d14cB6809913AD016a607b5ba8A36", //Aave V2 Collector
  "0x5ba7fd868c40c16f7aDfAe6CF87121E13FC2F7a0" //Aave V3 Treasury
];

const treasuryContractsFantom = [
  "0xBe85413851D195fC6341619cD68BfDc26a25b928", //Treasury V3
];

const aaveTreasuryOptimism = ["0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf"]
const aaveTreasuryArbitrum = ["0x053D55f9B5AF8694c503EB288a1B7E552f590710"]

const AAVE = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
const AAVEPOLYGON = '0xD6DF932A45C0f255f85145f286eA0b292B21C90B';
const AAVEAVAX = '0x63a72806098bd3d9520cc43356dd78afe5d386d9';
const AAVEARBITRUM = '0xba5ddd1f9d7f570dc94a51479a000e3bce967196';
const AAVEOPTIMISM = '0x76fb31fb4af56892a25e32cfc43de717950c9278';
const AAVEFANTOM = "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        '0xBcca60bB61934080951369a648Fb03DF4F96263C', // aUSDC
        '0xd24946147829DEaA935bE2aD85A3291dbf109c80', // ammUSDC
        '0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c', // aEthUSDC
        '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
        '0x028171bca77440897b824ca71d1c56cac55b68a3', // aDAI
        '0x79bE75FFC64DD58e66787E4Eae470c8a1FD08ba4', // ammDAI
        '0x018008bfb33d285247A21d44E50697654f754e63', // aEthDAI
        '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
        '0x3ed3b47dd13ec9a98b44e6204a523e766b225811', // aUSDT
        '0x17a79792Fe6fE5C95dFE95Fe3fCEE3CAf4fE4Cb7', // ammUSDT
        '0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B', // aAAVE
        '0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9', // aEthAAVE
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
        '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656', // aWBTC
        '0x13B2f6928D7204328b0E8E4BCd0379aA06EA21FA', // ammWBTC
        '0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8', // aEthWBTC
        '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', // wstETH
        '0x0B925eD163218f6662a35e0f0371Ac234f9E9371', // aEthwstETH
        '0xba100000625a3754423978a60c9317c58a424e3D', // BAL
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e', // aWETH
        '0xf9Fb4AD91812b704Ba883B11d2B576E890a6730A', // ammWETH
        '0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8', // aEthWETH
        '0xd533a949740bb3306d119cc777fa900ba034cd52', // CRV
        '0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1', // aCRV
        '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F', // SNX
        '0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2', // aSNX
        '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
        '0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0', // aLINK
        '0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a', // aEthLINK
        '0xba100000625a3754423978a60c9317c58a424e3d', // BAL
        '0x272F97b7a56a387aE942350bBC7Df5700f8a4576', // aBAL
        '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // UNI
        '0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1', // aUNI
        '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', // MKR
        '0xc713e5E149D5D0715DcD1c156a020976e7E56B88', // aMKR
        '0x4Fabb145d64652a948d72533023f6E7A623C7C53', // BUSD
        '0xA361718326c15715591c299427c62086F69923D9', // aBUSD
        '0x853d955acef822db058eb8505911ed77f175b99e', // FRAX
        '0xd4937682df3C8aEF4FE912A96A74121C0829E664', // aFRAX
        '0x57ab1ec28d129707052df4df418d58a2d46d5f51', // sUSD
        '0x6C5024Cd4F8A59110119C56f8933403A539555EB', // aSUSD
        '0x5f98805a4e8be255a32880fdec7f6728c6568ba0', // LUSD
        '0xce1871f791548600cb59efbefFC9c38719142079', // aLUSD
        '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd', // GUSD
        '0xD37EE7e4f452C6638c96536e68090De8cBcdb583', // aGUSD
        '0x0000000000085d4780b73119b644ae5ecd22b376', // TUSD
        '0x101cc05f4A51C0319f570d5E146a8C625198e636', // aTUSD
        '0x8e870d67f660d95d5be530380d0ec0bd388289e1', // USDP
        '0x2e8F4bdbE3d47d7d7DE490437AeA9915D930F1A3', // aUSDP
        '0x111111111117dc0aa78b770fa6a738034120c302', // 1INCH
        '0xB29130CBcC3F791f077eAdE0266168E808E5151e', // a1INCH
        '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b', // DPI
        '0x6F634c6135D2EBD550000ac92F494F9CB8183dAe', // aDPI
        '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72', // ENS
        '0x9a14e23A58edf4EFDcB360f68cd1b95ce2081a2F', // aENS
        '0xae7ab96520de3a18e5e111b5eaab095312d7fe84', // stETH
        '0x1982b2F5814301d4e9a8b0201555376e62F82428', // aSTETH
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161', // AMPL
        '0x1E6bb68Acec8fefBD87D192bE09bb274170a0548', // aAMPL
        '0x956f47f50a910163d8bf957cf5846d573e7f87ca', // FEI
        '0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3', // aFEI
        '0xa693b19d2931d498c5b318df961919bb4aee87a5', // UST
        '0xc2e2152647F4C26028482Efaf64b2Aa28779EFC4', // aUST
        '0x0d8775f648430679a709e98d2b0cb6250d2887ef', // BAT
        '0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1', // aBAT
        '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b', // CVX
        '0x952749E07d7157bb9644A894dFAF3Bad5eF6D918', // aCVX
        '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c', // ENJ
        '0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef', // aENJ
        '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', // MANA
        '0xa685a61171bb30d4072B338c80Cb7b2c865c873E', // aMANA
        '0xdd974d5c2e2928dea5f71b9825b8b646686bd200', // KNC
        '0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA', // aKNC
        '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919', // RAI
        '0xc9BC48c72154ef3e5425641a3c747242112a46AF', // aRAI
        '0x408e41876cccdc0f92210600ef50372656052a38', // REN
        '0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a', // aREN
        '0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5', // RENFIL
        '0x514cd6756CCBe28772d4Cb81bC3156BA9d1744aa', // aRENFIL
        '0xe41d2489571d322189246dafa5ebde1f4699f498', // ZRX
        '0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e', // aZRX
        '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e', // YFI
        '0x5165d24277cD063F5ac44Efd447B27025e888f37', // aYFI
        '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', // xSUSHI
        '0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a', // aXSUSHI
     ],
    owners: treasuryContractsETH,
    ownTokens: [AAVE],
  },
  polygon: {
    tokens: [
      nullAddress,
      '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', // DAI
      '0x27F8D03b3a2196956ED754baDc28D73be8830A6e', // amDAI
      '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE', // aPOLDAI
      '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
      '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F', // amUSDC
      '0x625E7708f30cA75bfd92586e17077590C60eb4cD', // aPolUSDC
      '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // USDT
      '0x60D55F02A771d515e077c9C2403a1ef324885CeC', // amUSDT
      '0x6ab707Aca953eDAeFBc4fD23bA73294241490620', // aPolUSDT
      '0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360', // amAAVE
      '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375', // aPolAAVE
      '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', // WBTC
      '0x5c2ed810328349100A66B82b78a1791B101C9D61', // amWBTC
      '0x078f358208685046a11C85e8ad32895DED33A249', // aPolWBTC
      '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
      '0x28424507fefb6f7f8E9D3860F56504E4e5f5f390', // amWETH
      '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8', // aPolWETH
      '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
      '0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4', // amWMATIC
      '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97', // aPolWMATIC
      '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3', // BAL
      '0xc4195D4060DaEac44058Ed668AA5EfEc50D77ff6', // amBAL
      '0x8ffDf2DE812095b1D19CB146E4c004587C0A0692', // aPolBAL
      '0x172370d5Cd63279eFa6d502DAB29171933a610AF', // CRV
      '0x3Df8f92b7E798820ddcCA2EBEA7BAbda2c90c4aD', // amCRV
      '0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf', // aPolCRV
      '0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369', // DPI
      '0x81fB82aAcB4aBE262fc57F06fD4c1d2De347D7B1', // amDPI
      '0x724dc807b04555b71ed48a6896b6F41593b8C637', // aPolDPI
      '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7', // GHST
      '0x080b5BF8f360F624628E0fb961F4e67c9e3c7CF1', // amGHST
      '0x8Eb270e296023E9D92081fdF967dDd7878724424', // aPolGHST
      '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39', // LINK
      '0x0Ca2e42e8c21954af73Bc9af1213E4e81D6a669A', // amLINK
      '0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530', // aPolLINK
      '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a', // SUSHI
      '0x21eC9431B5B55c5339Eb1AE7582763087F98FAc2', // amSUSHI
      '0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA', // aPolSUSHI
      '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99', // EURS
      '0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5', // aPolEURS
      '0xa3fa99a148fa48d14ed51d610c367c61876997f1', // MAI
      '0xeBe517846d0F36eCEd99C735cbF6131e1fEB775D', // aPolMAI
      '0xfa68fb4628dff1028cfec22b4162fccd0d45efb6', // MATICX
      '0x80cA0d8C38d2e2BcbaB66aA1648Bd1C7160500FE', // aPolMATICX
      '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4', // stMATIC
      '0xEA1132120ddcDDA2F119e99Fa7A27a0d036F7Ac9', // aPolSTMATIC
      '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c', // jEUR
      '0x6533afac2E7BCCB20dca161449A13A32D391fb00', // aPolJEUR
      '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4', //agEUR
      '0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77', //aPolAGEUR
    ],
    owners: treasuryContractsMATIC,
    ownTokens: [AAVEPOLYGON],
  },
  avax: {
    tokens: [
      '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', // DAI
      '0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a', // avDAI
      '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE', // aAvaDAI
      '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', // USDC
      '0x46A51127C3ce23fb7AB1DE06226147F446e4a857', // avUSDC
      '0x625E7708f30cA75bfd92586e17077590C60eb4cD', // aAvaUSDC
      '0xc7198437980c041c805a1edcba50c1ce5db95118', // USDT
      '0x532E6537FEA298397212F09A61e03311686f548e', // avUSDT
      '0x6ab707Aca953eDAeFBc4fD23bA73294241490620', // aAvaUSDT
      '0xD45B7c061016102f9FA220502908f2c0f1add1D7', // avAAVE
      '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375', // aAvaAAVE
      '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
      '0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B', // avWAVAX
      '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97', // aAvaWAVAX
      '0x50b7545627a5162f82a992c33b87adc75187b218', // WBTC
      '0x686bEF2417b6Dc32C50a3cBfbCC3bb60E1e9a15D', // aWBTC
      '0x078f358208685046a11C85e8ad32895DED33A249', // aAvaWBTC
      '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH
      '0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21', // aWETH
      '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8', // aAvaWETH
      '0x5947bb275c521040051d82396192181b413227a3', // LINK
      '0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530', // aAvaLINK
      '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64', // FRAX
      '0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA', // aAvaFRAX
      '0x5c49b268c9841aff1cc3b0a418ff5c3442ee3f3b', // MAI
      '0x8Eb270e296023E9D92081fdF967dDd7878724424', // aAvaMAI
      '0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be', // sAVAX
      '0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf', // aAvaSAVAX
      '0x152b9d0fdc40c096757f570a51e494bd4b943e50', // BTC.b
      '0x8ffDf2DE812095b1D19CB146E4c004587C0A0692', // aAvaBTC.b
    ],
    owners: treasuryContractsAvax,
    ownTokens: [AAVEAVAX],
  },
  arbitrum: {
    tokens: [
      '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
      '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE', // aArbDAI
      '0xd22a58f79e9481d1a88e00c343885a588b34b68b', // EURS
      '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97', // aArbEURS
      '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC
      '0x625E7708f30cA75bfd92586e17077590C60eb4cD', // aArbUSDC
      '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
      '0x6ab707Aca953eDAeFBc4fD23bA73294241490620', // aArbUSDT
      '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375', // aArbAAVE
      '0xf97f4df75117a78c1a5a0dbb814af92458539fb4', // LINK
      '0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530', // aArbLINK
      '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f', // WBTC
      '0x078f358208685046a11C85e8ad32895DED33A249', // aArbWBTC
      '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
      '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8', // aArbWETH
    ],
    owners: aaveTreasuryArbitrum,
    ownTokens: [AAVEARBITRUM],
  },
  optimism: {
    tokens: [
      '0x4200000000000000000000000000000000000006', // WETH
      '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8', // aOptWETH
      '0x68f180fcce6836688e9084f035309e29bf0a2095', // WBTC
      '0x078f358208685046a11C85e8ad32895DED33A249', // aOptWBTC
      '0x4200000000000000000000000000000000000042', // OP
      '0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf', // aOptOP
      '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
      '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE', // aOptDAI
      '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9', // sUSD
      '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97', // aOptSUSD
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // USDC
      '0x625E7708f30cA75bfd92586e17077590C60eb4cD', // aOptUSDC
      '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58', // USDT
      '0x6ab707Aca953eDAeFBc4fD23bA73294241490620', // aOptUSDT
      '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375', // aOptAAVE
      '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6', // LINK
      '0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530', // aOptLINK
    ],
    owners: aaveTreasuryOptimism,
    ownTokens: [AAVEOPTIMISM],
  },
  fantom: {
    tokens: [
      "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf", // aFanCRV
      "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE", // aFanDAI
      "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530", // aFanLINK
      "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA", // aFanSUSHI
      "0x625E7708f30cA75bfd92586e17077590C60eb4cD", // aFanUSDC
      "0x6ab707Aca953eDAeFBc4fD23bA73294241490620", // aFanUSDT
      "0x078f358208685046a11C85e8ad32895DED33A249", // aFanWBTC
      "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8", // aFanWETH
      "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97", // aFanWFTM
    ],
    owners: treasuryContractsFantom,
    ownTokens: [AAVEFANTOM]
  },
})
