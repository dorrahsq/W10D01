import Link from "next/link";
import styles from "../../styles/Home.module.css";

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

function Post({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`Post/${post.id}`} key={post.id}>
          <li>
            <h3 className={styles.head}>{post.title}</h3>
            <p className={styles.par}>{post.body}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Post;
