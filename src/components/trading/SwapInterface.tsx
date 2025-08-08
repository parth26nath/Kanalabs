import { useState } from "react";
import {
  ArrowLeftRight,
  Repeat,
  ArrowDownUp,
  ChevronDown,
  Settings,
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
    <div className="w-full flex justify-center font-manrope">
      {/* The outer div now centers the content horizontally */}
      <div
        className="w-full"
        style={{
          maxWidth: "510px",
        }}
      >
        {/* Tabs */}
        <div
          className="flex justify-between items-center mb-n1 relative z-20"
          style={{ zIndex: 20 }}
        >
          <div className="flex gap-0.5">
            <button
              onClick={() => setActiveTab("same")}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl rounded-b-none border border-[#232323] border-b-0 border-r-0 transition-colors
                ${
                  activeTab === "same"
                    ? "bg-[#18191b] text-white font-semibold "
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
                    ? "bg-[#18191b] text-white font-semibold "
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
          <div className="flex items-center gap-2 text-[#8b8b8b]">
            <Settings size={16} className="cursor-pointer" />
            <LayoutGrid size={16} className="cursor-pointer" />
          </div>
        </div>

        <div className="bg-[#121212] rounded-xl border border-[#1f1f1f] p-4 w-full max-w-2xl text-sm space-y-4 rounded-tl-none mx-auto">
          {/* Heading */}
          <div className="font-semibold text-gray-300 text-sm font-manrope">
            Same-chain Swap
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
          <div className="space-y-3 relative">
            {/* Pay from */}
            <div className="bg-[#181818] rounded-xl p-3 border border-[#2a2a2a]">
              <div className="flex justify-between text-xs mb-1 font-manrope">
                <span className="text-gray-400">Pay from</span>
                <span className="text-teal-400 cursor-pointer">
                  Connect Wallet
                </span>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-transparent outline-none text-xl w-full font-manrope"
                />
                <div className="text-gray-400 text-xs px-2 py-1 bg-[#222] rounded font-manrope">
                  Token
                  <br />
                  <span className="text-[10px]">on Chain</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-manrope">
                <span>USD 0</span>
                <span>Balance -</span>
              </div>
            </div>

            {/* Swap arrow */}
            <div className="flex justify-center absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[#181818] p-1 rounded-md border border-[#2a2a2a]">
              <ArrowDownUp size={16} className="text-purple-400" />
            </div>

            {/* Receive to */}
            <div className="bg-[#181818] rounded-xl p-3 border border-[#2a2a2a] mt-6">
              <div className="flex justify-between text-xs mb-1 font-manrope">
                <span className="text-gray-400">Receive to</span>
                <span className="text-teal-400 cursor-pointer">
                  Connect Wallet
                </span>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="number"
                  placeholder="0.00"
                  className="bg-transparent outline-none text-xl w-full font-manrope"
                />
                <div className="text-gray-400 text-xs px-2 py-1 bg-[#222] rounded font-manrope">
                  Token
                  <br />
                  <span className="text-[10px]">on Chain</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-manrope">
                <span>USD 0</span>
                <span>Balance -</span>
              </div>
            </div>
          </div>

          {/* Swap now button */}
          <button className="w-full rounded-xl py-2 mt-2 border border-[#2a2a2a] bg-[#121212] relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl border border-[#2a2a2a] pointer-events-none"></div>
            <div className="absolute inset-0 rounded-xl border border-teal-500 opacity-20 blur-sm pointer-events-none"></div>
            <span className="text-teal-400 font-semibold font-manrope">Swap now</span>
          </button>

          {/* Additional details */}
          <div className="bg-[#181818] rounded-xl border border-[#2a2a2a] p-3 flex justify-between items-center text-gray-400 text-xs cursor-pointer font-manrope">
            <span>Additional details</span>
            <ChevronDown size={14} className="text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
