import React from 'react';
import {
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Gauge,
  ArrowUpRight,
  ChevronRight,
  GaugeCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ResumeDashboard';


const ResumeReviewDisplay = ({ reviewData }) => {
  const {
    overall_rating,
    general_feedback,
    strengths,
    improvements,
    final_verdict
  } = reviewData;

  return (
    <div className="max-w-4xl mx-auto p-2 space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <GaugeCircle className="w-8 h-8 text-purple-500" />
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Resume Review Score: {overall_rating}/10
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Expected after improvements: {final_verdict.improved_rating}/10
            </p>
          </div>
        </div>
      </div>

      {/* General Feedback Card */}
      <Card className="border border-purple-200 dark:border-purple-900 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              General Feedback
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{general_feedback}</p>
        </CardContent>
      </Card>

      {/* Strengths Section */}
      <Card className="border border-purple-200 dark:border-purple-900 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Key Strengths
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strengths.map((strength, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  {strength.title}
                </h3>
                <ul className="space-y-2">
                  {strength.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Improvements Section */}
      <Card className="border border-purple-200 dark:border-purple-900 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Suggested Improvements
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {improvements.map((improvement, idx) => (
              <div key={idx} className="space-y-3 pb-4 border-b border-purple-100 dark:border-purple-800 last:border-0">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-500" />
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                    {improvement.section}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-7">{improvement.feedback}</p>
                <ul className="space-y-2 pl-7">
                  {improvement.suggestions.map((suggestion, sugIdx) => (
                    <li key={sugIdx} className="flex items-start gap-2">
                      <ArrowUpRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Verdict Section */}
      <Card className="border border-purple-200 dark:border-purple-900 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Improvements to Apply
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {final_verdict.improvements_applied.map((improvement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{improvement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeReviewDisplay;