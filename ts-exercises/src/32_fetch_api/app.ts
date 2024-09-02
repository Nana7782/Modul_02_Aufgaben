// ##### fetch-Level-1_1 & 2_1
console.log("%c fetch-Level-1_1 & 2_1 ", "background: white; color: green");

type Image = {
  id: string;
  author: string;
  download_url: string;
};

const picContainer = document.getElementById("picsum") as HTMLDivElement;

fetch("https://picsum.photos/v2/list")
  .then((resp: Response) => {
    if (!resp.ok) {
      console.error("Response doesn't work");
    }
    console.log(resp);
    return resp.json();
  })
  .then((imgs: Image[]) => {
    imgs.forEach((img: Image) => {
      const figure = document.createElement("figure") as HTMLElement;
      const image = document.createElement("img") as HTMLImageElement;
      const figcaption = document.createElement("figcaption") as HTMLElement;

      image.src = img.download_url;
      figcaption.textContent = img.author;

      picContainer.appendChild(figure);
      figure.appendChild(image);
      figure.appendChild(figcaption);
    });
  })
  .catch((err: Error) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Done with fetching posts");
  });

// ##### fetch-Level-1_2
console.log("%c fetch-Level-1_2 ", "background: white; color: green");

const jsonPlaceholderAPI: string =
  "https://jsonplaceholder.typicode.com/posts/1/comments";
const jsonPlaceholderPostsAPI: string =
  "https://jsonplaceholder.typicode.com/posts";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

fetch(jsonPlaceholderAPI)
  .then((resp) => {
    if (!resp.ok) {
      console.error("Response doesn't work");
    }
    return resp.json();
  })
  .then((comments: Comment[]) => {
    comments.forEach((comment: Comment) => {
      console.log(comment.email);
    });
  });

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

fetch(jsonPlaceholderPostsAPI)
  .then((resp) => {
    if (!resp.ok) {
      console.error("Response doesn't work");
    }
    return resp.json();
  })
  .then((posts: Post[]) => {
    let highestId = 0;
    let shortestTitleLength = 400;
    let shortestTitle = "";
    let longestBody = "";
    let longestBodyLength = 0;
    posts.forEach((post: Post) => {
      if (post.id > highestId) {
        highestId = post.id;
      }
      if (post.title.length < shortestTitleLength) {
        shortestTitleLength = post.title.length;
        shortestTitle = post.title;
      }
      if (post.body.length > longestBodyLength) {
        longestBodyLength = post.body.length;
        longestBody = post.body;
      }
    });
    console.log(highestId);
    console.log(shortestTitle);
    console.log(longestBody);
  });
