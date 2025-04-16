import { ethers } from 'ethers';

const monadContractAddress = '0x565a62A61258415Cc8Cd3D887E9FCBFFf389D4e2';
const teaContractAddress = '0x3C9f67816E609910254f58F538C92a77dCd45AdB';
const abi = [
    'function click() external',
    'function getClicks() external view returns (uint256)',
    'event Clicked(address indexed player, uint256 clicks)'
];

export const getContract = (signer) => {
    return new ethers.Contract(teaContractAddress, abi, signer);
};
