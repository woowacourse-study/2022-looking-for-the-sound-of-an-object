import React from "react";

import * as S from "components/DrinkSection/ActionListItem/ActionListItem.style";

function ActionListItem({ children }) {
  return <S.ListItem>{children}</S.ListItem>;
}

export default React.memo(ActionListItem);
