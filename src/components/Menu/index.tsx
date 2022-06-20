import MenuButton from 'components/Menu/MenuButton';

import menu from 'constants/menu';

import * as S from './index.styled';

function Menu() {
  return (
    <S.Menu>
      {menu.map(drink => (
        <MenuButton drink={drink} key={drink.name} />
      ))}
    </S.Menu>
  );
}

export default Menu;
