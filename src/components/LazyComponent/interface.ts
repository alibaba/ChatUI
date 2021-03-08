interface LazyComponentBaseProps {
  fallback?: NonNullable<React.ReactNode> | null;
  onError?: (error: Error, info?: React.ErrorInfo) => void;
  [k: string]: any;
}

export interface LazyComponentPropsWithComponent extends LazyComponentBaseProps {
  component: React.ComponentType | null;
}

export interface LazyComponentPropsWithCode extends LazyComponentBaseProps {
  code: string;
  onLoad?: (e: { async: boolean; component: React.ComponentType<any> }) => void;
}

export type LazyComponentProps = LazyComponentPropsWithComponent | LazyComponentPropsWithCode;
