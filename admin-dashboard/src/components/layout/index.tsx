import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React from "react";
import header from "./header";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <ThemedLayoutV2
      Header={header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
}

export default Layout;
