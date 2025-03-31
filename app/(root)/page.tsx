import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/interview-card'

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Assess your training needs with our AI assistance and feedback
          </h2>
          <p className="text-lg">
            Get a custom training model. Instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/session"}>Start your assessment session</Link>
          </Button>
        </div>
        <Image
          src="/training.jpg"
          alt="training"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your assessments</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet.</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an assessment</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage