import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type HeaderTypeProps={
  isBorder: boolean;
}

export const HeaderCont = styled.section((props:HeaderTypeProps) => ({
  borderBottom: props.isBorder ? '1px solid #eee' : 'none',
}));

export const MotionDiv = styled(motion.div)`
  width: 500px;
  height: calc(100vh/3);
`;
