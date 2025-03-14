import { useEffect, useState } from "react";

export const useBase64Asset = (relativePath: string): string | null => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  useEffect(() => {
    const fetchBase64 = async () => {
      try {
        const fullPath = new URL(`../assets/${relativePath}`, import.meta.url).href;
        const response = await fetch(fullPath);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => setBase64Image(reader.result as string);
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error(`Failed to load image: ${relativePath}`, error);
      }
    };

    fetchBase64();
  }, [relativePath]);

  return base64Image;
};