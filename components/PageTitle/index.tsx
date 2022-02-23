import React from "react";
import Head from "next/head";

import { PageTitlePropsInterface } from "types/common/pageTitle";

const PageTitle: React.FC<PageTitlePropsInterface> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default React.memo(PageTitle);
