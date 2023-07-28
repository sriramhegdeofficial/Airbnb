"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  src: string;
  className?: string;
}

const Logo = ({ src, className }: IProps) => {
  const router = useRouter();
  return (
    <div className="cursor-pointer">
      <Image
        src={src}
        alt="Logo"
        width={80}
        height={25}
        className={className}
        priority
      />
    </div>
  );
};

export default Logo;
