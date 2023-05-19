export interface CommonProps {
  id?: string;
  heading?: string | string[];
  body?: string | string[];
  classes?: string | string[];
  label?: string;
  ariaLabel?: string;
  href?: string;
  width?: number;
  height?: number;
  toolTip?: boolean;
  shortText?: boolean;
  htmlEl?: boolean;
  dark?: boolean;
  style?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'transparent'
    | 'error'
    | 'accent'
    | 'light'
    | 'white';

  side?: 'left' | 'right' | 'top' | 'bottom';

  images?: {
    id?: string | string[];
    InternalId?: string | string[];
    name?: string | string[];
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    side?: 'left' | 'right' | 'top' | 'bottom';
  };
  icon?: {
    name: string | string[];
    side?: 'left' | 'right' | 'top' | 'bottom';
  };
}
