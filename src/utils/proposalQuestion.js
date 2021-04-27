const questions = [
  {
    title: 'Types of services',
    choices: [
      {
        label: 'One Time',
        value: 'one',
        id: 'one',
        name: 'serviceType',
      },
      {
        label: 'Multiple',
        value: 'multiple',
        id: 'multiple',
        name: 'serviceType',
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
      },
      {
        label: '3 - 6',
        value: '6',
        id: '6_ppl',
        name: 'peopleNumber',
      },
      {
        label: '7 - 12',
        value: '12',
        id: '12_ppl',
        name: 'peopleNumber',
      },
      {
        label: '13+',
        value: '13',
        id: 'max_ppl',
        name: 'peopleNumber',
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
      },
      {
        label: 'Dinner',
        value: 'dinner',
        id: 'dinner_meal',
        name: 'mealType',
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
      },
      {
        label: 'Induction',
        value: 'induction',
        id: 'induction_hob',
        name: 'hobType',
      },
      {
        label: 'Gas',
        value: 'gas',
        id: 'gas_hob',
        name: 'hobType',
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
      },
      {
        label: '3',
        value: '3',
        id: '3_hob',
        name: 'hobNumber',
      },
      {
        label: '4',
        value: '4',
        id: '4_hob',
        name: 'hobNumber',
      },
      {
        label: '5',
        value: '5',
        id: '5_hob',
        name: 'hobNumber',
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
      },
      {
        label: 'No',
        value: 'no',
        id: 'no_oven',
        name: 'oven',
      },
    ],
  },
  {
    title: 'Price',
    choices: [
      {
        label: '$300',
        value: '300',
        id: 'basic_price',
        name: 'price',
      },
      {
        label: '$400',
        value: '400',
        id: 'temptation_price',
        name: 'price',
      },
      {
        label: '$500',
        value: '500',
        id: 'exclusive_price',
        name: 'price',
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
        name: 'dietRestriction',
      },
      {
        label: 'No',
        value: 'no',
        id: 'no_diet',
        name: 'dietRestriction',
      },
    ],
  },
];

export default questions;
