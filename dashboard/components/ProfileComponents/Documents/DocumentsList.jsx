/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Image from 'next/image';
import VerifyingIcon from '../../../public/svg/verifying.svg';
import VerificationFailedIcon from '../../../public/svg/verification_failed.svg';
import VerificationCompleteIcon from '../../../public/svg/verification_complete.svg';
import VerifyingIconDetail from './VerifyingIconDetail';
import VerificationCompleteIconDetail from './VerificationCompleteIconDetail';
import VerificationFailedIconDetail from './VerificationFailedIconDetail';
import DocumentHeader from './DocumentHeader';

const DocumentsList = ({
  documentType,
  documents,
  handleEdit,
  handleClick,
}) => {
  const icon = {
    verifying: VerifyingIcon,
    verification_complete: VerificationCompleteIcon,
    verification_failed: VerificationFailedIcon,
  };

  return (
    <>
      {/* <div className="flex items-center">
        <p className="font-medium uppercase">
          {documentType === 'workcertificate'
            ? 'WORK CERTIFICATE'
            : documentType === 'othercertificate'
            ? 'OTHER CERTIFICATE'
            : documentType}
        </p>
        <button
          type="button"
          className="outline-none border-none font-semibold h-36px
          text-[#01a3a4] rounded-[5px] text-[13.33px] cursor-pointer ml-auto"
          onClick={(e) => handleClick(e, documentType)}
        >
          + Add New
        </button>
      </div> */}
      <DocumentHeader/>
      <div className="">
        {documents.map((document, index) => (
          <div
            key={index}
            className="relative flex flex-row items-center pb-[20px] mb-[5px] mt-[5px]"
          >
            <div style={{borderBottom : "1px solid grey"}}  className="flex items-center break-words mt-0 mr-5 mb-0 text-[0.775rem] w-[100%] justify-between pb-[15px]">
              <div className='w-[37%]'>
                  <p>{document.documentName}</p>
                  <span
                    
                    className="text-[0.775rem]  mr-2 text-blue-500 cursor-pointer hover:underline"
                    onClick={() => {
                      window.open(document.file, '_blank');
                    }}
                  > 
                    {document.fileName < 32
                      ? document.fileName
                      : `${document.fileName.split('.')[0].substring(0, 32)}...${
                          document.fileName.split('.')[1]
                        }`}
                  </span>
              </div>
              
              <div  className="w-[15%]">
                <div className='w-full'>
                <p className="text-[0.775rem] uppercase h-full w-full "  >
                  {documentType === 'workcertificate'
                    ? 'WORK CERTIFICATE'
                    : documentType === 'othercertificate'
                    ? 'OTHER CERTIFICATE'
                    : documentType}
                </p>
                </div>
              </div>
              <div className='w-[15%]'>
                <div className='w-full'>
                <span  className=" text-[0.775rem] w-full" >{document.dateAdded}</span>
                </div>
              </div>
      
            {/* </div> */}

            <div className="w-[20%]">
            <div className='w-full'>
                <span  className="w-full ml-[45%] status_icon inline-flex cursor-pointer">
                    {document.status ? (
                      <>
                        <Image
                          src={icon[document.status]}
                          alt="verifying"
                          height={20}
                          width={20}
                        />
                        {document.status === 'verifying' ? (
                          <VerifyingIconDetail />
                        ) : document.status === 'verification_complete' ? (
                          <VerificationCompleteIconDetail />

                        ) : document.status === 'verification_failed' ? (
                          <VerificationFailedIconDetail />

                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                </span>
              </div>
            </div>

            {/* absolute right-0 top-0 */}
            
            <div className="w-[10%]">
              <div className='w-full flex justify-center'>
                <svg
                  className="flex items-center font-medium leading-[1rem] 
                  w-[1rem] h-[1rem]  text-[#aaa] 
                  cursor-pointer text-[25px] mr-[5px] opacity-100 transition 
                  ease-in group-hover:opacity-100 ml-[50%] "
                  focusable="false"
                  viewBox="0 0 24 24"
                  onClick={() => handleEdit(index, documentType)}
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                </svg>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DocumentsList;
