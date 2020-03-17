import { Utils } from '@boilerplate-monorepo/common';
import { A11y } from '@boilerplate-monorepo/ui-common';
import { bool, func, node, string } from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { CustomProperty } from 'types/customProperties';
import { Context } from './context';
import { Size } from './size';
import { Style } from './style';
import { Type } from './type';

const { Role } = A11y;

const styles = css`
  border-radius: 0.125rem;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: grid;
  justify-items: center;
  opacity: 0.95;
  text-align: center;
  transition: opacity ${CustomProperty.TRANSITION_DELAY} ${
  CustomProperty.TRANSITION_TIMING_FUNCTION
};
  width: 100%;

  /* stylelint-disable-next-line order/properties-alphabetical-order */
  ${Style.context}
  ${Style.size}

  &:active,
  &:focus,
  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line order/properties-alphabetical-order */
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.7;
      pointer-events: none;

      &:active,
      &:focus,
      &:hover {
        cursor: default;
        opacity: 0.7;
        pointer-events: none;
      }
    `}

  ${({ isAutoWidth }) =>
    isAutoWidth &&
    css`
      width: fit-content;
    `}

  /* stylelint-disable-next-line order/properties-alphabetical-order */
  ${({ className }) => className}
`;

const Container = styled.button`
  ${styles}
`;

const Button = ({
  children,
  className,
  context,
  disabled,
  isAutoWidth,
  label,
  onClick,
  text,
  type,
  ...props
}) => (
  <Container
    {...props}
    aria-disabled={disabled}
    aria-label={label || text}
    className={className}
    context={context}
    disabled={disabled}
    isAutoWidth={isAutoWidth}
    onClick={onClick}
    role={Role.BUTTON}
    type={type}
  >
    {children || text}
  </Container>
);

Button.defaultProps = {
  children: undefined,
  className: undefined,
  context: Context.DEFAULT,
  disabled: false,
  isAutoWidth: false,
  label: undefined,
  onClick: Utils.noop,
  size: Size.DEFAULT,
  type: Type.BUTTON,
};

Button.propTypes = {
  children: node,
  className: string,
  context: Context.propTypes,
  disabled: bool,
  isAutoWidth: bool,
  label: ({ label, text }) => {
    if (text || label) return undefined;

    return new Error('The `label` prop is required when no text is set');
  },
  onClick: func,
  size: Size.propTypes,
  text: ({ children, text }) => {
    if (children || text) return undefined;

    return new Error(
      `The 'text' prop is required when no children are provided`
    );
  },
  type: Type.propTypes,
};

export { Button, Context, Size, styles };
