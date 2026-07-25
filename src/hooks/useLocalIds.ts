import { useEffect, useMemo, useState } from 'react';
import { readJson, toggleId, uniqueById, writeJson } from '../utils/storage';

export function useLocalIds(storageKey: string) {
  const initialIds = useMemo(() => readJson<string[]>(storageKey, []), [storageKey]);
  const [ids, setIds] = useState<string[]>(initialIds);

  useEffect(() => {
    writeJson(storageKey, uniqueById(ids));
  }, [ids, storageKey]);

  const toggle = (id: string) => {
    setIds((current) => toggleId(current, id));
  };

  const clear = () => setIds([]);

  return { ids, setIds, toggle, clear };
}

