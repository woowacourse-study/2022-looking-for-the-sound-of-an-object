import React from "react";

import * as S from "components/DrinkSection/DrinkListItem/DrinkListItem.style";

function DrinkListItem({ children }) {
  return <S.ListItem>{children}</S.ListItem>;
}

export default React.memo(DrinkListItem);
