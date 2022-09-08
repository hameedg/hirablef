import Post from '../../components/common/Post';
import Sidebar from '../../components/common/Sidebar';

const Openings = () => (
  <>
    <Sidebar />
    <main className="w-main float-right">
      <div className="mt-16 p-0 flex justify-center">
        <div className=" post-margin-left w-full max-w-[44rem]">
          <Post />
        </div>
        <div className="my-4 ml-[1.2rem] max-w-[18.625rem] border-[#ebedf1] rounded-2xl post-margin-right bg-white border w-full">
          <img className="w-full" src="/images/ideas.jpg" rel="" />
          <div className="px-8 mb-6 break-words text-sm leading-6.8 max-w-1.8xl text-post">
            <p className="mb-2">
              It&apos;s time to put your ideas on table and show companies what
              you are capable of. Know your competitors, understand technology
              usecases and select the ones you are confident about working on.
            </p>
            <p className="mb-2">
              Do like the profiles to get personalized matches of companies
              working on ideas that you like and which share the same thought
              process as of you
            </p>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Openings;
