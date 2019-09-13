import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();

  console.log(router.query);

  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Post;
