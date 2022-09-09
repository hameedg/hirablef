import { createSlice } from '@reduxjs/toolkit';
import profileCompletion from '../../utils/profileCompletion';

const slice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    completion: 0,
    profile: {
      name: '',
      username: '',
      college: '',
      graduationYear: '',
      degree: '',
      stream: '',
      location: '',
      email: '',
      email2: '',
      mobile: '',
      mobile2: '',
      aboutMe: '',
    },
    preferences: {
      roles: [],
      experiences: [],
      skills: [],
    },
    experiences: [],
    socialMedia: {
      website: '',
      linkedin: '',
      passionProject: '',
      github: '',
    },
    document: {
      resume: [],
      transcript: [],
      workCertificate: [],
      otherCertificate: [],
    },
    badges: [],
  },
  reducers: {
    fetchUser: (state, action) => {
      const { payload } = action;

      state._id = payload._id;

      state.profile = {
        name: payload.name,
        username: payload.username,
        college: payload.college,
        graduationYear: payload.graduationYear,
        degree: payload.degree,
        stream: payload.major,
        location: payload.location,
        email: payload.email,
        email2: payload.alternateEmail,
        mobile: payload.mobileNo,
        mobile2: payload.altMobileNo,
        aboutMe: payload.about,
      };

      state.preferences = {
        roles: [...payload.intrestedRoles],
        experiences: [...payload.experience],
        skills: [...payload.skills],
      };

      state.completion = profileCompletion(state);
    },
  },
});

export default slice.reducer;
export const { fetchUser } = slice.actions;
