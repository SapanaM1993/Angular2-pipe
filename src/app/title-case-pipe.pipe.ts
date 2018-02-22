import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'titleCasePipe'
})
export class TitleCasePipePipe implements PipeTransform {

  transform(input:string, length: number): string{
    return input.length > 0 ? input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() )) : '';
}
// Explaining /\w\S*/g 
//The / Is the beginning of a regex (regular expression).
// The \w looks for all word characters in a string. 
//A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
// Now the \S is any character that is NOT a whitespace character. 
//You were confusing it with \s(lowercase) which is for whitespace characters.
// The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex

}
