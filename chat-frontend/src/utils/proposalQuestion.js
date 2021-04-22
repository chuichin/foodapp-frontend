const questions = [
  {
    title: 'Types of services',
    choices: [
      {
        label: 'One Time',
        value: 'one',
        id: 'one',
        name: 'serviceType',
        dispatchType: 'SET_PROPOSAL_SERVICE_TYPE',
      },
      {
        label: 'Multiple',
        value: 'multiple',
        id: 'multiple',
        name: 'serviceType',
        dispatchType: 'SET_PROPOSAL_SERVICE_TYPE',
      },
    ],
  },
  {
    title: 'Number of people',
    choices: [
      {
        label: '2',
        value: '2',
        id: '2_ppl',
        name: 'peopleNumber',
        dispatchType: 'SET_PROPOSAL_PEOPLE_NUMBER',
      },
      {
        label: '3 - 6',
        value: '< 6',
        id: '6_ppl',
        name: 'peopleNumber',
        dispatchType: 'SET_PROPOSAL_PEOPLE_NUMBER',
      },
      {
        label: '7 - 12',
        value: '< 12',
        id: '12_ppl',
        name: 'peopleNumber',
        dispatchType: 'SET_PROPOSAL_PEOPLE_NUMBER',
      },
      {
        label: '13+',
        value: '> 13',
        id: 'max_ppl',
        name: 'peopleNumber',
        dispatchType: 'SET_PROPOSAL_PEOPLE_NUMBER',
      },
    ],
  },
  {
    title: 'Meal for',
    choices: [
      {
        label: 'Lunch',
        value: 'lunch',
        id: 'lunch_meal',
        name: 'mealType',
        dispatchType: 'SET_PROPOSAL_MEAL_TYPE',
      },
      {
        label: 'Dinner',
        value: 'dinner',
        id: 'dinner_meal',
        name: 'mealType',
        dispatchType: 'SET_PROPOSAL_MEAL_TYPE',
      },
    ],
  },
  {
    title: 'Menu',
    choices: [
      {
        label: 'Package',
        value: 'package',
        id: 'package_menu',
        name: 'menuType',
        dispatchType: 'SET_PROPOSAL_MENU_TYPE',
      },
      {
        label: 'Suprise Me',
        value: 'suprise me',
        id: 'suprise_menu',
        name: 'menuType',
        dispatchType: 'SET_PROPOSAL_MENU_TYPE',
      },
    ],
  },
  {
    title: 'Hob',
    choices: [
      {
        label: 'Electric',
        value: 'electric',
        id: 'electric_hob',
        name: 'hobType',
        dispatchType: 'SET_PROPOSAL_HOB_TYPE',
      },
      {
        label: 'Induction',
        value: 'induction',
        id: 'induction_hob',
        name: 'hobType',
        dispatchType: 'SET_PROPOSAL_HOB_TYPE',
      },
      {
        label: 'Gas',
        value: 'gas',
        id: 'gas_hob',
        name: 'hobType',
        dispatchType: 'SET_PROPOSAL_HOB_TYPE',
      },
    ],
  },
  {
    title: 'Quantity of Hob',
    choices: [
      {
        label: '2',
        value: '2',
        id: '2_hob',
        name: 'hobNumber',
        dispatchType: 'SET_PROPOSAL_HOB_NUMBER',
      },
      {
        label: '3',
        value: '3',
        id: '3_hob',
        name: 'hobNumber',
        dispatchType: 'SET_PROPOSAL_HOB_NUMBER',
      },
      {
        label: '4',
        value: '4',
        id: '4_hob',
        name: 'hobNumber',
        dispatchType: 'SET_PROPOSAL_HOB_NUMBER',
      },
      {
        label: '5',
        value: '5',
        id: '5_hob',
        name: 'hobNumber',
        dispatchType: 'SET_PROPOSAL_HOB_NUMBER',
      },
    ],
  },
  {
    title: 'Oven',
    choices: [
      {
        label: 'Yes',
        value: 'yes',
        id: 'yes_oven',
        name: 'oven',
        dispatchType: 'SET_PROPOSAL_OVEN',
      },
      {
        label: 'No',
        value: 'no',
        id: 'no_oven',
        name: 'oven',
        dispatchType: 'SET_PROPOSAL_OVEN',
      },
    ],
  },
  {
    title: 'Price',
    choices: [
      {
        label: 'Basic',
        value: 'basic',
        id: 'basic_price',
        name: 'price',
        dispatchType: 'SET_PROPOSAL_PRICE',
      },
      {
        label: 'Temptation',
        value: 'temptation',
        id: 'temptation_price',
        name: 'price',
        dispatchType: 'SET_PROPOSAL_PRICE',
      },
      {
        label: 'Exclusive',
        value: 'exclusive',
        id: 'exclusive_price',
        name: 'price',
        dispatchType: 'SET_PROPOSAL_PRICE',
      },
    ],
  },
  {
    title: 'Diet Restriction',
    choices: [
      {
        label: 'Yes',
        value: 'yes',
        id: 'yes_diet',
        name: 'diet',
        dispatchType: 'SET_PROPOSAL_DIET',
      },
      {
        label: 'No',
        value: 'no',
        id: 'no_diet',
        name: 'diet',
        dispatchType: 'SET_PROPOSAL_DIET',
      },
    ],
  },
];

export default questions;
