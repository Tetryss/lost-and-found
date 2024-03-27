import PocketBase, { RecordModel } from "pocketbase";

// Setup connection to the database
const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

/**
 *
 * @returns Promise of type RecordModel[] containing the database entries.
 */
async function GetPosts(): Promise<RecordModel[]> {
  try {
    const posts = await pb.collection("Posts").getFullList();
    return posts;
  } catch (error) {
    console.error("Error fetching Posts:", error);
    throw error;
  }
}

/**
 * TODO: LITERALLY DO IT
 * @param title The post title REQ
 * @param message The body of the post
 * @param contact Contact info
 * @param date Date posted REQ
 * @returns true: successfully created, false: something went wrong.
 */
async function CreatePost(
  title: string,
  message: string,
  contact: string
): Promise<boolean> {
  try {
    const newDate = new Date().toISOString();
    const data = {
      Title: title,
      Message: message,
      Contact: contact,
      DatePosted: newDate,
      Found: false,
    };
    const record = await pb.collection("Posts").create(data);
    if (record) {
      console.log(record);
      return true;
    }
  } catch (error) {
    return false;
  }
  return true;
}

/**
 * TODO: COMPLETE
 * @param id The post id to be updated
 */
async function UpdatedPost(id: string): Promise<boolean> {
  return true;
}

/**
 *
 * @param id The post id to be deleted
 * @returns
 */
async function DeletePost(id: string): Promise<boolean> {
  return false;
}

async function GetComments(id: string) {
  const resultList = await pb.collection("Comments").getList(1, 10, {
    filter: `PostID = "${id}"`,
  });
  return resultList.items;
}

/**
 * Scuffed af, can't be bothered to fix though :)
 * @param id postID for reference
 * @param message message body
 */
async function AddComment(id: string, message: string) {
  const now = new Date().toISOString();
  const data = {
    message: message,
    DatePosted: now,
    PostID: id,
  };

  await pb.collection("Comments").create(data);
}

export {
  GetPosts,
  CreatePost,
  UpdatedPost,
  DeletePost,
  GetComments,
  AddComment,
};
