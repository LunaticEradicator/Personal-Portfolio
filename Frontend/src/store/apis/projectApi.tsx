import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, PROJECT_URL } from "../../constants";
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const projectApi = createApi({
  reducerPath: "projects",
  baseQuery,
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    getAllProjects: builder.query<void, void>({
      query: () => ({
        url: `${PROJECT_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectApi;
