const CONTRACT_ADDRESS = "0x55b7C78c7CD5bBe050d860A6e8895d3538ad7Bdf";
const META_DATA_URL = "ipfs:\bafyreidkps5nt7ma6zjkub3zqje67mjytk2amhslsytbrge4bu3cdps3hy\metadata.json";

// paste function here
// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
