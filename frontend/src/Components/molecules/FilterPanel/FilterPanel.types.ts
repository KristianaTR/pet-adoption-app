export interface FilterPanelProps {
  filterOptions: {
    category: string;
    values: string[];
  }[];
  isOpen: boolean;
}
