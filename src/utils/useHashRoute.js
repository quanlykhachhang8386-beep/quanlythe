import { useEffect, useMemo, useState } from "react";

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [page = "", id = ""] = hash.split("/");
  return { page: page || "home", id };
}

export function navigate(page = "home", id = "") {
  const next = id ? `#/${page}/${id}` : `#/${page}`;
  if (window.location.hash === next) {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    return;
  }
  window.location.hash = next;
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const handle = () => setRoute(parseHash());
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  return useMemo(() => route, [route]);
}
