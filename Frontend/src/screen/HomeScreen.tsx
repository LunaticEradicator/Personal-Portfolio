import { useGetAllProjectsQuery } from "../store/apis/projectApi";
export default function HomeScreen() {
  const { data, isLoading, isError } = useGetAllProjectsQuery();
  console.log(data);
  return <div>HomeScreen</div>;
}
