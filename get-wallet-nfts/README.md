# getWalletNFTs

## 설명

- getWalletNFTs를 호출하면 특정 지갑이 보유한 모든 NFT metadata 정보들을 조회한 결과를 얻을 수 있다

- BNB 메인넷, 테스트넷 모두 가능함

## 실행결과

```json
PaginatedResponseAdapter {
  pagination: { page: 1, pageSize: 10, total: null, cursor: null },
  jsonResponse: {
    total: null,
    page: 1,
    page_size: 10,
    cursor: null,
    result: [ [Object], [Object], [Object] ],
    status: 'SYNCED'
  },
  getResult: [Function (anonymous)],
  nextHandler: undefined,
  hasNext: [Function (anonymous)],
  next: [Function (anonymous)]
}


[
  {
    name: 'Treat NFT Minter',
    amount: 1,
    metadata: {
      name: 'Treat Me Right So I can Treat You Right',
      image: 'https://i.imgur.com/ojp3yGj.jpg',
      description: 'Beginnings are always exciting. But they are exciting only when they have an end. Let’s make the time between the two to last forever.',
      properties: [Object],
      attributes: [Array]
    }
  },
  {
    name: 'CheersBio Capsule',
    amount: 1,
    metadata: {
      name: 'RSS3 Chain Friends #36957',
      description: '--- Unlocked yet. ---',
      image: 'ipfs://QmZCS7HtmQZtUPLTR1LaLhCwW5W22c1jCociw7Pvi3Autg',
      traits: [Array]
    }
  },
  {
    name: 'The Lost Ra8bits #300',
    amount: 1,
    metadata: {
      id: 41371,
      name: 'Lost Ra8bit #6',
      description: 'Residue from the Great Burning',
      attributes: [Array],
      image: 'https://moonboxes.io/api/nft/images/ra8bits-300/character-10713.png'
    }
  }
]
```
