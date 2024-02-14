export const handleSort = (arr, direction) => {
  const sortedData = arr.toSorted((a, b) => {
    let fa = a.title.toLocaleLowerCase(),
      fb = b.title.toLocaleLowerCase();
    if (fa < fb) return direction === 'az' ? -1 : 1;
    if (fa > fb) return direction === 'az' ? 1 : -1;
    return 0;
  });
  return sortedData;
};
