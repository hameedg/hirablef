import React from 'react';

const AddNew = ({
  documentType,
  setaddnew,
  formData,
  setFormData,
  documentFile,
  setDocumentFile,
  handleAdd,
}) => {
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (
      file.name.split('.').pop() !== 'pdf' &&
      file.name.split('.').pop() !== 'docx'
    )
      return;

    const data = new Blob([file], {
      type: 'application/pdf',
    });
    const textFile = window.URL.createObjectURL(data);
    setDocumentFile({ name: file.name, file: textFile });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
        <div className="relative w-[37.5rem] my-[24px] mx-auto flex-col rounded-[8px] bg-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-label="Close modal"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute cursor-pointer top-5 right-5 w-[32px] h-[32px] pt-0 z-10 text-[#808080]"
            onClick={() => setaddnew(false)}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
          {/* header section */}
          <div className="flex items-center justify-between sticky top-0 h-[200px] max-h-[60px] py-[8px] px-[1.5rem] bg-[#eff2f6] rounded-lg">
            <h3 className="text-[0.875rem] leading-[1.25rem] font-semibold m-0">
              Add a new{' '}
              {documentType === 'workcertificate'
                ? 'work certificate'
                : documentType === 'othercertificate'
                ? 'other certificate'
                : documentType}
            </h3>
          </div>
          {/* header end */}

          {/* main start */}
          <div className="document_modal">
            <div className="flex justify-between w-full">
              {documentType === 'workcertificate' ||
              documentType === 'othercertificate' ? (
                <div className="w-[30%]">
                  <label
                    htmlFor=""
                    className="text-[0.75rem] leading-[1.6] mb-[5px] block font-semibold w-full"
                  >
                    Category
                  </label>
                  <select
                    name="type"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className=" outline-none border-[1.5px] focus:outline-none 
                  focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in 
                  rounded-[0.3125rem] pt-0 pb-[0.1em] 
                  relative w-full h-[38px] mb-[0.625rem] text-sm"
                  >
                    <option value="Category" disabled>
                      Category{' '}
                    </option>
                    {documentType === 'workcertificate' ? (
                      <>
                        <option value="offerletter">Offer Letter</option>
                        <option value="completioncertificate">
                          Completion Certificate
                        </option>
                      </>
                    ) : (
                      <>
                        <option value="collegeid">College ID</option>
                        <option value="nationalid">National ID</option>
                        <option value="passport">Passport</option>
                      </>
                    )}
                    <option value="other">Other</option>
                  </select>
                </div>
              ) : (
                <></>
              )}
              <div
                className={
                  documentType === 'workcertificate' ||
                  documentType === 'othercertificate'
                    ? 'w-[65%]'
                    : 'w-full'
                }
              >
                <label
                  htmlFor=""
                  className="text-[0.75rem] leading-[1.6] mb-[5px] block font-semibold"
                >
                  Document Name
                </label>
                <input
                  name="name"
                  className="text-[0.875rem] mt-0 mr-0 mb-[13px] text-[#030303] block 
                  h-[38px] leading-[1.375rem] outline-none pt-0 pl-[0.875rem] pb-[0.1em]
                  rounded-[0.3125rem] border-[1.5px] focus:outline-none focus:border-[#2dc5a1]
                  focus:border-2 transition duration-200 ease-in w-full"
                  autoComplete="off"
                  value={formData.documentName}
                  onChange={(e) =>
                    setFormData({ ...formData, documentName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="h-[130px] flex flex-col w-full bg-[#e8ebec] items-center justify-center mt-1">
              <p className="mt-0 mb-[1rem] text-[14px] my-auto">
                {documentFile.file
                  ? documentFile.name
                  : 'Drag and Drop a PDF or Word doc here or Select a file'}
              </p>
              <button
                type="button"
                className="relative outline-none border-none py-[10px] px-[15px] h-[36px] bg-[#01a3a4] text-white rounded-[5px] font-semibold text-[13.33px] cursor-pointer"
              >
                Select a file from your computer
                <input
                  type="file"
                  multiple
                  className="cursor-pointer absolute block opacity-0 w-full h-full z-50 top-0 right-[1%]"
                  onChange={handleChange}
                />
              </button>
            </div>
            <div className="float-right ml-[0.75rem] mt-[1.5rem]">
              <button
                type="button"
                className={`ml-[0.9375rem] outline-none min-w-[9.0625rem] py-[0.625rem] 
              px-[0.75rem] rounded-[0.3125rem] font-semibold text-[0.875rem] h-[2.5rem] 
              text-white bg-[#1a73e8] mb-[20px] border-none mt-[10px] ${
                formData.documentName === '' || documentFile.file === null
                  ? 'cursor-not-allowed opacity-50'
                  : 'cursor-pointer'
              }`}
                onClick={(e) => handleAdd(e, documentType)}
                disabled={
                  formData.documentName === '' || documentFile.file === null
                }
              >
                Add Document
              </button>
            </div>
          </div>
          {/* main end */}
        </div>
      </div>
    </>
  );
};

export default AddNew;
