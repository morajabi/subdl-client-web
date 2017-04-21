export const getSearchLink = (query: string): string => {
  const parsedQuery = String(query);
  return `https://www.google.com/search?q=${encodeURIComponent(parsedQuery)}`;
};
