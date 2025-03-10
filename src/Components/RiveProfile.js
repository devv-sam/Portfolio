import React, { useEffect, useRef } from "react";
import { useRive } from "@rive-app/react-canvas";

const RiveProfile = () => {
  const containerRef = useRef() || null;

  const { RiveComponent, rive, canvas } = useRive({
    src: "/assets/profile.riv",
    stateMachines: "main",
    autoplay: true,
    interactions: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !rive || !canvas.current) return;

    const handleMouseMove = (event) => {
      // Get the container's bounding rectangle
      const rect = container.getBoundingClientRect();

      // Calculate mouse position relative to the container
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Optional: Add a range check to only track when mouse is near
      const containerWidth = rect.width;
      const containerHeight = rect.height;
      const maxDistance = Math.max(containerWidth, containerHeight) * 1.5; // Adjust tracking range

      // Calculate distance from center
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      // Only track if within range
      if (distance < maxDistance) {
        // You might need to adjust these based on your specific Rive file's input names
        const mouseXInput = rive
          .stateMachineInputs("main")
          .find((input) => input.name === "mouseX");
        const mouseYInput = rive
          .stateMachineInputs("main")
          .find((input) => input.name === "mouseY");

        // Normalize coordinates relative to container
        if (mouseXInput) mouseXInput.value = (x / containerWidth) * 100;
        if (mouseYInput) mouseYInput.value = (y / containerHeight) * 100;
      }
    };

    // Add event listener to the container
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rive, canvas]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "200px",
        height: "200px",
        cursor: "none", // Optional: hide cursor over the avatar
      }}
    >
      <RiveComponent />
    </div>
  );
};

export default RiveProfile;
