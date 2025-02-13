import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../config";

export const createUser = async({ uid, user }) => {
  await setDoc(
    doc(db,`users/${uid}`),{
        user: { ...user },
        createdAt: Timestamp.now(),
      },
      {
        merge: true,
      }
  );
};

export const insertUserResume = async({uid,data})=>{
  if(!data){
    throw new Error("No Data for Insert in DB {insertUserResume}fn")
  }
  await setDoc(doc(db,`users/${uid}`),{
    resume:data,
    createdAt:Timestamp.now(),
  },{
    merge:true
  })
}
