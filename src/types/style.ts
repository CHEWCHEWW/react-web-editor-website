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
