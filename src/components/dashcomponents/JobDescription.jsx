"use client";

import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";
import CustomBtn from "../CustomBtn";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import CircularLoader from "@/app/loading";
import { getResume } from "@/firebase/users/read";

export default function JobDescriptionInput({ onCompare }) {
  const [resumeData, setResumeData] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const user = useSelector((state) => state.user);
  //   https://forge-ai-api.vercel.app/api/resumetext

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getResume({ uid: user?.uid });
        setResumeData(res);
        console.log(JSON.stringify(res));
      } catch (error) {
        console.log("error", error);
        toast.error(error);
        setError(
          "roadmap is not generated please generate roadmap form assessment"
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user]);

  const clearFile = () => {
    setJobDescription("");
    setStatus(null);
    setError(null);
  };

  //   if(isLoading){
  //     return <CircularLoader/>
  //   }
  return (
    <div className="bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-80 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Job Description{" "}
        {resumeData && (
          <span className="text-green-600">Resume Data is Available ✅</span>
        )}
      </h2>

      {/* Text Area */}
      {!resumeData && (
        <div className="text-red-500">Please Upload Resume First </div>
      )}
      {resumeData && (
        <textarea
          className="w-full h-40 p-2 rounded-lg bg-gray-100 outline-none dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Paste the job description here "
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      )}
      {/* Compare Button */}
      <CustomBtn
        className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg dark:bg-purple-600 dark:hover:bg-purple-700 flex items-center justify-center"
        isLoading={isLoading}
      >
        Compare Resume with Job Description
      </CustomBtn>
    </div>
  );
}
