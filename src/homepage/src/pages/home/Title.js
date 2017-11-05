import React from 'react';
import styled from 'styled-components';

import { sandboxUrl } from 'app/utils/url-generator';

import media from '../../utils/media';
import { fadeIn } from '../../utils/animation';
import RollingText from '../../components/RollingText';
import Button from '../../components/Button';

const Container = styled.div`
  color: white;
  flex: 2;

  ${media.tablet`
    flex: 1;
    transform: none;
  `};
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 4rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  ${media.tablet`
    text-align: center;
  `};

  ${media.phone`
    font-size: 3rem;
  `};
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1.2;
  padding-bottom: 2rem;

  color: rgba(255, 255, 255, 0.9);

  ${fadeIn(0.4)};

  ${media.tablet`
    text-align: center;
  `};

  ${media.phone`
    font-size: 1.5rem;
  `};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
  ${fadeIn(0.5)};
  font-size: 1.25rem;

  a {
    margin-right: 1rem;

    ${media.tablet`
      margin: 0;
      text-align: center;
      margin-right: 0;
    `};
  }

  ${media.tablet`
      margin: 0 1rem;
      justify-content: space-around;
      width: 100%;
      text-align: center;

    `};

  ${media.phone`
    font-size: .875rem;
  `};
`;

const ResponsiveRollingText = styled(RollingText)`
  ${media.tablet`
    width: 100%;
  `};
`;

const Primary = styled.div`
  display: inline-block;
  ${fadeIn(0.3)};
  color: ${props => props.theme.primary};
`;

const Secondary = styled.div`
  display: inline-block;
  ${fadeIn(0.2)};
  color: ${props => props.theme.secondary};
`;

export default ({ template }) => (
  <Container>
    <Title>
      <Secondary>Code</Secondary>
      <Primary>Sandbox</Primary>
    </Title>
    <SubTitle>
      The online code editor for&nbsp;
      <RollingText width="12rem">
        <span style={{ color: template.color() }}>{template.niceName}</span>
      </RollingText>
    </SubTitle>

    <ResponsiveRollingText>
      <Buttons>
        <Button
          href={sandboxUrl({ id: template.shortid })}
          color={template.color}
        >
          Open {template.niceName}
        </Button>

        <Button
          href={sandboxUrl({ id: template.shortid })}
          color={template.color}
          secondary
        >
          Explore Examples
        </Button>
      </Buttons>
    </ResponsiveRollingText>
  </Container>
);