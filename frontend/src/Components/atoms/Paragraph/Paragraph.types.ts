import { ReactNode } from 'react';

export interface ParagraphProps {
    $larger?: boolean;
    $accent?: boolean;
    $textAlignCenter?: boolean;
    children: ReactNode;
}