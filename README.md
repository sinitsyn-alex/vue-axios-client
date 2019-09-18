# vue-axios-client

## Installation

```bash
npm install vue-axios-client
# or
yarn add vue-axios-client
```

## Usage

Install the plugin to use it

```js
import axios from 'axios'
import VueAxiosClient from 'vue-axios-client'

Vue.use(VueAxiosClient, { axios })
```

## API Reference

### `AxiosRequest` component

#### Props

| Name            | Description                                                                              | Type                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `axios`         | Axios instance                                                                           | `Function` [See details](https://github.com/axios/axios#creating-an-instance) |
| `config`        | Axios request config                                                                     | `Object` [See details](https://github.com/axios/axios#request-config)         |
| `lazy`          | Lazy request. If `true` use `request` in [scoped slot](#scoped-slot). Defaults to `false` | `Boolean`                                                                    |
| `pendingDelay`  | Delay in ms to wait before displaying the `isLoading` in default slot. Defaults to `200` | `Number, String`                                                              |
| `tag`           | String HTML tag name (default: `div`); if falsy (for example `null` or `undefined`),     | `String`                                                                      |
|                 | the component will be renderless (the content won't be wrapped in a tag),                |                                                                               |
|                 | in this case, only the first child will be rendered                                      |                                                                               |
| `transformData` | Function to transform the result `data`, useful for picking a specific part of the response. | `Function`                                                                |
|                 | Example: `:transformData="data => data.user.messages"`                                   |                                                                               |

#### Scoped slot
...

#### Events
...

## License

[MIT](http://opensource.org/licenses/MIT)
