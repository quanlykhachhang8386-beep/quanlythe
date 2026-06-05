import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL || "/";

async function loadJson(name) {
  const response = await fetch(`${base}data/${name}.json`);
  if (!response.ok) throw new Error(`Không tải được ${name}.json`);
  return response.json();
}

export function useData() {
  const [state, setState] = useState({ loading: true, error: "", cards: [], promotions: [], categories: [], partners: [] });

  useEffect(() => {
    let mounted = true;
    Promise.all([loadJson("cards"), loadJson("promotions"), loadJson("categories"), loadJson("partners")])
      .then(([cards, promotions, categories, partners]) => {
        if (mounted) setState({ loading: false, error: "", cards, promotions, categories, partners });
      })
      .catch((error) => {
        if (mounted) setState((current) => ({ ...current, loading: false, error: error.message }));
      });
    return () => {
      mounted = false;
    };
  }, []);

  return state;
}
