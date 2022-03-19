import "./App.css";
import Createpost from "./Component/Createpost";
import Deletepost from "./Component/Deletepost";
import Get_Limited_Data from "./Component/Get_Limited_Data";
import Get_Single_Data from "./Component/Get_Single_Data";
import Updatepostredux from "./Component/Updatepostredux";
import { useGetAllPostQuery} from "./services/Post";

function App() {
  const responseInfo = useGetAllPostQuery();

  console.log("Response Information: ", responseInfo);
  console.log("Response data: ", responseInfo.data);
  console.log("Response isSuccess: ", responseInfo.isSuccess);
  return (
    <>
      {/* // Get All Data */}
      <div className="App">
        <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
        {responseInfo.data?.map((post, i) => (
          <div key={i}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>

      <Get_Single_Data />
      <Get_Limited_Data />
      <Deletepost />
      <Createpost />
      <Updatepostredux />
      
    </>
  );
}

export default App;
