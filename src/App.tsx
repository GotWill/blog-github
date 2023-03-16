import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./contexts/Posts";
import { Router } from "./Routes";

export default function App() {

  return (
   <BrowserRouter>
   <PostProvider>
      <Router/>
   </PostProvider>
   
   </BrowserRouter>
  )
}

