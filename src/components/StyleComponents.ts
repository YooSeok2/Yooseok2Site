import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type HeaderTypeProps={
  isBorder: boolean;
}

export const HeaderCont = styled.section((props:HeaderTypeProps) => ({
  borderBottom: props.isBorder ? '1px solid #eee' : 'none',
}));
