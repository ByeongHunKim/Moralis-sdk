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

  // Get the nfts
  const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
    limit: 10,
  });

  console.log('1. nftsBalances:', nftsBalances);

  // Format the output to return name, amount and metadata
  const nfts = nftsBalances.result.map(nft => ({
    name: nft.result.name,
    amount: nft.result.amount,
    metadata: nft.result.metadata,
  }));

  console.log('2. nfts:', nfts);
};

runApp();
