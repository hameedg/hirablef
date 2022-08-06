/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import formatDate from '../../../utils/constants/formatDate';
import OtherCertificate from './OtherCertificate';
import AddNew from './AddNew';
import EditForm from './EditForm';
import Resume from './Resume';
import Transcripts from './Transcripts';
import WorkCertificate from './WorkCertificate';
import DocumentsList from './DocumentsList';
import DocumentHeader from './DocumentHeader';
import DocList from './DocList';

const Documents = ({ documents, setdocuments }) => {
  const [addnew, setaddnew] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [documentType, setDocumentType] = useState('');

  const [documentFormData, setDocumentFormData] = useState({
    documentType,
    documentName: '',
    category: 'Category',
  });
  const [documentFile, setDocumentFile] = useState({
    name: '',
    file: null,
  });

  useEffect(() => {
    setDocumentFormData({
      documentType,
      documentName: '',
      category: 'Category',
    });
    setDocumentFile({
      name: '',
      file: null,
    });

    if (addnew) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [addnew]);
  useEffect(() => {
    if (displayEditForm) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [displayEditForm]);

  const [currentEditIndex, setCurrentEditIndex] = useState(0);
  const [currentEditDocumentType, setCurrentEditDocumentType] = useState('');

  const [resumeDocuments, setResumeDocuments] = useState([
    {
      selected: false,
      status: 'verifying',
      documentName: 'Dummy Resume',
      dateAdded: formatDate(new Date()),
      fileName: 'Some_really_really_really_really_long_pdf_file.pdf',
      file: null,
    },
  ]);
  const [transcriptsDocuments, setTranscriptsDocuments] = useState([
    {
      selected: false,
      status: 'verification_complete',
      documentName: 'Dummy Resume',
      dateAdded: formatDate(new Date()),
      fileName: 'Some_really_really_really_really_long_pdf_file.pdf',
      file: null,
    },
  ]);
  const [workCertificates, setWorkCertificates] = useState([
    {
      selected: false,
      status: 'verification_failed',
      documentName: 'Dummy Completion Certificate',
      dateAdded: formatDate(new Date()),
      fileName: 'Some_really_really_really_really_long_pdf_file.pdf',
      file: null,
    },
  ]);
  const [otherCertificates, setOtherCertificates] = useState([]);

  const handleAdd = (e, type) => {
    e.preventDefault();

    if (type === 'resume')
      setResumeDocuments([
        ...resumeDocuments,
        {
          selected: false,
          status: 'verifying',
          documentName: documentFormData.documentName,
          dateAdded: formatDate(new Date()),
          fileName: documentFile.name,
          file: documentFile.file,
        },
      ]);
    else if (type === 'transcripts')
      setTranscriptsDocuments([
        ...transcriptsDocuments,
        {
          selected: false,
          status: 'verifying',
          documentName: documentFormData.documentName,
          dateAdded: formatDate(new Date()),
          fileName: documentFile.name,
          file: documentFile.file,
        },
      ]);
    else if (type === 'workcertificate')
      setWorkCertificates([
        ...workCertificates,
        {
          selected: false,
          status: 'verifying',
          documentName: documentFormData.documentName,
          category: documentFormData.category,
          dateAdded: formatDate(new Date()),
          fileName: documentFile.name,
          file: documentFile.file,
        },
      ]);
    else if (type === 'othercertificate')
      setOtherCertificates([
        ...otherCertificates,
        {
          selected: false,
          status: 'verifying',
          documentName: documentFormData.documentName,
          category: documentFormData.category,
          dateAdded: formatDate(new Date()),
          fileName: documentFile.name,
          file: documentFile.file,
        },
      ]);
    else;

    setDocumentFormData({ documentType: documents, documentName: '' });
    setDocumentFile({ name: '', file: null });
    setaddnew(false);
  };

  const handleEdit = (index, documentType) => {
    setCurrentEditIndex(index);
    setCurrentEditDocumentType(documentType);
    setDisplayEditForm(true);

    let currentDocument;

    if (documentType === 'resume') currentDocument = resumeDocuments[index];
    else if (documentType === 'transcripts')
      currentDocument = transcriptsDocuments[index];
    else if (documentType === 'workcertificate')
      currentDocument = workCertificates[index];
    else if (documentType === 'othercertificate')
      currentDocument = otherCertificates[index];
    else return;

    setDocumentFormData({
      documentName: currentDocument.documentName,
      documentType,
      category: currentDocument.category,
    });
    setDocumentFile({
      name: currentDocument.fileName,
      file: currentDocument.file,
    });
  };

  const handleDocumentEdit = (e) => {
    e.preventDefault();

    if (currentEditDocumentType === 'resume') {
      const newDocuments = resumeDocuments.map((document, index) => {
        let documentItem;
        if (index === currentEditIndex)
          documentItem = {
            selected: document.selected,
            status: document.status,
            documentName: documentFormData.documentName,
            dateAdded: formatDate(new Date()),
            fileName: documentFile.name,
            file: documentFile.file,
          };
        else documentItem = document;

        return documentItem;
      });

      setResumeDocuments(newDocuments);
    } else if (currentEditDocumentType === 'transcripts') {
      const newDocuments = transcriptsDocuments.map((document, index) => {
        let documentItem;
        if (index === currentEditIndex)
          documentItem = {
            selected: document.selected,
            status: document.status,
            documentName: documentFormData.documentName,
            dateAdded: formatDate(new Date()),
            fileName: documentFile.name,
            file: documentFile.file,
          };
        else documentItem = document;

        return documentItem;
      });

      setTranscriptsDocuments(newDocuments);
    } else if (currentEditDocumentType === 'workcertificate') {
      const newDocuments = workCertificates.map((document, index) => {
        let documentItem;
        if (index === currentEditIndex)
          documentItem = {
            selected: document.selected,
            status: document.status,
            documentName: documentFormData.documentName,
            dateAdded: formatDate(new Date()),
            fileName: documentFile.name,
            file: documentFile.file,
          };
        else documentItem = document;

        return documentItem;
      });

      setWorkCertificates(newDocuments);
    } else if (currentEditDocumentType === 'othercertificate') {
      const newDocuments = otherCertificates.map((document, index) => {
        let documentItem;
        if (index === currentEditIndex)
          documentItem = {
            selected: document.selected,
            status: document.status,
            documentName: documentFormData.documentName,
            dateAdded: formatDate(new Date()),
            fileName: documentFile.name,
            file: documentFile.file,
          };
        else documentItem = document;

        return documentItem;
      });

      setOtherCertificates(newDocuments);
    } else;

    setDocumentFormData({ documentType: document, documentName: '' });
    setDocumentFile({ name: '', file: null });
    setCurrentEditIndex(0);
    setCurrentEditDocumentType('');
    setDisplayEditForm(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (currentEditDocumentType === 'resume')
      setResumeDocuments(
        resumeDocuments.filter((_, index) => index !== currentEditIndex)
      );
    else if (currentEditDocumentType === 'transcripts')
      setTranscriptsDocuments(
        transcriptsDocuments.filter((_, index) => index !== currentEditIndex)
      );
    else if (currentEditDocumentType === 'workcertificate')
      setWorkCertificates(
        workCertificates.filter((_, index) => index !== currentEditIndex)
      );
    else if (currentEditDocumentType === 'othercertificate')
      setOtherCertificates(
        otherCertificates.filter((_, index) => index !== currentEditIndex)
      );
    else;

    setDisplayEditForm(false);
    setDocumentFormData({ documentType: 'resume', documentName: '' });
    setDocumentFile({ name: '', file: null });
    setCurrentEditIndex(0);
    setCurrentEditDocumentType('');
  };

  const handleClick = (e, documentType) => {
    e.preventDefault();
    setaddnew(true);
    setDocumentType(documentType);

    setDocumentFormData({
      ...documentFormData,
      documentType,
      documentName: '',
      category: 'Category',
    });
  };
  const allDocs =[...resumeDocuments , ...transcriptsDocuments , ...workCertificates]
  
  return (
    <div className={documents ? 'block' : 'hidden'}>
      <div className="min-h-screen pb-[20px] bg-[#f8f8f8] antialiased">
        <div className="bg-white w-full h-[133px] flex flex-col items-center justify-center">
          <p className="text-[25px] font-medium capitalize">{documents}</p>
          <div
            className="absolute top-[50px] left-[22%] flex items-center cursor-pointer m-auto space-x-1"
            onClick={() => setdocuments('')}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
            </svg>
            <p>Back</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-[#033443] flex max-w-[750px] mx-auto my-0">
            <div
              className="bg-white m-auto py-[1.5rem] px-[2rem] ml-0 border-[1.5px]
            border-[#d9d9d9] rounded-[9px] mb-[15px] w-full"
            >
               {/* <DocumentsList
                documentType="Resume"
                documents={resumeDocuments}
                handleEdit={handleEdit}
                handleClick={handleClick}
              /> */}

              <DocumentsList
                documentType="Transcript"
                documents={allDocs}
                handleEdit={handleEdit}
                handleClick={handleClick}
              />

            </div>
          </div>
{/*           
          <div className="text-[#033443] flex max-w-[750px] mx-auto my-0">
            <div
              className="bg-white m-auto py-[1.5rem] px-[2rem] ml-0 border-[1.5px]
            border-[#d9d9d9] rounded-[9px] mb-[15px] w-full"
            >
             
               <DocumentsList
                documentType="Transcript"
                documents={allDocs}
                handleEdit={handleEdit}
                handleClick={handleClick}
              />
             
            </div>
          </div>
          <div className="text-[#033443] flex max-w-[750px] mx-auto my-0">
            <div
              className="bg-white m-auto py-[1.5rem] px-[2rem] ml-0 border-[1.5px]
            border-[#d9d9d9] rounded-[9px] mb-[15px] w-full"
            >
              <DocumentsList
                documentType="Work Certificate"
                documents={workCertificates}
                handleEdit={handleEdit}
                handleClick={handleClick}
              />
            </div>
          </div> */}
          <div className="text-[#033443] flex max-w-[750px] mx-auto my-0">
            <div
              className="bg-white m-auto py-[1.5rem] px-[2rem] ml-0 border-[1.5px]
            border-[#d9d9d9] rounded-[9px] mb-[15px] w-full"
            >
              <OtherCertificate
                documents={otherCertificates}
                handleEdit={handleEdit}
                handleClick={handleClick}
              />
            </div>
          </div>
          {addnew ? (
            <AddNew
              documentType={documentType}
              setaddnew={setaddnew}
              formData={documentFormData}
              setFormData={setDocumentFormData}
              documentFile={documentFile}
              setDocumentFile={setDocumentFile}
              handleAdd={handleAdd}
            />
          ) : displayEditForm ? (
            <EditForm
              formData={documentFormData}
              setFormData={setDocumentFormData}
              setDisplayEditForm={setDisplayEditForm}
              documentFile={documentFile}
              setDocumentFile={setDocumentFile}
              handleDocumentEdit={handleDocumentEdit}
              handleDelete={handleDelete}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;
