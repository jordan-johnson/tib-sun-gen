export interface Option {
    [key: string]: any;
}

export interface InputField {
    Name: string;
    Id: string;
    InputType: 'text' | 'range' | 'checkbox' | 'select';
    MapVariableBinding: string;
    Value: number | string | boolean;
    Options?: Option;
}