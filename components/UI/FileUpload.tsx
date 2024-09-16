import React, { useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiImageAddFill } from 'react-icons/ri';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxFileSize?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = 'image/jpeg,image/jpg,image/png,image/webp,image/gif',
  maxFileSize = 307200,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateAndSelectFile(files[0]);
    }
  };

  const validateAndSelectFile = (file: File) => {
    const fileType = file.type;
    const fileSize = file.size;

    if (!accept.split(',').includes(fileType)) {
      setError(`Invalid file type. Accepted types: ${accept}`);
      return;
    }

    if (maxFileSize && fileSize > maxFileSize) {
      setError(`File size should not exceed ${maxFileSize / 1024} KB`);
      return;
    }

    setError(null);
    setSelectedFile(file);
    onFileSelect(file);

    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    onFileSelect(null);
  };

  return (
    <div className="sm:w-[15rem] max-h-[11rem] overflow-hidden cursor-pointer w-full border border-dashed border-gray-600 lg:mt-8 mt-6 rounded-md p-2 flex flex-col items-center justify-center hover:border-gray-300 duration-200">
      {!selectedFile ? (
        <div className="flex flex-col items-center" onClick={handleClick}>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept={accept}
            onChange={handleFileChange}
          />
          <RiImageAddFill className="text-gray-400 text-6xl" />
          <p className="text-gray-400">Logo <span className="text-red-500">*</span></p>
          <p className="text-sm text-gray-400">(jpeg/jpg/png/webp/gif)</p>
          <p className="text-sm text-gray-400">Max file size: 300 KB</p>
        </div>
      ) : (
        <div className="relative">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Selected file"
              className="rounded-lg w-full h-full object-cover object-center"
            />
          )}
          <button
            onClick={handleDelete}
            className="group absolute top-2 right-2 bg-shade-95 hover:bg-red-500 border border-red-500 border-dashed text-white rounded-full w-8 h-8 flex justify-center items-center"
            title="Delete image"
          >
            <FaTimes className="text-white" />
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default FileUpload;
