import classNames from '../../utils/constants/classNames';
import Like from '../svg/Like';

const Card = ({
  postTitle,
  postDescription,
  isLiked,
  likes,
  level,
  onLikeHandler,
  onShowDescription,
  id,
}) => (
  <article className="py-6 w-full lg:max-w-[40.125rem]  px-8 bg-white rounded-2xl my-4 border border-[#ebedf1] cursor-pointer ">
    <button
      type="button"
      className="block text-left"
      onClick={onShowDescription}
    >
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="mb-1 pt-0 inline-block w-16 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
            {level}
          </div>
          <h3 className="flex flex-row justify-between font-semibold mb-1 mt-2 text-base max-w-2xl">
            {postTitle}
          </h3>
        </div>
        <div className="flex flex-row justify-between font-semibold mb-1 mt-2 text-base max-w-2xl" />
      </div>
      <div className="mb-4 text-sm font-normal max-w-2xl text-post-description break-words leading-status-description">
        <p>{postDescription}</p>
      </div>
    </button>
    <div className="flex ">
      <button
        type="button"
        className={classNames(
          'flex items-center hover:opacity-75 transform hover:scale-110 transition duration-100',
          isLiked ? 'text-[#f73859]' : ''
        )}
        onClick={(e) => onLikeHandler(e, id)}
      >
        <Like isLiked={isLiked} />
        <span className="inline-block font-medium ml-1 text-[0.78rem] text-black">
          {likes}
        </span>
      </button>
    </div>
  </article>
);

export default Card;
