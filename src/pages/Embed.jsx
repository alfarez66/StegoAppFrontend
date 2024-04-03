import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'flowbite';
import axios from '../api/axios';

const Embed = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [compressionMethod, setCompressionMethod] = useState('huffman');
  const [embeddedImage, setEmbeddedImage] = useState(null);
  const [response, setResponse] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [huffmanCodes, setHuffmanCodes] = useState({});
  const [pwr, setPwr] = useState()
  const [freq, setFreq] = useState()
  const [embeddedImageFileName, setEmbeddedImageFileName] = useState('');

  useEffect(() => {
    const pathSegment = window.location.pathname.split('/').slice(-1)[0];
    setPageTitle(pathSegment.toUpperCase());
  }, []);

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
      const payload = {
        image: image.split(',')[1],
        text: text,
        compressionMethod: compressionMethod,
      };
      const response = await axios.post(`/encode/${compressionMethod}`, payload);
      if (response.data.success) {
        const embeddedImageBase64 = `data:image/jpeg;base64,${response.data.image}`;
        setEmbeddedImage(embeddedImageBase64);
        setEmbeddedImageFileName('embedded_image.jpg');
        if(compressionMethod === 'huffman'){
          setHuffmanCodes(response.data.codes);
        } else if(compressionMethod === 'ac'){
          setPwr(response.data.powr)
          setFreq(response.data.freq)
        } else if(compressionMethod === 'deflate'){
          setHuffmanCodes(response.data.codes);
        }
        setResponse('Message successfully embedded!');
      } else {
        setResponse('Error: ' + response.data.error);
      }
    } catch (error) {
      setResponse(error.message);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = embeddedImage;
    link.download = embeddedImageFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4 mt-8">
        {pageTitle}
      </h1>
      <div className="w-full max-w-2xl rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 shadow-lg">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Upload Image</h3>
          <div
            {...getRootProps()}
            className="relative w-full h-96 overflow-hidden rounded-lg cursor-pointer border-2 border-gray-600 hover:border-purple-400 transition-colors duration-300"
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={image} alt="preview" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <p className="text-xl">Drag 'n' drop files here, or click to select</p>
                <p className="text-gray-500">(jpg, jpeg, png)</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Enter your message here</h3>
          <textarea
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Compression method</h3>
          <select
            className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={compressionMethod}
            onChange={(e) => setCompressionMethod(e.target.value)}
          >
            <option value="huffman">Huffman Encoding</option>
            <option value="ac">Arithmetic Coding</option>
            <option value="deflate">Deflate</option>
            <option value="jbit">J-Bit Encoding</option>
            <option value="lzw">Lempel Ziv Welch</option>
            <option value="rle">Run-length encoding</option>
          </select>
          <p className="text-gray-400 mt-2">
            You can choose from six different methods to compress your message. Each method has different trade-offs in
            terms of speed, quality, and compatibility with different types of images and messages.
          </p>
        </div>
        <button
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md"
          onClick={handleEmbed}
        >
          Embed Message
        </button>
        {embeddedImage && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Embedded Image</h3>
            <div className="flex items-center">
              <img src={embeddedImage} alt="embedded image" className="w-full h-64 object-cover mr-4" />
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md"
                onClick={handleDownloadImage}
              >
                Download Image
              </button>
            </div>
          </div>
        )}
        {response && <p className="text-xl mt-4 text-green-500">{response}</p>}
        {huffmanCodes && Object.keys(huffmanCodes).length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Huffman Codes</h3>
            <pre className="bg-gray-700 p-4 rounded-md text-gray-300">
              {Object.entries(huffmanCodes).map(([char, code]) => (
                <div key={char}>
                  {char}: {code}
                </div>
              ))}
            </pre>
          </div>
        )}
        {pwr>=0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Arithmetic pwr</h3>
            <pre className="bg-gray-700 p-4 rounded-md text-gray-300">
              {<div>
                {pwr}
              </div>}
            </pre>
          </div>
        )}
        {freq && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Arithmetic freq</h3>
            <pre className="bg-gray-700 p-4 rounded-md text-gray-300">
              {Object.entries(freq).map(([char, code]) => (
                <div key={char}>
                  {char}: {code}
                </div>
              ))}
            </pre>
          </div>
        ) }
      </div>
    </div>
  );
};

export default Embed;