"use client";

import { useRef, useState, useEffect } from "react";
import "./globals.css";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const dialogRef = useRef(null);
  const items = [
    {
      id: 0,
      title: "This is the title",
      description: "lipsun",
      img: "img0.jpg",
    },
    {
      id: 1,
      title: "This is the title",
      description: "lipsun",
      img: "img1.jpg",
    },
    {
      id: 2,
      title: "This is the title",
      description: "lipsun",
      img: "img2.jpg",
    },
    {
      id: 3,
      title: "This is the title",
      description: "lipsun",
      img: "img3.jpg",
    },
    {
      id: 4,
      title: "This is the title",
      description: "lipsun",
      img: "img4.jpg",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!activeCard) return;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    dialogRef.current?.addEventListener("close", closeModal);
    return () => {
      dialogRef.current?.removeEventListener("close", closeModal);
    };
  }, [activeCard]);

  function closeModal() {
    dialogRef.current?.close();
    setActiveCard(undefined);
    document.body.style.overflow = "";
  }

  return (
    <div className="border grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-5 gap-4">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setActiveCard(item)}
            className="bg-blue-200 rounded-md overflow-hidden"
          >
            <img src={`/images/${item.img}`} alt={item.img} className="" />
          </div>
        );
      })}
      {activeCard && (
        <dialog
          ref={dialogRef}
          className="backdrop:bg-black/80 rounded-md"
          // onClick={() => closeModalBackdrop(event)}
        >
          <div className="relative z-0 w-[90vw] h-[90vh] overflow-visible flex items-center justify-center flex-col">
            <img
              src={`/images/${activeCard.img}`}
              alt=""
              className="max-w-[40%]"
            />
            <h1>{activeCard.title}</h1>
            <p>{activeCard.description}</p>

            <button
              className="bg-zinc-200 border rounded-full shadow w-6 h-6 flex items-center justify-center absolute top-1 right-4 z-1 cursor-pointer"
              onClick={closeModal}
            >
              <span className="w-4 h-4 text-zinc-900">
                <IoMdClose />
              </span>
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
