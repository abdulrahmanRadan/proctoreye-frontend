import React, { createContext, useState } from "react";

type Examp = {
  day: string;
  date: Date;
  college: string;
  level: string;
  specialization: string;
};

interface ExampContextProps {
  examps: Examp[];
  addExamp: (examp: Examp) => void;
}

const ExampContext = createContext<ExampContextProps>({
  examps: [],
  addExamp: () => {},
});

const ExampProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [examps, setExamps] = useState<Examp[]>([]);

  const addExamp = (examp: Examp | null) => {
    if (examp === null) {
      throw new Error("Examp cannot be null");
    }

    setExamps((prevExamps) => {
      if (prevExamps === null) {
        throw new Error("prevExamps cannot be null");
      }

      return [...prevExamps, examp];
    });
  };

  return (
    <ExampContext.Provider value={{ examps, addExamp }}>
      {children}
    </ExampContext.Provider>
  );
};

export { ExampProvider, ExampContext };
