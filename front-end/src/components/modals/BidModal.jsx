/* eslint-disable react/no-unescaped-entities */
export default function BidModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="placeBidModal"
        tabIndex="-1"
        aria-labelledby="placeBidLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="placeBidLabel">
                Place Bid / Ask
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                  Price
                </span>
              </div>

              <div className="relative mb-2 flex items-center overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                <div className="flex flex-1 items-center self-stretch border-r border-jacarta-100 bg-jacarta-50 px-2">
                  <span>
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
                  <span className="font-display text-sm text-jacarta-700">
                    USDT
                  </span>
                </div>

                <input
                  type="text"
                  className="h-12 w-full flex-[3] border-0 focus:ring-inset focus:ring-accent"
                  placeholder="Amount"
                  defaultValue="0.05"
                />

                <div className="flex flex-1 justify-end self-stretch border-l border-jacarta-100 bg-jacarta-50">
                  <span className="self-center px-2 text-sm">$-</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm dark:text-jacarta-400">
                  Balance: 0.0000 WETH
                </span>
              </div>

              {/* Terms */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm dark:text-jacarta-200"
                >
                  By checking this box, I agree to FYP23046's{" "}
                  <a href="#" className="text-accent">
                    Terms of Service
                  </a>
                </label>
              </div>
            </div>
            {/* end body */}

            <div className="flex modal-footer justify-between">
              <div className="flex items-center justify-center space-x-4 mx-4">
                <button
                  type="button"
                  className="rounded-full bg-green py-3 px-8 text-center font-semibold text-white  transition-all"
                >
                  Place Bid
                </button>
              </div>
              <div className="flex mx-4 items-center justify-center space-x-4 hover:bg-accent-dark">
                <button
                  type="button"
                  className="rounded-full bg-red py-3 px-8 text-center font-semibold text-white  transition-all hover:bg-accent-dark"
                >
                  Place Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
