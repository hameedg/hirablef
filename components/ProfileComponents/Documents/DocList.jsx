import React from 'react'
import Image from 'next/image';
import VerifyingIcon from '../../../public/svg/verifying.svg';
import VerificationFailedIcon from '../../../public/svg/verification_failed.svg';
import VerificationCompleteIcon from '../../../public/svg/verification_complete.svg';
import VerifyingIconDetail from './VerifyingIconDetail';
import VerificationCompleteIconDetail from './VerificationCompleteIconDetail';
import VerificationFailedIconDetail from './VerificationFailedIconDetail';


export default function DocList({documentType,
    documents,
    handleEdit,
    handleClick,}) {
        const icon = {
            verifying: VerifyingIcon,
            verification_complete: VerificationCompleteIcon,
            verification_failed: VerificationFailedIcon,
          };  
  return (
        <div
            className="relative flex flex-row items-center pb-[20px] mb-[5px] mt-[5px] "
        >
          <h1>okok</h1>
        </div>
  )
}
