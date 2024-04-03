import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'flowbite';
import axios from '../api/axios';

const Embed = () => {
  const [image, setImage] = useState(null);
  const [embeddedImage, setEmbeddedImage] = useState(null);
  const [code, setCode] = useState("");
  const [freq, setfreq] = useState('');
  const [pwr, setPwr] = useState(0);

  const [compressionMethod, setCompressionMethod] = useState('huffman');
  const [pageTitle, setPageTitle] = useState('');
  const [huffmanCodes, setHuffmanCodes] = useState('');
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

  const handleExtract = async () => {
    try {
      const payload = {
        image: image.split(',')[1],
        code: code,
        freq: freq,
        pwr:pwr,
        compressionMethod: compressionMethod,
      };
      const response = await axios.post(`/decode/${compressionMethod}`, payload);
      if (response.data.success) {
        const embeddedImageBase64 = `data:image/jpeg;base64,${response.data.image}`;
        setEmbeddedImage(embeddedImageBase64);
        setEmbeddedImageFileName('embedded_image.jpg');
        setHuffmanCodes(response.data.text);
        setResponse('Message successfully embedded!');
      } else {
        setResponse('Error: ' + response.data.error);
      }
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4 mt-8">
        {pageTitle}
      </h1>
      <div className="w-full max-w-2xl rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 flex-grow shadow-lg">
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
            You can choose from six different methods to compress your message. Each method has different trade-offs in terms of speed, quality, and compatibility with different types of images and messages.
          </p>
        </div>
        {compressionMethod === 'huffman'&& (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Enter Huffman tree here!</h3>
            <textarea
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="4"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        )}
        {compressionMethod==='deflate' && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Enter Huffman tree here!</h3>
            <textarea
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="4"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        )}
        {compressionMethod === 'ac' && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Enter Arithmetic freq</h3>
            <textarea
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="4"
              value={freq}
              onChange={(e) => setfreq(e.target.value)}
            />
          </div>
        ) }{
        compressionMethod==='ac' && (
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Enter Arithmetic pwr here!</h3>
            <textarea
              className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="4"
              value={pwr}
              onChange={(e) => setPwr(e.target.value)}
            />
          </div>
        )}
        <button
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md"
          onClick={handleExtract}
        >
          Extract Message
        </button>
        {huffmanCodes && Object.keys(huffmanCodes).length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-2">Message</h3>
            <pre
              className="bg-gray-700 p-4 rounded-md text-gray-300 overflow-y-auto max-h-96"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <div>{huffmanCodes}</div>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Embed;