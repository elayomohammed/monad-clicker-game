"use client";
import { useState, useEffect } from 'react';
import { useWeb3 } from '../hooks/useWeb3';
import { getContract } from '../utils/contract';

export default function Home() {
    const { provider, account, connectWallet } = useWeb3();
    const [clicks, setClicks] = useState(0);

    const handleClick = async () => {
        if (!provider || !account) return;
        const contract = getContract(provider);
        const tx = await contract.click();
        await tx.wait();
        console.log('clicked successfully');
        const newClicks = await contract.getClicks();
        setClicks(Number(newClicks));
    };

    useEffect(() => {
        if (provider && account) {
            const fetchClicks = async () => {
                const contract = getContract(provider);
                const clicks = await contract.getClicks();
                setClicks(Number(clicks));
            };
            fetchClicks();
        }
    }, [provider, account]);

    return (
        <div style={{ textAlign: "center", marginTop: "40vh" }}>
            <h1>Break Monad Clicker Game</h1><br />
            <p>Click the button to increase your clicks!</p><br />
            {account ? (
                <>
                    <p>Connected to {account}</p>
                    <button style={{ borderRadius: "5px", width: "40vw", margin: "auto", height: "50px", fontWeight: "bold", fontSize: "x-large", backgroundColor: "green" }} onClick={handleClick}>Click Me</button><br /><br />
                    <h1 style={{ textAlign: "center", margin: "auto" }}>Total Clicks: {clicks}</h1>
                </>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
}
