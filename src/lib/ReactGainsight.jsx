import { useEffect, useState } from "react";
import warn from "./utils/warn";
import info from "./utils/info";

export const ReactGainsight = ({ gainsightTagKey }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!gainsightTagKey) {
      warn("TAG KEY IS REQUIRED");
      return;
    }

    if (scriptLoaded) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://web-sdk.aptrinsic.com/api/aptrinsic.js?a=${gainsightTagKey}`;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.head.appendChild(script);
    info("SCRIPT LOADED");
  }, [gainsightTagKey, scriptLoaded]);

  return null;
};
