//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SevenElevenGame {
    string[] gift;
    uint private seed;

    constructor() {
        gift.push("Luffy");
        gift.push("Enel");
        gift.push("Crocodile");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function addGift(string memory _newGift) public {
        gift.push(_newGift);
    }

    function playGame() public view returns (string memory) {
        return gift[(block.difficulty + block.timestamp + seed) % gift.length];
    }

    function getGiftList() public view returns (string[] memory) {
        return gift;
    }
}
