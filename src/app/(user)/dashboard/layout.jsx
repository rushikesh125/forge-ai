"use client";

import { auth } from "@/firebase/config";
import { clearUser, setUser } from "@/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UserLayout = ({ children }) => {

  const dispatch  = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const adminData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        dispatch(setUser(adminData));
      } else {
        dispatch(clearUser());
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [dispatch, router]);
  return <>{children}</>;
};

export default UserLayout;
