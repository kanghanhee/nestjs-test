import { nanoid } from 'nanoid';

export const generateCode = () => {
  return nanoid(8);
};
