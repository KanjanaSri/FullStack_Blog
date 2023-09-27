import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jane Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17993801/pexels-photo-17993801/free-photo-of-vintage-lamp-hanging-on-branch-in-forest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur? Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
          <br />
          <br />
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
          <br />
          <br />
          Pellentesque scelerisque nulla interdum hendrerit placerat. Praesent
          vel ligula sed lorem interdum mollis. Sed bibendum at erat vitae
          vehicula. Cras vehicula, tortor fringilla dignissim scelerisque, arcu
          ante aliquet magna, eget tempor justo ipsum at nunc. Ut ac aliquet
          erat. Integer gravida tempor diam sed malesuada. Maecenas viverra ex
          vel dolor egestas, nec convallis lectus accumsan. Mauris porttitor
          dolor lectus, et efficitur quam tristique vel. Duis malesuada eu nisi
          sit amet rhoncus. Vivamus mauris ante, gravida at egestas a, eleifend
          at orci. Suspendisse potenti. Nullam cursus lorem maximus risus
          ullamcorper, vitae iaculis elit luctus. Cras hendrerit dictum ipsum,
          quis luctus dolor auctor sit amet. Suspendisse et rhoncus erat.
          Maecenas ac consequat felis.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
