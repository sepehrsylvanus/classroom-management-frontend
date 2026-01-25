import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
import { API_URL } from "./constants";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
export const { kyInstance } = createSimpleRestDataProvider({
  apiURL: API_URL,
});

interface Subject {
  id: number;
  code: string;
  name: string;
  department: string;
  description: string;
}

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CSCI101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "This course introduces students to the fundamental concepts of computer science, including algorithms, data structures, and programming paradigms.",
  },
  {
    id: 2,
    code: "MATH123",
    name: "Calculus I",
    department: "Mathematics",
    description:
      "This course covers the basics of calculus, including limits, derivatives, and integrals, and their applications to real-world problems.",
  },
  {
    id: 3,
    code: "ENGL201",
    name: "Literature and Society",
    department: "English",
    description:
      "This course explores the role of literature in shaping societal values and ideas, and how literature reflects and influences societal norms and beliefs.",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },

  getApiUrl: () => "",
};
