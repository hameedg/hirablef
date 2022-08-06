import React from 'react';
import DocumentsList from './DocumentsList';

function OtherCertificate({ documents, handleEdit, handleClick }) {
  return (
    <>
      {documents.length === 0 ? (
        <div>
          <h1 className="text-[0.95rem] leading-[1.375rem] font-medium">
            OTHER CERTIFICATE
          </h1>
          <div className="text-center h-32 flex flex-col items-center justify-end">
            <h3 className="text-[0.875rem] text-[#201e27] font-medium">
              Other Certificates
            </h3>
            <p className="text-[0.875rem] mt-[0.5rem] ml-0 mb-[1rem] opacity-95">
              Get noticed by recruiters. Upload documents related to your
              achievements and any other experiences you were a part of!
            </p>
            <button
              type="button"
              className="experience_button"
              onClick={(e) => handleClick(e, 'othercertificate')}
            >
              Add Other Certificates
            </button>
          </div>
        </div>
      ) : (
        <DocumentsList
          documentType="othercertificate"
          documents={documents}
          handleEdit={handleEdit}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default OtherCertificate;
