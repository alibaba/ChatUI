interface LazyComponentBaseProps {
  fallback?: NonNullable<React.ReactNode> | null;
  onError?: (error: Error, info?: React.ErrorInfo) => void;
  [k: string]: any;
}

export interface LazyComponentPropsWithComponent extends LazyComponentBaseProps {
  component: React.ComponentType | null;
}

export interface LazyComponentOnLoadParams {
  async: boolean;
  component: React.ComponentType<any>;
}

export interface LazyComponentPropsWithCode extends LazyComponentBaseProps {
  code: string;
  onLoad?: (e: LazyComponentOnLoadParams) => void;
}

export type LazyComponentProps = LazyComponentPropsWithComponent | LazyComponentPropsWithCode;
