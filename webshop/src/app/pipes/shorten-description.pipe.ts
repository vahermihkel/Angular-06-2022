import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDescription'
})
export class ShortenDescriptionPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

  // "Elas metsas mutionu, keset kuuski"
  // .split(" ")  --> ["Elas", "metsas", "mutionu,", "keset", "kuuski"]
  // .split("a")  --> ["El", "s mets", "s mutionu keset kuuski"]
  // .slice(0,2) --> ["Elas", "metsas"]
  // .join("::") --> Elas::metsas

}
