const Positions = ({ jobData }) => {
  return (
    <section className="contain py-16 md:space-y-16 space-y-10" id="positions">
      <div className="mb-10">
        <h2 className="font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px]">
          Current Openings
        </h2>
        <p className="mt-3 textlg/8 font-medium font-inter text-black/[0.8] tracking-[-0.18px] max-w-2xl">
          Want to work with global talent and help build software that transforms care delivery, operations, and digital engagement? Apply today.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {jobData.map((job, idx) => (
          <div
            key={idx}
            className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-[18px] p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="font-sora text-xl font-semibold text-[#0F0F0F]">{job.title}</h3>
            <p className="text-[#0F0F0F]/80 font-inter text-base">{job.aboutRole}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="flex items-center gap-1 px-3 py-1 bg-[#EFF6FB] text-[#01588E] rounded-full text-xs font-medium">
                <svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#01588E" /><path d="M8 4v4l2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {job.location}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-[#F5F5F5] text-[#0F0F0F] rounded-full text-xs font-medium">
                <svg width="16" height="16" fill="none"><rect x="2" y="4" width="12" height="8" rx="2" fill="#0F0F0F" /><rect x="2" y="4" width="12" height="8" rx="2" stroke="#E5E7EB" strokeWidth="1.5"/></svg>
                {job.employmentType}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-[#F5F5F5] text-[#0F0F0F] rounded-full text-xs font-medium">
                <svg width="16" height="16" fill="none"><rect x="2" y="2" width="12" height="12" rx="3" fill="#E5E7EB" /><rect x="2" y="2" width="12" height="12" rx="3" stroke="#E5E7EB" strokeWidth="1.5"/></svg>
                {job.department}
              </span>
            </div>
            <div className="mt-3">
              <h4 className="font-semibold text-[#0F0F0F] text-base mb-1">Responsibilities</h4>
              <ul className="list-disc list-inside text-sm text-[#0F0F0F]/80 mb-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-[#0F0F0F] text-base mb-1">Requirements</h4>
              <ul className="list-disc list-inside text-sm text-[#0F0F0F]/80">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Positions;