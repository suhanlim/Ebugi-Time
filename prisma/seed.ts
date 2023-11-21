import { db } from "~/server/db";
import { faker } from "@faker-js/faker";
const prisma = db;

function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const precommit_users = Array.from({ length: 10 }, () => {
    return prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        introduction: faker.lorem.sentence(),
        grade: faker.number.int({ min: 1600000, max: 2400000 }).toString(),
        nickname: faker.internet.userName(),
        image_url: faker.image.avatar(),
      },
    });
  });

  const users = await Promise.all(precommit_users);

  const boards = {
    open: { name: "자유게시판" },
    computer_science: { name: "컴퓨터공학부 게시판" },
    mechanical_electronics: { name: "기계전자공학부 게시판" },
    smart_management: { name: "스마트경영공학부 게시판" },
    smart_manufacturing_consulting: { name: "스마트제조혁신컨설팅학과 게시판" },
    creative_humanities: { name: "크리에이티브 인문학부 게시판" },
    arts: { name: "예술학부 게시판" },
    social_sciences: { name: "사회과학부 게시판" },
    global_fashion_industry: { name: "글로벌패션산업학부 게시판" },
    ict_design: { name: "ICT디자인학부 게시판" },
    beauty_design_management: { name: "뷰티디자인매니지먼트학과 게시판" },
    literature_culture_contents: { name: "문학문화콘텐츠학과 게시판" },
    ai_application: { name: "AI응용학과 게시판" },
    convergence_security: { name: "융합보안학과 게시판" },
    future_mobility: { name: "미래모빌리티학과 게시판" },
    alumni: { name: "졸업생게시판" },
    freshmen: { name: "새내기게시판" },
    current_affairs: { name: "시사 이슈" },
    information: { name: "정보게시판" },
    promotion: { name: "홍보게시판" },
    clubs_societies: { name: "동아리 학회" },
    career_employment: { name: "취업 진로" },
    marketplace: { name: "장터게시판" },
    local_community: { name: "상빌 주민" },
    word_chain: { name: "끝말잇기 게시판" },
    fandom: { name: "덕후게시판" },
    lgbtq: { name: "성소수자 게시판" },
    health: { name: "헬스 게시판" },
  };
  type Category = keyof typeof boards;

  Object.entries(boards).map((v) => {
    return prisma.category.create({
      data: {
        id: v[0],
        name: v[1].name,
      },
    });
  });

  function makePrecommitPost(userId: string) {
    return prisma.post.create({
      data: {
        title: faker.lorem.text(),
        contents: faker.lorem.paragraph(),
        category:
          Object.keys(boards)[
            Math.floor(Math.random() * Object.keys(boards).length)
          ] ?? "open",
        is_deleted: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        likes: faker.number.int(20),
        createdBy: { connect: { id: userId } },
        image_url: faker.image.avatar(),
      },
    });
  }

  const precommit_posts = new Array<ReturnType<typeof makePrecommitPost>>();

  users.forEach((v) => {
    for (let i = 0; i < 5; i++) {
      precommit_posts.push(makePrecommitPost(v.id));
    }
  });

  const posts = new Array<Awaited<ReturnType<typeof makePrecommitPost>>>();
  for (const element of precommit_posts) {
    posts.push(await element);
  }

  // const precommit_comment: Prisma.CommentCreateInput[] = [];
  const precommit_comment = new Array<
    ReturnType<typeof makePrecommitComment>
  >();
  function makePrecommitComment(userId: string, postId: number) {
    return prisma.comment.create({
      data: {
        contents: faker.lorem.sentence(),
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
        createdAt: faker.date.past(),
        likes: faker.number.int(20),
      },
    });
  }

  const precommit_posts_like = new Array<
    ReturnType<typeof makePrecommitPostsLike>
  >();
  function makePrecommitPostsLike(userId: string, postId: number) {
    return prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        target_type: "post",
        target_id: postId,
      },
    });
  }

  const precommit_scrap = new Array<ReturnType<typeof makePrecommitScrap>>();
  function makePrecommitScrap(userId: string, postId: number) {
    return prisma.scrap.create({
      data: {
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
      },
    });
  }

  users.forEach((u) => {
    posts.forEach((p) => {
      precommit_comment.push(makePrecommitComment(u.id, p.id));
      precommit_posts_like.push(makePrecommitPostsLike(u.id, p.id));
      precommit_scrap.push(makePrecommitScrap(u.id, p.id));
    });
  });

  const comments = new Array<
    Awaited<ReturnType<typeof makePrecommitComment>>
  >();
  for (const element of precommit_comment) {
    comments.push(await element);
  }
  const postsLike = new Array<
    Awaited<ReturnType<typeof makePrecommitPostsLike>>
  >();
  for (const element of precommit_posts_like) {
    postsLike.push(await element);
  }
  const scraps = new Array<Awaited<ReturnType<typeof makePrecommitScrap>>>();
  for (const element of precommit_scrap) {
    scraps.push(await element);
  }

  const precommit_comments_like = new Array<
    ReturnType<typeof makePrecommitCommentsLike>
  >();
  function makePrecommitCommentsLike(userId: string, commentId: number) {
    return prisma.like.create({
      data: {
        user: { connect: { id: userId } },
        target_type: "comment",
        target_id: commentId,
      },
    });
  }
  users.forEach((u) => {
    comments.forEach((p) => {
      precommit_comments_like.push(makePrecommitCommentsLike(u.id, p.id));
    });
  });

  const commentsLike = new Array<
    Awaited<ReturnType<typeof makePrecommitCommentsLike>>
  >();
  for (const element of precommit_comments_like) {
    commentsLike.push(await element);
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
