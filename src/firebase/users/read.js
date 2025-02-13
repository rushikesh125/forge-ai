import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

export const getResume = async ({ uid }) => {
  const res = await getDoc(doc(db, `users/${uid}`));
  if (await res.exists()) {
    return res.data()?.resume;
  } else {
    return null;
    // throw new Error("Assessment is Not Submitted");
  }
};
