const ProductTour = ({
  continuous,
  index,
  step,
  backProps,
  primaryProps,
  tooltipProps,
  skipProps,
}) => (
  <div {...tooltipProps} className="bg-white rounded-xl py-8 px-6 max-w-sm">
    <button
      type="button"
      className="text-sm text-green-600 font-semibold block ml-auto mb-4"
      id="skip"
      {...skipProps}
    >
      Skip
    </button>
    {step.title && (
      <h3 className="text-lg font-bold text-black text-center">{step.title}</h3>
    )}
    <p className="text-center text-base mt-2 text-light">{step.content}</p>
    <div className="mt-8 flex justify-between">
      {index > 0 && (
        <button
          type="button"
          {...backProps}
          className="px-5 py-2 bg-green-500 text-white rounded-md"
        >
          <span id="back">back</span>
        </button>
      )}
      {continuous && (
        <button
          type="button"
          {...primaryProps}
          className="px-5 py-2 bg-green-500 text-white rounded-md"
        >
          <span id="next">next</span>
        </button>
      )}
    </div>
  </div>
);

// const steps = [
//     {
//         content: "Special stuff just for you!",
//         placement: "top",
//         target: ".first",
//         title: "The good stuff",
//     },
//     {
//         content: "Special stuff just for you!",
//         placement: "top",
//         target: ".second",
//         title: "The good stuff",
//     },
//     {
//         content: "Special stuff just for you!",
//         placement: "top",
//         target: ".third",
//         title: "The good stuff",
//     },
//     {
//         content: "Special stuff just for you!",
//         placement: "top",
//         target: ".forth",
//         title: "The good stuff",
//     },
// ]
export default ProductTour;
