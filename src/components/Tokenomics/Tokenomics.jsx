import React, { useState } from "react";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div>
      <section id="tokenomics" className="section tokenomics">
        <div className="container">
          <h2>Tokenomics</h2>
          <p>
            The Unstable States Dollar supply has been capped at
            <strong>1,000,000,000&nbsp;USD</strong> tokens. Minted on Solana
            using Bonk, the token contract lives at:
          </p>
          <div className="contract-row">
            <span className="contract" id="contractAddress">
              {contractAddress}
            </span>
            <button
              className="copy-btn"
              onClick={handleCopy}
              aria-label="Copy contract address"
            >
              Copy
            </button>
            <span className="copy-tooltip" style={{ opacity: copied ? 1 : 0 }}>
              Copied!
            </span>
          </div>
          {/* <div className="token-distribution">
            <div className="distribution-item">
              <h3>Liquidity</h3>
              <div className="bar">
                <div className="bar-inner" style={{ width: "50%" }}></div>
              </div>
              <span>50%</span>
            </div>
            <div className="distribution-item">
              <h3>Community Rewards</h3>
              <div className="bar">
                <div className="bar-inner" style={{ width: "25%" }}></div>
              </div>
              <span>25%</span>
            </div>
            <div className="distribution-item">
              <h3>Marketing &amp; Partnerships</h3>
              <div className="bar">
                <div className="bar-inner" style={{ width: "15%" }}></div>
              </div>
              <span>15%</span>
            </div>
            <div className="distribution-item">
              <h3>Development</h3>
              <div className="bar">
                <div className="bar-inner" style={{ width: "10%" }}></div>
              </div>
              <span>10%</span>
            </div>
          </div> */}
          <div className="token-details">
            <h3>Liquidity</h3>
            <ul>
              <li>
                <strong>LP&nbsp;Burned:</strong> Liquidity is locked and burned
                forever to ensure fairness and trust.
              </li>
              <li>
                <strong>Community&nbsp;take&nbsp;over:</strong> With the
                liquidity burned and ownership renounced, the community fully
                controls the token’s future.
              </li>
            </ul>
            <h3>Fair Launch</h3>
            <ul>
              <li>
                <strong>100% Community:</strong> No presale, no team allocation
                and no tax—just pure community ownership. Everyone has an equal
                chance to participate from day one.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
