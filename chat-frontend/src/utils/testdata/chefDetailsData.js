import food1 from '../../images/food1.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';

const menus = [
  {
    images: [food1, food2, food3],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusposuere dui facilisis massa vehicula rutrum. Sed id malesuada orci. Duis ac dolor ultricies turpis consequat pulvinar. Nullamodio ante, semper sed nunc egestas, tincidunt venenatis libero. Curabitur semper sem vel augue hendrerit congue. Ut augue nunc,pharetra nec mattis at, consectetur sit amet nisl.',
    category: 'western',
    menu: [
      { title: 'Appetizer', food: 'food' },
      { title: 'Starter', food: 'food' },
      { title: 'Main', food: 'food' },
      { title: 'Desert', food: 'food' },
    ],
  },
  {
    images: [food3, food1, food2],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusposuere dui facilisis massa vehicula rutrum. Sed id malesuada orci. Duis ac dolor ultricies turpis consequat pulvinar. Nullamodio ante, semper sed nunc egestas, tincidunt venenatis libero. Curabitur semper sem vel augue hendrerit congue. Ut augue nunc,pharetra nec mattis at, consectetur sit amet nisl.',
    category: 'french',
    menu: [
      { title: 'Appetizer', food: 'food' },
      { title: 'Starter', food: 'food' },
      { title: 'Main', food: 'food' },
      { title: 'Desert', food: 'food' },
    ],
  },
  {
    images: [food3, food2, food1],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusposuere dui facilisis massa vehicula rutrum. Sed id malesuada orci. Duis ac dolor ultricies turpis consequat pulvinar. Nullamodio ante, semper sed nunc egestas, tincidunt venenatis libero. Curabitur semper sem vel augue hendrerit congue. Ut augue nunc,pharetra nec mattis at, consectetur sit amet nisl.',
    category: 'italian',
    menu: [
      { title: 'Appetizer', food: 'food' },
      { title: 'Starter', food: 'food' },
      { title: 'Main', food: 'food' },
      { title: 'Desert', food: 'food' },
    ],
  },
];

export default menus;
