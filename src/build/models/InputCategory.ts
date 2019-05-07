import { InputField } from "./InputField"

export interface InputCategory {
    Name: string;
    
    // Group of input fields
    Fields: InputField[][];
}