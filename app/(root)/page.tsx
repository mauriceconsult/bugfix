import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyAssessments } from '@/constants'
import AssessmentCard from '@/components/assessment-card'

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Free assessment of your training needs. Instant feedback.</h2>
          <p className="text-lg">
            Get your custom training model. Instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href={"/assessment"}>Start your assessment session</Link>
          </Button>
        </div>
        <Image
          src="/training.png"
          alt="training"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your assessments</h2>
        <div className="interviews-section">
          {dummyAssessments.map((assessment) => (
            <AssessmentCard {...assessment} key={assessment.id} />
          ))}
          {/* <p>You haven&apos;t taken any assessments yet.</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an assessment</h2>
        <div className="interviews-section">
          {dummyAssessments.map((assessment) => (
            <AssessmentCard {...assessment} key={assessment.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage