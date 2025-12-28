import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef();
  const menuRef = useRef();

  useGSAP(() => {
    if (isOpen) {
      gsap.set([overlayRef.current, menuRef.current], { autoAlpha: 0, y: -50 });
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
      });
    } else {
      gsap.to(menuRef.current, { autoAlpha: 0, y: -50, duration: 0.3 });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3, delay: 0.2 });
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-[#030c10] text-2xl bg-transparent border-none cursor-pointer"
      >
        ☰
      </button>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40"
      >
        <ul ref={menuRef} className="text-white text-2xl space-y-4">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">About</li>
          <li className="cursor-pointer hover:text-yellow-400">Services</li>
          <li className="cursor-pointer hover:text-yellow-400">Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
