import { ReactNode } from 'react';

export interface ParagraphProps {
    $larger?: boolean;
    $accent?: boolean;
    $textAlignCenter?: boolean;
    text?: string | number;
}