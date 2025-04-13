export const createChangeHandler = (setState: (value: any) => void) => {
  return (field: string, value: any) => {
    setState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };
};

export const createNestedChangeHandler = (setState: (value: any) => void) => {
  return (parent: string, field: string, value: any) => {
    setState((prev: any) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };
};
