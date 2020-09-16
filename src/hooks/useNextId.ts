import { useRef } from 'react';

let nextId = 0;
// eslint-disable-next-line no-plusplus
const getNextId = () => nextId++;

export default function useNextId(prefix = 'id-') {
  const idRef = useRef(`${prefix}${getNextId()}`);
  return idRef.current;
}
