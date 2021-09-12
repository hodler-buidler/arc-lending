import { FC } from 'react';
import Skeleton, { SkeletonTheme, SkeletonProps } from "react-loading-skeleton";

export type UiSkeletonProps = SkeletonProps & {
  color?: string;
  highlightColor?: string;
};

const UiSkeleton: FC<UiSkeletonProps> = (props) => {
  return (
    <SkeletonTheme
      color={props.color}
      highlightColor={props.highlightColor}
    >
      <Skeleton {...props} />
    </SkeletonTheme>
  ); 
}

UiSkeleton.defaultProps = {
  color: '#202020',
  highlightColor: '#444444',
}

export default UiSkeleton;