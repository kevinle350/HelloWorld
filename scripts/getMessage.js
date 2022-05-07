const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await HelloWorld.attach('0xDA8C0B547559b28c7626128E29C8ed5C28B36D43')

    console.log("Current message:", await helloWorldContract.message())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });