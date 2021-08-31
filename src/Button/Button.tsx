import styled, { css } from "styled-components";

const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  border: 1px solid ${dark};
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 14px;
  color: white;
  background: ${light};
  cursor: pointer;

  &:visited {
    color: white;
  }

  &:hover {
    background: linear-gradient(${light}, ${dark});
    &[disabled] {
      background: linear-gradient(${light}, ${dark});
    }
  }

  &:visited {
    color: black;
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn("#4f93ce", "#285f8f");

export const Button = styled.button<{ isPrimary?: boolean }>`
  margin-right: 10px;
  ${({ isPrimary }) => (isPrimary ? btnPrimary : btnDefault)};
`;
