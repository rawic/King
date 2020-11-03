import { REMOVE_TRANSACTION } from 'redux/actions'

const initialState = [
  {
    id: 1,
    amount: 45,
    category: {
      color: '#3160FF',
      icon: 'wallet',
      name: 'Family'
    },
    time: '2020-05-13 23:42',
    title: 'Pocket money',
    type: 'income',
    total: 3091.51
  },
  {
    id: 2,
    amount: 1215,
    category: {
      color: '#82C91E',
      icon: 'briefcase',
      name: 'Career'
    },
    time: '2020-05-13 23:32',
    title: 'Job',
    type: 'income',
    total: 3001.51
  },
  {
    id: 8,
    amount: -15.49,
    category: {
      color: '#FF4883',
      icon: 'couch',
      name: 'Entertainment'
    },
    time: '2020-05-12 15:32',
    title: 'Netflix subscription',
    type: 'outcome',
    total: 562
  },
  {
    id: 3,
    amount: -15.49,
    category: {
      color: '#FF4883',
      icon: 'couch',
      name: 'Entertainment'
    },
    time: '2020-05-13 15:32',
    title: 'Netflix subscription',
    type: 'outcome',
    total: 1786.51
  },
  {
    id: 4,
    amount: 25,
    category: {
      color: '#FF9066',
      icon: 'coins',
      name: 'Casual'
    },
    time: '2020-05-13 12:21',
    title: "Mowing neighbor's grass",
    type: 'income',
    total: 1802
  },
  {
    id: 5,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '2020-05-13 07:14',
    title: "McDonald's",
    type: 'outcome',
    total: 552.49
  },
  {
    id: 6,
    amount: 45,
    category: {
      color: '#3160FF',
      icon: 'wallet',
      name: 'Family'
    },
    time: '2020-05-13 23:42',
    title: 'Pocket money',
    type: 'income',
    total: 3046.51
  },
  {
    id: 7,
    amount: 1215,
    category: {
      color: '#82C91E',
      icon: 'briefcase',
      name: 'Career'
    },
    time: '2020-05-12 23:32',
    title: 'Job',
    type: 'income',
    total: 1777
  },
  {
    id: 9,
    amount: 25,
    category: {
      color: '#FF9066',
      icon: 'coins',
      name: 'Casual'
    },
    time: '2020-05-12 12:21',
    title: "Mowing neighbor's grass",
    type: 'income',
    total: 577.49
  },
  {
    id: 10,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '2020-05-12 07:14',
    title: "McDonald's",
    type: 'outcome',
    total: 552.49
  },
  {
    id: 11,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '2020-05-12 07:14',
    title: "McDonald's",
    type: 'outcome',
    total: 667.49
  },
  {
    id: 12,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '2020-05-12 07:14',
    title: "McDonald's",
    type: 'outcome',
    total: 667.49
  },
  {
    id: 13,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '2020-05-11 07:14',
    title: "McDonald's",
    type: 'outcome',
    total: 667.49
  }
]

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TRANSACTION:
      return [...state.filter((t) => t.id !== action.payload)]
    default:
      return state
  }
}
