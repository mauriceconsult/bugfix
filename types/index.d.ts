interface Feedback {
  id: string;
  assessmentId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

interface Assessment {
  id: string;
  course: string;
  level: string;
  questions: string[];
  specialtystack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
}

interface CreateFeedbackParams {
  assessmentId: string;
  userId: string;
  transcript: { course: string; content: string }[];
  feedbackId?: string;
}

interface User {
  name: string;
  email: string;
  id: string;
}

interface AssessmentCardProps {
  assessmentId?: string;
  userId?: string;
  course: string;
  type: string;
  specialtystack: string[];
  createdAt?: string;
}

interface AgentProps {
  userName: string;
  userId?: string;
  assessmentId?: string;
  feedbackId?: string;
  type: "generate" | "interview";
  questions?: string[];
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GetFeedbackByInterviewIdParams {
  assessmentId: string;
  userId: string;
}

interface GetLatestInterviewsParams {
  userId: string;
  limit?: number;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

type FormType = "sign-in" | "sign-up";

interface AssessmentFormProps {
  assessmentId: string;
  course: string;
  level: string;
  type: string;
  specialtystack: string[];
  amount: number;
}

interface TechIconProps {
  specialtyStack: string[];
}
