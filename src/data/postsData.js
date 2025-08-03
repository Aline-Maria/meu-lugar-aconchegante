import { postsData as post1Data } from "../posts/Post1";
import { postsData as post2Data } from "../posts/Post2"; 

const combinedPostsData = [...post1Data, ...post2Data].slice(0, 2);

export default combinedPostsData;
