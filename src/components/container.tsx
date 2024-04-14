import React from 'react'

type ContainerProps = {
  styles: React.CSSProperties;
  children: Iterable<React.ReactNode>;
};
export default function Container({styles, children}: ContainerProps) {
  return (
    <div style={styles}>{children}</div>
  )
}
