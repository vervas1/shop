export const handleSort = (arr, direction) => {
  if (!Array.isArray(arr)) return [];

  if (arr.some((obj) => !obj.title)) return arr;
  const sortedData = arr.toSorted((a, b) => {
    if (!a.title || !b.title) return 0;
    let fa = a.title.toLocaleLowerCase(),
      fb = b.title.toLocaleLowerCase();
    if (fa < fb) return direction === 'az' ? -1 : 1;
    if (fa > fb) return direction === 'az' ? 1 : -1;
    return 0;
  });
  return sortedData;
};
