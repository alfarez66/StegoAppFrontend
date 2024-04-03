import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import stenography from 'stenography';
import { useDropzone } from 'react-dropzone';
import 'flowbite';

const Mrle = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [compressionMethod, setCompressionMethod] = useState('lsb');
  const [embeddedImage, setEmbeddedImage] = useState(null);
  const [response, setResponse] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const pathSegment = window.location.pathname.split('/').slice(-1)[0]; // Get the last path segment
    setPageTitle(pathSegment.toUpperCase()); // Convert to uppercase
  }, []); // Run only once on component mount


  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    },
  });

  const handleEmbed = async () => {
    try {
      const response = await axios.post('/embed', {
        image: image.split(',')[1], // Base64 string without the data prefix
        text,
        compressionMethod,
      });
  
      if (response.data.success) {
        const embeddedImageBase64 = `data:image/jpeg;base64,${response.data.embeddedImage}`;
        setEmbeddedImage(embeddedImageBase64);
        setResponse('Message successfully embedded!');
      } else {
        setResponse('Error: ' + response.data.error);
      }
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-16">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12 tracking-wide">
        {pageTitle}
      </h1>
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Upload Image</h3>
          <div
            {...getRootProps()}
            className="relative w-full h-64 overflow-hidden rounded-lg cursor-pointer border-2 border-gray-300"
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={image} alt="preview" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-xl">Drag 'n' drop files here, or click to select</p>
                <p className="text-gray-400">(jpg, jpeg, png)</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Enter your message here</h3>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {/* <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Compression method</h3>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={compressionMethod}
            onChange={(e) => setCompressionMethod(e.target.value)}
          >
            <option value="lsb">Least Significant Bit</option>
            <option value="ss">Spatial Spectrum</option>
            <option value="sss">Spatial Spectrum with Spread Spectrum</option>
          </select>
          <p className="text-gray-500 mt-2">
            You can choose from six different methods to compress your message. Each method has different trade-offs in
            terms of speed, quality, and compatibility with different types of images and messages.
          </p>
        </div> */}
        <button
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
          onClick={handleEmbed}
        >
          Embed Message
        </button>
        {embeddedImage && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Embedded Image</h3>
            <img src={embeddedImage} alt="embedded image" className="w-full h-64 object-cover" />
          </div>
        )}
        {response && <p className="text-xl mt-4 text-green-500">{response}</p>}
      </div>
    </div>
  );
};

export default Mrle;