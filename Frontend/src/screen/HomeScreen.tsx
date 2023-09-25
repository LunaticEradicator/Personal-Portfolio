// import Header from "../components/Header";
import TextChange from "../components/Reuseable/TextChange";
import { useGetAllProjectsQuery } from "../store/apis/projectApi";

export default function HomeScreen() {
  const { data, isLoading, isError } = useGetAllProjectsQuery();

  // console.log(data);
  return (
    <div>
      <TextChange slides={["HI", "こんにちは", "नमस्ते"]} />
      {/* <Header /> */}
    </div>
  );
}
