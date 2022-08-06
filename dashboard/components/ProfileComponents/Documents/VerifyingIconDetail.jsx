import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const VerifyingIconDetail = () => (
  <div
    className="absolute bg-white py-2 px-3 
      rounded-md flex justify-center status_detail "
    style={{
      top: '-200%',
      left: '-130%',
      boxShadow: '0 2px 6px rgb(0 0 0 / 22%)',
    }}
  >
    <span className="text-xs font-medium">Verifying</span>
    <div
      className="absolute"
      style={{
        bottom: '-15px',
        color: '#fff',
      }}
    >
      <FontAwesomeIcon icon={faCaretDown} size="2x" />
    </div>
  </div>
  
);

export default VerifyingIconDetail;
