/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, { useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function CropDemo({ src, setProfilePhoto }) {
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 16 / 16,
    borderRadius: 50,
  });
  const imageRef = useRef(null);
  const makeClientCrop = async (crop) => {
    if (imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef.current,
        crop,
        'newFile.jpeg'
      );
      setCroppedImage(croppedImageUrl);
    }
  };
  const onImageLoaded = (image) => {
    imageRef.current = image;
  };

  const onComplete = (crop) => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));

          return;
        }
        blob.name = fileName;
        let fileUrl;
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    });
  };

  const handleSaveImageClick = (e) => {
    e.preventDefault();

    if (croppedImage) setProfilePhoto(croppedImage);
  };

  return (
    <>
      <ReactCrop
        src={src}
        crop={crop}
        circularCrop
        onImageLoaded={onImageLoaded}
        onComplete={onComplete}
        onChange={onCropChange}
      />
      <div className="text-center">
        <button
          type="button"
          className="bg-black text-white my-2 px-3 py-2 text-sm 
          font-semibold rounded-md cursor-pointer"
          onClick={handleSaveImageClick}
        >
          Crop & Save
        </button>
      </div>
    </>
  );
}

function ShowProfilePhoto({
  showprofilephoto,
  setShowprofilephoto,
  profilePhoto,
  setProfilePhoto,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const profileInputEl = useRef(null);

  const changeHandler = (e) => {
    setProfilePhoto(null);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setSelectedImage(reader.result);
    };
  };

  const handleCloseModal = () => {
    setShowprofilephoto(false);
    setSelectedImage(null);
  };

  const handleReplaceClick = (e) => {
    e.preventDefault();

    profileInputEl.current.click();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setProfilePhoto(null);
  };

  return (
    <>
      {showprofilephoto ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative flex max-h-[746px] flex-col h-[94%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black min-w-[600px]">
              <div
                className="top-0 sticky z-50 flex items-center justify-between p-5 bg-white pt-3 pr-3 pb-3 pl-6 rounded-t-lg max-h-[60px] min-h-[75px] rounded-b-sm my-auto"
                style={{ boxShadow: '2px 2px 8px rgb(0 0 0/8%)' }}
              >
                <button
                  type="button"
                  className="mr-2 h-8 w-8 tranform ease-in-out duration-200 flex items-center justify-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#033443]"
                    onClick={handleCloseModal}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button
                  className="bg-[#201e27] text-white background-transparent font-medium px-3 py-2 min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Save
                </button>
              </div>
              {profilePhoto === null ? (
                selectedImage === null ? (
                  <div className="h-full">
                    <h5 className="text-center text-[14px] leading-6 mt-[29px] font-medium">
                      Edit Profile Photo
                    </h5>
                    <div
                      className="border border-dashed relative h-[250px] 
              m-5 flex items-center justify-center cursor-pointer border-[#CDCECE]"
                      // onClick={displayProfileInput}
                    >
                      <input
                        type="file"
                        multiple
                        className="cursor-pointer relative block opacity-0 w-full h-full z-50"
                        onChange={changeHandler}
                      />
                      <div className="text-center absolute m-auto flex items-center justify-center space-x-1">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p>
                          Drag and drop your photo or{' '}
                          <span className="text-[#00f]">browse</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="mx-auto mt-10"
                    style={{ height: '360px', width: '480px' }}
                  >
                    <CropDemo
                      src={selectedImage}
                      profilePhoto={profilePhoto}
                      setProfilePhoto={setProfilePhoto}
                    />
                  </div>
                )
              ) : (
                <div className="h-full">
                  <h5 className="text-center text-[14px] leading-6 mt-[29px] font-medium">
                    Edit Profile Photo
                  </h5>
                  <div
                    className="border border-dashed relative h-[196px]
              m-5 flex items-center justify-center cursor-pointer border-[#CDCECE]"
                    // onClick={displayProfileInput}
                  >
                    {/* <div className="h-full bg-red-400 flex items-center justify-center"> */}
                    <div className="flex flex-col items-center">
                      <div
                        className="h-14 w-14 cursor-pointer rounded-full bg-no-repeat bg-center bg-cover"
                        style={{
                          backgroundImage: `url("${profilePhoto}")`,
                        }}
                      />
                      <div className="text-xs font-bold mt-2">
                        <input
                          type="file"
                          multiple
                          className="cursor-pointer relative hidden"
                          onChange={changeHandler}
                          ref={profileInputEl}
                        />
                        <span
                          className="mr-2 text-blue-600 cursor-pointer"
                          onClick={handleReplaceClick}
                        >
                          Replace
                        </span>
                        <span
                          className="text-red-500 cursor-pointer"
                          onClick={handleDelete}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="h-[170px] pointer-events-none" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ShowProfilePhoto;
