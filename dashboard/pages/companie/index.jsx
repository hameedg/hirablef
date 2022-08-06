import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// import Sidebar from '../components/common/Sidebar';
import router from 'next/router';
import Link from 'next/link';
import Sidebar from '../../components/common/Sidebar';
import CompanyCard from '../../components/Companies/CompanyCard';
import { getCompanies } from '../../utils/apis/companies';
import CompaniesCardSkel from '../../components/skeleton/CompaniesCardSkel';

const ComapanyModal = dynamic(() => import('../../modals/ComapanyModal'));

const Companies = () => {
  const [persistIDs, setPersistIDs] = useState('');
  const [companies, setCompanies] = useState([
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a7d',
      desption:
        'At Flow, we believe that rewarding tenants for being good renters rather than punishing them for being bad ones could be the key to disrupting the rental industry. Flow is a free mobile app that allows tenants to get up to 20% of their rent back in rewards, whether or not their landlord has the app. Flow rewards tenants for positive behavior, such as paying their rent on time, and looking after their homes. They also get points for registering and entering their property details.',
      tags: [
        'property rentals',
        'tenant rewards',
        'mobile app',
        'tenant engagement',
        'proptech',
      ],
      companyName: 'Flow',
      logoUrl: 'https://i.ibb.co/gmL8xS7/Flow.png',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Johannesburg',
          state: '',
          country: 'South Africa',
          _id: '5fc2abe9b0b014001713f208',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a4a',
      description:
        'Karzo manages the largest virtual truck fleet in Myanmar providing goods transportation for SME and large enterprises moving cargo anywhere in the country. It is the first online transportation service in Myanmar to easily connect independent truck drivers, fleet owners, third-party logistics and commercial logistics providers directly with businesses needing reliable and trackable distribution and delivery.',
      tags: ['Freight', 'Transportation', 'Logistics', 'Supply Chain'],
      companyName: 'Karzo',
      logoUrl: 'https://i.ibb.co/G27SVy4/Karzo.png',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Yangon',
          state: '',
          country: 'Myanmar',
          _id: '5fc2953db0b014001713f18d',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a64',
      description:
        'Distichain delivers B2B e-commerce marketplaces and e-procurement platforms. Using blockchain and AI, our backend trade engine connects logistics, insurance, KYC/AML providers and financial institutions to deliver seamless border agnostic trading. Documentation, process governance, and smart contracts all in one place and logged on the blockchain facilitates secure automated end-to-end transactions. Our user interface, which engages the users, is an intuitive web-based marketplace allowing companies of all sizes and geographies to easily access our technology and benefit from the value it delivers. Distichain integrates with mainstream and innovative solution providers in trade finance, supply chain, and fintech giving SMEs the ability to access these services which otherwise would be limited only to big corporations. Smart contracts govern the end-to-end transactions generating fully automated cross border transactions without the need for a single email.',
      tags: [
        'Supply Chain Management',
        'B2B',
        'E-Commerce',
        'SaaS',
        'Software as a Service',
        'Blockchain',
      ],
      companyName: 'Distichain',
      logoUrl: 'https://i.ibb.co/H7FTz9n/Distichain.png',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Dubai',
          state: '',
          country: 'United Arab Emirates',
          _id: '5fc2a53bb0b014001713f1dd',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a01',
      description:
        'Rafeeq is an online platform developed & customized in-house in the state of Qatar to cater the local logistic needs using state of art technology. Rafeeq bridges the gap between the vendors and consumers. Items offered by the vendors can be viewed, customised, ordered and tracked with only a few clicks. Rafeeq will collect the items and deliver them directly to the consumers location with speed, care, and efficiency.',
      tags: [
        'Food orders',
        'Food discovery',
        'Online Delivery',
        'Food delivery',
      ],
      companyName: 'Rafeeq',
      logoUrl:
        'https://csite.nyc3.digitaloceanspaces.com/test2/1563206713756.jpg',
      noOfOpening: 0,
      companyLocation: [{ city: 'Doha', country: 'Qatar', state: '' }],
      noOfAssignments: 1,
      companyWebsite: 'https://gorafeeq.com/',
      __v: 1,
      jobs: [],
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a53',
      description:
        'Desilo utilizes AI to bridge the gap and achieve data utilization without compromising data privacy.',
      tags: [],
      companyName: 'Desilo',
      logoUrl: 'https://i.ibb.co/zfFkCFh/Desilo.png',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8aac',
      description:
        'Cherry lets you choose your own workplace perks. With Cherry, companies pay for their employees favorite consumer services (like Audible, ClassPass, Headspace, and Lyft) instead of wasting money on perks no one uses like in-office yoga and ping pong tables.',
      tags: [],
      companyName: 'Cherry',
      logoUrl: 'https://i.ibb.co/5jwGkdj/Cherry.jpg',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a42',
      description:
        "Algomo.com is a zero-code customer service platform with an integrated multilingual chatbot that helps companies expand internationally, reduce their customer service costs and get meaningful content recommendations for their website. \n\nAlgomo's multilingual chatbot engine automates and simplifies customer service operations across all markets. It is the only product that listens and learns from every single human interaction to automatically update its understanding across all languages. Algomo is self-monitoring and proactively highlights missing content or performance issues, ensuring it is always maintained.\n\nThis democratizes customer service, accelerates a company's expansion to international markets, and helps executives understand their customers even better.",
      tags: ['Remote'],
      companyName: 'Algomo',
      logoUrl: 'https://i.ibb.co/HpkzyG7/Algomo.jpg',
      noOfOpening: 2,
      companyLocation: [
        {
          city: 'Lahore ',
          state: 'Punjab',
          country: 'Pakistan',
          _id: '5fc29349b0b014001713f166',
        },
        {
          city: 'Phnom Penh',
          state: '',
          country: 'Cambodia',
          _id: '5fc29349b0b014001713f167',
        },
        {
          city: 'Dhaka',
          state: '',
          country: 'Bangladesh',
          _id: '5fc29349b0b014001713f168',
        },
        {
          city: 'Cape Town',
          state: '',
          country: 'South Africa',
          _id: '5fc29349b0b014001713f169',
        },
        {
          city: 'London',
          state: 'England',
          country: 'United Kingdom',
          _id: '5fc292ddb0b014001713f165',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a46',
      description:
        'Zigway is a Fintech Social Enterprise based in Yangon, Myanmar. At Zigway we use technology to help low-income families break free of poverty and empower women in local communities. Through our subscription service for household essentials and affordable nano-loans, we strive to lift 20 million people out of poverty by 2030.',
      tags: [
        ' monthly subscriptions',
        'essential goods',
        'Nano-loans',
        'Fintech',
      ],
      __v: 1,
      companyName: 'ZigWay',
      logoUrl:
        'https://scholarly-science.nyc3.digitaloceanspaces.com/main/ZigWay.jfif',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Yangon',
          state: '',
          country: 'Myanmar',
          _id: '5fc2949db0b014001713f17a',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8ab0',
      description:
        'Happy Coffee is an ingenious Nigerian coffee brand on a mission to give happiness in every cup by delivering a liberating coffee experience through our freshly roasted, wholly and locally grown Nigerian coffee beans. We aim at creating and designing coffee solution for organizations looking to deepening their value adds for its customers through providing fresh brew coffee offerings.',
      tags: [],
      companyName: 'Happy Coffee',
      logoUrl: 'https://i.ibb.co/Zcm19cW/Happy-Coffee.png',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8ab0',
      description:
        'Happy Coffee is an ingenious Nigerian coffee brand on a mission to give happiness in every cup by delivering a liberating coffee experience through our freshly roasted, wholly and locally grown Nigerian coffee beans. We aim at creating and designing coffee solution for organizations looking to deepening their value adds for its customers through providing fresh brew coffee offerings.',
      tags: [],
      companyName: 'Happy Coffee',
      logoUrl: 'https://i.ibb.co/Zcm19cW/Happy-Coffee.png',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a53',
      description:
        'Desilo utilizes AI to bridge the gap and achieve data utilization without compromising data privacy.',
      tags: [],
      companyName: 'Desilo',
      logoUrl: 'https://i.ibb.co/zfFkCFh/Desilo.png',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '62258130efc52d44ce9ac86b',
      description:
        'Swvl is a premium mass transit system that provides buses to every neighborhood. Swvl allows people to share a ride in a van or bus during morning and evening commutes for a fixed flat fare with no surge pricing. Through an app, one can book a ride at an affordable rate.\n\nIt started with an observation turning into a realization, too many cars on the streets, wasting our limited resources: time, space and money.\n\nWe had to question why we depend so much on our cars? and what are the consequent pains of moving around the city? Rush hours, traffic, terrible driving habits and unavailability of parking spots came rushing through our minds in addition to the pain of high cost of on-demand services.\n\nWhile an affordable decent public commuting solution is not accessible, we thought how can we improve people’s lives? And here Swvl was created, revolutionizing the transportation scene in Egypt, Kenya, and Pakistan through providing a technology-based alternative to public transportation, a smart solution that solves the transportation equation, leading to helping more commute for less, with ease and comfort.\n\nSwvl is a revolutionary idea that was born from passion, loyalty, and persistence to face all challenges on the table, Swvl is not just a mean to facilitate commuting, but a hunger to strive for solutions, encourage the contribution of youth in innovation and inspire change.',
      tags: ['Public Commute', 'Transportation'],
      companyName: 'Swvl',
      logoUrl: 'https://csite.nyc3.digitaloceanspaces.com/test2/swvl-min.jpg',
      noOfOpening: 2,
      companyLocation: [
        { city: 'Dubai', country: 'United Arab Emirates', state: '' },
      ],
      noOfAssignments: 5,
      companyWebsite: ' https://www.swvl.com',
      __v: 1,
      jobs: [],
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a64',
      description:
        'Distichain delivers B2B e-commerce marketplaces and e-procurement platforms. Using blockchain and AI, our backend trade engine connects logistics, insurance, KYC/AML providers and financial institutions to deliver seamless border agnostic trading. Documentation, process governance, and smart contracts all in one place and logged on the blockchain facilitates secure automated end-to-end transactions. Our user interface, which engages the users, is an intuitive web-based marketplace allowing companies of all sizes and geographies to easily access our technology and benefit from the value it delivers. Distichain integrates with mainstream and innovative solution providers in trade finance, supply chain, and fintech giving SMEs the ability to access these services which otherwise would be limited only to big corporations. Smart contracts govern the end-to-end transactions generating fully automated cross border transactions without the need for a single email.',
      tags: [
        'Supply Chain Management',
        'B2B',
        'E-Commerce',
        'SaaS',
        'Software as a Service',
        'Blockchain',
      ],
      companyName: 'Distichain',
      logoUrl: 'https://i.ibb.co/H7FTz9n/Distichain.png',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Dubai',
          state: '',
          country: 'United Arab Emirates',
          _id: '5fc2a53bb0b014001713f1dd',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a48',
      description:
        'KyoPay Technologies, an online marketplace for invoice receivables, enables and empowers Small and Medium Enterprises within the Republic of the Union of Myanmar by offering an alternative solution to liquidity. Our company opens its doors to businesses looking to boost their cash flow and connects them to third-party investors willing to invest in an under-utilized asset class.\n\nUsing a model proven in emerging markets, KyoPay offers SMEs the opportunity to auction off their invoice receivables from financially-sound clients in order to secure cash for business growth.',
      tags: [],
      companyName: 'KyoPay Technologies',
      logoUrl: 'https://i.ibb.co/S73ZYbR/Kyopay.jpg',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Yangon',
          state: '',
          country: 'Myanmar',
          _id: '5fc29484b0b014001713f178',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a19',
      description:
        'Union is a community management platform that connects startup founders, mentors, investors, and corporate innovators around the world. The platform streamlines operations and connects startup hubs like incubators, accelerators and coworking spaces from all over the world. It works with corporations, universities, government agencies, and other organizations to engage startups and solve challenges with precise focus and global results.\\n\\nUnion provides corporate innovation teams with a turnkey virtual incubator platform for recruiting, engaging, and assessing startups while building a network of mentors and experts from across their organization that can participate in the innovation process.',
      tags: [],
      companyName: 'Union',
      logoUrl: 'https://csite.nyc3.digitaloceanspaces.com/test2/union-min.jpg',
      noOfOpening: 1,
      companyLocation: [],
      noOfAssignments: 1,
      __v: 1,
      jobs: [],
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a46',
      description:
        'Zigway is a Fintech Social Enterprise based in Yangon, Myanmar. At Zigway we use technology to help low-income families break free of poverty and empower women in local communities. Through our subscription service for household essentials and affordable nano-loans, we strive to lift 20 million people out of poverty by 2030.',
      tags: [
        ' monthly subscriptions',
        'essential goods',
        'Nano-loans',
        'Fintech',
      ],
      __v: 1,
      companyName: 'ZigWay',
      logoUrl:
        'https://scholarly-science.nyc3.digitaloceanspaces.com/main/ZigWay.jfif',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Yangon',
          state: '',
          country: 'Myanmar',
          _id: '5fc2949db0b014001713f17a',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8aac',
      description:
        'Cherry lets you choose your own workplace perks. With Cherry, companies pay for their employees favorite consumer services (like Audible, ClassPass, Headspace, and Lyft) instead of wasting money on perks no one uses like in-office yoga and ping pong tables.',
      tags: [],
      companyName: 'Cherry',
      logoUrl: 'https://i.ibb.co/5jwGkdj/Cherry.jpg',
      noOfOpening: 0,
      companyLocation: [],
      noOfAssignments: 1,
      location: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [getData, setgetData] = useState(false);
  const [selected, setSelected] = useState({
    isActive: false,
    companyData: null,
  });

  const onShowDescription = (i) => {
    // setSelected({ isActive: true, companyData: companies[i] });
    router.push('/companies/particular');
    console.log(companies[i]);
  };

  const onHideDescription = () =>
    setSelected({ isActive: false, companyData: null });

  const fetchInitialCompanies = () => {
    //   getCompanies(true, persistIDs)
    //     .then((res) => {
    //       setCompanies((e) => [...e, ...res.data.responseCompanies]);
    //       setPersistIDs(res.data.persistIDs);
    //       setLoading(false);
    //       setgetData(false);
    //     })
    //     .catch(() => {
    //       setLoading(false);
    //       setError('No more companies');
    //     });
  };
  const fetchCompanies = () => {
    //   getCompanies(false, persistIDs)
    //     .then((res) => {
    //       setCompanies((e) => [...e, ...res.data.responseCompanies]);
    //       setPersistIDs(res.data.persistIDs);
    //       setLoading(false);
    //       setgetData(false);
    //     })
    //     .catch((err) => {
    //       console.log(err.reponse);
    //       setLoading(false);
    //       setError('No more companies');
    //     });
  };

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 200 >
      document.scrollingElement.scrollHeight
    ) {
      setLoading(true);
      setgetData(true);
    }
  };
  useEffect(() => {
    if (getData) {
      document.getElementById('loading').scrollIntoView();
      fetchCompanies();
    }
  }, [getData]);

  useEffect(() => {
    fetchInitialCompanies();
    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, []);

  function formName(compnayName) {
    const word = compnayName.split(' ');
    let companyNameUrl = word[0];
    for (let i = 1; i < word.length; i++) {
      companyNameUrl += '_';
      companyNameUrl += word[i];
    }
    return companyNameUrl;
  }

  return (
    <>
      <Sidebar />
      {selected.isActive && (
        <ComapanyModal
          handleClose={onHideDescription}
          companyData={selected.companyData}
        />
      )}
      <main className="w-main float-right bg-[#edf3f3] ">
        <div className="bg-white h-[8.75rem] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-extrabold my-4">Companies</h1>
        </div>
        <div className="pt-8 pb-5 flex items-center justify-center xl:max-w-6xl mx-auto overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1em]">
            {companies.length > 0 ? (
              companies.map((company, i) => (
                <Link
                  key={company.companyName}
                  passHref
                  href={{
                    pathname: `/companies/[companyName]`,
                    query: {
                      tags: company.tags,
                      city: company.companyLocation.length
                        ? company.companyLocation[0].city
                        : '',
                      state: company.companyLocation.length
                        ? company.companyLocation[0].state
                        : '',
                      country: company.companyLocation.length
                        ? company.companyLocation[0].country
                        : '',
                      description: company.description,
                      companyName: company.companyName,
                      logoUrl: company.logoUrl,
                      noOfOpening: company.noOfOpening,
                      noOfAssignments: company.noOfAssignments,
                      teamSize: company.teamSize,
                      socialMedia: company.socialMedia,
                      companyWebsite: company.companyWebsite,
                    },
                  }}
                  as={`/companies/${formName(company.companyName)}`}
                >
                  <a>
                    <CompanyCard
                      key={company._id}
                      index={i}
                      // onShowDescription={onShowDescription}
                      logo={company.logoUrl}
                      name={company.companyName}
                      location={company.companyLocation}
                      assignment={company.noOfAssignments}
                      openings={company.noOfOpening}
                    />
                  </a>
                </Link>
              ))
            ) : (
              <>
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
                <CompaniesCardSkel />
              </>
            )}
          </div>
        </div>
        {error && <p className="font-semibold text-center my-4">{error}</p>}
        {loading && (
          <div
            className="flex justify-center mb-8 mx-6 overflow-hidden"
            id="loading"
          >
            <div
              className="animate-spin h-7 w-7 rounded-full border-2 border-[#666] "
              style={{ borderRightColor: 'transparent' }}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Companies;
