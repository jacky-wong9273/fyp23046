/* eslint-disable react/prop-types */

import Tabs from "./Tabs";
import { allItems } from "@/data/item";

import { Link } from "react-router-dom";
import Timer from "./Timer";
import { useState } from "react";

export default function ItemDetails({ id }) {
  const item = allItems.filter((elm) => elm.id == id)[0] || allItems[0];
  const [loved, setLoved] = useState();
  return (
    <>
      <section className="relative pt-12 pb-24 lg:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/img/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          {/* Item */}
          <div className="md:flex md:flex-wrap">
            {/* Image */}
            <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
              <img
                src={item.imageSrc}
                alt="item"
                className="cursor-pointer rounded-2.5xl w-[100%]"
                data-bs-toggle="modal"
                data-bs-target="#imageModal"
              />

              {/* Modal */}
              <div
                className="modal fade"
                id="imageModal"
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                  <img src="/img/products/item_single_full.jpg" alt="item" />
                </div>

                <button
                  type="button"
                  className="btn-close absolute top-6 right-6"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-6 w-6 fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                  </svg>
                </button>
              </div>
              {/* end modal */}
            </figure>

            {/* Details */}
            <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
              {/* Collection / Likes / Actions */}
              <div className="mb-3 flex">
                {/* Collection */}
                <div className="flex items-center">
                  <Link
                    to={`/collections`}
                    className="mr-2 text-sm font-bold text-accent"
                  >
                    {"Provider51"}
                  </Link>
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                    data-tippy-content="Verified Collection"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-[.875rem] w-[.875rem] fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                    </svg>
                  </span>
                </div>

                {/* Likes / Actions */}
                <div className="ml-auto flex space-x-2">
                  <div className="flex items-center space-x-1 rounded-xl border border-jacarta-100 bg-white py-2 px-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                    <span
                      onClick={() => setLoved((pre) => !pre)}
                      className={`js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('/img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0 ${
                        loved ? "js-likes--active" : ""
                      }`}
                      data-tippy-content="Favorite"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                      >
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                      </svg>
                    </span>
                    <span className="text-sm dark:text-jacarta-200">
                      {loved ? 189 : 188}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                    <a
                      href="#"
                      className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm"
                      role="button"
                      id="collectionActions"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="16"
                        height="4"
                        viewBox="0 0 16 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-jacarta-500 dark:fill-jacarta-200"
                      >
                        <circle cx="2" cy="2" r="2"></circle>
                        <circle cx="8" cy="2" r="2"></circle>
                        <circle cx="14" cy="2" r="2"></circle>
                      </svg>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                      aria-labelledby="collectionActions"
                    >
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        New bid
                      </button>
                      <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Refresh Metadata
                      </button>
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Share
                      </button>
                      <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">
                {item.title ? item.title : "CryptoGuysNFT"}
              </h1>

              <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
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

                  <span className="text-sm font-medium tracking-tight text-green">
                    47.01 USDT
                  </span>
                </div>
              </div>

              <p className="mb-10 dark:text-jacarta-300">
                With this Token Launching Lab, it will give you the gaming
                utility of generating legendary tokens and discover new AOE
                skills in the <strong>@Provider 51</strong> game.
              </p>

              {/* Bid */}
              <div className="rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                <div className="mb-8 sm:flex sm:flex-wrap">
                  {/* Highest bid */}
                  <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                    <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                        Highest bid by{" "}
                      </span>
                      <Link
                        to={`/user/9`}
                        className="text-sm font-bold text-accent"
                      >
                        0x695d2ef170ce69e794707eeef9497af2de25df82
                      </Link>
                    </div>
                    <div className="mt-3 flex">
                      <figure className="mr-4 shrink-0">
                        <Link to={`/user/8`} className="relative block">
                          <img
                            src="/img/user/user_avatar.gif"
                            alt="avatar"
                            className="rounded-2lg w-[40px] h-[40px]"
                            loading="lazy"
                          />
                        </Link>
                      </figure>
                      <div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="-ml-1" data-tippy-content="ETH">
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
                          </span>
                          <span className="text-lg font-medium leading-tight tracking-tight text-green">
                            47.12 USDT
                          </span>
                        </div>
                        <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                          ~HKD 369.4208
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                    <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                        Highest ask by{" "}
                      </span>
                      <Link
                        to={`/user/9`}
                        className="text-sm font-bold text-accent"
                      >
                        0x72f36c1982ca7ab63a19e7ef9497af2de25df82
                      </Link>
                    </div>
                    <div className="mt-3 flex">
                      <figure className="mr-4 shrink-0">
                        <Link to={`/user/8`} className="relative block">
                          <img
                            src=""
                            alt="avatar"
                            className="rounded-2lg"
                            loading="lazy"
                          />
                        </Link>
                      </figure>
                      <div>
                        <div className="flex items-center whitespace-nowrap">
                          <span className="-ml-1" data-tippy-content="ETH">
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
                          </span>
                          <span className="text-lg font-medium leading-tight tracking-tight text-red">
                            47.39 USDT
                          </span>
                        </div>
                        <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                          ~HKD 371.54
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#placeBidModal"
                  className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Place Bid / Ask
                </a>
              </div>
              {/* end bid */}
            </div>
            {/* end details */}
          </div>

          {/* Tabs */}
          <Tabs />
          {/* end tabs */}
        </div>
      </section>
    </>
  );
}
