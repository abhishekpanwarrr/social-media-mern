import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostWidget, { PostWidgetInterface } from "./PostWidget";
import { setPosts } from "../../states";
import { Box, CircularProgress } from "@mui/material";
interface Props {
  userId: string;
  isProfile?: boolean;
}
const PostsWidget = ({ userId, isProfile = false }: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/posts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getUserPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8000/posts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={100} width={"100%"}>
        <CircularProgress color="success" />
        </Box> : posts?.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }: PostWidgetInterface) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
