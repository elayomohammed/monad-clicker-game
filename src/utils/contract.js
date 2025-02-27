import { ethers } from 'ethers';

const contractAddress = '0x565a62A61258415Cc8Cd3D887E9FCBFFf389D4e2';
const abi = [
    'function click() external',
    'function getClicks() external view returns (uint256)',
    'event Clicked(address indexed player, uint256 clicks)'
];

export const getContract = (signer) => {
    return new ethers.Contract(contractAddress, abi, signer);
};
