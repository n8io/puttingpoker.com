import React from 'react';
import { Body, Content, Header, Breadcrumbs, Breadcrumb } from 'shared/Content';
import { Link } from 'shared/Link';
import { Page } from 'shared/Page';
import { useTranslate } from 'shared/useTranslate';
import { Route } from 'types/route';

const SignUp = () => {
  const t = useTranslate({
    component: 'signup',
    namespace: 'signup',
  });

  return (
    <Page>
      <Content>
        <Breadcrumbs>
          <Breadcrumb isEnd text={t('title')} to={Route.SIGNUP.path} />
        </Breadcrumbs>
        <Header title={t('title')} />
        <Body>
          &lt;signup&gt; or <Link to={Route.LOGIN.path}>{t('login')}</Link>
        </Body>
      </Content>
    </Page>
  );
};

export { SignUp };
