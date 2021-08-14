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
