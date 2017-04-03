// "Take everything from these files and export it from index.js"

// To import a component from this file, write in that file:
// import { } from './component/common';
// when importing from a folder without specifying the file, it will
//automatically look from index.js

export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './CallButton';
export * from './MessageBtn';

//When using this syntax for common components, go to each file and export as follows:
//export { Button };
//export { Card };
//...
