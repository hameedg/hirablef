import React from 'react';
import DocumentsList from './DocumentsList';

function Resume({ documents, handleEdit, handleClick }) {
  return (
    <>
      {documents.length === 0 ? (
        <div>
          <h1 className="text-[0.95rem] leading-[1.375rem] font-medium">
            RESUME
          </h1>
          <div className="text-center h-32 flex flex-col items-center justify-end">
            <h3 className="text-[0.875rem] text-[#201e27] font-medium">
              Add your resume
            </h3>
            <p className="text-[0.875rem] mt-[0.5rem] ml-0 mb-[1rem] opacity-95">
              Your resume is essential for recruiters to learn more about you!
              Upload one as soon as possible to boost your chances of being
              discovered
            </p>
            <button
              type="button"
              className="experience_button"
              onClick={(e) => handleClick(e, 'resume')}
            >
              Add Resume
            </button>
          </div>
        </div>
      ) : (
        <DocumentsList
          documentType="resume"
          documents={documents}
          handleEdit={handleEdit}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default Resume;
