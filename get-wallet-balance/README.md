# getNativeBalance, getWalletTokenBalances

## 설명

- getNativeBalance, getWalletTokenBalances 를 호출하면 특정 지갑이 보유한 모든 토큰 정보들을 조회할 수 있다

- BNB 메인넷, 테스트넷 모두 가능함

## 실행결과

```json
ResponseAdapter {
  jsonResponse: { balance: '76095610675047542' },
  getResponse: [Function (anonymous)]
}

native balance is 0.076095610675047542 BNB


    {
      token_address: '0x22748a1a3a9802d130fedc4fe9e6b26cb9f7e029',
      name: 'Swallow My Jizz',
      symbol: 'SMJ',
      logo: null,
      thumbnail: null,
      decimals: 4,
      balance: '420696900'
    },


  '373.7082 BUL',
  '112.0 EUSD',
  '0.04 LBCC',
  '40000000.0 SHWA',
  '289.127135242 HIKO',
```
