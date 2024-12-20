// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CyberAtlasNFT is ERC721, Ownable, ERC721Enumerable {
    uint256 public constant FACTOR = 150e18;
    uint256 public constant PRECISION = 100e18;

    // Mint price (configurable)
    uint256 public s_mint_price = 0.1 ether;

    // Maximum supply of NFTs
    uint256 public constant MAX_SUPPLY = 14;

    // Maximum mints per transaction
    uint256 public constant MAX_MINT_PER_TX = 3;

    // Base URI for token metadata
    string private _baseTokenURI =
        "ipfs://bafybeiesw3yoe7mgjtd2arl5rowfk7fzlojlpurts3e4srohhb6hkxy2ku/";

    // Events
    event NFTMinted(address indexed to, uint256 tokenId);

    constructor() ERC721("CyberAtlasNFT", "CATLS") Ownable(msg.sender) {}

    // Mint function with multiple safeguards
    function mint(address to, uint256 quantity) public payable {
        // Check mint quantity
        uint256 ownedTokens = getTokensOfAddress(to);
        require(ownedTokens + quantity <= MAX_MINT_PER_TX, "Owned more than ");
        require(
            quantity > 0 && quantity <= MAX_MINT_PER_TX,
            "Invalid mint quantity"
        );

        // Check total supply
        require(totalSupply() + quantity <= MAX_SUPPLY, "Exceeds max supply");

        // Check payment
        require(msg.value >= s_mint_price * quantity, "Insufficient payment");

        // Mint tokens
        for (uint256 i = 0; i < quantity; i++) {
            uint256 tokenId = totalSupply() + 1;

            _safeMint(to, tokenId);
            emit NFTMinted(to, tokenId);
        }
        s_mint_price = (s_mint_price * FACTOR) / PRECISION;

        // Refund excess payment
        if (msg.value > s_mint_price * quantity) {
            payable(msg.sender).transfer(msg.value - (s_mint_price * quantity));
        }
    }

    // Withdraw contract funds
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return string.concat(_baseTokenURI, Strings.toString(tokenId), ".json");
    }

    function getOwnedTokens(
        address _owner
    ) public view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokenIds;
    }

    function getPrice() public returns (uint256) {
        return s_mint_price;
    }

    function getTokensOfAddress(address user) public returns (uint256) {
        return balanceOf(user);
    }

    function getMaxSupply() public returns (uint256) {
        return MAX_SUPPLY;
    }

    function getTotalSupply() public returns (uint256) {
        return totalSupply();
    }

    function getBalance() public returns (uint256) {
        return address(this).balance;
    }

    // Explicitly override _increaseBalance
    function _increaseBalance(
        address account,
        uint128 value
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    // Explicitly override _update
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal virtual override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    // Explicitly override supportsInterface
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
