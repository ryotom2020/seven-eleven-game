const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const sevenElevenGameContractFactory = await hre.ethers.getContractFactory("SevenElevenGame");
    const sevenElevenGameContract = await sevenElevenGameContractFactory.deploy();
    await sevenElevenGameContract.deployed();

    console.log("Contract deployed to:", sevenElevenGameContract.address);
    console.log("Contract deployed by:", owner.address);

    let giftList = await sevenElevenGameContract.getGiftList();
    console.log(giftList);

    let gift = await sevenElevenGameContract.playGame();
    console.log(gift);

    let addGiftTxn = await sevenElevenGameContract.addGift("Zoro");
    await addGiftTxn.wait;

    giftList = await sevenElevenGameContract.getGiftList();
    console.log(giftList);

    gift = await sevenElevenGameContract.playGame();
    console.log(gift);


};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();