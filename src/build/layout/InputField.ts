export type TInputType = 'text' | 'range' | 'checkbox' | 'select';
export type TInputValue = number | string | boolean;

export interface Option {
    [key: string]: any;
}

export interface InputField {
    Name: string;
    Id: string;
    Type: TInputType;
    MapVariableBinding: string;
    Value: TInputValue;
    Options?: Option;
}