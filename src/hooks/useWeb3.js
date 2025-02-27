"use client";
import { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

export const useWeb3 = () => {
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(window.ethereum);
        //const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = (signer).getAddress();
        setProvider(signer);
        setAccount(account);
    };

    return { provider, account, connectWallet };
};
