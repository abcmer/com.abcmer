'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import photoNames from '../photoNames.json';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    const temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
}

const calcNumPhotosToShow = (width: number): number => {
  if (width > 1275) return 24;
  if (width > 1020) return 20;
  if (width > 765) return 16;
  if (width > 510) return 12;
  return 8;
};

export default function PhotoGrid() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [photosToShow, setPhotosToShow] = useState<string[]>([]);
  const [photoBacklog, setPhotoBacklog] = useState<string[]>(() => shuffle(photoNames));
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    setInnerWidth(width);
    const numToShow = calcNumPhotosToShow(width);
    setPhotosToShow(photoBacklog.slice(0, numToShow));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(width);
      const numToShow = calcNumPhotosToShow(width);
      setPhotosToShow((prev) => {
        if (prev.length === numToShow) return prev;
        return photoBacklog.slice(0, numToShow);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [photoBacklog]);

  useEffect(() => {
    if (photosToShow.length === 0) return;
    const interval = setInterval(() => {
      setPhotoIndex((oldIndex) => {
        const nextIndex = (oldIndex + 5) % photosToShow.length;
        handlePhotoChange(oldIndex);
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [photoIndex, photosToShow]);

  const handlePhotoChange = (oldPhotoIndex: number) => {
    setPhotosToShow((nextPhotosToShow) => {
      setPhotoBacklog((nextPhotoBacklog) => {
        const updated = [...nextPhotoBacklog];
        const oldPhoto = nextPhotosToShow[oldPhotoIndex];
        const newPhoto = updated.pop();
        if (!newPhoto) return nextPhotoBacklog;
        const updatedPhotos = [...nextPhotosToShow];
        updatedPhotos[oldPhotoIndex] = newPhoto;
        setPhotosToShow(updatedPhotos);
        return [oldPhoto, ...updated];
      });
      return nextPhotosToShow;
    });
  };

  return (
    <div className="grid-container fade-in">
      {photosToShow.map((p, i) => (
        <div className="grid-item" key={i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p} onClick={() => handlePhotoChange(i)} alt="photo" />
        </div>
      ))}
    </div>
  );
}
