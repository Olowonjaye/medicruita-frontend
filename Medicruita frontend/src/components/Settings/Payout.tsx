"use client"

import { useState } from "react"
import { MdOutlineCancel } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";

const PayoutSettings = () => {
    const [autoPayoutEnabled, setAutoPayoutEnabled] = useState(true)

    return (
        <div className="flex justify-center min-h-screen items-center border rounded-md border-[#0000001A]">
            <div className="w-[558px] bg-white p-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-base font-semibold font-inter text-[#1E1E1E] mb-5">Withdrawal & Savings Rules</h1>

                    <div className="bg-[#FAFAFB] rounded-md shadow-sm p-6 space-y-6">

                        <div className="space-y-2">
                            <label htmlFor="minWithdrawal" className="block  text-base font-normal text-[#1E1E1E] font-[DMSans]">
                                Minimum Withdrawal Amount
                            </label>
                            <input
                                type="text"
                                id="minWithdrawal"
                                name="minWithdrawal"
                                placeholder="Enter the Amount (e.g. ₦20,000)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-normal text-[#1E1E1E80] font-[DMSans]"
                            />
                        </div>

                        {/* Maximum Withdrawal Per Day */}
                        <div className="space-y-2">
                            <label htmlFor="maxWithdrawal" className="block text-base font-normal text-[#1E1E1E] font-[DMSans]">
                                Maximum Withdrawal Per Day
                            </label>
                            <input
                                type="text"
                                id="maxWithdrawal"
                                name="maxWithdrawal"
                                placeholder="Enter the Amount (e.g. ₦100,000)"
                                className="w-full px-3 py-3.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  text-sm font-normal text-[#1E1E1E80] font-[DMSans]"
                            />
                        </div>

                        {/* Savings Lock Duration */}
                        <div className="space-y-2">
                            <label htmlFor="lockDuration" className="block  text-base font-normal text-[#1E1E1E] font-[DMSans]">
                                Savings Lock Duration
                            </label>
                            <input
                                type="text"
                                id="lockDuration"
                                name="lockDuration"
                                placeholder="Enter duration in days (e.g. 30 days)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-normal text-[#1E1E1E80] font-[DMSans]"
                            />
                        </div>


                        <div className="flex items-center gap-6 justify-start">
                            <span className="text-base font-normal text-[#000000] font-[DMSans]">Auto-Payout Processing:</span>
                            <button
                                type="button"
                                role="switch"
                                aria-checked={autoPayoutEnabled}
                                onClick={() => setAutoPayoutEnabled(!autoPayoutEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D2B4E] focus:ring-offset-2 ${autoPayoutEnabled ? "bg-[#0D2B4E]" : "bg-gray-200"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${autoPayoutEnabled ? "translate-x-6" : "translate-x-1"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>

                        <div className="flex items-center justify-end space-x-4 pt-4 mt-14">
                            <button
                                type="button"
                            className=" flex justify-center items-center gap-1 px-3 py-2 text-sm font-medium  bg-white border border-[#0D2B4E] rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] focus:ring-offset-2"
                            >
                            <MdOutlineCancel /><span className="text-sm font-medium font-inter text-[#0D2B4E]">Cancel</span>
                            </button>
                            <button
                                type="submit"
                            className=" flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E]border border-transparent rounded-md shadow-sm hover:bg-[#0D2B4E] focus:outline-none focus:ring-2 focus:ring-[#0D2B4E] focus:ring-offset-2"

                            >
                            <IoDownloadOutline /> <span className="text-sm font-medium font-inter">Save Changes</span>
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PayoutSettings

