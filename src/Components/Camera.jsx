import React, { useRef, useState, useEffect } from 'react';
const Camera = () => {
    const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [stream, setStream] = useState(null);
  
  useEffect(() => {
    startCamera();
  }, []);

  // Start Camera Stream
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' } // 'user' = front camera, 'environment' = back camera
      });
      setStream(mediaStream); // Save the stream so we can stop it later
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Stop Camera Stream
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop()); // Stop all tracks
      setStream(null);
    }
  };

  // Capture Image
  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageUrl = canvasRef.current.toDataURL('image/png'); // Convert canvas to image URL
      setPhoto(imageUrl);
      stopCamera(); // Stop camera after taking a picture
    }
  };

  // Retake Image
  const retakePhoto = () => {
    setPhoto(null); // Clear the captured photo
    startCamera(); // Restart the camera preview
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
    <h1 className="text-2xl font-bold mb-4">📸 Take a Picture</h1>

    {!photo ? (
      <div className="flex flex-col items-center space-y-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full max-w-md rounded-lg border-2 border-gray-300 shadow-md"
        />
        <button
          onClick={takePhoto}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition"
        >
          📷 Capture
        </button>
      </div>
    ) : (
      <div className="flex flex-col items-center space-y-4">
        <img
          src={photo}
          alt="Captured"
          className="w-full max-w-md rounded-lg border-2 border-gray-300 shadow-md"
        />
        <button
          onClick={retakePhoto}
          className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 transition"
        >
          🔄 Retake
        </button>
      </div>
    )}

    <canvas ref={canvasRef} className="hidden" width="400" height="300"></canvas>
  </div>
  )
}

export default Camera