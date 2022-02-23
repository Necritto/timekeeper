import React from "react";
import Image from "next/image";

import { UIImagePropsInterface } from "types/components/uiImage";

const UIImage: React.FC<UIImagePropsInterface> = ({ path, height = 25, width = 25, alt = "" }) => {
  return <Image src={path} height={height} width={width} alt={alt} />;
};

export default UIImage;
