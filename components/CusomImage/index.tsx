import React from "react";
import Image from "next/image";

import { CustomImageProps } from "types/customImage";

const CustomImage: React.FC<CustomImageProps> = ({ path, height = 25, width = 25, alt = "" }) => {
  return <Image src={path} height={height} width={width} alt={alt} />;
};

export default CustomImage;
