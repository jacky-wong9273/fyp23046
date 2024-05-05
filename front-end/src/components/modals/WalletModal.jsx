/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

export default function WalletModal() {
  const closeModal = () => {
    const modal = document?.getElementById("walletModal");
    const walletModalBackdrop = document?.getElementById("walletModalBackdrop");
    modal.style.display = "none";
    walletModalBackdrop.style.display = "none";
  };
  useEffect(() => {
    document.addEventListener("click", function (event) {
      var walletModal = document.querySelector(".walletModal");
      var modalContent = document.querySelector(".modal-content");

      // Check if the click occurred outside of modal-content but inside walletModal
      if (
        !modalContent.contains(event.target) &&
        walletModal.contains(event.target)
      ) {
        // Click occurred outside of modal-content but inside walletModal
        // Your code to handle this scenario goes here
        closeModal();
      }
    });
  }, []);

  return (
    <>
      <div
        className=" fade show walletModal fixed top-0 left-0 z-50 h-[100%] w-[100%] overflow-y-auto overflow-x-hidden outline-0"
        id="walletModal"
        style={{ display: "none", overflow: "visible" }}
      >
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="walletModalLabel">
                Connect your wallet
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  closeModal();
                }}
              ></button>
            </div>
            <div className="flex flex-col odal-body p-6 text-center items-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 1200 1200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex mb-2"
              >
                <g clipPath="url(#clip0_2596_138588)">
                  <rect
                    width="1200"
                    height="1200"
                    rx="257.592"
                    fill="#AB9FF2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M517.219 779.814C470.102 852.012 391.148 943.378 286.09 943.378C236.426 943.378 188.672 922.933 188.672 834.122C188.672 607.943 497.48 257.813 784.004 257.813C947.004 257.813 1011.95 370.902 1011.95 499.326C1011.95 664.168 904.98 852.651 798.648 852.651C764.902 852.651 748.347 834.122 748.347 804.732C748.347 797.065 749.621 788.759 752.168 779.814C715.875 841.789 645.836 899.292 580.254 899.292C532.5 899.292 508.305 869.263 508.305 827.094C508.305 811.76 511.488 795.787 517.219 779.814ZM904.363 494.869C904.363 532.291 882.284 551.002 857.586 551.002C832.514 551.002 810.809 532.291 810.809 494.869C810.809 457.448 832.514 438.737 857.586 438.737C882.284 438.737 904.363 457.448 904.363 494.869ZM764.031 494.871C764.031 532.293 741.952 551.004 717.254 551.004C692.182 551.004 670.477 532.293 670.477 494.871C670.477 457.449 692.182 438.739 717.254 438.739C741.952 438.739 764.031 457.449 764.031 494.871Z"
                    fill="#FFFDF8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2596_138588">
                    <rect width="1200" height="1200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-center dark:text-white">
                You don't have Phantom in your browser, please download it from{" "}
                <a
                  href="https://phantom.app/"
                  className="text-accent"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Phantom
                </a>
              </p>
            </div>
            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Get Phantom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="walletModalBackdrop"
        onClick={() => {
          closeModal();
        }}
        className="modal-backdrop fade show"
        style={{ display: "none" }}
      ></div>
    </>
  );
}
