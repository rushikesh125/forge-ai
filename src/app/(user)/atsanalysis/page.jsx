"use client";

import { GenerateATSAnalysis } from "@/app/model/atsanalysis";
import CustomBtn from "@/components/CustomBtn";
import AtsScoreDisplay from "@/components/dashcomponents/AtsScoreDisplay";
import { getATSAnalysis, getResume } from "@/firebase/users/read";
import { insertATSAnalysis } from "@/firebase/users/write";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const AtsAnalysis = () => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [ATSAnalysis, setATSAnalysis] = useState(null);
  useEffect(() => {
    (async () => {
      const rr = await getResume({ uid: user?.uid });
      console.log("rr", JSON.stringify(rr));
      if (rr) {
        setResumeData(rr);
      }
    })();

    (async () => {
      try {
        const rr = await getATSAnalysis({ uid: user?.uid });
        console.log("rr", rr);
        if (rr) {
          setATSAnalysis(rr);
        }
      } catch (error) {
        toast.error("Failed to Fetch ATS analysis from DB");
      }
    })();
  }, [user]);
  const handleGenerateATSAnalysis = async () => {
    setIsLoading(true);
    try {
      if (!resumeData) {
        throw new Error("No Resume DATA Found");
      }
      const res = await GenerateATSAnalysis(resumeData);
      const ats_temp = JSON.parse(await res);
      setATSAnalysis(ats_temp);

      try {
        await insertATSAnalysis({ uid: user?.uid, data: ats_temp });
        toast.success("Inserted ATS analysis in DB successfully");
      } catch (error) {
        toast.error("failed to Insert ATS Analysis in DB");
      }
      //   console.log(JSON.stringify(ats_temp));
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className="pt-20 p-4 text-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center border-b-2 border-dashed dark:border-white border-purple-500 py-2 ">
            ATS Analysis &nbsp;
            {resumeData && (
              <span className="text-green-500">Resume Data Available ✅</span>
            )}
          </h2>
          {!resumeData && (
            <div className="text-red-500 text-center">
              No Resume Data Found , Please upload Resume First
            </div>
          )}
          {resumeData && (
            <CustomBtn
              isLoading={isLoading}
              onClick={handleGenerateATSAnalysis}
              className={`border border-violet-500 rounded-full px-4 py-1 mx-auto my-3`}
            >
              ✨ Generate ATS Analysis of Resume
            </CustomBtn>
          )}
          {ATSAnalysis && <AtsScoreDisplay data={ATSAnalysis} />}
        </div>
      </main>
    </>
  );
};

export default AtsAnalysis;
