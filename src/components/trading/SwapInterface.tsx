import { useState } from "react";
import {
  ArrowLeftRight,
  Repeat,
  ArrowDownUp,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";

import ethLogo from "../../assets/ethereum.png";
import arbLogo from "../../assets/arbitrum.png";
import suiLogo from "../../assets/sui.png";
import aptosLogo from "../../assets/aptos.png";
import bscLogo from "../../assets/bsc_2.png";
import polygonLogo from "../../assets/polygon1.png";
import avaxLogo from "../../assets/avalanche.png";
import solanaLogo from "../../assets/solana.png";
import zksyncLogo from "../../assets/zksync.png";

// Map chain names to their logos
const chainLogos: Record<string, string | undefined> = {
  ethereum: ethLogo,
  bsc: bscLogo,
  polygon: polygonLogo,
  arbitrum: arbLogo,
  avax: avaxLogo,
  solana: solanaLogo,
  sui: suiLogo,
  aptos: aptosLogo,
  zksync: zksyncLogo,
};
export default function SwapInterface() {
  const [activeTab, setActiveTab] = useState<"same" | "cross">("same");
  const [selectedChain, setSelectedChain] = useState("sui");

  return (
    <div className="w-full flex justify-center font-manrope mt-4">
      {/* The outer div now centers the content horizontally */}
      <div
        className="w-full"
        style={{
          maxWidth: "510px",
        }}
      >
        {/* Tabs */}
        <div
          className="flex justify-between items-center -mb-px relative z-20"
          style={{ zIndex: 20 }}
        >
          <div className="flex gap-0.5">
            <button
              onClick={() => setActiveTab("same")}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl rounded-b-none border border-[#232323] border-b-0 border-r-0 transition-colors
                ${
                  activeTab === "same"
                    ? "bg-[#121212] text-white font-semibold "
                    : "bg-transparent text-[#b0b0b0] font-semibold"
                }
              `}
              style={{
                zIndex: activeTab === "same" ? 30 : 20,
                position: "relative",
              }}
            >
              <ArrowLeftRight size={22} />
              <span className="text-base font-semibold font-manrope">Same-chain</span>
            </button>
            <button
              onClick={() => setActiveTab("cross")}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl rounded-b-none border border-[#232323] border-b-0 transition-colors
                ${
                  activeTab === "cross"
                    ? "bg-[#121212] text-white font-semibold "
                    : "bg-transparent text-[#b0b0b0] font-semibold"
                }
              `}
              style={{
                marginLeft: "-1px",
                zIndex: activeTab === "cross" ? 30 : 20,
                position: "relative",
              }}
            >
              <Repeat size={22} />
              <span className="text-base font-semibold font-manrope">Cross-chain</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-[#8b8b8b] mr-2">
            <LayoutGrid size={16} className="cursor-pointer" />
          </div>
        </div>

        <div 
          className={`bg-[#121212] rounded-xl border border-[#1f1f1f] p-3 w-full max-w-2xl text-sm space-y-3 mx-auto relative ${
            activeTab === "same" ? "rounded-tl-none" : "rounded-tl-none rounded-tr-xl"
          }`}
          style={{
            position: "relative",
          }}
        >
          {/* Overlay to hide the top border under the active tab */}
          <div
            className="absolute top-0 bg-[#121212] h-px"
            style={{
              left: activeTab === "same" ? "0" : "auto",
              right: activeTab === "cross" ? "0" : "auto",
              width: activeTab === "same" ? "140px" : "150px", // Approximate tab widths
              zIndex: 25,
            }}
          />
          {/* Heading */}
          <div className="font-semibold text-gray-300 text-sm font-manrope">
            {activeTab === "same" ? "Same-chain Swap" : "Cross-chain Swap"}
          </div>

          {/* Chain selector icons (smaller) */}
          <div className="flex gap-4 items-center overflow-x-auto py-1 px-1">
            {[
              "ethereum",
              "bsc",
              "polygon",
              "arbitrum",
              "avax",           
              "solana",
              "sui",
              "aptos",
              "zksync",
            ].map((chain, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedChain(chain)}
                className={`
                  flex-shrink-0 flex items-center justify-center overflow-hidden
                  ${selectedChain === chain 
                    ? "w-8 h-8 rounded bg-[#232323] border-1 border-[#393939]" 
                    : "w-8 h-8"
                  }
                `}
                style={{
                  boxSizing: "border-box",
                  padding: "3px",
                  ...(selectedChain === chain ? { border: "1px solid #393939" } : {}),
                }}
              >
                {chainLogos[chain] ? (
                  <img
                    src={chainLogos[chain]}
                    alt={chain}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-gray-400">{chain[0]}</span>
                )}
              </div>
            ))}
          </div>

          {/* Swap Card */}
          <div className="relative flex flex-col gap-0">
            {/* Pay from */}
            <div className="bg-[#0e0e0e] rounded-2xl px-4 py-2 border border-[#1e1e1e]">
              {/* Top Row: Pay from & Connect Wallet side by side, left-aligned */}
              <div className="flex items-center gap-2 text-sm font-manrope mb-1">
                <span className="text-[#b0b0b0]">Pay from</span>
                <span className="text-[#19c7b2] cursor-pointer whitespace-nowrap font-medium ml-2">
                  Connect Wallet
                </span>
              </div>

              {/* Middle Row */}
              <div className="flex items-center justify-between gap-3">
                {/* Amount Input */}
                <div className="flex-1">
                  <input
                    type="number"
                    defaultValue="0.00"
                    className="bg-transparent outline-none text-[1.5rem] w-full font-manrope text-white placeholder:text-gray-500 font-light tracking-tight"
                    style={{
                      border: "none",
                      boxShadow: "none",
                      padding: 0,
                      margin: 0,
                      lineHeight: "1.8rem",
                    }}
                  />
                </div>

                {/* Token Selector */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-[120px] h-[48px] bg-[#181818] rounded-xl border border-[#1e1e1e]">
                    <div className="flex flex-row items-center justify-center w-full gap-2">
                      {/* Icon */}
                      <div className="w-7 h-7 rounded-full border border-dashed border-gray-600 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 18 18" className="opacity-30">
                          <circle cx="9" cy="9" r="8" stroke="#888" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                      {/* Token Name and on Chain */}
                      <div className="flex flex-col justify-center">
                        <span className="text-white font-semibold text-[0.9rem] leading-none">Token</span>
                        <span className="text-[11px] text-gray-400 leading-none">on Chain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider - 2/3 width, reduced margin */}
              <div className="w-2/3 h-px bg-[#1e1e1e] my-1" />

              {/* Bottom Row */}
              <div className="flex justify-between items-center text-sm text-gray-500 font-manrope">
                <span className="tracking-wide">USD&nbsp;0</span>
                <span className="tracking-wide">Balance&nbsp;-</span>
              </div>
            </div>

            {/* Center swap icon */}
            <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-[#23232a] border border-[#393949] rounded-lg p-1 flex items-center justify-center shadow"
                   style={{ width: 32, height: 32 }}>
                <ArrowDownUp size={18} className="text-[#8b8b8b]" />
              </div>
            </div>

                         {/* Receive to */}
             <div className="bg-[#0e0e0e] rounded-2xl px-4 py-2 border border-[#1e1e1e] mt-3">
               {/* Top Row: Receive to & Connect Wallet side by side, left-aligned */}
               <div className="flex items-center gap-2 text-sm font-manrope mb-1">
                 <span className="text-[#b0b0b0]">Receive to</span>
                 <span className="text-[#19c7b2] cursor-pointer whitespace-nowrap font-medium ml-2">
                   Connect Wallet
                 </span>
               </div>
 
               {/* Middle Row */}
               <div className="flex items-center justify-between gap-3">
                 {/* Amount Input */}
                 <div className="flex-1">
                   <input
                     type="number"
                     defaultValue="0.00"
                     className="bg-transparent outline-none text-[1.5rem] w-full font-manrope text-white placeholder:text-gray-500 font-light tracking-tight"
                     style={{
                       border: "none",
                       boxShadow: "none",
                       padding: 0,
                       margin: 0,
                       lineHeight: "1.8rem",
                     }}
                   />
                 </div>
 
                 {/* Token Selector */}
                 <div className="flex-shrink-0">
                   <div className="flex items-center justify-center w-[120px] h-[48px] bg-[#181818] rounded-xl border border-[#1e1e1e]">
                     <div className="flex flex-row items-center justify-center w-full gap-2">
                       {/* Icon */}
                       <div className="w-7 h-7 rounded-full border border-dashed border-gray-600 flex items-center justify-center">
                         <svg width="16" height="16" viewBox="0 0 18 18" className="opacity-30">
                           <circle cx="9" cy="9" r="8" stroke="#888" strokeWidth="2" fill="none" />
                         </svg>
                       </div>
                       {/* Token Name and on Chain */}
                       <div className="flex flex-col justify-center">
                         <span className="text-white font-semibold text-[0.9rem] leading-none">Token</span>
                         <span className="text-[11px] text-gray-400 leading-none">on Chain</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
 
               {/* Divider - 2/3 width, reduced margin */}
               <div className="w-2/3 h-px bg-[#1e1e1e] my-1" />
 
               {/* Bottom Row */}
               <div className="flex justify-between items-center text-sm text-gray-500 font-manrope">
                 <span className="tracking-wide">USD&nbsp;0</span>
                 <span className="tracking-wide">Balance&nbsp;-</span>
               </div>
             </div>
          </div>

          {/* Swap now button */}
          <button
            className="w-full rounded-[20px] py-2 mt-2 border border-[#00d1b2] bg-[#181818] 
                       text-[#19c7b2] font-manrope font-semibold text-lg
                       transition-all duration-200
                       outline-none focus:outline-none"
            style={{
              boxShadow: "0 4px 0 0 #19c7b2 inset",
              letterSpacing: 0,
              transform: "rotate(180deg)",
            }}
          >
            <span style={{ display: "inline-block", transform: "rotate(180deg)", width: "100%" }}>
              Swap now
            </span>
          </button>


          {/* Additional details */}
          <div className="bg-[#181818] rounded-xl border border-[#2a2a2a] p-2 flex justify-between items-center text-gray-400 text-xs cursor-pointer font-manrope">
            <span>Additional details</span>
            <ChevronDown size={14} className="text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
