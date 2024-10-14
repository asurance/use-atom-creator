import { atom } from 'jotai';
import { useState } from 'react';

export const useAtomCreator: typeof atom = ((
  ...params: Parameters<typeof atom>
) => {
  const [createdAtom] = useState(() => atom(...params));
  return createdAtom;
}) as typeof atom;
