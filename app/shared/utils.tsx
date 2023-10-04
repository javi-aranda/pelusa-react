export const isUrlValid = (input: string) => {
  try {
    new URL(input);
    return true;
  } catch (err) {
    return false;
  }
};

export const handlePreventDefault = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
