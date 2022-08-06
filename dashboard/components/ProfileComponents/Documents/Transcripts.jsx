import React from 'react';
import DocumentsList from './DocumentsList';

function Transcripts({ documents, handleEdit, handleClick }) {
  return (
    <>
      {documents.length === 0 ? (
        <div>
          <h1 className="text-[0.95rem] leading-[1.375rem] font-medium">
            TRANSCRIPTS
          </h1>
          <div className="text-center h-32 flex flex-col items-center justify-end">
            <h3 className="text-[0.875rem] text-[#201e27] font-medium">
              Add your transcripts
            </h3>
            <p className="text-[0.875rem] mt-[0.5rem] ml-0 mb-[1rem] opacity-95">
              Upload your educational transcripts received till date so that
              employers can know all courses and grades received, majors,
              concentrations, any honors, and any degrees earned by you!
            </p>
            <button
              type="button"
              className="experience_button"
              onClick={(e) => handleClick(e, 'transcripts')}
            >
              Add Transcripts
            </button>
          </div>
        </div>
      ) : (
        <DocumentsList
          documentType="transcripts"
          documents={documents}
          handleEdit={handleEdit}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

export default Transcripts;
