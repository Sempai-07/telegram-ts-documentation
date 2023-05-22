<div style="text-align: center;">
   <h1>@telegram.ts/documentation</h1><br>
   <image src="https://raw.githubusercontent.com/Sempai-07/Telegramsjs/main/docs/avatar.png"><br>
   
   [![Bot API](https://img.shields.io/badge/Bot%20API-v.6.7-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
   [![NPM Version](https://img.shields.io/npm/v/@telegram.ts/documentation.svg?maxAge=3600)](https://www.npmjs.com/package/@telegram.ts/documentation)
   [![NPM Downloads](https://img.shields.io/npm/dt/@telegram.ts/documentation.svg?maxAge=3600)](https://www.npmjs.com/package/@telegram.ts/documentation)
   </div>

A lightweight TypeScript and JavaScript library for searching the Telegram API documentation.

## Installation

To install the library, run the following command:

```bash
npm install @telegram.ts/documentation
```

## Usage

Here's an example of how to use the library:

```typescript
import { Search } from '@telegram.ts/documentation';

const search = new Search('https://raw.githubusercontent.com/Sempai-07/@telegram.ts/documentation/main/src/BaseClient.d.ts');

(async () => {
  // Get the function declaration
  const functionDeclaration = await search.getFunction('sendPhoto');
  console.log(functionDeclaration);

  // Get the documentation link for the function
  const functionLink = await search.getFunctionLink('sendPhoto');
  console.log(functionLink);

  // Get the documentation link for an object
  const objectLink = await search.getObject('Message');
  console.log(objectLink);
})();
```

## API

### `Search`

The main class of the library.

#### Constructor

- `constructor(fileUrl: string)`: Creates a new instance of the `Search` class with the specified file URL.

#### Methods

- `getContent(): Promise<string | null>`: Retrieves the content of the file from the specified URL.

- `getFunction(functionName: string): Promise<string | null>`: Searches for a function in the file by its name and returns the function declaration.

- `getFunctionLink(functionName: string): Promise<string | null>`: Returns the documentation link for the specified function.

- `getObject(objectName: string): Promise<string>`: Returns the documentation link for the specified object.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Feel free to customize the content and structure of the `README.md` file to fit your needs.