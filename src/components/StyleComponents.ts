import styled from '@emotion/styled';

type HeaderTypeProps={
  isBorder: boolean;
}

export const HeaderCont = styled.section((props:HeaderTypeProps) => ({
  borderBottom: props.isBorder ? '1px solid #eee' : 'none',
}));
