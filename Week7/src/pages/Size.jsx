import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import "./Size.css"; // Make sure this file exists

const Size = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [insideSilhouette, setInsideSilhouette] = useState(false);
  const [photo, setPhoto] = useState(null);

  // Rectangle used for pose checking (rough match to silhouette)
  const silhouetteRect = { x: 150, y: 50, width: 300, height: 400 };

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResults);

    const camera = new cam.Camera(webcamRef.current.video, {
      onFrame: async () => await pose.send({ image: webcamRef.current.video }),
      width: 600,
      height: 500,
    });

    camera.start();
  }, []);

  const onResults = (results) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous keypoints ONLY
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (results.poseLandmarks) {
      // Draw keypoints
      results.poseLandmarks.forEach((landmark) => {
        const x = landmark.x * canvas.width;
        const y = landmark.y * canvas.height;
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Check if all keypoints are inside silhouette rectangle
      const allInside = results.poseLandmarks.every(
        (lm) =>
          lm.x * canvas.width >= silhouetteRect.x &&
          lm.x * canvas.width <= silhouetteRect.x + silhouetteRect.width &&
          lm.y * canvas.height >= silhouetteRect.y &&
          lm.y * canvas.height <= silhouetteRect.y + silhouetteRect.height
      );

      setInsideSilhouette(allInside);
    }
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  };

  return (
    <div className="size-capture-container">
      <h2>Align inside the silhouette</h2>
      <div className="camera-wrapper">
        {/* Silhouette background */}
        <img
          src="/silhouette.png" // Put your PNG in public folder
          alt="silhouette"
          className="silhouette-background"
        />

        {/* Webcam feed */}
        <Webcam
          audio={false}
          ref={webcamRef}
          width={600}
          height={500}
          screenshotFormat="image/jpeg"
          className="webcam-feed"
        />

        {/* Canvas for keypoints */}
        <canvas
          ref={canvasRef}
          width={600}
          height={500}
          className="overlay-canvas"
        />
      </div>

      <p className={`status ${insideSilhouette ? "inside" : "outside"}`}>
        {insideSilhouette
          ? "✅ Inside silhouette"
          : "❌ Move inside silhouette"}
      </p>

      <button
        onClick={capturePhoto}
        disabled={!insideSilhouette}
        className="capture-button"
      >
        Take Photo
      </button>

      {photo && (
        <div className="captured-photo">
          <h3>Captured Photo:</h3>
          <img src={photo} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default Size;