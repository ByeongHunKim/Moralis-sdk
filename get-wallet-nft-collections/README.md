# getWalletNFTCollections

## 설명

- get-wallet-nft-collections를 호출하면 특정 지갑이 보유한 모든 NFT collection 정보들을 조회한 결과를 얻을 수 있다

- BNB 메인넷, 테스트넷 모두 가능함

## 실행결과

```json
{
  "total": null,
  "page": 1,
  "page_size": 100,
  "cursor": null,
  "result": [
    {
      "token_address": "0x999017cb5652caf5f324a8e44f813903ba3c46eb",
      "contract_type": "ERC721",
      "name": "CheersBio Capsule",
      "symbol": "CBC"
    },
    {
      "token_address": "0x67af3a5765299a3e2f869c3002204c749bd185e9",
      "contract_type": "ERC1155",
      "name": "The Lost Ra8bits #300",
      "symbol": "The Lost Ra8bits #300"
    },
    {
      "token_address": "0x36f8f51f65fe200311f709b797baf4e193dd0b0d",
      "contract_type": "ERC1155",
      "name": "Treat NFT Minter",
      "symbol": "TreatNFTMinter"
    }
  ],
  "status": "SYNCED"
}
```
