import React from 'react';

const Help = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-900 to-black min-h-screen px-8 py-16 text-white">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center mb-12 tracking-wide">
        Unlock the Secrets of Steganography
      </h1>
      <div className="flex flex-col gap-12">
        {/* Embedding and Extraction using LSB */}
        <div className="flex flex-col items-center rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Embedding & Extraction with LSB</h2>
          <p className="text-gray-300 text-center leading-relaxed">
            Stegocraft utilizes <span className="font-semibold">Least Significant Bit (LSB)</span> steganography, a common technique for embedding hidden messages within digital images. During the embedding process, the program manipulates the least significant bit of each pixel's color value (red, green, and blue) to encode message data. These modifications are typically subtle and often go unnoticed by the human eye, preserving the overall image quality.
            <br />
            <br />
            Extraction reverses this process. The program analyzes the least significant bits of the image pixels and reconstructs the hidden message based on the embedded data patterns.
          </p>
        </div>

        {/* Compression Methods Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Run-Length Encoding */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Run-Length Encoding (RLE)</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">Run-Length Encoding (RLE)</span> is a lossless compression technique that identifies and replaces sequences of identical values with a single value and its repetition count. This approach is particularly effective for data containing frequent repetitions, such as solid color backgrounds or patterns in images. By eliminating redundant data, RLE can significantly reduce file size without compromising image quality.
            </p>
          </div>

          {/* Huffman Coding */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Huffman Coding</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">Huffman Coding</span> is another lossless compression technique. It analyzes the frequency of symbols (e.g., color values) in the data and assigns shorter codes to frequently occurring symbols and longer codes to less frequent ones. This approach exploits the inherent non-uniformity of data distribution, achieving compression by efficiently representing common patterns with shorter codes.
            </p>
          </div>

          {/* Arithmetic Coding */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Arithmetic Coding</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">Arithmetic Coding</span> is a powerful but complex lossless compression technique that utilizes probability distributions to represent symbols with variable-length codes. Unlike fixed-length coding methods like Huffman, arithmetic coding can potentially achieve higher compression ratios by adapting the code length based on the symbol's probability. However, due to its complexity, it might not be as widely used in practical applications compared to simpler techniques.
            </p>
          </div>

          {/* Lempel-Ziv-Welch (LZW) */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Lempel-Ziv-Welch (LZW)</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">Lempel-Ziv-Welch (LZW)</span> is a dictionary-based compression technique that builds and maintains a dictionary of recurring patterns or sub-strings, and dynamically assigns new codes during the compression process. Initially, the dictionary contains individual symbols. As the algorithm encounters repeating sequences, it adds them to the dictionary and assigns them unique codes. Subsequently, the original data is replaced with these codes, achieving compression by representing frequently occurring patterns with shorter codes. LZW is particularly effective for data with recurring patterns or sub-strings.
            </p>
          </div>

          {/* J-bit Encoding */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">J-bit Encoding</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">J-bit Encoding</span> is a lossy compression technique commonly used for images. It reduces the number of bits used to represent each pixel's color value by discarding the least significant bits (j bits). This approach sacrifices some image fidelity for smaller file sizes. The choice of "j" depends on the desired balance between compression ratio and image quality. Higher values of "j" result in greater compression but also introduce more noticeable loss of detail.
            </p>
          </div>

          {/* DEFLATE Compression */}
          <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">DEFLATE Compression</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold">DEFLATE Compression</span> is a combination of lossless techniques, including Huffman Coding and LZ77 (similar to LZW), widely used in popular archive formats like ZIP. It first applies LZ77 to identify and replace repeated sequences with references, then utilizes Huffman Coding to represent the remaining data efficiently. This combined approach achieves significant compression without introducing data loss, making DEFLATE a versatile and popular choice for various compression tasks.
            </p>
          </div>
        </div>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 40%)`,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Help;