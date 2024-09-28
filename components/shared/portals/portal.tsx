"use client"
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

const Portal: React.FC<PortalProps> = ({ children, containerId = 'portal-root' }) => {
  // Define the ref with type `HTMLElement | null`
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create the portal root if it doesn't exist
    let portalRoot = document.getElementById(containerId);
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = containerId; // Assign the ID to the new div
      document.body.appendChild(portalRoot); // Append the new div to the body
    }
    containerRef.current = portalRoot as HTMLDivElement; // Set the reference to the portal root
  }, [containerId]);

  return containerRef.current
    ? ReactDOM.createPortal(children, containerRef.current) // Render the children into the portal root
    : null;
};

export default Portal;
