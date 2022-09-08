export const formatCompaniesData = (data) => {
  const companiesList = [];
  data.forEach((company) => {
    const socialMedia = company.socialMedia
      ? company.socialMedia
      : {
          website: '',
          linkedin: '',
          instagram: '',
          facebook: '',
        };

    const location = company.location.map((item) => {
      if (typeof item === 'string') return item;
      return `${item.city}${item.state !== '' ? `, ${item.state}` : ''}${
        item.country !== '' ? `, ${item.country}` : ''
      }`;
    });

    companiesList.push({
      ...company,
      logo: company.logo,
      assignments: company.assignments ? company.assignments : 0,
      openings: company.openings ? company.openings : 0,
      socialMedia,
      location,
      teamSize: company.teamSize ? company.teamSize : '',
    });
  });

  return companiesList;
};

export default {};
