export interface IButton {
    variation?: string;
    buttonText: string;
  };

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }