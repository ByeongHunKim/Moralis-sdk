import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

const runApp = async () => {
  await Moralis.start({
    apiKey: '',
    // ...and any other configuration
  });

  const address = '';

  // BNBT : EvmChain.BSC_TESTNET
  const chain = EvmChain.BSC;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
  // https://bscscan.com/address/0xd8da6bf26964af9d7eed9e03e53415d37aa96045#tokentxnsErc1155
  // 모두 3개 보유하고 있는 것 확인 되었음 721개, 1155 2개
};

runApp();
