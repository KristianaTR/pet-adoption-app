export interface InputProps {
    ref?: (element: HTMLInputElement | null) => void;
    type: string;
    placeholder?: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
}