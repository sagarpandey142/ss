'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { generateOTP, verifyOTP } from '../../../Services/operations/generateAndVerifyOTP';
// Import RootState type



const OTPPage = () => {
  const [otp, setOtp] = useState('');
  console.log("firsttttt")
  const { data } = useSelector((state: RootState) => state.signup);
  
  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const email = data?.Email;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const response = await verifyOTP(email, otp);
    // setLoading(false);
    if (response) {
      console.log("OTP matched");
    } else {
      console.log("OTP does not match");
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const response = await generateOTP(email);
      console.log("res", response);
      if (response.statusText === 'OK') {
        console.log('Verification email resent successfully.');
      } else {
        console.error('Failed to resend verification email:', response.error);
      }
    } catch (error) {
      console.error('Error resending verification email:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border border-gray-200 shadow-sm p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">OTP Verification</h1>
          <p className="mt-2 text-sm text-gray-600">Please enter the OTP sent to your email.</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleVerifyOtp}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm mb-2">OTP</label>
                <div className="relative">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={handleOTPChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Verify OTP
              </button>
            </div>
          </form>
          <button
            onClick={handleResend}
            className="w-full mt-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
