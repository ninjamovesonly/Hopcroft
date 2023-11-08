import { DATA } from "./data.js";
import { __readFile, __writeFile, __filePath } from "./file.js";

const DSA_DIFFICULTY = "EASY";
const POSTS_FILE_PATH = "/public/posts.json";
const CONFIG_FILE_PATH = "/public/config.json";

export const customProblem = async (dsaTopic) => {
  try {
    console.log("creating problem...");

    const slugs = __readFile(CONFIG_FILE_PATH);
    let idx = Number(slugs.currentIndex);
    const randQuestion = DATA[idx];
    const obj = {
      currentIndex: idx + 1,
    };

    __writeFile(__filePath(CONFIG_FILE_PATH), obj);

    return {
      title: randQuestion.title,
      link: `https://leetcode.com/problems/${randQuestion.titleSlug}`,
      difficulty: randQuestion.difficulty,
      tags: randQuestion.topicTags.map((item) => item.name),
    };
  } catch (error) {
    console.error("Error fetching problem:", error);
    return undefined;
  }
};
