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
  const ticker = chain['_chainlistData']['shortName'];
  const tickerToUpper = ticker.toUpperCase();

  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  console.log('1. nativeBalance:', nativeBalance); // 입력한 지갑의 wei 단위의 메인넷 코인 잔액

  const native = nativeBalance.result.balance.ether;
  console.log(`2. native balance is ${native} ${tickerToUpper}`); // 입력한 지갑의 메인넷 코인 ticker 단위의 코인 잔액

  const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });
  console.log('3. tokenBalances:', tokenBalances); // 입력한 지갑의 모든 메인넷 코인 기반 토큰 잔액 리스트 조회
  const tokens = tokenBalances.result.map(token => token.display());

  console.log('4. tokens:', tokens); // 입력한 지갑의 모든 메인넷 코인 기반 토큰 잔액만 뽑아낸 리스트 출력
};
runApp();
