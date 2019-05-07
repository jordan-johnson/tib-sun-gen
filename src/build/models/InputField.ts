export interface Option {
    [key: string]: any;
}

export interface InputField {
    Name: string;
    Id: string;
    InputType: 'text' | 'range' | 'checkbox' | 'select';
    Value?: number | string | boolean;
    MapVariableBinding: string;
    Options?: Option;
}