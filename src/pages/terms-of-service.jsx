import Seo from "../common/seo";
import { termsOfService } from "../lib/msic-data";

const TermsOfService = () => {
  return (
    <>
      <Seo
        title='Terms of Service | K-Lord Technologies – Software Solutions for Healthcare, SMEs, and Enterprises'
        description='Read the K-Lord Technologies Terms of Service to understand the terms of use for our digital solutions. By accessing our platform, you agree to our service terms and conditions.'
        content=''
      />
      <div className='font-inter space-y-[30px] text-[#0F0F0F] text-lg/8'>
        <div>
          <h1 className='lg:text-5xl/[64px] text-[32px]/10 tracking-[-2.4px]  font-semibold'>
            {termsOfService.title}
          </h1>
          <p className='text-lg/8 font-medium text-[#999999]'>
            Last Updated: {termsOfService.lastUpdated}
          </p>
        </div>

        <p dangerouslySetInnerHTML={{ __html: termsOfService.introduction }} />

        {termsOfService.sections.map((section) => (
          <section key={section.id} id={section.id} className='space-y-3'>
            <h2 className='font-sora text-2xl/8 font-semibold tracking-[-1.04px]'>
              {section.title}
            </h2>
            {section.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p
                    key={`${section.id}-p-${index}`}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                );
              }
              if (item.type === "list") {
                return (
                  <ul
                    key={`${section.id}-ul-${index}`}
                    className='list-disc pl-5 space-y-3'>
                    {item.items.map((listItem, listItemIndex) => (
                      <li key={`${section.id}-li-${listItemIndex}`}>
                        <strong>{listItem.main}:</strong>{" "}
                        <span
                          dangerouslySetInnerHTML={{ __html: listItem.details }}
                        />
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </section>
        ))}
      </div>
    </>
  );
};
export default TermsOfService;