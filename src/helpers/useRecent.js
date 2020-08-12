import useLocalStorage from "./useLocalStorage";

const initValue = [];

const useRecent = (key) => {
  const [recent, setRecent] = useLocalStorage(key, initValue);

  const addRecent = (toAdd) => {
    const newRecent = [
      {
        time: Date.now(),
        ...toAdd,
      },
      ...recent.filter((r) => r.title !== toAdd.title),
    ];
    setRecent(newRecent);
  };
  return [recent.slice(0, 7), addRecent];
};

export default useRecent;
