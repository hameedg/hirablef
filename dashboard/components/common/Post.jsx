const Post = () => (
  <div
    className="py-6 my-4 rounded-2xl bg-white border "
    style={{ borderColor: '#ebedf1' }}
  >
    <h3 className="font-semibold mb-1 mt-2 text-base leading-5 px-8">Sprig</h3>

    <div className="px-8 mb-6 break-words text-sm leading-6.8 max-w-1.8xl text-post">
      <p className="mb-2">
        User feedback is valuable information for a company to learn what
        motivates its customers to sign up for more information, engage in
        certain content, and remain loyal to their favorite product.
      </p>
      <p className="mb-2">
        While gathering that data is not always easy, Sprig has designed a
        platform aimed at allowing product managers to personalize customer
        surveys and present them at the right time.
      </p>
      <p className="mb-2">
        On Sprig’s platform, product managers choose from more than 75 research
        templates featuring questions about anything from product market fit to
        how to improve the product, solve complex business problems, or just get
        to know their audience.
      </p>
      <p className="mb-2">
        These micro surveys typically appear at the bottom of an app and are
        often triggered by a certain event, then uses artificial intelligence to
        read and understand the questions and answers to provide analysis on why
        a customer clicked on a certain button or didn’t finish setting up the
        account.
      </p>
    </div>
    <img
      alt="Post"
      src="https://www.fortanix.com/images/fortanix/join-us/careers-og.png"
      className=" max-h-85 w-full object-cover"
    />
    <a href="https://commonsurface.com/" target="_blank" rel="noreferrer">
      <div
        className="p-3.8 cursor-pointer"
        style={{ background: '#f2f2f2', color: 'grey' }}
      >
        <h1 className="text-sm leading-tight font-bold">Common Surface</h1>

        <span className="text-xs text-lighter hover:text-black font-normal hover:font-medium">
          https://commonsurface.com/
        </span>
      </div>
    </a>
    <div className="px-8 max-w-1.8xl leading-6.8 text-post pt-3.5 bg-white">
      <button
        type="button"
        className="py-2 font-semibold text-sm leading-6.8 px-4 mr-2 bg-white text-light border-lighter border rounded-full"
      >
        Like
      </button>
    </div>
  </div>
);

export default Post;
