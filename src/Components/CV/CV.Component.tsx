import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { WORK_EXPERIENCE } from "../../Global/Work.Enums";

export function CV() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center min-h-0 min-w-full">
        <header className="flex flex-col items-center mt-16 mb-8 min-w-full">
          <h1 className="text-3xl font-black"> CV</h1>
          <h2 className="text-xl font-thin">
            A bit more about my work experience
          </h2>
          <p className="my-3 cursor-pointer">
            <a href="/cv.pdf" target="blank" rel="noopener noreferrer">
              <DocumentArrowDownIcon height={24} />
            </a>
          </p>
        </header>
        <section className="flex flex-col items-center gap-4 max-w-4xl w-full px-2">
          {WORK_EXPERIENCE.map((job, index) => {
            return (
              <div key={index} className="px-4 mb-5 w-full min-w-full flex-row">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-l text-gray-400">
                  {job.company} &nbsp;|&nbsp;{job.location}
                </p>
                <p className="text-l text-gray-500">
                  {job.dateFrom} - {job.dateTo !== "" ? job.dateTo : "Present"}
                </p>
                <ul className="list-disc pl-5">
                  {job.milestones.map((milestone, idx) => (
                    <li key={idx} className="text-l">
                      {milestone}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  <strong>Technologies used: </strong>
                  {job.technicalStack.join(", ")}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
