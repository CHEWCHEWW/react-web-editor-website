export interface ComponentSize {
  width: number;
  height: number;
}

export interface CircleStyleEditorBlockProps extends ComponentSize {
  left: number;
  top: number;
  parentStyle?: ComponentSize;
  unit: string;
  color: string;
}

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

export interface TextEditableBoardProps extends CircleStyleEditorBlockProps {
  backgroundColor: string;
  initialText?: string;
  initialFontSize?: number;
  parentStyle: ComponentSize;
  initialFontName?: string;
  initialFontStyle?: string;
}
