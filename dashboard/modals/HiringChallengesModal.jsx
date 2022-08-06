import CommonModal from './CommonModal';

const Tags = ({ text }) => (
  <button
    type="button"
    className="inline-block mr-[15px] mb-[15px] select-none bg-[#eff2f6] rounded-md p-1.5 text-sm border border-[#d6dae0]"
  >
    {text}
  </button>
);
const testTags = ['ios', 'app', 'android', 'mobile', 'technology'];
const HiringChallengesModal = ({ handleClose }) => (
  <CommonModal>
    <div className="bg-white sticky top-0 inline-block w-full p-3.8">
      <div className="relative">
        <button type="button" className="top-0 right-3.8 absolute">
          <svg
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            onClick={handleClose}
            style={{
              fill: 'none',
              stroke: 'rgba(0, 0, 0, 0.822)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.6px',
            }}
          >
            <g id="cross">
              <line x1="3" x2="10" y1="3" y2="10" />
              <line x1="3" x2="10" y1="10" y2="3" />
            </g>
          </svg>
        </button>
        <div className="w-full h-18">Banner</div>
        <hr className="bg-border my-3.8 -mx-3.8 border-opacity-10" />
        <div className="flex">
          <div className="pt-0 w-16 h-6 ml-auto mr-12 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
            Level 1
          </div>
        </div>
      </div>
    </div>
    <div className="overflow-y-scroll">
      <div className="pt-6 px-3.8 block md:flex md:!space-x-4">
        <div className="bg-white w-full md:w-[70%] rounded-md border border-border mb-3.8 p-3.8">
          <h4 className="ml-[1%] mb-3.8 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
            About Challenge
          </h4>
          <div className="!leading-[20px] break-words text-sm">
            <div>
              Degreed is the upskilling platform that connects learning to
              opportunities. We integrate everything people use to learn and
              build their careers--skill insights, LMSs, courses, videos,
              articles, and projects--and match everyone to growth opportunities
              that fit their unique skills, roles, and goals.&nbsp;&nbsp;
            </div>
            <div>&nbsp;</div>
            <div>
              We are growing our Talent Acquisition team to help meet our
              exciting recruiting goals reflective of Degreed’s high growth
              trajectory across the globe. Talent Acquisition Coordinators at
              Degreed are collaborative, own the candidate experience, and are
              expected to be detail oriented and empathetic.&nbsp;
            </div>
            <div>&nbsp;</div>
            <div>
              The ideal candidate will be organized, with a passion for
              recruiting and a willingness to learn. This individual will be
              responsible for coordinating candidate interviews throughout the
              recruiting process; providing an excellent candidate experience
              from application to hire. They will manage relationships with
              hiring managers and be able to identify areas of improvement, find
              new solutions to problems, and can move quickly while paying
              attention to detail.&nbsp;
            </div>
            <div>&nbsp;</div>
            <div>
              This role will report to the Talent Acquisition Manager, and will
              be located remotely in the United States. This role directly
              supports Recruiters with hiring across business functions
              globally.
            </div>
            <div>
              Degreed is a remote-first company; however, our roles are open to
              in-office or flex work if you live in a city with a physical
              office location (when it is safe to return to the office). If this
              role has the opportunity to operate 100% virtually, it will be
              from your home office within any state that Degreed is authorized
              to do business. If this role is based in a Degreed office
              location, you will have flexibility to work remotely if needed. As
              a global business, we primarily collaborate through virtual
              meetings (Zoom), email, and Slack. You will be required to operate
              a laptop computer, computer software platforms, and other office
              productivity machinery as necessary in this role.&nbsp; Due to the
              nature of this role, you must be able to remain stationary for
              extended periods and must be able to observe and interpret written
              and/or verbal communication.
            </div>
            <div>&nbsp;</div>
            <b>Additional Information </b>
            <div>&nbsp;</div>
            <div>
              Degreed provides equal employment opportunities to all employees
              and applicants for employment and prohibits discrimination and
              harassment of any type without regard to race, color, religion,
              age, sex, national origin, disability status, genetics, protected
              veteran status, sexual orientation, gender identity or expression,
              or any other characteristic protected by federal, state or local
              laws. This policy applies to all terms and conditions of
              employment, including recruiting, hiring, placement, promotion,
              termination, layoff, recall, transfer, leaves of absence,
              compensation and training.
            </div>
            <div>&nbsp;</div>
            <div>
              We are committed to the full inclusion of all qualified
              individuals. As part of this commitment, Degreed will provide
              reasonable accommodations to all qualified individuals with
              disabilities to participate in the job application or interview
              process, to perform essential job functions, and/or to receive
              other benefits and privileges of employment.
            </div>
            <div>&nbsp;</div>
            <div>
              Pursuant to the San Francisco Fair Chance Ordinance, we will
              consider qualified applicants with arrest and conviction records.
              Degreed uses the E-Verify employment verification program.
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-[30%] !mx-auto md:!mx-0 pb-8">
          <div className="bg-white rounded-md border border-border mb-3.8 p-5">
            <div>
              <h2 className="text-lg font-semibold mb-2">Tags:</h2>
              <div className="flex flex-wrap">
                {testTags.map((tag) => (
                  <Tags text={tag} key={tag} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white  rounded-md border border-border mb-3.8 p-3.8">
            <h4 className="ml-[1%] mb-4 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
              About Degree
            </h4>
            <p className="font-medium text-xs mb-3 mt-6">
              <span className="text-[#666]">Industry:</span> Enterprise
              Software, EdTech
            </p>
            <p className="font-medium text-xs mb-3">
              <span className="text-[#666]">Location:</span> San Francisco, CA
            </p>
            <hr className="border-[#f2f2f2] my-5" />
            <p className="font-medium text-xs mb-3">
              <span className="text-[#666]">Stage:</span> Established Startup
            </p>
            <p className="font-medium text-xs mb-3">
              <span className="text-[#666]">Employees:</span> 501 - 1000
            </p>
            <p className="font-medium text-xs mb-3">
              <span className="text-[#666]">Funding:</span> $153.2M
            </p>
            <p className="font-medium text-xs mb-3">
              <span className="text-[#666]">Founded:</span> 2012
            </p>
            <hr className="border-[#f2f2f2] my-5" />
            <div className="text-xs font-medium leading-[1.6] max-w-[40rem]">
              <p className="my-2">
                Degreed is all about building a better future — for people and
                for businesses. We’re doing our part by crafting products and a
                company culture to fuel innovation and drive the change the
                world needs right now.
              </p>
              <p className="my-2">
                We believe everyone is driven by an innate desire to learn and
                grow. By equipping people with the skills the world needs, we
                help them redefine their careers, their companies, and their
                fields. We believe that together we can push the limits of
                what’s possible. We propel people and their companies toward
                their aspirations and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CommonModal>
);

export default HiringChallengesModal;
