import {ReactNode} from 'react';

export enum TextVariant {
  H3 = 'H3',
  H4 = 'H4',
  H6 = 'H6',
  H7 = 'H7',
}

type TextProps = {
  children: ReactNode;
  variant: TextVariant;
};

export const Text = ({children, variant}: TextProps) => {
  const variantStyle = variantStyleMap[variant];
  return <p className={`${variantStyle}`}>{children}</p>;
};

const variantStyleMap = {
  [TextVariant.H3]: 'text-[20px] font-bold tracking-[.1px]',
  [TextVariant.H4]: 'text-[15px] font-bold tracking-[.2px]',
  [TextVariant.H6]: 'text-[15px] font-normal tracking-[.1px]',
  [TextVariant.H7]: 'text-[12px] font-bold tracking-[.1px]',
};
