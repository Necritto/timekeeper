import React from "react";
import Head from "next/head";

import { PageTitleProps } from "types/pageTitle";

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default React.memo(PageTitle);
