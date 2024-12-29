import React, { createContext, useContext, useState } from "react";

interface Student {
  id: number;
  name: string;
  college: string;
  level: string;
  specialization: string;
  imageFile?: string;
}

interface StudentContextProps {
  students: Student[];
  addStudent: (student: Student) => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(
  undefined
);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Student 1",
      college: "College 1",
      level: "Level 1",
      specialization: "Specialization 1",
      imageFile: "path/to/image1.jpg", // مثال على مسار الصورة
    },
    {
      id: 2,
      name: "Student 2",
      college: "College 2",
      level: "Level 2",
      specialization: "Specialization 2",
      imageFile: "path/to/image2.jpg", // مثال على مسار الصورة
    },
  ]);

  const addStudent = (student: Student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
};
