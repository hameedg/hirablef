export default function profileCompletion(state) {
  const totalFields =
    Object.keys(state.profile).length +
    Object.keys(state.preferences).length +
    Object.keys(state.socialMedia).length +
    Object.keys(state.document).length +
    2;

  let incompleteFields = 0;

  Object.keys(state.profile).forEach((key) => {
    if (
      key === 'location' &&
      state.profile[key].city.trim() === '' &&
      state.profile[key].country.trim() === ''
    )
      incompleteFields++;
    else if (
      (key === 'mobile' || key === 'mobile2') &&
      state.profile[key].toString().length < 4
    )
      incompleteFields++;
    else if (state.profile[key].toString().trim() === '') ++incompleteFields;
    else;
  });
  Object.keys(state.preferences).forEach((key) => {
    if (state.preferences[key].length === 0) ++incompleteFields;
  });

  Object.keys(state.socialMedia).forEach((key) => {
    if (state.socialMedia[key].length === 0) ++incompleteFields;
  });
  Object.keys(state.document).forEach((key) => {
    if (state.document[key].length === 0) ++incompleteFields;
  });

  if (state.experiences.length === 0) ++incompleteFields;
  if (state.badges.length === 0) ++incompleteFields;

  return Math.ceil(100 - 100 * (incompleteFields / totalFields));
}
