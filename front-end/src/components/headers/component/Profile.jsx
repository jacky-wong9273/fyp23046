import CopyToClipboard from "@/utlis/AddClipboard";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import tippy from "tippy.js";

import { useWallet } from "@solana/wallet-adapter-react";

export default function Profile() {
  useEffect(() => {
    tippy("[data-tippy-content]");
    new CopyToClipboard();
  }, []);

  const { publicKey, disconnect, wallet } = useWallet();

  const handleDisconnect = useCallback(async () => {
    if (!publicKey || !wallet) return;

    try {
      await disconnect();
    } catch (error) {
      console.warn(error);
    }
  }, [disconnect, publicKey, wallet]);

  if (!publicKey || !wallet) return;

  return (
    <div className="js-nav-dropdown group-dropdown relative">
      <button
        className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
        id="profileDropdown"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
      </button>
      <div
        className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
        aria-labelledby="profileDropdown"
      >
        <button
          className="js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white"
          data-tippy-content="Copy"
        >
          <span className="max-w-[10rem] overflow-hidden text-ellipsis">
            {publicKey.toString()}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
          </svg>
        </button>
        <div className="mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600">
          <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">
            (DevNet) Balance
          </span>
          <div className="flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
            >
              <g fill="none">
                <circle fill="#66F9A1" cx="16" cy="16" r="16" />
                <path
                  d="M9.925 19.687a.59.59 0 01.415-.17h14.366a.29.29 0 01.207.497l-2.838 2.815a.59.59 0 01-.415.171H7.294a.291.291 0 01-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0110.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 01-.415.17H7.294a.291.291 0 01-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 00-.415-.17H7.294a.291.291 0 00-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 00.207-.498l-2.838-2.815z"
                  fill="#FFF"
                />
              </g>
            </svg>
            <span className="text-lg font-bold text-green">2.39 SOL</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
            >
              <g fill="none" fillRule="evenodd">
                <circle cx="16" cy="16" r="16" fill="#26A17B" />
                <path
                  fill="#FFF"
                  d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"
                />
              </g>
            </svg>
            <span className="text-lg font-bold text-green">97 USDT</span>
          </div>
          <div className="flex items-center">
            <img src="/" className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]" />
            <span className="text-lg font-bold text-green">
              12,922,107 AOTG
            </span>
          </div>
        </div>
        <Link
          to="/user/1"
          className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
          </svg>
          <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
            My Profile
          </span>
        </Link>

        <div
          className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
          onClick={handleDisconnect}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
          </svg>
          <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
            Sign out
          </span>
        </div>
      </div>
    </div>
  );
}
