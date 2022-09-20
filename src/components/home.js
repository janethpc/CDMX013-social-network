export const home = () => {
  const div = document.createElement('div');

  const logoHorizontal = document.createElement('img');
  logoHorizontal.src = './images/logoh.png';

  const homeIcon = document.createElement('img');
  homeIcon.src = './images/home1.png';
  homeIcon.id = 'homeIcon';

  const profile = document.createElement('img');
  profile.src = './images/profile.png';
  profile.id = 'profile';

  div.append(logoHorizontal, homeIcon, profile);

  return div;
};
