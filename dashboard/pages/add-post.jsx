import { createRef, useState } from 'react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Sidebar from '../components/common/Sidebar';
import classNames from '../utils/constants/classNames';
import Input from '../components/common/Input';

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    image: '',
    companyName: '',
    companyLink: '',
  });
  const imageUpload = createRef();
  const [errors, setErrors] = useState({
    titleError: '',
    bodyError: '',
    nameError: '',
    linkError: '',
    imageError: '',
    validated: false,
  });
  const { titleError, bodyError, linkError, nameError, validated, imageError } =
    errors;
  const { title, body, companyLink, companyName, image } = formData;
  const handleChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleImageUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData((f) => ({ ...f, image: reader.result }));
    };
    e.target.files = null;
  };
  return (
    <>
      <Sidebar />
      <main className="w-main float-right">
        <div className="mx-4">
          <Container>
            <div className="border rounded-lg p-4">
              <form className="mt-8 w-full lg:w-11/12 xl:w-10/12 mx-auto">
                <Input
                  fieldName="Post Title"
                  fullWidth
                  required
                  value={title}
                  error={titleError}
                  name="title"
                  placeHolder="Enter the title"
                  type="text"
                  handleChange={handleChange}
                />
                <div className="mt-6">
                  <label
                    htmlFor="body"
                    className="block text-sm font-semibold text-light"
                  >
                    Post body
                  </label>
                  <textarea
                    className={classNames(
                      'w-full mt-1 rounded-md bg-blueGrey-100 border border-gray-300 focus:ring-0 duration-150 ease-in focus:border-2 focus:border-focus-cyan px-2 py-3 outline-none',
                      bodyError && 'ring-red-700 border-red-700'
                    )}
                    value={body}
                    name="body"
                    onChange={handleChange}
                    rows={10}
                    required
                    placeholder="Enter the Post Body"
                  />
                  {bodyError && (
                    <p className="text-red-700 flex items-center text-sm mt-1 font-semibold ml-2">
                      <svg
                        className="mr-1.5"
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="#e0133e"
                        style={{
                          fontSize: '1.1rem',
                          width: '1em',
                          height: '1em',
                        }}
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      <span className="inline-block">{bodyError}</span>
                    </p>
                  )}
                </div>
                <div className="xl:grid xl:grid-cols-2 xl:gap-4 mt-2">
                  <div>
                    <Input
                      fieldName="Company Name"
                      required
                      fullWidth
                      value={companyName}
                      error={nameError}
                      name="companyName"
                      placeHolder="Enter Company Name"
                      type="text"
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="mt-2 xl:mt-0">
                    <Input
                      fieldName="Company Link"
                      required
                      fullWidth
                      value={companyLink}
                      error={linkError}
                      name="companyLink"
                      placeHolder="Enter Company Link"
                      type="text"
                      handleChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <Button handleClick={() => imageUpload.current.click()}>
                    Upload Image
                  </Button>
                  {image ? (
                    <img
                      alt="pic preview"
                      src={image}
                      className="min-h-[16rem] rounded-md min-w-[24rem] max-h-64 max-w-sm object-center object-cover"
                    />
                  ) : (
                    <div className="min-h-[16rem] rounded-md min-w-[24rem] justify-center max-h-64 max-w-sm flex flex-col bg-blueGrey-100">
                      <div className="self-center font-semibold text-base text-light">
                        {imageError ? (
                          <div className="text-red-700 flex items-center">
                            <svg
                              className="mr-1.5"
                              focusable="false"
                              viewBox="0 0 24 24"
                              fill="#e0133e"
                              style={{
                                fontSize: '1.1rem',
                                width: '1em',
                                height: '1em',
                              }}
                              aria-hidden="true"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                            <span className="inline-block">{imageError}</span>
                          </div>
                        ) : (
                          'Image Preview'
                        )}
                      </div>
                    </div>
                  )}

                  <input
                    ref={imageUpload}
                    type="file"
                    hidden
                    onChange={handleImageUpload}
                    accept="image/png, image/gif, image/jpeg"
                  />
                </div>
                <button
                  type="submit"
                  // disabled={!validated}
                  className="my-12 bg-signup-blue disabled:cursor-default disabled:bg-opacity-50 w-40 text-sm block text-white px-3 py-2.5 rounded-md transition-all duration-200 ease-in font-bold"
                >
                  Post
                </button>
              </form>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default AddPost;
